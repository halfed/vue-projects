<template>
	<div>
		<h1>Calculator</h1>
		<h2>In Progress</h2>
		<p>This calculator project was based on this <a href="https://daveceddia.com/react-practice-projects/" target="_blank">project</a>. I'm using slots for practics but would be better using a child component with v-for</p>
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