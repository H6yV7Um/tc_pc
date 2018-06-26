<template>
	<div class="main" style="margin-top: 0;background: url(../src/img/index/active_bg.jpg);">
		<div v-show="!isMobile" class="pc_part">
			<div class="activitywapper"></div>
			<div class="activityMmain bgcolorA">
				<div class="activityMmainImg2">
					<router-link to="/index"><img src="../img/commit/logo_w.png"/></router-link>
				</div>
				<ul class="activityMmain_header colorJ clearfix bdRgbF2_bom2">
					<li class="active">优惠活动</li>
					<!--<li @click="openFunds">正在进行</li>-->
					<!--<li @click="openFunds">往期活动</li>-->
				</ul>
				<div class="activityMmain_cont clearfix" v-cloak>
					<div v-show="isonlyshow < 1 || isonlyshow == allShow[0]" class="activityMmain_cont_demo fl">
						<img src="../img/activity/a1.jpg" width="100%"/>
						<div class="activityMmain_cont_txter bgcolorA clearfix">
							<div class="activityMmain_left fl">
								<h3>【手机app充值周周送】</h3>
								<p style="height:24px"><em class="icon">&#xe6c2;</em>活动时间：即日起生效，活动截止日期将会提前公告。
								</p>
							</div>
							<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(0)">
								<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
								<i class="icon common_color ft24 mt15 fr"
									 :class="[index === 0 && 'active']">&#xe606;</i>
							</div>
						</div>
						<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 0">
							<div style="text-align:center">
								<table>
									<thead>
										<tr>
											<td>手机app充值</td>
											<td>赠送奖金</td>
											<td>提款要求</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>单笔存款100元以上</td>
											<td>0.5%</td>
											<td>本金加赠送礼金的一倍流水</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div><h3>申请方式:</h3> 通过手机app充值后，请联系在线客服，客服人员会以电话的形式审核相关信息后，将彩金派发到您的会员账户内。
								活动周期:  周一00：00至周日23：59为一个周期
							</div>
							<h3>活动细则：</h3>
							<p>1.存款金额不可累计计算，以最后一笔存款金额派发礼金。</p>
							<p>2.此活动不可参与菲律宾1.5分彩，菲律宾2分彩和菲律宾5分彩。</p>
							<p>3.此优惠活动存款后不可进行投注，如有投注，则视为放弃领取此礼金。</p>
							<p>4.优惠活动即日起生效，此活动用于头彩全体会员。</p>
							<p>5.此活动周期为一周时间，申请需在周期内完成，超过申请时间视为第二个周期。</p>
							<p>6.同一账户、同一IP每周只可参加一次活动。</p>
							<p>7.参与本活动如发现任何利用活动或技术漏洞对冲等无风险投注、对打、恶意投注等恶意套利行为，平台将扣除所有违规所得，并且有权冻结其账号。</p>
							<p>8.为了避免对文字理解的差异，头彩娱乐保留最终解释权。</p>
							<p>9.此活动可以与其他优惠活动同时享有。</p>
						</div>
					</div>
					<div v-show="isonlyshow < 1 || isonlyshow == allShow[1]" class="activityMmain_cont_demo fl">
						<img src="../img/activity/a2.jpg" width="100%"/>
						<div class="activityMmain_cont_txter bgcolorA clearfix">
							<div class="activityMmain_left fl">
								<h3>【手机号绑定活动】</h3>
								<p style="height:24px;"><em class="icon">&#xe6c2;</em>即日起生效，活动截止日期将会提前公告。</p>
							</div>
							<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(1)">
								<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
								<i class="icon common_color ft24 mt15 fr"
									 :class="[index === 1  && 'active']">&#xe606;</i>
							</div>
						</div>
						<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 1">
							<h3>为感谢广大玩家对本平台的支持与信赖，即日起凡绑定手机号，即可领取活动奖金6元。</h3>
							<div><h3>申请步骤：</h3>请绑定您的手机号码后联系在线客服，提供您的帐号等相关信息，客服核实后会将彩金派发到您的会员账号。</div>
							<h3>活动细则：</h3>
							<p>1.每天限制名额1000人。</p>
							<p>2.同一IP只可参加一次活动。</p>
							<p>3.领取活动奖金后只可参与重庆时时彩，如代购其他彩种将视为无效，扣除奖金和盈利的部分。</p>
							<p>4.此活动可以与其他优惠活动同时享有。</p>
							<p>5.为了避免对文字理解的差异，头彩娱乐保留最终解释权。</p>
							<p>6.参与本活动如发现任何利用活动或技术漏洞对冲等无风险投注、对打、恶意投注等恶意套利行为，平台将扣除所有违规所得，
								并且有权冻结其账号。</p>
							<p>7.本次优惠活动即日起生效，优惠活动是用于头彩娱乐全体会员。</p>
						</div>
					</div>
					<div v-show="isonlyshow < 1 || isonlyshow == allShow[2]" class="activityMmain_cont_demo fl">
						<img src="../img/activity/a3.jpg" width="100%"/>
						<div class="activityMmain_cont_txter bgcolorA clearfix">
							<div class="activityMmain_left fl">
								<h3>【充值名媛到府服务活动】</h3>
								<p style="height:48px;"><em class="icon">&#xe6c2;</em>活动日期：2018/02/06 00：00～2018/03/09 23：59。</p>
							</div>
							<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(2)">
								<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
								<i class="icon common_color ft24 mt15 fr"
									 :class="[index === 2  && 'active']">&#xe606;</i>
							</div>
						</div>
						<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 2">
							<h3>感谢高端玩家长久以来的大力支持，以及对本平台的由衷喜爱，本平台特别进行名媛到府服务的活动，以嘉惠充值达到一定金额的玩家。</h3>
							<div><h3>申请资格：</h3>
								<p>1.活动期间内一日累计充值30万以上的玩家（以下简称为大户）或，活动期间内七日累计充值100万以上大户。</p>
								<p>2.欲参加此活动者需绑定手机号，方便客服与您联系。</p>
							</div>
							<h3>活动规则：</h3>
							<p>1.当日充值30万以上大户，提供一次名媛服务。 </p>
							<p>2.当周充值100万以上大户，提供一次名媛服务。</p>
							<p>3.活动期间可累计资格次数。 </p>
							<div style="padding-left:20px">
								<ul>
									<li>• 例：若活动期间共有三日皆充值30万以上，则有三次名媛服务机会。</li>
									<li>• 例：若活动期间有一周大户资格，与三日大户资格，则有四次名媛服务机会。</li>
									<li>• 例：若活动为期30日，每日都充值30万，活动结算时有30次(日充值) +4次(周充值)的服务机会。</li>
								</ul>
							</div>
							<p>4.本活动日期结束后，将列出大户名单，并透过客服专线与您联系询问意愿，请符合资格者耐心等候。</p>
							<p>
								5.服务范围限于一线城市：北京、上海、广州、深圳。新一线城市（成都、杭州、武汉、重庆、南京、天津、苏州、西安、 长沙、沈阳、青岛、郑州、大连、东莞、宁波）的大户，客服与您联系时便会告知所在地是否可以接受服务。</p>
							<p>6.符合资格而选择不愿意参加，或因所在地问题而无法参加者，将会返还5000彩金至会员平台帐户。</p>
						</div>
					</div>
					<div v-show="isonlyshow < 1 || isonlyshow == allShow[3]" class="activityMmain_cont_demo fl">
						<img src="../img/activity/a4.jpg" width="100%"/>
						<div class="activityMmain_cont_txter bgcolorA clearfix">
							<div class="activityMmain_left fl">
								<h3>【你买彩票我送钱】</h3>
								<p style="height:48px;max-width:450px"><em class="icon">&#xe6c2;</em>活动日期：2018年3月2日（元宵节）00:00 至 2018年3月8日 23:59（北京时间）
								</p>
							</div>
							<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(3)">
								<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
								<i class="icon common_color ft24 mt15 fr"
									 :class="[index === 3  && 'active']">&#xe606;</i>
							</div>
						</div>
						<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 3">
							<div style="text-align:center">
								<table>
									<thead>
									<tr>
										<td>流水要求</td>
										<td>赠送奖金</td>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>有效投注额≥2000</td>
										<td>38元</td>
									</tr>
									<tr>
										<td>有效投注额≥10000</td>
										<td>138元</td>
									</tr>
									<tr>
										<td>有效投注额≥50000</td>
										<td>388元</td>
									</tr>
									<tr>
										<td>有效投注额≥100000</td>
										<td>588元</td>
									</tr>
									</tbody>
								</table>
							</div>
							<div><h3>活动内容：</h3>
								<p>1.有效投注计算周期为7天，活动结束后一次性领取奖金，此活动不共享优惠（如流水30000元，则享有138元奖金，不共享38元奖金）。</p>
								<p>2.此优惠不计算菲律宾1.5分彩；菲律宾2分彩和菲律宾5分彩的有效投注额。</p>
								<p>3.活动结束后，请于2018年3月9日早9点领取活动奖金。</p>
								<p>4.赠送金额需一倍流水即可提款。</p>
								<p>5.此活动不可与其他优惠活动同时共享。</p>
							</div>
							<h3>一般条款及细则：</h3>
							<p>
								1. 每位玩家，每户，每一地址，每一电子邮箱地址，每一电话号码，相同支付方式（相同借记卡/信用卡/银行账户）及IP地址只能享受一次优惠；若会员有重复申请账号行为，公司保留/取消/收回会员优惠彩金的权利；</p>
							<p>2. 头彩的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或者任何威胁，滥用公司优惠等行为；公司保留冻结，取消该团体或个人账户及账户结余的权利；</p>
							<p>3. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，头彩有权要求会员向我们提供充足有效的文件，用以确认是否享受有优惠的资质；</p>
							<p>
								4. 当参与优惠会员未能完全遵守，违反或滥用任何有关公司优惠或推广的条款，又或我们有任何证据证明有任何团队或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保从该存款红利或其他推广活动提供的优惠获利，头彩保留权利向此团队或个人停止，取消优惠或索回以支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；</p>
							<p>5. 头彩保留对活动的最终解释权，以及在无通知的情况下修改，终止活动的权利。</p>
							<p>6. 以上条款适应于所有优惠。</p>
						</div>
					</div>
					<!-- <div class="activityMmain_cont_demo fl colorA" style="font-size:26px;" v-if="!activityList2.length">
							暂无活动
					</div> -->
				</div>
			</div>
			<!--<div class="login_rightBar clearfix" style="top: 90px;">-->
			
			<!--</div>-->
		</div>
		<div v-show="isMobile" id="mobile_part">
			<div class="mobile_wrapper">
				<div v-show="isonlyshow < 1 || isonlyshow == allShow[0]" class="activityMmain_cont_demo">
					<img src="../img/activity/a1.jpg" width="100%"/>
					<div class="activityMmain_cont_txter bgcolorA clearfix">
						<div class="activityMmain_left fl">
							<h3>【手机app充值周周送】</h3>
							<p style="height:24px; width:300px"><em class="icon">&#xe6c2;</em>活动时间：即日起生效，活动截止日期将会提前公告。
							</p>
						</div>
						<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(0)">
							<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
							<i v-show="!(isonlyshow == allShow[0])" class="icon colorBl ft20 mt15 fr ">&#xe6bb;</i>
						</div>
					</div>
					<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 0 || isonlyshow == allShow[0]">
						<div style="text-align:center">
							<table>
								<thead>
								<tr>
									<td>手机app充值</td>
									<td>赠送奖金</td>
									<td>提款要求</td>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>单笔存款100元以上</td>
									<td>0.5%</td>
									<td>本金加赠送礼金的一倍流水</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div><h3>申请方式:</h3> 通过手机app充值后，请联系在线客服，客服人员会以电话的形式审核相关信息后，将彩金派发到您的会员账户内。
							活动周期:  周一00：00至周日23：59为一个周期
						</div>
						<h3>活动细则：</h3>
						<p>1.存款金额不可累计计算，以最后一笔存款金额派发礼金。</p>
						<p>2.此活动不可参与菲律宾1.5分彩，菲律宾2分彩和菲律宾5分彩。</p>
						<p>3.此优惠活动存款后不可进行投注，如有投注，则视为放弃领取此礼金。</p>
						<p>4.优惠活动即日起生效，此活动用于头彩全体会员。</p>
						<p>5.此活动周期为一周时间，申请需在周期内完成，超过申请时间视为第二个周期。</p>
						<p>6.同一账户、同一IP每周只可参加一次活动。</p>
						<p>7.参与本活动如发现任何利用活动或技术漏洞对冲等无风险投注、对打、恶意投注等恶意套利行为，平台将扣除所有违规所得，并且有权冻结其账号。</p>
						<p>8.为了避免对文字理解的差异，头彩娱乐保留最终解释权。</p>
						<p>9.此活动可以与其他优惠活动同时享有。</p>
					</div>
				</div>
				<div v-show="isonlyshow < 1 || isonlyshow == allShow[1]" class="activityMmain_cont_demo second_text">
					<img src="../img/activity/a2.jpg" width="100%"/>
					<div class="activityMmain_cont_txter bgcolorA clearfix">
						<div class="activityMmain_left fl">
							<h3>【手机号绑定活动】</h3>
							<p style="height:24px;"><em class="icon">&#xe6c2;</em>即日起生效，活动截止日期将会提前公告。</p>
						</div>
						<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(1)">
							<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
							<i v-show="!(isonlyshow == allShow[1])" class="icon colorBl ft20 mt15 fr ">&#xe6bb;</i>
						</div>
					</div>
					<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 1 || isonlyshow == allShow[1]">
						<h3>为感谢广大玩家对本平台的支持与信赖，即日起凡绑定手机号，即可领取活动奖金6元。</h3>
						<div><h3>申请步骤：</h3>请绑定您的手机号码后联系在线客服，提供您的帐号等相关信息，客服核实后会将彩金派发到您的会员账号。</div>
						<h3>活动细则：</h3>
						<p>1.每天限制名额1000人。</p>
						<p>2.同一IP只可参加一次活动。</p>
						<p>3.领取活动奖金后只可参与重庆时时彩，如代购其他彩种将视为无效，扣除奖金和盈利的部分。</p>
						<p>4.此活动可以与其他优惠活动同时享有。</p>
						<p>5.为了避免对文字理解的差异，头彩娱乐保留最终解释权。</p>
						<p>6.参与本活动如发现任何利用活动或技术漏洞对冲等无风险投注、对打、恶意投注等恶意套利行为，平台将扣除所有违规所得，
							并且有权冻结其账号。</p>
						<p>7.本次优惠活动即日起生效，优惠活动是用于头彩娱乐全体会员。</p>
					</div>
				</div>
				<div v-show="isonlyshow < 1 || isonlyshow == allShow[2]" class="activityMmain_cont_demo second_text">
					<img src="../img/activity/a3.png" width="100%"/>
					<div class="activityMmain_cont_txter bgcolorA clearfix">
						<div class="activityMmain_left fl">
							<h3>【充值名媛到府服务活动】</h3>
							<p style="height:24px;"><em class="icon">&#xe6c2;</em>活动日期：2018/02/06 00：00～2018/03/09 23：59。</p>
						</div>
						<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(2)">
							<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
							<i v-show="!(isonlyshow == allShow[2])" class="icon colorBl ft20 mt15 fr ">&#xe6bb;</i>
						</div>
					</div>
					<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 2 || isonlyshow == allShow[2]">
						<h3>感谢高端玩家长久以来的大力支持，以及对本平台的由衷喜爱，本平台特别进行名媛到府服务的活动，以嘉惠充值达到一定金额的玩家。</h3>
						<div><h3>申请资格：</h3>
							<p>1.活动期间内一日累计充值30万以上的玩家（以下简称为大户）或，活动期间内七日累计充值100万以上大户。</p>
							<p>2.欲参加此活动者需绑定手机号，方便客服与您联系。</p>
						</div>
						<h3>活动规则：</h3>
						<p>1.当日充值30万以上大户，提供一次名媛服务。 </p>
						<p>2.当周充值100万以上大户，提供一次名媛服务。</p>
						<p>3.活动期间可累计资格次数。 </p>
						<div style="padding-left:20px">
							<ul>
								<li> • 例：若活动期间共有三日皆充值30万以上，则有三次名媛服务机会。</li>
								<li> • 例：若活动期间有一周大户资格，与三日大户资格，则有四次名媛服务机会。</li>
								<li> • 例：若活动为期30日，每日都充值30万，活动结算时有30次(日充值) +4次(周充值)的服务机会。</li>
							</ul>
						</div>
						<p>4.本活动日期结束后，将列出大户名单，并透过客服专线与您联系询问意愿，请符合资格者耐心等候。</p>
						<p>
							5.服务范围限于一线城市：北京、上海、广州、深圳。新一线城市（成都、杭州、武汉、重庆、南京、天津、苏州、西安、 长沙、沈阳、青岛、郑州、大连、东莞、宁波）的大户，客服与您联系时便会告知所在地是否可以接受服务。</p>
						<p>6.符合资格而选择不愿意参加，或因所在地问题而无法参加者，将会返还5000彩金至会员平台帐户。</p>
					</div>
				</div>
				<div v-show="isonlyshow < 1 || isonlyshow == allShow[3]" class="activityMmain_cont_demo second_text">
					<img src="../img/activity/a4.jpg" width="100%"/>
					<div class="activityMmain_cont_txter bgcolorA clearfix">
						<div class="activityMmain_left fl">
							<h3>【你买彩票我送钱】</h3>
							<p style="height:24px;"><em class="icon">&#xe6c2;</em>活动日期：2018年3月2日（元宵节）00:00 至 2018年3月8日 23:59（北京时间）</p>
						</div>
						<div class="activityMmain_cont_demo_right fr cursor" @click="showMore(3)">
							<!-- <a href="javascript:;" class="activityMmain_rightBtn bgcolorY colorA">点击详情</a>xe643 -->
							<i v-show="!(isonlyshow == allShow[3])" class="icon colorBl ft20 mt15 fr ">&#xe6bb;</i>
						</div>
					</div>
					<div class="activityMmain_cont_txt bgcolorA bdcolorAa" v-show="index === 3 || isonlyshow == allShow[3]">
						<div style="text-align:center">
							<table>
								<thead>
								<tr>
									<td>流水要求</td>
									<td>赠送奖金</td>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>有效投注额≥2000</td>
									<td>38元</td>
								</tr>
								<tr>
									<td>有效投注额≥10000</td>
									<td>138元</td>
								</tr>
								<tr>
									<td>有效投注额≥50000</td>
									<td>388元</td>
								</tr>
								<tr>
									<td>有效投注额≥100000</td>
									<td>588元</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div>
							<h3>活动内容：</h3>
							<p>1. 有效投注计算周期为7天，活动结束后一次性领取奖金，此活动不共享优惠（如流水30000元，则享有138元奖金，不共享38元奖金）。</p>
							<p>2. 此优惠不计算菲律宾1.5分彩；菲律宾2分彩和菲律宾5分彩的有效投注额。</p>
							<p>3. 活动结束后，请于2018年3月9日早9点领取活动奖金。</p>
							<p>4. 赠送金额需一倍流水即可提款。</p>
							<p>5. 此活动不可与其他优惠活动同时共享。</p>
						</div>
						<h3>一般条款及细则：</h3>
						<p>1. 每位玩家，每户，每一地址，每一电子邮箱地址，每一电话号码，相同支付方式（相同借记卡/信用卡/银行账户）及IP地址只能享受一次优惠；若会员有重复申请账号行为，公司保留/取消/收回会员优惠彩金的权利；</p>
						<p>2. 头彩的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或者任何威胁，滥用公司优惠等行为；公司保留冻结，取消该团体或个人账户及账户结余的权利；</p>
						<p>3. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，头彩有权要求会员向我们提供充足有效的文件，用以确认是否享受有优惠的资质；</p>
						<p>
							4. 当参与优惠会员未能完全遵守，违反或滥用任何有关公司优惠或推广的条款，又或我们有任何证据证明有任何团队或个人投下一连串的关联赌注，籍以造成无论赛果怎样都可以确保从该存款红利或其他推广活动提供的优惠获利，头彩保留权利向此团队或个人停止，取消优惠或索回以支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本；</p>
						<p>5. 头彩保留对活动的最终解释权，以及在无通知的情况下修改，终止活动的权利。</p>
						<p>6. 以上条款适应于所有优惠。</p>
					</div>
				</div>
			</div>
		
		</div>
	</div>

