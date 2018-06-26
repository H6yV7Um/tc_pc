<template>
  <div class="security_bar_wrapper">
    <div class="relative_bar">
      <div class="absolute_bar" :style="{width: percent + '%'}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['percent'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../css/stylus/index.styl";

  .security_bar_wrapper
    .relative_bar
        position:relative
        height: 8px
        radius(4px)
        bgColor(#efefef)
        .absolute_bar
          position:absolute
          radius(4px)
          background:#4db051
          background:-webkit-linear-gradient(left,#fd6060 0,#10c2e9 50%)
          left: 0
          top:0
          bottom:0
</style>
