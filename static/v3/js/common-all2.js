//这个页面放所有公共的JS
(function($) {
    $.pagination = function(options) {
        var language = $.extend({}, $.pagination.language, options.language);
        var opts = $.extend({}, $.pagination.defaults, options);
        var render = $(opts.render);
        var page = 1,
            size = opts.pageSize;
        var load = function() {
            var data = opts.ajaxData;
            if ($.isFunction(data)) {
                data = data();
            }
            data = $.extend({}, data, { page: (page - 1), size: size });
            $.ajax({
                type: opts.ajaxType,
                url: typeof opts.ajaxUrl == 'string' ? opts.ajaxUrl : (Route.PATH + opts.ajaxUrl.attr('url')),
                data: data,
                dataType: 'json',
                beforeSend: opts.beforeSend,
                complete: opts.complete,
                success: function(response) {
                    if (String(response) == '-1') {
                        window.location.href = "/";
                        return false;
                    }
                    //console.log(response,'responseresponseresponse');
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message);
                            setTimeout(function() {
                                var domain = window.location.protocol + '//' + window.location.host;
                                window.location.href = domain + '/index.html';
                            }, 1000);
                            return;
                        } else {
                            App.alert('warning', '提示消息', response.message);
                        }
                    }
                    if (response.error == 0) {
                        if (response.data.totalCount && response.data.totalCount > 0) {
                            update(response.data.totalCount);
                            if (response.data.list && response.data.list.length > 0) {
                                opts.success(response.data.list);
                            } else {
                                if (page > 1) {
                                    page--;
                                    load();
                                }
                            }
                        } else {
                            opts.emptyData();
                            render.empty();
                        }
                    } else {
                        opts.pageError(response);
                    }
                }
            });
        };
        var update = function(totalCount) {
            if (totalCount == 0) return;
            var pageCount = Math.ceil(totalCount / size);
            var pagination = $('<div class="easyweb-pagination">');
            var infos = $('<div class="infos">');
            infos.append(language.infos.replace('${currPage}', '<span class="p">' + page + '</span>').replace('${totalPage}', '<span class="p">' + pageCount + '</span>').replace('${start}', '<span class="s">' + ((page - 1) * size + 1) + '</span>').replace('${end}', '<span class="e">' + (page * size > totalCount ? totalCount : page * size) + '</span>').replace('${total}', '<span class="t">' + totalCount + '</span>'));
            var pages = $('<div class="pages">');
            pages.append($('<a class="top">').html(language.top));
            pages.append($('<a class="prev">').html(language.prev));
            var pageLength = opts.pageLength;
            if (pageCount < pageLength) {
                pageLength = pageCount;
            }
            var startPage = page - (Math.ceil(pageLength / 2) - 1);
            var endPage = page + Math.floor(pageLength / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = pageLength;
            } else if (endPage > pageCount) {
                startPage = pageCount - pageLength + 1;
                endPage = pageCount;
            }
            for (var i = startPage; i <= endPage; i++) {
                var thisPage = $('<a class="page">').html(i);
                if (i == page) {
                    thisPage.addClass('selected');
                }
                pages.append(thisPage);
            }
            pages.append($('<a class="next">').html(language.next));
            pages.append($('<a class="end">').html(language.end));
            pages.find('.page').click(function() {
                var idx = $(this).html();
                idx = parseInt(idx);
                if (idx != page) {
                    page = idx;
                    load();
                }
            });
            pages.find('.top').click(function() {
                if (page > 1) {
                    page = 1;
                    load();
                }
            });
            pages.find('.prev').click(function() {
                if (page > 1) {
                    page--;
                    load();
                }
            });
            pages.find('.end').click(function() {
                if (page < pageCount) {
                    page = pageCount;
                    load();
                }
            });
            pages.find('.next').click(function() {
                if (page < pageCount) {
                    page++;
                    load();
                }
            });
            var go = $('<div class="go">').append($('<input type="text" />').val(page)).append($('<a class="btn-go">').html(language.go));
            go.find('.btn-go').click(function() {
                var idx = go.find('input[type="text"]').val();
                idx = parseInt(idx);
                if (idx > 0 && idx <= pageCount) {
                    if (idx != page) {
                        page = idx;
                        load();
                    }
                } else {
                    opts.pageError(language.msg);
                }
            });
            if (!opts.hideInfos) {
                pagination.append(infos);
            }
            pagination.append(pages);
            if (!opts.hideGo) {
                pagination.append(go);
            }
            render.html(pagination);
        };
        var init = function() {
            page = 1;
            load();
        };
        return {
            init: init,
            reload: load
        };
    };

    $.pagination.language = {
        //infos: '当前第${currPage}/${totalPage}页，显示${start}至${end}条数据，总计${total}条数据。',
        infos: '记录总数：${total}，页数：${currPage}/${totalPage}',
        top: '首页',
        end: '尾页',
        prev: '上一页',
        next: '下一页',
        go: '搜索',
        msg: '请输入正确的页数。'
    };

    $.pagination.defaults = {
        render: '.pagination',
        hideInfos: false,
        hideGo: false,
        pageLength: 6,
        pageSize: 10,
        ajaxType: 'post',
        ajaxUrl: '',
        ajaxData: {},
        beforeSend: function() {},
        complete: function() {},
        success: function(list) {},
        pageError: function(response) {
            alert(response.message);
        },
        emptyData: function() {

        }
    };
})(jQuery);

//轮播插件，不过只有fade的效果
(function($) {
    $.fn.BannerLoop = function(options) {
        var defaults = {
            focus: true,
            delay: 3000
        }
        var opts = $.extend({}, defaults, options);
        $(this).each(function() {
            var items = $(this).find('.list > .item');
            var loop = $(this).find('.loop');
            if (items.length <= 1) return;
            var index = 0;
            var show = function() {
                $.each(items, function(i) {
                    if ($(this).is(':visible')) {
                        $(this).stop().fadeOut(1500).removeClass('active');
                    }
                    if (i == index) {
                        $(this).stop().fadeIn(1500);
                    }
                });
                setLoop();
            }
            var setLoop = function() {
                loop.find('a').removeClass('active').eq(index).addClass('active');
            }
            var initLoop = function() {
                $.each(items, function(i) {
                    if (i == 0) {
                        loop.append('<a class="active"></a>');
                    } else {
                        loop.append('<a></a>');
                    }
                });
                loop.find('a').each(function(i) {
                    $(this).click(function() {
                        stop();
                        if (!$(this).hasClass('active')) {
                            index = i;
                            show();
                        }
                        start();
                    });
                });
                loop.show();
            }
            initLoop();
            var timer = null;
            var start = function() {
                timer = setInterval(function() {
                    if (index == items.length - 1) {
                        index = 0;
                    } else {
                        index++;
                    }
                    show(index);
                }, opts.delay);
            }
            var stop = function() {
                if (timer) clearInterval(timer);
            }
            start();
            if (opts.focus) {
                $(this).hover(stop, start);
            }
        });
    }
})(jQuery);


//判断页面是否需要登陆
! function() {
    if ($('html').attr('login') === 'true') {
        if (!AppData.isLogin()) {
            var domain = window.location.protocol + '//' + window.location.host;
            window.location.href = domain + '/index.html';
        }
    }
}()

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var QueryString = function() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();


