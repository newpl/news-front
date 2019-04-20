<template>
  <div>
		<top-header></top-header>
		<keyword></keyword>
    <router-view class="main-frame"></router-view>
    <notifications/>
  </div>
</template>

<script>
import Vue from 'vue';
import TopHeader from './app/frame/TopHeader.vue'
import Keyword from './app/common/Keyword.vue'
export default {
  name: 'app',
  components: {
		TopHeader,
		Keyword		
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.main-frame {position: absolute;width:100%;height: calc(100vh - 50px - 30px);top: 50px;bottom: 30px;overflow: auto;}
</style>
