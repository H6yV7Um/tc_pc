var renewHight = function (a) {
    if (typeof window.parent.resetWindowHight !== 'undefined') {
        window.parent.resetWindowHight(parseInt(a, 10));
    }
}

var reTop = function (a) {
    if (typeof window.parent.resetToTop !== 'undefined') {
        window.parent.resetToTop();
    }
}

/*充值开始*/
var initThisPage01_fin = function () {
    var valueOfType = function (code) {
        /*if (code == 'baofoo') {
            return '宝付支付';
        }
        if (code == 'ecpss') {
            return '汇潮支付';
        }
        if (code == 'gopay') {
            return '国付宝支付';
        }
        if (code == 'ips') {
            return '环迅支付';
        }
        if (code == 'mobao') {
            return '摩宝支付';
        }
        if (code == 'newpay') {
            return '新生支付';
        }
        if (code == 'tonghui') {
            return '通汇支付';
        }
        if (code == 'yeepay') {
            return '易宝支付';
        }*/
    }

    //if (typeof QueryString.iframe !='undefined') {
    //  $('.menu02,.nav').hide();
    //}
    var paytypeTabs3_init = function() {
      $('.secondtxtser').parent().hide();
      $('.recharge-form').css('width', "870px");
      $('.recharge-form').css('margin-left', "202px");
      $('.pay-type label').removeClass('active');
      $('.button-groups .button').eq(0).val('下一步');
      $('.ercodes').hide();
      $('#payfuyan').removeAttr('must');
      $('.noticeTxt li').eq(2).hide();
      $('.noticeTxt li').eq(0).show();
      $('.paytypeTabs3').addClass("on");
      $('.paytypeTabs2').removeClass("on");
      $('.paytypeTabs1').removeClass("on");
      $('.pay-type0').hide();
      $('#payfuyan').hide();
      $('.onlyqr').hide();
      $('.allqrcodehelp').hide();
      $('.onloytxt').hide();
      $('.pay-type1').hide();
      $('.show-qr').show();
      $('.pay-type2 input').eq(0).click();
      $('.pay-type2').show();
    }

    var thisContent = $('[data-init="content"]').eq(0);
    var thisForm = thisContent.find('.recharge-form');

    var transfersSection = thisForm.find('.section').eq(0);
    var transfersStep1 = transfersSection.find('[data-step="one"]');
    var transfersStep2 = transfersSection.find('[data-step="two"]');

    var onlinePaySection = thisForm.find('.section').eq(1);
    var onlinePayStep1 = onlinePaySection.find('[data-step="one"]');
    var onlinePayStep2 = onlinePaySection.find('[data-step="two"]');

    var isLoading = false;
    var listPayment = function () {
        PaymentCtrl.requestAllMethod({
            beforeSend: function () {
                isLoading = true;
                App.blockUI({
                    target: thisContent,
                    boxed: true
                });
            },
            success: function (response) {
                if (response.error == 0) {
                    //console.log(response.data,'response.data');
                    buildPayment(response.data);
                }
                if (response.error == 1) {
                    App.alert('warning', '提示消息', data.message);
                }
            },
            complete: function () {
                isLoading = false;
                App.unblockUI(thisContent);
            }
        });
    }
    //判断是否绑定银行卡
    var allqcodeDict = {}
    var buildPayment = function (data) {

        if (!data.rechargeConfig.isOpen) {
            App.alert('warning', '提示消息', data.rechargeConfig.serviceMsg, 3000);
            return;
        }
        var transferList = data.transferList;
        var thridList = data.thridList;
        var qrcodeList = data.qrCodeList;
        var hasPayMethod = false;
        var payType = thisForm.find('.pay-type2');
        var payType1 = thisForm.find('.pay-type1');
        var payType2 = thisForm.find('.pay-type0');
        payType.empty();
        payType1.empty();
        payType2.empty();
        var thisAlipayItem, thisWechatItem, thisYHKItems, thisWQItem = null, thisQQItem = null, thisYHKItem = null;
        payType.find('label').remove();
        if (transferList != undefined && transferList.length != 0) {
            hasPayMethod = true;
            thisAlipayItem = $('<label max=' + transferList[0].maxUnitRecharge + ' min=' + transferList[0].minUnitRecharge + ' ><img src="/static/v3/images/img/zfb.png" /><input name="payType" rel="0" type="radio" code="'+transferList[0].code+'">支付宝银行<div class="redius"><div></div></div></label>');
            thisWechatItem = $('<label max=' + transferList[0].maxUnitRecharge + ' min=' + transferList[0].minUnitRecharge + '><img src="/static/v3/images/img/wxq.png" /><input name="payType" rel="1" type="radio" code="'+transferList[0].code+'">微信银行<div class="redius"><div></div></div></label>');
            thisYHKItems = $('<label max=' + transferList[0].maxUnitRecharge + ' min=' + transferList[0].minUnitRecharge + ' ><img src="/static/v3/images/img/yhks.png" /><input name="payType" rel="5" " type="radio" code="'+transferList[0].code+'">网银转账<div class="redius"><div></div></div></label>');
            thisYHKItems != null && thisYHKItems.find('input[type="radio"]').unbind('click').click(function () {
                $('ul.controLibtn').show();
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.recharge-form').css('width', "765px");
                $('.recharge-form').css('margin', "0 auto 0 auto");
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('附言');
                });
                transfersStep1.find('.thirdparty_fuinput').attr('placeholder', '请输入持卡人姓名');
                $('#payfuyan').attr('must', '1').show();
                $('.onlynotalipay').hide();
                transfersStep1.find('#transhelp').html(transfersStep1.find('#transhelp').attr('org'));
                buildTransfers(transferList);
                setTransfersStep1();
                $('.sildeTab').hide();
            });

            thisAlipayItem.find('input[type="radio"]').unbind().click(function () {
                $('.sildeTabMainTxt').html('支付宝充值教程');
                $('.sildeTab').show();
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.recharge-form').css('width', "765px");
                $('.recharge-form').css('margin', "0 auto 0 auto");
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('附言');
                });
                transfersStep1.find('.thirdparty_fuinput').attr('placeholder', '请输入支付宝姓名');
                $('#payfuyan').attr('must', '1').show();
                $('.onlynotalipay').hide();
                transfersStep1.find('#transhelp').html(transfersStep1.find('#transhelp').attr('org'));
                buildTransfers(transferList);
                setTransfersStep1();
                base.tabtype = 0;
                base.idx = 0;
                $('.sildeTabl').css('opacity', "0.4");
                $('.sildeTabr').css('opacity', "1");
                $('.sildeTabMain > .paytab').eq(0).show();
                $('.sildeTabMain > .wxtab').css("left", "0px")
                $('.sildeTabMain > .wxtab').eq(0).hide();
            });
            thisWechatItem.find('input[type="radio"]').unbind().click(function () {
                $('.sildeTab').show();
                $('.sildeTabMainTxt').html('微信充值教程');
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.recharge-form').css('width', "765px");
                $('.recharge-form').css('margin', "0 auto 0 auto");
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                $('#payfuyan').removeAttr('must').hide();
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('微信账号');
                });
                transfersStep1.find('.thirdparty_fuinput').attr('placeholder', '附言内容');
                $('.onlynotalipay').show();
                transfersStep1.find('#transhelp').html(transfersStep1.find('#transhelp').attr('org'));
                buildTransfers(transferList);
                setTransfersStep1();
                base.tabtype = 1;
                base.idx = 0;
                $('.sildeTabl').css('opacity', "0.4");
                $('.sildeTabr').css('opacity', "1");
                $('.sildeTabMain > .paytab').eq(0).hide();
                $('.sildeTabMain > .paytab').css("left", "0px")
                $('.sildeTabMain > .wxtab').eq(0).show();
            });
            //payType.append(thisItem);
            thisAlipayItem.find('input[type="radio"]').trigger('click');
        }

        //转账关闭的时候
        if (transferList != undefined && transferList.length == 0) {
          //$('.paytypeTabs3').click();
          paytypeTabs3_init($('.paytypeTabs3'));

          $('.paytypeTabs1').hide();
          setTimeout(function() {
            $('.pay-type2 input').eq(0).click();  
          },200)
          //$..find('input[type="radio"]').first().click();
        }

        if (thridList != undefined && thridList.length != 0) {
            hasPayMethod = true;
            //console.log(thridList,'thridListthridList');

            $.each(thridList, function (i, val) {
                var thisItem = null;

                if (val.name.indexOf('QQ') !== -1) {
                    thisItem = $('<label max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + '><img  src="/static/v3/images/img/qq.png" /><input name="payType" type="radio" code="' + val.code + '"> ' + val.name + '<div class="redius"><div></div></div></label>');
                } else {
                    if (val.name.indexOf('微信') !== -1) {
                        thisItem = $('<label max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + '><img  src="/static/v3/images/img/wxq.png" /><input name="payType" type="radio" code="' + val.code + '"> ' + val.name + '<div class="redius"><div></div></div></label>');
                    } else if(val.name.indexOf('支付宝') !== -1) {
                        thisItem = $('<label max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + '><img  src="/static/v3/images/img/zfb.png" /><input name="payType" type="radio" code="' + val.code + '"> ' + val.name + '<div class="redius"><div></div></div></label>');
                    }else {
                        thisItem = $('<label max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + '><img  src="/static/v3/images/img/yhks.png" /><input name="payType" type="radio" code="' + val.code + '"> ' + val.name + '<div class="redius"><div></div></div></label>');
                    }

                }

                thisItem.find('input[type="radio"]').unbind().click(function () {
                    $(this).parent().addClass('active').siblings().removeClass('active');

                    if (!onlinePaySection.hasClass('active')) {
                        onlinePaySection.addClass('active');
                        transfersSection.removeClass('active');
                    }
                    buildOnlinePay(val);
                    setOnlinePayStep1();
                    var nowcode = $(this).attr('code');
                    //alert(nowcode);
                    if (nowcode=='205') {
                      $('#thirdam_input').val('50').hide();
                      $('.needshow').show();  
                    }else {
                      $('#thirdam_input').val('').show(); $('.needshow').hide();  
                    }
                });

                payType.append(thisItem);
                // if(i == 0) {
                // 	thisItem.find('input[type="radio"]').trigger('click');
                // }
            });

            //  thisAlipayItem.click();
            payType2.append(thisAlipayItem);
            payType2.append(thisWechatItem);
            payType2.append(thisYHKItems);
        }

        //固定额度充值事件select
        thisForm.find('#mychg').on('change',function() {
          //alert($(this).val());
          thisForm.find('#thirdam_input').val($(this).val());
        })
        
        $('.paytypeTabs2').hide();
        if (qrcodeList != undefined && qrcodeList.length != 0) {
            $('.paytypeTabs2').show();
            $.each(qrcodeList, function (i, val) {
                allqcodeDict['qr_' + val.id] = val.fileByte;
                if (val.codeType == '4') {
                    thisYHKItem = $('<label  max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + ' dataId = ' + val.id + '><img style="margin: 0 auto;" src="/static/v3/images/img/yhks.png" /><input name="payType" rel="4" " min="' + val.minUnitRecharge + '" max="' + val.maxUnitRecharge + '" type="radio">手机银行二维码<div class="redius"><div></div></div></label>');

                }
                if (val.codeType == '2') {
                    thisWQItem = $('<label  max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + ' dataId = ' + val.id + '><img style="margin: 0 auto;" src="/static/v3/images/img/wxq.png" /><input name="payType" rel="2" " min="' + val.minUnitRecharge + '" max="' + val.maxUnitRecharge + '" type="radio">微信二维码<div class="redius"><div></div></div></label>');

                }
                if (val.codeType == '3') {
                    thisQQItem = $('<label  max=' + val.maxUnitRecharge + ' min=' + val.minUnitRecharge + ' dataId = ' + val.id + '><img style="margin: 0 auto;" src="/static/v3/images/img/qq.png" /><input name="payType" rel="3" " min="' + val.minUnitRecharge + '" max="' + val.maxUnitRecharge + '" type="radio">QQ二维码<div class="redius"><div></div></div></label>');

                }
                payType1.append(thisWQItem);
                payType1.append(thisQQItem);
                payType1.append(thisYHKItem);
            });
            thisYHKItem != null && thisYHKItem.find('input[type="radio"]').unbind('click').click(function () {
                var qrsrc = 'qr_' + $(this).parent().attr('dataId');
                var nowqrtyp = $(this).attr('rel');
                $('.ercodeImg img.fl').attr('src', 'data:image/gif;base64,' + allqcodeDict[qrsrc]);
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.ercodes .firsttxt').html('打开【手机银行】或【云闪付APP】，扫描下方二维码');
                //$('.secondtxtser').html('温馨提示：转账金额后面加小数点到账更快.如：100.88元');
                $('.recharge-form').css('width', "765px");
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('.show-qr').show();
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                $('.onlynotalipay').show();
                $('.onlyqr').hide();
                $('#payfuyan').hide();
                //console.log(transfersStep1.find('.bank-list a'));
                minTransfersRecharge = Number($(this).attr('min'));
                maxTransfersRecharge = Number($(this).attr('max'));
                transfersStep1.find('.bank-list a').hide();
                transfersStep1.find('[data-field="min-amount"]').html($(this).attr('min'));
                transfersStep1.find('[data-field="max-amount"]').html($(this).attr('max'));
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('附言');
                });
                transfersStep1.find('#transhelp').html('请填写您的会员账号。否则无法到帐');
                buildTransfers([]);
                setTransfersStep1();
            });
            thisWQItem != null && thisWQItem.find('input[type="radio"]').unbind('click').click(function () {
                var qrsrc = 'qr_' + $(this).parent().attr('dataId');
                $('.ercodeImg img.fl').attr('src', 'data:image/gif;base64,' + allqcodeDict[qrsrc]);
                $('.recharge-form').css('width', "765px");
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.ercodes .firsttxt').html('打开微信，扫描下方二维码');
                $('.show-qr').show();
                //$('.secondtxtser').html('温馨提示：请备注好您的会员号, 以免财务审核上分延迟');
                $(this).parent().addClass('active').siblings().removeClass('active');
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                $('.onlynotalipay').hide();
                $('.onlyqr').show();
                $('#payfuyan').hide();
                //console.log(transfersStep1.find('.bank-list a'));
                minTransfersRecharge = Number($(this).attr('min'));
                maxTransfersRecharge = Number($(this).attr('max'));
                transfersStep1.find('.bank-list a').hide();
                transfersStep1.find('[data-field="min-amount"]').html($(this).attr('min'));
                transfersStep1.find('[data-field="max-amount"]').html($(this).attr('max'));
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('附言');
                });
                transfersStep1.find('#transhelp').html('请填写您的会员账号。否则无法到帐');
                buildTransfers([]);
                setTransfersStep1();
            });
            thisQQItem != null && thisQQItem.find('input[type="radio"]').unbind('click').click(function () {
                var qrsrc = 'qr_' + $(this).parent().attr('dataId');
                $('.ercodeImg img.fl').attr('src', 'data:image/gif;base64,' + allqcodeDict[qrsrc]);
                $('.recharge-form').css('width', "765px");
                $('.section .labeltxtMin').html(($(this).parent().attr('min')));
                $('.section .labeltxtMax').html(($(this).parent().attr('max')));
                $('.show-qr').show();
                $('.ercodes .firsttxt').html('打开【QQ钱包】，扫描下方二维码 ');
                //$('.secondtxtser').html('温馨提示：请备注好您的会员号, 以免财务审核上分延迟');
                $(this).parent().addClass('active').siblings().removeClass('active');
                if (!transfersSection.hasClass('active')) {
                    transfersSection.addClass('active');
                    onlinePaySection.removeClass('active');
                }
                $('.onlynotalipay').hide();
                $('#payfuyan').hide();
                $('.onlyqr').show();
                minTransfersRecharge = Number($(this).attr('min'));
                maxTransfersRecharge = Number($(this).attr('max'));
                transfersStep1.find('[data-field="min-amount"]').html($(this).attr('min'));
                transfersStep1.find('[data-field="max-amount"]').html($(this).attr('max'));
                transfersStep1.find('.bank-list a').hide();
                transfersStep1.find('.thirdparty_name').each(function (item) {
                    $(this).html('附言');
                });
                transfersStep1.find('#transhelp').html('请填写您的会员账号。否则无法到帐');
                buildTransfers([]);
                setTransfersStep1();
            });
        }


        if (!hasPayMethod) {
            thisContent.find('.wrapper').eq(0).hide();
            thisContent.find('.wrapper').eq(1).show();
        } else {
            thisContent.find('.wrapper').eq(0).show();
            thisContent.find('.wrapper').eq(1).hide();
        }
        //$('.paytypeTabs1').click();
    }

    /**
     * 转账汇款
     */
    var minTransfersRecharge = 0, maxTransfersRecharge = 0;
    var buildTransfers = function (list) {
        //console.log(list,'listlistlistbuildTransfers');
        var generateMixed = function (n) {
            var me = this;
            var res = "";
            var jschars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            for (var i = 0; i < n; i++) {
                var id = Math.ceil(Math.random() * 35);
                res += jschars[id];
            }
            return res;
        }

        var banklist = transfersStep1.find('.bank-list');
        banklist.empty();
        // 循环显示银行列表
        $.each(list, function (i, val) {
            var item = $('<a class="item">');
            item.append('<i class="checked"></i>');
            item.addClass('b' + val.bankId); // 银行标示
            item.attr('data-pid', val.id);
            item.attr('data-bank-id', val.bankId);
            item.attr('data-link', 'about:blank');
            item.attr('data-bank-name', val.bankName);
            item.attr('data-card-name', val.cardName);
            item.attr('data-card-id', val.cardId);
            item.attr('data-min', val.minUnitRecharge);
            item.attr('data-max', val.maxUnitRecharge);
            //item.attr('data-link', val.link);
            banklist.append(item);
        });
        // 绑定选中函数
        banklist.find('.item').unbind().click(function () {
            if (!$(this).hasClass('selected')) {
                banklist.find('.item').removeClass('selected');
                $(this).addClass('selected');
                minTransfersRecharge = Number($(this).attr('data-min'));
                maxTransfersRecharge = Number($(this).attr('data-max'));
                //console.log(minTransfersRecharge,maxTransfersRecharge);
                //transfersStep1.find('input[name="fuyan"]').val(generateMixed(22));
                transfersStep1.find('input[name="pid"]').val($(this).attr('data-pid'));
                transfersStep1.find('[data-field="min-amount"]').html(minTransfersRecharge);
                transfersStep1.find('[data-field="max-amount"]').html(maxTransfersRecharge);
            }
        });
        // 默认选择第一个
        banklist.find('.item').eq(0).trigger('click');
    }

    /**
     * 在线支付
     */
    var minOnlineRecharge = 0, maxOnlineRecharge = 0;
    var buildOnlinePay = function (data) {
        onlinePayStep1.find('input[name="pid1"]').val(data.id);
        minOnlineRecharge = data.minUnitRecharge;
        maxOnlineRecharge = data.maxUnitRecharge;
        onlinePayStep1.find('[data-field="min-amount"]').html(minOnlineRecharge);
        onlinePayStep1.find('[data-field="max-amount"]').html(maxOnlineRecharge);
        var banklist = onlinePayStep1.find('.bank-list');
        banklist.empty();
        // 循环显示银行列表
        $.each(data.banklist, function (i, val) {
            var item = $('<a class="item">');
            item.append('<i class="checked"></i>');
            item.addClass('b' + val.bankId); // 银行标示
            item.attr('data-code', val.code);
            banklist.append(item);
        });
        // 绑定选中函数
        banklist.find('.item').unbind().click(function () {
            if (!$(this).hasClass('selected')) {
                banklist.find('.item').removeClass('selected');
                $(this).addClass('selected');
                onlinePayStep1.find('input[name="bankco1"]').val($(this).attr('data-code'));
            }
        });
        // 默认选择第一个
        banklist.find('.item').eq(0).trigger('click');
    }

    listPayment();

    /**
     * 转账逻辑
     */
    var setTransfersStep1 = function () {
        transfersStep1.show();
        $('.recharge-form input[name="amount1"]').val('');
        $('.recharge-form input[name="amount"]').val('');
        transfersStep2.hide();
        transfersSection.find('.pay-step tr > td').removeClass('current').eq(0).addClass('current');
    }
    transfersStep1.find('input[name="alipayname"]').blur(function () {
        //alert(transfersStep1.find('input[name="alipayname"]').val());
        var fuYan = transfersStep1.find('input[name="fuyan"]');
        fuYan.val($('span[data-field="username"]').first().text() + '' + transfersStep1.find('input[name="alipayname"]').val())
    });
    transfersStep1.find('input[name="next"]').unbind().click(function () {
        var pid = transfersStep1.find('input[name="pid"]').val();
        var fuYan = $('#login_header .nickname').attr('title') + ':' + transfersStep1.find('input[name="fuyan"]').val();
        var payWay = $('.pay-type .active > input').attr('rel');
        var qrpayWayid = $('.pay-type .active').attr('dataid');
        var amount = Number(transfersStep1.find('input[name="amount"]').val());
        if (isNaN(amount)) {
            return App.alert('info', '提示消息', '请填写正确的充值金额！', 3000);
        }
        if (amount == 0) {
            return App.alert('info', '提示消息', '充值金额必须大于0元！', 3000);
        }
        if (fuYan == '') {
            return App.alert('info', '提示消息', '附言信息无效！', 3000);
        }
        if (typeof $('#payfuyan').attr('must') != 'undefined' && transfersStep1.find('input[name="fuyan"]').val() == '') {
            return App.alert('info', '提示消息', '附言信息无效！', 3000);
        }
        // console.log(amount,minTransfersRecharge);
        if (amount < minTransfersRecharge) {
            return App.alert('info', '提示消息', '单笔最低充值金额为' + minTransfersRecharge + '元！', 3000);
        }
        if (amount > maxTransfersRecharge) {
            return App.alert('info', '提示消息', '单笔最高充值金额为' + maxTransfersRecharge + '元！', 3000);
        }
        if (!qrpayWayid && (payWay === '0' || payWay === '1')) {
            $('.recharge-form').css('width', "900px");
            $('.recharge-form').css('margin', "0 auto 0 20px");
        }
        var data = {pid: pid, amount: amount, fuYan: fuYan, payWay: payWay, qrid: qrpayWayid};
        if (payWay == '1') {
            data['offlineType'] = 'weixin';
        }
        doPaymentTransfers(data);
    });

    var setTransfersStep2 = function (data, qrid, payway) {
        transfersStep1.hide();
        transfersStep2.show();
        transfersSection.find('.pay-step tr > td').removeClass('current').eq(1).addClass('current');

        var bankinfo = transfersStep1.find('.bank-list > .item.selected').clone();
        //console.log(bankinfo,'bankinfobankinfo');

        bankinfo.removeClass('selected');
        transfersStep2.find('.bank-list').css('padding-top', 5).html(bankinfo);
        transfersStep2.find('[data-field="link"]').attr('href', bankinfo.attr('data-link'));

        transfersStep2.find('[data-field="billno"]').html(data.billno);

        var bankName = bankinfo.attr('data-bank-name');
        var cardName = bankinfo.attr('data-card-name');
        var cardId = bankinfo.attr('data-card-id');
        transfersStep2.find('tr').eq(1).show();
        transfersStep2.find('tr').eq(1).show();
        $('.two .bank-info .labelss').show();
        if (!cardId) cardId = "", transfersStep2.find('tr').eq(1).hide();
        if (!cardName) cardName = "", transfersStep2.find('tr').eq(1).hide(), $('.two .bank-info .labelss').hide();
        transfersStep2.find('[data-field="bankName"]').html(bankName);
        transfersStep2.find('[data-field="cardName"]').html(cardName);
        transfersStep2.find('[data-field="amount"]').html(data.amount.toFixed(2));
        transfersStep2.find('[data-field="cardId"]').html(cardId);
        transfersStep2.find('[data-field="postscript"]').html(String(data.attach).indexOf(':') > -1 ? String(data.attach).split(':')[1] : data.attach);
        //console.log(allqcodeDict,qrid,'allqcodeDictallqcodeDict');

        transfersStep2.find('.cancopy[rel="cardName"]').attr('data-clipboard-text', cardName);
        transfersStep2.find('.cancopy[rel="amount"]').attr('data-clipboard-text', data.amount.toFixed(2));
        transfersStep2.find('.cancopy[rel="cardId"]').attr('data-clipboard-text', cardId);
        transfersStep2.find('.cancopy[rel="postscript"]').attr('data-clipboard-text', data.attach);
        if (typeof qrid != 'undefined') {
            transfersStep2.find('img.qrnow').attr('src', 'data:image/gif;base64,' + allqcodeDict[qrid]);
            transfersStep2.find('[data-field="cardName"]').html('-');
            transfersStep2.find('[data-field="cardId"]').html('-');
            transfersStep2.find('[data-field="bankName"]').html('-');
            transfersStep2.find('.show-qr').show();
            transfersStep2.find('.qrrepeat img').attr('src', transfersStep1.find('.ercodeImg img').attr('src'));
            transfersStep2.find('.qrrepeat').show();
        } else {
            transfersStep2.find('.show-qr').hide();
            transfersStep2.find('.qrrepeat').hide();
        }
        if (typeof payway != 'undefined') {
            if (payway == '1') {
                transfersStep2.find('.needhide').hide();
                transfersStep2.find('.lastwechat').show();
                transfersStep2.find('.welcometxt').html(transfersStep2.find('.welcometxt').attr('org'));
                transfersStep2.find('.firsthelp').html('操作微信直接转到我们银行卡账户时，输入银行卡信息，<span style="color:red;font-weight:400;">输入转账金额的时候，请按照我们给您提供的存入金额 来进行转账操作，我们会按照您实际转入的金额来进行为您上分的。如果填写金额有误，将会导致到账延迟。</span>');
                transfersStep2.find('.lastwechat').show();
            } else {

                transfersStep2.find('.needhide').show();
                transfersStep2.find('.lastwechat').hide();
                transfersStep2.find('.firsthelp').html('操作支付宝直接转到我们银行卡账户时，输入银行卡信息和转账金额后，<span style="color:red;font-weight:400;">必须将上面附言中的内容填写到支付宝转账页面的留言或备注中，再转账，如果填写有误，将会导致到账延迟。</span>');
                transfersStep2.find('.welcometxt').html(transfersStep2.find('.welcometxt').attr('org'));
                if (payway == '3') {
                    transfersStep2.find('.welcometxt').html('尊敬的客户您好，请获取以下信息后，打开QQ扫码页面，进行扫码支付。完成转账充值。');
                    transfersStep2.find('.firsthelp').html('操作QQ扫码时，<span style="color:red;font-weight:400;">必须将上面附言中的内容填写到转账页面的留言或备注中，再转账，如果填写有误，将会导致到账延迟。</span>');
                }
                if (payway == '2') {
                    transfersStep2.find('.welcometxt').html('尊敬的客户您好，请获取以下信息后，打开微信扫码页面，进行扫码支付。完成转账充值。');
                    transfersStep2.find('.firsthelp').html('操作微信扫码时，<span style="color:red;font-weight:400;">必须将上面附言中的内容填写到转账页面的留言或备注中，再转账，如果填写有误，将会导致到账延迟。</span>');
                }
            }
        } else {
            transfersStep2.find('.needhide').show();
            transfersStep2.find('.lastwechat').hide();
            transfersStep2.find('.firsthelp').html('操作支付宝直接转到我们银行卡账户时，输入银行卡信息和转账金额后，<span style="color:red;font-weight:400;">必须将上面附言中的内容填写到支付宝转账页面的留言或备注中，再转账，如果填写有误，将会导致到账延迟。</span>');
        }

        var setCopy = function (els, text) {
            var target = els.parent().find('[data-command="copy"]');
            target.attr('data-clipboard-text', text);
            var clipboard = new Clipboard(target);
            clipboard.on('success', function (e) {
                App.alert('info', '消息提示', '复制成功『' + text + '』', 3000);
                e.clearSelection();
            });
            clipboard.on('error', function (e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
            /*var client = new ZeroClipboard(target);
            client.on( "ready", function( readyEvent ) {
              //client.on('beforecopy', function(e){
              //  client.setText(text);
              //});
              client.on( "aftercopy", function( event ) {
                App.alert('info', '消息提示', '复制成功『'+text+'』！', 3000);
                //alert('复制成功！'+text);
              });
            }); */

            target.unbind('click').click(function () {

            });
        }


        //setCopy(transfersStep2.find('[data-field="cardName"]'), cardName);
        //setCopy(transfersStep2.find('[data-field="amount"]'), data.amount.toFixed(2));
        //setCopy(transfersStep2.find('[data-field="cardId"]'), cardId);
        //setCopy(transfersStep2.find('[data-field="postscript"]'), data.attach);
        renewHight($('body').height());
    }
    var clipboard = new Clipboard('.cancopy');
    clipboard.on('success', function (e) {
        console.trace();
        //console.info('Action:', e.action);
        //console.info('Text:', e.text);
        //console.info('Trigger:', e.trigger);
        e.clearSelection();
        App.alert('info', '消息提示', e.text + ' 已复制');
    });

    clipboard.on('error', function (e) {
        //console.error('Action:', e.action);
        //console.error('Trigger:', e.trigger);
    });
    transfersStep2.find('input[name="record"]').unbind().click(function () {
        window.location.href = '/yx/hbs/manager-account.html#page=2_finance';
        //window.location.href = '?key=record';
    });

    transfersStep2.find('input[name="transfers"]').unbind().click(function () {
        window.location.href = '?key=transfers';
    });

    transfersStep2.find('input[name="success"]').unbind().click(function () {
        // TODO
    });

    transfersStep2.find('input[name="back"]').unbind().click(function () {

        $('.recharge-form').css('width', "765px");
        $('.recharge-form').css('margin', "0 auto 0 auto");
        reTop();
        $('.show-qr').show();
        setTransfersStep1();
    });

    //transfersStep2.find('input[name="kefu"]').unbind().click(function() {
    // TODO
    //});

    /**
     * 第三方逻辑
     */
    var setOnlinePayStep1 = function () {
        onlinePayStep1.show();
        onlinePayStep2.hide();
        $('.recharge-form input[name="amount1"]').val('');
        $('.recharge-form input[name="amount"]').val('');
        onlinePaySection.find('.pay-step tr > td').removeClass('current').eq(0).addClass('current');
    }

    onlinePayStep1.find('input[name="next"]').unbind().click(function () {

        var pid = onlinePayStep1.find('input[name="pid1"]').val();
        var bankco = onlinePayStep1.find('input[name="bankco1"]').val();
        var amount = Number(onlinePayStep1.find('input[name="amount1"]').val());
        onlinePayStep2.find('.button-groups input[name="redirect"]').show();
        if (isNaN(amount)) {
            return App.alert('info', '提示消息', '请填写正确的充值金额！', 3000);
        }
        if (amount == 0) {
            return App.alert('info', '提示消息', '充值金额必须大于0元！', 3000);
        }
        if (amount < minOnlineRecharge) {
            return App.alert('info', '提示消息', '单笔最低充值金额为' + minOnlineRecharge + '元！', 3000);
        }
        if (amount > maxOnlineRecharge) {
            return App.alert('info', '提示消息', '单笔最高充值金额为' + maxOnlineRecharge + '元！', 3000);
        }
        var data = {pid: pid, bankco: bankco, amount: amount};
        doPaymentThrid(data);
    });

    var setOnlinePayStep2 = function (data) {
        onlinePayStep1.hide();
        onlinePayStep2.show();
        onlinePaySection.find('.pay-step tr > td').removeClass('current').eq(1).addClass('current');

        var bankinfo = onlinePayStep1.find('.bank-list > .item.selected').clone();
        bankinfo.removeClass('selected');
        //console.log(bankinfo,'bankinfobankinfobankinfo');

        onlinePayStep2.find('.bank-list').html(bankinfo);
        onlinePayStep2.find('.cancopy[rel="amount"]').attr('data-clipboard-text', Number(data.amount).toFixed(2));
        onlinePayStep2.find('[data-field="amount"]').html(Number(data.amount).toFixed(2));
        onlinePayStep2.find('[data-field="billno"]').html(data.billno);

        // 自动跳转
        var thisForm = onlinePayStep1.find('form');
        thisForm.attr('action', data.link);
        thisForm.find('input[name="text"]').val(data.text);
    }

    onlinePayStep2.find('input[name="back"]').unbind().click(function () {
        setOnlinePayStep1();
    });

    onlinePayStep2.find('input[name="redirect"]').unbind().click(function () {
        $(this).hide();
        onlinePayStep1.find('form').submit();
    });

    onlinePayStep2.find('input[name="game"]').unbind().click(function () {
        window.location.href = '/';
    });


    /**
     * 请求第三方充值
     */
    var doPaymentThrid = function (data) {
        PaymentCtrl.requestThridPay({
            data: data,
            beforeSend: function () {
                isLoading = true;
                App.blockUI({
                    target: thisContent,
                    boxed: true
                });
            },
            success: function (response) {
                if (response.error == 0) {
                    setOnlinePayStep2(response.data);
                    ////console.log(onlinePayStep2.find('.bank-list').html(),onlinePayStep2.find('.bank-list').html().length,onlinePayStep2.find('.bank-list').html()=='');
                    if (onlinePayStep2.find('.bank-list').html().length == 0) {
                        onlinePayStep2.find('.bank-list').parent().hide();
                    } else {
                        onlinePayStep2.find('.bank-list').parent().show();
                    }
                }
                if (response.error == 1 || response.error == 2) {
                    App.alert('warning', '提示消息', response.message);
                }
                //alert($('body').height());
                renewHight($('body').height());
            },
            complete: function () {
                isLoading = false;
                App.unblockUI(thisContent);
            }
        });
    }

    /**
     * 请求转账汇款
     */
    var doPaymentTransfers = function (data) {
        var pdate = data;
        Will.ajax(data, Route.PATH + '/payment/request-transfer-pay', function (data) {
            if (String(data) == '-1') {
                window.location.href = "/login";
                return false;
            }
            setTransfersStep2(data, pdate.qrid, pdate.payWay);
            $('.show-qr').hide();
        });
    }

    //类型切换
    var base = {
      doMove(e, c, d) {
          var g = 0;
          var b = 0;
          var f = null;
          for (var a in c) {
              if (a === 'opacity') {
                  g = parseInt(parseFloat(this.getStyle(e, a)) * 100);
              } else {
                  g = parseInt(this.getStyle(e, a));
              }
              f = (c[a] - g) / 2;
              f = f > 0 ? Math.ceil(f) : Math.floor(f);
              if (g !== c[a]) {
                  b++;
                  if (a === 'opacity') {
                      e.style.filter = 'alpha(opacity:' + (g + f) + ')';
                      e.style.opacity = (g + f) / 100;
                  } else {
                      e.css(a, (g + f) + 'px');
                  }
              }
          }
          b.toString() === '0' && (clearInterval(e.timer), d && d());
      },
      move(c, a, f, t) {
          t = t || 40;
          try {
              clearInterval(c.timer);
              let _this = this;
              c.timer = setInterval(function () {
                  _this.doMove(c, a, f);
              }, t);
          } catch (e) {
              console.log(e);
          }
      },
      idx: 0,
      isnext: true,
      tabtype: 0, // 0 zhifu bao 1 weichar
      getStyle(b, a) {
          try {
              var ss = b.css(a).split('px')[0];
              // if (b.currentStyle) {
              //   return b.currentStyle[a];
              // }
              // return getComputedStyle(b, false)[a];
              return ss
          } catch (err) {
              console.log(err)
              return false;
          }
      }
    }

    // +100 / +0.1
    $('.controLibtn li').off('click').click(function () {
      var addNum = ($(this).attr('vel') - 0) * 1000;
      var vla = ($('.accoumtkev').val() - 0 ) * 1000;
      var addnum = 0;
      if (!Number(vla)) vla = 0;
      addnum = (addNum + vla) / 1000;
      $('.accoumtkev').val(addnum);
    });

    $('.paytypeTabs1').off('click').click(function () {
      $('.secondtxtser').parent().hide();
      $('.recharge-form').css('width', "870px");
      $('.recharge-form').css('margin', "0 auto 0 auto");
      $('.pay-type label').removeClass('active');
      $('.button-groups .button').eq(0).val('下一步');
      $('.noticeTxt li').eq(2).show();
      $('.ercodes').hide();
      $('.sildeTab').show();
      $('.noticeTxt li').eq(0).show();
      $(this).addClass("on");
      $('#payfuyan').show();
      $('.onlyqr').hide();
      $('.allqrcodehelp').show();
      $('.paytypeTabs3').removeClass("on");
      $('.paytypeTabs2').removeClass("on");
      $('.pay-type1').hide();
      $('.pay-type2').hide();
      $('.onloytxt').show();
      $('.pay-type0 input').eq(0).click();
      $('.pay-type0').show();
      $('.show-qr').show();
    });
    $('.paytypeTabs2').off('click').click(function () {
      $('.secondtxtser').parent().show();
      $('.recharge-form').css('width', "870px");
      $('.recharge-form').css('margin', "0 auto 0 auto;");
      $('.pay-type label').removeClass('active');
      $('.button-groups .button').eq(0).val('提交');
      $('.sildeTab').hide();
      $('.ercodes').show();
      $('#payfuyan').removeAttr('must');
      //$('.noticeTxt li').eq(0).hide();
      $('.onloytxt').hide();
      $('#payfuyan').hide();
      $('.onlyqr').show();
      $('.allqrcodehelp').show();
      $(this).addClass("on");
      $('.paytypeTabs1').removeClass("on");
      $('.paytypeTabs3').removeClass("on");
      $('.pay-type0').hide();
      $('.pay-type2').hide();
      $('.show-qr').show();
      $('.pay-type1').show();
      $('.pay-type1 input').eq(0).click();
    });
    $('.paytypeTabs3').off('click').click(function () {
      paytypeTabs3_init($(this));  
    });
    $('.pay-type0 label').off('click').click(function () {
      var i = $(this).index();
        
    })
    
    if (base.idx < 1) {
      $('.sildeTabl').css('opacity', "0.4");
    }
    if (base.tabtype === 0) {
      $('.sildeTabMain > .paytab').eq(0).show();
    } else {
      $('.sildeTabMain > .wxtab').eq(0).show();
    }
    $('.sildeTabr').off('click').click(function () {
      if (!base.isnext) {
          return false;
      }
      base.isnext = false;
      base.idx++;
      $('.sildeTabl').css('opacity', "1");

      if (base.tabtype === 0) {
          if (base.idx >= 4) {
              base.idx = 3;
              $(this).css('opacity', "0.4");
          }
          base.move($('.sildeTabMain > ul.paytab').eq(0), {"left": -base.idx * 230}, function () {
              base.isnext = true;
          });
      } else {
          if (base.idx >= 5) {
              base.idx = 4;
              $(this).css('opacity', "0.4");
          }
          base.move($('.sildeTabMain > ul.wxtab').eq(0), {"left": -base.idx * 230}, function () {
              base.isnext = true;
          });
      }
    });

    $('.sildeTabl').off('click').click(function () {
      if (!base.isnext) {
          return false;
      }
      base.isnext = false;
      base.idx--;
      $('.sildeTabr').css('opacity', "1");
      if (base.idx <= 0) {
          base.idx = 0;
          $('.sildeTabl').css('opacity', "0.4");
      }
      if (base.tabtype === 0) {
          base.move($('.sildeTabMain > ul.paytab').eq(0), {"left": -base.idx * 230}, function () {
              base.isnext = true;
          });
      } else {
          base.move($('.sildeTabMain > ul.wxtab').eq(0), {"left": -base.idx * 230}, function () {
              base.isnext = true;
          });
      }
    });

}
/*充值结束*/

/*新版充值开始*/
var initThisPage01_fin_new = function () {

}

/*新版充值结束*/

/*提现开始*/
var initThisPage02_fin = function () {
    var thisContent01 = $('[data-init="content"]').eq(1);

    $.get('/yx/u/api/account/get-bind-info', function (bdinfo) {
        if (bdinfo.data.withdrawName == null) {
            thisContent01.find('.wrapper').hide();
            thisContent01.find('.wrapper').eq(1).show();
        } else {
            thisContent01.find('.wrapper').hide();
            thisContent01.find('.wrapper').eq(0).show();
            loadWithdrawals();
        }
    }, 'JSON')

    if (typeof QueryString.iframe != 'undefined') {
        $('.menu02,.nav').hide();
    }

    var isLoading = false;
    var loadWithdrawals = function () {
        Will.ajax({}, Route.PATH + '/payment/prepare-withdraw', function (data) {
            buildWithdrawals(data)
        });
    }

    var feeRate = 0, maxFee = 0;
    var buildWithdrawals = function (data) {
        if (!data.withdrawConfig.isOpen) {
            App.alert('warning', '提示消息', data.withdrawConfig.serviceMsg, 3000);
            return;
        }
        //console.log(data,'buildWithdrawalsbuildWithdrawalsbuildWithdrawalsbuildWithdrawals');
        thisContent01.find('[name="amount"]').val('');
        thisContent01.find('[name="withdrawPwd"]').val('');
        if (data.myAccountStatus.hasWithdarwPwd) {
            if (data.accountCardList.length > 0) {
                thisContent01.find('.wrapper').hide();
                thisContent01.find('.wrapper').eq(0).show();
                thisContent01.find('[data-field="total"]').html(data.myAccountStatus.totalBalance.toFixed(3));
                thisContent01.find('[data-field="money"]').html(data.myAccountStatus.availableBalance.toFixed(3));
                thisContent01.find('[data-field="minUnitAmount"]').html(data.withdrawConfig.minUnitAmount.toFixed(3));
                thisContent01.find('[data-field="maxUnitAmount"]').html(data.withdrawConfig.maxUnitAmount.toFixed(3));
                thisContent01.find('[data-field="maxDailyAmount"]').html(data.withdrawConfig.maxDailyAmount.toFixed(3));
                thisContent01.find('[data-field="maxDailyCount"]').html(data.withdrawConfig.maxDailyCount);
                thisContent01.find('[data-field="feeRateTimes"]').html(data.withdrawConfig.freeDailyCount > 0 ? data.withdrawConfig.freeDailyCount : 0);
                feeRate = data.withdrawConfig.feeRate;
                maxFee = parseInt(data.withdrawConfig.dayWithdrawRateMax, 10);
                //console.log(!data.withdrawConfig.hasFee,'hasFeehasFeehasFee');

                if (!data.withdrawConfig.hasFee) {
                    thisContent01.find('.aboutfee').hide();
                } else {
                    thisContent01.find('.aboutfee').show();
                }
                thisContent01.find('[data-field="freeDailyCount"]').html(data.withdrawConfig.freeDailyCount);
                thisContent01.find('[data-field="feeRate"]').html(data.withdrawConfig.feeRate * 100);
                thisContent01.find('[data-field="feeRateMin"]').html(data.withdrawConfig.dayWithdrawRateMin);
                //console.log(data.withdrawConfig.maxFee,'data.withdrawConfig.maxFeedata.withdrawConfig.maxFeedata.withdrawConfig.maxFee');
                thisContent01.find('[data-field="minFee"]').html(data.withdrawConfig.dayWithdrawRateMin);
                thisContent01.find('[data-field="maxFee"]').html(data.withdrawConfig.dayWithdrawRateMax);
                thisContent01.find('[data-field="serviceTime"]').html(data.withdrawConfig.serviceTime);
                thisContent01.find('[data-field="lotteryLimitAmount"]').html(data.myAccountStatus.lotteryLimitAmount.toFixed(3));
                thisContent01.find('[data-field="baccaratLimitAmount"]').html(data.myAccountStatus.baccaratLimitAmount.toFixed(3));
                thisContent01.find('[data-field="dailyAmount"]').html(data.myAccountStatus.dailyAmount.toFixed(3));
                thisContent01.find('[data-field="dailyCount"]').html(data.myAccountStatus.dailyCount);
                if (data.myAccountStatus.dailyCount >= data.withdrawConfig.freeDailyCount) {
                    thisContent01.find('[data-hide="noFreeCount"]').show();
                } else {
                    thisContent01.find('[data-hide="noFreeCount"]').hide();
                }
                buildCardList(data.accountCardList);
            } else {
                thisContent01.find('.wrapper').hide();
                thisContent01.find('.wrapper').eq(2).show();
            }
        } else {
            thisContent01.find('.wrapper').hide();
            thisContent01.find('.wrapper').eq(1).show();
        }
    }

    var buildCardList = function (list) {
        var myCardList = thisContent01.find('[data-field="card-list"]');
        myCardList.empty();
        var hasDefault = false;
        $.each(list, function (i, val) {
            var defaultHtml = val.isDefault == 1 ? 'selected' : 'ddcolorY';
            // var innerHtml =
            // 	'<div class="card" data-id="' + val.id + '">'+
            // 		'<div class="logo b' + val.bankId + '"></div>'+
            // 		'<div class="cardno">' + val.bankCardId + '</div>'+
            // 		'<div class="name">' + val.bankCardName + '</div>'+ defaultHtml +
            // 		'<i class="checked"></i>'+
            // 	'</div>';
            var innerHtml =
                '<li data-id="' + val.id + '" style="line-height:38px;" class="bgcolorA card cursor card clearfix fl ml15 ' + defaultHtml + '  bank' + val.bankId + '">' +

                '<p class="txtcen colorA">' + val.bankCardName + '&nbsp;&nbsp;&nbsp;&nbsp;' + val.bankCardId + '</p>' +
                '</li>';
            myCardList.append(innerHtml);
            if (val.isDefault == true) {
                hasDefault = true;
                myCardList.find('.card').eq(i).addClass('selected');
            }
        });
        if (!hasDefault) {
            myCardList.find('.card').eq(0).addClass('selected');
        }
        myCardList.find('.card').unbind().click(function () {
            myCardList.find('.card').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    var applyWithdrawals = function (data) {
        Will.ajax(data, Route.PATH + '/payment/apply-withdraw', function (data) {
            if (String(data) == '-1') {
                window.location.href = "/login";
                return false;
            }
            App.alert('success', '提示消息', '您的提现请求已申请，请等待工作人员处理！', 3000);
            loadWithdrawals();
            if (String(window.location.pathname).indexOf('manager-finance') > -1) {
                setTimeout(function () {
                    //window.location.reload();
                    AppLoop.init();
                }, 1000);
            }
        });
    }

    var testApply = function (amount, withdrawPwd) {
        if (amount == '') {
            App.alert('info', '提示消息', '请输入取现金额！', 3000);
            return false;
        }
        if (withdrawPwd == '') {
            App.alert('info', '提示消息', '请输入资金密码！', 3000);
            return false;
        }
        return true;
    }

    thisContent01.find('input[name="amount"]').change(function () {
        var amount = Number($(this).val());
        if (isNaN(amount)) {
            thisContent01.find('[data-field="feeAmount"]').html(0);
        } else {
            var feeAmount = amount * feeRate;
            if (feeAmount > maxFee) {
                feeAmount = maxFee;
            }
            thisContent01.find('[data-field="feeAmount"]').html(feeAmount.toFixed(2));
        }
    });

    thisContent01.find('input[name="submit"]').unbind().click(function () {
        var amount = thisContent01.find('input[name="amount"]').val();
        var cid = thisContent01.find('[data-field="card-list"] > .card.selected').attr('data-id');
        var withdrawPwd = thisContent01.find('input[name="withdrawPwd"]').val();
        if (testApply(amount, withdrawPwd)) {
            var data = {amount: amount, cardId: cid, withdrawPassword: md5(withdrawPwd)};
            applyWithdrawals(data);
        }
    });

    loadWithdrawals();
    //console.log('loadWithdrawalsloadWithdrawalsloadWithdrawals');

}
/*提现结束*/


/*转账开始*/
var initThisPage03_fin = function () {

    var thisContent = $('[data-init="content"]').eq(5);

    $('.manager .nav > a').eq(2).addClass('active');

    var transOutList = thisContent.find('.trans-out-list');
    var transInList = thisContent.find('.trans-in-list');

    var isLoading = false;
    var loadUserTransfers = function () {
        if (!isLoading) {
            isLoading = true;
            App.blockUI({
                target: thisContent,
                boxed: true
            });
            $.ajax({
                type: 'post',
                url: Route.PATH + '/account/prepare-transfer',
                data: {},
                timeout: 10000,
                dataType: 'json',
                success: function (response) {
                    isLoading = false;
                    App.unblockUI(thisContent);
                    if (response.error == 0) {
                        buildUserTransfers(response.data);
                    }
                    if (response.error == 1) {
                        App.alert('warning', '提示消息', response.message);
                    }
                },
                error: function () {
                    isLoading = false;
                    App.unblockUI(thisContent);
                }
            });
        }
    }

    var PlatformList = [];
    var PlatformBalance = {};
    var buildUserTransfers = function (data) {
        PlatformList = data.platformList;
        PlatformBalance = data.platformBalance;
        ////console.log(PlatformBalance,'PlatformBalance');
        $('.sobet_left').html(PlatformBalance.sobet_01);
        initOutDoc();
    }

    var updateMoney = function () {
        var amount = Number(transOutList.find('.list > .item.selected').find('input').val());
        transOutList.find('[data-field="amount"]').html(amount);
    }

    var initOutDoc = function () {
        transOutList.find('.list').empty();
        ////console.log(PlatformList,'PlatformList');
        $.each(PlatformList, function (i, val) {
            var balance = PlatformBalance[val.code];
            var innerHtml =
                '<div data-id="' + val.id + '" data-code="' + val.code + '" class="item">' +
                '<div class="label">' + val.name + '：¥ ' + balance.toFixed(3) + '</div>' +
                '<div class="value">' +
                '<input data-max="' + balance + '" type="text" value="' + balance + '" autocomplete="off"/>' +
                '<a data-command="all">全部</a>' +
                '</div>' +
                '<i class="checked"></i>' +
                '</div>';
            transOutList.find('.list').append(innerHtml);
        });
        initOutEvent();
    }

    var initInDoc = function (id) {
        transInList.find('.list').empty();
        $.each(PlatformList, function (i, val) {
            if (id != val.id) {
                var innerHtml =
                    '<div data-id="' + val.id + '" data-code="' + val.code + '" class="item">' + val.name + '</div>';
                transInList.find('.list').append(innerHtml);
            }
        });
        initInEvent();
    }

    var initOutEvent = function () {
        var items = transOutList.find('.list > .item');
        items.unbind().click(function () {
            if (!$(this).hasClass('selected')) {
                items.removeClass('selected');
                $(this).addClass('selected');
                updateMoney(); // 更新资金
                var id = $(this).attr('data-id');
                initInDoc(id);
            }
        });
        items.eq(0).trigger('click');
        // 绑定输入框函数
        items.each(function () {
            var input = $(this).find('input');
            input.keyup(function () {
                if ($(this).val() == '') return;
                var val = Number($(this).val());
                var max = Number($(this).attr('data-max'));
                if (!isNaN(val)) {
                    if (val < 0) $(this).val(0);
                    if (val > max) $(this).val(max);
                } else {
                    $(this).val('');
                }
                updateMoney();
            });
            input.blur(function () {
                if ($(this).val() == '') {
                    $(this).val(0);
                }
                updateMoney();
            });
            var all = $(this).find('[data-command="all"]');
            all.unbind().click(function () {
                input.val(input.attr('data-max'));
                updateMoney();
            });
        });
    }

    var initInEvent = function () {
        var items = transInList.find('.list > .item');
        items.unbind().click(function () {
            if (!$(this).hasClass('selected')) {
                items.removeClass('selected');
                $(this).addClass('selected');
            }
        });
        items.eq(0).trigger('click');
    }

    loadUserTransfers();

    var kyBalance = ''; // ky钱包余额
    var mainAccountMoney = ''; // 主账户余额
    var agBalance = ''; // agin钱包余额
    var imBalance = ''; // im钱包余额
    // 获取各账户余额
    // 5,ag 6 im 7 ky
    var getAccountsBalance = function () {
        console.log('getAccountsBalance');
        $.ajax({
            type: 'get',
            url: '/yx/thirdGameApi/common/showThirdAmount?platformId=5',
            data: {},
            timeout: 30000,
            dataType: 'json',
            success: function (res) {
                console.log(res);
                agBalance = res.data;
                
                setTimeout(function() {
                  getSportBalance(function() {
                    getKYBalance(function() {
                      showAccountMoney();
                    });  
                  })  
                },1000)
                
            },
            error: function (showAccountMoney) {
                isLoading = false;
            }
        });
        /*$.ajax({
            type: 'post',
            url: '/yx/api/i/u/bank/getPcodeCbBaseList',
            data: {},
            timeout: 10000,
            dataType: 'json',
            success: function (res) {
                isLoading = false;
                if (res.code === 0) {
                    var arr = res.data;
                    if (arr && arr.length) {
                        for (var i = 0; i < arr.length; i++) {
                            arr[i].cbId === 'ky_01' && (kyBalance = arr[i].balance);
                            arr[i].cbId === 'agin_01' && (agBalance = arr[i].balance);
                            arr[i].cbId === 'im_01' && (imBalance = arr[i].balance);
                        }
                    }
                    showAccountMoney()
                } else {
                    App.alert('warning', '提示消息', res.message);
                }
            },
            error: function (showAccountMoney) {
                isLoading = false;
            }
        });*/
    }

    // 获取体育余额
    var getSportBalance = function(back) {
      $.ajax({
        type: 'get',
        url: '/yx/thirdGameApi/common/showThirdAmount?platformId=6',
        data: {},
        timeout: 30000,
        dataType: 'json',
        success: function (res) {
          console.log(res);
          imBalance = res.data;
          if (typeof back !='undefined') {
            back();    
          }
          //showAccountMoney();
        },
        error: function (showAccountMoney) {
          isLoading = false;
        }
      });
    }

    // 获取KY余额
    var getKYBalance = function(back) {
      $.ajax({
        type: 'get',
        url: '/yx/thirdGameApi/common/showThirdAmount?platformId=7',
        data: {},
        timeout: 30000,
        dataType: 'json',
        success: function (res) {
          console.log(res);
          kyBalance = res.data;
          if (typeof back !='undefined') {
            back();    
          }
          //showAccountMoney();
        },
        error: function () {
          isLoading = false;
        }
      });
    }

    // 获取主账户余额
    var getMainAccountMoney = function () {
        $.ajax({
            type: 'post',
            url: '/yx/game-lottery/init-page',
            data: {},
            timeout: 10000,
            dataType: 'json',
            success: function (response) {
                isLoading = false;
                mainAccountMoney = (response.data.lottery && response.data.lottery.availableBalance) || 0;
                getAccountsBalance();
            },
            error: function () {
                isLoading = false;
            }
        });
    }
    getMainAccountMoney();

    $('.transfer_money select').unbind().change(function () {
      showAccountMoney()
    })

    // 账户余额显示
    var showAccountMoney = function () {
        var thePageinner = $('.transfer_money');
        var from = thePageinner.find('[name="fromacc"]').val();
        var to = thePageinner.find('[name="toacc"]').val();
        var firstBalance = thePageinner.find('.first_acount span');
        var secBalance = thePageinner.find('.sec_acount span');
        //console.log(secBalance,'secBalancesecBalancesecBalance');
        if (from === 'sobet_01') {
            firstBalance.html(mainAccountMoney);
        } else if (from === 'ky_01') {
            firstBalance.html(kyBalance);
        } else if(from === 'im_01'){
            firstBalance.html(imBalance);
        } else {
            firstBalance.html(agBalance);
        }

        /*if (to === 'sobet_01') {
            secBalance.html(mainAccountMoney);
        } else if (to === 'ky_01') {
            secBalance.html(kyBalance);
        } else if (to === 'im_01') {
            secBalance.html(imBalance);
        } else {
            secBalance.html(agBalance);
        } */
        //alert(kyBalance);
        secBalance.html(kyBalance);
    }
    showAccountMoney();

    var doSelfUserTransfers = function (data) {
        if (!isLoading) {
            isLoading = true;
            App.blockUI({
                target: thisContent,
                boxed: true
            });
            $.ajax({
                type: 'post',
                url: '/yx/api/i/u/bank/playerTransfer',
                data: data,
                timeout: 10000,
                dataType: 'json',
                success: function (response) {
                    isLoading = false;

                    // App.unblockUI(thisContent);
                    if (response.code.toString() !== '0') {
                        return App.alert('info', '提示消息', response.message, 3000);
                    }
                    App.alert('info', '提示消息', response.message, 3000);
                    getMainAccountMoney();
                    thePageinner.find('[name="amount"]').val('');
                    thePageinner.find('[name="financial_psw"]').val('');
                    // loadUserTransfers();
                    // if (response.error == 0) {
                    //     App.alert('success', '提示消息', '您的资金已经转到指定账户！', 3000);
                    //     // AppLoop.init();
                    //
                    // }
                    // if (response.error == 1 || response.error == 2) {
                    //     App.alert('warning', '提示消息', response.message);
                    // }
                },
                error: function () {
                    isLoading = false;
                    App.unblockUI(thisContent);
                }
            });
        }
    }

    // var doSelfUserTransfers = function (data) {
    //     if (!isLoading) {
    //         isLoading = true;
    //         App.blockUI({
    //             target: thisContent,
    //             boxed: true
    //         });
    //         $.ajax({
    //             type: 'post',
    //             url: Route.PATH + '/account/apply-transfer',
    //             data: data,
    //             timeout: 10000,
    //             dataType: 'json',
    //             success: function (response) {
    //                 isLoading = false;
    //                 App.unblockUI(thisContent);
    //                 if (response.error == 0) {
    //                     App.alert('success', '提示消息', '您的资金已经转到指定账户！', 3000);
    //                     AppLoop.init();
    //                     loadUserTransfers();
    //                 }
    //                 if (response.error == 1 || response.error == 2) {
    //                     App.alert('warning', '提示消息', response.message);
    //                 }
    //             },
    //             error: function () {
    //                 isLoading = false;
    //                 App.unblockUI(thisContent);
    //             }
    //         });
    //     }
    // }

    // 点击确认第三方转账
    var thePageinner = $('.transfer_money');
    $('.inputlineBtn').unbind().click(function () {
        var from = thePageinner.find('[name="fromacc"]').val();
        var to = thePageinner.find('[name="toacc"]').val();
        var amount = Number(thePageinner.find('[name="amount"]').val()).toFixed(1);
        var psw = thePageinner.find('[name="financial_psw"]').val();
        //console.log(from,to,amount);
        // if ($('#reverse').hasClass('reversed')) {
        //   from = thePageinner.find('[name="toacc"]').val();
        //   to = thePageinner.find('[name="fromacc"]').val();
        // }
        if (!from) {
            return App.alert('info', '提示消息', '请选择转出账户！', 3000);
        }
        if (to === '') {
            return App.alert('info', '提示消息', '请选择转入账户！', 3000);
        }
        if (!from) {
            return App.alert('info', '提示消息', '转账账户不能相同！', 3000);
        }
        if (isNaN(amount)) {
            return App.alert('info', '提示消息', '暂未开启，敬请期待....', 3000);
        }
        // if (amount < 1) {
        //     return App.alert('info', '提示消息', '转账金额必须大于1元！', 3000);
        // }
        // if (amount > 10) {
        //     return App.alert('info', '提示消息', '转账金额必须小于等于10元！', 3000);
        // }
        if (!psw || psw.length < 7) {
            return App.alert('info', '提示消息', '资金密码错误！', 3000);
        }
        Will.ajax('', '/yx/api/i/u/bank/playerTransferRefreshToken', function (res) {
            var data = {
                turnOut: from,
                turnIn: to,
                cash: amount,
                payPasswd: md5(psw),
                token: res
            };

            doSelfUserTransfers(data);
        });
    });

    thisContent.find('input[name="submit"]').unbind().click(function () {
        var from = transOutList.find('.list > .item.selected').attr('data-code');
        var to = transInList.find('.list > .item.selected').attr('data-code');
        var amount = Number(transOutList.find('[data-field="amount"]').html());
        if (from == '') {
            return App.alert('info', '提示消息', '请选择转出账户！', 3000);
        }
        if (to == '') {
            return App.alert('info', '提示消息', '请选择转入账户！', 3000);
        }
        if (isNaN(amount)) {
            return App.alert('info', '提示消息', '请输入正确的金额！', 3000);
        }
        if (amount <= 0) {
            return App.alert('info', '提示消息', '转账金额必须大于0元！', 3000);
        }
        var data = {fromCode: from, toCode: to, amount: amount};
        doSelfUserTransfers(data);
    });

}

var initThisPage03_fin_simple = function () {
    var thisContent = $('[data-init="content"]').eq(2);
}
/*转账结束*/

/*充值记录开始*/
var initThisPage04_fin = function () {

    var thisContent03 = $('[data-init="content"]').eq(3);
    var params = thisContent03.find('.params');
    var thisResultTable = thisContent03.find('.result > table');

    initDatePicker();

    var getSearchParams = function () {
        var type = params.find('select[name="type"]').val();
        var billno = params.find('input[name="billno"]').val();
        var time = params.find('input[name="time"]').val();
        var sTime = time.split(' 至 ')[0];
        var eTime = time.split(' 至 ')[1];
        return {status: type, billno: billno, sTime: sTime + " 00:00:00", eTime: eTime + " 23:59:59"};
    }

    //查询充值记录
    Will.page(thisContent03, getSearchParams, Route.PATH + '/account/search-recharge', '没有查询到相关记录', function (list) {
        thisResultTable.find('tbody').empty();
        $.each(list, function (i, val) {
            var innerHtml =
                '<tr data-id="' + val.id + '">' +
                '<td>' + val.billno + '</td>' +
                '<td>' + DataFormat.formatUserRechargeType(val.method) + '</td>' +
                '<td>¥ ' + val.amount.toFixed(2) + '</td>' +
                /*'<td>¥ ' + val.balanceAfter.toFixed(2) + '</td>'+*/
                '<td>' + moment(val.orderTime).format('YYYY-MM-DD HH:mm:ss') + '</td>' +
                /*'<td><a title="' + val.infos + '" data-command="infos">详情</a></td>'+*/
                '<td>' + DataFormat.formatUserRechargeStatus(val.orderStatus) + '</td>' +
                '</tr>';
            thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="infos"]').jBox('Tooltip', {
            position: {x: 'right', y: 'center'},
            outside: 'x'
        });
    });
    params.find('input[name="submit"]').unbind().click(function () {
        Will.getPage(thisContent03).init();
    });

    

    //Will.getPage(thisContent03).init();
}

/*充值记录结束*/

/*提现记录开始*/
var initThisPage05_fin = function () {
    var thisContent04 = $('[data-init="content"]').eq(4);
    var params = thisContent04.find('.params');
    var thisResultTable = thisContent04.find('.result > table');
    initDatePicker();

    var getSearchParams = function () {
        var billno = params.find('input[name="billno"]').val();
        var time = params.find('input[name="time"]').val();
        var sTime = time.split(' 至 ')[0];
        var eTime = time.split(' 至 ')[1];
        return {billno: billno, sTime: sTime + " 00:00:00", eTime: eTime + " 23:59:59"};
    }
    //查询提现记录
    Will.page(thisContent04, getSearchParams, Route.PATH + '/account/search-withdraw', '没有查询到相关记录', function (list) {
        thisResultTable.find('tbody').empty();
        $.each(list, function (i, val) {
            var innerHtml =
                '<tr data-id="' + val.id + '">' +
                '<td>' + val.billno + '</td>' +
                //'<td>' + val.billno.substr(16) + '</td>'+
                '<td>¥ ' + val.amount.toFixed(2) + '</td>' +
                /*	'<td>¥ ' + val.feeAmount.toFixed(2) + '</td>'+
                    '<td>¥ ' + val.actualAmount.toFixed(2) + '</td>'+
                    '<td>¥ ' + val.balanceBefore.toFixed(2) + '</td>'+*/
                '<td>' + moment(val.orderTime).format('MM/DD HH:mm:ss') + '</td>' +
                '<td>' + DataFormat.formatUserWithdrawalsStatus(val.orderStatus) + '</td>';
            /*'<td><a title="' + val.infos + '" data-command="infos">详情</a></td>'+*/
            '</tr>';

            thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="infos"]').jBox('Tooltip', {
            position: {x: 'right', y: 'center'},
            outside: 'x'
        });


    });
    params.find('input[name="submit"]').unbind().click(function () {
        Will.getPage(thisContent04).init();
    });
    //Will.getPage(thisContent04).init();
}

/*提现记录结束*/

/*转账记录开始*/
var initThisPage06_fin = function () {

    var thisContent05 = $('[data-init="content"]').eq(5);
    var params = thisContent05.find('.params');
    var thisResultTable = thisContent05.find('.result > table');

    initDatePicker();

    var getSearchParams = function () {
        //var zbType = params.find('select[name="zbType"]').val();
        var zbType = '3';
        var billno = params.find('input[name="billno"]').val();
        var time = params.find('input[name="time"]').val();
        var sTime = time.split(' 至 ')[0];
        var eTime = time.split(' 至 ')[1];
        return {billno: billno, sTime: sTime + " 00:00:00", eTime: eTime + " 23:59:59", zbType: zbType};
    }
    //查询转账记录
    Will.page(thisContent05, getSearchParams, Route.PATH + '/account/search-zbrecord', '没有查询到相关记录', function (list) {
        thisResultTable.find('tbody').empty();
        $.each(list, function (i, val) {
            var innerHtml =
                '<tr>' +
                '<td>' + val.spsn.substr(8) + '</td>' +
                '<td>' + val.cn + '</td>' +
                '<td>' + val.createTime + '</td>' +
                '<td>' + val.changeTypeStr + '</td>' +
                '<td>' + val.changeTypeDetailStr + '</td>' +
                '<td>¥ ' + val.amount.toFixed(4) + '</td>' +
                '<td>¥' + val.point.toFixed(4) + '</td>' +
                '<td>' + String(val.note).replace(/\(.*\)/g, '') + '</td>' +
                /*'<td><a title="' + val.remarks + '" data-command="infos">详情</a></td>'+*/
                '</tr>';
            //console.log(String(val.note).replace(/\(.*\)/g,''));
            thisResultTable.find('tbody').append(innerHtml);
        });
        thisResultTable.find('a[data-command="infos"]').jBox('Tooltip', {
            position: {x: 'right', y: 'center'},
            outside: 'x'
        });


    });
    params.find('input[name="submit"]').unbind().click(function () {
        Will.getPage(thisContent05).init();
    });
    //Will.getPage(thisContent05).init();
}
/*转账记录结束*/

var initFinance = function () {
    var tabs = [initThisPage01_fin, initThisPage02_fin, initThisPage03_fin_simple, initThisPage04_fin, initThisPage05_fin, initThisPage06_fin]; //initThisPage03
    var allback = function () {
        ////console.log(typeof window.parent.resetWindowHight);
    }

    initThisPage03_fin();

    Will.changeTabs(tabs, allback);

    if (AppData.getLotteryAccount().isDividendAccount) {
        $('[data-visible="dividend"]').show();
    } else {
        $('[data-visible="dividend"]').hide();
    }

    //转账转换
    $('#reverse').click(function () {
        if (!$('#reverse').hasClass('reversed')) {
            $('#reverse').addClass('reversed')
            $("#select_acc_to").insertBefore($("#select_acc_from"));
        } else {
            $('#reverse').removeClass('reversed')
            $("#select_acc_from").insertBefore($("#select_acc_to"));
        }
    });

    $('select[data-type="static"]').dropkick({theme: "black", width: 120});
    $('select[data-type="static-bigger"]').dropkick({theme: "black", width: 190});
    //Will.changeTab();
    //AppLoop.init();
}
