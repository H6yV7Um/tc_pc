<template>
<div class="activityMain">
  <div class="" v-show="ISbigactivity">
    <div class="">
      <img src="/dist/bigactivity1.jpg" alt="">
    </div>
    <div class="">
      <img src="/dist/bigactivity2.jpg" alt="">
    </div>
    <div class="">
      <img src="/dist/bigactivity3.jpg" alt="">
    </div>
  </div>

  <div class="" v-show="!ISbigactivity">
    <div class="">
      <img src="/dist/playactivity1.jpg" alt="">
    </div>
    <div class="">
      <img src="/dist/playactivity2.jpg" alt="">
    </div>
    <div class="">
      <img src="/dist/playactivity3.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>


export default {
  name: 'activity_big',
  data () {
    return {
      ISbigactivity:false,
    }
  },
	components: {
	},
   methods: {

  },
  beforeCreate () {

  },
	updated () {

  },
	mounted () {

      this.ISbigactivity = location.href.indexOf('/activitys/1')!=-1? true:false;
  }
 }

</script>

<style>
.activityMain{margin:0 auto;border-top: 1px solid #ccc;padding-top: 25px;}

</style>
