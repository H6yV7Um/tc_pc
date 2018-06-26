<template>
  <div class="add-reduce">
    <span class="add">-</span>
    <span class="num">1</span>
    <span class="reduce">+</span>
  </div>
</template>

<script>
  export default {
    name: "add-reduce"
  }
</script>

<style lang="stylus" scoped>
  .add-reduce
    display: inline-block
    span
      display: inline-block
      vertical-align: top
      &.add, &.reduce, &.num
        width: 28px
        height: 24px
        font-size: 18px
        text-align: center
        line-height: 20px
        user-select: none
        border: 1px solid #dcdddd
        cursor: pointer
        color: #999999
      &.num
        cursor: default !important
        width: 48px
        font-size: 14px
        line-height: 24px
        border-right: none
        border-left: none
</style>
