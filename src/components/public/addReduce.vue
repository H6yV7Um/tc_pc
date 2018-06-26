<template>
  <div class="add-reduce">
    <span class="add" @click="addReduce(0)">-</span>
    <span class="num">{{count == null ? 0 : count}}</span>
    <span class="reduce" @click="addReduce(1)">+</span>
  </div>
</template>

<script>
  export default {
    name: "add-reduce",
    props: {
      count: {
        required: true,
        default: 1
      },
      id: {
        required: false,
        default: undefined
      }
    },
    methods: {
      addReduce(flag) {
        let count = this.count;
        if (flag === 0) {
          count > 1 && count--;
        } else if (flag === 1) {
          count++;
        }
        this.$emit('changeCount', {count, id: this.id});
      }
    }
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
        background: linear-gradient(to bottom, #fefefe, #e6e6e6)
      &.num
        cursor: default !important
        width: 48px
        font-size: 14px
        line-height: 24px
        border-right: none
        border-left: none
        background: #fff
</style>
