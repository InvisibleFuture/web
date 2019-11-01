<style lang="less" scoped>
a {
  color: #42b983;
}
.wiki {
  padding: 20px 32px;
  width: 100%;
  > ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      margin: 0 10px;
    }
  }
  > table {
    width: 100%;
    max-width: 100%;
    tr {
      transition: all 0.6s;
      th {
        vertical-align: middle;
        border-bottom: 1px solid #f2f2f2;
        padding: 14px 8px;
        span {
          padding-right: 5px;
        }
      }
      td {
        vertical-align: middle;
        border-bottom: 1px solid #f2f2f2;
        border-top: 1px solid transparent;
        padding: 14px 8px;
      }
    }
    tr:hover {
      background: #e6e8eb;
    }
  }
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
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 28px;
  }
}
</style>

<template>
  <div class="wiki">
    <transition name="fade" mode="out-in">
      <div class="item" v-if="wiki.show" @keyup.esc="submit" tabindex="0" v-focus>
        <button @click="submit">
          <i class="fa fa-quote-right"></i>
        </button>
        <node></node>
        <wiki></wiki>
      </div>
    </transition>
    <ul>
      <li>已发布</li>
      <li>未读</li>
      <li>未读</li>
      <li>待审核</li>
      <li>草稿</li>
    </ul>
    <table>
      <tr v-for="item in list" v-bind:key="item.id" @click="disp">
        <td v-text="item.name"></td>
        <td v-text="item.username"></td>
        <td v-text="item.time"></td>
        <td v-text="item.discuss"></td>
        <td v-text="item.view"></td>
      </tr>
    </table>
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
          name: "啊啊啊发",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "2",
          name: "啊啊啊发",
          username: "冯艳艳",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "3",
          name: "啊啊啊发",
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
        show: true
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