<template>
	<div class="casl-project">
		<h1>CASL Project</h1>
		<h2>CASL is a plugin to handle user permissions by showing/hiding HTML elements throughout a site.<br/>
			To view more on CASL <a href="https://www.npmjs.com/package/@casl/vue" target="_blank">click here</a></h2>
		<p><b>Example:</b></p>
		<p>If you enter "user" in the input field and click change you can see the two buttons will disapear. Only admins have rights to see the buttons.  The
			data propery, keys.userRole is arbitrarily set to "admin" so the input field always has "admin" on load</p>
		<div>
			<div>
				<div>
					<input name="userType" class="user-type" type="text" v-model="keys.userRole"/>
				</div>
				<button class="button" v-on:click="changeUser(keys.userRole)">Change</button>
			</div>
			<div v-if="$can('update', 'Post')">
				<button class="button">Edit</button> <button class="button">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'casl-project',
		data() {
			return {
				keys: {
					name: "test",
					userRole: "admin"					
				},
				
			}
		},
		methods: {
			setUserToken() {
				const userString = JSON.stringify(this.keys);
				localStorage.setItem('user', userString);
			},
			changeUser(userType) {
				this.setUserToken();
				//JUST A DIRTY WAY FOR THIS EXAMPLE TO SEE THE CHANGES
				location.reload();
			}
		},
		created() {
			this.setUserToken();
		}
	}
</script>

<style lang="scss">
	.casl-project {
		min-width: 50%;
	}
</style>