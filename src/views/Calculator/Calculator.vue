<template>
	<div>
		<h1>Calculator</h1>
		<h2>In Progress</h2>
		<div class="calculator-container">
			<screen 
				:outPut=screenOutput
			/>
			<div class="user-inputs grid-x">
				<div class="cell small-12">
					<key-pad @inputClickHandler="getInput" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'calculator',
		data() {
			return {
				screenOutput: ""
			}
		},
		methods: {
			getInput(value) {
				this.screenOutput += value;
			}
		}
	}
</script>

<style lang="scss" scoped>
 .calculator-container {
 	width: 400px;
    margin: 0 auto;
 }
</style>