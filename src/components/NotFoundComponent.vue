<template>
<!--	<div class="main" style="margin: 300px;" id="routerFuned">
		<h1 style="font-size: 60px;color: #fff;">404页面不存在</h1>
		<h1 style="font-size: 40px;color: #fff;margin-top: 70px;">请检查链接是否正确</h1>
	</div>-->
</template>

<script>
export default {
  beforeCreate(){
  	if(this.$store.state.isLogin !== 'true'){
  		return this.$router.push('/login')
  	}
  	return this.$router.push('/index')
  }
}
	
</script>

<style>
</style>