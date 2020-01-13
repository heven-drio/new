<template>
	<div id="app">
		<keep-alive include="Home,Want,Cart,Mine">
			<router-view />
		</keep-alive>
		<Tab v-show="!$route.meta.fullScreen" />

	</div>
</template>

<script>
	import Tab from '@/views/Tab/Tab.vue';
	// import api from "./axios/api.js";
	export default {
		// name: "app",
		components: {
			Tab
		},
		// data() {
		// 	return {
		// 		dataShow: []
		// 	};
		// },
		// created() {
		// 	this.getdata();
		// },
		// methods: {
		// 	getdata: function() {
		// 		api.mockdata("/data/index").then(res => {
		// 			// console.log(res);
		// 			// console.log(res);
		// 			this.dataShow = res.data;
		// 		});
		// 	},
		// },
	};
</script>

<style>

</style>
