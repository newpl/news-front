<template>
	<div class="header">
		<ul>
      <li><a @click="goto('/main')">[MainPage]</a></li>
      <li><a @click="goto('/account')">[AccountPage]</a></li>
      <li><a @click="goto('/profile')">[ProfilePage]</a></li>
		</ul>
	</div>
</template>

<script>
export default {
    methods : {
        goto (path) {
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
.header {top:0;left:0;right:0;height: 20px;background:rgba(0,0,0,0.7);color:#FFF;padding-left:20px;}
.header li {display: inline-block;cursor:pointer;list-style-type:none;}
</style>
