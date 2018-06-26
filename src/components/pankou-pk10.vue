<template>
  <div id="j-pk" v-show="isnow"> 
    <div id="j-n1" class="">
      <!-- 双面盘start -->
      <table class="table nested-table mb10">
        <thead>
          <tr>
            <th colspan="4">冠、亚军和</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="p0" style="border-right:none;">
              <table class="j-betting f-border">
                <tbody>
                  <tr data-type="冠、亚军和" data-odds="1.985" data-id="4196">
                    <td class="table-odd" style="border-bottom:none;">冠亚大</td>
                    <td style="border-bottom:none;">
                      <span class="odds-text">{{ratedict.j4196}}</span></td>
                    <td class="j-odds" style="border-bottom:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0" style="border-right:none;">
              <table class="j-betting f-border">
                <tbody>
                  <tr data-type="冠、亚军和" data-odds="1.981" data-id="4197">
                    <td class="table-odd" style="border-bottom:none;">冠亚小</td>
                    <td style="border-bottom:none;">
                      <span class="odds-text">{{ratedict.j4197}}</span></td>
                    <td class="j-odds" style="border-bottom:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0" style="border-right:none;">
              <table class="j-betting f-border">
                <tbody>
                  <tr data-type="冠、亚军和" data-odds="1.981" data-id="4198">
                    <td class="table-odd" style="border-bottom:none;">冠亚单</td>
                    <td style="border-bottom:none;">
                      <span class="odds-text">{{ratedict.j4198}}</span></td>
                    <td class="j-odds" style="border-bottom:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0" style="border-right:none;">
              <table class="j-betting f-border">
                <tbody>
                  <tr data-type="冠、亚军和" data-odds="1.985" data-id="4199">
                    <td class="table-odd" style="border-bottom:none;">冠亚双</td>
                    <td style="border-bottom:none;">
                      <span class="odds-text">{{ratedict.j4199}}</span></td>
                    <td class="j-odds" style="border-bottom:none;">
                      <input type="text" class="input fb"></td><!-- {{ratedict.j}} -->
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table nested-table sm-table">
        <tbody>
          <tr>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">冠军</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="871">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j871}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="872">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j872}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="873">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j873}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="874">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j874}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="875">
                    <td class="table-odd">龙</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j875}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="876">
                    <td class="table-odd">虎</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j876}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">亚军</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="887">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j887}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="888">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j888}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="889">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j889}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="890">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j890}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="891">
                    <td class="table-odd">龙</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j891}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="892">
                    <td class="table-odd">虎</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j892}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第三名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="903">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j903}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="904">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j904}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="905">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j905}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="906">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j906}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="907">
                    <td class="table-odd">龙</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j907}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="908">
                    <td class="table-odd">虎</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j908}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第四名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="919">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j919}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="920">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j920}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="921">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j921}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="922">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j922}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="923">
                    <td class="table-odd">龙</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j923}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="924">
                    <td class="table-odd">虎</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j924}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第五名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="935">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j935}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="936">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j936}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="937">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j937}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="938">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j938}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="939">
                    <td class="table-odd">龙</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j939}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="940">
                    <td class="table-odd">虎</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j940}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第六名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="951">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j951}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="952">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j952}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="953">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j953}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="954">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j954}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第七名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="965">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j965}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="966">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j966}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="967">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j967}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="968">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j968}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第八名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="979">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j979}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="980">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j980}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="981">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j981}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="982">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j982}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第九名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="993">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j993}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="994">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j994}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="995">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j995}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="996">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j996}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第十名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="1.985" data-id="1007">
                    <td class="table-odd">大</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j1007}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1008">
                    <td class="table-odd">小</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j1008}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1009">
                    <td class="table-odd">单</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j1009}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1010">
                    <td class="table-odd">双</td>
                    <td style=" border-right:none;">
                      <span class="odds-text">{{ratedict.j1010}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 双面盘end -->
    </div>
    <div id="j-n2" class="hide">
      <!-- 冠、亚军和 start -->
      <table class="table nested-table mb10">
        <thead>
          <tr><th colspan="4">冠、亚军和</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="p0">
              <table class="j-betting">
                <tbody>
                  <tr data-odds="42.15" data-type="冠、亚军和" data-id="4179">
                    <td class="table-odd">3</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4179}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="14.05" data-type="冠、亚军和" data-id="4183">
                    <td class="table-odd">7</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4183}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="8.5" data-type="冠、亚军和" data-id="4187">
                    <td class="table-odd">11</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4187}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="14.05" data-type="冠、亚军和" data-id="4191">
                    <td class="table-odd">15</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4191}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="42.15" data-type="冠、亚军和" data-id="4195">
                    <td class="table-odd">19</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4195}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-type="冠、亚军和" data-id="4196">
                    <td class="table-odd">冠亚大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4196}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting">
                <tbody>
                  <tr data-odds="42.15" data-type="冠、亚军和" data-id="4180">
                    <td class="table-odd">4</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4180}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="14.05" data-type="冠、亚军和" data-id="4184">
                    <td class="table-odd">8</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4184}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="10.5" data-type="冠、亚军和" data-id="4188">
                    <td class="table-odd">12</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4188}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="21.15" data-type="冠、亚军和" data-id="4192">
                    <td class="table-odd">16</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4192}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr>
                    <td class="table-odd" style="height:31px;"></td>
                    <td style="border-right:none;"></td>
                    <td class="j-odds bo-left" style="border-right:none;">&nbsp;</td>
                  </tr>
                  <tr data-odds="1.981" data-type="冠、亚军和" data-id="4197">
                    <td class="table-odd">冠亚小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4197}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting">
                <tbody>
                  <tr data-odds="21.15" data-type="冠、亚军和" data-id="4181">
                    <td class="table-odd">5</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4181}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="10.5" data-type="冠、亚军和" data-id="4185">
                    <td class="table-odd">9</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4185}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="10.5" data-type="冠、亚军和" data-id="4189">
                    <td class="table-odd">13</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4189}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="21.15" data-type="冠、亚军和" data-id="4193">
                    <td class="table-odd">17</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4193}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr>
                    <td class="table-odd" style="height:31px;"></td>
                    <td style="border-right:none;"></td>
                    <td class="j-odds bo-left" style="border-right:none;"></td>
                  </tr>
                  <tr data-odds="1.981" data-type="冠、亚军和" data-id="4198">
                    <td class="table-odd">冠亚单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4198}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting">
                <tbody>
                  <tr data-odds="21.15" data-type="冠、亚军和" data-id="4182">
                    <td class="table-odd">6</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4182}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="10.5" data-type="冠、亚军和" data-id="4186">
                    <td class="table-odd">10</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4186}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="14.05" data-type="冠、亚军和" data-id="4190">
                    <td class="table-odd">14</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4190}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="42.15" data-type="冠、亚军和" data-id="4194">
                    <td class="table-odd">18</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4194}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr>
                    <td class="table-odd" style="height:31px;"></td>
                    <td style="border-right:none;"></td>
                    <td class="j-odds bo-left" style="border-right:none;"></td>
                  </tr>
                  <tr data-odds="1.985" data-type="冠、亚军和" data-id="4199">
                    <td class="table-odd">冠亚双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j4199}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none; ">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 冠、亚军和 end -->
      <!-- 1-5|6-10 start -->
      <!-- 1-5|6-10 end -->
    </div>
    <div id="j-n3" class="hide">
      <!-- 双面盘start -->
      <!-- 双面盘end -->
      <!-- 冠、亚军和 start -->
      <!-- 冠、亚军和 end -->
      <!-- 1-5|6-10 start -->
      <table class="table nested-table sm-table hide-icon-text">
        <tbody>
          <tr>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr><th colspan="3">冠军</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="861">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j861}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="862">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;"> 
                      <span class="odds-text">{{ratedict.j862}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="863">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j863}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="864">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j864}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="865">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j865}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="866">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j866}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="867">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j867}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="868">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j868}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="869">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j869}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="870">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j870}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="871">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j871}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="872">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j872}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="873">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j873}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="874">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j874}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">亚军</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="877">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j877}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="878">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j878}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="879">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j879}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="880">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j880}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="881">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j881}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="882">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j882}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="883">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j883}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="884">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j884}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="885">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j885}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="886">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j886}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="887">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j887}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="888">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j888}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="889">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j889}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="890">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j890}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第三名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="893">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j893}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="894">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j894}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="895">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j895}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="896">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j896}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="897">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j897}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="898">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j898}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="899">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j899}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="900">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j900}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="901">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j901}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="902">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j902}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="903">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j903}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="904">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j904}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="905">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j905}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="906">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j906}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第四名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="909">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j909}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="910">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j910}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="911">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j911}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="912">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j912}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="913">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j913}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="914">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j914}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="915">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j915}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="916">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j916}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="917">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j917}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="918">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j918}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="919">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j919}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="920">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j920}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="921">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j921}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="922">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j922}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第五名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="925">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j925}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="926">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j926}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="927">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j927}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="928">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j928}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="929">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j929}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="930">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j930}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="931">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j931}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="932">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j932}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="933">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j933}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="934">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j934}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="935">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j935}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="936">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j936}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="937">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j937}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="938">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j938}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 1-5|6-10 end -->
    </div>
    <div id="j-n4" class="hide">
      <!-- 双面盘start -->
      <!-- 双面盘end -->
      <!-- 冠、亚军和 start -->
      <!-- 冠、亚军和 end -->
      <!-- 1-5|6-10 start -->
      <table class="table nested-table sm-table hide-icon-text">
        <tbody>
          <tr>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第六名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="941">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j941}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="942">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j942}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="943">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j943}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="944">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j944}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="945">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j945}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="946">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j946}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="947">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j947}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="948">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j948}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="949">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j949}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="950">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j950}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="951">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j951}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="952">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j952}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="953">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j953}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="954">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j954}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第七名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="955">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j955}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="956">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j956}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="957">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j957}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="958">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j958}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="959">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j959}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="960">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j960}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="961">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j961}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="962">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j962}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="963">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j963}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="964">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j964}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="965">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j965}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="966">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j966}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="967">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j967}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="968">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j968}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第八名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="969">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j969}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="970">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j970}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="971">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j971}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="972">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j972}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="973">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j973}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="974">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j974}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="975">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j975}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="976">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j976}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="977">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j977}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="978">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j978}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="979">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j979}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="980">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j980}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="981">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j981}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="982">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j982}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第九名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="983">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j983}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="984">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j984}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="985">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j985}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="986">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j986}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="987">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j987}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="988">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j988}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="989">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j989}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="990">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j990}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="991">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j991}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="992">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j992}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="993">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j993}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="994">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j994}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="995">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j995}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="996">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j996}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="p0">
              <table class="j-betting f-border">
                <thead>
                  <tr>
                    <th colspan="3">第十名</th></tr>
                </thead>
                <tbody>
                  <tr data-odds="9.92" data-id="997">
                    <td class="table-odd">
                      <i class="icon bj1">1</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j997}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="998">
                    <td class="table-odd">
                      <i class="icon bj2">2</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j998}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="999">
                    <td class="table-odd">
                      <i class="icon bj3">3</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j999}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1000">
                    <td class="table-odd">
                      <i class="icon bj4">4</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1000}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1001">
                    <td class="table-odd">
                      <i class="icon bj5">5</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1001}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1002">
                    <td class="table-odd">
                      <i class="icon bj6">6</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1002}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1003">
                    <td class="table-odd">
                      <i class="icon bj7">7</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1003}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1004">
                    <td class="table-odd">
                      <i class="icon bj8">8</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1004}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1005">
                    <td class="table-odd">
                      <i class="icon bj9">9</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1005}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="9.92" data-id="1006">
                    <td class="table-odd">
                      <i class="icon bj10">10</i></td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1006}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1007">
                    <td class="table-odd">大</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1007}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1008">
                    <td class="table-odd">小</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1008}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1009">
                    <td class="table-odd">单</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1009}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                  <tr data-odds="1.985" data-id="1010">
                    <td class="table-odd">双</td>
                    <td style="border-right:none;">
                      <span class="odds-text">{{ratedict.j1010}}</span></td>
                    <td class="j-odds bo-left" style="border-right:none;">
                      <input type="text" class="input fb"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 1-5|6-10 end -->
    </div> 
  </div>
</template>

<script>

export default {
  data () {
    return {
      ratedict:{},isnow:false      
    }
  },
  components: {
    
  },
  mounted:function() {
    
  },
  methods:{
    setrate:function(r) {
      this.ratedict = r;
      //alert('111');
    },
    setnow:function() {
      this.isnow = true;
      //alert('111');
    },
    setnotnow:function() {
      this.isnow = false;
      //alert('111');
    }
  }
}
</script>