<template>
    <div class="main_part">
        <BetLeftBar></BetLeftBar>
        <v-bar></v-bar>
        <v-content></v-content>
    </div>
</template>

<script type="text/ecmascript-6">
    import betContent from './betContent'
    import betBar from './betBar'
    import betLeftBar from './betLeftBar'

    export default {
        components:{
            'v-bar' : betBar,
            'v-content' : betContent,
            'BetLeftBar' : betLeftBar
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../css/stylus/index.styl";

    .main_part
        position:relative
        width: content_width
        margin:0 auto
        margin-top:10px
</style>
