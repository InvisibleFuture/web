<template>
  <div class="node">
    <h2>
      <span v-text="gname"></span>
    </h2>
    <div v-if="add.show">
      <input type="text" value="add.name" v-model='add.name' @keyup.enter="AddDoc()" v-focus />
    </div>
    <ul>
      <li v-for="doc in glist" v-bind:key="doc.id" v-text="doc.name"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "nodegroup",
  props: {
    gid: {
      type: String,
      default: ""
    },
    gname: {
      type: String,
      default: ""
    },
    glist: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      add: {
        show: true,
        name: ""
      }
    };
  },
  methods: {
    AddDoc: function() {
      let newid = new Date().valueOf();
      let doc = { id: newid, name: this.add.name, list: [] };
      this.glist.push(doc);
    },
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
