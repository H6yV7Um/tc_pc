import Vue from 'vue';
import Router from 'vue-router';
import index from './../components/index.vue';
import newindex from './../components/newindex.vue';
import login from './../components/login.vue';
import register from './../components/register.vue';
import download from './../components/download.vue';
import appdownload from './../components/appdownload.vue';
import activity from './../components/activity.vue';
import sales from './../components/sales.vue';
import newsales from './../components/newsales.vue';
import qiandao from './../components/qiandao.vue';
import vip from './../components/vip.vue';
import mybonus from './../components/mybonus.vue';
import viewsale from './../components/viewsale.vue';
import detection from './../components/pageLineDetection.vue';
import usercenter from './../components/userCenter.vue';
import help from './../components/pageProblem.vue';
import NotFoundComponent from './../components/NotFoundComponent.vue';
import playDetails from './../components/playDetails.vue';
import aboutUs from './../components/aboutUs.vue';
import notice from './../components/notice.vue';
import userAccount from './../components/userAccount.vue';
import userMessage from './../components/userMessage.vue';
import userProxy from './../components/userProxy.vue';
import userReport from './../components/userReport.vue';
import sports from './../components/sports.vue';
import activityBig from './../components/activity_big.vue';
import BetSubject from './../components/betSubject.vue';
import FollowBet from './../components/followBet.vue';
import RewardPoints from './../components/rewardPoints.vue';
import PasswordReset from './../components/passwordReset.vue';
import integralMall from '../components/integralMall.vue';
import goodsDetail from '../components/goodsDetail.vue';
import cartList from '../components/cartList.vue';
import address from '../components/address.vue';
import Entertainment from '../components/entertainment.vue';
import RealPeople from '../components/realPeople.vue';
import SportsGame from '../components/sportsGame.vue';
import lottery from './../components/lottery.vue';
import pankou from './../components/pankou.vue';
import trendine from './../components/trend.vue';
// import dsLoginPage from '../components/dslogin.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login', name: 'indexs', component: newindex
        },
        {
            path: '/index', name: 'login', component: newindex
        },
        {
            path: '/new', name: 'new', component: newindex
        },
        {
            path: '/detection', name: 'detection', component: detection
        },
        {
            path: '/register', name: 'register', component: index
        },
        {
            path: '/rg/:agentId', name: 'agtregister', component: newindex
        },
        {
            path: '/register_mobile', name: 'register_m', component: register
        },
        {
            path: '/passwordReset', name: 'passwordReset', component: PasswordReset
        },
        // 第三方游戏
        {
            path: '/entertainment', component: Entertainment
        },
        {
            path: '/realPeople', component: RealPeople
        },
        {
            path: '/sportsGame', component: SportsGame
        },
        // 登录后信息显示
        {
            path: '/userInfo', name: 'userInfo', component: index
        },
        {
            path: '/followBet', name: 'followBet', component: FollowBet
        },
        {
            path: '/appdownload', name: 'appdownload', component: appdownload
        },
        {
            path: '/download', name: 'download', component: download
        },
        {
            path: '/activity/:pageId', name: 'activity', component: sales
        },
        // 活动页面
        {
            path: '/sales/:pageId', name: 'sales', component: sales
        },
        // {
        //     path: '/testds', name: 'loginds', component: dsLoginPage
        // },
        {
            path: '/newsales/:pageId', name: 'newsales', component: newsales
        },
        // 签到
        {
            path: '/qiandao', name: 'qiandao', component: qiandao
        },
        {
            path: '/jifen', name: 'vip', component: vip
        },
        {
            path: '/viewsale/:activeId/:pageId', name: 'viewsale', component: viewsale
        },
        {
            path: '/userCenter', name: 'usercenter', component: usercenter
        },
        {
            path: '/userAccount', name: 'userAccount', component: userAccount
        },
        {
            path: '/userMessage', name: 'userMessage', component: userMessage
        },
        {
            path: '/userProxy', name: 'userProxy', component: userProxy
        },
        {
            path: '/userReport', name: 'userReport', component: userReport
        },
        {
            path: '/help', name: 'help', component: help
        },
        {
            path: '/playDetails', name: 'Details', component: playDetails
        },
        {
            path: '/', name: 'login_home', component: login
        },
        {
            path: '', name: 'index', component: index
        },
        {
            path: '/aboutUs', name: 'aboutUs', component: aboutUs
        },
        {
            path: '/sports', name: 'sports', component: sports
        },
        {
            path: '/game-notice/:pageId', name: 'notice', component: notice
        },
        {
            path: '/activitys/:activityid', name: 'activityBig', component: activityBig
        },
        {
            path: '/betPlay/:betId', name: 'betPlay', component: BetSubject
        },
        {
            path: '/rewardPoints', name: 'rewardPoints', component: RewardPoints
        },
        {
            path: '/mall', name: 'integralMall', component: integralMall
        },
        {
            path: '/mybonus/:tabId', name: 'mybonus', component: integralMall
        },
        {
            path: '/goodsDetail', name: 'goodsDetail', component: goodsDetail
        },
        {
            path: '/cartList', name: 'cartList', component: cartList
        },
        {
            path: '/address', name: 'address', component: address
        },
        {
            path: '*', component: NotFoundComponent
        },
        // 投注
        {
          path: '/lottery', name: 'lottery', component: lottery
        },
        {
          path: '/pankou', name: 'pankou', component: pankou
        },
        {
          path: '/trend', name: 'trend', component: trendine
        }
    ]
});

//   path: '/detection', name: 'detection', component: detection
// },
