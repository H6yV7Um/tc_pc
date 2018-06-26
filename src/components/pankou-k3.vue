<template>
  <div id="j-kuai" v-show="isnow"> 
    <!-- 和值|两连 start --> 
    <table class="table nested-table mb10" style="border-bottom:none;"> 
    <thead> 
     <tr> 
      <th colspan="4">和值</th> 
     </tr> 
    </thead> 
    <tbody> 
     <tr> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="165" data-type="和值" data-id="4125"> 
          <td class="table-odd">3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">{{ratedict.j4125}}</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="10" data-type="和值" data-id="4129"> 
          <td class="table-odd">7</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">10</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="5.6" data-type="和值" data-id="4133"> 
          <td class="table-odd">11</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">5.6</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="15" data-type="和值" data-id="4137"> 
          <td class="table-odd">15</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">15</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="1.96" data-type="和值" data-id="4141"> 
          <td class="table-odd">大</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="48" data-type="和值" data-id="4126"> 
          <td class="table-odd">4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">48</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="7.2" data-type="和值" data-id="4130"> 
          <td class="table-odd">8</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">7.2</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="6.05" data-type="和值" data-id="4134"> 
          <td class="table-odd">12</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">6.05</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="25" data-type="和值" data-id="4138"> 
          <td class="table-odd">16</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">25</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="1.96" data-type="和值" data-id="4142"> 
          <td class="table-odd">小</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="25" data-type="和值" data-id="4127"> 
          <td class="table-odd">5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">25</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="6.05" data-type="和值" data-id="4131"> 
          <td class="table-odd">9</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">6.05</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="7.2" data-type="和值" data-id="4135"> 
          <td class="table-odd">13</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">7.2</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="48" data-type="和值" data-id="4139"> 
          <td class="table-odd">17</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">48</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="1.96" data-type="和值" data-id="4143"> 
          <td class="table-odd">单</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="15" data-type="和值" data-id="4128"> 
          <td class="table-odd">6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">15</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="5.6" data-type="和值" data-id="4132"> 
          <td class="table-odd">10</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">5.6</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="10" data-type="和值" data-id="4136"> 
          <td class="table-odd">14</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">10</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="165" data-type="和值" data-id="4140"> 
          <td class="table-odd">18</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">165</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="1.96" data-type="和值" data-id="4144"> 
          <td class="table-odd">双</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">1.96</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
     </tr> 
    </tbody> 
    </table> 
    <!-- 和值|两连 end --> 
    <!-- 和值|两连 start --> 
    <table class="table nested-table mb10" style="border-bottom:none;"> 
    <thead> 
     <tr> 
      <th colspan="4">两连</th> 
     </tr> 
    </thead> 
    <tbody> 
     <tr> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="4.8" data-type="两连" data-id="4158"> 
          <td class="table-odd">1,2</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4162"> 
          <td class="table-odd">1,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4166"> 
          <td class="table-odd">2,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4170"> 
          <td class="table-odd">4,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="4.8" data-type="两连" data-id="4159"> 
          <td class="table-odd">1,3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4163"> 
          <td class="table-odd">2,3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4167"> 
          <td class="table-odd">3,4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4171"> 
          <td class="table-odd">4,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="4.8" data-type="两连" data-id="4160"> 
          <td class="table-odd">1,4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4164"> 
          <td class="table-odd">2,4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4168"> 
          <td class="table-odd">3,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4172"> 
          <td class="table-odd">5,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <tbody> 
         <tr data-odds="4.8" data-type="两连" data-id="4161"> 
          <td class="table-odd">1,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4165"> 
          <td class="table-odd">2,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="4.8" data-type="两连" data-id="4169"> 
          <td class="table-odd">3,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">4.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
     </tr> 
    </tbody> 
    </table> 
    <!-- 和值|两连 end --> 
    <!-- 和值|两连 start --> 
    <table class="table nested-table mb10" style="border-bottom:none;"> 
    <tbody> 
     <tr> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <thead> 
         <tr> 
          <th colspan="3">独胆</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr data-odds="2.01" data-type="独胆" data-id="4145"> 
          <td class="table-odd">1</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="2.01" data-type="独胆" data-id="4146"> 
          <td class="table-odd">2</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="2.01" data-type="独胆" data-id="4147"> 
          <td class="table-odd">3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="2.01" data-type="独胆" data-id="4148"> 
          <td class="table-odd">4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="2.01" data-type="独胆" data-id="4149"> 
          <td class="table-odd">5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="2.01" data-type="独胆" data-id="4150"> 
          <td class="table-odd">6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">2.01</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr>  
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <thead> 
         <tr> 
          <th colspan="3">豹子</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr data-odds="160" data-type="豹子" data-id="4151"> 
          <td class="table-odd">1,1,1</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="160" data-type="豹子" data-id="4152"> 
          <td class="table-odd">2,2,2</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="160" data-type="豹子" data-id="4153"> 
          <td class="table-odd">3,3,3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="160" data-type="豹子" data-id="4154"> 
          <td class="table-odd">4,4,4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="160" data-type="豹子" data-id="4155"> 
          <td class="table-odd">5,5,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="160" data-type="豹子" data-id="4156"> 
          <td class="table-odd">6,6,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">160</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="27.5" data-type="豹子" data-id="4157"> 
          <td class="table-odd">任意豹子</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">27.5</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
      <td class="p0" style="border-bottom:none;"> 
       <table class="j-betting f-border"> 
        <thead> 
         <tr> 
          <th colspan="3">对子</th> 
         </tr> 
        </thead> 
        <tbody> 
         <tr data-odds="9.8" data-type="对子" data-id="4173"> 
          <td class="table-odd">1,1</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="9.8" data-type="对子" data-id="4174"> 
          <td class="table-odd">2,2</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="9.8" data-type="对子" data-id="4175"> 
          <td class="table-odd">3,3</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="9.8" data-type="对子" data-id="4176"> 
          <td class="table-odd">4,4</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="9.8" data-type="对子" data-id="4177"> 
          <td class="table-odd">5,5</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
         <tr data-odds="9.8" data-type="对子" data-id="4178"> 
          <td class="table-odd">6,6</td> 
          <td style="border-right:none; width:60px;"><span class="odds-text">9.8</span></td>
          <td class="j-odds bo-left" style="border-right:none;"><input type="text" class="input fb" /></td>
         </tr> 
        </tbody>
       </table> </td> 
     </tr> 
    </tbody> 
    </table> 
    <!-- 和值|两连 end --> 
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