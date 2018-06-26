var Route={ROOTPATH:'yx'};

var SimpleApi = SimpleApi || {
  route: {
    //sso
		'login':'/sso/login',               //1.登录
		'logout':'/sso/logout',             //2.登出
		'verify': '/sso/validateImageCode', //3.验证码检查
		'imageCode': '/'+Route.ROOTPATH+'/getImgCode',      //4.验证码
    'getNoticeTitle':     '/mkg/adminCommon/getAdminNotice.do',                 //5.首页公告
    'reg':'/'+Route.ROOTPATH+'/rg',   //注册会员
    'opens':'/'+Route.ROOTPATH+'/u/api/game-lottery/openIssues',   //注册会员
    '_':'end' //结束符
  },
  fire:function(urlkey,fn) {
    var fireurl = '';
    if(typeof this.route[urlkey] != 'undefined'){
      fireurl = this.route[urlkey]; 
    }else {
      fireurl = urlkey;
    }
  }
}