var App = function() {

    var getGlobalImgPath = function() {
        return '/img';
    }

    var location = function() {
        return window.location.protocol + '//' + window.location.host;
    }

    var initScroll = function(el) {
        if (!el) el = '.scroller';
        $(el).each(function() {
            if ($(this).attr('data-initialized')) return;
            var color = $(this).attr('data-handle-color') ? $(this).attr('data-handle-color') : '#2AC1CA';
            var distance = $(this).attr('data-handle-distance') ? $(this).attr('data-handle-distance') : '0px';
            var alwaysVisible = $(this).attr('data-always-visible') ? true : false;
            var railVisible = $(this).attr('data-rail-visible') ? true : false;
            if (typeof $.slimScroll !== 'undefined') {
                $(this).slimScroll({
                    allowPageScroll: false,
                    size: '7px',
                    borderRadius: '0px',
                    color: color,
                    wrapperClass: 'slim-scroll',
                    distance: distance,
                    position: 'right',
                    height: 'auto',
                    alwaysVisible: alwaysVisible,
                    railVisible: railVisible,
                    disableFadeOut: true
                });
            }
            $(this).attr('data-initialized', 1);
        });
    }
    var destroyScroll = function(el) {
        $(el).each(function() {
            // destroy existing instance before updating the height
            if ($(this).attr("data-initialized") === "1") {
                $(this).removeAttr("data-initialized");
                $(this).removeAttr("style");
                var attrList = {};
                // store the custom attribures so later we will reassign.
                if ($(this).attr("data-handle-color")) {
                    attrList["data-handle-color"] = $(this).attr("data-handle-color");
                }
                if ($(this).attr("data-handle-distance")) {
                    attrList["data-handle-distance"] = $(this).attr("data-handle-distance");
                }
                if ($(this).attr("data-always-visible")) {
                    attrList["data-always-visible"] = $(this).attr("data-always-visible");
                }
                if ($(this).attr("data-rail-visible")) {
                    attrList["data-rail-visible"] = $(this).attr("data-rail-visible");
                }
                $(this).slimScroll({
                    wrapperClass: 'slim-scroll',
                    destroy: true
                });
                var the = $(this);
                // reassign custom attributes
                $.each(attrList, function(key, value) {
                    the.attr(key, value);
                });
            }
        });
    }
    var blockUI = function(options) {
        options = $.extend(true, {}, options);
        var html = '';
        if (options.animate) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
        } else if (options.iconOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/static/v3/images/loading-spinner-grey.gif" align=""></div>';
        } else if (options.textOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
        } else {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/static/v3/images/loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (options.message ? options.message : '正在加载中...') + '</span></div>';
        }
        //console.log(html,'htmlhth');
        if (options.target) { // element blocking
            var el = $(options.target);
            if (el.height() <= ($(window).height())) {
                options.cenrerY = true;
            }
            //console.log('herer');
            var hobj = {
                message: html,
                baseZ: options.zIndex ? options.zIndex : 1000,
                centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                css: {
                    top: '10%',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                    opacity: options.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            };
            //console.log(JSON.stringify(hobj),el);
            if (el.length > 0) {
                el.block({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                    css: {
                        top: '10%',
                        border: '0',
                        padding: '0',
                        width: '100%',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            }

        } else { // page blocking
            $.blockUI({
                message: html,
                baseZ: options.zIndex ? options.zIndex : 1000,
                css: {
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                    opacity: options.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            });
        }
    }
    var unblockUI = function(target) {
        if (target.length > 0) {
            $(target).unblock({
                onUnblock: function() {
                    $(target).css('position', '');
                    $(target).css('zoom', '');
                }
            });
        } else {
            if (typeof $.unblockUI !== 'undefined') {
                $.unblockUI();
            }
        }
    }
    var getUrl = function(key, isHash) {
        var path = window.location.search;
        if (isHash) path = window.location.hash;
        var search = path.substring(1),
            i, val, params = search.split("&");
        for (i = 0; i < params.length; i++) {
            val = params[i].split("=");
            if (val[0] == key) {
                return unescape(val[1]);
            }
        }
    }
    var getHash = function(key) {
        return getUrl(key, 1);
    }
    var confirm = function(type, title, content, autoClose, button1, button2, fn1, fn2, cls) {
        if (title == undefined) title = '确认消息';
        if (autoClose == undefined) autoClose = 0;
        if (button1 == undefined) {
            button1 = '确定<i class="icon ok"></i>';
        }
        if (button2 == undefined) {
            button2 = '取消<i class="icon close"></i>';
        }
        if (fn1 == undefined) fn1 = function() {};
        if (fn2 == undefined) fn2 = function() {};
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var box = new jBox('Confirm', {
            title: title,
            content: content,
            confirmButton: button1,
            cancelButton: button2,
            overlay: true,
            blockScroll: false,
            closeOnClick: false,
            closeButton: 'title',
            confirm: fn1,
            cancel: fn2,
            addClass: 'common-confirm' + (typeof cls != 'undefined' ? (' ' + cls) : ''),
            zIndex: 20000,
            onInit: function() {
                this.open();
            },
            onCloseComplete: function() {
                this.destroy();
                box = undefined;
            }
        });
        if (String(cls).indexOf('cancel-common') > -1) {
            AppData.jbox = box;
        }
        if (autoClose && autoClose != 0) {
            setTimeout(function() {
                if (box) box.close();
            }, autoClose);
        }
    }
    var alert = function(type, title, content, autoClose, button, fn, callback) {
        if (title == undefined) title = '提示消息';
        if (autoClose == undefined) autoClose = 0;
        if (button == undefined) {
            button = '关闭&nbsp;<i class="icon close">&#xe63b;</i>';
        }
        if (fn == undefined) fn = function() {}
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var jOpt = {
            title: title,
            content: content,
            confirmButton: button,
            overlay: true,
            closeOnClick: false,
            blockScroll: false,
            closeButton: 'title',
            confirm: fn,
            addClass: 'common-alert' + (button == '' ? ' noconfirm' : ''),
            zIndex: 20000,
            onInit: function() {
                this.open();
            },
            onCloseComplete: function() {
                this.destroy();
                box = undefined;
                if (callback != null && $.isFunction(callback)) {
                    callback();
                }

            }
        }

        if (typeof QueryString.iframe != 'undefined') {
            jOpt.position = {
                x: 'center',
                y: $('lottery #lottery-frame', window.parent.document).scrollTop() + window.parent.document.body.clientHeight / 2
            };
            //jOpt.fixed = true
            jOpt.offset = {
                x: 0,
                y: -180
            };
        }
        var box = new jBox('Confirm', jOpt);
        if (autoClose && autoClose != 0) {
            setTimeout(function() {
                if (box) box.close();
            }, autoClose);
        }
    }

    var alertLimit = function(boxid, type, title, content, autoClose, opened, button, fn, callback) {
        if (title == undefined) title = '提示消息';
        if (autoClose == undefined) autoClose = 0;
        if (button == undefined) {
            button = '关闭&nbsp;<i class="icon close"&#xe63b;</i>';
        }
        if (fn == undefined) fn = function() {}
        content = '<div class="msg">' + content + '</div>';
        if (type == 'warning') {
            title = '<i class="icon warning"></i>' + title;
            content = '<i class="icon warning"></i>' + content;
        }
        if (type == 'info') {
            title = '<i class="icon info"></i>' + title;
            content = '<i class="icon info"></i>' + content;
        }
        if (type == 'question') {
            title = '<i class="icon question"></i>' + title;
            content = '<i class="icon question"></i>' + content;
        }
        if (type == 'success') {
            title = '<i class="icon success"></i>' + title;
            content = '<i class="icon success"></i>' + content;
        }
        var jOpt = {
            id: boxid,
            title: title,
            content: content,
            confirmButton: button,
            overlay: true,
            closeOnClick: false,
            blockScroll: false,
            closeButton: 'title',
            confirm: fn,
            addClass: 'common-alert',
            zIndex: 20000,
            onOpen: function(t) {
                if (opened != null && $.isFunction(opened)) {
                    opened(t);
                }
            },
            onInit: function() {
                this.open();
            },
            onCloseComplete: function() {
                this.destroy();
                box = undefined;
                if (callback != null && $.isFunction(callback)) {
                    callback();
                }

            }
        }

        if (typeof QueryString.iframe != 'undefined') {
            jOpt.position = {
                x: 'center',
                y: $('lottery #lottery-frame', window.parent.document).scrollTop() + window.parent.document.body.clientHeight / 2
            };
            //jOpt.fixed = true
            jOpt.offset = {
                x: 0,
                y: -180
            };
        }
        var box = new jBox('Confirm', jOpt);
        if (autoClose && autoClose != 0) {
            setTimeout(function() {
                if (box) box.close();
            }, autoClose);
        }
    }
    var notice = function(content, autoClose) {
        if (autoClose == undefined) autoClose = 3000;
        var noticeBox = new jBox('Notice', {
            content: content,
            autoClose: autoClose,
            addClass: 'common-notice'
        });
    }
    var tips = function(title, content, autoClose) {
        $('.message-tips').remove();
        var messageTips = $('<div class="message-tips">');
        messageTips.append('<div class="title">' + title + '</div>');
        messageTips.append('<div class="content">' + content + '</div>');
        $('body').append(messageTips);
        var width = messageTips.width();
        var height = messageTips.height();
        var winWidth = $(window).width();
        messageTips.css({ bottom: -height, right: ((winWidth - 1050) / 2 - width) / 2 }).stop().animate({ bottom: 202 }, 1000, 'easeOutExpo');
        if (autoClose) {
            setTimeout(function() {
                messageTips.stop().animate({ bottom: -height, }, 1000, 'easeOutExpo', function() {
                    messageTips.remove();
                });
            }, autoClose);
        }
    }
    return {
        location: location,
        initScroll: initScroll,
        destroyScroll: destroyScroll,
        blockUI: blockUI,
        unblockUI: unblockUI,
        getUrl: getUrl,
        getHash: getHash,
        confirm: confirm,
        alert: alert,
        alertLimit: alertLimit,
        notice: notice,
        tips: tips
    }
}();



/**
 * 用户系统消息
 */
var UserSysMessage = function() {

    var idArray = [];
    var els = function() {
        return $('.sys-message-list');
    }

    // 更新方法
    var update = function(ids) {
        Will.ajax({ ids: ids }, Route.PATH + '/account/clear-system-message', function(data) {});
    }

    // 播放声音
    var audio = function() {
        if ($('.set-voice').find('.msg').hasClass('audio-on')) {
            $('audio#sys-message').remove();
            var audio = $('<audio id="sys-message" autoplay="autoplay">');
            audio.attr('src', '/audio/message.mp3').hide();
            $('body').append(audio);
        }
    }

    // 显示效果
    var show = function() {
        if (els().is(':hidden')) {
            var height = els().height();
            els().show().css({ bottom: -height }).stop().animate({ bottom: 0 }, 1000, 'easeOutExpo');
        }
    }

    // 隐藏效果
    var hide = function() {
        els().hide();
    }

    // 有新的消息
    var lastTime = '';

    var cleanHtml = function(str) {
        return $("<span />", { html: str }).text()
            //return str.replace('&lt;/div&gt;&lt;div&gt;','')
    }
    var add = function(data) {
        var count = 0;
        if (data && data.length > 0) {
            $.each(data, function(i, val) {
                if (lastTime && lastTime >= val.time) {
                    return;
                }
                var item =
                    '<div class="item"><a href="/userMessage#page=0_message" target="_blank">\
					<div class="title">\
						<span class="type">' + DataFormat.formatUserSysMessageType(val.type) + '</span>\
						<span class="time">' + moment(val.time).format('HH:mm:ss') + '</span>\
					</a></div>\
					<div class="text">' + cleanHtml(val.content) + '</div>\
				</div>';
                els().find('.list').prepend(item);
                idArray.push(val.id);
                count++;
            });
            if (count > 0) {
                show();
                audio();
            }
            lastTime = data[data.length - 1].time;
        }
    }

    // 初始化
    var init = function() {
        if (typeof AppData !== 'undefined' && !AppData.isLogin()) return;
        var mList = $('<div class="sys-message-list">');
        mList.append('<div class="title">通知列表<a class="closesys hand white rf">关闭</a><a class="cleanall hand rf">清空</a></div>');
        mList.append('<div class="wrapper"><div class="scroller" data-handle-color="#aaa" data-handle-distance="2px"><div class="list"></div></div></div>');
        mList.find('.closesys').click(function() {
            hide();
        });
        mList.find('.cleanall').click(function() {
            update(idArray.toString());
            idArray = [];
            els().find('.list').empty();
            hide();
        });
        if (!isMobile.any()) {
            $('body').append(mList);
        }
        App.initScroll('.scroller');
        start();
        var allname = [],
            realt = [];
        var taglink, tagname = '#allopenlt';
        if ($('#allopenlt').size() > 0) {
            taglink = $('#allopenlt a');
        }
        if ($('.gameport').size() > 0) {
            taglink = $('ul.gameport a');
            tagname = 'ul.gameport';
        }
        if (typeof taglink != 'undefined') {
            taglink.map(function(k, el) {
                if (typeof $(el).data('name') != 'undefined') {
                    allname.push($(el).text());
                }
            });
            var coder = {}
            $.ajax({
                type: 'post',
                url: Route.PATH + '/game-lottery/openLotterys',
                timeout: 10000,
                dataType: 'json',
                success: function(res) {
                    var allok = [],
                        allokid = [];
                    for (i = 0; i < res.data.length; i++) {
                        realt.push(String(res.data[i].code).toLowerCase())
                        coder[res.data[i].showName] = String(res.data[i].code).toLowerCase();
                        allok.push(String(res.data[i].code).toUpperCase());
                        allokid.push(res.data[i].id);
                    }
                    for (j = 0; j < allname.length; j++) {
                        if (typeof coder[allname[j]] == 'undefined') {
                            $(tagname + ' a[data-name="' + allname[j] + '"]').remove();
                        }
                    }
                    //console.log(LotteryMain,'LotteryMain',String(LotteryMain.getConfig().lottery).toUpperCase(),allok);
                    // && $.inArray(String(LotteryMain.getConfig().lottery).toUpperCase(), allok) == -1
                    /*if (typeof LotteryMain !='undefined') {
                      App.alert('info','提示消息','该彩种停售  <a href="/yx/home">返回首页</a>',0,'关闭<i class="icon close"></i>',function() {
                        location.href='/yx/home';
                      },function() {
                        location.href='/yx/home';
                      });
                    } */
                    //剔除导航停售彩种
                    $('.lottery_menu ol li').each(function(i, el) {
                        var allhref = $(el).find('a').attr('href');
                        var re = /(\d+)/g;
                        var found = allhref.match(re);
                        if (found.length > 0) {
                            if ($.inArray(parseInt(found[0], 10), allokid) == -1) {
                                $(el).remove()
                            }
                        }
                    });
                    //剔除首页下面停售彩种
                    $('.gameport ol li').each(function(i, el) {
                        var allhref = $(el).find('a').attr('href');
                        var re = /(\d+)/g;
                        var found = allhref.match(re);
                        if (found.length > 0) {
                            if ($.inArray(parseInt(found[0], 10), allokid) == -1) {
                                $(el).remove()
                            }
                        }
                    });
                }
            });
        }
    }

    // 推送PUSH初始化
    var initpush = function() {
        var getCookie = function(cookieName) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (cookieName == arr[0]) {
                    return arr[1];
                }
            }
            return "";
        }
        var sig = getCookie("SIG");
        //console.log(sig,'sigsigsig');
        if (typeof socketUrl == 'undefined' || String(socketUrl).indexOf('192.168') > 0) {
            socketUrl = location.hostname;
            //return false;
        }
        if (String(socketUrl).indexOf('www') < 0) {
            socketUrl = String(location.host).replace('localhost', 'www');
        }

        if (typeof io !== 'undefined') {
            var socket = io.connect(socketUrl);
            socket.on('connect_error', function() {
                console.log('推送服务无法连接');
                socket.disconnect();
            });
            socket.on('login', function() {
                console.log('登录socket成功，准备接受推送');
            });

            socket.on('connect', function() {
                var userName = $('span[data-user-name]').html();
                var jsonObject = {
                    userName: $('[data-field="username"]').text(),
                    sig: sig,
                    type: '3',
                    appId: '5'
                };
                console.log(jsonObject, 'jsonObjectjsonObjectjsonObject');

                socket.emit('login', jsonObject);
            });

            var seconds = parseInt(Math.random() * 3000);
            setTimeout(function() {
                socket.on('message', function(data) {
                    data = JSON.parse(data);
                    console.log(data);
                });
            }, seconds);

            socket.on('disconnect', function() {
                // console.log('disconnect');
            });
        }
    }

    var start = function() {
        if (typeof Route !== 'undefined' && typeof Route.PATH !== 'undefined') {
            Will.ajax({}, Route.PATH + '/account/list-system-message', function(data) {
                add(data);
                //console.log(data,'sys');
            });

            setTimeout(start, 60000);
        }
    }

    return {
        init: init,
        initpush: initpush,
        add: add
    }

}();

var load = function(name) {
    //$.ajaxSetup({async: false});
    //$(".bar").load("/bar.html")
    if (arguments.length == 1) $('.' + name).load('/include-' + name + '.html');
    if (arguments.length == 2) arguments[0].load(arguments[1]);
    $.ajaxSetup({ async: true });
}

//各种通用的函数
var Will = function() {
    var callbacks = [];

    return {
        ajax: ajax,
        initBox: initBox,
        getBox: getBox,
        page: page,
        getPage: getPage,
        tabs: tabs,
        changeTab: changeTab,
        changeTabs: changeTabs,
        addHashChange: addHashChange
    }

    function addHashChange(callback) {
        callbacks.push(callback);
    }

    function changeTabs(initPages, callback) {

        if (callback) { addHashChange(callback); }
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        var hindex = App.getHash('page');
        var hpage = hindex.split('_')[1];
        //console.log(hindex,'hindexhindexhindex');
        manager.each(function(idx, ele) {
            if (!$(ele).hasClass('fixed') && !$(ele).hasClass('disabled')) {
                $(ele).attr('href', '#page=' + idx + '_' + hpage);
            }
        });

        //console.log(callback,callback==null,hindex);
        if ($(".manager .nav > a:eq(" + hindex + ")").hasClass('disabled')) {
            //console.log($(".manager .nav > a:not(.disabled)").first().attr('href'));
            window.location.hash = $(".manager .nav > a:not(.disabled)").first().attr('href');
        }
        var change = function() {
            var index = App.getHash('page'),
                pagetag = '';
            if (String(index).indexOf('_') > -1) {
                index = String(index).split('_')[0];
                pagetag = String(index).split('_')[1];
            }
            //console.log(index,'indexindexindex');
            if (index && typeof initPages[index] == 'function') {
                var page = $(".manager .nav > a").eq(index);

                initPages[index]();
                page.addClass('active').siblings().removeClass('active');
                if (typeof content.eq(index).attr('manually-hide') == 'undefined') {
                    content.eq(index).show();
                }
                content.eq(index).siblings('[data-init="content"]').hide();

                if (callbacks.length > 0) {
                    for (idx in callbacks) {
                        var callback = callbacks[idx];

                        if ($.isFunction(callback)) callback();
                    }
                }
            }
        };
        change();
        window.onhashchange = change;
    }

    //带参数的URL查询,refresh,page必填 deprecated
    function changeTab(callback) {
        var change = function() {
            if (window.location.hash == '' || !App.getHash('refresh')) return;
            var index = App.getHash('page');
            if (index) {
                $(".manager .nav > a").eq(index).click();
                // 			}else{
                if ($.isFunction(callback)) callback();
            }
        };
        // 		change();
        window.onhashchange = change;
    }
    //manager五个页面的tab切换 deprecated
    function tabs(initPages) {
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        var index = App.getHash('page');
        manager.each(function(idx, ele) {
            if (idx == 2) $(ele).attr('href', '#page=' + idx + '&refresh=1');
            else $(ele).attr('href', '#page=' + idx);
        });
        manager.click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            var i = $(this).index();
            content.eq(i).show();
            content.eq(index).siblings('[data-init="content"]').hide();
            // 			 if(!$(this).data('initialized')) {
            // 			 	initPages[i]=initPages[i]();
            initPages[i]();
            // 				$(this).data('initialized',true);
            // 			 }
        }).eq((index ? index : 0)).click();
    };

    //分页插件的封装
    function page(thisContent, data, url, emptyInfo, successCallback) {
        var thisContent = thisContent;
        //console.log(url,'urlurlurlurlurlurlurl');
        // 		var params = thisContent.find('.params');
        var thisResultTable = thisContent.find('.result > table');
        //console.log(thisContent.find('.result').size());

        if (thisContent.find('.result').size() > 1) {
            thisResultTable = thisContent.find('.result:eq(1) > table');
        }
        if (thisContent.find('.result').size() > 2) {
            thisResultTable = thisContent.find('.result:eq(2) > table');
        }
        var searching = url + '/searching';
        // 		!thisContent.data(searching)
        var pagination = $.pagination({
            render: thisContent.find('.page-list'),
            pageSize: 10,
            ajaxType: (typeof data.posttype != 'undefined' ? data.posttype : 'post'),
            ajaxUrl: url,
            ajaxData: data,
            beforeSend: function() {
                thisContent.data(searching, true);
                App.blockUI({
                    target: thisContent,
                    boxed: true
                });
            },
            complete: function() {
                thisContent.data(searching, false);
                App.unblockUI(thisContent);
            },
            success: function(list) {
                successCallback(list);
            },
            pageError: function(response) {
                thisContent.data(searching, false);
            },
            emptyData: function() {
                //console.log('emptyData',thisContent,thisResultTable);
                thisContent.data(searching, false);
                var emptyHtml = '<tr class="nodata"><td colspan="20">' + emptyInfo + '</td></tr>';
                thisResultTable.find('tbody').html(emptyHtml);
            }
        });
        thisContent.data('pagination', pagination);
    }

    function getPage(thisContent) {
        return thisContent.data('pagination');
    }
    //ajax的封装
    function ajax(data, url, successCallback, errorCallback, isAsync) {
        var asyncc = isAsync === 0 ? false : true
        var thisContent = $('[data-init="content"]');
        var datadom = $('body');
        var loading = url + '/loading';
        if (!datadom.data(loading)) {
            datadom.data(loading, true);
            App.blockUI({
                target: thisContent,
                boxed: true
            });
            $.ajax({
                type: 'post',
                url: url,
                data: data,
                timeout: 10000,
                dataType: 'json',
                async: asyncc,
                success: function(response) {
                    datadom.data(loading, false);
                    App.unblockUI(thisContent);
                    if ((typeof(response.error) == "undefined")) { //没有error,code,message的返回情况
                        if ($.isFunction(successCallback)) successCallback(response);
                        return;
                    }
                    //console.log(url);
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message, 5000);
                            setTimeout(function() {
                                var domain = window.location.protocol + '//' + window.location.host;
                                window.location.href = domain + '/index.html';
                            }, 3000);
                            return;
                        } else {
                            if (String(url).indexOf('apply-transfer') > -1) {
                                App.alert('warning', '提示消息', (String(response.message).indexOf('冻结') > -1 ? '转账未开通' : response.message), 5000);
                            } else {
                                if (String(url).indexOf('zj-bonus') > -1) {
                                    App.alert('warning', '提示消息', (response.message == '服务异常' ? '分红未配置' : response.message), 5000);
                                } else {
                                    App.alert('warning', '提示消息', (response.message != '' ? response.message : '失败，原因未知'), 5000);
                                }
                            }

                            if (String(window.location.pathname).indexOf('manager-finance') > -1) {
                                setTimeout(function() {
                                    window.location.reload();
                                }, 3000);
                            }
                        }
                        if ($.isFunction(errorCallback)) errorCallback(response.data, response);
                    }
                    if (response.error == 0) {
                        if ($.isFunction(successCallback)) successCallback(response.data, response);
                    }
                },
                error: function() {
                    //App.alert('warning', '提示消息', '连接失败，请稍候重试！');
                    datadom.data(loading, false);
                    App.unblockUI(thisContent);
                }
            });
        }
    }
    //详情弹出框的封装
    function initBox(title, content, width, height, onInitCallback, clz) {
        var box = $('body').data('box');
        if (box == undefined) {
            box = new jBox('Modal', {
                width: width,
                height: height,
                title: title,
                overlay: true,
                closeOnClick: false,
                blockScroll: false,
                animation: { open: 'zoomIn' },
                closeButton: 'title',
                draggable: 'title',
                content: content,
                addClass: (clz ? clz : 'common-modal grey'),
                onOpen: function(a) {
                    //console.log(a,,'aaaaaaaaaa');
                    //App.initScroll('.scroller');
                },
                onInit: function() {
                    this.open();
                    //initEvent(thisContent, callback);
                    if ($.isFunction(onInitCallback)) onInitCallback(this);
                    App.initScroll();
                },
                onCloseComplete: function() {
                    this.destroy();
                    $('body').removeData('box');
                }
            });
            $('body').data('box', box);
        } else {
            box.toggle();
        }
        return box;
    }

    function getBox() {
        return $('body').data('box')
    }
}()


