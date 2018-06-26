<template>
  <div id="j-xuan" v-show="isnow"> 
    <div id="j-n1" class=""> 
      <!-- 双面盘start --> 
      <table class="table nested-table mb10"> 
        <thead> 
         <tr> 
          <th colspan="4">总和</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.97" data-id="10948">
              <td class="table-odd" style="border-bottom:none; border-top: none;">和大 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.97</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none; border-right: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.97" data-id="10950">
              <td class="table-odd" style="border-bottom:none; border-top: none;">和小 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.97</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none; border-right: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.92" data-id="10952">
              <td class="table-odd" style="border-bottom:none; border-top: none;">和单 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.92</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none; border-right: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.92" data-id="10954">
              <td class="table-odd" style="border-bottom:none; border-top: none;">和双 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.92</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
         </tr> 
         <tr> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.92" data-id="10956">
              <td class="table-odd" style="border-bottom:none; border-top: none;">尾大 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.92</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none; border-right: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
          <td class="p0 bo-left" style="border-right:none;"> 
           <table class="j-betting f-border"> 
            <tbody> 
             <tr data-type="总和" data-odds="1.92" data-id="10958">
              <td class="table-odd" style="border-bottom:none; border-top: none;">尾小 </td>
              <td style="border-bottom:none; border-top: none; border-right: none;"><span class="odds-text">1.92</span></td>
              <td class="j-odds bo-left" style="display: none; border-bottom:none; border-top: none; border-right: none;"><input type="text" class="input fb" /></td>
             </tr> 
            </tbody> 
           </table> </td> 
          <td class="p0 bo-left" style="border-right:none;">&nbsp;</td> 
          <td class="p0 bo-left" style="border-right:none;">&nbsp;</td> 
         </tr> 
         <tr> 
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
            <th colspan="3">第一球</th> 
           </tr> 
          </thead> 
          <tbody> 
           <tr data-odds="1.97" data-id="10820">
            <td class="table-odd" style="border-bottom: none;">大</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10822">
            <td class="table-odd" style="border-bottom: none;">小</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10824">
            <td class="table-odd" style="border-bottom: none;">单</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10826">
            <td class="table-odd" style="border-bottom: none;">双</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0"> 
         <table class="j-betting f-border"> 
          <thead> 
           <tr> 
            <th colspan="3">第二球</th> 
           </tr> 
          </thead> 
          <tbody> 
           <tr data-odds="1.97" data-id="10850">
            <td class="table-odd" style="border-bottom: none;">大</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10852">
            <td class="table-odd" style="border-bottom: none;">小</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10854">
            <td class="table-odd" style="border-bottom: none;">单</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10856">
            <td class="table-odd" style="border-bottom: none;">双</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0"> 
         <table class="j-betting f-border"> 
          <thead> 
           <tr> 
            <th colspan="3">第三球</th> 
           </tr> 
          </thead> 
          <tbody> 
           <tr data-odds="1.97" data-id="10880">
            <td class="table-odd" style="border-bottom: none;">大</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10882">
            <td class="table-odd" style="border-bottom: none;">小</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10884">
            <td class="table-odd" style="border-bottom: none;">单</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10886">
            <td class="table-odd" style="border-bottom: none;">双</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0"> 
         <table class="j-betting f-border"> 
          <thead> 
           <tr> 
            <th colspan="3">第四球</th> 
           </tr> 
          </thead> 
          <tbody> 
           <tr data-odds="1.97" data-id="10910">
            <td class="table-odd" style="border-bottom: none;">大</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10912">
            <td class="table-odd" style="border-bottom: none;">小</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10914">
            <td class="table-odd" style="border-bottom: none;">单</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10916">
            <td class="table-odd" style="border-bottom: none;">双</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0"> 
         <table class="j-betting f-border"> 
          <thead> 
           <tr> 
            <th colspan="3">第五球</th> 
           </tr> 
          </thead> 
          <tbody> 
           <tr data-odds="1.97" data-id="10940">
            <td class="table-odd" style="border-bottom: none;">大</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10942">
            <td class="table-odd" style="border-bottom: none;">小</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10944">
            <td class="table-odd" style="border-bottom: none;">单</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
           <tr data-odds="1.97" data-id="10946">
            <td class="table-odd" style="border-bottom: none;">双</td>
            <td style=" border-right:none; border-bottom: none;"><span class="odds-text">-</span></td>
            <td class="j-odds bo-left" style="display: none; border-right:none; border-bottom: none;"><input type="text" class="input fb" disabled="" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
      </table> 
      <!-- 双面盘end --> 
       <!-- 1-5 start --> 
       <!-- 1-5 end --> 
       <!-- 任选start --> 
       <!-- 任选end --> 
       <!--组选 --> 
       <!-- 组选 end --> 
       <!-- 直选start --> 
       <!-- 直选end --> 
    </div> 
    <div id="j-n2" class="hide">
      <!-- 1-5 start --> 

      <table class="table nested-table sm-table" style="border-bottom:none; border-right:none; border-left:none;"> 
      <tbody>
       <tr> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
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
           <tr data-id="10828" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10830" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10832" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10834" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10836" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10838" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10840" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10842" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10844" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10846" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10848" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>  
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
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
           <tr data-id="10798" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10800" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10802" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10804" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10806" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10808" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10810" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10812" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10814" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10816" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10818" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
          </tbody> 
         </table>
        </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
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
           <tr data-id="10858" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10860" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10862" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10864" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10866" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10868" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10870" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10872" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10874" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10876" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10878" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>  
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
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
           <tr data-id="10888" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10890" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10892" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10894" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10896" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10898" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10900" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10902" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10904" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10906" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10908" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
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
           <tr data-id="10918" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">1</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10920" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">2</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10922" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">3</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10924" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">4</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10926" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">5</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10928" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">6</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10930" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">7</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10932" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">8</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10934" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">9</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10936" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
           <tr data-id="10938" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
          </tbody> 
         </table>
        </td> 
       </tr>
      </tbody>
      </table>
      <!-- 1-5 end -->
    </div> 
    <div id="j-n3" class="hide"> 
      <table class="table nested-table sm-table wider" style="border-bottom:none; border-right:none; border-left:none;"> 
        <tbody>
         <tr> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10000" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10001" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10002" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10003" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10004" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10005" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10006" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10007" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
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
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10008" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10009" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10010" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10011" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10012" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10013" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
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
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10014" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10015" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table> </td> 
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10016" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10017" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
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
          <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
           <table class="j-betting f-border"> 
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
             <tr data-id="10018" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">龙</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr> 
             <tr data-id="10019" data-odds="" class="bo-right">
              <td class="table-odd bo-left" style="border-left-width: 1px;">虎</td>
              <td><span class="odds-text"></span></td>
              <td class="j-odds "><input type="text" class="input fb" /></td>
             </tr>
            </tbody> 
           </table>
          </td> 
         </tr> 
        </tbody>
       </table>
    </div> 
    <div id="j-n4" class="hide"> 
      <table class="table nested-table sm-table wider fullw" style="border-bottom:none; border-right:none; border-left:none;"> 
      <thead> 
       <tr> 
        <th colspan="5">全五中一</th> 
       </tr> 
      </thead>
      <tbody>
       <tr> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
          <tbody> 
           <tr class="bo-right">
            <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
            <td class="td-hd">赔率</td>
            <td class="td-hd j-odds">金额</td>
           </tr> 
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">01</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">06</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">11</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border">  
          <tbody> 
           <tr class="bo-right">
            <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
            <td class="td-hd">赔率</td>
            <td class="td-hd j-odds">金额</td>
           </tr> 
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">02</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">07</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>  
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border">  
          <tbody> 
           <tr class="bo-right">
            <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
            <td class="td-hd">赔率</td>
            <td class="td-hd j-odds">金额</td>
           </tr> 
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">03</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">08</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr> 
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
          <tbody> 
           <tr class="bo-right">
            <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
            <td class="td-hd">赔率</td>
            <td class="td-hd j-odds">金额</td>
           </tr> 
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">04</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">09</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>  
          </tbody> 
         </table> </td> 
        <td class="p0" style="width:163.2pt; border-bottom:none; border-right:none; "> 
         <table class="j-betting f-border"> 
          <tbody> 
           <tr class="bo-right">
            <td class="td-hd bo-left" style="border-left-width: 1px;">号码</td>
            <td class="td-hd">赔率</td>
            <td class="td-hd j-odds">金额</td>
           </tr> 
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">05</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>
           <tr data-id="10964" data-odds="" class="bo-right">
            <td class="table-odd bo-left" style="border-left-width: 1px;"><i class="icon_2 ball_blues">10</i></td>
            <td><span class="odds-text"></span></td>
            <td class="j-odds "><input type="text" class="input fb" /></td>
           </tr>  
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody>
      </table> 
    </div> 
    <div id="j-n5" class="hide"> 
      <!-- 双面盘start --> 
      <!-- 双面盘end --> 
      <!-- 1-5 start --> 
      <!-- 1-5 end --> 
      <!-- 任选start --> 
      <!-- 任选end --> 
      <!--组选 --> 
      <!-- 组选 end --> 
      <!-- 直选start --> 
      <table class="table"> 
      <tbody> 
       <tr> 
        <td style="width:318px;"> <label for="j10984" id="zixTitle_2"> <b>前二</b> <span>55</span> </label> </td> 
        <td> <label for="j10986" id="zixTitle_3"> <b>前三</b> <span>111</span> </label> </td> 
       </tr> 
      </tbody> 
      </table> 
      <table class="table nested-table zhu-table" style="border-right:none;"> 
      <tbody>
       <tr> 
        <td class="p0" style="border-right:none; border-bottom:none;"> 
         <table class="zhu-balls" data-bnumber="2"> 
          <tbody>
           <tr> 
            <td style="padding:0px;border-bottom:none;"> 
             <table class="select_zhu" data-total="1"> 
              <thead> 
               <tr> 
                <th width="100%">第一球</th> 
               </tr> 
              </thead> 
              <tbody class="j-highlights-tb"> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-1"><i class="icon_2 ball_yellows" data-number="1">1</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-2"><i class="icon_2 ball_yellows" data-number="2">2</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-3"><i class="icon_2 ball_yellows" data-number="3">3</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-4"><i class="icon_2 ball_yellows" data-number="4">4</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-5"><i class="icon_2 ball_yellows" data-number="5">5</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-6"><i class="icon_2 ball_yellows" data-number="6">6</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-7"><i class="icon_2 ball_yellows" data-number="7">7</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-8"><i class="icon_2 ball_yellows" data-number="8">8</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-9"><i class="icon_2 ball_yellows" data-number="9">9</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-10"><i class="icon_2 ball_yellows" data-number="10">10</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-11"><i class="icon_2 ball_yellows" data-number="11">11</i></label></td> 
               </tr> 
              </tbody> 
             </table> </td> 
            <td style="padding:0px;border-bottom:none;"> 
             <table class="select_zhu" data-total="1"> 
              <thead> 
               <tr> 
                <th width="100%">第二球</th> 
               </tr> 
              </thead> 
              <tbody class="j-highlights-tb"> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-1"><i class="icon_2 ball_yellows" data-number="1">1</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-2"><i class="icon_2 ball_yellows" data-number="2">2</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-3"><i class="icon_2 ball_yellows" data-number="3">3</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-4"><i class="icon_2 ball_yellows" data-number="4">4</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-5"><i class="icon_2 ball_yellows" data-number="5">5</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-6"><i class="icon_2 ball_yellows" data-number="6">6</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-7"><i class="icon_2 ball_yellows" data-number="7">7</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-8"><i class="icon_2 ball_yellows" data-number="8">8</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-9"><i class="icon_2 ball_yellows" data-number="9">9</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-10"><i class="icon_2 ball_yellows" data-number="10">10</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-11"><i class="icon_2 ball_yellows" data-number="11">11</i></label></td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody>
         </table> </td> 
        <td class="p0" style="border-right:none; border-bottom:none;"> 
         <table class="zhu-balls" data-bnumber="3"> 
          <tbody>
           <tr> 
            <td style="padding:0px;border-bottom:none;"> 
             <table class="select_zhu" data-total="1"> 
              <thead> 
               <tr> 
                <th width="100%">第一球</th> 
               </tr> 
              </thead> 
              <tbody class="j-highlights-tb"> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-1"><i class="icon_2 ball_yellows" data-number="1">1</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-2"><i class="icon_2 ball_yellows" data-number="2">2</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-3"><i class="icon_2 ball_yellows" data-number="3">3</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-4"><i class="icon_2 ball_yellows" data-number="4">4</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-5"><i class="icon_2 ball_yellows" data-number="5">5</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-6"><i class="icon_2 ball_yellows" data-number="6">6</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-7"><i class="icon_2 ball_yellows" data-number="7">7</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-8"><i class="icon_2 ball_yellows" data-number="8">8</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-9"><i class="icon_2 ball_yellows" data-number="9">9</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-10"><i class="icon_2 ball_yellows" data-number="10">10</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-11"><i class="icon_2 ball_yellows" data-number="11">11</i></label></td> 
               </tr> 
              </tbody> 
             </table> </td> 
            <td style="padding:0px;border-bottom:none;"> 
             <table class="select_zhu" data-total="1"> 
              <thead> 
               <tr> 
                <th width="100%">第二球</th> 
               </tr> 
              </thead> 
              <tbody class="j-highlights-tb"> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-1"><i class="icon_2 ball_yellows" data-number="1">1</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-2"><i class="icon_2 ball_yellows" data-number="2">2</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-3"><i class="icon_2 ball_yellows" data-number="3">3</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-4"><i class="icon_2 ball_yellows" data-number="4">4</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-5"><i class="icon_2 ball_yellows" data-number="5">5</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-6"><i class="icon_2 ball_yellows" data-number="6">6</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-7"><i class="icon_2 ball_yellows" data-number="7">7</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-8"><i class="icon_2 ball_yellows" data-number="8">8</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-9"><i class="icon_2 ball_yellows" data-number="9">9</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-10"><i class="icon_2 ball_yellows" data-number="10">10</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-11"><i class="icon_2 ball_yellows" data-number="11">11</i></label></td> 
               </tr> 
              </tbody> 
             </table> </td> 
            <td style="padding:0px;border-bottom:none;"> 
             <table class="select_zhu" data-total="1"> 
              <thead> 
               <tr> 
                <th width="100%">第三球</th> 
               </tr> 
              </thead> 
              <tbody class="j-highlights-tb"> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-1"><i class="icon_2 ball_yellows" data-number="1">1</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-2"><i class="icon_2 ball_yellows" data-number="2">2</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-3"><i class="icon_2 ball_yellows" data-number="3">3</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-4"><i class="icon_2 ball_yellows" data-number="4">4</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-5"><i class="icon_2 ball_yellows" data-number="5">5</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-6"><i class="icon_2 ball_yellows" data-number="6">6</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-7"><i class="icon_2 ball_yellows" data-number="7">7</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-8"><i class="icon_2 ball_yellows" data-number="8">8</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-9"><i class="icon_2 ball_yellows" data-number="9">9</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-10"><i class="icon_2 ball_yellows" data-number="10">10</i></label></td> 
               </tr> 
               <tr> 
                <td class="table-odd" style="border-bottom:none; border-right: none;"> <label for="b-11"><i class="icon_2 ball_yellows" data-number="11">11</i></label></td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody>
         </table> </td> 
       </tr> 
      </tbody>
      </table> 
      <!-- 直选end --> 
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