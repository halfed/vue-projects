<template>
	<div>
		<slot>
			<p>I came from the child component</p>
		</slot>
		<slot name="named-slot">
			<p>I'm the named slot in the slot component and I don't disappear</p>
		</slot>
	</div>
</template>

<script>
	export default {
		name: 'slot-component'
	}
</script>