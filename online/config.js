var LtClsLibs = LtClsLibs || {};
var _pankouInit = null;

function appConfig() {
    let cof = {
        // 域名
        domain:'http://test.tc508.com',
        // 测速地址
        speedSrc: 'https://tc508.com,https://toucaiyl.com,https://toucaiylcenter.com,https://toucaiylglobal.com,http://toucaiylstudio.com,http://toucaiylworld.com'.split(','),
        // 测速参数
        speedConfig: [[95, 85, 75, 65, 55, 45, 35, 35, 35], ['线路一', '线路二', '线路三', '线路四', '线路五', '线路六', '线路七']],
        // 下载页面android 二维码
        downloadAndroid: '/static/images/img/ercodeAndroid.png',
        // 下载页面ios 二维码
        downloadIos: '/static/images/img/downloadIOS.png',
        // 项目title
        title: '头彩',
        fullname: '头彩娱乐',
        isqiandao: true,
        hotlt: [11, 43, 911, 200, 201, 202],
        newlt: [50, 61],
        // DIST目录
        distpath: '/static/v3/js/game/',
        // 设置色站连接过期时间 /ms  毫秒
        expiredReferrer: 8640000,
        // 第三方游戏集合
        thirdPartyGame : {
            // 是否开启棋牌
            cardObj : {platformId : 7, isOpen : true, val: 'ky_01'},
            // 是否开启真人娱乐
            realObj : {platformId : 5, isOpen : true, val: 'agin_01'},
            // 是否开启体育
            sportObj : {platformId : 6, isOpen : true, val: 'im_01'},
        },
        ltgroups: {
            'ssc': [11, 46, 151, 911, 161, 119, 711, 6, 811, 191, 200, 601, 201, 51, 202, 203, 42, 205, 206, 711],
            'pk10': [204, 43, 47],
            '11y': [21, 22, 24, 23, 28, 26],
            '3d': [41],
            'k3': [31, 32, 33, 35, 36],
            'kl8': [],
            'lhc': [801]
        },
        getClsFile: function () {
            return ltClsFile;
        },
        pankouInit : function(obj) {
            if (obj) _pankouInit = obj;
            return _pankouInit;
        },
        //六合彩
        isLhcShow:true,
        loginType: 0,
        activityMap: {
            '798c3e945d3a17db5223e6d3ff614615c53eef15336ecfcc': 3,
        },
        referrerMap: ['e8b990acfe34c8f9', 'da8c751bb8627018', 'd35fe83aa85669d7175a3e246dfd4b42'],

        // 客服链接
        customerService: 'https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=925834&configID=8015&jid=8547731414&s=1'
    };
    return cof;
}