/**
 * 加载彩票列表
 */
var loadLottery = function(callback) {
    Will.ajax({}, Route.PATH + '/game-lottery/static-info', function(data, response) {
        if ($.isFunction(callback)) {
            callback(data);
        }
    });
}

/**
 * 初始化日期控件
 */
var initDatePicker = function() {
    //console.log('initDatePickerinitDatePickerinitDatePicker');
    if ($('.d-range-picker').size() == 0 && $('.date-picker').size() == 0) return;
    var opts = {
        format: 'YYYY-MM-DD',
        separator: ' 至 ',
        ranges: {
            '今天': [moment(), moment().add(1, 'days')],
            '最近三天': [moment().subtract(2, 'days'), moment().add(1, 'days')],
            '最近七天': [moment().subtract(6, 'days'), moment().add(1, 'days')]
        },
        locale: {
            applyLabel: '确认',
            cancelLabel: '清除',
            fromLabel: '开始',
            toLabel: '结束',
            customRangeLabel: '自定义日期',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    }
    $('.d-range-picker').each(function() {
        var opens = $(this).attr('data-time-opens');
        opts.opens = opens ? opens : 'left';
        var init = $(this).attr('data-time-init');
        if (init) {
            if (init > 0) {
                $(this).val(moment().format('YYYY-MM-DD') + ' 至 ' + moment().add(init, 'days').format('YYYY-MM-DD'));
            } else {
                $(this).val(moment().add(0, 'days').format('YYYY-MM-DD') + ' 至 ' + moment().add(0, 'days').format('YYYY-MM-DD'));
            }
        }
        $(this).daterangepicker(opts);
    });

    if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            orientation: 'left',
            autoclose: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
    }
}

