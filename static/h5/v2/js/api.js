/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-05-11 14:56:47
 * @version $Id$
 */

;var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
}

var Api = Api || {};
Api = {
    url: '/yx',
    apimap: {
        route: {
            'getNoticeTitle': '/u/api/notice/list', //首页公告
            'getptList': '/pay/getPcodeCbBaseList', //平台列表
            'getPtBalance': '/pay/getPlayerBalance', //各平台余额
            'getBindCardInfo': '/u/api/account/bind-card', //绑定银行卡
            'getDrawCashInfo': '/mkg/api/users/queryWithDrawInfo', //取款-银行卡信息
            'getLowerUserList': '/pay/getAgentUserList', //下级用户列表
            'saveQuota': '/mkg/api/agent/update_quotas', //配额管理
            'getPtGamesData': "/u/api/pt/games", //pt游戏列表
            'getPtGamesMenu': "/u/api/pt/types", //pt游戏导航
            'getUserInfo': "/mkg/api/pt/userinfo", //pt用户信息
            'getCities': "/pay/getcities", //获取城市列表
            'getUserBalance': "/u/api/loop", //查询余额
            'getInitPage':'/game-lottery/init-page',//彩票初始化
            'getLotteryList': '/mkg/api/query/filters', //查询模块获取彩票彩种列表
            'getGameRecord': '/u/api/game-lottery/search-order', //查询游戏记录
            'getTraceRecord': '/u/api/game-lottery/search-chase', //追号记录
            'getCountRecord': '/u/api/account/search-zbrecord', //账变记录
            'getRechargeRecord': '/u/api/account/search-recharge', //充值记录
            'getWithdrawRecord': '/u/api/account/search-withdraw', //取款记录
            'getDayreportRecord': '/u/api/report/report-game-lottery', //个人报表
            'getTeamRecord': '/u/api/report/report-team-lottery', //团队报表
            'getUserList': '/u/api/agent/list-team-account', //用户列表
            'cancelOrder': '/mkg/api/order/cancel', //撤单
            'cancelTrace': '/mkg/api/order/trace_cancel', //追号撤单
            'getUserLinks': '/mkg/api/agent/links', //链接管理
            'deleteUserLinks': '/mkg/api/agent/link_delete', //删除链接
            'getMsgCount': '/u/api/message/queryUnRMCount', //获取消息数
            'getQueryMessage': '/u/api/account/list-message', //消息列表数据
            'getIsRead': '/u/api/account/read-message', //阅读信息传送
            'getWechatInfo': '/mkg/api/users/getTqrCodePayInfo?codeType=2', //支付宝支付信息
            'getAlipayInfo': '/mkg/api/users/getTqrCodePayInfo?codeType=1', //微信支付信息
            'getSportDeals': '/api/i/u/query/orders/sb', //沙巴游戏记录
            'getPTDeals': '/api/i/u/query/orders/pt', //娱乐场游戏记录
            'getAGDeals': '/api/i/u/query/orders/ag', //AG游戏记录
            'getGameForms': '/mkg/api/query/sportdeals', //体育结算注单,报表查询
            'getPromoInfo': '/mkg/api/users/activity/queryActivityImages', //新版活动
            'getCurrPromo': '/mkg/api/users/activity/queryImageById', //单个活动
            'getBonusInfo': '/u/api/game-lottery/get-last-open', //开奖中心
            'onlineLotterys':'/u/api/game-lottery/openLotterys',//在售彩种
            'getUserBindInfos':'/u/api/account/get-bind-info',//已绑定的信息
            'getUserBindCards':'/u/api/account/list-card',//已绑定的银行卡
            'changename':'/mkg/api/users/change-name',//修改名称
            'chgfund':'/u/api/account/modify-withdraw-password',
            'initAccount':'/u/api/agent/prepare-add-account',//精准开户读取返点
            'addAccount':'/u/api/agent/add-account',//开户接口
            'chglogin':'/u/api/account/modify-password',
            'getUserBindSn':'/u/api/account/get-bind-status',
            'getcities':'/pay/getcities',//?provid=4
            'getUpdatePointInfo':'/u/api/agent/prepare-edit-point-by-quota',//读取返点?userId=8118
            'saveuserpoint':'/u/api/agent/edit-point-by-quota',//保存返点 toPoint:126 userId:8150
            'lotterysCurrentIssue':'/mkg/api/issue/lotterysCurrentIssue',//读取所有彩种奖期
            'lowerTransfer':'/api/i/u/transfer/lowerTransfer',//下级转账
            'nowIssueEndTime':'/u/api/game-lottery/static-open-time',//特定彩种的封单时间，用于倒计时 /hz/mkg/api/issue/nowIssueEndTime?lotteryId=3
            'withDrawCash': '/mkg/api/users/withdraw', //提现数据提交接口
            'weBet':'/u/api/wx-lottery/bet',//聊天投注接口
            'weMsg':'/u/api/wx-lottery/getMessage',//获取消息
            'weStatus':'/u/api/wx-lottery/getStatus',//获取状态
            'weInitGame':'/u/api/wx-lottery/init-game',//初始化游戏
            'weHistory':'/u/api/wx-lottery/search-zbrecord',//新账变记录接口
            'weCodes':'/u/api/game-lottery/static-open-code',//开机号码
            'weQcode':'/u/api/wx-lottery/getQcode',//获取推广二维码
            'weCancel':'/u/api/game-lottery/cancel-order',//撤单 
            'reqAllMethod':'/u/api/payment/request-all-method',
            'goThirdMethod':'/u/api/payment/request-thrid-pay',
            'goTransferPay':'/u/api/payment/request-transfer-pay',
            'getFavGame':'/u/api/game-lottery/get-favourite-game',//9个彩种 
            'addFavGame':'/u/api/game-lottery/add-favourite-game',//9个彩种 
            'removeFavGame':'/u/api/game-lottery/del-favourite-game',//9个彩种 
            'ballLengRe':'/u/api/game-lottery/search-lryl',//玩法遗漏冷热
            'lengRe':'/u/api/game-lottery/search-zhCm',//玩法遗漏冷热
            'vrlogin':'/u/api/game/vr',//VR登录链接
            'blank':''
        }
    },
    getUrl: function(apiName) {
        var params;
        if (arguments.length > 1) {
            params = arguments[1];
        }

        if (typeof Api.apimap.route[apiName] == 'object') {
            if (params) {
                if (arguments.length > 2) {
                    pageparams = arguments[2];
                    return [String(Api.apimap.route[apiName][params]).replace('.json', (pageparams.page > 1 ? '_' + pageparams.page : '') + '.json')].join('');
                }

                return [Api.apimap.route[apiName][params].join('')];
            }
        }
        return [Api.url, Api.apimap.route[apiName]].join('');
    },
    getCommon: function(route, p, fn, type) {
        var xhr = $.ajax({
            url: Api.getUrl(route, p),
            type: type == undefined ? 'GET' : type,
            dataType: "json",
            data: p,
            cache: false,
            timeout: 3000,
            success: function(data){
              if (data==-1) {
                window.location.href = "/welcome/sign.html";
              }
              //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              fn(data);
            },
            error:function(xhr, type) {
              if (type == 'timeout') {
                  //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              }else {
                  //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              }
            },
            beforeSend: function() {
                //typeof loadingDialog !== 'undefined' && loadingDialog.open();  
            }
        });
        /*xhr.done(function(res) {
            // wait.close();
            // $('.backdrop-dialog').remove();
            loadingDialog.close();
            fn(res);
        });
        xhr.fail(function() {
            // jb_this.close();
            fn('error');
        });*/
    },
    getCommonPass: function(route, p, fn, type) {
        var xhr = $.ajax({
            url: Api.getUrl(route, p),
            type: type == undefined ? 'GET' : type,
            dataType: "json",
            data: p,
            cache: false,
            timeout: 3000,
            success: function(data){
              if (data==-1) {
                $('.about .bar .a86 .b1').hide();$('.about nav').hide();
              }
              //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              fn(data);
            },
            error:function(xhr, type) {
              if (type == 'timeout') {
                  //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              }else {
                  //typeof loadingDialog !== 'undefined' && loadingDialog.close();
              }
            },
            beforeSend: function() {
                //typeof loadingDialog !== 'undefined' && loadingDialog.open();  
            }
        });
        /*xhr.done(function(res) {
            // wait.close();
            // $('.backdrop-dialog').remove();
            loadingDialog.close();
            fn(res);
        });
        xhr.fail(function() {
            // jb_this.close();
            fn('error');
        });*/
    },
    getCommonNoLoading: function(route, p, fn, type) {
        var xhr = $.ajax({
            url: Api.getUrl(route, p),
            type: type == undefined ? 'GET' : type,
            dataType: "json",
            data: p,
            cache: false,
            success: function(data){
              if (data==-1) {
                window.location.href = ctx+"/auth/signin.html";  
              }
              fn(data);
            },
            error:function(xhr, type) {
              fn('error');  
            }
        });
        /*xhr.done(function(res) {
            if (res==-1) {
              window.location.href = ctx+"/auth/signin.html";  
            }
            fn(res);
        });
        xhr.fail(function() {
            fn('error');
        });*/
    }
};
