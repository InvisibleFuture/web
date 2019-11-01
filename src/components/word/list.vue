<style lang="less" scoped>
a {
  color: #42b983;
}
.news {
  padding: 20px 32px;
  width: 100%;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      margin: 0 10px;
    }
  }
  table {
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
</style>

<template>
  <div class="news">
    <ul>
      <li>已发布</li>
      <li>未读</li>
      <li>未读</li>
      <li>待审核</li>
      <li>草稿</li>
    </ul>
    <table>
      <tr v-for="item in list" v-bind:key="item.id">
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
  data: function() {
    return {
      list: [
        {
          id: "1",
          name: "啊啊啊阿斯顿发阿斯顿发",
          username: "觉",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "2",
          name: "啊啊啊阿斯顿发阿斯顿发",
          username: "觉",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "3",
          name: "啊啊啊阿斯顿发阿斯顿发",
          username: "觉",
          time: "20190204",
          discuss: "12",
          view: "22"
        }
      ]
    };
  }
};
</script>