/**
 * 初始化选项卡
 */
var initTabs = function() {
    $('.tabs').each(function() {
        var tabs = $(this).find('a');
        var panels = $(this).parent().find('.panels > .section');
        tabs.each(function(i) {
            $(this).click(function() {
                if (!$(this).hasClass('active')) {
                    tabs.removeClass('active');
                    $(this).addClass('active');
                    panels.removeClass('active');
                    panels.eq(i).addClass('active');
                }
            });
        })
    });
}

//加减乘除计算
var compt = function() {
    function add(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
    }

    function sub(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
    }

    function mul(a, b) {
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    }

    function div(a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
    }
    return {
        add: add,
        sub: sub,
        mul: mul,
        div: div
    }
}();

var disableRightClick = function() {
    $(this).contextmenu(function() {
        return false;
    });
    $(this).mousedown(function(e) {
        if (e.button == 2) return false;
    });
}

var showOrNotShow = function() {
    if (typeof AppData !== 'undefined' && !AppData.isLogin()) {
        $('#login-form').show();
        $('#will-user-info').hide();
        return false;
    } else {
        $('#login-form').hide();
        $('#will-user-info').show();
        // 隐藏或显示代理账户
        if (typeof AppData !== 'undefined' && AppData.getMainAccount().type == 0) {
            $('[data-visible="proxy"]').hide();
            $('#agtmenulink').remove();
        } else {
            $('[data-visible="proxy"]').show();
        }
    }
}

