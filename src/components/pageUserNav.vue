<template>
				<ul class="clearfix ft14 cursor navList" id="navList">
					<router-link to="/userCenter" class="colorA"><li class="fl navListLiLys">个人中心</li></router-link>
					<router-link to="/userAccount#page=2_finance" class="colorA"><li class="fl navListLiLys">财务管理</li></router-link>
					<router-link to="/userReport#page=0_report" class="colorA"><li class="fl navListLiLys">订单报表</li></router-link>
					<!-- <router-link v-show="userType!='0'"  to="/userProxy#page=1_proxy" class="colorA"><li class="fl navListLiLys">代理中心</li></router-link> -->
					<router-link to="/userMessage#page=0_message" class="colorA"><li class="fl navListLiLys">消息中心</li></router-link>
				</ul>
</template>

<script>

	function inittab(btn,_this){
		let btns = document.getElementById("navList").getElementsByTagName('li'),
				winUrl = location.href,
				router = ["/userCenter","/userAccount","/userReport","/userMessage"];
				for(let y = 0, lenn = router.length; y < lenn ;y++){
					btns[y].className = 'fl';
					if(winUrl.indexOf(router[y])!== -1){
						btns[y].className = 'fl trueHover';
					}
				}


				// for(let i = 0, len = btns.length ; i<len ;i++){
				// 	btns[i].zdindexs = i;
				// 	btns[i].addEventListener("click",function(){
				// 		_this.$router.push('/userCenter#'+this.zdindexs)
				// 	},false)
				// }
			}

	export default {
	  name: 'warp',
	  data () {
	    return {
				showIndex:null,
				userType: '',
      }
	  },

		watch: {

	  },
	  components: {
	  },
	  updated () {
		},
	  methods: {

		},
	  mounted () {
			inittab('navListLiLys', this);
	  },
		beforeMount() {
				this.userType = localStorage.getItem('_userType');
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import './../css/commit/manager.css';

	.navList{
	  width: 100%;
	  background: #ff6977;
		padding-top:2px;
		padding-left: 20px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.navList li{
	  width: 110px;
	  height: 40px;
	  text-align: center;
	  line-height: 40px;
		margin-left: 5px;
	}
	.navList li:hover{
	  background: #fff;
		color:#ff6977;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
	.navList li.trueHover{
	  background: #fff;
		color:#ff6977;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
	.ddcolorY{border: 1px solid #ccc;}
	/*.selected{border: 1px solid #00bc35;}*/

	i.closeIcon{font-size: 40px;margin-top: 0;float: right;}
	.mt25{margin-top: 25px;}
	.mt10{margin-top: 10px;}

	.userMain{
	  padding:0px 0 0px 0;
	}
  // 为开奖
	.activityAmountStatusc0{
		color: #6ba3d6;
	}
	.activityAmountStatus0{
		padding: 5px 13px;
		background: #ff7800;
		color: #fff;
		border-radius: 13px;
	}
	// 未中奖
	.activityAmountStatusc1{
		color: #787876;
	}
	.activityAmountStatus1{
		padding: 5px 13px;
		background: #969696;
		color: #fff;
		border-radius: 13px;
	}
	// 已派奖
	.activityAmountStatusc2{
		color: #c6885f;
	}
	.activityAmountStatus2{
		padding: 5px 13px;
		background: #ce2427;
		color: #fff;
		border-radius: 13px;
	}
	// 已撤单
	.activityAmountStatusc4{
		color: #81c0ab;
	}
	.activityAmountStatus4{
		padding: 5px 13px;
		background: #59d1ae;
		color: #fff;
		border-radius: 13px;
	}

	.nav{
	  position:relative;
	}

	.userMainWarp{
	  padding:0 15px 20px 15px;
	}
	.userMainWarpH3{
	  padding:10px 0;
	}
	.userMainbox{
	  border: 1px solid #ccc;
	}
	.userMainboxLeft{
	  padding: 30px 0;
	  width: 50%;
	}
	.userMainAccoutBtn{
	  display: block;
	  padding:5px 30px;
	  border-radius: 6px;
	}
	.userList{
	  border: 1px solid #ccc;
	  border-top: 0;
	  padding:15px 0;

	}
	.userListModule{
	  width:88px;
	}

	.usercenterMmain_Card{
	  padding:0;
		margin: 0;
		margin-left:-5px;
	}

	.usercenterMmain_Card li {
	  width: 90%;
	  padding: 12px 0;
	  margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
  .withdraw .usercenterMmain_Card li{
    width:220px;
    float:left;
  }
	/*.usercenterMmain_Card .litrue {
	  border: 1px solid @colorAg;
	  position: relative;
	}*/

	.usercenterMmain_Card .usercenterMmain_CardLi {
	  padding: 10px;
	  text-align: center;
	}

	.usercenterMmain_CardLi b {
	  font-weight: 100;
	}
	.usercenterMmain_Card span {
	  display: block;
	  width: 45px;
	  height: 45px;
	}
	.usercenterMmain_Card p {
	  float: left;
	  width: 100%;
	  font-size: 14px;
	}


	.usercenterMmain_contR_card i {
	  font-size: 100px;
	  margin: 40px 0 0 20px;
	}

	ul.usercenterMmain_contR_card {
	  width: 49%;
	  margin-left:0;
	  margin-top: -20px;
	}

	.usercenterMmain_contR_card li {
	  width:100%;
	  padding: 15px 0 18px 0;
	  margin-top: 20px;
	}

	.usercenterMmain_contR_card label {
	  text-align: left;
	}

	.usercenterMmain_contR_card b {
	  font-weight: bold;
	  font-size: 16px;
	  margin-top: 15px;
	  margin-left: 15px;
	  display: block;
	}

	.usercenterMmain_contR_card p {
	  font-size: 12px;
	  margin-left: 15px;
	  width: 180px;
	  line-height: 18px;
	  margin-top: 5px;
	}

	.usercenterMmain_contR_card button {
	  float: right;
	  padding: 10px 35px;
	  outline: none;
	  font-size: 14px;
	  margin: 25px 15px 0 0;
	}

	.bindBox {
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 9999;
	}

	.bindBox_div {
	  position: fixed;
	  left: 50%;
	  top: 50%;
	}

	.form-control-floaterl{
	  width: 100%;
	  text-align: left;
	}
	.form-control-floaterl tr{}
	.form-control-floaterl input{
	  height: 35px;
	  width: 80%;
	  margin-top: 15px;
	}
	.form-control-floatererl .button{
	  border-radius: 35px;
	  cursor: pointer;
	}
	.label-f{
	  width: 30%;
	  text-align: right;
	}
	.User_form-control-float .label-f{
	  width: 160px;
	  text-align: right;
	}
	.User_form-control-float .ipt{
	  width: 300px;
	  text-align: left;
	  padding-left: 10px;
	}
	.User_form-control-float tr{
	  width: 100%;
	  float: left;
	  margin-top: 15px;
	}
	.User_form-control-float tr input{
	  padding: 0 10px;
	}
	.User_form-control-float .ipt input{
	  height: 35px;
	  width: 100%;
	  margin-top: 0;
	}
	.User_form-control-float .note{
	  width: 480px;
	  text-align: left;
	  font-size: 12px;
	  padding-left: 15px;
	}

	.mainConten{
	  width: 270px;
	  margin:50px auto;
		position: relative;;
	}


.cycle {
	position: absolute;
	top: 45px;
	background: #fff;
	left: 112%;
}
.arrow{
	position: absolute;
	top: 45px;
	font-size: 52px;
	font-size: 52px;
	left: 110%;
}
#dk_container_fromacc,#dk_container_toacc{
	width:auto;
	margin-top: 10px;
	height:auto;
}
.inputline input{
	  height: 40px;
    width: 270px;
    border: 1px solid #ccc;
		padding: 0 10px;
		margin-top: 10px;
}

.inputline a{
	display: inline-block;
	width: 270px;
	height: 40px;
	background:#ff6977;
	color:#fff;
	line-height: 40px;
	margin-top: 10px;
}


.manager .content .tabsLys>a {
    height: 40px;
    width: 115px;
    display: block;
    float: left;
    line-height: 40px;
    text-align: center;
    color: gray;
    border-bottom: none;
    margin-left: 5px;
    transition: all .2s ease 0s;
    cursor: pointer;
    font-size: 15px;
		border: 1px solid gray;
		background: #fff;
		border-radius: 0;
}
.manager .content .tabsLys>a.active {
    color: #e87057;
    cursor: default;
    font-size: 15px;
		border: 1px solid #e87057;
		border-radius: 0;
		background: #fff;
}
.radio-group{
	display: block;
}
.radio-group div{
	display: inline-block;
	width: 78px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	color: gray;
	background: #fff;
	border: 1px solid #ebebeb;
}
.form-control-float .radio-group div.groupDiv{
	color: #fff;
	background: #ff6977;
	border: 1px solid #fff;
}
.manager .form-control-float .button{
	background: #ff6977;
}
.manager .form-control-float .button:hover{
	background: #fff;
	color: #ff6977;
	border: 1px solid #ff6977;
}
.proxyNotice{
	width: 90%;
	margin:30px auto;
	background: #ebebeb;
	padding:15px 20px;
}
.form-control{
	padding: 0 10px;
}

.manager .content .result table.form-control>tbody>tr>td>.colorLys0{
	margin: 8px 5px;
	padding: 0 10px;
	color: #fff;
	background: #b90f02;
	height: 28px;
	line-height: 28px;
	float: left;
}
.manager .content .result table.form-control>tbody>tr>td>.colorLys1:hover{
	color:#fff;
}
.manager .content .result table.form-control>tbody>tr>td>.colorLys0:hover{
	color:#fff;
}
.manager .content .result table.form-control>tbody>tr>td>.colorLys1{
	margin: 8px 5px;
	padding: 0 10px;
	height: 28px;
	line-height: 28px;
	color: #fff;
	background: #f57643;
	float: left;
}



.firstcol .rf{float:right;}
.modal-float .setsitem{
	width: 60%;
	margin: 0px auto;
}
.modal-float .newline{
	margin-left: 0px;
	width: 55px;
}


.manager .nav>a.active{
	 border-bottom: 3px solid #ff6977;
}
.manager .nav>a.active{
	color: #ff6977;
}
.inputline a,.manager .button,.radio-group div.groupDiv,.manager .content .params>.row input[type=button].search,.dk_theme_black{
background-color:  #fff;
}
.manager .nav>a.active:hover em{color:#ff8400;}

.lottery-order-details tr{border: 1px solid #ccc;}




.lottery-order-details table.info{width: 100%;}
table.info .label-f{width: auto;}
table.info td{text-align: left;padding: 5px 0;border-right: 1px solid #ccc;padding: 5px 0 5px 15px;}
.button-groups input{padding: 5px 30px;color: #fff;}
.button-groups input.grey{background: #ff6977;}
.button-groups input.green{background: #787878;}
.label-f a{display: none;}
table.info td.v-middle{width: 86%;}
.button-groups{text-align: center;margin-top: 10px;}
.manager .content .result table.form-control>tbody>tr>td, .manager .content .result table.form-control>thead>tr>td{
	margin-left: 0;
	padding: 0;
	text-align: center;
}
.common-modal .jBox-title {
    height: 35px;
    line-height: 35px;
    background-color: #ff6977;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
    text-shadow: none;
    font-size: 14px;
    padding: 0 20px;
    color: #fff;
}
</style>
