<style lang="less" scoped>
.list {
  padding: 20px 32px;
  width: 100%;
  overflow: auto;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 100px;
      width: 100px;
      margin: 2px;
      overflow: hidden;
      background: #ff1414 center;
      background-size: cover;
      img {
        //width: 100%;
        //max-height: 100%;
        //height: 100px;
        //width: 100px;
        background: #ffffff;
        object-fit: cover;
      }
    }
  }
}
</style>
<template>
  <div class="list">
    <ul>
      <li v-for="item in list" v-bind:key="item.id" :style="'background-image:url('+item.name+')'">
        <!--img alt="logo" :src="item.name" /-->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      list: [
        { id: "1", name: "11.png" },
        { id: "2", name: "12.png" },
        { id: "3", name: "13.png" },
        { id: "4", name: "14.png" },
        { id: "5", name: "15.png" },
        { id: "6", name: "1.jpg" },
        { id: "7", name: "2.jpg" },
        { id: "8", name: "3.jpg" }
      ]
    };
  }
};
</script>