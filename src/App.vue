<template>
  <div id="app" class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/main';
.app-container {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
