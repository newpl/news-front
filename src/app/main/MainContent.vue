<template>
	<div>
		<h1>Main Content</h1>
		<main-hot-news></main-hot-news>
		<main-my-news></main-my-news>
		<main-hot-topic></main-hot-topic>
		<main-latest-news></main-latest-news>
	</div>
</template>

<script>
import MainHotNews from './comp/MainHotNews.vue';
import MainMyNews from './comp/MainMyNews.vue';
import MainHotTopic from './comp/MainHotTopic.vue';
import MainLatestNews from './comp/MainLatestNews.vue';
export default {
	components : {
		MainHotNews, 
		MainMyNews, 
		MainHotTopic, 
		MainLatestNews
	}
}
</script>

<style>

</style>
