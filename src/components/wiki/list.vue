<style lang="less" scoped>
a {
  color: #42b983;
}
.item {
  background: rgba(255, 255, 255, 1);
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
  > ul {
    position: absolute;
    top: 0;
    right: 20px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    li {
      height: 30px;
      line-height: 30px;
      button {
        //position: absolute;
        //top: 20px;
        //right: 30px;
        background: none;
        border: none;
        font-size: 28px;
        line-height: 30px;
        color: #555555;
        margin-left: 20px;
      }
      button:hover {
        color: #000;
      }
      .online {
        list-style: none;
        margin: 0;
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        //background: #42b983;
        li {
          margin: 0 -5px;
          font-size: 24px;
          color: #555;
          transition: all 0.6s;
          img {
            width: 24px;
            height: 24px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
          }
        }
      }
      .online:hover {
        li {
          margin: 0 0;
          padding-right: 2px;
        }
      }
    }
  }
}
.wikilist {
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
.wiki {
  //background: #ff1141;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.user {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 2px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }
  }
}
.node {
  width: 300px;
  padding: 16px;
  //background: #f2f2f2;
  text-align: left;
  overflow: auto;
  > ul {
    list-style: none;
    padding: 10px;
    margin: 0;
    > li {
      h2 {
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          display: flex;
        }
        i {
          //display: none;
          padding-left: 8px;
        }
      }
      > div input {
        padding-top: 3px;
        padding-bottom: 3px;
        font-size: 12px;
        line-height: 20px;
        margin-left: 8px;
        //flex: 1 1 auto !important;
        padding: 6px 8px;
        color: #24292e;
        vertical-align: middle;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        outline: none;
        box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
      }
      //h2:hover {
      //  i {
      //    display: block;
      //  }
      //}
      > ul {
        > li {
          padding: 0;
          margin: 0;
          line-height: 32px;
          h3 {
            padding: 0;
            margin: 0;
            font-size: 14px;
            line-height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
              display: flex;
            }
            i {
              display: none;
              padding-left: 8px;
            }
          }
        }
        > li:hover {
          background: rgba(255, 220, 220, 0.5);
          h3 {
            i {
              display: block;
            }
          }
        }
      }
    }
    > li.add {
      margin-top: 16px;
      line-height: 48px;
      text-align: center;
      border: 1px dashed #959da5;
      border-radius: 6px;
      user-select: none;
    }
    > li.add:hover {
      background: rgba(255, 220, 220, 0.5);
      border: 1px dashed rgba(255, 220, 220, 0.8);
    }
  }
}
</style>

