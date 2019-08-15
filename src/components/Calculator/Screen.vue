<template>
	<div class="screen">
		{{ outPut }}
	</div>
</template>

<script>
	export default {
		name: 'screen',
		props: {
			outPut: {
				type: String,
				default: "0"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.screen {
		background-color: #433437;
		color: #FFF;
		text-align: right;
		font-size: 3.6rem;
		height: 5.5rem;
    	padding: 3px 20px 0px 20px;
	}
</style>