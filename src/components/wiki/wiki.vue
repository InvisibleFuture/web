<style lang="less" scoped>
.wiki {
  //background: #ff1141;
  width: 100%;
  height: 100%;
  overflow:auto;
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
</style>
<template>
  <div class="wiki">
    <ul class="markdown">
      <li v-for="item in markdown" v-bind:key="item.id">
        <p v-if="item.type == 'p'" v-text="item.info"></p>
        <img v-else-if="item.type == 'img'" :src="item.info">
        <h1 v-else-if="item.type == 'h1'" v-text="item.info"></h1>
        <h2 v-else-if="item.type == 'h2'" v-text="item.info"></h2>
        <h3 v-else-if="item.type == 'h3'" v-text="item.info"></h3>
        <h4 v-else-if="item.type == 'h4'" v-text="item.info"></h4>
        <h5 v-else-if="item.type == 'h5'" v-text="item.info"></h5>
        <h6 v-else-if="item.type == 'h6'" v-text="item.info"></h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "wiki",
  props: {
    wikiid: {
      type: String,
      default: "",
    },
  },
  data: function() {
    return {
      markdown: [
        {id: "1", type: "p", info: "2333"},
        {id: "2", type: "text", info: "2333"},
        {id: "3", type: "text", info: "2333"},
        {id: "4", type: "text", info: "2333"},
        {id: "5", type: "text", info: "2333"},
        {id: "6", type: "text", info: "2333"},
        {id: "7", type: "text", info: "2333"},
        {id: "8", type: "text", info: "2333"},
        {id: "9", type: "text", info: "2333"},
      ]
    };
  }
};
</script>