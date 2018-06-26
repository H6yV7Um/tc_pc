<template>
	<div class="">
				<div class="sportsWarp ">
					<div class="sportsMain">

					</div>
				</div>
		<pagefooter></pagefooter>
	</div>
</template>
<script>
	import pagefooter from './pagefooter.vue'
	import {downloadInit} from '../js/index.js'
	let init =  downloadInit();
	export default {
		name: 'warp',
		data() {
			return {
				height: document.documentElement.clientHeight,
				width: document.documentElement.clientWidth,
			}
		},
		methods: {},
		components: {
			pagefooter,
		},
		mounted() {

		}

	}
</script>

<style scoped lang="less">
	.sportsMain{
		width: 1200px;
		position: absolute;
		bottom: 50px;
		left: 50%;
		margin-left: -600px;
	}
	.sportsWarp {
		width:100%;
		position: relative;
	}

	.sportsWarp img {
		width: 100%;
	}


</style>