var kefu = function() {
    //在线客服弹出框
    $('a[data-command="kefu"]').each(function() {
        var url = 'https://messenger.providesupport.com/messenger/1nzu248s6uvbl0vs7xpqne8l5p.html';
        if (AppData.isLogin()) {
            var username = AppData.getMainAccount().username;
            if (username) {
                url += '?username=' + username;
            }
        }
        $(this).attr('href', url);
        $(this).attr('target', '_blank');
    });
}
var kevinLotteryall = [];
var getLeftSec = function(a) {
    if (typeof LotteryUtils != 'undefined' && LotteryUtils.namespace == 'ssc' && LotteryMain.namespace == 'ssc') {
        LotteryScript['/static/v3/js/game/lottery.ssc.js'] = { 'LotteryUtils': LotteryUtils, 'LotteryMain': LotteryMain };
    }

    var randompercent = function() {
            return Math.floor(Math.random() * (100 - 0 + 1) + 0);
        }
        //console.log(typeof $('.lottery-navs ul').data('loading'));
    if (typeof $('.lottery-navs ul').data('loading') == 'undefined') {
        $('.lottery-navs ul').data('loading', 1);
        typeof Api != 'undefined' && Api.getCommon('getFavGame', { t: new Date().getTime() }, function(res) {
            var ltall = ['<li class="title"><img src="/static/v3/images/lotteryType.png" alt="">常玩彩种</li>'],
                allres = res.data;
            var allopenid = [];
            for (i = 0; i < allres.length; i++) {
                if (String(allres[i].lotteryName).indexOf('微信') == -1 && allres[i].lotteryId != '113') {
                    allopenid.push(allres[i].lotteryId)
                    var hrefpath = '/yx/hbs/lottery/' + allres[i].lotteryId + '.html';
                    if (location.hash != '') {
                        hrefpath = '#' + allres[i].lotteryId + '';
                    }
                    ltall.push('<li class="mylt_' + allres[i].lotteryId + ' normal' + (i == 0 ? ' first' : '') + '' + (i == allres.length - 1 ? ' last' : '') + '"><div class="bg_loading" rel="' + allres[i].lotteryId + '" style="width:' + randompercent() + '%;"></div><a href="' + hrefpath + '" target="_self"><div class="lt-choose"><h3>' + allres[i].lotteryName + '</h3><span id="tc_' + allres[i].lotteryId + '" data-left="' + allres[i].surplusTime + '" class="lt-countdown">00:00</span></div></a></li>')
                }
            }
            kevinLotteryall = allopenid;
            ltall.push('<li class="ingap"></li><li class="control"><a href="#" data-position="center" data-toggle="modal" data-target="#saveMy"><em class="icon">&#xe698;</em><span class="txtgap">自定义</span></a></li><li class="end"><div class="lt-choose-sets"></div></li>')
            if (a == null) {
                $('.lottery-navs > ul').html(ltall.join(''));
            } else {
                $('.lottery-navs .lt-countdown').eq(a).data('left', allres[a].surplusTime);
            }
            $('.lottery-navs ul').data('open', allopenid);
            if (typeof GameData !== 'undefined') {
                var ginfo = GameData.getInfo();
                if (typeof ginfo != 'undefined') {
                    if ($('.mylt_' + ginfo.id).size() > 0) {
                        $('.mylt_' + ginfo.id).addClass('on')
                    }
                }
            }
            $('.lottery-navs ul').removeData('loading');
        });
    }

    if (typeof $.cookie != 'undefined' && typeof $.cookie('WIN-VOICE') != 'undefined' && $.cookie('WIN-VOICE') == 'ON') {
        $('.audio-sw').find('.m_dotcycle').animate({ left: "0px" }, 200, function() {
            //tsw.find('.m_bigger').html('&#59045;');
        });
        $('.set-sound').find('.sound_status').html('开');
        $('.set-sound').removeClass('juston');
    } else {
        $('.audio-sw').find('.m_dotcycle').animate({ left: "16px" }, 200, function() {
            //tsw.find('.m_bigger').html('&#59045;');
        });
        $('.set-sound').find('.sound_status').html('关');
        $('.set-sound').addClass('juston');
    }

    $('.set-sound').off('click').on('click', function() {
        var tsw = $(this);
        if (!$(this).hasClass('juston')) {
            setCookie('WIN-VOICE', 'OFF');
            $(this).find('.sound_status').html('关');
            $(this).addClass('juston');
            $(this).find('.m_dotcycle').animate({ left: "16px" }, 200, function() {
                //tsw.find('.m_bigger').html('&#59046;');
            });
        } else {
            setCookie('WIN-VOICE', 'ON');
            $(this).find('.sound_status').html('开');
            $(this).removeClass('juston');
            $(this).find('.m_dotcycle').animate({ left: "0px" }, 200, function() {
                //tsw.find('.m_bigger').html('&#59045;');
            });
        }
    });

    $('.audio-sw').off('click').on('click', function() {
        var tsw = $(this);
        if (!$(this).hasClass('juston')) {
            setCookie('WIN-VOICE', 'OFF');
            //$(this).find('.sound-status').html('开');
            $(this).addClass('juston');
            $(this).removeClass('audio-on');
            $(this).addClass('audio-off');

            //tsw.find('.m_bigger').html('&#59046;');
            //$(this).find('.m_bigger').html('&#59046;');
            //  $(this).find('.m_dotcycle').animate({left:"16px"},200, function() {
            //tsw.find('.m_bigger').html('&#59046;');
            //  });//.css({left:'16px'});
        } else {
            setCookie('WIN-VOICE', 'ON');
            //$(this).find('.sound-status').html('关');
            $(this).removeClass('juston');
            $(this).removeClass('audio-off');
            $(this).addClass('audio-on');
            //  tsw.find('.m_bigger').html('&#59045;');
            //  $(this).find('.m_dotcycle').animate({left:"0px"},200, function() {
            //tsw.find('.m_bigger').html('&#59045;');
            //});//.css({left:'0px'});
        }
    });

}

var getLeftOnlySec = function(a) {
    //console.log('getLeftOnlySec');
    var fmsec = function(value) {
        var theTime = parseInt(value); // 秒
        var inTime = parseInt(value);
        var theTime1 = 0; // 分
        var theTime2 = 0; // 小时
        // alert(theTime);
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            // alert(theTime1+"-"+theTime);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
            }
        }
        //console.log(theTime,theTime1,theTime2);
        if (theTime > 0) {
            var result = "00:" + (parseInt(theTime) > 9 ? parseInt(theTime) : ("0" + parseInt(theTime))) + "";
            if (theTime1 > 0) {
                result = "" + (parseInt(theTime) > 9 ? parseInt(theTime) : ("0" + parseInt(theTime))) + ""
                result = "" + (parseInt(theTime1) > 9 ? parseInt(theTime1) : ("0" + parseInt(theTime1))) + ":" + result;
            }
            if (theTime2 > 0) {
                result = "" + (parseInt(theTime2) > 9 ? parseInt(theTime2) : ("0" + parseInt(theTime2))) + ":" + result;
            }
        } else {
            result = '00:00';
        }

        return result;
    }

    typeof Api != 'undefined' && Api.getCommon('getFavGame', { t: new Date().getTime() }, function(res) {
        //console.log(res,'only');
        var renewsec = res.data;
        for (i = 0; i < renewsec.length; i++) {
            $('#tc_' + renewsec[i].lotteryId).data('left', renewsec[i].surplusTime).html(fmsec(renewsec[i].surplusTime));
        }
        $('.lottery-navs ul').removeData('loading');
    });
}

var getViewport = function() {
    var viewPortWidth;
    var viewPortHeight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
    }
    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

var getVrGame = function() {
        //console.log('vrlogin');
        Api.getCommon('vrlogin', { t: new Date().getTime() }, function(vrlg) {
            //console.log(vrlg,'vrlgvrlg',vrlg.data);
            var vrurl = '/yx/u/api/game/vr'
            $('#top-lt-list #vrgame').size() > 0 ? $('#top-lt-list #vrgame').attr('href', vrurl) : !0;
            if ($('#nav-ltmenu #vrgame').size() > 0) {
                $('#nav-ltmenu #vrgame').attr('href', vrurl);
            }
        });
    }
    //[11,46,151,911,161,119,711,6,811,191,200,601,201,51,202,203,205,206]

var sscorder = [11, 161, 151, 6, 119, 161, 51, 711, 811, 46, 203];
var sscorder1 = [911, 205, 206, 191, 601];
var sscorder2 = [200, 201, 202];
var sscorder3 = [711, 811, 601, 51, 203, 46];
var sscorder4 = [6, 191, 46, 911, 119, 205, 206];
var sscorder5 = [200, 201, 202];
var sscorder6 = [41, 42];
var xuanorder = [21, 22, 23, 24, 25, 26, 28];
//var otherorder = [47,204,43,41,42];
var otherorder = [204, 31, 32, 33, 34, 35, 36, 43, 47];
var classicorder = [80, 85, 86, 87, 90, 100, 110];

var fullsscorder = [];
if (typeof _ != 'undefined') {
    fullsscorder = _.union(sscorder, sscorder1, sscorder2, sscorder3);
}

