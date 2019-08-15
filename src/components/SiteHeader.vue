<template>
  <div class="nav-container">
      <ul class="dropdown menu" data-dropdown-menu>
        <li 
          class="is-dropdown-submenu-parent opens-right projects-accordion" 
        >
          <router-link v-bind:to="'home'">Vue Projects</router-link>
          <ul class="menu submenu is-dropdown-submenu first-sub vertical js-dropdown-active">
            <li>
              <router-link v-bind:to="'casl-project'">CASL Project</router-link>
              <router-link v-bind:to="'slot-project'">Slots</router-link>
              <router-link v-bind:to="'watchers'">Watchers</router-link>
              <router-link v-bind:to="'computed-properties'">Computed Properties</router-link>
              <router-link v-bind:to="'vuex'">Vuex</router-link>
              <router-link v-bind:to="'services'">Services</router-link>
              <router-link v-bind:to="'calculator'">Calculator</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://vuejs.org/" target="_blank">Vue Docs</a>
        </li>
        <li><a href="https://foundation.zurb.com/" target="_blank">Foundation Docs</a></li>
      </ul>
  </div>
</template>
  
<script>
  export default {
    name: 'site-header',
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .nav-container {
    padding-bottom: 10px;
    border-bottom: 1px rgba(179,179,179,0.5) solid;
    padding-left: 5%;
    margin-bottom: 40px;
  }
  .js-dropdown-active {
    display: none;
  }
  .projects-accordion:hover {
    .js-dropdown-active {
      display: block;
    }
  }
</style>