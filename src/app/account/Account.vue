<template>
	<div>
		<side-menu></side-menu>
		<account-content></account-content>
	</div>
</template>

<script>
import AccountContent from './AccountContent.vue';
import SideMenu from '../frame/SideMenu.vue';
export default {
	components : {
		SideMenu,
		AccountContent, 
	}
}
</script>

<style>

</style>