$(document).ready(function() {
    var kevinonlineLotterys = [];

    function kevin_uniqueLotterys(arr1, arr2, idx, result) {
        if (idx >= arr1.length) return (result = false, result);
        result = false;
        for (var i = 0, l = arr2.length; i < l; i++) {
            if (arr1[idx] == arr2[i]) result = true;
        }
        if (!result) return result = arr1[idx], result;
        idx++;
        return kevin_uniqueLotterys(arr1, arr2, idx, result);
    }
    location.pathname != '/static/help.html' && typeof AppLoop !== 'undefined' && AppLoop.init();
    //屏蔽右键
    //disableRightClick();
    //系统消息初始化
    UserSysMessage.init();
    //推送消息初始化
    UserSysMessage.initpush();
    //隐藏或显示代理账户相关功能
    showOrNotShow();
    //初始化日期控件
    initDatePicker();
    //在线客服弹出框
    kefu();
    //帮助
    $('.fhelp').off('click').on('click', function() {
        var titlechs = $(this).text();
        var topoff = parseInt($(this).attr('rel'), 10);
        BootstrapDialog.show({
            title: titlechs,
            size: 'size-wide',
            message: $('<div class="floathelpbox"></div>').load('/static/help/content.html'),
            onshown: function() {
                $('.floathelpbox').scrollTop(topoff);
            }
        });
    });
    //彩种顶部菜单
    var allltdict = {};

    function inArray(item, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i;
            }
        }
        return -1;
    };
    let gameClassifyArr = [
        { name: '时时彩', idArr: [11, 161, 151, 6, 119, 161, 51, 711, 811, 46, 203] },
        { name: '官方时时彩', idArr: [911, 205, 206, 191, 601] },
        { name: '菲律宾', idArr: [200, 201, 202] },
        //    {name : '全天彩', idArr: []},
        { name: '11选5', idArr: [21, 22, 23, 24, 25, 26, 28] },
        { name: '低频彩', idArr: [41, 42] },
        { name: '其他', idArr: [204, 31, 32, 33, 34, 35, 36, 43, 47] },
        { name: '经典', idArr: [80, 85, 86, 87, 90, 100, 110] }
    ];
    //console.log(typeof Api,'ApiApi');typeof Api !='undefined' &&
    Api.getCommon('onlineLotterys', { t: new Date().getTime() }, function(res) {
            let obj = res.data;
            let temporary = {};
            let i = 0;
            for (let k in obj) {
                if (i < 10) {
                    i++;
                    temporary[k] = obj[k]
                }
            }
            let o = Object.assign({}, obj);

            obj && obj.forEach(function(item) {
                    for (let i = 0; i < gameClassifyArr.length; i++) {
                        let single = gameClassifyArr[i];
                        if (inArray(item.id, single.idArr) > -1) {
                            single.objArr = single.objArr || [];
                            single.objArr.push(item);
                        }
                    }
                })
                //console.log(res);
            var ltall = [],
                fullltssc = [],
                trendlts = [],
                allres = res.data;
            var ltssc = [],
                ltssc1 = [],
                ltssc2 = [],
                ltssc3 = [],
                ltssc4 = [],
                ltxuan = [],
                ltclassic = [],
                ltkuai = [],
                ltother = [],
                otherdict = {};
            var hotlt = [1, 9, 13],
                newlt = [8, 15, 7];
            var hottag = function(id) {
                if ($.inArray(id, hotlt) > -1) {
                    return '<em class="m_ico">&#59190;</em>'
                }
                return '';
            }
            var newtag = function(id) {
                if ($.inArray(id, newlt) > -1) {
                    return '<em class="m_ico">&#59249;</em>'
                }
                return '';
            }
            var iddict = {};
            var formatlink = function(id) {
                return '/static/lt.html#' + id + '';
                //return '/yx/hbs/lottery/'+id+'.html';
            }

            for (i = 0; i < allres.length; i++) {
                //console.log(String(allres[i].code).toLowerCase().replace(/[0346789]/g,""));
                allltdict[allres[i].id] = allres[i];
                if (String(allres[i].showName).indexOf('微信') == -1 && String(allres[i].showName).indexOf('急速') == -1 && allres[i].id != '113' && allres[i].id != '110' && allres[i].id != '13' && allres[i].id != '12') {
                    if (String(allres[i].code).indexOf('SSC') > -1) {
                        otherdict[allres[i].id] = 1;
                        //console.log(allres[i].id,allres[i].showName);
                        //ltssc.push('<li rel="'+allres[i].id+'"><a href="'+formatlink(allres[i].id)+'">'+allres[i].showName+hottag(allres[i].id)+newtag(allres[i].id)+'</a></li>')
                    }
                    if (String(allres[i].code).indexOf('11Y') > -1) {
                        otherdict[allres[i].id] = 1;
                        //console.log(allres[i].id,allres[i].showName);
                        //ltxuan.push('<li rel="'+allres[i].id+'"><a href="'+formatlink(allres[i].id)+'">'+allres[i].showName+hottag(allres[i].id)+newtag(allres[i].id)+'</a></li>')
                    }
                    if (String(allres[i].code).indexOf('K3') > -1) {
                        otherdict[allres[i].id] = 1;
                        ltkuai.push('<li rel="' + allres[i].id + '"><a href="' + formatlink(allres[i].id) + '">' + allres[i].showName + hottag(allres[i].id) + newtag(allres[i].id) + '</a></li>')
                    }
                    if (typeof otherdict[allres[i].id] == 'undefined') {
                        //console.log(allres[i].id,allres[i].showName);
                        //ltother.push('<li rel="'+allres[i].id+'"><a href="'+formatlink(allres[i].id)+'">'+allres[i].showName+hottag(allres[i].id)+newtag(allres[i].id)+'</a></li>')
                    }
                    kevinonlineLotterys.push(allres[i].id);
                    ltall.push('<li><a href="' + formatlink(allres[i].id) + '">' + allres[i].showName + '</a></li>');
                    trendlts.push('<a href="?id=' + allres[i].id + '&w=1&q=50&chs=' + allres[i].showName + '" rel="' + allres[i].id + '">' + allres[i].showName + '</a>');
                }
            }
            //var sscorder = [11,46,151,911,161,119,711,6,811,191,200,601,201,51,202,203];
            //var xuanorder = [21,22,24,23,28,26];
            //var otherorder = [204,43,41,42];
            for (j = 0; j < sscorder.length; j++) {
                if (typeof allltdict[sscorder[j]] != 'undefined') {
                    ltssc.push('<li rel="' + allltdict[sscorder[j]].id + '"><a href="' + formatlink(allltdict[sscorder[j]].id) + '">' + allltdict[sscorder[j]].showName + hottag(allltdict[sscorder[j]].id) + newtag(allltdict[sscorder[j]].id) + '</a></li>')
                }
            }
            for (j = 0; j < fullsscorder.length; j++) {
                if (typeof allltdict[fullsscorder[j]] != 'undefined') {
                    fullltssc.push('<li rel="' + allltdict[fullsscorder[j]].id + '"><a href="' + formatlink(allltdict[fullsscorder[j]].id) + '">' + allltdict[fullsscorder[j]].showName + hottag(allltdict[fullsscorder[j]].id) + newtag(allltdict[fullsscorder[j]].id) + '</a></li>')
                }
            }
            fullltssc.push('<li rel=""><a href="/yx/u/api/game/vr/go" style="font-size:12px;">VR金星1.5分彩</a></li>');

            for (j = 0; j < sscorder1.length; j++) {
                if (typeof allltdict[sscorder1[j]] != 'undefined') {
                    ltssc1.push('<li rel="' + allltdict[sscorder1[j]].id + '"><a href="' + formatlink(allltdict[sscorder1[j]].id) + '">' + allltdict[sscorder1[j]].showName + hottag(allltdict[sscorder1[j]].id) + newtag(allltdict[sscorder1[j]].id) + '</a></li>')
                }
            }
            for (j = 0; j < sscorder2.length; j++) {
                if (typeof allltdict[sscorder2[j]] != 'undefined') {
                    ltssc2.push('<li rel="' + allltdict[sscorder2[j]].id + '"><a href="' + formatlink(allltdict[sscorder2[j]].id) + '">' + allltdict[sscorder2[j]].showName + hottag(allltdict[sscorder2[j]].id) + newtag(allltdict[sscorder2[j]].id) + '</a></li>')
                }
            }
            for (j = 0; j < sscorder3.length; j++) {
                if (typeof allltdict[sscorder3[j]] != 'undefined') {
                    ltssc3.push('<li rel="' + allltdict[sscorder3[j]].id + '"><a href="' + formatlink(allltdict[sscorder3[j]].id) + '">' + allltdict[sscorder3[j]].showName + hottag(allltdict[sscorder3[j]].id) + newtag(allltdict[sscorder3[j]].id) + '</a></li>')
                }
            }

            for (j = 0; j < sscorder6.length; j++) {
                if (typeof allltdict[sscorder6[j]] != 'undefined') {
                    ltssc4.push('<li rel="' + allltdict[sscorder6[j]].id + '"><a href="' + formatlink(allltdict[sscorder6[j]].id) + '">' + allltdict[sscorder6[j]].showName + hottag(allltdict[sscorder6[j]].id) + newtag(allltdict[sscorder6[j]].id) + '</a></li>')
                }
            }
            for (j = 0; j < xuanorder.length; j++) {
                if (typeof allltdict[xuanorder[j]] != 'undefined') {
                    ltxuan.push('<li rel="' + allltdict[xuanorder[j]].id + '"><a href="' + formatlink(allltdict[xuanorder[j]].id) + '">' + allltdict[xuanorder[j]].showName + hottag(allltdict[xuanorder[j]].id) + newtag(allltdict[xuanorder[j]].id) + '</a></li>')
                }
            }
            for (j = 0; j < otherorder.length; j++) {
                if (typeof allltdict[otherorder[j]] != 'undefined') {
                    ltother.push('<li rel="' + allltdict[otherorder[j]].id + '"><a href="' + formatlink(allltdict[otherorder[j]].id) + '">' + allltdict[otherorder[j]].showName + hottag(allltdict[otherorder[j]].id) + newtag(allltdict[otherorder[j]].id) + '</a></li>')
                }
            }

            for (j = 0; j < classicorder.length; j++) {
                if (typeof allltdict[classicorder[j]] != 'undefined') {
                    ltclassic.push('<li rel="' + allltdict[classicorder[j]].id + '"><a href="/yx/xjw/v/lottery/' + allltdict[classicorder[j]].id + '.html">' + allltdict[classicorder[j]].showName + hottag(allltdict[classicorder[j]].id) + newtag(allltdict[classicorder[j]].id) + '</a></li>')
                }
            }
            // ltssc.push('<li rel="vr"><a id="vrgame" href="#" target="_blank">VR1.5分彩</a></li>');
            ltall.unshift('<li rel="vr"><a id="vrgame_2" href="#" target="_blank">VR1.5分彩</a></li>');

            let official = [];
            let classic = [];
            for (let z = 0; z < gameClassifyArr.length; z++) {
                let tem = gameClassifyArr[z];
                let wrapper1 = '<ul class="title_ul">' +
                    '<li class="title_li">' +
                    '<div class="lottery_img">' +
                    '<h1 class="title header_lottery' + z + '"></h1>' +
                    '</div><ul class="sec-lt-list" rel="ssc"> ';
                let wrapper2 = '</ul><div class="dotted_line"></div>' + '</li>' + '</ul>';
                let innerWrapper = [];
                let obj = tem.objArr;
                let str = '';
                if (z < gameClassifyArr.length - 1) {
                    for (let x = 0; x < obj.length; x++) {
                        innerWrapper.push(
                            '<li rel="' + obj[x].id + '"><a href="' + '/static/lt.html#' + obj[x].id + '">' +
                            obj[x].showName +
                            '</a></li>');
                    }
                    str = wrapper1 + innerWrapper.join('') + wrapper2;
                    official.push(str);
                } else {
                    for (let x = 0; x < obj.length; x++) {
                        innerWrapper.push(
                            '<li rel="' + obj[x].id + '"><a href="' + '/yx/xjw/v/lottery/' + obj[x].id + '.html">' +
                            obj[x].showName +
                            '</a></li>');
                    }
                    str = wrapper1 + innerWrapper.join('') + wrapper2;
                    classic.push(str);
                }
            }
            $('#top-lt-list .official_lottery').html(official.join(''));
            $('#top-lt-list .classic_lottery').html(classic.join(''));
        
        // $('#top-lt-list .sec-lt-list[rel="ssc"]').html(ltssc.join('')); $('#top-lt-list .sec-lt-list[rel="guanfang"]').html(ltssc1.join('')); $('#top-lt-list .sec-lt-list[rel="flb"]').html(ltssc2.join('')); $('#top-lt-list .sec-lt-list[rel="xuan"]').html(ltxuan.join('')); $('#top-lt-list .sec-lt-list[rel="dpc"]').html(ltssc4.join('')); $('#top-lt-list .sec-lt-list[rel="other"]').html(ltother.join(''));


        // $('#top-lt-list .sec-lt-list[rel="classic"]').html(ltclassic.join(''));

        // $('#top-lt-list .sec-lt-list[rel="offical"]').html(ltssc1.join(''));
        // $('#top-lt-list .sec-lt-list[rel="ph"]').html(ltssc2.join(''));
        // $('#top-lt-list .sec-lt-list[rel="quan"]').html(ltssc3.join(''));
        // $('#top-lt-list .sec-lt-list[rel="di"]').html(ltssc4.join(''));

        // $('#top-lt-list .sec-lt-list[rel="xuan"]').html(ltxuan.join(''));
        // $('#top-lt-list .sec-lt-list[rel="kuai"]').html(ltkuai.join(''));
        // $('#top-lt-list .sec-lt-list[rel="other"]').html(ltother.join(''));
        //console.log(allres,'allres');

        $('#trendpage nav.alllotterys').html(trendlts.join('')); $('#top-lt-list').data('all', allres);
        //$('#nav-ltmenu ul').html(ltall.join(''));
        $('#nav-ltmenu').html($('#top-lt-list').html()); getVrGame();

        $('.downlist_top .classical').off('click').on('click', function() {
            $('.downlist_top .classical').addClass('on');
            $('.downlist_top .official').removeClass('on');
            $('#top-lt-list .official_lottery').hide();
            $('#top-lt-list .classic_lottery').show();
        });

        $('.downlist_top .official').off('click').on('click', function() {
            $('.downlist_top .official').addClass('on');
            $('.downlist_top .classical').removeClass('on');
            $('#top-lt-list .official_lottery').show();
            $('#top-lt-list .classic_lottery').hide();
        });

    });
