<template>
  <div id="lottery" class="ltp ltp-pankou">
    <div class="mainlottery">
      <span id="hashlid" style="display:none;">{{$route.hash}}</span>
      <span id="localtime" style="display:none;"></span>
      <div id="top-lt-list" style="display:none;"></div>
      <div class="openzoneholder"></div>
      <!-- 导航区域 -->
      <div class="lottery-navs lottery-navs-p">
        <ul style="" next="0"><li class="title">&nbsp;经典彩种</li>
        <li class="mylt_80 normal first"><router-link :to="'/index/pankou#80'" target="_self"><div class="lt-choose"><h3>经典重庆时时彩</h3></div></router-link></li>
        <li class="mylt_85 normal"><router-link :to="'/index/pankou#85'" target="_self"><div class="lt-choose"><h3>菲律宾1.5分彩</h3></div></router-link></li>
        <li class="mylt_86 normal"><router-link :to="'/index/pankou#86'" target="_self"><div class="lt-choose"><h3>菲律宾2分彩</h3></div></router-link></li>
        <li class="mylt_87 normal"><router-link :to="'/index/pankou#87'" target="_self"><div class="lt-choose"><h3>菲律宾5分彩</h3></div></router-link></li>
        <!--<li class="mylt_90 normal"><router-link :to="'/pankou#90'" target="_self"><div class="lt-choose"><h3>经典江苏快3</h3></div></router-link></li>
        <li class="mylt_100 normal"><router-link :to="'/pankou#100'" target="_self"><div class="lt-choose"><h3>广东11选5</h3></div></router-link></li>
        <li class="mylt_110 normal"><router-link :to="'/pankou#110'" target="_self"><div class="lt-choose"><h3>北京PK10</h3></div></router-link></li>-->
        <li class="end endborder">&nbsp;</li>
        </ul>
      </div>
      <!-- 选号区域 -->
      <div class="lottery-betting lottery-betpan">
        <div class="lottery-betting-topborder"></div>
        <div class="lottert-topside clearfix">
          <div class="top-side">
            <div class="lottery-open">
              <div class="lot">
                <div class="wrapper">
                  <div :class="ltlogocls"></div>
                </div>
              </div>
              <div class="lottery-open-code">
                <div class="lt-audio"><div class="switch audio-on"></div></div> <div class="expect">第 <span data-field="expect">{{preissue}}</span> 期&nbsp;开奖结果&nbsp;&nbsp;</div> <div class="onlymobilecode">7,4,6,3,7</div>
                <div class="codeholder" style="display: none;">开奖中...</div>
                <div data-field="code" class="code ssc" style="display: block;">
                  <div v-if="isShowTip == null" class="" style="font-size:26px; text-align:center;">
                    开奖中....
                  </div>
                  <ul :class="ckpk(preopen)" v-else >
                    <li v-for="(item, index) in preopen" :class="cklhc(preopen,index,item)" style="visibility: visible;">{{item}}<span class="xstyp">{{ballsxformat(item)}}</span></li>
                    <!--<li class="zoomIn animated" style="visibility: visible;">7</li>-->
                  </ul>

                </div>
              </div>
                
              <div class="lottery-open-info">
                  <div class="expect">
                  第 <span data-field="global-expect">{{nowissue}}</span> 期截止时间还有
                  </div>
                  <div class="last-time"><span id="pankou-timer" :data-left="closesec"></span></div>
              </div>
              <div class="nav lottery-open-nav">
                <router-link :to="newtrendlink" class="lottery-code-trend" target="1519890997064"><em class="icon"></em>开奖走势</router-link><router-link to="/playDetails#0" class="lottery-code-help" target="_blank"><em class="icon"></em>玩法说明</router-link>
              </div>
            </div> 
            <a target="1519890997064" class="lottery-code-trend" href="/static/lottery-trend.html?id=911&amp;w=1&amp;q=50&amp;chs=%E8%85%BE%E8%AE%AF%E5%88%86%E5%88%86%E5%BD%A9"><i></i>近<br>期<br>走<br>势</a>
          </div>
        </div>
        <div class="lottery-opearation pankou-opearation">
          <div class="play-groups">
            <ul>
              <li v-for="(item, index) in pankoutab_now" :rel="item.rel"><a :class="item.cls">{{item.name}}</a></li>
            </ul>
          </div>

          <div class="play-fire clearfix">
            <span class="button-secondary-group" style="display:none;">
              <button class="button button-blank button-current" data-mode="normal">一般</button>
              <button class="button" data-mode="quick">快捷</button>
            </span>
            <div class="fr">
              <div class="form normal-form hide tac" action="" style="display: block;">
                <label class="tac_money" style="display:none;">金额：<input type="text" class="input fb sync-bet"></label>
                <button class="button parlay bet-button" data-action="parlay">投注</button>
                <button class="button button-secondary bet-button parlay-reset" data-action="reset" type="reset">清除</button>
              </div>
            </div>
          </div>

          <div class="mt10 clearfix" style="margin-top:0px;">
            <!-- 整合 -->
            <div id="j-all" class="hide" v-show="isnow">
             <div class="combined now" rel="shuangmian">
               <table class="table nested-table sm-table" style="border-bottom:none; border-right:none; border-left:none;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第一球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="735" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">大</td>
                      <td><span class="odds-text">{{ratedict.j735}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="736" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">小</td>
                      <td><span class="odds-text">{{ratedict.j736}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="737" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">单</td>
                      <td><span class="odds-text">{{ratedict.j737}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="738" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">双</td>
                      <td><span class="odds-text">{{ratedict.j738}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第二球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="749" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">大</td>
                      <td><span class="odds-text">{{ratedict.j749}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="750" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">小</td>
                      <td><span class="odds-text">{{ratedict.j750}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="751" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">单</td>
                      <td><span class="odds-text">{{ratedict.j751}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="752" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">双</td>
                      <td><span class="odds-text">{{ratedict.j752}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="763" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">大</td>
                      <td><span class="odds-text">{{ratedict.j763}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="764" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">小</td>
                      <td><span class="odds-text">{{ratedict.j764}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="765" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">单</td>
                      <td><span class="odds-text">{{ratedict.j765}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="766" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">双</td>
                      <td><span class="odds-text">{{ratedict.j766}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第四球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="777" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">大</td>
                      <td><span class="odds-text">{{ratedict.j777}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="778" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">小</td>
                      <td><span class="odds-text">{{ratedict.j778}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="779" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">单</td>
                      <td><span class="odds-text">{{ratedict.j779}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="780" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">双</td>
                      <td><span class="odds-text">{{ratedict.j780}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第五球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="791" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">大</td>
                      <td><span class="odds-text">{{ratedict.j791}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="792" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">小</td>
                      <td><span class="odds-text">{{ratedict.j792}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="793" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">单</td>
                      <td><span class="odds-text">{{ratedict.j793}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="794" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">双</td>
                      <td><span class="odds-text">{{ratedict.j794}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </tbody>
               </table>
               <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">前三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="802" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">豹子</td>
                      <td><span class="odds-text">{{ratedict.j802}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="803" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">顺子</td>
                      <td><span class="odds-text">{{ratedict.j803}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="804" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">对子</td>
                      <td><span class="odds-text">{{ratedict.j804}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="805" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">半顺</td>
                      <td><span class="odds-text">{{ratedict.j805}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="806" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">杂六</td>
                      <td><span class="odds-text">{{ratedict.j806}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">中三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="807" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">豹子</td>
                      <td><span class="odds-text">{{ratedict.j807}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="808" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">顺子</td>
                      <td><span class="odds-text">{{ratedict.j808}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="809" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">对子</td>
                      <td><span class="odds-text">{{ratedict.j809}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="810" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">半顺</td>
                      <td><span class="odds-text">{{ratedict.j810}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="811" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">杂六</td>
                      <td><span class="odds-text">{{ratedict.j811}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">后三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="812" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">豹子</td>
                      <td><span class="odds-text">{{ratedict.j812}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="813" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">顺子</td>
                      <td><span class="odds-text">{{ratedict.j813}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="814" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">对子</td>
                      <td><span class="odds-text">{{ratedict.j814}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="815" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">半顺</td>
                      <td><span class="odds-text">{{ratedict.j815}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="816" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">杂六</td>
                      <td><span class="odds-text">{{ratedict.j816}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">总和</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="795" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">总和大</td>
                      <td><span class="odds-text">{{ratedict.j795}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="796" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">总和小</td>
                      <td><span class="odds-text">{{ratedict.j796}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="797" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">总和单</td>
                      <td><span class="odds-text">{{ratedict.j797}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="798" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">总和双</td>
                      <td><span class="odds-text">{{ratedict.j798}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                 </tr>
                </tbody>
               </table>
             </div>
             <table class="table nested-table sm-table" style="border-bottom:none; border-right:none; border-left:none;display:none;" rel="shuzi">
              <tbody>
               <tr>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">第一球</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="725" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j725}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="726" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j726}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="727" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j727}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="728" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j728}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="729" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j729}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="730" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j730}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="731" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j731}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="732" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j732}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="733" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j733}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="734" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j734}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">第二球</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="739" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j739}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="740" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j740}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="741" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j741}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="742" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j742}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="743" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j743}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="744" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j744}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="745" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j745}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="746" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j746}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="747" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j747}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="748" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j748}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table>
                </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">第三球</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="753" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j753}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="754" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j754}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="755" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j755}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="756" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j756}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="757" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j757}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="758" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j758}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="759" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j759}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="760" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j760}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="761" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j761}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="762" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j762}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">第四球</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="767" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j767}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="768" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j768}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="769" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j769}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="770" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j770}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="771" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j771}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="772" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j772}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="773" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j773}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="774" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j774}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="775" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j775}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="776" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j776}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">第五球</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="781" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j781}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="782" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j782}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="783" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j783}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="784" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j784}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="785" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j785}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="786" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j786}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="787" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j787}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="788" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j788}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="789" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j789}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="790" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j790}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table>
                </td>
               </tr>
              </tbody>
             </table>
             <div class="combined" style="display:none;" rel="longhu">
               <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第一球 VS 第二球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="110" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j110}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="111" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j111}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="112" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j112}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第一球 VS 第三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="113" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j113}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="114" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j114}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="115" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j115}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第一球 VS 第四球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="116" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j116}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="117" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j117}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="118" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j118}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第一球 VS 第五球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="119" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j119}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="120" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j120}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="121" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j121}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                 </tr>
                </tbody>
               </table>
               <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;width:680px;margin:0px auto;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第二球 VS 第三球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="122" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j122}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="123" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j123}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="124" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j124}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第二球 VS 第四球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="125" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j125}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="126" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j126}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="127" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j127}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第二球 VS 第五球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="128" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j128}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="129" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j129}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="130" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j130}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                 </tr>
                </tbody>
               </table>
               <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;width:448px;margin:0px auto;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第三球 VS 第四球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="131" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j131}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="132" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j132}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="133" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j133}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table> </td>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第三球 VS 第五球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="134" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j134}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="135" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j135}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="136" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j136}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </tbody>
               </table>
               <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;width:217px;margin:0px auto;">
                <tbody>
                 <tr>
                  <td class="p0" style=" border-bottom:none; border-right:none; ">
                   <table class=" j-betting">
                    <thead>
                     <tr>
                      <th colspan="3">第四球 VS 第五球</th>
                     </tr>
                    </thead>
                    <tbody>
                     <tr class="bo-right">
                      <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                      <td class="td-hd">赔率</td>
                      <td class="td-hd j-odds">金额</td>
                     </tr>
                     <tr data-id="137" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
                      <td><span class="odds-text">{{ratedict.j137}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="138" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
                      <td><span class="odds-text">{{ratedict.j138}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                     <tr data-id="139" data-odds="" class="bo-right">
                      <td class="table-odd bo-left" style="border-left-width: 1px;">和</td>
                      <td><span class="odds-text">{{ratedict.j139}}</span></td>
                      <td class="j-odds "><input type="text" class="input fb" /></td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </tbody>
               </table>
             </div>
             <table class="table nested-table sm-table wider fullw" style="border-bottom:none; border-right:none; border-left:none;display:none;" rel="zhongyi">
              <thead>
               <tr>
                <th colspan="5">全五中一</th>
               </tr>
              </thead>
              <tbody>
               <tr>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">0</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="140" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
                    <td><span class="odds-text">{{ratedict.j140}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
              </tbody>
             </table>
             <table class="table nested-table sm-table douniu" style="border-bottom:none; border-right:none; border-left:none;display:none;width:680px;margin:0px auto;" rel="niuniu">
              <tbody>
               <tr>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">斗牛</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="817" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">没牛</td>
                    <td><span class="odds-text">{{ratedict.j817}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="818" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛1</td>
                    <td><span class="odds-text">{{ratedict.j818}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="819" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛2</td>
                    <td><span class="odds-text">{{ratedict.j819}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="820" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛3</td>
                    <td><span class="odds-text">{{ratedict.j820}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="821" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛4</td>
                    <td><span class="odds-text">{{ratedict.j821}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">斗牛</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="822" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛5</td>
                    <td><span class="odds-text">{{ratedict.j822}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="823" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛6</td>
                    <td><span class="odds-text">{{ratedict.j823}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="824" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛7</td>
                    <td><span class="odds-text">{{ratedict.j824}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="825" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛8</td>
                    <td><span class="odds-text">{{ratedict.j825}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="826" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛9</td>
                    <td><span class="odds-text">{{ratedict.j826}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">斗牛</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="827" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛牛</td>
                    <td><span class="odds-text">{{ratedict.j827}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="828" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛大</td>
                    <td><span class="odds-text">{{ratedict.j828}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="829" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛小</td>
                    <td><span class="odds-text">{{ratedict.j829}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="830" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛单</td>
                    <td><span class="odds-text">{{ratedict.j830}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="831" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">牛双</td>
                    <td><span class="odds-text">{{ratedict.j831}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table>
                </td>
               </tr>
              </tbody>
             </table>
             <table class="table nested-table sm-table douniu" style="border-bottom:none; border-right:none; border-left:none;display:none;width:448px;margin:0px auto;" rel="suoha">
              <tbody>
               <tr>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">梭哈</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="832" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">五条</td>
                    <td><span class="odds-text">{{ratedict.j832}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="833" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">四条</td>
                    <td><span class="odds-text">{{ratedict.j833}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="834" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">葫芦</td>
                    <td><span class="odds-text">{{ratedict.j834}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="835" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">顺子</td>
                    <td><span class="odds-text">{{ratedict.j835}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="836" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">三条</td>
                    <td><span class="odds-text">{{ratedict.j836}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style=" border-bottom:none; border-right:none; ">
                 <table class=" j-betting">
                  <thead>
                   <tr>
                    <th colspan="3">梭哈</th>
                   </tr>
                  </thead>
                  <tbody>
                   <tr class="bo-right">
                    <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
                    <td class="td-hd">赔率</td>
                    <td class="td-hd j-odds">金额</td>
                   </tr>
                   <tr data-id="837" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">两对</td>
                    <td><span class="odds-text">{{ratedict.j837}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="838" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">一对</td>
                    <td><span class="odds-text">{{ratedict.j838}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                   <tr data-id="839" data-odds="" class="bo-right">
                    <td class="table-odd bo-left" style="border-left-width: 1px;">散号</td>
                    <td><span class="odds-text">{{ratedict.j839}}</span></td>
                    <td class="j-odds "><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
              </tbody>
             </table>
            </div>
            <!-- 两面 -->
            <div id="j-sd" class="hide">
             <table class="table nested-table">
              <tbody>
               <tr class="thead shuzi">
                <th colspan="4" class="tal"><span class="center-tag">第一球</span></th>
               </tr>
               <tr class="shuzi">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="735" data-odds="">
                    <td class="table-odd" style="border-bottom:none">大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j735}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="736" data-odds="">
                    <td class="table-odd" style="border-bottom:none">小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j736}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="737" data-odds="">
                    <td class="table-odd" style="border-bottom:none">单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j737}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="738" data-odds="">
                    <td class="table-odd" style="border-bottom:none">双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j738}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead shuzi">
                <th colspan="4" class="tal"><span class="center-tag">第二球</span></th>
               </tr>
               <tr class="shuzi">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="749" data-odds="">
                    <td class="table-odd" style="border-bottom:none">大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j749}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="750" data-odds="">
                    <td class="table-odd" style="border-bottom:none">小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j750}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="751" data-odds="">
                    <td class="table-odd" style="border-bottom:none">单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j751}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="752" data-odds="">
                    <td class="table-odd" style="border-bottom:none">双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j752}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead shuzi">
                <th colspan="4" class="tal"><span class="center-tag">第三球</span></th>
               </tr>
               <tr class="shuzi">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="763" data-odds="">
                    <td class="table-odd" style="border-bottom:none">大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j763}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="764" data-odds="">
                    <td class="table-odd" style="border-bottom:none">小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j764}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="765" data-odds="">
                    <td class="table-odd" style="border-bottom:none">单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j765}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="766" data-odds="">
                    <td class="table-odd" style="border-bottom:none">双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j766}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead shuzi">
                <th colspan="4" class="tal"><span class="center-tag">第四球</span></th>
               </tr>
               <tr class="shuzi">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="777" data-odds="">
                    <td class="table-odd" style="border-bottom:none">大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j777}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="778" data-odds="">
                    <td class="table-odd" style="border-bottom:none">小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j778}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="779" data-odds="">
                    <td class="table-odd" style="border-bottom:none">单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j779}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="780" data-odds="">
                    <td class="table-odd" style="border-bottom:none">双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j780}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead shuzi">
                <th colspan="4" class="tal"><span class="center-tag">第五球</span></th>
               </tr>
               <tr class="shuzi">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="791" data-odds="">
                    <td class="table-odd" style="border-bottom:none">大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j791}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="792" data-odds="">
                    <td class="table-odd" style="border-bottom:none">小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j792}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="793" data-odds="">
                    <td class="table-odd" style="border-bottom:none">单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j793}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="794" data-odds="">
                    <td class="table-odd" style="border-bottom:none">双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j794}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead zonghe">
                <th colspan="4" class="tal"><span class="center-tag">总和,龙虎</span></th>
               </tr>
               <tr class="zonghe">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="795" data-odds="">
                    <td class="table-odd" style="border-bottom:none">总和大</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j795}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="796" data-odds="">
                    <td class="table-odd" style="border-bottom:none">总和小</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j796}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="797" data-odds="">
                    <td class="table-odd" style="border-bottom:none">总和单</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j797}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="798" data-odds="">
                    <td class="table-odd" style="border-bottom:none">总和双</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j798}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
               <tr class="thead zonghe">
                <th colspan="4" class="tal"><span class="center-tag">总和,龙虎</span></th>
               </tr>
               <tr class="zonghe">
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="799" data-odds="">
                    <td class="table-odd" style="border-bottom:none">龙</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j799}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="800" data-odds="">
                    <td class="table-odd" style="border-bottom:none">虎</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j800}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
                <td class="p0" style="border-right:none">
                 <!--========第1球========-->
                 <table class=" j-betting">
                  <tbody>
                   <tr data-id="801" data-odds="">
                    <td class="table-odd" style="border-bottom:none">和</td>
                    <td style="border-bottom:none"><span class="odds-text">{{ratedict.j801}}</span></td>
                    <td class="j-odds" style="border-bottom:none"><input type="text" class="input fb" /></td>
                   </tr>
                  </tbody>
                 </table> </td>
               </tr>
              </tbody>
             </table>
            </div>

            <kuaiPan ref="kuai"></kuaiPan>
            <xuanPan ref="xuan"></xuanPan>
            <pkPan ref="pk"></pkPan>
            <lhcPan ref="lhc"></lhcPan>

          </div>

          <div class="trendbox" v-show="istrend">
            <div id="wenlu" class="play-tab" v-html="wenluhtml"></div>
            <div id="luzhu" class="play-tab" v-html="luzhuhtml"></div>
          </div>

        </div>
      </div>

      <!-- 开奖列表信息 -->
      <div class="lottery-open-list-pankou clearfix">
        <div class="arrow"></div>
        <div class="bigtitle" >
          <span>&nbsp;历史开奖</span>
        </div>
        <div class="title">
          <div class="expect">期号</div>
          <div class="code">开奖号码</div>
          <!--<div class="zutype">前三组态</div> -->
        </div>
        <div class="content clearfix">
          <div class="wrapper">
            <div class="scroller" data-handle-color="#93dbce" data-handle-distance="3px">
              <div class="list">
                <div class="item" v-for="(item, index) in codedata">
                  <div class="expect">{{item.issue}}</div><div :class="pkcode(item.code)" v-html="cformat(item.code)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="replacer" style="display:none">
          <span>历史开奖</span>
          <a class="nolink" rel="1" name="A">显示</a>
        </div>
      </div>

			<!-- 投注记录开始 -->
			<div class="record-list record-list-pankou">
				<div class="topgap topgap-pankou"></div>
        <div class="tabs">
					<a data-key="NotOpenOrder" class="long">未开奖订单</a><!--<em class="hand w-order-list" rel="显示列表|隐藏列表">显示/隐藏列表</em>-->
					<a data-key="HistoryOrder" class="first active">游戏记录</a>
					<a data-key="ChaseOrder">追号记录</a>
				</div>
				<div class="panels">
					<div data-content="NotOpenOrder" class="content hide" style="display:none">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td>彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="16%">下单时间</td>
										<td width="10%">投注金额</td>
										<td width="10%">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">当前没有未开奖订单</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
					<div data-content="HistoryOrder" class="content hide">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td width="180">彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="12%">下单时间</td>
										<td width="90">投注金额</td>
										<td width="90">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">没有投注历史记录</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
					<div data-content="ChaseOrder" class="content hide">
						<div class="result">
							<table class="form-control">
								<thead>
									<tr>
										<td width="10%">订单号</td>
										<td>彩种/玩法</td>
										<td width="14%">期号</td>
										<td width="16%">订单进程</td>
										<td width="10%">投注金额</td>
										<td width="10%">奖金</td>
										<td width="8%">状态</td>
										<td width="8%">操作</td>
									</tr>
								</thead>
								<tbody><tr class="nodata"><td colspan="20">当前没有追号记录</td></tr></tbody>
							</table>
							<div class="page-list noselect"></div>
						</div>
					</div>
				</div>
			</div>
      <div class="botgap botgap-pankou"></div>
			<!-- 投注记录结束 -->
      <!-- 余额 -->
      <div id="ltbalbox" class="leftbalance" @click="reBalance">账户余额：{{nowBalance}}</div>
      <!-- 单式做号【只单式显示】 -->
      <div class="lottery-zuo clearfix">
        <label>做号</label><a class="likebtn zuofire" @click="openzuo" data-command="zuo"><em class="m_ico">&#59167;</em>做号投注</a>
      </div>
    </div>
    <div class="submitbtn">
      <div class="dealcounter">当前已选<i class="totaldeal">0</i>注，倍数<i class="totaldealtime">x1</i>，共计<i class="totaldealamount">0.00</i>元，盈利<i class="totalgain">0.00</i>元</div>
      <div class="row no-gutter">
        <div class="col-15 clear" @click="cleanall"><a class="hand likebtn likebtn-white">清空</a></div>
        <div class="col-15 ticker"><a href="/basket/" class="link"><em class="m_ico">&#58975;</em></a></div>
        <div class="col-35 basket" id="addtobasket" rel="0" @click="qadd"><a ref="/basket/" class="link"><em class="m_ico">&#59003;</em>添加号码</a></div>
        <div class="col-35 quickdeal" @click="qdeal"><em class="m_ico">&#58999;</em>快速投注</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import Combinatorics from 'js-combinatorics';
