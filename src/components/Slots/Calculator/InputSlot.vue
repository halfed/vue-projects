<template>
	<td :colspan="colSpan" @click="onKeyDown(val)" v-bind:class="classType"><slot>{{ defaultEntry }}</slot></td>
</template>

<script>
	export default {
		name: 'input-slot',
		props: ['colSpan', 'val', 'classType'],
		data() {
			return {
				defaultEntry: 0
			}
		},
		methods: {
			onKeyDown(event) {
				this.$emit('childInputClickHandler', event)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>