<style lang="less" scoped>
a {
  color: #42b983;
}
.news {
  padding: 20px 32px;
  width: 100%;
  background: #ffffff;
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
    border-collapse: collapse;
    tr {
      transition: all 0.6s;
      color: #333;
       th {
        vertical-align: middle;
        padding: 14px 8px;
        span {
          padding-right: 5px;
        }
      }
      td {
        //vertical-align: middle;
        //border-bottom: 1px solid #f2f2f2;
        //border-top: 1px solid transparent;
        padding: 0;
        line-height: 40px;
        font-size: 12px;
        i {
          color: #ee5555;
          font-size: 20px;
          margin: 0 10px;
        }
      }
    }
    tr:hover {
      color: #ae2b34;
      background: #fff2f2;
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
        <td>
          <input type="checkbox" name="category" value="今日话题" />
          <i class="fa fa-file"></i>
          <span v-text="item.name"></span>
        </td>
        <td v-text="item.time"></td>
        <td v-text="item.size"></td>
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
          type: "pdf",
          name: "중요한%20제품%20정보.pdf",
          time: "2019-02-04 21:58",
          size: "1024KB",
        },
        {
          id: "2",
          type: "pdf",
          name: "重要な製品情報.pdf",
          time: "2019-02-04 21:58",
          size: "1024KB",
        },
        {
          id: "3",
          type: "pdf",
          name: "Importanti informazioni sul prodotto.pdf",
          time: "2019-02-04 21:58",
          size: "1024KB",
        }
      ]
    };
  }
};
</script>