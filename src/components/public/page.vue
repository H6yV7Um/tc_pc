<template>
  <Page class-name="page-wrapper" :current="page" :page-size="pageSize" :total="total" @on-change="pageChange"></Page>
</template>

<script>
  export default {
    name: "page",
    props: {
      total: {
        required: true,
        default: 1
      },
      pageSize: {
        required: true,
        default: 10
      },
      page: {
        required: true,
        default: 1
      }
    },
    methods: {
      pageChange(val) {
        this.$emit('pageChange', val);
      }
    }
  }
</script>

<style lang="stylus">
  .page-wrapper
    li
      user-select: none
      color: #898989
      font-size: 18px
      border-radius: 2px
      &.ivu-page-item-active
        border: 1px solid #ff5868 !important
        background-color: #ff5868 !important
        a
          color: #fff !important
      &:hover
        border: 1px solid #ff6979 !important
        a
          color: #898989
      &.ivu-page-next a, &.ivu-page-prev a
        font-size: 20px
      &.ivu-page-disabled:hover
        border: 1px solid #dddee1 !important
</style>
