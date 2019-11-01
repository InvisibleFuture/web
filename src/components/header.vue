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
    padding: 0;
    margin: 0;
    display: flex;
    margin-right: auto;
  }
  a {
    line-height: 64px;
    padding: 0 20px;
    color: #ffffff;
  }
  .user {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
}
</style>
<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/contact">云文件</router-link>
        </li>
        <li>
          <router-link to="/helloworld">广场</router-link>
        </li>
      </ul>
      <div class="user">
        <img alt="last" src="../assets/70914.png" />
        <a href="#">Last</a>
      </div>
    </nav>
  </header>
</template>