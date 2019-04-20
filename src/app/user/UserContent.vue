<template>
	<div>
		<h1>User Content</h1>
		<user-summary></user-summary>
		<user-posting></user-posting>
		<user-comment></user-comment>
	</div>
</template>

<script>
import UserSummary from './comp/UserSummary.vue';
import UserPosting from './comp/UserPosting.vue';
import UserComment from './comp/UserComment.vue';
export default {
	components : {
		UserSummary, 
		UserPosting, 
		UserComment
	}
}
</script>

<style>

</style>
