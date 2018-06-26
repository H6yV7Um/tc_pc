<template>
  <div class="activity userconterWarep userCentWarp">
    <div class="contentMain nav  bgcolorA bdrdtop6">

      <pageUserNav></pageUserNav>


      <div class="clearfix  userContenWarps" style="padding-bottom:30px;">


        <div class="fl contentMainLeft">
          <div class="userInfo bgcolorA bdcc bdrd6">
            <div class="userHeader clearfix colorJ">
              <img src="../img/index/userImgBig.png" alt="" class="userHeaderImg fl mr15">
              <div class="fl txtl ft14" style="line-height:28px;">
                <div class=" color9">{{baseInfo.userTime}}！<b style="font-weight:600;" class="colorlb">{{baseInfo.nickName}}</b>
                </div>
                <div class="userBomDiv bgcolorF5 mt5">
                  <div class="userBomMain userBomDiv" :style="{width:gradeMsg.num+'%'}"></div>
                </div>
                <div class="clearfix color9">
                  <p class="fl">账户安全等级：<span>{{gradeMsg.title}}</span></p>
                </div>

              </div>

              <!-- <p class="ft12 mt7 clear userHeaderIp txtcen">上次登录：<span>{{loginTime}}</span></p> -->
            </div>
            <div class="userHeader bdtop clearfix colorJ" style="margin-top:5px;padding-top:0;">

              <div class=" txtl ft14 userHeaderDiv" style="line-height:21px;">

                <div class=" color9 "><i class="icon  ft18 colorc"
                                         style="margin-top:-3px;margin-right:4px;">&#xe695;</i>账户总额：
                  <router-link to="/userReport#page=2_report" class="fr ft14 color3 mr5 mt8">资金明细</router-link>
                </div>
                <div class=" colorlb userHeaderBalance mt10 ft28 relative">{{lotteryBalance}}<i
                  class="icon fr ml10 mt3 color9 cursor mr8" @click="userRefresh">&#xe614;</i></div>

              </div>

            </div>
            <div class="userHeader clearfix colorJ" style="margin-top:0;padding-top:0;">

              <router-link to="/userAccount#page=0_finance" class="fl ft16 userHeaderBtn userHeaderBtnL mt8 ">充值
              </router-link>
              <router-link to="/userAccount#page=1_finance" class="fr ft16 userHeaderBtn userHeaderBtnR mt8 ">提现
              </router-link>
            </div>
          </div>


          <!-- <div class="bankMain  mt15 TransferAccount">
                          <h3 class="ft14 colorAa txtl clearfix userMainWarpH3 bgcoloref"><i class="FT1980 ft20 color9 fl mr5">&#xe643;</i>转账</h3>
                          <div class=" clearfix accontMain  bdc bdrdbom6" >
                              <div class="accontMainBox ft14 color9 clearfix txtl">
                                  <b class="fl mt3 mr10">转出</b>
                                  <select class="fl bgcolofJ bdc colorlb ft14 mr10" data-type="static-bigger" name="fromacc">
                                      <option value="sobet_01" selected="selected">主账户</option>
                                      <option value="pt_01">PT钱包：¥ 0.000</option>
                                      <option value="ag_01">AG钱包：¥ 0.000</option>
                                  </select>
                                  <b class="fl mt3 ">余额</b>
                              </div>

                              <div class="accontMainBox ft14 color9 clearfix txtl mt15" >
                                  <b class="fl mt3 mr10">转出</b>
                                  <select class="fl bgcolofJ bdc color6e ft14 mr10"  data-type="static-bigger" name="toacc">
                                      <option value="pt_01" selected="selected">PT钱包</option>
                          <option value="ag_01">AG钱包</option>
                          <option value="sobet_01">主账户</option>
                                  </select>
                                  <b class="fl mt3 ">余额</b>
                              </div>
                              <div class="accontMainBox accontMainBox2 ft14 color9 clearfix txtl mt15" >
                                  <b class="fl mt7 mr10">转出</b>
                                  <input class="fl bgcolofJ bdc colorlb ft14 mr10" type="text" name="amount" value="" placeholder="请输入转账金额">
                                  <b class="fl mt3 accontMainBoxBtn colorA">全部转入</b>
                              </div>
                              <div class="" style="width: 100%;height:15px;"></div>
                              <a class="accontMainBtn colorA ft14 cursor inputlineBtn" name="submit">确认转账</a>
                          </div>
                      </div> -->

          <div class="bankMain clearfix mt15">
            <h3 class="ft14 colorAa txtl clearfix userMainWarpH3 bgcoloref"><i
              class="icon ft20 color9 fl mr5">&#xe630;</i>银行卡管家</h3>
            <div class=" clearfix  bdc bdrdbom6" style="padding:0 0 10px 0;overflow:hidden;">
              <ul class="usercenterMmain_Card mt10 clearfix bgcolorA">
                <li class=" clearfix fl ml15" v-for="(item,index) in bindBankList" :class="'bank'+item.bankId">
                  <!--litrue-->
                  <!-- <span :class="'fl bank'+item.bankId" ></span> -->
                  <p class="txtcen  colorA">
                    {{item.bankName}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卡号:****{{item.bankCardId}}</p>
                  <!--<img v-if="item.isDefault" src="../img/user/usercenterright.png" />-->
                </li>
                <li v-show="isAddBank" v-for="(item,index) in bindBankLists"
                    class="clearfix bgcoloref usercenterMmain_CardLi fl cursor ml15" @click="setUserData">
                  <i class="icon ft22" style="color:#d4d4d4;">&#xe61d;</i>
                </li>
              </ul>
            </div>
          </div>

          <div class="bankMain  ">
            <h3 class="ft14 colorAa txtl clearfix userMainWarpH3 bgcoloref"><i
              class="icon ft20 color9 fl mr5">&#xe608;</i>最近登录日志</h3>
            <!-- <span class="fr cuesor"  v-show="isAddBank" @click="setUserData"><i class="matai ft22 colorY cursor fl mr5">&#xe650;</i>添加</span> -->
            <div class=" clearfix  bdc bdrdbom6">
              <div class="usercenterMmain_header_left_bom clearfix ">
                <table border="" cellspacing="" cellpadding="" class="usercenterMmai_table">
                  <tr class="tableTi">
                    <th width="60%">时间</th>
                    <th width="40%">IP</th>
                  </tr>
                  <tr class="tableCt color9" v-for="item in loginListInfo">
                    <td>{{item.loginTime}}</td>
                    <td class="usercenterMmai_tabletd">
                      <div :title="item.address">
                        {{item.address}}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>


        </div>
        <div class="fr contentMainRight">


          <!-- <div class="bankMain  mt15">
                          <h3 class="ft14 colorAa txtl clearfix userMainWarpH3 bgcoloref"><i class="matai ft22 colorY fl mr5">&#xe650;</i>账号资料</h3>
                          <div class=" clearfix  bdc bdrdbom6 color9" >
                              <ul class="accountZL ft14 clearfix">
                                  <li class="bdre4 fl mt15"><i class="matai ft22 color9 cursor mr5">&#xe650;</i>银行卡管家: <b class="colorf8">代理</b></li>
                                  <li class="bdre4 fl mt15"><i class="matai ft22 color9 cursor mr5">&#xe650;</i>银行卡管家: <b class="colorf8">代理</b></li>
                                  <li class="bdre4 fl mt15"><i class="matai ft22 color9 cursor mr5">&#xe650;</i>银行卡管家: <b class="colorf8">代理</b></li>
                                  <li class="bdre4 fl mt15"><i class="matai ft22 color9 cursor mr5">&#xe650;</i>银行卡管家: <b class="colorf8">代理</b></li>

                                  <li class="fl mt15"><i class="matai ft22 color9 cursor mr5">&#xe650;</i>银行卡管家: <b class="colorf8">代理</b></li>
                              </ul>
                          </div>
                      </div> -->


          <div class="bankMain  mt15">
            <h3 class="ft14 colorAa txtl clearfix userMainWarpH3 bgcoloref"><i
              class="icon ft20 color9 fl mr5">&#xe69f;</i>安全中心</h3>
            <div class=" clearfix safetyBox  bdc bdrdbom6 color9">
              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe641;</i>
                </div>
                <h4 class="fl ft18 clearfix txtl mt10">登陆密码
                  <button class="fr bgImgBtn colorA cursor" @click="setPwd('pwd')">修改</button>
                </h4>
                <p class="ft12 fl txtl">建议您使用字母和数字的组合、混合大小写、在组合中加入下划线等符号。</p>
              </div>
              <div class="safetyWarp bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10">
                  <i class="icon ft42 colorY cursormr5">&#xe641;</i>
                </div>
                <h4 v-show="isbind.isBindWithdrawPassword" class="fl ft18 clearfix txtl mt10">资金密码
                  <button class="fr bgImgBtn colorA cursor" @click="setPwd('funds')">修改</button>
                </h4>
                <h4 v-show="!isbind.isBindWithdrawPassword" class="fl ft18 clearfix txtl mt10">资金密码
                  <button class="fr bgImgBtn colorA cursor" @click="setUserData">设置</button>
                </h4>
                <p class="ft12 fl txtl">在进行银行卡绑定，转账等资金操作时需要进行资金密码确认，以提高您的资金安全性。</p>
              </div>

              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe667;</i>
                </div>
                <h4 v-show="isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定取款人
                  <button class="fr abgcolorc colorA cursor">已绑定</button>
                </h4>
                <h4 v-show="!isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定取款人
                  <button class="fr bgImgBtn colorA cursor" @click="setUserData">设置</button>
                </h4>
                <p class="ft12 fl txtl">绑定取款人后您可以绑定银行卡，并且只能绑定与取款人相同的银行卡资料。</p>
              </div>

              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe630;</i>
                </div>
                <h4 v-show="isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定银行卡
                  <button class="fr abgcolorc colorA cursor">已绑定</button>
                </h4>
                <h4 v-show="!isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定银行卡
                  <button class="fr bgImgBtn colorA cursor" @click="setUserData">设置</button>
                </h4>
                <p class="ft12 fl txtl">绑定取款人后您可以绑定银行卡，并且只能绑定与取款人相同的银行卡资料。</p>
              </div>

              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe630;</i>
                </div>
                <!-- <h4 v-show="isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定银行卡<button class="fr abgcolorc colorA cursor">已绑定</button></h4> -->
                <h4 class="fl ft18 clearfix txtl mt10">用户名
                  <button class="fr bgImgBtn colorA cursor" @click="usernameClick"
                          :class="[isbind.isCnReset && 'disable_click']">设置
                  </button>
                </h4>
                <p class="ft12 fl txtl">手机号注册时用户名自动生成，可点击此处修改。用户名只可修改一次</p>
              </div>
              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe630;</i>
                </div>
                <!-- <h4 v-show="isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定银行卡<button class="fr abgcolorc colorA cursor">已绑定</button></h4> -->
                <h4 class="fl ft18 clearfix txtl mt10">绑定手机号
                  <button class="fr bgImgBtn colorA cursor" @click="mobileClick"
                          :class="[isbind.isBindPhone && 'disable_click']">设置
                  </button>
                </h4>
                <p class="ft12 fl txtl">用户名注册时可点击此处绑定手机号。手机号只可绑定一次</p>
              </div>
              <div class="safetyWarp  bdcc fl mt10">
                <div class="safetyWarpLeft fl ml20 mr10 ">
                  <i class="icon ft42 colorY cursormr5">&#xe630;</i>
                </div>
                <!-- <h4 v-show="isbind.isBindWithdrawName" class="fl ft18 clearfix txtl mt10">绑定银行卡<button class="fr abgcolorc colorA cursor">已绑定</button></h4> -->
                <h4 class="fl ft18 clearfix txtl mt10">用户昵称 {{(userInfor.nickName ? userInfor.nickName :'未设置')}}
                  <button class="fr bgImgBtn colorA cursor" @click="showNicknameBox"
                          :class="[userInfor.nickName && 'disable_click']">{{userInfor.nickName ? '修改' :'设置'}}
                  </button>
                </h4>
                <p class="ft12 fl txtl">用户名注册时可点击此处绑定手机号。手机号只可绑定一次</p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>

    <!--
       <router-link to="/">Go to index</router-link>
       <router-link to="/login">Go to index</router-link>
       <router-link to="/register">Go to index</router-link>-->

    <div v-show="isbindBg || isuserbank == '1'" class="bindBox BgRgbB4"
         :style="{ width:width+'px', height:height+'px'}"></div>
    <div v-show="!isCloseUserData || isuserbank == '1'"
         class="jBox-wrapper jBox-Modal jBox-Default common-modal grey jBox-hasTitle jBox-closeButton-title"
         style="position: fixed;width: 1140px;   opacity: 1; z-index: 100000;left: 50%;top: 50%;margin-left: -570px;margin-top: -224px;">
      <div class="jBox-container">
        <div class="jBox-title jBox-draggable">
          <div><i class="icon lock"></i>个人资料<span class="title-sm"></span></div>
          <div class="jBox-closeButton jBox-noDrag" @click="closeUserData">
            <svg viewBox="0 0 24 24">
              <path
                d="M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"></path>
            </svg>
          </div>
        </div>
        <div class="bgcolorA" style="padding-bottom: 20px;">
          <div id="ModLoginPwd" class="manager">
            <div class=" ">
              <div class="form">
                <table class=" User_form-control-float">
                  <tbody>
                  <tr>
                    <td class="label-f">真实姓名：</td>
                    <td class="value ipt">
                      <input name="nickName" v-if="nickNames" v-model="nickNames" disabled="disabled" type="text"
                             class="form-control input  ">
                      <input name="nickName" v-else v-model="realName" @blur="isRealName" type="text"
                             class="form-control input  ">
                    </td>
                    <td class="value note" v-cloak>{{nickNameNote}}</td>
                  </tr>
                  <tr>
                    <td class="label-f">选择开户行：</td>
                    <td class="value ipt" v-cloak>
                      <select name="" v-model="openBank" class="colorf bgcolor"
                              style="width: 100%;height: 30px;border-radius: 6px;padding: 0 10px;outline: none;border: 0;display:block;">
                        <option v-for="item in bankList" :value="item.id" class="bgcolorA colorJ"
                                style="outline: none;border: 0;">{{item.name}}
                        </option>
                      </select>
                    </td>
                    <td class="value note"></td>
                  </tr>
                  <tr>
                    <td class="label-f">支行名称：</td>
                    <td class="value ipt">
                      <input name="bankName" v-model="bankName" @blur="isbankName" type="text"
                             class="form-control input  ">
                    </td>
                    <td class="value note" v-cloak>{{backNmaeNote}}</td>
                  </tr>
                  <tr>
                    <td class="label-f">银行卡号：</td>
                    <td class="value ipt"><input name="bankNumber" v-model="bankNumber" @blur="isbankNumber" type="text"
                                                 class="form-control input  "></td>
                    <td class="value note" v-cloak>{{ bankNumberNote }}</td>
                  </tr>
                  <tr>
                    <td class="label-f">确认银行卡号：</td>
                    <td class="value ipt"><input name="bankNumberAgain" v-model="bankNumberAgain"
                                                 @blur="isbankNumberAgain" type="text" class="form-control input  ">
                    </td>
                    <td class="value note" v-cloak>{{bankNumberNoteAgain}}</td>
                  </tr>
                  <tr>
                    <td class="label-f">资金密码：</td>
                    <td class="value ipt"><input name="fundsPwd" v-model="fundsPwd" type="password" @blur="isfundsPwd"
                                                 class="form-control input  "></td>
                    <td class="value note" v-cloak>{{fundsPwdNote}}</td>

                  </tr>
                  <tr>
                    <td class="label-f">&nbsp;</td>
                    <td class="value ipt" colspan="2" style="width:670px;">
                      若是首次绑定银行卡，此栏位为设置资金密码，请您设置后牢记，该密码用于日后验证您的资金操作。
                    </td>
                  </tr>
                  <template v-if="nickNames">
                    <tr>
                      <td class="label-f"></td>
                      <td class="value ipt clearfix" style="text-align: left; ">
                        <input name="submit" type="button" style="width:50%; cursor: pointer;outline:none;"
                               class="button fl colorf bgcolor" @click="sendUserData" value="确认添加">
                        <input name="submit" type="button "
                               style="width:30%; cursor: pointer; text-align: center;outline:none;color:#fff;background:#d0d0d0;"
                               class="button fr colorf bgcolorc" @click="closeUserData" value="取消">
                      </td>
                      <td class="value note" v-cloak>{{receiveError}}</td>
                    </tr>
                    <tr>
                      <td class="label-f">温馨提示：</td>
                      <td class="value note" style="width: 680px;">
                        平台支持绑定绑定5张同姓名不同卡号的银行卡。您所绑定的所有银行卡都必须在一个持卡人名下，这是为了保障您的资金安全，避免盗号者将您的资金全部转移到自己的银行卡下。
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td class="label-f"></td>
                      <td class="value ipt" style="text-align: left;"><input name="submit" type="button"
                                                                             style="width:60%; cursor: pointer;outline:none;"
                                                                             class="button bgcolor colorf"
                                                                             @click="sendUserData" value="提交绑定"></td>
                      <td class="value note" v-cloak>{{receiveError}}</td>
                    </tr>
                    <tr>
                      <td class="label-f">操作提示：</td>
                      <td class="value note">为了保障您的账户安全，请认真填写您的银行信息，资料一经绑定，无法再次修改。</td>
                    </tr>
                  </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="resetPwd"
         class="jBox-wrapper jBox-Modal jBox-Default common-modal grey jBox-hasTitle jBox-closeButton-title"
         style="position: fixed;  opacity: 1; z-index: 10000; left: 50%; top: 50%; margin-left: -275px; margin-top: -150px;">
      <div class="jBox-container">
        <div class="jBox-title jBox-draggable">
          <div><i class="icon lock"></i>修改{{replaceTitle}}<span class="title-sm">（为了保障您的资金安全，修改后请牢记您的密码）</span></div>
          <div class="jBox-closeButton jBox-noDrag" @click="closePwd">
            <svg viewBox="0 0 24 24">
              <path
                d="M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"></path>
            </svg>
          </div>
        </div>
        <div class="bgcolorA" style="padding-bottom: 20px;">
          <div id="ModLoginPwd" class="manager">
            <div class=" ">
              <div class="form">
                <table class="form-control-float form-control-floatererl">
                  <tbody class="psw_set">
                  <tr>
                    <td class="">当前{{replaceTitle}}：</td>
                    <td class="value">
                      <input name="oldPassword" type="password" v-model="oldPassword"
                             class="form-control input" @focus="isPswFocus('oldPassword',$event)"
                             @blur="isPswBlur('oldPassword')">
                      <span class="help-inline"></span>
                      <em>{{oldPasswordTip}}</em>
                    </td>
                  </tr>
                  <tr>
                    <td class="">请输入新密码：</td>
                    <td class="value">
                      <input name="newPassword" type="password" v-model="newPassword"
                             class="form-control input" @focus="isPswFocus('newPassword')"
                             @blur="isPswBlur('newPassword')">
                      <span class="help-inline"></span>
                      <em>{{newPasswordTip}}</em>
                    </td>
                    <td class="tip_content"></td>
                  </tr>
                  <tr>
                    <td class="">请重复新密码：</td>
                    <td class="value">
                      <input name="rePassword" type="password" v-model="rePassword"
                             class="form-control input" @focus="isPswFocus('rePassword')"
                             @blur="isPswBlur('rePassword')">
                      <span class="help-inline"></span>
                      <em>{{rePasswordTip}}</em>
                    </td>
                  </tr>
                  <tr class="actions">
                    <td class="mt8"></td>
                    <td class="value mt15">
                      <div class="button-groups mt5"><input name="submit" type="button" @click="sendResetPwd()"
                                                            class="button colorf bgcolor" style="outline:none;"
                                                            value="确认修改"><input @click="closePwd" name="cancel"
                                                                                type="button" class="button"
                                                                                style="outline:none;color:#fff;background:#d0d0d0;"
                                                                                value="取消"></div>
                    </td>
                  </tr>
                  <tr class="actions">
                    <td class="values" colspan="2">
                      <div class="button-groups colorr" style="text-align: center; 10px;width: 100%;">
                        {{resetPwdErroe}}
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="editNickname"
         class="jBox-wrapper jBox-Modal jBox-Default common-modal grey jBox-hasTitle jBox-closeButton-title"
         style="position: fixed;  opacity: 1; z-index: 10000; left: 50%; top: 50%; margin-left: -275px; margin-top: -150px;">
      <div class="jBox-container">
        <div class="jBox-title jBox-draggable">
          <div><i class="icon lock"></i>{{userInfor.nickName ? '修改':'设置'}}昵称<span class="title-sm"></span></div>
          <div class="jBox-closeButton jBox-noDrag" @click="closeNicknameBox">
            <svg viewBox="0 0 24 24">
              <path
                d="M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"></path>
            </svg>
          </div>
        </div>
        <div class="bgcolorA" style="padding-bottom: 20px;">
          <div id="ModLoginPwd" class="manager">
            <div class=" ">
              <div class="form">
                <table class="form-control-float form-control-floatererl">
                  <tbody class="psw_set">
                  <tr>
                    <td class="">昵称</td>
                    <td class="value">
                      <input name="oldPassword" type="text" v-model="newNickname" class="form-control input">
                      <span class="help-inline"></span>
                      <em>{{oldPasswordTip}}</em>
                    </td>
                  </tr>
                  <tr class="actions">
                    <td class="mt8"></td>
                    <td class="value mt15">
                      <div class="button-groups mt5">
                        <input name="submit" type="button" @click="setNickname" class="button colorf bgcolor"
                               style="outline:none;" value="确认修改">
                        <input @click="closeNicknameBox" name="cancel" type="button" class="button"
                               style="outline:none;color:#fff;background:#d0d0d0;"
                               value="取消"></div>
                    </td>
                  </tr>
                  <tr class="actions">
                    <td class="values" colspan="2">
                      <div class="button-groups colorr" style="text-align: center; 10px;width: 100%;">
                        {{resetNicknameError}}
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal width="481" v-model="usernameShow" class-name="vertical-center-modal username_reset">
      <p slot="header">
        <span class="username_title">用户名设置</span>
      </p>
      <div class="content_body">
        <label>用户名:</label>
        <input type="text" class="form-control" v-model="formObj.username.val" @focus="focusInput('username')"
               @blur="regCheck('username')" placeholder="请输入用户名"/>
        <div class="tipMessage" v-show="formObj.username.isShow">{{formObj.username.tip}}</div>
      </div>
      <div class="content_body">
        <label>登录密码:</label>
        <input type="password" class="form-control" v-model="formObj.psw.val" @focus="focusInput('psw')"
               @blur="regCheck('psw')" placeholder="请输入登录密码"/>
        <div class="tipMessage" v-show="formObj.psw.isShow">{{formObj.psw.tip}}</div>
      </div>
      <div class="content_body" v-show="isBindWithdrawPassword">
        <label>资金密码:</label>
        <input type="password" class="form-control" v-model="formObj.fundPsw.val" @focus="focusInput('fundPsw')"
               @blur="regCheck('fundPsw')" placeholder="请输入资金密码"/>
        <div class="tipMessage" v-show="formObj.fundPsw.isShow">{{formObj.fundPsw.tip}}</div>
      </div>
      <div class="error_msg">{{login_pass_error}}</div>
      <div slot="footer" class="content_footer">
        <Button class="confirm_btn" size="small" @click="setUsername">确定</Button>
        <Button class="cancel_btn" @click="cancelClick('username')">取消</Button>
      </div>
    </Modal>
    <Modal width="481" v-model="mobileShow" class-name="vertical-center-modal mobile_reset">
      <p slot="header">
        <span class="username_title">绑定手机号</span>
      </p>
      <div class="content_body main_input">
        <label>手机号:</label>
        <input type="text" class="form-control" v-model="formObj.mobile.val" @focus="focusInput('mobile')"
               @blur="regCheck('mobile')" placeholder="请输入手机号"/>
        <p class="tipMessage" v-show="formObj.mobile.isShow">{{formObj.mobile.tip}}</p>
        <!--<div class="error_container">{{formObj.mobile.error}}</div>-->
      </div>
      <div class="verify_img content_body clearfix main_input" v-cloak>
        <label>图片验证码:</label>
        <!--<i class="icon">&#xe69d;</i>-->
        <div class="input_wrapper">
          <input class="BgRgbB0 ft14 form-control" type="text" v-model="formObj.verifyImg.val" placeholder="请输入图片验证码"/>
          <div class="imgWrapper"><img v-bind:src="safetySrc" @click="RefreshSrc" alt=""></div>
        </div>
        <p class="tipMessage" v-show="formObj.verifyImg.isShow">{{formObj.verifyImg.tip}}</p>
        <!--<div class="error_container">{{formObj.verifyImg.error}}</div>-->
      </div>
      <div class="verify_code content_body clearfix main_input">
        <label>手机验证码:</label>
        <!--<i class="icon">&#xe69d;</i>-->
        <div class="input_wrapper">
          <input class="BgRgbB0 ft14 form-control" type="text" v-model="formObj.verifyCode.val"
                 placeholder="请输入手机验证码"/>
          <div class="get_code" @click="get_verify_code()">点击发送</div>
          <div class="count_down" v-show="isCountFinish">{{countTime}}</div>
        </div>
        <p class="tipMessage" v-show="formObj.verifyCode.isShow">{{formObj.verifyCode.tip}}</p>
        <!--<div class="error_container">{{formObj.verifyCode.error}}</div>-->
      </div>
      <div class="error_msg">{{login_pass_error1}}</div>
      <div slot="footer" class="content_footer">
        <Button class="confirm_btn" size="small" @click="setMobile">确定</Button>
        <Button class="cancel_btn" @click="cancelClick('mobile')">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>

  import pagefooter from './pagefooter.vue';
  import pagrUserHeader from './pagrUserHeader.vue';
  import pageUserNav from './pageUserNav.vue';
  import {userConter, userInit, inputlineBtn, Prompt, registerInit, getVerifyCode, gendan} from '../js/index.js';
  import {verifyRule} from '../js/const.js';

  let gendanFn = gendan()

  let constructObj = function () {
    let obj = {};

    for (let key in verifyRule) {
      if (key === 'username' || key === 'mobile' || key === 'psw' || key === 'fundPsw' || key === 'repeatPsw' || key === 'verifyImg' || key === 'verifyCode' || key === 'fundPsw') {
        obj[key] = {
          isShow: false,
          val: '',
          tip: verifyRule[key].tip,
          reg: verifyRule[key].reg,
          error: verifyRule[key].error,
          isPass: false,
          isFocus: false
        }
      }
    }
    return obj
  };

  let getSrcSafe = registerInit();
  let init = {
    userHeader: userInit(),
    userContent: userConter()
  };
  let oPrompt = Prompt();

  export default {
    name: 'warp',
    data() {
      return {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        isBindWithdrawPassword: null,
        initColor: localStorage.getItem('_bgIndex') !== 'undefined' ? localStorage.getItem('_bgIndex') : 1,
        resetPwd: false,
        lotteryBalance: 0,
        safetySrc: '',
        isCountFinish: false,
        countTime: 60,
        isbind: {},
        bindBankList: [], // 已绑定银行卡列表
        bankList: [], // 获取可绑定银行卡列表
        bindBankLists: [],
        realName: '',
        nickNames: '',
        isAddBank: true,
        isCloseUserData: false,
        isuserbank: localStorage.getItem('_bankCard') !== 'undefined' ? localStorage.getItem('_bankCard') : false,
        isbindBg: false, //
        gradeMsg: {
          num: 0,
          title: ''
        },
        nickNameNote: '（提款的时候只能用真实姓名操作，不能填写字母、数字、特殊字符。)',// 取款人提示信息
        bankNumberNote: '由16或19位数字组成，请填写银行借记卡。',
        backNmaeNote: '填写支行名称遇到问题，请联系客服。', // 支行错误提示
        fundsPwdNote: '最少要输入 8 个字符',
        bankNumberNoteAgain: '',
        openBank: '', // 开户银行
        bankNumber: '',
        bankName: '', // 支行名称
        bankNumberAgain: '',
        fundsPwd: '',
        isSendData: true,
        receiveError: '',
        resetPwdErroe: '',
        oldPassword: '',
        newPassword: '',
        rePassword: '',
        replaceTitle: '登录密码',
        loginTime: '', // 上次登录时间
        clientIp: '', // ip
        loginListInfo: [], // 最近登录日志
        timer: null,
        formObj: constructObj(),
        // 提示问题
        oldPasswordTip: '',
        newPasswordTip: '',
        rePasswordTip: '',
        // 用户名设置相关
        usernameShow: false,
        login_pass_error: '',
        login_pass_error1: '',
        // 手机绑定相关
        mobileShow: false,
        userInfor: {}, // 个人信息
        editNickname: false,
        newNickname: '',
        resetNicknameError: ''
      }
    },
    components: {
      pagefooter,
      pagrUserHeader,
      pageUserNav
    },
    created() {
      gendanFn.getUserInfo(this)
      this.RefreshSrc();
    },
    computed: {
      baseInfo() {
        return this.$store.state.baseInfo;
      }
    },
    methods: {
      // 获取手机验证码
      get_verify_code() {
        let that = this;
        let mobile = this.formObj.mobile;
        let verifyImg = this.formObj.verifyImg;

        if (!mobile.reg.test(mobile.val)) {
          this.login_pass_error = mobile.error;
          return
        }
        if (!verifyImg.reg.test(verifyImg.val)) {
          this.login_pass_error = verifyImg.error;
          return
        }

        let options = {
          phoneNum: mobile.val,
          yanzCode: verifyImg.val,
          type: 1
        };
        this.isCountFinish = true;
        let timer = setInterval(function () {
          if (that.countTime === 0) {
            clearInterval(timer);
            that.countTime = 60;
            that.isCountFinish = false;
          }
          that.countTime--;
        }, 1000);
        getVerifyCode(this, options);
      },
      // 更新图片验证码
      RefreshSrc() {
        getSrcSafe.RefreshSrc(this);
      },
      cancelClick(param) {
        this[param] = '';
        this[param + 'Show'] = false;
        this[param + 'Error'] = ''
      },
      // 输入框获取焦点
      focusInput(focusTarget) {
        let target = this.formObj[focusTarget];

        this.login_pass_error = '';
        target.isShow = true;
      },
      // 输入框失去焦点
      regCheck(tipTarget) {
        let target = this.formObj[tipTarget];

        target.isShow = false;
        target.val = target.val.trim();

        if (!target.reg.test(target.val)) {
          this.login_pass_error = target.error;
        }
      },
      // 判断是否展示用户名设置弹窗
      usernameClick() {
        if (this.isbind.isCnReset) {
          return false
        } else {
          this.usernameShow = true;
        }
      },
      // 判断是否展示手机号设置弹窗
      mobileClick() {
        if (this.isbind.isBindPhone) {
          return false
        } else {
          this.mobileShow = true;
        }
      },
      // 设置用户名
      setUsername() {
        let _this = this;
        let obj = this.formObj;
        for (let key in obj) {
          if (key === 'fundPsw' && !this.isBindWithdrawPassword) continue;
          if (key === 'username' || key === 'psw' || key === 'fundPsw') {
            if (!obj[key].reg.test(obj[key].val)) {
              this.login_pass_error = obj[key].error;
              return false
            }
          }
        }
        init.userContent.resetUsername(this);
      },
      // 绑定手机号
      setMobile() {
        let _this = this;
        let obj = this.formObj;

        if (!obj.mobile.reg.test(obj.mobile.val)) {
          this.login_pass_error1 = obj.mobile.error;
          return false;
        }

        if (!obj.verifyCode.reg.test(obj.verifyCode.val)) {
          this.login_pass_error1 = obj.verifyCode.error;
          return false;
        }

        this.$http.post('/yx/u/api/account/bind-phone', {
            phone: obj.mobile.val,
            phYzCode: obj.verifyCode.val
          }, {emulateJSON: true}
        ).then((res) => {
          let data = res.body;

          _this.getAccoutStatus();
          if (data.code === 0) {
            _this.mobileShow = false;
            Prompt()({
              idx: 'register',
              message: '手机号绑定成功'
            });
          } else {
            _this.login_pass_error1 = data.message;
          }
        });

      },
      // 获取用户账户状态
      getAccoutStatus() {
        let _this = this;

        this.$http.post('/yx/u/api/account/get-bind-status'
        ).then((response) => {
          let mainBody = response.body;

          if (mainBody.code === 0) {
            _this.isbind = mainBody.data;
            _this.$store.commit('setAccountStatus', mainBody.data);
          }
        })
      },
      userRefresh() {
        this.lotteryBalance = '0.00';
        init.userHeader.initlotteryBalance(this);
      },
      inputlineBtn() {
        init.userContent.inputlineBtn();
      },
      userRefresh() {
        this.lotteryBalance = '0.00';
        init.userHeader.initlotteryBalance(this);
      },
      sendResetPwd() {
        let obj = this.formObj;

        this.resetPwdErroe = '';
        if (this.replaceTitle === '登录密码') {
          if (!obj.psw.reg.test(this.oldPassword)) {
            this.resetPwdErroe = '旧密码输入错误';
            return false;
          }
          if (!obj.psw.reg.test(this.newPassword)) {
            this.resetPwdErroe = obj.psw.error;
            return false;
          }
          if (!obj.repeatPsw.reg.test(this.rePassword) || (this.newPassword !== this.rePassword)) {
            this.resetPwdErroe = obj.repeatPsw.error;
            return false;
          }
          init.userContent.resetPwd(this);
        }
        if (this.replaceTitle === '资金密码') {
          if (!obj.fundPsw.reg.test(this.oldPassword)) {
            this.resetPwdErroe = '旧密码输入错误';
            return false;
          }
          if (this.oldPassword === this.newPassword) {
            this.resetPwdErroe = '新旧密码相同';
            return false;
          }
          if (!obj.fundPsw.reg.test(this.newPassword)) {
            this.resetPwdErroe = obj.fundPsw.error;
            return false;
          }
          if (!obj.repeatPsw.reg.test(this.rePassword) || (this.newPassword !== this.rePassword)) {
            this.resetPwdErroe = obj.repeatPsw.error;
            return false;
          }
          init.userContent.resetFundsPwd(this);
        }
      },
      // 设置密码获取焦点
      isPswFocus(param) {
        if (this.replaceTitle === '登录密码') {
          param === 'oldPassword' && (this.oldPasswordTip = verifyRule.psw.tip);
          param === 'newPassword' && (this.newPasswordTip = verifyRule.psw.tip);
          param === 'rePassword' && (this.rePasswordTip = verifyRule.psw.tip);
        } else {
          param === 'oldPassword' && (this.oldPasswordTip = verifyRule.fundPsw.tip);
          param === 'newPassword' && (this.newPasswordTip = verifyRule.fundPsw.tip);
          param === 'rePassword' && (this.rePasswordTip = verifyRule.fundPsw.tip);
        }
      },
      // 设置密码失去焦点
      isPswBlur() {
        this.oldPasswordTip = '';
        this.newPasswordTip = '';
        this.rePasswordTip = '';
      },
      setPwd(type) {
        this.resetPwd = true;
        this.isbindBg = true;
        this.oldPassword = '';
        this.newPassword = '';
        this.rePassword = '';
        this.resetPwdErroe = '';
        if (type === 'pwd') {
          this.replaceTitle = '登录密码';
        }
        if (type === 'funds') {
          this.replaceTitle = '资金密码';
        }
      },
      closePwd() {
        this.resetPwd = false;
        this.isbindBg = false;
      },
      setUserData() {
        this.isbindBg = true;
        this.isCloseUserData = false;
      },
      closeUserData() {
        this.nickNameNote = '（提款的时候只能用真实姓名操作，不能填写字母、数字、特殊字符。)';
        this.openBank = this.bankList[0] && this.bankList[0].id;
        this.bankName = '';
        this.backNmaeNote = '填写支行名称遇到问题，请联系客服。';
        this.bankNumber = '';
        this.bankNumberNote = '由16位或18位或19位数字组成，请填写银行借记卡。';
        this.bankNumberAgain = '',
          this.bankNumberNoteAgain = '由16位或18位或19位数字组成，请填写银行借记卡。';
        this.fundsPwd = '';
        this.fundsPwdNote = '最少要输入 8 个字符';
        this.isCloseUserData = true;
        this.isbindBg = false;
        this.isuserbank = false;
        localStorage.setItem('_bankCard', 0);
      },
      sendUserData() {
        this.receiveError = '';
        if (!this.realName && !this.nickNames) {
          this.nickNameNote = '请填写信息';
          return false
        }
        if (!this.nickNames && !/^[\u4e00-\u9fa5]+$/.test(this.realName)) {
          this.nickNameNote = '姓名需为汉字';
          return false
        }
        if (!this.bankName) {
          this.backNmaeNote = '请填写信息';
          return false
        }
        if (!/^[\u4e00-\u9fa5]+$/.test(this.bankName)) {
          this.backNmaeNote = '开户行名称需为汉字';
          return false
        }
        if (!this.bankNumber) {
          this.bankNumberNote = '请填写信息';
          return false
        }
        if (!/^([1-9]{1})(\d{15}|\d{17}|\d{18})$/.test(this.bankNumber)) {
          this.bankNumberNote = '请检查你的银行卡号是否输入正确，16位或18位或19位卡号，1-9数字开头';
          return false
        }
        if (!/^([1-9]{1})(\d{15}|\d{17}|\d{18})$/.test(this.bankNumberAgain) && (this.bankNumberAgain !== this.bankNumber)) {
          this.bankNumberNoteAgain = '请检查你的银行卡号是否输入正确，16位或18位或19位卡号，1-9数字开头';
          return false
        }
        if (!this.fundsPwd) {
          this.fundsPwdNote = '请填写信息';
          return false
        }

        if (!verifyRule.fundPsw.reg.test(this.fundsPwd)) {
          this.fundsPwdNote = verifyRule.fundPsw.tip;
          return false
        }
        init.userContent.bindUserInfo(this)
      },
      isRealName() {
        if (!this.realName && !this.nickNames) {
          return false
        }
        if (!this.nickNames && !/^[\u4e00-\u9fa5]+$/.test(this.realName)) {
          this.nickNameNote = '姓名需为汉字';
          return false
        }
        this.nickNameNote = '提交正确！';
      },
      isbankName() {
        if (!this.bankName) {
          return false
        }
        if (!/^[\u4e00-\u9fa5]+$/.test(this.bankName)) {
          this.backNmaeNote = '开户行名称需为汉字';
          return false
        }
        this.backNmaeNote = '提交正确！';
      },
      isbankNumber() {
        if (!this.bankNumber) {
          return false
        }
        if (!/^([1-9]{1})(\d{15}|\d{17}|\d{18})$/.test(this.bankNumber)) {
          this.bankNumberNote = '请验证银行卡号位数.';
          return false
        }
        this.bankNumberNote = '提交正确！';
      },
      isbankNumberAgain() {
        if (!this.bankNumber) {
          return false
        }
        if (this.bankNumberAgain !== this.bankNumber) {
          this.bankNumberNoteAgain = '请检查你的银行卡号是否输入正确，16位或18位或19位卡号';
          return false
        }
        this.bankNumberNoteAgain = '提交正确！';
      },
      isfundsPwd() {
        this.fundsPwd = this.fundsPwd.trim();
        if (!this.fundsPwd) {
          return false
        }
        if (!verifyRule.fundPsw.reg.test(this.fundsPwd)) {
          this.fundsPwdNote = verifyRule.fundPsw.tip;
          return false
        }
        this.fundsPwdNote = "提交正确";
      },
      showNicknameBox() {
        this.newNickname = this.userInfor.nickName
        this.isbindBg = true;
        this.editNickname = true
      },
      closeNicknameBox() {
        this.isbindBg = false;
        this.editNickname = false
      },
      setNickname() {
        if (!this.newNickname) {
          this.resetNicknameError = '昵称不能为空'
          return false
        }
        let params = {nickName: this.newNickname}
        gendanFn.setFollowUserInfo(this, params)
      }
    },
    mounted() {
      let that = this;
      if (!this.nickNames) {
        this.fundsPwdNote = '为了你的账户安全，请先设置资金密码，该密码用于验证您的资金操作。'
      }
      //sendApi.checkgrade(this).checkClient(this).checkCard(this).loadBanks(this).getLoginListInfo(this);
      //window.lys_TransferAccount();

      inputlineBtn();
      init.userHeader.initUserInfo(this);
      init.userContent.checkgrade(this).checkCard(this).loadBanks(this).getLoginListInfo(this, function () {
        if (this.isuserbank && this.isuserbank == '1') {
          if (this.bindBankList.length >= 5) {
            this.isuserbank = false;
            localStorage.setItem('_bankCard', 0);
            oPrompt({
              idx: "userbank",
              message: "银行卡已绑满5张."
            });
          }
        }
        this.isAddBank = true;

        if (!this.bindBankList.length) {
          this.bindBankLists = [5, 4, 3, 2, 1];
        } else {
          for (let a = 5 - this.bindBankList.length; a > 0; a--) {
            this.bindBankLists.push(a);
          }
        }
      });

      let _this = this;

      window.addEventListener("resize", function () {
        _this.height = document.documentElement.clientHeight
        _this.width = document.documentElement.clientWidth
      }, false)
      this.timer = setInterval(function () {
        init.userHeader.initlotteryBalance(_this);
      }, 10000)
    },
    beforeMount() {
      // let _this = this;
      // window.addEventListener("resize",function(){
      // 		_this.height = document.documentElement.clientHeight
      // 	},false)
      //sendApi.checkgrade(this).checkClient(this).checkCard(this).loadBanks(this).getLoginListInfo(this);
      init.userContent.checkgrade(this).checkClient(this);
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  div.userCentWarp {
    padding-top: 10px;
  }

  .userconterWarep .colorY {
    color: #ff6979;
    font-size: 33px;
  }

  .userconterWarep .common-modal .jBox-title {
    line-height: 18px;
    background: #ff6979;
  }

  .userconterWarep .value .button.bgcolor {
    background: #ff6979;
    color: #fff;
  }

  .userconterWarep .common-modal .jBox-container {
    background: #fff;
  }

  .userconterWarep .common-modal .jBox-container .jBox-draggable div {
    line-height: 35px;
  }

  .userContenWarps .colorAa {
    background: #fff1f3;
  }

  .contentMain {
    width: 1200px;
    margin: 0 auto;
  }

  .userContenWarps {
    box-shadow: 0px 0px 10px #ccc;
  }

  .userHeaderDiv {
    width: 90%;
    margin: 0 auto;
    padding: 10px 0 0 0;
  }

  .userHeaderBalance {
    padding: 10px;
    text-align: center;
    background: #fff0f1;
  }

  .userHeaderBalance i {
    position: absolute;
    right: 0px;
    top: 8px;
  }

  .userContenWarps .userMainWarpH3 {
    padding: 10px;
    line-height: 20px;
  }

  .userContenWarps .bgImgBtn {
    background-image: -webkit-linear-gradient(0deg, #70cab0, #64b3d8 100%);
  }

  .userHeader a:hover {

  }

  .accontMainBtn:hover {

  }

  .abgcolorc {
    background-image: -webkit-linear-gradient(90deg, #979797, #d0d0d0 100%);
  }

  .userContenWarps .userHeaderBtn {
    padding: 5px 22px;
    color: #fff;
    text-decoration: none;
    margin-top: 10px;
    border-radius: 4px;
  }

  .userHeaderBtnR {
    margin-right: 35px;
    background: #56b04b;
  }

  .userHeaderBtnL {
    margin-left: 35px;
    background: #ff6682;
  }

  .usercenterMmain_header_left_bom {
    height: 160px;
  }

  .form-control-floatererl {
    width: 100%;
    margin: 15px 0 0 0
  }

  .form-control-floatererl input {
    height: 35px;
    line-height: 35px;
    width: 250px;
  }

  .form-control-floatererl .button-groups input {
    width: 125px;
  }

  .form-control-floatererl td {
    padding: 5px 0;
    text-align: right;
  }

  .form-control-floatererl td.value {
    padding: 10px 0;
    text-align: left;
  }

  .safetyWarp p {
    line-height: 18px;
    width: 340px;
  }

  .safetyWarp h4 {
    width: 90%;
    line-height: 40px;
    margin-top: 20px;
  }

  .safetyWarp h4 button {
    border: 0;
    outline: none;
    padding: 7px 0;
    width: 84px;
    text-align: center;
    border-radius: 4px;
  }

  .safetyWarpLeft {
    height: 90px;
    line-height: 90px;
  }

  .safetyBox {
    padding: 10px 20px;
  }

  .safetyWarp:hover {
    border: 1px solid #ffae7f;
  }

  .safetyWarp {
    width: 100%;
    height: 130px;
    border-radius: 12px;
  }

  .accountZL i {
    position: relative;
    top: 2px;
  }

  .accountZL {
    width: 100%;
    padding-bottom: 15px;
  }

  .accountZL li {
    width: 24%;
  }

  .tableCt {
    border-top: 1px solid #efefef;
  }

  .usercenterMmai_table {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }

  .usercenterMmai_table th {
    text-align: center;
    padding: 3px 0;
    font-size: 14px;
  }

  .usercenterMmai_tabletd div {
    width: 107px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .usercenterMmai_table td {
    padding: 0;

  }

  .contentMainRight {
    width: 890px;
    padding: 10px 20px 0 0;
  }

  .accontMainBtn {
    background: #ff6977;
    padding: 7px 40px;
    border-radius: 30px;;
    border: 1px solid #fff;
  }

  div.accontMainBox2 {
    padding: 0 5px 0 15px;
  }

  .accontMainBoxBtn {
    display: inline-block;
    background: #ff5d00;
    padding: 3px 3px;
    border-radius: 6px;
  }

  .accontMainBox {
    padding: 0 15px;
  }

  .accontMainBox select {
    display: block;
    width: 135px;
    padding: 5px 10px;
    border-radius: 6px;
  }

  .accontMainBox input {
    display: block;
    width: 215px;
    padding: 10px 10px;
    border-radius: 6px;
  }

  .accontMain {
    padding: 15px 0;
  }

  .usercenterMmain {
    padding: 15px 0 20px 0;
  }

  .userMainWarpH3 {
    padding: 10px 10px;
  }

  .bankMain {
    width: 100%;
  }

  .bdrd6 {
    border-radius: 6px;
  }

  .bdrdbom6 {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .bdrdtop6 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .bdc {
    border: 1px solid #ccc;
  }

  .bdre4 {
    border-right: 1px solid #e4e3e8;
  }

  .bdcc {
    border: 1px solid #ccc;
  }

  .contentMainLeft {
    width: 290px;
    padding: 25px 0 0 20px;
  }

  .activity {
    /*background: #e6e6e6;*/
    padding: 0px 0px;
  }

  .warp .userHeaderImg {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .userInfo {
    width: 100%;
    height: 270px;
  }

  .contentMain {
    margin-bottom: 30px;
  }

  .userHeader {
    padding: 15px 15px 5px 15px;

  }

  .bdtop {
    border-top: 1px solid #dcdddd;
  }

  .userHeader i.cbl {
    background: #ff4c00;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 38px;
  }

  .userHeader a {
    margin-top: 2px;
    text-decoration: underline;
    color: #ff6681;
  }

  .userHeaderIp {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .userBom {
    padding: 20px 15px 15px 15px;
  }

  .userBomDiv {
    height: 8px;
    border-radius: 8px;
    width: 155px;
  }

  .userBomMain {
    width: 40%;
    background-image: -webkit-linear-gradient(180deg, #ff8d00, #ff4c00 100%);
  }

  .bgcolorjsh {
    background: #24a6dc;
  }

  .bgcolorny {
    background: #46d26e;
  }

  .bgcolorzhsh {
    background: #d24685;
  }

  /*邮政*/
  .bank16 {
    background: #d24685;
  }

  /*建设*/
  .bank2 {
    background-image: -webkit-linear-gradient(left, #cbbd84, #eee8c4);
  }

  /*光大*/
  .bank19 {
    background: #d24685;
  }

  /*农业*/
  .bank3 {
    background-image: -webkit-linear-gradient(left, #2fb235, #78d778);
  }

  /*交通*/
  .bank6 {
    background: #d24685;
  }

  /*宁波*/
  .bank10 {
    background: #d24685;
  }

  /*华夏 20*/
  .bank20 {
    background: #d24685;
  }

  /*杭州 12*/
  .bank12 {
    background: #d24685;
  }

  /*民生 18*/
  .bank18 {
    background: #d24685;
  }

  /*北京 21*/
  .bank21 {
    background: #d24685;
  }

  /*中国 5*/
  .bank5 {
    background: #d24685;
  }

  /*招商 4*/
  .bank4 {
    background-image: -webkit-linear-gradient(left, #d24685, #d96bbd);
  }

  /*中信 9*/
  .bank9 {
    background: #d24685;
  }

  /*兴业 8*/
  .bank8 {
    background: #d24685;
  }

  /*浦发 7*/
  .bank7 {
    background: #d24685;
  }

  /*工商 1*/
  .bank1 {
    background: #d24685;
  }

  /*广发 15*/
  .bank15 {
    background: #d24685;
  }


</style>
<style lang="stylus">
  @import "../css/stylus/index.styl";

  .username_reset, .mobile_reset
    .ivu-modal-close
      top: 0
      .ivu-icon-ios-close-empty
        color()
        font-size: 36px
        font-weight: 800
    .ivu-modal-header
      padding: 0
      bgRed()
      p
        line-height: 35px
        height: 35px
        color()
        text-align: center
        font-size: 14px
    .ivu-modal-body
      padding-bottom: 0
      .content_body
        position: relative
        padding-bottom: 20px
        label
          display: inline-block
          width: 104px
          text-align: right
          margin-right: 10px
        input
          height: 35px
          width: 250px
        .error_container
          height: 20px
          line-height: 20px
          color: text_color
          text-align: center
        .tipMessage
          position: absolute
          text-align: center
          bottom: 1px
          left: 118px
          right: 60px
          bgColor(tip_bg)
          color()
          padding: 0 5px
          radius(5px)
          font-size: 10px
      .main_input
        .input_wrapper
          position: relative
          display: inline-block
          width: 251px
      .verify_code
        .get_code, .count_down
          position: absolute
          top: 0
          height: 35px
          line-height: 35px
          bgColor(#b6b4b4)
          color()
          cursor()
          right: 1px
          width: 106px
          text-align: center
          font-size: 16px
          bgRed()
          color()
        .count_down
          radiusLeft(5px)
      .verify_img
        input
          radiusRight(0)
        .imgWrapper
          position: absolute
          right: 2px
          top: 2px
          width: 78px
          bottom: 0
          cursor()
          /*border:1px solid #dcdddd*/
          overflow: hidden
          img
            height: 32px
            width: 100%
      .error_msg
        color: text_color
        text-align: center
        height: 25px
        line-height: 30px
    .ivu-modal-footer
      border: none
      .content_footer
        text-align: center
        .ivu-btn
          width: 125px
          height: 34px
          radius(17px)
          color()
        .confirm_btn
          bgRed()
        .cancel_btn
          bgColor(rgb(208, 208, 208))

  .psw_set
    .value
      position: relative
      em
        position: absolute
        left: 0
        bottom: -8px
        bgColor(tip_bg)
        color()
        padding: 0 5px
        radius(2px)
</style>
