/* bootstrap-dialog.min.js */ ! function(t, e) {
  "use strict";
  if ("undefined" != typeof module && module.exports) {
    var n = "undefined" != typeof process,
      o = n && "electron" in process.versions;
    o ? t.BootstrapDialog = e(t.jQuery) : module.exports = e(require("jquery"), require("bootstrap"))
  } else "function" == typeof define && define.amd ? define("bootstrap-dialog", ["jquery", "bootstrap"], function(t) {
    return e(t)
  }) : t.BootstrapDialog = e(t.jQuery)
}(this, function(t) {
  "use strict";
  var e = t.fn.modal.Constructor,
    n = function(t, n) {
      e.call(this, t, n)
    };
  n.getModalVersion = function() {
    var e = null;
    return e = "undefined" == typeof t.fn.modal.Constructor.VERSION ? "v3.1" : /3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION) ? "v3.2" : /3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION) ? "v3.3" : "v3.3.4"
  }, n.ORIGINAL_BODY_PADDING = parseInt(t("body").css("padding-right") || 0, 10), n.METHODS_TO_OVERRIDE = {}, n.METHODS_TO_OVERRIDE["v3.1"] = {}, n.METHODS_TO_OVERRIDE["v3.2"] = {
    hide: function(e) {
      if (e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented()) {
        this.isShown = !1;
        var n = this.getGlobalOpenedDialogs();
        0 === n.length && this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
      }
    }
  }, n.METHODS_TO_OVERRIDE["v3.3"] = {
    setScrollbar: function() {
      var t = n.ORIGINAL_BODY_PADDING;
      this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    },
    resetScrollbar: function() {
      var t = this.getGlobalOpenedDialogs();
      0 === t.length && this.$body.css("padding-right", n.ORIGINAL_BODY_PADDING)
    },
    hideModal: function() {
      this.$element.hide(), this.backdrop(t.proxy(function() {
        var t = this.getGlobalOpenedDialogs();
        0 === t.length && this.$body.removeClass("modal-open"), this.resetAdjustments(), this.resetScrollbar(), this.$element.trigger("hidden.bs.modal")
      }, this))
    }
  }, n.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, n.METHODS_TO_OVERRIDE["v3.3"]), n.prototype = {
    constructor: n,
    getGlobalOpenedDialogs: function() {
      var e = [];
      return t.each(o.dialogs, function(t, n) {
        n.isRealized() && n.isOpened() && e.push(n)
      }), e
    }
  }, n.prototype = t.extend(n.prototype, e.prototype, n.METHODS_TO_OVERRIDE[n.getModalVersion()]);
  var o = function(e) {
    this.defaultOptions = t.extend(!0, {
      id: o.newGuid(),
      buttons: [],
      data: {},
      onshow: null,
      onshown: null,
      onhide: null,
      onhidden: null
    }, o.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, this.draggableData = {
      isMouseDown: !1,
      mouseOffset: {}
    }, this.realized = !1, this.opened = !1, this.initOptions(e), this.holdThisInstance()
  };
  return o.BootstrapDialogModal = n, o.NAMESPACE = "bootstrap-dialog", o.TYPE_DEFAULT = "type-default", o.TYPE_INFO = "type-info", o.TYPE_PRIMARY = "type-primary", o.TYPE_SUCCESS = "type-success", o.TYPE_WARNING = "type-warning", o.TYPE_DANGER = "type-danger", o.DEFAULT_TEXTS = {}, o.DEFAULT_TEXTS[o.TYPE_DEFAULT] = "Information", o.DEFAULT_TEXTS[o.TYPE_INFO] = "Information", o.DEFAULT_TEXTS[o.TYPE_PRIMARY] = "Information", o.DEFAULT_TEXTS[o.TYPE_SUCCESS] = "Success", o.DEFAULT_TEXTS[o.TYPE_WARNING] = "Warning", o.DEFAULT_TEXTS[o.TYPE_DANGER] = "Danger", o.DEFAULT_TEXTS.OK = "OK", o.DEFAULT_TEXTS.CANCEL = "Cancel", o.DEFAULT_TEXTS.CONFIRM = "Confirmation", o.SIZE_NORMAL = "size-normal", o.SIZE_SMALL = "size-small", o.SIZE_WIDE = "size-wide", o.SIZE_LARGE = "size-large", o.BUTTON_SIZES = {}, o.BUTTON_SIZES[o.SIZE_NORMAL] = "", o.BUTTON_SIZES[o.SIZE_SMALL] = "", o.BUTTON_SIZES[o.SIZE_WIDE] = "", o.BUTTON_SIZES[o.SIZE_LARGE] = "btn-lg", o.ICON_SPINNER = "glyphicon glyphicon-asterisk", o.defaultOptions = {
    type: o.TYPE_PRIMARY,
    size: o.SIZE_NORMAL,
    cssClass: "",
    title: null,
    message: null,
    nl2br: !0,
    closable: !0,
    closeByBackdrop: !0,
    closeByKeyboard: !0,
    spinicon: o.ICON_SPINNER,
    autodestroy: !0,
    draggable: !1,
    animate: !0,
    description: "",
    tabindex: -1
  }, o.configDefaultOptions = function(e) {
    o.defaultOptions = t.extend(!0, o.defaultOptions, e)
  }, o.dialogs = {}, o.openAll = function() {
    t.each(o.dialogs, function(t, e) {
      e.open()
    })
  }, o.closeAll = function() {
    t.each(o.dialogs, function(t, e) {
      e.close()
    })
  }, o.getDialog = function(t) {
    var e = null;
    return "undefined" != typeof o.dialogs[t] && (e = o.dialogs[t]), e
  }, o.setDialog = function(t) {
    return o.dialogs[t.getId()] = t, t
  }, o.addDialog = function(t) {
    return o.setDialog(t)
  }, o.moveFocus = function() {
    var e = null;
    t.each(o.dialogs, function(t, n) {
      e = n
    }), null !== e && e.isRealized() && e.getModal().focus()
  }, o.METHODS_TO_OVERRIDE = {}, o.METHODS_TO_OVERRIDE["v3.1"] = {
    handleModalBackdropEvent: function() {
      return this.getModal().on("click", {
        dialog: this
      }, function(t) {
        t.target === this && t.data.dialog.isClosable() && t.data.dialog.canCloseByBackdrop() && t.data.dialog.close()
      }), this
    },
    updateZIndex: function() {
      var e = 1040,
        n = 1050,
        i = 0;
      t.each(o.dialogs, function(t, e) {
        i++
      });
      var s = this.getModal(),
        a = s.data("bs.modal").$backdrop;
      return s.css("z-index", n + 20 * (i - 1)), a.css("z-index", e + 20 * (i - 1)), this
    },
    open: function() {
      return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), this
    }
  }, o.METHODS_TO_OVERRIDE["v3.2"] = {
    handleModalBackdropEvent: o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,
    updateZIndex: o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,
    open: o.METHODS_TO_OVERRIDE["v3.1"].open
  }, o.METHODS_TO_OVERRIDE["v3.3"] = {}, o.METHODS_TO_OVERRIDE["v3.3.4"] = t.extend({}, o.METHODS_TO_OVERRIDE["v3.1"]), o.prototype = {
    constructor: o,
    initOptions: function(e) {
      return this.options = t.extend(!0, this.defaultOptions, e), this
    },
    holdThisInstance: function() {
      return o.addDialog(this), this
    },
    initModalStuff: function() {
      return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), this
    },
    createModal: function() {
      var e = t('<div class="modal" role="dialog" aria-hidden="true"></div>');
      return e.prop("id", this.getId()), e.attr("aria-labelledby", this.getId() + "_title"), e
    },
    getModal: function() {
      return this.$modal
    },
    setModal: function(t) {
      return this.$modal = t, this
    },
    createModalDialog: function() {
      return t('<div class="modal-dialog"></div>')
    },
    getModalDialog: function() {
      return this.$modalDialog
    },
    setModalDialog: function(t) {
      return this.$modalDialog = t, this
    },
    createModalContent: function() {
      return t('<div class="modal-content"></div>')
    },
    getModalContent: function() {
      return this.$modalContent
    },
    setModalContent: function(t) {
      return this.$modalContent = t, this
    },
    createModalHeader: function() {
      return t('<div class="modal-header"></div>')
    },
    getModalHeader: function() {
      return this.$modalHeader
    },
    setModalHeader: function(t) {
      return this.$modalHeader = t, this
    },
    createModalBody: function() {
      return t('<div class="modal-body"></div>')
    },
    getModalBody: function() {
      return this.$modalBody
    },
    setModalBody: function(t) {
      return this.$modalBody = t, this
    },
    createModalFooter: function() {
      return t('<div class="modal-footer"></div>')
    },
    getModalFooter: function() {
      return this.$modalFooter
    },
    setModalFooter: function(t) {
      return this.$modalFooter = t, this
    },
    createDynamicContent: function(t) {
      var e = null;
      return e = "function" == typeof t ? t.call(t, this) : t, "string" == typeof e && (e = this.formatStringContent(e)), e
    },
    formatStringContent: function(t) {
      return this.options.nl2br ? t.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : t
    },
    setData: function(t, e) {
      return this.options.data[t] = e, this
    },
    getData: function(t) {
      return this.options.data[t]
    },
    setId: function(t) {
      return this.options.id = t, this
    },
    getId: function() {
      return this.options.id
    },
    getType: function() {
      return this.options.type
    },
    setType: function(t) {
      return this.options.type = t, this.updateType(), this
    },
    updateType: function() {
      if (this.isRealized()) {
        var t = [o.TYPE_DEFAULT, o.TYPE_INFO, o.TYPE_PRIMARY, o.TYPE_SUCCESS, o.TYPE_WARNING, o.TYPE_DANGER];
        this.getModal().removeClass(t.join(" ")).addClass(this.getType())
      }
      return this
    },
    getSize: function() {
      return this.options.size
    },
    setSize: function(t) {
      return this.options.size = t, this.updateSize(), this
    },
    updateSize: function() {
      if (this.isRealized()) {
        var e = this;
        this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE), this.getModal().addClass(this.getSize()), this.getModalDialog().removeClass("modal-sm"), this.getSize() === o.SIZE_SMALL && this.getModalDialog().addClass("modal-sm"), this.getModalDialog().removeClass("modal-lg"), this.getSize() === o.SIZE_WIDE && this.getModalDialog().addClass("modal-lg"), t.each(this.options.buttons, function(n, o) {
          var i = e.getButton(o.id),
            s = ["btn-lg", "btn-sm", "btn-xs"],
            a = !1;
          if ("string" == typeof o.cssClass) {
            var d = o.cssClass.split(" ");
            t.each(d, function(e, n) {
              -1 !== t.inArray(n, s) && (a = !0)
            })
          }
          a || (i.removeClass(s.join(" ")), i.addClass(e.getButtonSize()))
        })
      }
      return this
    },
    getCssClass: function() {
      return this.options.cssClass
    },
    setCssClass: function(t) {
      return this.options.cssClass = t, this
    },
    getTitle: function() {
      return this.options.title
    },
    setTitle: function(t) {
      return this.options.title = t, this.updateTitle(), this
    },
    updateTitle: function() {
      if (this.isRealized()) {
        var t = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
        this.getModalHeader().find("." + this.getNamespace("title")).html("").append(t).prop("id", this.getId() + "_title")
      }
      return this
    },
    getMessage: function() {
      return this.options.message
    },
    setMessage: function(t) {
      return this.options.message = t, this.updateMessage(), this
    },
    updateMessage: function() {
      if (this.isRealized()) {
        var t = this.createDynamicContent(this.getMessage());
        this.getModalBody().find("." + this.getNamespace("message")).html("").append(t)
      }
      return this
    },
    isClosable: function() {
      return this.options.closable
    },
    setClosable: function(t) {
      return this.options.closable = t, this.updateClosable(), this
    },
    setCloseByBackdrop: function(t) {
      return this.options.closeByBackdrop = t, this
    },
    canCloseByBackdrop: function() {
      return this.options.closeByBackdrop
    },
    setCloseByKeyboard: function(t) {
      return this.options.closeByKeyboard = t, this
    },
    canCloseByKeyboard: function() {
      return this.options.closeByKeyboard
    },
    isAnimate: function() {
      return this.options.animate
    },
    setAnimate: function(t) {
      return this.options.animate = t, this
    },
    updateAnimate: function() {
      return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), this
    },
    getSpinicon: function() {
      return this.options.spinicon
    },
    setSpinicon: function(t) {
      return this.options.spinicon = t, this
    },
    addButton: function(t) {
      return this.options.buttons.push(t), this
    },
    addButtons: function(e) {
      var n = this;
      return t.each(e, function(t, e) {
        n.addButton(e)
      }), this
    },
    getButtons: function() {
      return this.options.buttons
    },
    setButtons: function(t) {
      return this.options.buttons = t, this.updateButtons(), this
    },
    getButton: function(t) {
      return "undefined" != typeof this.indexedButtons[t] ? this.indexedButtons[t] : null
    },
    getButtonSize: function() {
      return "undefined" != typeof o.BUTTON_SIZES[this.getSize()] ? o.BUTTON_SIZES[this.getSize()] : ""
    },
    updateButtons: function() {
      return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().show().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), this
    },
    isAutodestroy: function() {
      return this.options.autodestroy
    },
    setAutodestroy: function(t) {
      this.options.autodestroy = t
    },
    getDescription: function() {
      return this.options.description
    },
    setDescription: function(t) {
      return this.options.description = t, this
    },
    setTabindex: function(t) {
      return this.options.tabindex = t, this
    },
    getTabindex: function() {
      return this.options.tabindex
    },
    updateTabindex: function() {
      return this.isRealized() && this.getModal().attr("tabindex", this.getTabindex()), this
    },
    getDefaultText: function() {
      return o.DEFAULT_TEXTS[this.getType()]
    },
    getNamespace: function(t) {
      return o.NAMESPACE + "-" + t
    },
    createHeaderContent: function() {
      var e = t("<div></div>");
      return e.addClass(this.getNamespace("header")), e.append(this.createTitleContent()), e.prepend(this.createCloseButton()), e
    },
    createTitleContent: function() {
      var e = t("<div></div>");
      return e.addClass(this.getNamespace("title")), e
    },
    createCloseButton: function() {
      var e = t("<div></div>");
      e.addClass(this.getNamespace("close-button"));
      var n = t('<button class="close">&times;</button>');
      return e.append(n), e.on("click", {
        dialog: this
      }, function(t) {
        t.data.dialog.close()
      }), e
    },
    createBodyContent: function() {
      var e = t("<div></div>");
      return e.addClass(this.getNamespace("body")), e.append(this.createMessageContent()), e
    },
    createMessageContent: function() {
      var e = t("<div></div>");
      return e.addClass(this.getNamespace("message")), e
    },
    createFooterContent: function() {
      var e = t("<div></div>");
      return e.addClass(this.getNamespace("footer")), e
    },
    createFooterButtons: function() {
      var e = this,
        n = t("<div></div>");
      return n.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, t.each(this.options.buttons, function(t, i) {
        i.id || (i.id = o.newGuid());
        var s = e.createButton(i);
        e.indexedButtons[i.id] = s, n.append(s)
      }), n
    },
    createButton: function(e) {
      var n = t('<button class="btn"></button>');
      return n.prop("id", e.id), n.data("button", e), "undefined" != typeof e.icon && "" !== t.trim(e.icon) && n.append(this.createButtonIcon(e.icon)), "undefined" != typeof e.label && n.append(e.label), n.addClass("undefined" != typeof e.cssClass && "" !== t.trim(e.cssClass) ? e.cssClass : "btn-default"), "undefined" != typeof e.hotkey && (this.registeredButtonHotkeys[e.hotkey] = n), n.on("click", {
        dialog: this,
        $button: n,
        button: e
      }, function(t) {
        var e = t.data.dialog,
          n = t.data.$button,
          o = n.data("button");
        return o.autospin && n.toggleSpin(!0), "function" == typeof o.action ? o.action.call(n, e, t) : void 0
      }), this.enhanceButton(n), "undefined" != typeof e.enabled && n.toggleEnable(e.enabled), n
    },
    enhanceButton: function(t) {
      return t.dialog = this, t.toggleEnable = function(t) {
        var e = this;
        return "undefined" != typeof t ? e.prop("disabled", !t).toggleClass("disabled", !t) : e.prop("disabled", !e.prop("disabled")), e
      }, t.enable = function() {
        var t = this;
        return t.toggleEnable(!0), t
      }, t.disable = function() {
        var t = this;
        return t.toggleEnable(!1), t
      }, t.toggleSpin = function(e) {
        var n = this,
          o = n.dialog,
          i = n.find("." + o.getNamespace("button-icon"));
        return "undefined" == typeof e && (e = !(t.find(".icon-spin").length > 0)), e ? (i.hide(), t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))) : (i.show(), t.find(".icon-spin").remove()), n
      }, t.spin = function() {
        var t = this;
        return t.toggleSpin(!0), t
      }, t.stopSpin = function() {
        var t = this;
        return t.toggleSpin(!1), t
      }, this
    },
    createButtonIcon: function(e) {
      var n = t("<span></span>");
      return n.addClass(this.getNamespace("button-icon")).addClass(e), n
    },
    enableButtons: function(e) {
      return t.each(this.indexedButtons, function(t, n) {
        n.toggleEnable(e)
      }), this
    },
    updateClosable: function() {
      return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), this
    },
    onShow: function(t) {
      return this.options.onshow = t, this
    },
    onShown: function(t) {
      return this.options.onshown = t, this
    },
    onHide: function(t) {
      return this.options.onhide = t, this
    },
    onHidden: function(t) {
      return this.options.onhidden = t, this
    },
    isRealized: function() {
      return this.realized
    },
    setRealized: function(t) {
      return this.realized = t, this
    },
    isOpened: function() {
      return this.opened
    },
    setOpened: function(t) {
      return this.opened = t, this
    },
    handleModalEvents: function() {
      return this.getModal().on("show.bs.modal", {
        dialog: this
      }, function(t) {
        var e = t.data.dialog;
        if (e.setOpened(!0), e.isModalEvent(t) && "function" == typeof e.options.onshow) {
          var n = e.options.onshow(e);
          return n === !1 && e.setOpened(!1), n
        }
      }), this.getModal().on("shown.bs.modal", {
        dialog: this
      }, function(t) {
        var e = t.data.dialog;
        e.isModalEvent(t) && "function" == typeof e.options.onshown && e.options.onshown(e)
      }), this.getModal().on("hide.bs.modal", {
        dialog: this
      }, function(t) {
        var e = t.data.dialog;
        if (e.setOpened(!1), e.isModalEvent(t) && "function" == typeof e.options.onhide) {
          var n = e.options.onhide(e);
          return n === !1 && e.setOpened(!0), n
        }
      }), this.getModal().on("hidden.bs.modal", {
        dialog: this
      }, function(e) {
        var n = e.data.dialog;
        n.isModalEvent(e) && "function" == typeof n.options.onhidden && n.options.onhidden(n), n.isAutodestroy() && (n.setRealized(!1), delete o.dialogs[n.getId()], t(this).remove()), o.moveFocus()
      }), this.handleModalBackdropEvent(), this.getModal().on("keyup", {
        dialog: this
      }, function(t) {
        27 === t.which && t.data.dialog.isClosable() && t.data.dialog.canCloseByKeyboard() && t.data.dialog.close()
      }), this.getModal().on("keyup", {
        dialog: this
      }, function(e) {
        var n = e.data.dialog;
        if ("undefined" != typeof n.registeredButtonHotkeys[e.which]) {
          var o = t(n.registeredButtonHotkeys[e.which]);
          !o.prop("disabled") && o.focus().trigger("click")
        }
      }), this
    },
    handleModalBackdropEvent: function() {
      return this.getModal().on("click", {
        dialog: this
      }, function(e) {
        t(e.target).hasClass("modal-backdrop") && e.data.dialog.isClosable() && e.data.dialog.canCloseByBackdrop() && e.data.dialog.close()
      }), this
    },
    isModalEvent: function(t) {
      return "undefined" != typeof t.namespace && "bs.modal" === t.namespace
    },
    makeModalDraggable: function() {
      return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
        dialog: this
      }, function(t) {
        var e = t.data.dialog;
        e.draggableData.isMouseDown = !0;
        var n = e.getModalDialog().offset();
        e.draggableData.mouseOffset = {
          top: t.clientY - n.top,
          left: t.clientX - n.left
        }
      }), this.getModal().on("mouseup mouseleave", {
        dialog: this
      }, function(t) {
        t.data.dialog.draggableData.isMouseDown = !1
      }), t("body").on("mousemove", {
        dialog: this
      }, function(t) {
        var e = t.data.dialog;
        e.draggableData.isMouseDown && e.getModalDialog().offset({
          top: t.clientY - e.draggableData.mouseOffset.top,
          left: t.clientX - e.draggableData.mouseOffset.left
        })
      })), this
    },
    realize: function() {
      return this.initModalStuff(), this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()), this.updateSize(), this.getDescription() && this.getModal().attr("aria-describedby", this.getDescription()), this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), this.getModalBody().append(this.createBodyContent()), this.getModal().data("bs.modal", new n(this.getModal(), {
        backdrop: "static",
        keyboard: !1,
        show: !1
      })), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), this.updateType(), this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), this.updateSize(), this.updateTabindex(), this
    },
    open: function() {
      return !this.isRealized() && this.realize(), this.getModal().modal("show"), this
    },
    close: function() {
      return !this.isRealized() && this.realize(), this.getModal().modal("hide"), this
    }
  }, o.prototype = t.extend(o.prototype, o.METHODS_TO_OVERRIDE[n.getModalVersion()]), o.newGuid = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
      var e = 16 * Math.random() | 0,
        n = "x" === t ? e : 3 & e | 8;
      return n.toString(16)
    })
  }, o.show = function(t) {
    return new o(t).open()
  }, o.alert = function() {
    var e = {},
      n = {
        type: o.TYPE_PRIMARY,
        title: null,
        message: null,
        closable: !1,
        draggable: !1,
        buttonLabel: o.DEFAULT_TEXTS.OK,
        callback: null
      };
    return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
      message: arguments[0],
      callback: "undefined" != typeof arguments[1] ? arguments[1] : null
    }), new o({
      type: e.type,
      title: e.title,
      message: e.message,
      closable: e.closable,
      draggable: e.draggable,
      data: {
        callback: e.callback
      },
      onhide: function(t) {
        !t.getData("btnClicked") && t.isClosable() && "function" == typeof t.getData("callback") && t.getData("callback")(!1)
      },
      buttons: [{
        label: e.buttonLabel,
        action: function(t) {
          return t.setData("btnClicked", !0), "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
        }
      }]
    }).open()
  }, o.confirm = function() {
    var e = {},
      n = {
        type: o.TYPE_PRIMARY,
        title: null,
        message: null,
        closable: !1,
        draggable: !1,
        btnCancelLabel: o.DEFAULT_TEXTS.CANCEL,
        btnOKLabel: o.DEFAULT_TEXTS.OK,
        btnOKClass: null,
        callback: null
      };
    return e = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? t.extend(!0, n, arguments[0]) : t.extend(!0, n, {
      message: arguments[0],
      closable: !1,
      buttonLabel: o.DEFAULT_TEXTS.OK,
      callback: "undefined" != typeof arguments[1] ? arguments[1] : null
    }), null === e.btnOKClass && (e.btnOKClass = ["btn", e.type.split("-")[1]].join("-")), new o({
      type: e.type,
      title: e.title,
      message: e.message,
      closable: e.closable,
      draggable: e.draggable,
      data: {
        callback: e.callback
      },
      buttons: [{
        label: e.btnCancelLabel,
        action: function(t) {
          return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !1) === !1 ? !1 : t.close()
        }
      }, {
        label: e.btnOKLabel,
        cssClass: e.btnOKClass,
        action: function(t) {
          return "function" == typeof t.getData("callback") && t.getData("callback").call(this, !0) === !1 ? !1 : t.close()
        }
      }]
    }).open()
  }, o.warning = function(t, e) {
    return new o({
      type: o.TYPE_WARNING,
      message: t
    }).open()
  }, o.danger = function(t, e) {
    return new o({
      type: o.TYPE_DANGER,
      message: t
    }).open()
  }, o.success = function(t, e) {
    return new o({
      type: o.TYPE_SUCCESS,
      message: t
    }).open()
  }, o
});