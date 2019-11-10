<template>
  <div class="item" v-if="wiki.show" :wikiid="wiki.id" @keyup.esc="submit" tabindex="0" v-focus>
    <ul>
      <li>
        <button @click="submit">
          <i class="fa fa-times"></i>
        </button>
      </li>
      <li>
        <ul class="online">
          <li v-for="user in users" v-bind:key="user.id">
            <img src="../../assets/-4fb6-91e4-25182fc5c8e2.jpg" :alt="user.name" :title="user.name" />
          </li>
          <li>
            <i class="fa fa-plus"></i>
          </li>
        </ul>
      </li>
    </ul>
    <node></node>
    <wiki></wiki>
  </div>
</template>