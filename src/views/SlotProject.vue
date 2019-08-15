<template>
	<div class="slot-project">
		<h1>Slot Project</h1>
		<slot-component>
			<p v-if="putContentToSlot">I came from the parent component</p>
	    </slot-component>
	    <button type="button" class="button" v-on:click="changeSlot">Change</button>
	    <div>
	    	<slot-component name="named-slot">
	    		<p>I came from the named slot</p>
	    	</slot-component>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'slot-project',
		data() {
			return {
				putContentToSlot: false
			}
		},
		methods: {
			changeSlot() {
				this.putContentToSlot = !this.putContentToSlot;
			}
		}
	}
</script>

<style>
</style>