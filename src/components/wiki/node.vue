<style lang="less" scoped>
.node {
  width: 200px;
  //background: #f2f2f2;
  text-align: left;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>
<template>
  <div class="node">
    <ul>
      <li v-for="group in node" v-bind:key="group.id">
        <h2 v-text="group.name"></h2>
        <ul>
          <li v-for="doc in group.list" v-bind:key="doc.id">
            <h3 v-text="doc.name"></h3>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "wiki",
  data: function() {
    return {
      node: [
        {
          id: "1",
          name: "分组A",
          list: [
            {
              id: "1",
              name: "文档A",
              list: [{ id: "1", name: "档案内分段 h2, 分段内分段 h3 h4 h5 h6" }]
            }
          ]
        }
      ]
    };
  }
};
</script>