import Mustache from 'mustache';
import kuaiPan from './pankou-k3.vue'
import xuanPan from './pankou-11x5.vue'
import pkPan from './pankou-pk10.vue'
import lhcPan from './pankou-lhc.vue'
//经典重庆时时彩	80
//经典菲律宾1.5分彩  85
//经典菲律宾2分彩	 86
//经典菲律宾5分彩	 87
//经典江苏快3   90
//经典广东11选5  100
//经典北京PK10   110

export default {
  data () {
    return {
      name: '',
      ltname:'',istrend:true,isnow:true,
      pass:'',
      isShowTip: false,
      nowissue:'',preissue:'',preopen:[],closecount:'',closesec:0,codedata:[],
      ratedict:{},
      pankoucn:{
        80:'经典重庆时时彩',85:'经典菲律宾1.5分彩',86:'经典菲律宾2分彩',87:'经典菲律宾5分彩',90:'经典江苏快3',100:'经典广东11选5',110:'经典北京PK10',800:'香港六合彩'
      },
      pankoutab_now:null,
      pankoutab:{
        'ssc':[
          {rel:'shuangmian',name:'双面盘',cls:'selected'},
          {rel:'shuzi',name:'数字盘',cls:''},
          {rel:'longhu',name:'龙虎斗',cls:''},
          {rel:'zhongyi',name:'全五中一',cls:''},
          {rel:'niuniu',name:'牛牛',cls:''},
          {rel:'suoha',name:'梭哈',cls:''},
        ],
        'kuai':[
          {rel:'j-n1',name:'整合',cls:'selected'}
        ],
        'xuan':[
          {rel:'j-n1',name:'双面盘',cls:'selected'},
          {rel:'j-n2',name:'数字盘',cls:''},
          {rel:'j-n3',name:'龙虎斗',cls:''},
          {rel:'j-n4',name:'全五中一',cls:''}
        ],
        'pk':[
          {rel:'j-n1',name:'整合',cls:'selected'},
          {rel:'j-n3',name:'第1-5名',cls:''},
          {rel:'j-n4',name:'第6-10名',cls:''},
          {rel:'j-n2',name:'冠亚和值',cls:''}
        ],
        'lhc':[
          {rel:'j-n1',name:'特码',cls:'selected'},
          {rel:'j-n2',name:'正码',cls:''},
          {rel:'j-n3',name:'半波',cls:''},
          {rel:'j-n4',name:'生肖',cls:''},
          {rel:'j-n5',name:'尾数',cls:''},
          {rel:'j-n6',name:'总分',cls:''},
          {rel:'j-n7',name:'不中',cls:''}
        ]
      },
      pankoucode:{
        80:'CQSSCXJW',85:'FLB15SSCXJW',86:'FLB2SSCXJW',87:'FLB5SSCXJW',90:'JSK3XJW',100:'GD11YXJW',110:'BJPK10XJW',250:'LHECXJW'
      },
      trendlink:'#',
      lid:'',
      captcha:'',
      mtopname:'',
      currentPage:1,
      pageSize:10,
      totalitem:0,
      nowBalance:0,
      backlink:'/',newtrendlink:'/trend',
      tabledata:[],
      ltlogocls:{
        'logo':true,'animated':true,'flash':true,'logo1':true
      },
      wenlutpl:[
        '<span class="trend-tag">问路</span>',
        '<table class="table nested-table secondary-table" style="border-right:none;">','<thead>',
          '<tr><td colspan="10" class="tab-hd">{{#hd}}<a href="javascript:;" class="tab-item">{{.}}</a>{{/hd}}</td></tr>',
        '</thead><tbody>','{{#bd}}',
        '<tr class="tab-bd">',
        '<td colspan="10" class="p0" style="border-right:none;border-left:none;border-top:none;">',
          '<table>',
            '<tr>{{#number}}<td style="border-top:none;"><em class="inball">{{.}}</em></td>{{/number}}</tr>',
            '<tr>{{#item}}<td style="border-bottom:none;"><em class="inball">{{.}}</em></td>{{/item}}</tr>',
          '</table>',
        '</td>',
        '</tr>','{{/bd}}</tbody>',
        '</table>'
      ].join(''),
      luzhutpl:[
        '<span class="luzhu-tag">路珠</span>',
        '<table class="table secondary-table">',
          '<thead><tr><td colspan="30" class="tab-hd">{{#hd}}<a href="javascript:;;" class="tab-item">{{.}}</a>{{/hd}}</td></tr></thead>',
          '<tbody>{{#bd}}',
          '<tr class="tab-bd">{{#items}}<td class="{{#cls}}{{.}}{{/cls}}">{{#item}}<em class="inball">{{.}}</em>{{/item}}</td>{{/items}}</tr>',
          '{{/bd}}</tbody>',
        '</table>'
      ].join(''),
      wenlu:{
        "hd":[],
        "bd":[]
      },
      luzhu:{
        "hd":["第一球","单双","大小","总和单双","总和大小","龙虎"],
        "bd":[
          {"items":[
            {"item":[]},
            {"item":["9"],"cls":""},
            {"item":["7"],"cls":""},
            {"item":["2"],"cls":""},
            {"item":["5"],"cls":""},
            {"item":["9","9"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["7"],"cls":""},
            {"item":["2"],"cls":""},
            {"item":["7"],"cls":""},
            {"item":["1"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["4"],"cls":""},
            {"item":["1"],"cls":""},
            {"item":["4"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["8"],"cls":""},
            {"item":["4"],"cls":""},
            {"item":["6"],"cls":""},
            {"item":["8"],"cls":""},
            {"item":["4"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["1"],"cls":""},
            {"item":["5"],"cls":""},
            {"item":["4"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["8"],"cls":""},
            {"item":["2"],"cls":""},
            {"item":["3"],"cls":""},
            {"item":["4"],"cls":""}]},{"items":[{"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":["单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单","单","单","单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单","单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双","双","双","双","双"],"cls":""},
            {"item":["单","单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双","双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双"],"cls":""}]},{"items":[{"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":["大","大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大","大","大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小","小","小","小","小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大","大"],"cls":"da"},
            {"item":["小","小","小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小","小"],"cls":""}]},{"items":[{"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":["单","单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单","单","单"],"cls":"dan"},
            {"item":["双","双","双","双"],"cls":""},
            {"item":["单","单"],"cls":"dan"},
            {"item":["双"],"cls":""},
            {"item":["单","单"],"cls":"dan"},
            {"item":["双","双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双","双","双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双","双"],"cls":""},
            {"item":["单"],"cls":"dan"},
            {"item":["双","双"],"cls":""}]},{"items":[{"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":["小"],"cls":""},
            {"item":["大","大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大","大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小","小","小","小","小","小"],"cls":""},
            {"item":["大","大","大","大","大"],"cls":"da"},
            {"item":["小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小","小"],"cls":""},
            {"item":["大"],"cls":"da"},
            {"item":["小","小"],"cls":""}]},{"items":[{"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":[]},
            {"item":["龙"],"cls":"long"},
            {"item":["和"],"cls":""},
            {"item":["虎","虎"],"cls":""},
            {"item":["龙","龙"],"cls":"long"},
            {"item":["虎"],"cls":""},
            {"item":["龙"],"cls":"long"},
            {"item":["和"],"cls":""},
            {"item":["虎","虎"],"cls":""},
            {"item":["龙"],"cls":"long"},
            {"item":["虎","虎"],"cls":""},
            {"item":["龙"],"cls":"long"},
            {"item":["虎"],"cls":""},
            {"item":["龙"],"cls":"long"},
            {"item":["虎"],"cls":""},
            {"item":["龙","龙"],"cls":"long"},
            {"item":["虎"],"cls":""},
            {"item":["龙","龙","龙"],"cls":"long"},
            {"item":["虎"],"cls":""},
            {"item":["龙","龙"],"cls":"long"},
            {"item":["虎","虎"],"cls":""},
            {"item":["龙"],"cls":"long"}
          ]}
        ]
      },
      ballbanbo:{
        'hong':[29, 30, 34, 35, 40, 45, 46, 1, 2, 7, 8, 12, 13, 18, 19, 23, 24],
        'lv':[27, 28, 32, 33, 38, 39, 43, 44, 5, 6, 11, 16, 17, 21, 22],
        'lan':[25, 26, 31, 36, 37, 41, 42, 47, 48, 3, 4, 9, 10, 14, 15, 20]
      },
      shengxiao:{
        'da':_.range(25, 50),
        'xiao':_.range(1, 25),
        'dan':_.range(1, 50, 2),
        'shuang':_.range(2, 50, 2),
        'shu':[11,23,35,47],
        'long':[7,19,31,43],
        'hou':[3,15,27,39],
        'niu':[10,22,34,46],
        'she':[6,18,30,42],
        'ji':[2,14,26,38],
        'hu':[9,21,33,45],
        'ma':[5,17,29,41],
        'gou':[1,13,25,37,49],
        'tu':[8,20,32,44],
        'yang':[4,16,28,40],
        'zhu':[12,24,36,48]  
      },
      ballsx:{
        '11':'shu','23':'shu','35':'shu','47':'shu',
        '07':'long','19':'long','31':'long','43':'long',
        '03':'hou','15':'hou','27':'hou','39':'hou',
        '10':'niu','22':'niu','34':'niu','46':'niu',
        '06':'she','18':'she','30':'she','42':'she',
        '02':'ji','14':'ji','26':'ji','38':'ji',
        '09':'hu','21':'hu','33':'hu','45':'hu',
        '05':'ma','17':'ma','29':'ma','41':'ma',
        '01':'gou','13':'gou','25':'gou','37':'gou','49':'gou',
        '08':'tu','20':'tu','32':'tu','44':'tu',
        '04':'yang','16':'yang','28':'yang','40':'yang',
        '12':'zhu','24':'zhu','36':'zhu','48':'zhu'
      },
      sxcn:{
        'da':'大','dadan':'大单','dashuang':'大双',
        'xiao':'小','xiaodan':'小单','xiaoshuang':'小双',
        'dan':'单',
        'hedan':'合单',
        'shuang':'双',
        'heshuang':'合双',
        'shu':'鼠',
        'long':'龙',
        'hou':'猴',
        'niu':'牛',
        'she':'蛇',
        'ji':'鸡',
        'hu':'虎',
        'ma':'马',
        'gou':'狗',
        'tu':'兔',
        'yang':'羊',
        'zhu':'猪',
        'w0':'0尾','w1':'1尾','w2':'2尾','w3':'3尾','w4':'4尾','w5':'5尾','w6':'6尾','w7':'7尾','w8':'8尾','w9':'9尾'
      },
      luzhudata:null,
      luzhuhtml:'',
      wenluhtml:''
    }
  },
  components: {
    kuaiPan,xuanPan,pkPan,lhcPan
  },
  computed: {
    ...mapGetters([
      //'nowBalance','getNumbers',
      //'nowNick'
    ])
  },
  watch: {
    '$route' (to, from) {
      this.initLotteryPage();
    },
    wenluhtml(wlto, wlfrom) {
      //console.log(wlto,wlfrom);
      setTimeout(function() {
        PankouData.tabletab();
        //盘口input事件
        PankouData.pankouevent();
      },300)

    },
    pankoutab_now(past,now){
      setTimeout(function() {
        PankouData.tabletab();
        //盘口input事件
        PankouData.pankouevent();
      },300)
    }
  },
  mounted:function() {
    if (typeof Combinatorics !== 'undefined') {
      //f7.comb = Combinatorics;
    }
    this.initLotteryPage();
    appConfig().pankouInit(this);
  },
  methods:{
    ...mapActions([
      'setAmountOnly'
    ]),
    loadScript:function() {
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptSrc;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    },
    ballsxformat:function(num) {
      return this.sxcn[this.ballsx[num]];  
    },
    ckpk:function(n) {
      //console.log(n,n.length,'n.lengthn.lengthn.length');
      if (n.length>9) {
        return 'pkopen'    
      }
      if (n.length==7) {
        return 'lhcopen'    
      }
    },
    cklhc:function(n,m,no) {
      var _t = this;
      var colorcls = ' ';
      //console.log(_.indexOf(_t.ballbanbo['hong'],parseInt(no,10)),parseInt(no,10));
      if (_.indexOf(_t.ballbanbo['hong'],parseInt(no,10))>-1) {
        colorcls = 'lhchball ';  
      }
      if (_.indexOf(_t.ballbanbo['lv'],parseInt(no,10))>-1) {
        colorcls = 'lhclvball ';  
      }
      if (_.indexOf(_t.ballbanbo['lan'],parseInt(no,10))>-1) {
        colorcls = 'lhclball ';  
      }
      if (n.length==7 && m==6) {
        return colorcls+'lhclst'    
      }else if (n.length==7 && m==5) {
        return colorcls+'lhcbelst'    
      }else {
        return colorcls
      }
      return ''
    },
    pkcode:function(code) {
      if (code==null) {
        return 'code'  
      }
      var sb = code.split(',');
      if (sb.length>9) {
        return 'code longcode'    
      }
      return 'code'   
    },
    cformat:function(code) {
      if (code==null) {
        return '开奖中'
      }
      var sb = code.split(',');
      if (sb.length>9) {
        var leftfive = _.take(sb, 5).join('</div><div class="num">');
        var lastfive = _.takeRight(sb, 5).join('</div><div class="num">');
        code = '<div class="num">' + leftfive + '</div><br><div class="num">'+lastfive+'</div>';
      }else {
        code = '<div class="num">' +code.replace(/,/g,'</div><div class="num">')+'</div>';
      }

      return code;
    },
    initLotteryPage:function() {
      var t= this;
      jQuery.ajaxSetup({cache: true});
      var lid = parseInt(String(t.$route.hash).replace('#',''),10);
      // console.log(lid);
      t.ltlogocls={
        'logo':true,'animated':true,'flash':true,'logo1':true
      }
      if (lid<90) {t.pankoutab_now = t.pankoutab["ssc"];}
      if (lid==90) {t.pankoutab_now = t.pankoutab["kuai"];}
      if (lid==100) {t.pankoutab_now = t.pankoutab["xuan"];}
      if (lid==110) {t.pankoutab_now = t.pankoutab["pk"];}
      if (lid==250) {t.pankoutab_now = t.pankoutab["lhc"];t.isnow=false;}
      $('.lottery-navs > ul li.on').removeClass('on');
      $('.lottery-navs > ul .mylt_'+lid).addClass('on');
      $('#hashlid').attr('rel',t.pankoucode[lid]).html(lid);
      var beforeload = appConfig().distpath+'lottery.ssc.js';
      var clstag = 'ssc';
      var lotteryClsFile = appConfig().lotteryClsFile;
      // console.log(LtClsLibs,'LtClsLibsLtClsLibsLtClsLibsLtClsLibsLtClsLibs');
      t.trendlink = '/static/lottery-trend.html?id='+lid+'&w=1&q=50&chs='+t.pankoucn[lid];
      
      // alert('trendlinktrendlinktrendlink');
      // console.log(appConfig().ltgroups['ssc']);
      if ($.inArray(lid,appConfig().ltgroups['ssc'])>-1) {
        beforeload = appConfig().distpath+'lottery.ssc.js';
      }
      $.inArray(lid,appConfig().ltgroups['pk10'])>-1 ? (beforeload = appConfig().distpath+'lottery.pk10.js',clstag = 'pk10') : true;
      $.inArray(lid,appConfig().ltgroups['11y'])>-1 ? (beforeload = appConfig().distpath+'lottery.11x5.js',clstag = '11x5') : true;
      $.inArray(lid,appConfig().ltgroups['3d'])>-1 ? (beforeload = appConfig().distpath+'lottery.3d.js',clstag = '3d') : true;
      $.inArray(lid,appConfig().ltgroups['k3'])>-1 ? (beforeload = appConfig().distpath+'lottery.k3.js',clstag = 'k3') : true;
      //alert(beforeload);
      //console.log(beforeload,'beforeload');
      t.lid = lid;
      $('#lottery #topltname').attr('rel',lid);
      if (parseInt(lid,10)>89) {
        t.istrend=false;
        t.isnow=false;
        if (lid==90) {
          t.$refs.kuai.setnow();t.$refs.xuan.setnotnow();
          t.$refs.pk.setnotnow();
        }
        if (lid==100) {
          t.$refs.xuan.setnow();t.$refs.kuai.setnotnow();
          t.$refs.pk.setnotnow();
        }
        if (lid==110) {
          t.$refs.pk.setnow();t.$refs.kuai.setnotnow();
          t.$refs.xuan.setnotnow();
        }
        if (lid==250) {
          t.$refs.pk.setnotnow();t.$refs.kuai.setnotnow();
          t.$refs.xuan.setnotnow();t.$refs.lhc.setnow();
        }
      }else {
        t.istrend=true;t.isnow=true;
        t.$refs.kuai.setnotnow();
        t.$refs.xuan.setnotnow();
        t.$refs.pk.setnotnow();
      }
      PankouData.init(lid,t.pankoucode[lid],function(initdata) {
        //console.log(initdata.Obj,'initdatainitdatainitdataPankouData.initPankouData.init');
        if (typeof initdata.Obj !='undefined') {
          var allinfo = initdata.Obj;
          var thisyxiao = "";
          // console.log(allinfo,t.pankoucode[lid]);
          var yearres = String(allinfo.remark).match(/thisYear:(\D+)/g);
          var yearsx = JSON.parse(allinfo.remark);
          console.log(yearsx,'yearsxyearsx');
          t.nowissue = allinfo.CurrentPeriod;
          t.preissue = allinfo.PrePeriodNumber;
          //thisyxiao = yearres[0].replace('}','').replace('thisYear:','');
          thisyxiao = yearsx['thisYear'];
          t.preopen = allinfo.PreResult.split(',');
          t.closesec = allinfo.CloseCount;
          t.closecount = formatSeconds(allinfo.CloseCount,99).str;
          t.ratedict = allinfo.Lines;
          if (parseInt(lid,10)==90) {
            t.$refs.kuai.setrate(allinfo.Lines);
          }
          if (parseInt(lid,10)==100) {
            t.$refs.xuan.setrate(allinfo.Lines);
          }
          if (parseInt(lid,10)==110) {
            t.$refs.pk.setrate(allinfo.Lines);
          }
          if (parseInt(lid,10)==250 || parseInt(lid,10)==251) {
            console.log(thisyxiao,'thisyxiao');
            t.$refs.lhc.setrate(allinfo.Lines,thisyxiao);
            t.isnow=false;
          }

          t.luzhudata = allinfo.LuZhu;
          if(RecordList) RecordList.init();
          
          //console.log(t.luzhudata,allinfo.ZongchuYilou,allinfo.LuZhu);
          if (parseInt(lid,10)<90) {
            t.mustache = Mustache;
            PankouData.rendertrend(1,t.luzhudata,allinfo.ZongchuYilou,allinfo.LuZhu,t,function(a) {
              console.log(t.wenlu,'t.wenlut.wenlu');
              var rendered = Mustache.render(t.wenlutpl, t.wenlu);
              var rendered1 = Mustache.render(t.luzhutpl, t.luzhu);
              t.wenluhtml= rendered;
              t.luzhuhtml= rendered1;
              //$('#wenlu .tab-item').first().addClass('active');
            });
          }
        }
      });
      $('.pankou-opearation .tac .parlay').attr('rel',t.pankoucode[lid]);
      PankouData.getcode(t.pankoucode[lid],function(codedata) {
        t.codedata = codedata;
        //if (codedata[0].code == null) {
        //  codedata[0].code = "40,28,33,49,05,03,32";  
        //}
        t.preissue = codedata[0].issue;
        t.isShowTip = codedata[0].code;
        console.log(t.preissue,codedata[0].code,'codedata[0].codecodedata[0].codecodedata[0].codecodedata[0].code');
        // console.log(t.isShowTip, codedata[0].code, codedata)
        if(t.isShowTip!= null) t.preopen = codedata[0].code.split(',');
        //console.log(codedata,'codedatacodedata');
      });
      t.ltlogocls['pankou'+lid] = true;
      //var rendered = Mustache.render(t.wenlutpl, t.wenlu);
      //var rendered1 = Mustache.render(t.luzhutpl, t.luzhu);
      //t.wenluhtml= rendered;
      //t.luzhuhtml= rendered1;
      //PankouData.tabletab();
      //console.log(rendered);
      //$('#target').html(rendered);
    },
    reBalance:function() {
      var t= this;
    },
    openzuo:function() {
      //f7.popup('#zuomainbox');
    },
    loadsc:function(url,callback) {
      var script = document.createElement("script")
      script.type = "text/javascript";
      if (script.readyState){//IE
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" ||script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };
      }else{//Others
        script.onload = function(){
          callback();
        };
      }
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    todate:function(s) {
      Date.prototype.Format = function(fmt){ //author: meizz "yyyy-MM-dd hh:mm:ss.S"
        var o = {
          "M+" : this.getMonth()+1,                 //月份
          "d+" : this.getDate(),                    //日
          "h+" : this.getHours(),                   //小时
          "m+" : this.getMinutes(),                 //分
          "s+" : this.getSeconds(),                 //秒
          "q+" : Math.floor((this.getMonth()+3)/3), //季度
          "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
          fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
          if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
      }
      var date = new Date(s);
	    var time = date.Format('yyyy-MM-dd hh:mm:ss');
      return time;
    },
    expnums:function(e) {
      var t = this;
      if (typeof jQuery(".openzone").attr('opened') =='undefined') {
        jQuery(".openzone").animate({height:"210px"});
        jQuery(".openzoneholder").animate({height:"210px"});
        jQuery(".openzone").attr('opened',1);
        jQuery(".inline-numtable").show();
      }else {
        jQuery(".openzoneholder").animate({height:"33px"});
        jQuery(".openzone").animate({height:"33px"},'fast',function() {
          jQuery(".inline-numtable").hide();jQuery(".openzone").removeAttr('opened');
        });
      }
    },
    cleanall:function() {
      //this.Dom7('.lottery-record [data-command="clear"]').click();
      //this.Dom7('.lottery-opearation .play-area [data-command="clean"]').click();
    },
    notready:function() {
      //f7.alert('暂未开通', '提示：');
    },
    qdeal:function() {
      //this.Dom7('.ltp [data-command="submit"]').trigger('click');
    },
    qadd:function() {
      //this.Dom7('.ltp [data-command="add"]').trigger('click');
    }
  }
}
</script>

<style>
  @import "../css/stylus/lottery.styl";
  @import "../css/stylus/pankou.styl";
</style>
