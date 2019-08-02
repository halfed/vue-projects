import { AbilityBuilder } from '@casl/ability'
import { Ability } from "@casl/ability";

let ability = new Ability();

export { ability };

const user = JSON.parse(localStorage.user);

export default AbilityBuilder.define(can => {
	console.log("does ability re run");
  	if(user.userRole === "admin") {
  		can(['read', 'update', 'create', 'delete'], 'Post');
	}else {
	    can('read', 'Post');
	}
})