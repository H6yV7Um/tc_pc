const appConfig = () => {
  const cof = {
    // app 背景图
    appbgSrc: ['/static/appbg/bg'],
    // 背景切换缩略图边框
    bgBorder: '2px solid #c8c8c8',
    // 活动页面 标题图标
    activityImg: '/static/appbg/activityIcon.png,/static/appbg/activityIconHover.png'.split(','),
    // 测速地址
    speedSrc: 'zhushezx.com,fengdejiaye.com,oshy.cn,sehr.cn,gziot.top,wetuijian.top,czgfzx.top,wanbin.top,buybye.top'.split(','),
    // 测速参数
    speedConfig: [[95, 85, 75, 65, 55, 45, 35, 35, 35], ['线路一', '线路二', '线路三', '线路四', '线路五', '线路六', '线路七', '线路八', '线路九']],
    // 首页滚动数据
    lotterySilde: {
      // 滚动间隔时间
      time: 5000,
      // 滚动速度
      speedtime: 50,
      // 是否开启循环
      isCycle: false
    },
    // 用户中心 canvas配置
    userConterColor: {
      // 背景颜色
      bomBg: '#ddd',
      // 进度层颜色
      progress: '#ff8012',
      // 上层颜色
      upBg: '#fff',
      // 文字颜色
      ctx: '#ff8012',
      // 文字font
      ctxft: '26px Arial',
      // 进度还起始位置X
      startX: 70,
      // 进度还起始位置Y
      startY: 65,
      // 半径
      roundRadius: 60,
      // 进度环宽度
      progressRadius: 7
    },
    // 项目title
    title: '2018'
  };
  return cof;
};

export {
  appConfig
};
