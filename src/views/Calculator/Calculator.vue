<template>
	<div>
		<h1>Calculator</h1>
		<h2>In Progress</h2>
		<p>This calculator project was based on this <a href="https://daveceddia.com/react-practice-projects/" target="_blank">project</a>. I'm using slots for practics but would be more efficient using a child component with v-for</p>
		<div class="calculator-container">
			<screen 
				:outPut=screenOutput
			/>
			<div class="user-inputs grid-x">
				<div class="cell small-12">
					<key-pad 
						@inputClickHandler="getInput"
						@clearClickHandler="clearScreen"
						@operatorClickHandler="getOperator"
						@evaluatorClickHandler="evaluateExpression"
					/>
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
				screenOutput: "",
				initialInput: "",
				hasOperator: true,
				operator: "",
				secondaryInput: ""
			}
		},
		methods: {
			getInput(value) {
				this.screenOutput += value;
				if(this.hasOperator) {
					this.initialInput += value;
					this.hasOperator = false;
 				} else {
					this.secondaryInput = this.initialInput;
				}
			},
			clearScreen() {
				this.screenOutput = "";
				this.initialInput = "";
				this.hasOperator = true;
			},
			getOperator(value) {
				if(!this.hasOperator) {
					switch(value) {
						case 'divide':
						this.screenOutput += "&divide;";
						this.initialInput += "/";
						break;
						case 'minus':
						this.screenOutput += "&minus;";
						this.initialInput += "-";
						break;
						case 'plus':
						this.screenOutput += "&plus;";
						this.initialInput += "+";
						break;
						case 'multiply':
						this.screenOutput += "&times;";
						this.initialInput += "*";
						break;
					}
					this.hasOperator = true;
				}
			},
			evaluateExpression() {
				this.screenOutput = eval(this.initialInput).toString();
				this.initialInput = eval(this.initialInput).toString();
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