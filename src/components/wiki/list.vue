<style lang="less" scoped>
a {
  color: #42b983;
}
.item {
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  .view {
    color: #000;
  }
  button {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    font-size: 28px;
    color: #555555;
  }
  button:hover {
    color: #000;
  }
}
.wiki {
  padding: 20px 32px;
  width: 100%;
  ul.list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    user-select: none;
    li {
      height: 122px;
      width: 126px;
      margin: 4px;
      border-radius: 3px;
      //background: #42b983;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin: auto;
        max-width: 110px;
        max-height: 100px;
        //background: #000;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 8px;
        line-height: 20px;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 90%;
      }
    }
    li:hover {
      background: #e6e8eb;
    }
  }
}
</style>

<template>
  <div class="wiki">
    <ul class="list">
      <li v-for="item in list" v-bind:key="item.id" @click="disp">
        <img alt="logo" src="../../assets/logo.png" />
        <p v-text="item.name"></p>
      </li>
    </ul>

    <transition name="fade" mode="out-in">
      <div class="item" v-if="wiki.show" @keyup.esc="submit" tabindex="0" v-focus>
        <button @click="submit">
          <i class="fa fa-times"></i>
        </button>
        <node></node>
        <wiki></wiki>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "news",
  components: {
    node: () => import("./node.vue"),
    wiki: () => import("./wiki.vue")
  },
  data: function() {
    return {
      list: [
        {
          id: "1",
          name: "CSO_FullInstaller_OBT_CHN131022",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "2",
          name: "已压缩_PF6-15.jpg",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "3",
          name: "FQHY_Ghost_XP_SP3_v201311.iso",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "4",
          name: "啊啊啊发",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        }
      ],
      wiki: {
        show: false
      }
    };
  },
  methods: {
    submit: function() {
      this.wiki.show = false; // 关闭浮层
    },
    disp: function() {
      this.wiki.show = true; // 打开浮层
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>