<style lang="less" scoped>
header {
  width: 100%;
  height: 64px;
}
nav {
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #ffffff;
  background: #e11d2a;
  user-select: none;
  display: flex;
  ul {
    list-style: none;
    padding: 0 15px;
    margin: 0;
    display: flex;
    margin-right: auto;
    li {
      min-width: 90px;
      > a {
        line-height: 64px;
        padding: 0 20px;
        color: #ffffff;
        font-weight: 600;
        display: block;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    padding: 0 8px;
    a {
      padding: 0 20px;
      color: #ffffff;
      //background: #888888;
    }
    img {
      width: 32px;
      height: 32px;
      border: 2px solid hsla(0, 0%, 100%, 0.325);
      border-radius: 50%;
      transition: all 0.3s;
    }
  }
  .user:hover {
    img {
      width: 36px;
      height: 36px;
    }
  }
  > input {
    display: table;
    width: 100%;
    max-width: 280px;
    height: 28px;
    padding: 0 8px;
    margin: auto 10px;
    font-size: inherit;
    font-weight: 400;
    color: #fff;
    vertical-align: middle;
    background-color: hsla(0, 0%, 100%, 0.125);
    border: 0;
    box-shadow: none;
    min-height: 28px;
    line-height: 20px;
    border-radius: 3px;
    outline: none;
    transition: all 0.6s;
  }
  > input:hover, >input:focus {
    max-width: 320px;
    padding-left: 15px;
  }
  > input::-webkit-input-placeholder {
    color: hsla(0, 0%, 100%, 0.7);
    padding: 0 8px;
  }
}
.signin {
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 240px;
    //height: 320px;
    //background: #e11d2a;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    > input {
      padding: 0 4px;
      line-height: 32px;
      border: none;
      border-bottom: 1px solid #888888;
    }
    > button {
      margin: 10px 0;
      line-height: 32px;
    }
  }
}
</style>
<template>
  <header>
    <nav>
      <input v-model="search" placeholder="Search" />
      <ul>
        <li>
          <router-link to="/cloud">云文件</router-link>
        </li>
        <li>
          <router-link to="/helloworld">广场</router-link>
        </li>
      </ul>
      <div v-if="user.online" class="user">
        <img :alt="user.name" :src="user.avatar" />
        <router-link to="/user" v-text="user.name"></router-link>
        <a href="#" @click="signout">Exit</a>
      </div>
      <div v-else class="user">
        <a href="#" @click="signshow">Sign in</a> | Registered
        <transition name="fade" mode="out-in">
          <div v-if="sign.show" class="signin">
            <div>
              <input type="text" placeholder="account" v-model="sign.account" />
              <input type="text" placeholder="password" v-model="sign.password" />
              <button @click="signin">Sign in</button>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>
<script>
import axios from "axios";
import config from "../config.js";
export default {
  data: function() {
    return {
      search: "",
      user: {
        online: false,
        id: "",
        token: "",
        name: "",
        avatar: ""
      },
      sign: {
        show: false,
        account: "Last",
        password: "00000000"
      }
    };
  },
  mounted: function() {
    this.signrenew();
  },
  methods: {
    signrenew: function() {
      this.user.id = config.StorageGet("id");
      this.user.token = config.StorageGet("token");
      if (this.user.id == null || this.user.token == null) {
        return; // bug is undefined
      }
      //alert(this.user.id.length)
      axios({
        method: "get",
        url: config.server + "/signrenew",
        params: { uid: this.user.id, token: this.user.token }
      })
        .then(response => {
          if (response.data.Code != 0) {
            alert(response.data.Data);
            return;
          }
          //alert(response.data.Data);
          this.user.id = response.data.Data.ID;
          this.user.token = response.data.Data.Token;
          this.user.name = response.data.Data.Name;
          this.user.avatar = response.data.Data.Avatar;
          this.user.online = true;
          config.StorageSet("id", this.user.id);
          config.StorageSet("token", this.user.token);
        })
        .catch(error => {
          alert(error);
        });
    },
    signshow: function() {
      this.sign.show = true;
    },
    signout: function() {
      this.user.id = config.StorageGet("id");
      this.user.token = config.StorageGet("token");
      //alert(this.user.token)
      if (this.user.id == "" || this.user.token == "") {
        return;
      }
      axios({
        method: "get",
        url: config.server + "/signout",
        params: {
          uid: this.user.id,
          token: this.user.token
        }
      }).then(response => {
        if (response.data.Code != 0) {
          alert(response.data.Data);
          return;
        }
        this.user.online = false;
        this.user.id = "";
        this.user.name = "";
        this.user.avatar = "";
        config.StorageDel("id");
        config.StorageDel("token");
        alert(response.data.Data);
      });
      //.catch(error => {
      //console.log(error)
      //alert(error);
      //});
      // 还需要通知子路由页面隐藏登录允许操作的项目
    },
    signin: function() {
      if (
        this.sign.account == "" ||
        this.sign.password == "" ||
        this.sign.account.length > 32 ||
        this.sign.password.length > 32
      ) {
        return false;
      }

      axios({
        method: "get",
        url: config.server + "/signin",
        params: { account: this.sign.account, password: this.sign.password }
      })
        .then(response => {
          if (response.data.Code != 0) {
            alert(response.data.Data);
            return;
          }
          config.StorageSet("id", response.data.Data.ID);
          config.StorageSet("token", response.data.Data.Token);
          this.user.id = response.data.Data.ID;
          this.user.name = response.data.Data.Name;
          this.user.avatar = response.data.Data.Avatar;
          this.user.online = true;
          this.sign.show = false;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>