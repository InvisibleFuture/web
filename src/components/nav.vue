<style lang="less" scoped>
nav {
  width: 200px;
  min-width: 200px;
  border-right: 1px solid #e8e8e8;
  background: #fbfbfb;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  img {
    width: 84px;
    margin: 15px auto;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    li {
      a {
        display: block;
        padding: 0 25px;
        height: 40px;
        line-height: 40px;
        transition: all 0.6s;
        color: #838383;
      }
      a:hover {
        color: #424242;
        background: #f2f2f2;
      }
    }
  }
}
.router-link-exact-active {
    color: #ae2b34;
    background: #f9e5e5 !important;
}
</style>

<template>
  <nav>
    <img alt="logo" src="../assets/logo.png" />
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <router-link v-text="item.name" :to="item.url"></router-link>
      </li>
    </ul>
    <p class="end">剩余容量 1.2TB</p>
  </nav>
</template>

<script>
export default {
  name: "webnav",
  data: function() {
    return {
      count: 0,
      items: [
        { id: "0", name: "新闻(news)", url: "/news" },
        { id: "1", name: "团队(team)", url: "/contact" },
        { id: "2", name: "文件(file)", url: "/file" },
        { id: "3", name: "记录(note)", url: "/note" },
        { id: "4", name: "文档(word)", url: "/word" },
        { id: "5", name: "文集(wiki)", url: "/wiki" },
        { id: "6", name: "其他", url: "/other" },
        { id: "7", name: "我的收藏", url: "/mark" },
        { id: "8", name: "我的分享", url: "/shared" },
        { id: "9", name: "回收站", url: "/recycling" }
        /* 照片 影片 图像 矢量 CAD 3D模型 */
      ]
    };
  }
};
</script>