<style lang="less" scoped>
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
              <span v-text="doc.name"></span>
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
</template>

<script>
export default {
  //components: {
  //  nodegroup: () => import("./nodegroup.vue"),
  //},
  data: function() {
    return {
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
      ]
    };
  },
  methods: {
    link: function(docid){
      // this.
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