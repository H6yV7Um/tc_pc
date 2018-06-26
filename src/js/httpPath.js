const APPCONFIG = appConfig();
const APPAPI = {
  DOMAIN: APPCONFIG.domain,
  ROOTS: '/sso',
  ROOTSPATH: {
    // 登录验证码
    CAPTCHA: '/getImgCode',
    // 登录
    LOGIN: '/login',
    // 登录
    ULOGIN: '/u/login',
    // 退出登录
    LOGOUT: '/logout'
  },
  ROOTY: '/yx',
  POOTYPATH: {
    // 采种列表
    LOTTERY_LIST: '/u/api/game-lottery/openLotterys',
    // 用户信息
    USER_INFO: '/game-lottery/init-page',
    // 公告
    NOTICE_LIST: '/u/api/notice/list',
    // 注册验证码
    CAPTCHA: '/getImgCode',
    // 注册
    REGISTER: '/zyrg',
    // 自动登录
    REGAUTOLOGIN: '/rgv/autoLg',
    // 银行卡''
    LIST_CARD: '/u/api/account/list-card',
    // 获取用户全部信息
    USER_INFOALL: '/u/api/account/list-full-info',
    // 获取用户安全等级
    USER_STATUS: '/u/api/account/get-bind-status',
    // 获取银行卡列表
    LOADBANKS: '/u/api/account/prepare-bind',
    // 个人资料
    USER_DATA: '/u/api/account/apply-bind',
    // 添加银行卡
    ADD_BANK: '/u/api/account/bind-card',
    // 修改登录密码
    RESET_LOGINPASSWORD: '/u/api/account/modify-password',
    // 修改资金密码
    RESET_FUNDSPASSWORD: '/u/api/account/modify-withdraw-password',
    // 获取登录记录
    USER_LOGINDETAIL: '/u/api/account/list-userlogin-info',
    // 注册init接口
    USER_REGISTER: '/rg/init',
    // 站内信息
    USER_NOTICE: '/u/api/account/list-system-message',
    // 站内消息已读
    USER_NOTICEREADY: '/u/api/account/clear-system-message',
    USERLOOP: '/u/api/loop',
    LOGIN_URL: '/thirdGameApi/common/getLoginUrl', // 第三方游戏地址
    THIRD_PARTY_BALANCE: '/api/i/u/bank/getPcodeCbBaseList', // 第三方钱包
  },
  // 跟单相关接口
  GENDAN: {
    'myFocusUserList': '/gendan/followUser/myFocusUserList', // 我关注的跟单达人
    'foucusMe': '/gendan/followUser/focusedMeUserList', // 关注我的用户
    'focusUserInfor': '/gendan/followUser/getFollowUserInfo', // 关注的跟单达人的信息
    'cancelLikeByOrderId': '/gendan/cancelLikeByOrderId', // 取消点赞
    'getLikeStatusByOrderId': '/gendan/getLikeStatusByOrderId', // 获取点赞状态
    'getLottery': '/gendan/follow-order-query/get-lottery', // 跟单彩种查询
    'getLotteryMethod': '/gendan/follow-order-query/get-lottery-method', // 跟单彩种玩法查询接口
    'getOrder': '/gendan/follow-order-query/get-order', // 跟单详情查询接口
    'getList': '/gendan/follow-order-query/list', // 跟单列表查询接口
    'followOrder': '/gendan/follow-order', // 跟单
    'getUserIconList': '/gendan/follow-user-icon/list', // 跟单用户可选头像接口
    'hotPlayMethodList': '/gendan/hotPlayMethodList', // 热门玩法接口
    'orderStarList': '/gendan/orderStarList', // 跟单名人榜接口
    'addFollowOrder': '/gendan/add-follow-start-order', // 发起跟单接口
    'popularOrderList': '/gendan/popularOrderList', // 人气跟单接口
    'yesterdayProfitList': '/gendan/yesterdayProfitList', // 昨日盈利榜接口
    'setFollowUserInfo': '/gendan/followUser/setFollowUserInfo', // 设置用户昵称和头像
    'getUserInfoNew': '/gendan/followUser/getUserInfo',
    'followUser': '/gendan/followUser/followUser', // 关注
  }
};
export default {
  APPAPI
};