</template>

<script>
    import leftbar from './pageLeftBar.vue';
    import bgtab from './pageBgTab.vue';
    import download from './pageDownload.vue';
    import {activityInit, Prompt} from '../js/index.js';
    import _base from '../js/pubilc.js';
    import {IsPC} from '../js/common.js';

    const APPCONFIG = _base.config();
    const _storage = _base.storage();
    let init = activityInit();
    let oPrompt = Prompt();
    export default {
        name: 'warp',
        data() {
            return {
                isMobile: false,
                index: -1,
                msg: 'this is index',
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth,
                bgsrc: 'url(/dist/PromptBoxBg.png)  no-repeat',
                lottery: [{showName: '登录'}],
                promptList: [],
                allShow: [1, 2, 3],
                isonlyshow: 0,
            }
        },
        components: {
            bgtab,
            leftbar,
            download
        },
        beforeCreate() {
            let s = document.createElement('meta');
            s.name = "viewport";
            s.content = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui";
            s.id = "activity";
            document.getElementsByTagName('head')[0].appendChild(s);
        },
        updated() {
        },
        methods: {
            showMore(idx) {
                this.index = this.index === idx ? -1 : idx;
            },
            openFunds() {
                oPrompt({
                    idx: "boxwarps",
                    message: "敬请期待"
                });
            }
        },
        mounted() {
            let refs = JSON.parse(_storage.get('_referrer'));
            let urls = null;
            if (refs && refs !== 'false') {
                urls = refs.rels.split('&smobile')[0];
                console.log(APPCONFIG.activityMap[urls])
                this.isonlyshow = (APPCONFIG.activityMap[urls] && APPCONFIG.activityMap[urls]) || 0;
            }
            console.log(this.isonlyshow)
//            init.activityDetails('activityMmain_cont_demo_right', 'activityMmain_cont_txt');
            if (!IsPC()) {
                this.isMobile = true;
                document.getElementById("app").style.width = document.documentElement.clientWidth;
                document.getElementById("mobile_part").style.height = document.documentElement.clientHeight;
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.activityMmainImg {
		position: absolute;
		top: -20px;
		left: 0;
		width: 1200px;
	}
	
	.mainbanner {
		width: 1920px;
		margin: 0 auto;
	}
	
	i.closeIcon {
		font-size: 40px;
		margin-top: 0;
		float: right;
	}
	
	.warp img {
		width: 100%;
	}
	
	.mt25 {
		margin-top: 25px;
	}
	
	.mr15 {
		margin-left: 15px;
	}
	
	.mt10 {
		margin-top: 10px;
	}
	
	.activityMmainImg2 {
		display: none;
	}
	
	.main {
		margin-top: 8%;
		padding-bottom: 8%;
		position: relative;
		padding-bottom: 40px;
	}
	
	.boxHeight {
		height: 50px;
		width: 20px;
	}
	
	.login_rightBar {
		position: absolute;
		right: 30px;
		top: -120px;
		z-index: 101;
	}
	
	.activityMmain {
		width: 82%;
		z-index: 88;
		margin: 0;
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.activityMmain_header {
		font-size: 18px;
		text-align: left;
		padding-top: 15px;
		position: relative;
		display: block;
		height: 65px;
	}
	
	.activityMmain_header:after {
		position: absolute;
		border-bottom: 1px solid #dddddd;
		width: 100%;
		height: 5px;
		bottom: 2px;
	}
	
	.activityMmain_header img {
		width: 18px;
	}
	
	.activityMmain_header li {
		float: left;
		line-height: 40px;
		padding: 3px 5px;
		margin-left: 30px;
		border-radius: 0px;
		cursor: pointer;
	}
	
	.activityMmain_header li.active {
		border-bottom: 1px solid #fa4d3d;
		color: #fa4d3d;
	}
	
	.activityMmain_cont {
		width: 100%;
		border-radius: 0px;
		margin-bottom: 70px;
		padding-bottom: 50px;
	}
	
	.activityMmain_cont_demo {
		width: 377px;
		margin-top: 10px;
		position: relative;
	}
	
	.activityMmain_cont_last {
		margin-right: 0px;
	}
	
	.activityMmain_cont_txter {
		text-align: left;
		padding: 15px;
		padding-bottom: 5px;
		border: 1px solid #f3f4f4;
	}
	
	.activityMmain_left h3 {
		font-size: 20px;
		font-weight: bold;
	}
	
	.activityMmain_left p {
		font-size: 14px;
		margin-top: 5px;
	}
	
	.activityMmain_cont_txt {
		text-align: left;
		font-size: 14px;
		padding: 10px 15px 10px 10px;
		position: absolute;
		left: 15px;
		right: 15px;
		top: 98%;
		z-index: 9;
		height: 220px;
		overflow-y: auto;
		border: 1px solid #f3f4f4;
		box-shadow: 0 5px 8px 1px #666;
		border-top: 0;
		background-color: #eee;
	}
	
	.activitywapper {
		background-image: url('../img/activity/banner.jpg');
		height: 138px;
		background-position: center;
	}
	.activityMmain_cont_txt table{
		width:100%
	}
	.activityMmain_cont_txt table td{
		border:1px solid #999
	}
	
	@media only screen and (min-width: 315px) and (max-width: 420px) {
		.activityMmainImg2 {
			display: block;
		}
		
		.activityMmainImg2 {
			width: 60%;
			margin: 0 auto;
		}
		
		.activityMmain_header, .activityMmainImg, .activitywapper {
			display: none;
		}
		
		.activityMmain {
			background: rgba(255, 255, 255, 0);
			padding-top: 5px;
			width: 100%;
		}
		
		.activityMmain_cont {
			margin-left: 0;
			margin-top: 5px;
			padding-left: 0;
		}
		
		.activityMmain_cont_demo {
			margin-right: 0;
			width: 100%;
		}
	}
</style>
<style lang="stylus" scoped>
	.activityMmain_left
		em
			color: #ff6a76
			margin-right: 5px
	
	.pc_part
		.activityMmain_cont_demo
			width: 50%
			padding: 10px 15px
			.activityMmain_cont_demo_right
				& > .active
					transform: rotate(90deg)
	
	#mobile_part
		margin-bottom: -1500px
		.mobile_wrapper
			.activityMmain_cont_txter
				padding-bottom: 25px
				.activityMmain_left
					max-width: 90%
			.activityMmain_cont_txt
				position: static
				height: auto
			.activityMmain_cont_demo
				margin-top: 0
				> img
					border: 1px solid #dcdddd
					border-bottom: none
			.second_text
				margin-top: 10px
</style>
