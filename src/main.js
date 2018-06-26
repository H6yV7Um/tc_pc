import Vue from 'vue';
import App from './App.vue';
import router from './router';
import resource from 'vue-resource';
import vuex from 'vuex';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import filters from './filters/filters';
import iview from 'iview';
import 'iview/dist/styles/iview.css';
// import vTooltip from 'v-tooltip';

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})
// router.beforeEach((to, from, next) => {
//   // ...
//   let resetUrl = null;
//   console.log(to, from)
//   if(!!to.query && !!to.query.referrer) {
//     console.log(66666)
//     resetUrl = '/login?referrer=' + from.query.referrer;
//     if(to.path === '/login') {
//       console.log(789)
//       next();
//     }else{
//       next({path: '/login', query: {'referrer': 'hggfghfghf'}});
//       console.log(456, resetUrl)
//     }
//
//   }else{
//     console.log('执行不到');
//     next()
//   }
//   next()
//   // next({ path: '/index' })
// })

Vue.config.productionTip = false;
Vue.use(resource);
Vue.use(vuex);
Vue.use(VueAwesomeSwiper);
Vue.use(iview);
// Vue.use(vTooltip);

var store = new vuex.Store({
  state: {
    isLogin: localStorage.getItem('_status') || 'false',
    isIndex: localStorage.getItem('_isIndex') || 'true',
    contenStatus: {},
    allLotteryList: [],
    baseInfo : {},
    accountType : 0,
    imgPath : '/static/images/img/bg1.jpg',
    stationNoticeLen : 0,
    noticeLen : 0,
    personalDetail : null,
    gradeMsg: {
      num: 0,
      title: ''
    },
    accountStatus: {},
    isPswResetPage: false,
    singleGoods: {},
    cartTotalCount: 0
  },
  mutations: {
    loginStatus (state, status) {
      localStorage.setItem('_status', status);
      state.isLogin = status;
    },
    isIndexs (state, status) {
      localStorage.setItem('_isIndex', status);
      state.isIndex = status;
    },
    userContenStatus (state, status) {
      state.contenStatus = status;
    },
    setAllLotteryList (state, list) {
        state.allLotteryList = list;
    },
    setBaseInfo (state, obj) {
      state.baseInfo = Object.assign({}, state.baseInfo, obj);
    },
    setAppImg (state, imgPath) {
      state.imgPath = '/static/images/img/' + imgPath;
    },
    setAccountType (state, type) {
      state.accountType = type;
    },
    setPersonalDetail (state, event) {
      state.personalDetail = event;
    },
    initPersonalDetail (state, event) {
      state.personalDetail = null;
    },
    setStationNotice (state, length) {
      state.stationNoticeLen = length;
    },
    setNoticeLen (state, length) {
      state.noticeLen = length;
    },
    setUserGrade(state, gradeMsg) {
      state.gradeMsg = Object.assign({}, gradeMsg);
    },
    setAccountStatus(state, accountStatus) {
      state.accountStatus = Object.assign({}, accountStatus);
    },
    setPswResetPage(state, isPswResetPage) {
      state.isPswResetPage = isPswResetPage;
    },
    setSingleGoods(state, goods) {
      state.singleGoods = Object.assign({}, goods);
    },
    setCartTotalCount(state, count) {
      state.cartTotalCount = count;
    }
  }
});

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filters,
  template: '<App/>',
  components: { App },
  store
});
