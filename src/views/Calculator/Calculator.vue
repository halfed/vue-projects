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
				internalInput: "",
				hasOperator: false,
				hasInitialNonZeroOperator: false,
				triggerEvaluate: false
			}
		},
		methods: {
			getInput(value) {
				if(parseInt(value) > 0) {
					this.hasInitialNonZeroOperator = true;
				}
				
				if(this.hasInitialNonZeroOperator) {
					this.screenOutput += value;
					this.internalInput += value;
					this.hasOperator = true;
					this.triggerEvaluate = true;
 				}
			},
			clearScreen() {
				this.screenOutput = "";
				this.internalInput = "";
				this.hasOperator = false;
				this.hasInitialNonZeroOperator = false;
			},
			getOperator(value) {
				if(this.hasOperator) {
					switch(value) {
						case 'divide':
						this.screenOutput += "&divide;";
						this.internalInput += "/";
						break;
						case 'minus':
						this.screenOutput += "&minus;";
						this.internalInput += "-";
						break;
						case 'plus':
						this.screenOutput += "&plus;";
						this.internalInput += "+";
						break;
						case 'multiply':
						this.screenOutput += "&times;";
						this.internalInput += "*";
						break;
					}
					this.hasOperator = false;
					this.triggerEvaluate = false;
				}
			},
			evaluateExpression() {
				if(this.triggerEvaluate) {
					this.screenOutput = eval(this.internalInput).toString();
					this.internalInput = eval(this.internalInput).toString();
				}
				
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