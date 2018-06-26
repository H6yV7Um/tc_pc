$(function () {
    // console.log('tttttttttt')
    // 添加银行
    var bkCode = {
        'CEB': '光大银行',
        'PSBC': '中国邮政储蓄银行',
        'ABC': '中国农业银行',
        'CCB': '中国建设银行',
        'GDB': '广东发展银行',
        'BOCM': '交通银行',
        'NBBANK': '宁波银行',
        'HXB': '华夏银行',
        'HZCB': '杭州银行',
        'NJCB': '南京银行',
        'HKBEA': '东亚银行',
        'BCCB': '北京银行',
        'CMBC': '民生银行',
        'NBCB': '宁波银行',
        'SDB': '平安银行',
        'CGB': '广发银行',
        'BOB': '北京银行',
        'BOC': '中国银行',
        'CMB': '招商银行',
        'ICBC': '中国工商银行',
        'CITIC': '中信银行',
        'CIB': '兴业银行',
        'SPDB': '上海浦发银行'
    };
    var html = '<option value="">请选择开户银行</option>'
    for (var k in bkCode) {
        html += '<option value="' + k + '">' + bkCode[k] + '</option>';
    }
    $('.bank>select').html(html);
    var way = {
        QQ: [],
        ALipay: [],
        WeChat: [],
        ksrk: [],
        scan: [],
        cloud: [],
        bankscan:[],
        yunscan:[]
    };

    var getNick = function(back) {
      $.ajax({
        type: 'POST',
        data: '',
        url: '/yx/game-lottery/init-page',
        success: function (_nick) {
          console.log(_nick.data.main.nickname);
          $('#pay').attr('rel',_nick.data.main.nickname);
          if (typeof back !='undefined') {
            back(_nick.data.main.nickname) 
          }
        }
      });
    };

    getNick();

    var resetSecond = function() {
      $('.confirm').css('display', 'block');
      $('.scanInfo').css('display', 'none');$('.confirmInfo').css('display', 'none');
      $('#scanAmount').html('');
      $('#scanOrderNum').html('');
      $('.qrCode img').attr('src', '');
      $('.money>input').val('');
    }

    $.ajax({
        type: 'GET',
        url: '/yx/u/api/payment/request-all-method?_=1523583616579',
        async: false,
        success: function (_data) {
            //console.log(_data);
            if (_data.code === 0) {
                var data = _data.data;
                var thirdLEN = data.thridList.length;
                var qrCodeLEN = data.qrCodeList.length;
                var thridName = data.thridList
                var qrCodeName = data.qrCodeList
                for (var i = 0; i < thirdLEN; i++) {
                    var name = thridName[i].name
                    var thridObj = {
                        pid: thridName[i].id,
                        name: name,
                        type: 'third',
                        min: thridName[i].minUnitRecharge || 0,
                        max: thridName[i].maxUnitRecharge
                    }
                    if (hasName(name, 'QQ')) {
                        way.QQ.push(thridObj);
                    } else if (hasName(name, '微信')) {
                        way.WeChat.push(thridObj);
                    } else if (hasName(name, '银联') && String(name).indexOf('扫码')>-1) {
                        way.bankscan.push(thridObj);
                    }else if (hasName(name, '支付宝')) {
                        way.ALipay.push(thridObj);
                    } else if (hasName(name, '银') && String(name).indexOf('扫码')==-1) {
                        way.ksrk.push({
                            pid: thridName[i].id,
                            name: name,
                            type: 'third',
                            min: thridName[i].minUnitRecharge || 0,
                            max: thridName[i].maxUnitRecharge,
                            isBank: true
                        });
                    }
                }
                for (var j = 0; j < qrCodeLEN; j++) {
                    var nickName = qrCodeName[j].nickName;
                    var qrCodeObj = {
                        qrid: qrCodeName[j].id,
                        payway: qrCodeName[j].codeType,
                        fileByte: qrCodeName[j].fileByte,
                        min: qrCodeName[j].minUnitRecharge || 0,
                        max: qrCodeName[j].maxUnitRecharge,
                        type: 'scan'
                    }
                    if (hasName(nickName, 'QQ')) {
                        way.QQ.push(qrCodeObj);
                    } else if (hasName(nickName, '微信')) {
                        way.WeChat.push(qrCodeObj);
                    } else if (hasName(nickName, '支付宝')) {
                        way.ALipay.push(qrCodeObj);
                    } else if (hasName(nickName, '银行')) {
                        way.scan.push(qrCodeObj);
                    }  else if (hasName(nickName, '云闪付')) {
                        way.yunscan.push(qrCodeObj);
                    }
                    
                }
                console.log(way.bankscan,'bankscanbankscan');
                //console.log(way.yunscan,'yunscanyunscanyunscanyunscan');
            } else {
                popAlert('网络有误，请稍后再试！', '提示：');
            }
            ;

            function hasName(el, Name) {
                if (el.indexOf(Name) !== -1) {
                    return true;
                }
            }
        }
    }).done(function () {
        // 设置默认选项
        var data = undefined;
        if (way.ksrk.length === 0) {
            $('.money>input').attr('placeholder', '请输入正确的金额');
        } else {
            var ran = getRandomInt(0, way.ksrk.length - 1);
            data = way.ksrk[ran];
            //$('.money>input').attr('placeholder', '请输入' + min + '-' + max + '元');
        }
        // _inputPlaceholder(way.ksrk[random].min,wya.ksrk[random].max);
        // 给支付方式添加点击事件
        $('.ways>li').click(function () {
            var n = $('.ways>li').index($(this));
            //console.log(n);
            resetSecond();
            if (n === 0 && way.ksrk.length > 0) {
                var r = getRandomInt(0, way.ksrk.length - 1)
                data = way.ksrk[r];
                _inputPlaceholder(way.ksrk[r].min, way.ksrk[r].max);
            } else if (n === 0 && way.ksrk.length === 0) {
                console.log('清空！')
                _wayIsClose()
            } else if (n === 1 && way.scan.length > 0) {
                var r = getRandomInt(0, way.scan.length - 1)
                data = way.scan[r];
                _inputPlaceholder(way.scan[r].min, way.scan[r].max);
            } else if (n === 1 && way.bankscan.length > 0) {
                var r = getRandomInt(0, way.bankscan.length - 1);
                data = way.bankscan[r];
                _inputPlaceholder(way.bankscan[r].min, way.bankscan[r].max);
                //_wayIsClose()
            } else if (n === 2 && way.WeChat.length > 0) {
                var r = getRandomInt(0, way.WeChat.length - 1)
                data = way.WeChat[r];
                _inputPlaceholder(way.WeChat[r].min, way.WeChat[r].max);
            } else if (n === 2 && way.WeChat.length === 0) {
                _wayIsClose()
            } else if (n === 3 && way.ALipay.length > 0) {
                var r = getRandomInt(0, way.ALipay.length - 1)
                data = way.ALipay[r];
                _inputPlaceholder(way.ALipay[r].min, way.ALipay[r].max);
            } else if (n === 3 && way.ALipay.length === 0) {
                _wayIsClose()
            } else if (n === 4 && way.QQ.length > 0) {
                var r = getRandomInt(0, way.QQ.length - 1)
                data = way.QQ[r];
                _inputPlaceholder(way.QQ[r].min, way.QQ[r].max);
            } else if (n === 4 && way.QQ.length === 0) {
                _wayIsClose()
            } else if (n === 5 && way.cloud.length > 0) {
                var r = getRandomInt(0, way.cloud.length - 1)
                data = way.cloud[r];
                _inputPlaceholder(way.cloud[r].min, way.cloud[r].max);
            } else if (n === 5 && way.yunscan.length > 0) {
                //alert(n);
                var r = getRandomInt(0, way.yunscan.length - 1)
                data = way.yunscan[r];
                _inputPlaceholder(way.yunscan[r].min, way.yunscan[r].max);
                //_wayIsClose()
            }
            if ($(this).hasClass('active')) {
                return;
            } else {
                $('.ways>li').removeClass('active');
                $('.ways>li:nth-child(' + (n + 1) + ')').addClass('active');
            }
            ;
            // 判断是否显示开户银行选项
            if ($('.ways>li:first-child').hasClass('active')) {
                $('.bank').addClass('active');
            } else {
                $('.bank').removeClass('active');
            }
            //console.log(data);
        });

        function _inputPlaceholder(min, max) {
            $('.money>input').attr('placeholder', '请输入' + min + '-' + max + '元');
        }

        function _wayIsClose() {
            popAlert('此支付通道暂时关闭，请选择其他支付方式！', '提示：')
            $('.money>input').attr('placeholder', '请输入正确的金额');
            data = undefined;
        }

        var isStop = false;
        $('.confirm').click(function () {
            isStop = true;
            var isAmount = false;
            var paramsAmount = 0;
            if (isNumber(_amount())) {
                isAmount = true
                paramsAmount = _amount();
            } else {
                isAmount = false
            }
            //console.log('li的data');
            //console.log('confirm',data);

            // 确定支付渠道
            if (data === undefined) {
                popAlert('此支付通道暂时关闭，请选择其他支付方式！', '提示：');
            } else if (data.type === 'third') {
                var bankco = $('.bank>select>option:selected').val();
                if (data.isBank && $('.bank').hasClass('active')) {
                    if (bankco === '') {
                        popAlert('请选择开户银行！', '提示：');
                        return;
                    }
                }
                var thirdData = {
                    pid: data.pid,
                    bankco: bankco,
                    amount: paramsAmount
                }
                console.log(thirdData);
                if (isAmount) {
                    $.ajax({
                        type: 'POST',
                        data: thirdData,
                        url: '/yx/u/api/payment/request-thrid-pay',
                        success: function (_data) {
                            console.log('第三方')
                            if (_data.code === 0) {
                                $('.confirm').css('display', 'none');
                                $('.confirmInfo').css('display', 'block');
                                $('#thirdAmount').html(paramsAmount);
                                $('#thirdOrderNum').html(_data.data.billno);
                                // '复制'按钮事件；
                                var thirdCopy = new Clipboard('#thirdCopy');
                                thirdCopy.on('success', function (e) {
                                    e.clearSelection();
                                    console.log(e.text);
                                    popAlert('复制成功！', '提示：');
                                });
                                // "进入第三方支付"添加点击事件
                                $('.confirmSecond').click(function () {
                                    popSubmit(_data.data.link,_data.data.text);
                                    //$('#depositform').attr('action', _data.data.link);
                                    //$('#depositform>input').val(_data.data.text);
                                    //$('#depositform').submit();
                                });
                            }
                        }
                    });
                }
            } else if (data.type === 'scan') {
                var fixam = Number(paramsAmount)+ parseFloat(_.random(10,99)/100);
                if (data.payway=="4") {
                  fixam = Number(paramsAmount);  
                }
                console.log(fixam,'fixamfixam',$('#pay').attr('rel'));
                var scanData = {
                    pid:'',
                    amount: fixam,
                    fuYan:$('#pay').attr('rel')+':',
                    payWay: data.payway,
                    qrid: data.qrid
                }
                if (isAmount) {
                    $.ajax({
                        type: 'POST',
                        data: scanData,
                        url: '/yx/u/api/payment/request-transfer-pay',
                        success: function (_data) {
                            console.log('扫码支付');
                            console.log(_data);
                            if (_data.code === 0) {
                                $('.confirm').css('display', 'none');
                                $('.scanInfo').css('display', 'block');
                                $('#scanAmount').html(_data.data.amount);
                                $('#scanOrderNum').html(_data.data.billno);
                                // '复制'按钮事件；
                                var scanCopy = new Clipboard('#scanCopy');
                                scanCopy.on('success', function (e) {
                                    e.clearSelection();
                                    console.log(e.text);
                                    popAlert('复制成功！', '提示：');
                                });
                                $('.qrCode img').attr('src', 'data:image/gif;base64,' + data.fileByte);
                                // "完成"添加点击事件
                                $('.scanSecond').click(function () {
                                    // 刷新页面
                                    location.reload();
                                });
                            }
                        }
                    });
                }
            }
        });
        // $('.money>input').blur(function () {
        //     _amount();
        // })
        // 确定金额
        function _amount() {
            var amount = 0
            var val = $('.money>input').val()
            if (data !== undefined) {
                if (isNumber(val)) {
                    if (val > data.max) {
                        popAlert('您的充值金额已经超过' + data.max, '提示：');
                        $('.money>input').val('');
                    } else if (val < data.min) {
                        popAlert('您的充值金额小于' + data.min, '提示：');
                        $('.money>input').val('');
                    } else {
                        amount = val;
                        return amount;
                    }
                } else {
                    popAlert('请输入正确的金额！', '提示：');
                    return;
                };
            }
        }

        // 给各个金额添加点击事件
        $('.account>li').click(function () {
            var num = Number($(this).val());
            var money = Number($('.money>input').val());
            if (data !== undefined) {
                if (money > data.max) {
                    popAlert('您的充值金额已经超过' + data.max, '提示：');
                    // alert('您的充值金额已经超过50000！');
                } else if (money + num < data.min) {
                    popAlert('您的充值金额小于' + data.min, '提示：');
                } else {
                    $('.money>input').val(money + num);
                }
            } else {
                popAlert('此支付通道暂时关闭，请选择其他支付方式！', '提示：')
                $('.money>input').val('');
            }
        });
    });
});

// 生成随机数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 判断是否为数字
function isNumber(value) {         //验证是否为数字
    var patrn = /^(-)?\d+(\.\d+)?$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}

var popAlert = function (c, t) {
    if (typeof window.top.fsevenAlert != 'undefined') {
        window.top.fsevenAlert(c, t)
    } else {
        alert(c);
    }
}

var popSubmit = function (posturl, postxt) {
  //alert('111');
  if (typeof window.top.fsevenSubmit != 'undefined') {
    window.top.fsevenSubmit(posturl, postxt)
  } else {
    console.log('popSubmit');
  }
}