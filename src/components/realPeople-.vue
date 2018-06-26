<template>
	<div id="real_people">
		<div class="real_wrapper">
			<p class="ft24">余额</p>
			<div class="ft22">{{walletBalance}}元</div>
			<a :href="realObj.isOpen ? commonUrl : 'javascript:void(0)'" target="_blank" @click="openFunds">进入游戏</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import {thirdpartyGame, Prompt} from '../js/index.js';

    let init = thirdpartyGame();
    let oPrompt = Prompt();
    export default {
        data() {
            return {
                commonUrl : '',
                walletBalance: '',
                realObj : appConfig().realObj // config中的realtObj决定是否开启真人
            }
        },
        methods : {
            openFunds() {
                !this.realObj.isOpen && oPrompt({
                    idx: "boxwarps",
                    message: "正在维护中，请耐心等待"
                });
            }
        },
        created() {
            init.getLinkUrl(this, this.realObj.platformId);
            init.getBalances(this, 'ky_01');
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../css/stylus/index.styl"
	
	#real_people
		position:relative
		width:1200px
		height: 770px
		margin:0 auto
		bgAll('../img/play/real_bg.png')
		.real_wrapper
			position:absolute
			bottom:150px
			left:100px
			color()
			text-align:right
			div
				margin:5px 0 15px 0
			a
				display:inline-block
				width: 170px
				height: 40px
				line-height: 40px
				text-align:center
				bgColor(#ff6b95)
				radius(5px)
</style>