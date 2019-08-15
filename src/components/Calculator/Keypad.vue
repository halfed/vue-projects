<template>
	<div class="key-pad">
		<table width="100%">
			<tr>
				<td colspan=75 class="left-border">Clear</td>
				<td colspan=25>&#247;</td>
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
				<td colspan=25>&#8722;</td>
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
				<td colspan=25>&#43;</td>
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
				<td colspan=25>&equals;</td>
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
				leftBorder: 'left-border'
			}
		},
		methods: {
			getSlotInput(value) {
				this.$emit('inputClickHandler', value);
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