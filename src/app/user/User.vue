<template>
	<div>
		<side-menu></side-menu>
		<user-content></user-content>
	</div>
</template>

<script>
import UserContent from './UserContent.vue';
import SideMenu from '../frame/SideMenu.vue';
export default {
	components : {
		SideMenu,
		UserContent, 
	}
}
</script>

<style>

</style>