//彩种左侧保存
getLeftSec(); $('.w-order-list').unbind('click').click(function() {
    //$('.record-list .panels').toggle();
    $('.record-list .panels').slideToggle();
});

$('#saveMy').on('shown.bs.modal', function() {
    //alert('对话框已显示。');
    //console.log($('#top-lt-list').data('all'));
    var ltssc = [],
        ltxuan = [],
        ltkuai = [],
        ltother = [];
    var otherdict = {}
    var allres = $('#top-lt-list').data('all');
    var allops = $('.lottery-navs ul').data('open');
    var chkon = function(array, id) {
            if (typeof array != 'undefined') {
                //console.log($.inArray(id,array),id,array);
                if ($.inArray(id, array) > -1) {
                    return '<em class="icon m_on">&#xe6c9;</em>'
                }
            }
            return '<em class="icon">&#xe6c4;</em>'
        }
        //console.log(allres);

    for (i = 0; i < allres.length; i++) {
        if (String(allres[i].showName).indexOf('微信') == -1 && String(allres[i].showName).indexOf('急速') == -1 && allres[i].id != '113' && allres[i].id != '110' && allres[i].id != '13' && allres[i].id != '6' && allres[i].id != '12') {
            if (String(allres[i].code).indexOf('SSC') > -1) {
                otherdict[allres[i].id] = 1;
                //ltssc.push('<li class="m_change" rel="'+allres[i].id+'">'+chkon(allops,allres[i].id)+allres[i].showName+'</li>')
            }
            if (String(allres[i].code).indexOf('11Y') > -1) {
                otherdict[allres[i].id] = 1;
                //ltxuan.push('<li class="m_change" rel="'+allres[i].id+'">'+chkon(allops,allres[i].id)+allres[i].showName+'</li>')
            }
            if (String(allres[i].code).indexOf('K3') > -1 && String(allres[i].showName).indexOf('经典') == -1) {
                otherdict[allres[i].id] = 1;
                ltkuai.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) + allres[i].showName + '</li>')
            }
            if (typeof otherdict[allres[i].id] == 'undefined') {
                //ltother.push('<li class="m_change" rel="'+allres[i].id+'">'+chkon(allops,allres[i].id)+allres[i].showName+'</li>')
            }
        }
    }
    for (j = 0; j < fullsscorder.length; j++) {
        if (typeof allltdict[fullsscorder[j]] != 'undefined') {
            ltssc.push('<li class="m_change" rel="' + allltdict[fullsscorder[j]].id + '">' + chkon(allops, allltdict[fullsscorder[j]].id) + allltdict[fullsscorder[j]].showName + '</li>')
        }
    }
    for (j = 0; j < xuanorder.length; j++) {
        if (typeof allltdict[xuanorder[j]] != 'undefined') {
            ltxuan.push('<li class="m_change" rel="' + allltdict[xuanorder[j]].id + '">' + chkon(allops, allltdict[xuanorder[j]].id) + allltdict[xuanorder[j]].showName + '</li>')
        }
    }
    otherorder = [204, 42, 41, 43, 47];
    for (j = 0; j < otherorder.length; j++) {
        if (typeof allltdict[otherorder[j]] != 'undefined') {
            ltother.push('<li class="m_change" rel="' + allltdict[otherorder[j]].id + '">' + chkon(allops, allltdict[otherorder[j]].id) + allltdict[otherorder[j]].showName + '</li>')
        }
    }
    $('.savemylt .seccls[rel="ssc"] ul').html(ltssc.join(''));
    $('.savemylt .seccls[rel="xuan"] ul').html(ltxuan.join(''));
    $('.savemylt .seccls[rel="kuai"] ul').html(ltkuai.join(''));
    $('.savemylt .seccls[rel="other"] ul').html(ltother.join(''));
    var errormsg = new $.zui.Messager('最大收藏9个游戏', {
        //icon: 'bell' // 定义消息图标
    })
    $('.savemylt').off('click').on('click', '.m_change', function() {

        var route = 'addFavGame';
        var nowel = $(this);
        //console.log($(this).find('.m_on').size());
        if (nowel.find('.m_on').size() > 0) { route = 'removeFavGame'; }
        if (kevinLotteryall.length >= 9 && route !== 'removeFavGame') {
            var attrel = $(this).attr('rel');
            var kevinss = kevin_uniqueLotterys(kevinLotteryall, kevinonlineLotterys, 0, false);
            if (kevinss) {
                console.log("删除已关闭的收藏彩种")
                route = 'removeFavGame';
                Api.getCommon(route, { lotteryId: kevinss }, function(res) {
                    console.log(route, kevinss, res)
                    if (res.code == '0' && res.error == '0') {
                        console.log("删除成功..添加收藏 " + attrel);
                        route = 'addFavGame';
                        Api.getCommon(route, { lotteryId: attrel }, function(res) {
                            if (res.code == '0' && res.error == '0') {
                                console.log('添加成功');
                                if (nowel.find('.m_on').size() > 0) {
                                    nowel.find('.m_on').html('&#xe6c4;');
                                    nowel.find('.m_on').removeClass('m_on')
                                } else {
                                    nowel.find('.icon').html('&#xe6c9;');
                                    nowel.find('.icon').addClass('m_on')
                                }
                                getLeftSec();
                            } else {
                                errormsg.show();
                            }
                        })
                    } else {
                        errormsg.show();
                    }
                })
                return false;
            }
        }
        //console.log($('.lottery-navs ul').data('open'),'oppppppp');
        Api.getCommon(route, { lotteryId: $(this).attr('rel') }, function(res) {
            if (res.code == '0' && res.error == '0') {
                if (nowel.find('.m_on').size() > 0) {
                    nowel.find('.m_on').html('&#xe6c4;');
                    nowel.find('.m_on').removeClass('m_on')
                } else {
                    nowel.find('.icon').html('&#xe6c9;');
                    nowel.find('.icon').addClass('m_on')
                }
                getLeftSec();
            } else {
                errormsg.show();
            }
        })
    })
});
//固定菜单
if (parseInt($('body').width(), 10) > 1200) {
    //$('.lottery-navs').css({'left':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
    //$('.lottery-open-list').css({'top':50,'right':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
} else {
    //$('.lottery-navs').css({'left':-110,'position':'absolute'});
    //$('.lottery-open-list').css({'top':0,'right':-245,'position':'absolute'});
}
//console.log(AppData.getMainAccount());
if (typeof AppData != 'undefined') {
    var udata = AppData.getMainAccount();
    var utyp = udata.type;
    if (utyp == '1') {
        $('#agent-top-nav,.topagtbtn').show();
    }
}
//投注的手动刷新
//console.log($('.manualre'),'manualremanualremanualre');
$('.manualre').unbind('click').click(function() {
    /*if ($('.panels-leftbar a.on').hasClass('first')) {
      $('a[data-key=HistoryOrder]').click();
    }else {
      $('a[data-key=ChaseOrder]').click();
    }*/
    RecordList.init();
});
if (location.pathname == '/yx/hbs/manager-account.html') {
    //$('.fixedleftbar.normal').hide();$('.fixedleftbar.uc').show();
    $('.newheader .inuser').show();
    $('.newheader .normal').hide();
} else {
    //$('.fixedleftbar.normal').show();$('.fixedleftbar.uc').hide();
    $('.newheader .inuser').hide();
    $('.newheader .normal').show();
}

