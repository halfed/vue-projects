<template>
	<div class="key-pad">
		<table width="100%">
			<tr>
				<td colspan=75 class="left-border" @click="clearOutputScreen">Clear</td>
				<input-slot
					:colSpan='25'
					:val=operator.divide
					@childInputClickHandler="getOperatorType"
					:classType="leftBorder"
				>&#247;</input-slot>
			</tr>
			<tr>
				<input-slot
					:colSpan=25
					:val=7
					@childInputClickHandler="getSlotInput"
					:classType="leftBorder"
				>7</input-slot>
				<input-slot
					:colSpan=25
					:val=8
					@childInputClickHandler="getSlotInput"
				>8</input-slot>
				<input-slot
					:colSpan=25
					:val=9
					@childInputClickHandler="getSlotInput"
				>9</input-slot>
				<input-slot
					:colSpan='25'
					:val=operator.multiply
					@childInputClickHandler="getOperatorType"
					:classType="leftBorder"
				>&times;</input-slot>
			</tr>
			<tr>
				<input-slot
					:colSpan=25
					:val=4
					@childInputClickHandler="getSlotInput"
					:classType="leftBorder"
				>4</input-slot>
				<input-slot
					:colSpan=25
					:val=5
					@childInputClickHandler="getSlotInput"
				>5</input-slot>
				<input-slot
					:colSpan=25
					:val=6
					@childInputClickHandler="getSlotInput"
				>6</input-slot>
				<input-slot
					:colSpan='25'
					:val=operator.minus
					@childInputClickHandler="getOperatorType"
					:classType="leftBorder"
				>&minus;</input-slot>
			</tr>
			<tr>
				<input-slot
					:colSpan=25
					:val=1
					@childInputClickHandler="getSlotInput"
					:classType="leftBorder"
				>1</input-slot>
				<input-slot
					:colSpan=25
					:val=2
					@childInputClickHandler="getSlotInput"
				>2</input-slot>
				<input-slot
					:colSpan=25
					:val=3
					@childInputClickHandler="getSlotInput"
				>3</input-slot>
				<input-slot
					:colSpan='25'
					:val=operator.plus
					@childInputClickHandler="getOperatorType"
					:classType="leftBorder"
				>&#43;</input-slot>
			</tr>
			<tr>
				<input-slot
					:colSpan=75
					:val=0
					:classType="leftBorder"
					@childInputClickHandler="getSlotInput"
				>0</input-slot>
				<td colspan=25 @click="evaluate">&equals;</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'key-pad',
		props: ['onClick'],
		data() {
			return {
				leftBorder: 'left-border',
				operator: {
					divide: "divide",
					minus: "minus",
					plus: "plus",
					multiply: "multiply"
				}
			}
		},
		methods: {
			getSlotInput(value) {
				this.$emit('inputClickHandler', value);
			},
			clearOutputScreen() {
				this.$emit('clearClickHandler');
			},
			getOperatorType(value) {
				this.$emit('operatorClickHandler', value);
			},
			evaluate() {
				this.$emit('evaluatorClickHandler');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.key-pad {
		table {
			border-top: 2px solid #921029;
		}
		td {
			padding: 20px;
			font-size: 1.6rem;
			border-bottom: 1px solid #921029;
			border-right: 1px solid #921029;
			text-align: center;
			cursor: pointer;
		}
		.left-border {
			border-left: 1px solid #921029;
		}
	}
</style>