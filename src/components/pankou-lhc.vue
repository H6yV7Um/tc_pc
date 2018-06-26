<template>
  <div id="j-lhc" v-show="isnow"> 
    <div class="nowm_panel">
      <!--<div class="clearfix">金额(元)：<input type="text" name="" value="" onkeyup="this.value=this.value.replace(/\D/g,'')" rel="lhc_tema"/></div><div class="clearfix lastclear"><em class="fl bk"></em><a class="hand syncbtn fl">立即下注</a><a class="hand resetbtn fl"><em class="icon">&#xe6c3;</em>重置</a></div>-->
      <div class="quickmoney">
        <ul>
          <li class="quicklabel">常用金额</li>
          <li class="quickset"><a class="hand">2</a><a class="hand">10</a><a class="hand">30</a></li>
        </ul>
      </div>
      <div class="quickfilter">
        <ul class="colorfilter clearfix j-n1-filter j-n2-filter">
          <li v-for="item,key in ballbanbo" :rel="joinstr(item)"><em class="chkdot"></em><label v-html="filterformat(key)" :class="colorcls(key)"></label></li>
        </ul>
        <ul class="sxfilter clearfix j-n1-filter j-n2-filter">
          <li v-for="item,key in shengxiao" :rel="joinstr(item)" :class="colordxcls(key)"><label v-html="sxformat(key)"></label></li>
        </ul>
        <ul class="colorfilter clearfix j-n3-filter">
          <li v-for="item,key in ballcolorbo" :rel="joinstr(item)"><em class="chkdot"></em><label v-html="filterformat(key)" :class="colorcls(key)"></label></li>
        </ul>
        <ul class="sxfilter sxfilter_banbo clearfix j-n3-filter">
          <li v-for="item,key in banbofilter" :rel="joinstr(item)" :class="bigcol(key)"><label v-html="sxformat(key)"></label></li>
        </ul>
        <ul class="colorfilter clearfix j-n4-filter">
          <li v-for="item,key in shengxiaofilter" :rel="joinstr(item)" typ="text"><em class="chkdot"></em><label v-html="key"></label></li>
        </ul>
        <ul class="sxfilter sxfilter_sxiao clearfix j-n4-filter">
          <li v-for="item,key in xiaoquickfilter" :rel="joinstr(item)" class="biggercol" typ="text"><label v-html="key"></label></li>
        </ul>
        <ul class="sxfilter sxfilter_sxiao sxfilter_sxiaomore clearfix j-n4-filter">
          <li v-for="item,key in xiaomorefilter" :rel="joinstr(item)" class="fullcol" typ="text"><label v-html="key"></label></li>
        </ul>
        <ul class="colorfilter clearfix j-n5-filter">
          <li v-for="item,key in weifilter" :rel="joinstr(item)" typ="text"><em class="chkdot"></em><label v-html="filterformat(key)"></label></li>
        </ul>
      </div>
    </div>
    <div id="j-n1" class="lhc_uls now">
      <!-- 双面盘start -->
      <div class="nowm_help"><em class="icon">&#xe71c</em>当期开出的最后一位号码为特码。当开出特码与投注号码一致、即视为中奖（其余情况则视为不中奖）。</div>
      <div class="nowm_list clearfix">
        <ul class="firstline">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_1']" rel="特码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_tema',idx)" :rate="getrate('lhc_tema',idx)">
            <em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_tema"/>
          </li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_2']" rel="特码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_tema',idx)" :rate="getrate('lhc_tema',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_tema"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_3']" rel="特码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_tema',idx)" :rate="getrate('lhc_tema',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_tema"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_4']" rel="特码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_tema',idx)" :rate="getrate('lhc_tema',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_tema"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_5']" rel="特码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_tema',idx)" :rate="getrate('lhc_tema',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_tema"/></li>
        </ul>
      </div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
      <!-- 双面盘end -->
    </div>
    <div id="j-n2" class="lhc_uls hide">
      <!-- 冠、亚军和 start -->
      <div class="nowm_help"><em class="icon">&#xe71c</em><span>当期开出之前6个号码叫正码。第一号为正码1，依次叫正码2、正码3……正码6，不以大小排序。当开出正码1与投注号码一致、即视为中奖（其余情况则视为不中奖）。</span></div>
      <div class="zhengmapos">
        <ul>
          <li rel="1" class="on" title="当期开出之前6个号码叫正码。第一号为正码1，依次叫正码2、正码3……正码6，不以大小排序。当开出正码1与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码1</li>
          <li rel="2" title="当期开出之前6个号码叫正码。第二号为正码2，其他依次叫正码1、正码3……正码6，不以大小排序。当开出正码2与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码2</li>
          <li rel="3" title="当期开出之前6个号码叫正码。第三号为正码3，其他依次叫正码1、正码2……正码6，不以大小排序。当开出正码3与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码3</li>
          <li rel="4" title="当期开出之前6个号码叫正码。第四号为正码4，其他依次叫正码1、正码2……正码6，不以大小排序。当开出正码4与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码4</li>
          <li rel="5" title="当期开出之前6个号码叫正码。第五号为正码5，其他依次叫正码1、正码2……正码6，不以大小排序。当开出正码5与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码5</li>
          <li rel="6" title="当期开出之前6个号码叫正码。第六号为正码6，其他依次叫正码1、正码2……正码5，不以大小排序。当开出正码6与投注号码一致、即视为中奖（其余情况则视为不中奖）。">正码6</li>
        </ul>
      </div>
      <div class="nowm_list clearfix">
        <ul class="firstline">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput" style="display:none;"><em>01</em><span>x14.77</span><input type="text" name="" value="" /></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_1']" rel="正码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_zhengma1',idx)" :rate="getrate('lhc_zhengma1',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_zhengma1"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_2']" rel="正码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_zhengma1',idx)" :rate="getrate('lhc_zhengma1',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_zhengma1"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_3']" rel="正码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_zhengma1',idx)" :rate="getrate('lhc_zhengma1',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_zhengma1"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_4']" rel="正码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_zhengma1',idx)" :rate="getrate('lhc_zhengma1',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_zhengma1"/></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id" v-for="(n, idx) in ratesmap['lhc_tema_5']" rel="正码" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('lhc_zhengma1',idx)" :rate="getrate('lhc_zhengma1',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span>x{{getrate('lhc_tema',idx)}}</span><input type="text" name="" value="" rel="lhc_zhengma1"/></li>
        </ul>
      </div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
      <!-- 冠、亚军和 end -->
      <!-- 1-5|6-10 start -->
      <!-- 1-5|6-10 end -->
    </div>
    <div id="j-n3" class="lhc_uls hide">
      <!-- 1-5|6-10 start -->
      <div class="nowm_help"><em class="icon">&#xe71c</em>以特码色波和特码单双大小为一个投注组合。当开出的特码出现在其投注组合中，即视为中奖（其余情况则视为不中奖）。若开出特码为49号时，所有投注半波任意一个组合接会被视为和局，并返回全部本金（不派发返点）。</div>
      <div class="nowm_list clearfix">
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in ballbanbo_1" rel="半波" :class="'textno_'+key" :rel="joinstr(item)" :title="filterformat(key)">
            <div class="inline-left"><span v-html="filterformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_'+key"/></div>
          </li>
        </ul>
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in ballbanbo_2" rel="半波" :class="'textno_'+key" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="filterformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_'+key"/></div>
          </li>
        </ul>
      </div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
      <!-- 1-5|6-10 end -->
    </div>
    <div id="j-n4" class="lhc_uls hide">
      <!-- 双面盘start -->
      <!-- 双面盘end -->
      <!-- 冠、亚军和 start -->
      <!-- 冠、亚军和 end -->
      <!-- 1-5|6-10 start -->
      <div class="nowm_help"><em class="icon">&#xe71c</em><span>以特码和生肖为一个投注组合。当开出的特码出现在其投注组合中，即视为中奖（其余情况视为不中奖）。</span></div>
      <div class="zhengmapos">
        <ul>
          <li rel="0" class="on" title="以特码和生肖为一个投注组合。当开出的特码出现在其投注组合中，即视为中奖（其余情况视为不中奖）。" :rate="ratedict['j25025']" :thisr="ratedict['j25035']">特肖</li><li rel="1" title="指开出的7个开奖号码中含有投注所属生肖的一个或多个号码，即视为中奖，不论同生肖的号码出现一个或多个，派彩只派一次。" :rate="ratedict['j25044']" :thisr="ratedict['j25047']">一肖</li><li rel="6" len="6" title="最少选择6个生肖为一注，以特码和生肖为一个投注组合。当开出的特码出现在其投注组合中，即视为中奖（其余情况视为不中奖）。" :rate="ratedict['j25049']" :thisr="ratedict['j25049']">六肖</li>
        </ul>
      </div>
      <div class="nowm_list nowm_shengxiao clearfix">
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in shengxiao_1" title="特肖" :class="'textno_'+key+nowsx(key)" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_texiao_'+key"/><span class="chkdot"><i class="icon">&#xe6d8;</i></span></div>
          </li>
        </ul>
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in shengxiao_2" title="特肖" :class="'textno_'+key+nowsx(key)" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_texiao_'+key"/><span class="chkdot"><i class="icon">&#xe6d8;</i></span></div>
          </li>
        </ul>
      </div>
      <div class="nowm_rate total_rate" style="display:none;">赔率 x<span id="sxrate" class="shengxiao_rate">{{bzrate('j25049')}}</span></div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <span class="now_samelb" style="display:none;">金额：</span><input type="text" name="" id="liuxiaom" style="display:none;" value="1" class="now_sameinput"/><a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
      <!-- 1-5|6-10 end -->
    </div>
    <div id="j-n5" class="lhc_uls hide">
      <div class="nowm_help"><em class="icon">&#xe71c</em>指7个开奖号码中含有所属尾数的一个或多个号码，不论同尾数的号码出现一个或多个，派彩只派一次。</div>
      <div class="nowm_list clearfix">
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in weishu_1" title="尾数" :class="'textno_'+key" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_weishu_'+key"/></div>
          </li>
        </ul>
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in weishu_2" title="尾数" :class="'textno_'+key" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinhtmlstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_weishu_'+key"/></div>
          </li>
        </ul>
      </div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
    </div>
    <div id="j-n6" class="lhc_uls hide">
      <div class="nowm_help"><em class="icon">&#xe71c</em>所有7个开奖号码的数值总和叫做总分。</div>
      <div class="nowm_list clearfix">
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in zh_1" title="总分" :class="'textno_'+key" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_zh_'+key"/></div>
          </li>
        </ul>
        <ul class="firstline halfline">
          <li class="linetitle"><span style="width:80%">号码</span><span style="width:10%">金额</span></li>
          <li class="lineinput clearfix" v-for="item,key in zh_2" title="总分" :class="'textno_'+key" :rel="joinstr(item)">
            <div class="inline-left"><span v-html="sxformat(key)" class="flabel"></span><span class="slabel" :bonus="getbonus(key,0)">x{{getrate(key,0)}}</span><span class="inlineball" v-html="joinstr(item)"></span></div>
            <div class="inline-right"><input type="text" name="" value="" :rel="'lhc_zh_'+key"/></div>
          </li>
        </ul>
      </div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
    </div>
    <div id="j-n7" class="lhc_uls hide">
      <div class="nowm_help"><em class="icon">&#xe71c</em><span>所投注的每五个号码为一注，每注的五个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5则中奖，而投1,2,3,4,6则不中奖。</span></div>
      <div class="zhengmapos">
        <ul>
          <li rel="0" class="on" len="5" nid="25068" :rate="ratedict['j25068']" title="所投注的每五个号码为一注，每注的五个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5则中奖，而投1,2,3,4,6则不中奖。">五不中</li>
          <li rel="1" nid="25069" len="6" :rate="ratedict['j25069']" title="所投注的每六个号码为一注，每注的六个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5,13则中奖，而投1,2,3,4,5,6则不中奖。">六不中</li>
          <li rel="2" nid="25070" len="7" :rate="ratedict['j25070']" title="所投注的每七个号码为一注，每注的七个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5,13,14则中奖，而投1,2,3,4,5,6,13则不中奖。">七不中</li>
          <li rel="3" nid="25071" len="8" :rate="ratedict['j25071']" title="所投注的每八个号码为一注，每注的八个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5,13,14,15则中奖，而投1,2,3,4,5,6,13,14则不中奖。">八不中</li>
          <li rel="4" nid="25072" len="9" :rate="ratedict['j25072']" title="所投注的每九个号码为一注，每注的九个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5,13,14,15,16则中奖，而投1,2,3,4,5,6,13,14,15则不中奖。">九不中</li>
          <li rel="5" nid="25073" len="10" :rate="ratedict['j25073']" title="所投注的每十个号码为一注，每注的十个号码中如果没有当期开奖的所有7个号码中的任意一个，则视为中奖；否则视为不中奖。例如开奖号码是：6,7,8,9,10,11,12，若你投的是1,2,3,4,5,13,14,15,16,17则中奖，而投1,2,3,4,5,6,13,14,15,16则不中奖。">十不中</li>
        </ul>
      </div>
      <div class="nowm_list now_buzhong clearfix">
        <ul class="firstline">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id clearfix" v-for="(n, idx) in ratesmap['lhc_tema_1']" rel="五不中" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('wu',idx)" :rate="getrate('wu',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span class="blankgap"></span><span class="chkdot"><i class="icon">&#xe6d8;</i></span></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id clearfix" v-for="(n, idx) in ratesmap['lhc_tema_2']" rel="五不中" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('wu',idx)" :rate="getrate('wu',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span class="blankgap"></span><span class="chkdot"><i class="icon">&#xe6d8;</i></span></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id clearfix" v-for="(n, idx) in ratesmap['lhc_tema_3']" rel="五不中" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('wu',idx)" :rate="getrate('wu',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span class="blankgap"></span><span class="chkdot"><i class="icon">&#xe6d8;</i></span></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id clearfix" v-for="(n, idx) in ratesmap['lhc_tema_4']" rel="五不中" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('wu',idx)" :rate="getrate('wu',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span class="blankgap"></span><span class="chkdot"><i class="icon">&#xe6d8;</i></span></li>
        </ul>
        <ul class="">
          <li class="linetitle"><span>号码</span><span>金额</span></li>
          <li class="lineinput same-id clearfix" v-for="(n, idx) in ratesmap['lhc_tema_5']" rel="五不中" :class="'ballno_'+n" :rid="fullball(n)" :bonus="getbonus('wu',idx)" :rate="getrate('wu',idx)"><em v-html="fullball(n)" :class="cklhc(n)"></em><span class="blankgap"></span><span class="chkdot"><i class="icon">&#xe6d8;</i></span></li>
        </ul>
      </div>
      <div class="total_rate">赔率 x<span id="bzrate" class="buzhong_rate">{{bzrate('j25068')}}</span></div>
      <div class="nowm_fires">
        <span class="fl" id="totalcount">您选择了<em>0</em>注&nbsp;&nbsp;总金额：<em>0.00</em>元</span>
        <span class="now_samelb">金额：</span><input type="text" name="" id="liuxiaom_1" value="1" class="now_sameinput"/><a class="now_samefire"><em class="icon">&#xe6da;</em>立即投注</a>&nbsp;&nbsp;<a class="now_samereset"><em class="icon">&#xe6d9;</em>重置</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ratedict:{},isnow:false,
      aannd:0,//A面还是B面
      //bzrate:'0.00',
      thisy:'',
      ratesmap:{
        'lhc_tema':_.range(1, 50),'lhc_tema_1':_.range(1, 11),'lhc_tema_2':_.range(11, 21),'lhc_tema_3':_.range(21, 31),'lhc_tema_4':_.range(31, 41),'lhc_tema_5':_.range(41, 50),
        'lhc_buzhong_1':_.range(1, 6)
      },
      ballcolor:{
        '01':'red','02':'red','12':'red','13':'red','23':'red','24':'red','34':'red','35':'red','45':'red','46':'red','07':'red','08':'red','18':'red','19':'red','29':'red','30':'red','40':'red',
        '03':'blue','04':'blue','14':'blue','15':'blue','25':'blue','26':'blue','36':'blue','37':'blue','47':'blue','48':'blue','09':'blue','10':'blue','20':'blue',
        '11':'green','21':'green','22':'green','32':'green','33':'green','43':'green','44':'green','05':'green','06':'green','16':'green','17':'green','27':'green','28':'green','38':'green','39':'green','49':'green'
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
      ballbanbo:{
        'hongda':[29,30,34,35,40,45,46],
        'hongxiao':[1,2,7,8,12,13,18,19,23,24],
        'hongdan':[1,7,13,19,23,29,35,45],
        'hongshuang':[2,8,12,18,24,30,34,40,46],
        'honghdan':[1,7,12,18,23,29,30,34,45],
        'honghshuang':[2,8,13,19,24,35,40,46],
        'lvda':[27,28,32,33,38,39,43,44],
        'lvxiao':[5,6,11,16,17,21,22],
        'lvdan':[5,11,17,21,27,33,39,43],
        'lvshuang':[6,16,22,28,32,38,44],
        'lvhdan':[5,16,21,27,32,38,43],
        'lvhshuang':[6,11,17,22,28,33,39,44],
        'landa':[25,26,31,36,37,41,42,47,48],
        'lanxiao':[3,4,9,10,14,15,20],
        'landan':[3,9,15,25,31,37,41,47],
        'lanshuang':[4,10,14,20,26,36,42,48],
        'lanhdan':[3,9,10,14,25,36,41,47],
        'lanhshuang':[4,15,20,26,31,37,42,48]
      },
      ballcolors:{
        'hong':[29, 30, 34, 35, 40, 45, 46, 1, 2, 7, 8, 12, 13, 18, 19, 23, 24],
        'lv':[27, 28, 32, 33, 38, 39, 43, 44, 5, 6, 11, 16, 17, 21, 22, 49],
        'lan':[25, 26, 31, 36, 37, 41, 42, 47, 48, 3, 4, 9, 10, 14, 15, 20]
      },
      ballbanbo_1:{
        'hongda':[29,30,34,35,40,45,46],
        'hongxiao':[1,2,7,8,12,13,18,19,23,24],
        'hongdan':[1,7,13,19,23,29,35,45],
        'hongshuang':[2,8,12,18,24,30,34,40,46],
        'honghdan':[1,7,12,18,23,29,30,34,45],
        'honghshuang':[2,8,13,19,24,35,40,46],
        'lvda':[27,28,32,33,38,39,43,44],
        'lvxiao':[5,6,11,16,17,21,22],
        'lvdan':[5,11,17,21,27,33,39,43]
      },
      ballbanbo_2:{
        'lvshuang':[6,16,22,28,32,38,44],
        'lvhdan':[5,16,21,27,32,38,43],
        'lvhshuang':[6,11,17,22,28,33,39,44],
        'landa':[25,26,31,36,37,41,42,47,48],
        'lanxiao':[3,4,9,10,14,15,20],
        'landan':[3,9,15,25,31,37,41,47],
        'lanshuang':[4,10,14,20,26,36,42,48],
        'lanhdan':[3,9,10,14,25,36,41,47],
        'lanhshuang':[4,15,20,26,31,37,42,48]
      },
      ballcolorbo:{
        'hongbo':['hongxiao','hongda','hongdan','hongshuang','honghdan','honghshuang'],
        'lvbo':['lvxiao','lvda','lvdan','lvshuang','lvhdan','lvhshuang'],
        'lanbo':['lanxiao','landa','landan','lanshuang','lanhdan','lanhshuang']
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
      shengxiao_1:{
        'shu':[11,23,35,47],
        'niu':[10,22,34,46],
        'hu':[9,21,33,45],
        'tu':[8,20,32,44],
        'long':[7,19,31,43],
        'she':[6,18,30,42]
      },
      shengxiao_2:{
        'ma':[5,17,29,41],
        'yang':[4,16,28,40],
        'hou':[3,15,27,39],
        'ji':[2,14,26,38],
        'gou':[1,13,25,37,49],
        'zhu':[12,24,36,48]
      },
      weishu_1:{
        'w0':[10,20,30,40],
        'w1':[1,11,21,31,41],
        'w2':[2,12,22,32,42],
        'w3':[3,13,23,33,43],
        'w4':[4,14,24,34,44]
      },
      weishu_2:{
        'w5':[5,15,25,35,45],
        'w6':[6,16,26,36,46],
        'w7':[7,17,27,37,47],
        'w8':[8,18,28,38,48],
        'w9':[9,19,29,39,49]
      },
      zh_1:{
        'da':['总分大于等于175的，即视为中奖。'],
        'dan':['总分是单数的，即视为中奖。'],
        'dadan':['总分大于等于175且为单数的，即视为中奖。'],
        'xiaodan':['总分小于等于174且为单数的，即视为中奖。']
      },
      zh_2:{
        'xiao':['总分小于等于174的，即视为中奖。'],
        'shuang':['总分是双数的，即视为中奖。'],
        'dashuang':['总分大于等于175且为双数的，即视为中奖。'],
        'xiaoshuang':['总分小于等于174且为双数的，即视为中奖。']
      },
      banbofilter:{
        'da':['lvda','hongda','landa'],
        'xiao':['lvxiao','hongxiao','lanxiao'],
        'dan':['lvdan','hongdan','landan'],
        'shuang':['lvshuang','hongshuang','lanshuang'],
        'hedan':['lvhdan','honghdan','lanhdan'],
        'heshuang':['lvhshuang','honghshuang','lanhshuang']
      },
      weifilter:{
        'da':['w5','w6','w7','w8','w9'],
        'xiao':['w0','w1','w2','w3','w4'],
        'dan':['w1','w3','w5','w7','w9'],
        'shuang':['w0','w2','w4','w6','w8']
      },
      shengxiaofilter:{
        '大肖':['shu','niu','hu','tu','long','she'],
        '小肖':['ma','yang','hou','ji','gou','zhu'],
        '男肖':['shu','niu','hu','long','ma','hou','gou'],
        '女肖(五官肖)':['yang','tu','ji','she','zhu']
      },
      xiaoquickfilter:{
        '吉美生肖':['tu','long','she','ma','yang','ji'],
        '凶丑生肖':['shu','niu','hu','hou','gou','zhu'],
        '野外六兽':['shu','hu','tu','long','she','hou'],
        '家内六畜':['ma','yang','niu','ji','gou','zhu'],
        '阳性生肖':['niu','hu','tu','yang','hou','ji'],
        '阴性生肖':['shu','long','she','ma','gou','zhu']
      },
      xiaomorefilter:{
        '五行属金：猴 鸡':['hou','ji'],
        '五行属木：虎 兔':['hu','tu'],
        '五行属水：鼠 猪':['shu','zhu'],
        '五行属火：蛇 马':['she','ma'],
        '五行属土：牛 龙 羊 狗':['niu','long','yang','gou']
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
      idmaps:{
        "lhc_tema":"25000",
        "lhc_zhengma1":"25001",
        "lhc_zhengma2":"25002",
        "lhc_zhengma3":"25003",
        "lhc_zhengma4":"25004",
        "lhc_zhengma5":"25005",
        "lhc_zhengma6":"25006",
        "lhc_hongda":"25007",
        "lhc_hongxiao":"25008",
        "lhc_hongdan":"25009",
        "lhc_hongshuang":"25010",
        "lhc_honghdan":"25011",
        "lhc_honghshuang":"25012",
        "lhc_lvda":"25013",
        "lhc_lvxiao":"25014",
        "lhc_lvdan":"25015",
        "lhc_lvshuang":"25016",
        "lhc_lvhdan":"25017",
        "lhc_lvhshuang":"25018",
        "lhc_landa":"25019",
        "lhc_lanxiao":"25020",
        "lhc_landan":"25021",
        "lhc_lanshuang":"25022",
        "lhc_lanhdan":"25023",
        "lhc_lanhshuang":"25024",
        "lhc_texiao_shu":"25025",
        "lhc_texiao_niu":"25026",
        "lhc_texiao_hu":"25027",
        "lhc_texiao_tu":"25028",
        "lhc_texiao_long":"25029",
        "lhc_texiao_she":"25030",
        "lhc_texiao_ma":"25031",
        "lhc_texiao_yang":"25032",
        "lhc_texiao_hou":"25033",
        "lhc_texiao_ji":"25034",
        "lhc_texiao_gou":"25035",
        "lhc_texiao_zhu":"25036",
        "lhc_yixiao_shu":"25037",
        "lhc_yixiao_niu":"25038",
        "lhc_yixiao_hu":"25039",
        "lhc_yixiao_tu":"25040",
        "lhc_yixiao_long":"25041",
        "lhc_yixiao_she":"25042",
        "lhc_yixiao_ma":"25043",
        "lhc_yixiao_yang":"25044",
        "lhc_yixiao_hou":"25045",
        "lhc_yixiao_ji":"25046",
        "lhc_yixiao_gou":"25047",
        "lhc_yixiao_zhu":"25048",
        "lhc_liuxiao":"25049",
        "lhc_weishu_0":"25050",
        "lhc_weishu_1":"25051",
        "lhc_weishu_2":"25052",
        "lhc_weishu_3":"25053",
        "lhc_weishu_4":"25054",
        "lhc_weishu_5":"25055",
        "lhc_weishu_6":"25056",
        "lhc_weishu_7":"25057",
        "lhc_weishu_8":"25058",
        "lhc_weishu_9":"25059",
        "lhc_zh_da":"25060",
        "lhc_zh_xiao":"25061",
        "lhc_zh_dan":"25062",
        "lhc_zh_shuang":"25063",
        "lhc_zh_dadan":"25064",
        "lhc_zh_xiaodan":"25065",
        "lhc_zh_dashuang":"25066",
        "lhc_zh_xiaoshuang":"25067",
        "lhc_buzhong_wu":"25068",
        "lhc_buzhong_liu":"25069",
        "lhc_buzhong_qi":"25070",
        "lhc_buzhong_ba":"25071",
        "lhc_buzhong_jiu":"25072",
        "lhc_buzhong_shi":"25073"
      }
    }
  },
  components: {
    
  },
  mounted:function() {
    
  },
  methods:{
    setrate:function(r,sx) {
      this.ratedict = r;
      this.thisy = sx;
      console.log(this.thisy);
    },
    joinstr:function(str) {
      return str.join(',')  
    },
    bzrate:function(str) {
      //return str;
      return String(this.ratedict[str]).split('|')[0].replace(/([\d])+@/g, "");
    },
    colorcls:function(str) {
      if (str.indexOf('hong')>-1) {
        return 'hongcls'  
      }
      if (str.indexOf('lv')>-1) {
        return 'lvcls'  
      }
      if (str.indexOf('lan')>-1) {
        return 'lancls'  
      }
    },
    colordxcls:function(str) {
      if (str.indexOf('da')>-1 || str.indexOf('xiao')>-1 || str=='dan' || str=='shuang') {
        return 'redcls'  
      }
    },
    nowsx:function(xiao) {
      if (xiao==this.thisy) {
        return ' nowxiao'   
      }
      return ''  
    },
    joinhtmlstr:function(str) {
      //console.log(str);
      var allout = [];
      var _t = this;
      for (var i = 0; i < str.length; i++) {
        allout.push('<em class="'+_t.cklhc(str[i])+'">'+str[i]+'</em>')  
      }
      return allout.join(''); 
      //return '<em>'+str.join('</em><em>')+'</em>'  
    },
    setnow:function() {
      this.isnow = true;
      //alert('111');
    },
    cklhc:function(no) {
      var _t = this;
      var colorcls = '';
      //console.log(_.indexOf(_t.ballbanbo['hong'],parseInt(no,10)),parseInt(no,10));
      if (_.indexOf(_t.ballcolors['hong'],parseInt(no,10))>-1) {
        colorcls = 'lhchball';  
      }
      if (_.indexOf(_t.ballcolors['lv'],parseInt(no,10))>-1) {
        colorcls = 'lhclvball';  
      }
      if (_.indexOf(_t.ballcolors['lan'],parseInt(no,10))>-1) {
        colorcls = 'lhclball';  
      }
      return colorcls
    },
    setnotnow:function() {
      this.isnow = false;
      //alert('111');
    },
    fullball:function(str) {
      return this.padNumber(str,2);  
    },
    filterformat:function(str) {
      return str.replace('hong','红').replace('bo','波').replace('lv','绿').replace('lan','蓝').replace('hshuang','合双').replace('hdan','合单').replace('xiao','小').replace('shuang','双').replace('dan','单').replace('da','大');    
    },
    sxformat:function(str) {
      return this.sxcn[str];  
    },
    bigcol:function(str) {
      if (str=='hedan' || str=='heshuang') {
        return 'littlebig'  
      }
      return 'redcls'
    },
    padNumber(num, fill) {
      console.log();
      var len = ('' + num).length;
      return (Array(
        fill > len ? fill - len + 1 || 0 : 0
      ).join(0) + num);
    },
    getrate:function(a,b) {
      var _t = this,linerate,disrate;
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_texiao_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_texiao_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_weishu_'+String(a).replace('w','')]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_weishu_'+String(a).replace('w','')]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_buzhong_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_buzhong_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_zh_'+String(a)]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_zh_'+String(a)]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps[a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps[a]].split('|')
        disrate = linerate[_t.aannd].replace(/([\d])+@/g, "");
        return disrate;
      }
      return '-';
      
    },
    getbonus:function(a,b) {
      var _t = this,linerate,disrate;
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_texiao_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_texiao_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_weishu_'+String(a).replace('w','')]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_weishu_'+String(a).replace('w','')]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_buzhong_'+a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_buzhong_'+a]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps['lhc_zh_'+String(a)]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps['lhc_zh_'+String(a)]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      if (typeof _t.ratedict['j'+_t.idmaps[a]] !='undefined') {
        linerate = _t.ratedict['j'+_t.idmaps[a]].split('|')
        disrate = linerate[_t.aannd].replace(/@([\d.])+/g, "");
        return disrate;
      }
      return '-';
      
    }
  }
}
</script>

<style>
  @import "../css/stylus/lhc.styl";
</style>