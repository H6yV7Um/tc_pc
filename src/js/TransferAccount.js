
let TransferAccount = function () {
  var thePageinner = $('.TransferAccount');
  var isLoading = false;
  var doSelfUserTransfers = function (data) {
    if (!isLoading) {
      isLoading = true;
      App.blockUI({
        target: thisContent,
        boxed: true
      });
      $.ajax({
        type: 'post',
        url: Route.PATH + '/account/apply-transfer',
        data: data,
        timeout: 10000,
        dataType: 'json',
        success: function (response) {
          isLoading = false;
          App.unblockUI(thisContent);
          if (response.error.tostring() === '0') {
            App.alert('success', '提示消息', '您的资金已经转到指定账户！', 3000);
            AppLoop.init();
            loadUserTransfers();
          }
          if (response.error.tostring() === '1' || response.error.tostring() === '2') {
            App.alert('warning', '提示消息', response.message);
          }
        },
        error: function () {
          isLoading = false;
          App.unblockUI(thisContent);
        }
      });
    }
  };
  // $('.inputlineBtn').unbind().click(function () {
  //   var from = thePageinner.find('[name="fromacc"]').val();
  //   var to = thePageinner.find('[name="toacc"]').val();
  //   var amount = Number(thePageinner.find('[name="amount"]').val());
  //   if ($('#reverse').hasClass('reversed')) {
  //     from = thePageinner.find('[name="toacc"]').val();
  //     to = thePageinner.find('[name="fromacc"]').val();
  //   }
  //   if (!from) {
  //     return App.alert('info', '提示消息', '请选择转出账户！', 3000);
  //   }
  //   if (!to) {
  //     return App.alert('info', '提示消息', '请选择转入账户！', 3000);
  //   }
  //   if (isNaN(amount)) {
  //     return App.alert('info', '提示消息', '请输入正确的金额！', 3000);
  //   }
  //   if (amount <= 0) {
  //     return App.alert('info', '提示消息', '转账金额必须大于0元！', 3000);
  //   }
  //   var data = {fromCode: from, toCode: to, amount: amount};
  //   return doSelfUserTransfers(data);
  // });
};
export default TransferAccount;