<template>
  <div class="wikilist">
    <ul class="list">
      <li v-for="item in list" v-bind:key="item.id" @click="on">
        <img alt="logo" src="../../assets/logo.png" />
        <p v-text="item.name"></p>
      </li>
    </ul>

    <transition name="fade" mode="out-in">
      <div class="item" v-if="wiki.show" :wikiid="wiki.id" @keyup.esc="off" tabindex="0" v-focus>
        <ul>
          <li>
            <button @click="off">
              <i class="fa fa-times"></i>
            </button>
          </li>
          <li>
            <ul class="online">
              <li v-for="user in users" v-bind:key="user.id">
                <img
                  src="../../assets/-4fb6-91e4-25182fc5c8e2.jpg"
                  :alt="user.name"
                  :title="user.name"
                />
              </li>
              <li>
                <i class="fa fa-plus"></i>
              </li>
            </ul>
          </li>
        </ul>
        <!--node></node-->
        <div class="node">
          <ul>
            <li v-for="group in node" v-bind:key="group.id">
              <!--nodegroup :gid="group.id" :gname="group.name" :glist="group.list"></nodegroup-->
              <h2>
                <span v-text="group.name"></span>
                <div>
                  <i class="fa fa-plus" @click="Add(group.id)"></i>
                  <i class="fa fa-menu"></i>
                  <i class="fa fa-trash" @click="DelGroup(group.id)"></i>
                </div>
              </h2>
              <div v-if="group.add">
                <input type="text" v-model="group.addname" @keyup.enter="AddDoc(group.id)" v-focus />
              </div>
              <ul>
                <li v-for="doc in group.list" v-bind:key="doc.id">
                  <h3>
                    <span v-text="doc.name" @click="link(doc.id)"></span>
                    <div>
                      <i class="fa fa-edit"></i>
                      <i class="fa fa-trash" @click="DelDoc(group.id, doc.id)"></i>
                    </div>
                  </h3>
                </li>
              </ul>
            </li>
            <li class="add" @click="AddGroup">
              <i class="fa fa-plus">Add group</i>
            </li>
          </ul>
        </div>
        <!--wiki></wiki-->
        <div class="wiki">
          <p v-text="wiki.id"></p>
          <ul class="markdown">
            <li v-for="item in wiki.markdown" v-bind:key="item.id">
              <p v-if="item.type == 'p'" v-text="item.info"></p>
              <img v-else-if="item.type == 'img'" :src="item.info" />
              <h1 v-else-if="item.type == 'h1'" v-text="item.info"></h1>
              <h2 v-else-if="item.type == 'h2'" v-text="item.info"></h2>
              <h3 v-else-if="item.type == 'h3'" v-text="item.info"></h3>
              <h4 v-else-if="item.type == 'h4'" v-text="item.info"></h4>
              <h5 v-else-if="item.type == 'h5'" v-text="item.info"></h5>
              <h6 v-else-if="item.type == 'h6'" v-text="item.info"></h6>
              <p v-else v-text="item"></p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      users: [
        { id: "1", name: "Last", img: "/img/-4fb6-91e4-25182fc5c8e2.jpg" },
        { id: "2", name: "Last", img: "/img/-4fb6-91e4-25182fc5c8e2.jpg" },
        { id: "3", name: "Last", img: "/img/-4fb6-91e4-25182fc5c8e2.jpg" },
        { id: "4", name: "Last", img: "/img/-4fb6-91e4-25182fc5c8e2.jpg" },
        { id: "5", name: "Last", img: "/img/-4fb6-91e4-25182fc5c8e2.jpg" }
      ],
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
      node: [
        {
          id: "1",
          name: "档案分组",
          list: [
            {
              id: "2",
              name: "文档单文件",
              list: [{ id: "3", name: "档案内分段 h2, 分段内分段 h3 h4 h5 h6" }]
            }
          ],
          add: false,
          addname: "122"
        },
        {
          id: "2",
          name: "agcasoi",
          list: [
            { id: "2", name: "档案内分段 h2" },
            { id: "3", name: "档案内分段 h3" },
            { id: "4", name: "档案内分段 h4" }
          ],
          add: false,
          addname: "213"
        }
      ],
      wiki: {
        show: false,
        id: "12",
        markdown: [
          { id: "1", type: "p", info: "2333" },
          { id: "2", type: "h2", info: "2333" },
          { id: "3", type: "h3", info: "2333" },
          { id: "4", type: "h5", info: "2333" },
          { id: "5", type: "span", info: "2333" },
          { id: "6", type: "text", info: "2333" },
          { id: "7", type: "text", info: "2333" },
          { id: "8", type: "text", info: "2333" },
          { id: "9", type: "text", info: "2333" }
        ]
      }
    };
  },
  methods: {
    off: function() {
      this.wiki.show = false; // 关闭浮层
    },
    on: function() {
      this.wiki.show = true; // 打开浮层
    },
    link: function(docid) {
      this.wiki.id = docid
      // 点击时更新文档, 实际不需要传递id了
      // 如果点击不是当前id 则 Get
    },
    Add: function(groupid) {
      this.node = this.node.filter(t => {
        if (t.id == groupid) {
          t.add = t.add ? false : true;
        }
        return t;
      });
    },
    AddGroup: function() {
      // 需要通知服务器
      // 临时使用时间戳替代id
      let name = prompt("新建分组", "");
      if (name == "" || name.length > 32) {
        return;
      }
      let newid = new Date().valueOf();
      let group = { id: newid, name: name, list: [], add: false, addname: "" };
      this.node.push(group);
    },
    DelGroup: function(id) {
      // 需要通知服务器
      this.node = this.node.filter(t => t.id != id);
    },
    AddDoc: function(groupid) {
      // 需要通知服务器
      this.node = this.node.filter(t => {
        if (t.id == groupid) {
          let newid = new Date().valueOf();
          let doc = { id: newid, name: t.addname, list: [] };
          t.list.push(doc);
        }
        return t;
      });
    },
    DelDoc: function(groupid, docid) {
      // 需要通知服务器
      this.node = this.node.filter(t => {
        if (t.id == groupid) {
          t.list = t.list.filter(d => d.id != docid);
        }
        return t;
      });
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