if (location.pathname == '/static/help.html') {
    Api.getCommon('getUserBalance', {}, function(resp) {
        if (resp == -1) {
            return false;
        } else {
            if (typeof resp.data !== 'undefined') {
                var left = resp.data.lotteryBalance;
                setTimeout(function() {
                    $('[data-field="lotteryBalance"]').html(left);
                    $('[data-user-account-available]').html(left);
                    $('#will-sum01').html(left);
                }, 300)

            }
        }
    });
}
//刷新余额
$('.lotteryBalance .icon,.menu02 .m_refresh').click(function() {
    $('[data-field="lotteryBalance"],#will-sum01').html('刷新中...');
    Api.getCommon('getUserBalance', {}, function(resp) {
        if (resp == -1) {
            window.location.href = "/yx/home";
            return false;
        } else {
            //console.log(resp.data);
            if (typeof resp.data !== 'undefined') {
                var left = resp.data.lotteryBalance;
                setTimeout(function() {
                    $('[data-field="lotteryBalance"]').html(left);
                    $('[data-user-account-available]').html(left);
                    $('#will-sum01').html(left);
                }, 300)

            }
        }
    });
});

//余额,5s
(function() {
    var t = function(name) {
        $('[data-field="lotteryBalance"],#will-sum01').html('自动刷新中...');
        Api.getCommon('getUserBalance', {}, function(resp) {
            if (resp == -1) {
                window.location.href = "/yx/home";
                return false;
            } else {
                if (typeof resp.data !== 'undefined') {
                    var left = resp.data.lotteryBalance;
                    $('[data-field="lotteryBalance"]').html(left);
                    $('[data-user-account-available]').html(left);
                    $('#will-sum01').html(left);
                    setTimeout(function() {
                        t(0);
                    }, 10000);
                }
            }
        });
        return this;
    }
    t(1);
})();

var goTop = function() {
    $(window).scroll(function(e) {
        //若滚动条离顶部大于100元素
        if ($(window).scrollTop() > 100)
            $(".goTop").fadeIn(1000); //以1秒的间隔渐显id=gotop的元素
        else
            $(".goTop").fadeOut(1000); //以1秒的间隔渐隐id=gotop的元素
    });
}


//返回顶部
$('.goTop').unbind('click').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 300);
}); goTop();

if (window.location.hash == '#zuo') {
    setTimeout(function() {
        $('[data-command="generate"]').click();
    }, 300);
}

//换肤
$('.changebg').unbind('click').click(function() {
    if (!$('.changebg').hasClass('hold')) {
        $('.changebg').addClass('hold');
        $('.changebg span em').html('&#xe6bf;');
        $('.fixright-bars .bgmenus').removeClass('bghidden');
    } else {
        $('.changebg').removeClass('hold');
        $('.changebg span em').html('&#xe67a;');
        $('.fixright-bars .bgmenus').addClass('bghidden');
    }
}); $('.choosebg li').unbind('click').click(function() {
    var nowrel = parseInt($(this).attr('rel'), 10);
    setCookie('NOW-BG', nowrel);
    nowchangebg();
});

var nowchangebg = function() {
    if (typeof $.cookie != 'undefined' && typeof $.cookie('NOW-BG') != 'undefined') {
        var nowindex = parseInt($.cookie('NOW-BG'), 10);
        //alert($.cookie('NOW-BG'));
        if (typeof $('.lottery_main').attr('rel') != 'undefined') {
            $('.lottery_main').removeClass('lottery_main_bg' + $('.lottery_main').attr('rel'));
        }
        $('.lottery_main').attr('rel', nowindex).addClass('lottery_main_bg' + nowindex);
    } else {
        //NORMAL
    }
    if (typeof $.cookie != 'undefined' && typeof $.cookie('DARK') != 'undefined' && $.cookie('DARK') == '1') {
        $('.godark span').html('白天模式');
        $('.godark').addClass('isdark');
        $('.lottery_main').addClass('lottery_main_dark');
    } else {
        $('.godark span').html('黑夜模式');
        $('.godark').removeClass('isdark');
        $('.lottery_main').removeClass('lottery_main_dark');
    }
    $('.godark').removeClass('hold');
}
nowchangebg();
//黑夜模式
$('.godark').unbind('click').click(function() {
    $('.godark').addClass('hold')
    if (!$('.godark').hasClass('isdark')) {
        $('.godark').addClass('isdark');
        setCookie('DARK', '1');
    } else {
        $('.godark').removeClass('isdark');
        setCookie('DARK', '0');
    }
    nowchangebg();
});

//VR登录链接获取
//getVrGame();
});

$(window).on('resize', function() {
    setTimeout(function() {
        //console.log(parseInt($('body').width(),10),getViewport());
        if (parseInt($('body').width(), 10) > 1200) {
            //$('.lottery-navs').css({'left':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
            //$('.lottery-open-list').css({'top':50,'right':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
        } else {
            //$('.lottery-navs').css({'left':-110,'position':'absolute'});
            //$('.lottery-open-list').css({'top':0,'right':-245,'position':'absolute'});
        }
    }, 100)
});

$(window).on('hashchange', function() {
    if (String(window.location.hash).indexOf('_') == -1) {
        return false;
    }
    var twohash = String(window.location.hash).split('_');
    $(".new-tab a.act").removeClass('act');
    $(".new-tab a").each(function() {
        var keyw = twohash[1];
        if (String($(this).attr('href')).indexOf(keyw) > -1) {
            $(this).addClass("act");
        }
    });
    //if (twohash[0]=='#page=0' && String(twohash[1]).indexOf('finance')>-1) {
    if (String(twohash[0]).indexOf('#page=') > -1 && String(twohash[1]).indexOf('finance') > -1) {
        $.get('/static/finance.html', function(fhtml) {
            $('.allsets,.allcards').hide();
            $('.manager .page-container').html(fhtml);
            if (typeof initFinance != 'undefined') {
                console.log('initFinanceinitFinance');
                initFinance();
            }
        })
    }

    if (twohash[0] == '#page=0' && String(twohash[1]).indexOf('account') > -1) {
        $.get('/static/account.html', function(fhtml) {
            $('.allsets,.allcards').show();
            $('.manager .page-container').html(fhtml);
            if (typeof initAccount != 'undefined') {
                initAccount();
            }
        })
    }
    //console.log(String(twohash[0]).indexOf('#page=')>-1 && String(twohash[1]).indexOf('proxy')>-1);

    if (String(twohash[0]).indexOf('#page=') > -1 && String(twohash[1]).indexOf('proxy') > -1) {
        if ($('#fenhong').size() == 0) {
            $.get('/static/proxy.html', function(fhtml) {
                $('.allsets,.allcards').hide();
                $('.manager .page-container').html(fhtml);
                if (typeof initProxy != 'undefined') {
                    initProxy();
                }
            });
        } else {
            $('.allsets,.allcards').hide();
            if (typeof initProxy != 'undefined') {
                initProxy();
            }
        }

    }
    if (twohash[0] == '#page=0' && String(twohash[1]).indexOf('report') > -1) {
        //console.log(twohash,'rptttttttttttttttttt');
        $.get('/static/report.html', function(fhtml) {
            $('.allsets,.allcards').hide();
            $('.manager .page-container').html(fhtml);
            //console.log(typeof initReport);

            if (typeof initReport != 'undefined') {
                initReport();
            }
        })
    }
    if (twohash[0] == '#page=0' && String(twohash[1]).indexOf('message') > -1) {
        $.get('/static/message.html', function(fhtml) {
            $('.allsets,.allcards').hide();
            $('.manager .page-container').html(fhtml);
            if (typeof initMessage != 'undefined') {
                initMessage();
            }
        })
    }

    //console.log('hashchangehashchangehashchangehashchange');
});