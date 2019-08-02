<template>
	<div class="grid-container fluid main">
		<router-link v-bind:to="'home'"><img src="../../assets/logo.png"></router-link>
		<site-header/>
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default {
		name: 'home',
	}
</script>

<style lang="scss" scoped>
	.main {
		img {
    		width: 3%;
    		position: absolute;
    		margin-top: 1px;
		}
	}
</style>