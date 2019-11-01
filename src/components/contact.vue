<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.contact {
  width: 100%;
  display: flex;
  overflow: auto;
  padding: 20px 32px;
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 0 10px;
      table {
        width: 100%;
        max-width: 100%;
        tr {
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
            img {
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="contact">
    <ul>
      <li v-for="group in groups" v-bind:key="group.id">
        <table>
          <tr>
            <th colspan="10">
              <!-- 使用 TAG 分组 -->
              <span v-text="group.name"></span>
              <span>(共 x 人)</span>
            </th>
          </tr>
          <tr v-for="user in group.children" v-bind:key="user.id">
            <td>
              <img src="../assets/-4fb6-91e4-25182fc5c8e2.jpg" />
            </td>
            <td v-text="user.name"></td>
            <td v-text="user.email"></td>
            <td v-text="user.phone"></td>
            <td v-text="user.back"></td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contact",
  data: function() {
    return {
      count: 0,
      groups: [
        {
          id: "1",
          name: "财务部",
          children: [
            {
              id: "1",
              name: "我的团队群",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "2",
              name: "全部文件",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "3",
              name: "记录",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "4",
              name: "文档",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "5",
              name: "文集",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "6",
              name: "其他",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "7",
              name: "我的收藏",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "8",
              name: "我的分享",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            },
            {
              id: "9",
              name: "回收站",
              email: "user26@dzzoffice.com",
              phone: "13954799631",
              back: "暂无"
            }
          ]
        }
      ],
      items: [
        { id: "1", name: "我的团队群" },
        { id: "2", name: "全部文件" },
        { id: "3", name: "记录" },
        { id: "4", name: "文档" },
        { id: "5", name: "文集" },
        { id: "6", name: "其他" },
        { id: "7", name: "我的收藏" },
        { id: "8", name: "我的分享" },
        { id: "9", name: "回收站" }
      ]
    };
  }
};
</script>
