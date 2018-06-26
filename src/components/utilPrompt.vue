<template>
    <div class="util_prompt" @click="hide()">
        <div :class="ismobile ? 'prompt_content prompt_contentmobile' : 'prompt_content'" @click.stop="">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

import {IsPC} from '../js/common.js';
    export default{
        data() {
            return {
                isShow : false,
                ismobile: false,
            }
        },
        methods:{
            hide() {
                this.$emit('hide')
            }
        },
        mounted() {
          if(!IsPC()){
            this.ismobile = true;
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .util_prompt
        position:fixed
        display:flex
        z-index:90
        left: 0
        top: 0
        bottom: 0
        right:0
        align-items:center
        background: rgba(55,55,55,.6)
        .prompt_content
            &.prompt_contentmobile
                width: 100%
            position:relative
            display:inline-block
            /*width: 100px*/
            /*height:100px*/
            margin: 0 auto
</style>
