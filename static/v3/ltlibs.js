var LotteryUtils, LotteryMain, AppDataInitData;
var lotteryClsFile = function () {
    var ssc_utils = function () {
        var _inputCheck_Num = function (datasel, l, fun, sort) {
            fun = $.isFunction(fun) ? fun : function (n, l) {
                return true;
            };
            var newsel = [];
            if (sort) {
                var sortsel = [];
                $.each(datasel, function (i, n) {
                    sortsel.push(n.split('').sort().toString().replace(/\,/g, ''));
                });
                datasel = sortsel;
            };
            datasel = ArrayUtil.unique(datasel);
            var regex = new RegExp('^[0-9]{' + l + '}$');
            $.each(datasel, function (i, n) {
                if (regex.test(n) && fun(n, l)) {
                    newsel.push(n);
                }
            });
            return newsel;
        };
        var _HHZXCheck_Num = function (n, l) {
            var a = new Array();
            if (l == 2) {
                a = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];
            } else {
                a = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999'];
            };
            return $.inArray(n, a) == -1 ? true : false;
        };
        var _inputNumbers = function (type, datasel) {
            var nums = 0,
                tmp_nums = 1;
            switch (type) {
            case 'rx3z3':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 3;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                if (s > 1) {
                                    nums += s * (s - 1);
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx4_zux_z24':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 4;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                var autosumsols = Array.apply(null, {
                                    length: s
                                }).map(Number.call, Number);
                                if (s > 3) {
                                    cmb = Combinatorics.combination(autosumsols, 4);
                                    nums += cmb.length;
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx4_zux_z6':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var dpsel = datasel[1];
                    var withouta = _.clone(datasel[1]);
                    withouta.unshift(newsel);
                    var xor = _.xor(dpsel, newsel);
                    var outdiff = _.without.apply(this, withouta);
                    var jiaoji = _.intersection(newsel, dpsel);
                    var topleft = [];
                    if (jiaoji.length > 0) {
                        topleft = _.xor(dpsel, jiaoji);
                    };
                    var autosumsols;
                    var m = 4;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = dpsel.length;
                                var autosumsols = Array.apply(null, {
                                    length: s
                                }).map(Number.call, Number);
                                if (s > 1) {
                                    cmb = Combinatorics.combination(autosumsols, 2);
                                    nums += cmb.length;
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx4_zux_z4':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var dpsel = datasel[1];
                    var newsel = datasel[2];
                    var withouta = _.clone(datasel[1]);
                    withouta.unshift(newsel);
                    var xor = _.xor(dpsel, newsel);
                    var outdiff = _.without.apply(this, withouta);
                    var jiaoji = _.intersection(newsel, dpsel);
                    var topleft = [];
                    if (jiaoji.length > 0) {
                        topleft = _.xor(dpsel, jiaoji);
                    };
                    var autosumsols;
                    var m = 4;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                if (s >= 1) {
                                    if (dpsel.length == 1) {
                                        autosumsols = Array.apply(null, {
                                            length: outdiff.length
                                        }).map(Number.call, Number);
                                        cmb = Combinatorics.combination(autosumsols, 1);
                                        nums += cmb.length;
                                    } else if (dpsel.length == 10 && newsel.length == 10) {
                                        autosumsols = Array.apply(null, {
                                            length: newsel.length - 1
                                        }).map(Number.call, Number);
                                        cmb = Combinatorics.combination(autosumsols, 1);
                                        nums += cmb.length * dpsel.length;
                                    } else {
                                        var allcount = [];
                                        for (j = 0; j < dpsel.length; j++) {
                                            var outthis = [];
                                            outthis.push(dpsel[j]);
                                            outthis.unshift(newsel);
                                            var thisout = _.without.apply(this, outthis);
                                            cmb = Combinatorics.combination(thisout, 1);
                                            nums += cmb.length * 1;
                                        }
                                    }
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx4_zux_z12':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var dpsel = datasel[1];
                    var newsel = datasel[2];
                    var withouta = _.clone(datasel[1]);
                    withouta.unshift(newsel);
                    var xor = _.xor(dpsel, newsel);
                    var outdiff = _.without.apply(this, withouta);
                    var jiaoji = _.intersection(newsel, dpsel);
                    var topleft = [];
                    if (jiaoji.length > 0) {
                        topleft = _.xor(dpsel, jiaoji);
                    };
                    var autosumsols;
                    var m = 4;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                var autosumsols = Array.apply(null, {
                                    length: s
                                }).map(Number.call, Number);
                                if (s > 1) {
                                    if (dpsel.length == 1) {
                                        autosumsols = Array.apply(null, {
                                            length: outdiff.length
                                        }).map(Number.call, Number);
                                        cmb = Combinatorics.combination(autosumsols, 2);
                                        nums += cmb.length;
                                    } else if (dpsel.length == 10 && newsel.length == 10) {
                                        autosumsols = Array.apply(null, {
                                            length: newsel.length - 1
                                        }).map(Number.call, Number);
                                        cmb = Combinatorics.combination(autosumsols, 2);
                                        nums += cmb.length * dpsel.length;
                                    } else {
                                        var allcount = [];
                                        for (j = 0; j < dpsel.length; j++) {
                                            var outthis = [];
                                            outthis.push(dpsel[j]);
                                            outthis.unshift(newsel);
                                            var thisout = _.without.apply(this, outthis);
                                            cmb = Combinatorics.combination(thisout, 2);
                                            nums += cmb.length * 1;
                                        }
                                    }
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx3z6':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 3;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                if (s > 2) {
                                    nums += s * (s - 1) * (s - 2) / 6;
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx2zx':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 2;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            for (var i = 0; i < maxplace; i++) {
                                var s = newsel.length;
                                if (s > 1) {
                                    nums += s * (s - 1) / 2;
                                }
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx2_zx_hz':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 2;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            var cc = {
                                0: 1,
                                1: 2,
                                2: 3,
                                3: 4,
                                4: 5,
                                5: 6,
                                6: 7,
                                7: 8,
                                8: 9,
                                9: 10,
                                10: 9,
                                11: 8,
                                12: 7,
                                13: 6,
                                14: 5,
                                15: 4,
                                16: 3,
                                17: 2,
                                18: 1
                            };
                            var s = newsel.length;
                            for (var i = 0; i < s; i++) {
                                nums += cc[parseInt(datasel[1][i], 10)];
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx3_zx_hz':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 3;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            var cc = {
                                0: 1,
                                1: 3,
                                2: 6,
                                3: 10,
                                4: 15,
                                5: 21,
                                6: 28,
                                7: 36,
                                8: 45,
                                9: 55,
                                10: 63,
                                11: 69,
                                12: 73,
                                13: 75,
                                14: 75,
                                15: 73,
                                16: 69,
                                17: 63,
                                18: 55,
                                19: 45,
                                20: 36,
                                21: 28,
                                22: 21,
                                23: 15,
                                24: 10,
                                25: 6,
                                26: 3,
                                27: 1
                            };
                            var s = newsel.length;
                            for (var i = 0; i < s; i++) {
                                nums += cc[parseInt(datasel[1][i], 10)];
                            };
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx2_zux_hz':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 2;
                    var h = ArrayUtil.ComNum(place, m);
                    if (h > 0) {
                        var cc = {
                            1: 1,
                            2: 1,
                            3: 2,
                            4: 2,
                            5: 3,
                            6: 3,
                            7: 4,
                            8: 4,
                            9: 5,
                            10: 4,
                            11: 4,
                            12: 3,
                            13: 3,
                            14: 2,
                            15: 2,
                            16: 1,
                            17: 1
                        };
                        var s = newsel.length;
                        for (var i = 0; i < s; i++) {
                            nums += cc[parseInt(datasel[1][i], 10)];
                        };
                        nums *= h;
                    }
                };
                break;
            case 'rx3_zux_hz':
                var maxplace = 1;
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = datasel[1];
                    var m = 3;
                    var h = ArrayUtil.ComNum(place, m);
                    if (h > 0) {
                        var cc = {
                            0: 1,
                            1: 1,
                            2: 2,
                            3: 2,
                            4: 4,
                            5: 5,
                            6: 6,
                            7: 8,
                            8: 10,
                            9: 11,
                            10: 13,
                            11: 14,
                            12: 14,
                            13: 15,
                            14: 15,
                            15: 14,
                            16: 14,
                            17: 13,
                            18: 11,
                            19: 10,
                            20: 8,
                            21: 6,
                            22: 5,
                            23: 4,
                            24: 2,
                            25: 2,
                            26: 1
                        };
                        var s = newsel.length;
                        for (var i = 0; i < s; i++) {
                            nums += cc[parseInt(datasel[1][i], 10)];
                        };
                        nums *= h;
                    }
                };
                break;
            case 'rx2ds':
            case 'rx3ds':
            case 'rx4ds':
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = [];
                    for (var i = 1; i < datasel.length; i++) {
                        newsel.push(datasel[i]);
                    };
                    var m = 0;
                    if (type == 'rx2ds') {
                        m = 2;
                    };
                    if (type == 'rx3ds') {
                        m = 3;
                    };
                    if (type == 'rx4ds') {
                        m = 4;
                    };
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            nums += _inputCheck_Num(newsel, m).length;
                            nums *= h;
                        }
                    }
                };
                break;
            case 'rx3hh':
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = [];
                    for (var i = 1; i < datasel.length; i++) {
                        newsel.push(datasel[i]);
                    };
                    var m = 3;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            nums = _inputCheck_Num(newsel, 3, _HHZXCheck_Num, true).length;
                            nums *= h;
                        }
                    }
                };
                break;
            case 'wxzhixds':
                nums = _inputCheck_Num(datasel, 5).length;
                break;
            case 'sixzhixdsh':
            case 'sixzhixdsq':
                nums = _inputCheck_Num(datasel, 4).length;
                break;
            case 'sxzhixdsh':
            case 'sxzhixdsz':
            case 'sxzhixdsq':
                nums = _inputCheck_Num(datasel, 3).length;
                break;
            case 'sxhhzxh':
            case 'sxhhzxz':
            case 'sxhhzxq':
                nums = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true).length;
                break;
            case 'exzhixdsh':
            case 'exzhixdsq':
                nums = _inputCheck_Num(datasel, 2).length;
                break;
            case 'exzuxdsh':
            case 'exzuxdsq':
                nums = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true).length;
                break;
            case 'wxzux120':
                var s = datasel[0].length;
                if (s > 4) {
                    nums += ArrayUtil.ComNum(s, 5);
                };
                break;
            case 'wxzux60':
            case 'wxzux30':
            case 'wxzux20':
            case 'wxzux10':
            case 'wxzux5':
                var minchosen = new Array();
                if (type == 'wxzux60') {
                    minchosen = [1, 3];
                };
                if (type == 'wxzux30') {
                    minchosen = [2, 1];
                };
                if (type == 'wxzux20') {
                    minchosen = [1, 2];
                };
                if (type == 'wxzux10' || type == 'wxzux5') {
                    minchosen = [1, 1];
                };
                if (datasel[0].length >= minchosen[0] && datasel[1].length >= minchosen[1]) {
                    var h = ArrayUtil.intersect(datasel[0], datasel[1]).length;
                    tmp_nums = ArrayUtil.ComNum(datasel[0].length, minchosen[0]) * ArrayUtil.ComNum(datasel[1].length,
                        minchosen[1]);
                    if (h > 0) {
                        if (type == 'wxzux60') {
                            tmp_nums -= ArrayUtil.ComNum(h, 1) * ArrayUtil.ComNum(datasel[1].length - 1, 2);
                        };
                        if (type == 'wxzux30') {
                            tmp_nums -= ArrayUtil.ComNum(h, 2) * ArrayUtil.ComNum(2, 1);
                            if (datasel[0].length - h > 0) {
                                tmp_nums -= ArrayUtil.ComNum(h, 1) * ArrayUtil.ComNum(datasel[0].length - h, 1);
                            }
                        };
                        if (type == 'wxzux20') {
                            tmp_nums -= ArrayUtil.ComNum(h, 1) * ArrayUtil.ComNum(datasel[1].length - 1, 1);
                        };
                        if (type == 'wxzux10' || type == 'wxzux5') {
                            tmp_nums -= ArrayUtil.ComNum(h, 1);
                        }
                    };
                    nums += tmp_nums;
                };
                break;
            case 'sixzux24h':
            case 'sixzux24q':
                var s = datasel[0].length;
                if (s > 3) {
                    nums += ArrayUtil.ComNum(s, 4);
                };
                break;
            case 'sixzux6h':
            case 'sixzux6q':
                var minchosen = [2];
                if (datasel[0].length >= minchosen[0]) {
                    nums += ArrayUtil.ComNum(datasel[0].length, minchosen[0]);
                };
                break;
            case 'sixzux12h':
            case 'sixzux12q':
            case 'sixzux4h':
            case 'sixzux4q':
                var minchosen = new Array();
                if (type == 'sixzux12h' || type == 'sixzux12q') {
                    minchosen = [1, 2];
                };
                if (type == 'sixzux4h' || type == 'sixzux4q') {
                    minchosen = [1, 1];
                };
                if (datasel[0].length >= minchosen[0] && datasel[1].length >= minchosen[1]) {
                    var h = ArrayUtil.intersect(datasel[0], datasel[1]).length;
                    tmp_nums = ArrayUtil.ComNum(datasel[0].length, minchosen[0]) * ArrayUtil.ComNum(datasel[1].length,
                        minchosen[1]);
                    if (h > 0) {
                        if (type == 'sixzux12h' || type == 'sixzux12q') {
                            tmp_nums -= ArrayUtil.ComNum(h, 1) * ArrayUtil.ComNum(datasel[1].length - 1, 1);
                        };
                        if (type == 'sixzux4h' || type == 'sixzux4q') {
                            tmp_nums -= ArrayUtil.ComNum(h, 1);
                        }
                    };
                    nums += tmp_nums;
                };
                break;
            case 'sxzuxzsh':
            case 'sxzuxzsz':
            case 'sxzuxzsq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1);
                    }
                };
                break;
            case 'sxzuxzlh':
            case 'sxzuxzlz':
            case 'sxzuxzlq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 2) {
                        nums += s * (s - 1) * (s - 2) / 6;
                    }
                };
                break;
            case 'wxzhixzh':
            case 'sixzhixzhh':
            case 'sixzhixzhq':
                var maxplace = 0;
                if ('wxzhixzh' == type) {
                    maxplace = 5;
                };
                if ('sixzhixzhh' == type || 'sixzhixzhq' == type) {
                    maxplace = 4;
                };
                for (var i = 0; i < maxplace; i++) {
                    if (datasel[i].length == 0) {
                        tmp_nums = 0;
                        break;
                    };
                    tmp_nums *= datasel[i].length;
                };
                nums += tmp_nums * maxplace;
                break;
            case 'sxzhixhzh':
            case 'sxzhixhzz':
            case 'sxzhixhzq':
            case 'exzhixhzh':
            case 'exzhixhzq':
                var cc = {
                    0: 1,
                    1: 3,
                    2: 6,
                    3: 10,
                    4: 15,
                    5: 21,
                    6: 28,
                    7: 36,
                    8: 45,
                    9: 55,
                    10: 63,
                    11: 69,
                    12: 73,
                    13: 75,
                    14: 75,
                    15: 73,
                    16: 69,
                    17: 63,
                    18: 55,
                    19: 45,
                    20: 36,
                    21: 28,
                    22: 21,
                    23: 15,
                    24: 10,
                    25: 6,
                    26: 3,
                    27: 1
                };
                if (type == 'exzhixhzh' || type == 'exzhixhzq') {
                    cc = {
                        0: 1,
                        1: 2,
                        2: 3,
                        3: 4,
                        4: 5,
                        5: 6,
                        6: 7,
                        7: 8,
                        8: 9,
                        9: 10,
                        10: 9,
                        11: 8,
                        12: 7,
                        13: 6,
                        14: 5,
                        15: 4,
                        16: 3,
                        17: 2,
                        18: 1
                    };
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'qsm_zux_hz':
            case 'zsm_zx_hz':
            case 'hsm_zux_hz':
                var cc = {
                    0: 1,
                    1: 1,
                    2: 2,
                    3: 2,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 8,
                    8: 10,
                    9: 11,
                    10: 13,
                    11: 14,
                    12: 14,
                    13: 15,
                    14: 15,
                    15: 14,
                    16: 14,
                    17: 13,
                    18: 11,
                    19: 10,
                    20: 8,
                    21: 6,
                    22: 5,
                    23: 4,
                    24: 2,
                    25: 2,
                    26: 1
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'em_zux_qhz':
            case 'em_zux_hhz':
                var cc = {
                    1: 1,
                    2: 1,
                    3: 2,
                    4: 2,
                    5: 3,
                    6: 3,
                    7: 4,
                    8: 4,
                    9: 5,
                    10: 4,
                    11: 4,
                    12: 3,
                    13: 3,
                    14: 2,
                    15: 2,
                    16: 1,
                    17: 1
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'ssc_zxkd_qs':
            case 'ssc_zxkd_zs':
            case 'ssc_zxkd_hs':
                var cc = {
                    0: 10,
                    1: 54,
                    2: 96,
                    3: 126,
                    4: 144,
                    5: 150,
                    6: 144,
                    7: 126,
                    8: 96,
                    9: 54
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'ssc_zxkd_qer':
            case 'ssc_zxkd_her':
                var cc = {
                    0: 10,
                    1: 18,
                    2: 16,
                    3: 14,
                    4: 12,
                    5: 10,
                    6: 8,
                    7: 6,
                    8: 4,
                    9: 2
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'ssc_zuxbd_qs':
            case 'ssc_zuxbd_zs':
            case 'ssc_zuxbd_hs':
                var cc = {
                    0: 54,
                    1: 54,
                    2: 54,
                    3: 54,
                    4: 54,
                    5: 54,
                    6: 54,
                    7: 54,
                    8: 54,
                    9: 54
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'ssc_zxbd_qer':
            case 'ssc_zxbd_her':
                var cc = {
                    0: 9,
                    1: 9,
                    2: 9,
                    3: 9,
                    4: 9,
                    5: 9,
                    6: 9,
                    7: 9,
                    8: 9,
                    9: 9
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'sschzws_qs':
            case 'sschzws_zs':
            case 'sschzws_hs':
                var cc = {
                    0: 1,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: 1,
                    5: 1,
                    6: 1,
                    7: 1,
                    8: 1,
                    9: 1
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            case 'ssctesh_qs':
            case 'ssctesh_zs':
            case 'ssctesh_hs':
                var cc = {
                    '豹子': 1,
                    '顺子': 1,
                    '对子': 1,
                    '半顺': 1,
                    '杂六': 1
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[datasel[0][i]];
                };
                break;
            case 'ssc5x_sumdxds':
                var cc = {
                    '总和大': 1,
                    '总和小': 1,
                    '总和单': 1,
                    '总和双': 1
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[datasel[0][i]];
                };
                break;
            case 'rx2fs':
            case 'rx3fs':
            case 'rx4fs':
                var minplace = 0;
                if (type == 'rx2fs') {
                    minplace = 2;
                };
                if (type == 'rx3fs') {
                    minplace = 3;
                };
                if (type == 'rx4fs') {
                    minplace = 4;
                };
                var newsel = [];
                for (var i = 0; i < datasel.length; i++) {
                    if (datasel[i].length != 0) {
                        newsel.push(datasel[i]);
                    }
                };
                if (newsel.length >= minplace) {
                    var l = ArrayUtil.ComNum(newsel.length, minplace);
                    for (var i = 0; i < l; i++) {
                        tmp_nums = 1;
                        var data = ArrayUtil.ComVal(newsel, minplace, i);
                        for (var j = 0; j < data.length; j++) {
                            tmp_nums *= data[j].length;
                        };
                        nums += tmp_nums;
                    }
                };
                break;
            case 'dw':
                var maxplace = 5;
                for (var i = 0; i < maxplace; i++) {
                    nums += datasel[i].length;
                };
                break;
            case 'bdw2mh':
            case 'bdw2mz':
            case 'bdw2mq':
            case 'exzuxfsh':
            case 'exzuxfsq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1) / 2;
                    }
                };
                break;
            case 'kdqs':
            case 'kdzs':
            case 'kdhs':
            case 'kdqe':
            case 'kdhe':
                var cc = {
                    0: 10,
                    1: 54,
                    2: 96,
                    3: 126,
                    4: 144,
                    5: 150,
                    6: 144,
                    7: 126,
                    8: 96,
                    9: 54
                };
                if (type == 'kdqe' || type == 'kdhe') {
                    cc = {
                        0: 10,
                        1: 18,
                        2: 16,
                        3: 14,
                        4: 12,
                        5: 10,
                        6: 8,
                        7: 6,
                        8: 4,
                        9: 2
                    };
                };
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)];
                };
                break;
            default:
                var maxplace = 0;
                switch (type) {
                case 'wxzhixfs':
                    maxplace = 5;
                    break;
                case 'sixzhixfsh':
                case 'sixzhixfsq':
                    maxplace = 4;
                    break;
                case 'sxzhixfsh':
                case 'sxzhixfsz':
                case 'sxzhixfsq':
                    maxplace = 3;
                    break;
                case 'exzhixfsh':
                case 'exzhixfsq':
                case 'dxdsh':
                case 'dxdsq':
                    maxplace = 2;
                    break;
                case 'bdd_bdd_wx2':
                case 'bdd_bdd_qsix2':
                case 'bdd_bdd_hsix2':
                    var dpsel = datasel[0];
                    if (dpsel.length > 0) {
                        var autosumsols = Array.apply(null, {
                            length: dpsel.length
                        }).map(Number.call, Number);
                        if (autosumsols.length > 1) {
                            cmb = Combinatorics.combination(autosumsols, 2);
                            nums = cmb.length;
                        } else {
                            nums = 0;
                        }
                    } else {
                        nums = 0;
                    };
                    break;
                case 'bdd_bdd_wx3':
                    var dpsel = datasel[0];
                    var autosumsols = Array.apply(null, {
                        length: dpsel.length
                    }).map(Number.call, Number);
                    if (autosumsols.length > 2) {
                        cmb = Combinatorics.combination(autosumsols, 3);
                        nums = cmb.length;
                    } else {
                        nums = 0;
                    };
                    break;
                case 'bdw1mh':
                case 'bdw1mz':
                case 'bdw1mq':
                case 'qwyffs':
                case 'qwhscs':
                case 'qwsxbx':
                case 'qwsjfc':
                case 'lhwq':
                case 'lhwb':
                case 'lhws':
                case 'lhwg':
                case 'lhqb':
                case 'lhqs':
                case 'lhqg':
                case 'lhbs':
                case 'lhbg':
                case 'lhsg':
                case 'bdd_bdd_wx1':
                case 'bdd_bdd_qsix1':
                case 'bdd_bdd_hsix1':
                    maxplace = 1;
                    break;
                };
                if (datasel.length == maxplace) {
                    for (var i = 0; i < maxplace; i++) {
                        if (datasel[i].length == 0) {
                            tmp_nums = 0;
                            break;
                        };
                        tmp_nums *= datasel[i].length;
                    };
                    nums += tmp_nums;
                }
            };
            return nums;
        };
        var _formatSelect_Num = function (datasel, m, n) {
            var newsel = new Array();
            if (!m) m = 0;
            if (!n) n = 0;
            for (var i = 0; i < m; i++) {
                newsel.push('-');
            };
            for (var i = 0; i < datasel.length; i++) {
                var f = datasel[i].toString().replace(/\,/g, '');
                if (f == '') {
                    newsel.push('-');
                } else {
                    newsel.push(f);
                }
            };
            for (var i = 0; i < n; i++) {
                newsel.push('-');
            };
            return newsel.toString();
        };
        var _formatTextarea_Num = function (type, datasel) {
            switch (type) {
            case 'wxzhixds':
                datasel = _inputCheck_Num(datasel, 5);
                break;
            case 'sixzhixdsh':
            case 'sixzhixdsq':
                datasel = _inputCheck_Num(datasel, 4);
                break;
            case 'sxzhixdsh':
            case 'sxzhixdsz':
            case 'sxzhixdsq':
                datasel = _inputCheck_Num(datasel, 3);
                break;
            case 'sxhhzxh':
            case 'sxhhzxz':
            case 'sxhhzxq':
                datasel = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true);
                break;
            case 'exzhixdsh':
            case 'exzhixdsq':
                datasel = _inputCheck_Num(datasel, 2);
                break;
            case 'exzuxdsh':
            case 'exzuxdsq':
                datasel = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true);
                break;
            case 'rx2ds':
            case 'rx3ds':
            case 'rx4ds':
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = [];
                    for (var i = 1; i < datasel.length; i++) {
                        newsel.push(datasel[i]);
                    };
                    var m = 0;
                    if (type == 'rx2ds') {
                        m = 2;
                    };
                    if (type == 'rx3ds') {
                        m = 3;
                    };
                    if (type == 'rx4ds') {
                        m = 4;
                    };
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            return '[' + datasel[0] + ']' + _inputCheck_Num(newsel, m);
                        }
                    }
                };
                break;
            case 'rx3hh':
                if (datasel.length > 1) {
                    var place = 0;
                    for (var i = 0; i < datasel[0].length; i++) {
                        if (datasel[0][i] == '√') place++;
                    };
                    var newsel = [];
                    for (var i = 1; i < datasel.length; i++) {
                        newsel.push(datasel[i]);
                    };
                    var m = 3;
                    if (place >= m) {
                        var h = ArrayUtil.ComNum(place, m);
                        if (h > 0) {
                            return '[' + datasel[0] + ']' + _inputCheck_Num(newsel, 3, _HHZXCheck_Num, true);
                        }
                    }
                };
                break;
            default:
                break;
            };
            return datasel.toString().replace(/\,/g, ' ');
        };
        var _inputFormat = function (type, datasel) {
            switch (type) {
            case 'wxzhixds':
            case 'sixzhixdsh':
            case 'sixzhixdsq':
            case 'sxzhixdsh':
            case 'sxzhixdsz':
            case 'sxzhixdsq':
            case 'sxhhzxh':
            case 'sxhhzxz':
            case 'sxhhzxq':
            case 'exzhixdsh':
            case 'exzhixdsq':
            case 'exzuxdsh':
            case 'exzuxdsq':
            case 'rx2ds':
            case 'rx3ds':
            case 'rx3hh':
            case 'rx4ds':
                return _formatTextarea_Num(type, datasel);
            case 'rx3z3':
            case 'rx3z6':
            case 'rx2zx':
            case 'rx4_zux_z24':
                var space = datasel[0];
                return '[' + space + ']' + ArrayUtil.remove(datasel, 0).toString();
            case 'rx4_zux_z12':
            case 'rx4_zux_z4':
                var space = datasel[0];
                return '[' + space + ']' + datasel[1].join('') + ',' + datasel[2].join('');
            case 'rx4_zux_z6':
                var space = datasel[0];
                return '[' + space + ']' + datasel[1].join(',');
            case 'rx2_zx_hz':
            case 'rx2_zux_hz':
            case 'rx3_zx_hz':
            case 'rx3_zux_hz':
                var space = datasel[0];
                return '[' + space + ']' + ArrayUtil.remove(datasel, 0).toString();
            case 'wxzux120':
            case 'sixzux24h':
            case 'sixzux24q':
            case 'sixzux6h':
            case 'sixzux6q':
            case 'sxzuxzsh':
            case 'sxzuxzsz':
            case 'sxzuxzsq':
            case 'sxzuxzlh':
            case 'sxzuxzlz':
            case 'sxzuxzlq':
            case 'exzuxfsh':
            case 'exzuxfsq':
            case 'bdw1mh':
            case 'bdw1mz':
            case 'bdw1mq':
            case 'bdw2mh':
            case 'bdw2mz':
            case 'bdw2mq':
            case 'qwyffs':
            case 'qwhscs':
            case 'qwsxbx':
            case 'qwsjfc':
            case 'sxzhixhzh':
            case 'sxzhixhzz':
            case 'sxzhixhzq':
            case 'exzhixhzh':
            case 'exzhixhzq':
            case 'kdqs':
            case 'kdzs':
            case 'kdhs':
            case 'kdqe':
            case 'kdhe':
            case 'hsm_zux_hz':
                return datasel.toString();
            case 'lhwq':
            case 'lhwb':
            case 'lhws':
            case 'lhwg':
            case 'lhqb':
            case 'lhqs':
            case 'lhqg':
            case 'lhbs':
            case 'lhbg':
            case 'lhsg':
                return datasel[0].toString().replace(/\,/g, '|');
            case 'ssc5x_sumdxds':
            case 'ssctesh_qs':
            case 'ssctesh_zs':
            case 'ssctesh_hs':
            case 'qsm_zux_hz':
            case 'em_zux_qhz':
            case 'em_zux_hhz':
                return datasel[0].toString();
            case 'sixzhixfsh':
            case 'sixzhixzhh':
                return _formatSelect_Num(datasel, 1);
            case 'sixzhixfsq':
            case 'sixzhixzhq':
                return _formatSelect_Num(datasel, 0, 1);
            case 'sxzhixfsh':
                return _formatSelect_Num(datasel, 2);
            case 'sxzhixfsz':
                return _formatSelect_Num(datasel, 1, 1);
            case 'sxzhixfsq':
                return _formatSelect_Num(datasel, 0, 2);
            case 'exzhixfsh':
                return _formatSelect_Num(datasel, 3);
            case 'exzhixfsq':
                return _formatSelect_Num(datasel, 0, 3);
            default:
                return _formatSelect_Num(datasel);
            }
        };
        var _typeFormat = function (code) {
            var a = [code[0], code[1], code[2]];
            var b = [code[2], code[3], code[4]];
            var _a = a.uniquelize();
            var _b = b.uniquelize();
            var arr = [];
            if (_a.length == 1) arr[0] = '豹子';
            if (_a.length == 2) arr[0] = '组三';
            if (_a.length == 3) arr[0] = '组六';
            if (_b.length == 1) arr[1] = '豹子';
            if (_b.length == 2) arr[1] = '组三';
            if (_b.length == 3) arr[1] = '组六';
            return arr;
        };
        return {
            namespace: 'ssc',
            inputNumbers: _inputNumbers,
            inputFormat: _inputFormat,
            typeFormat: _typeFormat
        }
    }();
    var ssc_main = function () {
        var $Lottery;
        var $DownCode;
        var $FenDownCode;
        var $LiDownCode;
        var $Method;
        var $SysCode;
        var $SysUnitMoney;
        var $UserCode;
        var $UserLp;
        var $UserMaxCode;
        var $UserMinCode;
        var $bData = {}, $bList = [];
        var Layout = [{
                title: "五星",
                rows: [[{
                            title: "五星直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "wxzhixfs",
                                    realname: "[五星_复式]",
                                    tips: "从万位、千位、百位、十位、个位各选一个号码组成一注。",
                                    example: "投注方案：23456；<br />开奖号码：23456，<br />",
                                    help: "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "wxzhixds",
                                    realname: "[五星_单式]",
                                    tips: "手动输入号码，至少输入1个五位数号码组成一注。",
                                    example: "投注方案：23456； 开奖号码：23456，即中五星直选一等奖",
                                    help: "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {},
                                    compress: true
                                }, {
                                    showname: "组合",
                                    shortname: "wxzhixzh",
                                    realname: "[五星_组合]",
                                    tips: "从个、十、百、千、万位各选一个号码组成五注。",
                                    example: "五星组合示例，如购买：4+5+6+7+8，该票共10元，由以下5注：45678(五星)、5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：45678，即可中五星、四星、三星、二星、一星的一等奖各1注。",
                                    help: "从万位、千位、百位、十位、个位中至少各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "五星组选",
                            columns: [{
                                    showname: "组选120",
                                    shortname: "wxzux120",
                                    realname: "[五星_组选120]",
                                    tips: "从0-9中选择5个号码组成一注。",
                                    example: "投注方案：02568，开奖号码的五个数字只要包含0、2、5、6、8，即可中五星组选120一等奖。",
                                    help: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选60",
                                    shortname: "wxzux60",
                                    realname: "[五星_组选60]",
                                    tips: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注。",
                                    example: "投注方案：二重号：8，单号：0、2、5，只要开奖的5个数字包括 0、2、5、8、8，即可中五星组选60一等奖。",
                                    help: "选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选30",
                                    shortname: "wxzux30",
                                    realname: "[五星_组选30]",
                                    tips: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注。",
                                    example: "投注方案：二重号：2、8，单号：0，只要开奖的5个数字包括 0、2、2、8、8，即可中五星组选30一等奖。",
                                    help: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选20",
                                    shortname: "wxzux20",
                                    realname: "[五星_组选20]",
                                    tips: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。",
                                    example: "投注方案：三重号：8，单号：0、2，只要开奖的5个数字包括 0、2、8、8、8，即可中五星组选20一等奖。",
                                    help: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "三重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选10",
                                    shortname: "wxzux10",
                                    realname: "[五星_组选10]",
                                    tips: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。",
                                    example: "投注方案：三重号：8，二重号：2，只要开奖的5个数字包括 2、2、8、8、8，即可中五星组选10一等奖。",
                                    help: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "三重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选5",
                                    shortname: "wxzux5",
                                    realname: "[五星_组选5]",
                                    tips: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注。",
                                    example: "投注方案：四重号：8，单号：2，只要开奖的5个数字包括 2、8、8、8、8，即可中五星组选5一等奖。",
                                    help: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "四重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "五星其他",
                            columns: [{
                                    showname: "总和大小单双",
                                    shortname: "ssc5x_sumdxds",
                                    realname: "[总和大小单双]",
                                    tips: "选择一个号码形态。",
                                    example: "投注方案：总和大，开奖号码：16568，开奖号码的总和26，即中总和大",
                                    help: "从四个形态中任意选择1个形态或多个形态组成一注，所选号码形态与开奖号码的总和形态一直，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: ["总和大", "总和小", "总和单", "总和双"],
                                                cls: "long"
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "后四",
                rows: [[{
                            title: "后四直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "sixzhixfsh",
                                    realname: "[后四星_复式]",
                                    tips: "从千位、百位、十位、个位中选择一个4位数号码组成一注",
                                    example: "投注方案：3456；开奖号码：*3456，即中四星直选。",
                                    help: "从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "sixzhixdsh",
                                    realname: "[后四星_单式]",
                                    tips: "手动输入号码，至少输入1个四位数号码组成一注。",
                                    example: "投注方案：3456； 开奖号码：3456，即中四星直选一等奖",
                                    help: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {},
                                    compress: true
                                }, {
                                    showname: "组合",
                                    shortname: "sixzhixzhh",
                                    realname: "[后四星_组合]",
                                    tips: "在千位，百位，十位，个位任意位置上各选一个号码组成四注",
                                    example: "投注方案：购买5678，含以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成<br>开奖号码：45678，即可中四星、三星、二星、一星各1注",
                                    help: "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码全部相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。",
                                    select: {
                                        layout: [{
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "后四组选",
                            columns: [{
                                    showname: "组选24",
                                    shortname: "sixzux24h",
                                    realname: "[后四星_组选24]",
                                    tips: "从0-9中选择4个号码组成一注。",
                                    example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
                                    help: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选12",
                                    shortname: "sixzux12h",
                                    realname: "[后四星_组选12]",
                                    tips: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
                                    example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
                                    help: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选6",
                                    shortname: "sixzux6h",
                                    realname: "[后四星_组选6]",
                                    tips: "从“二重号”选择两个号码组成一注。",
                                    example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
                                    help: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选4",
                                    shortname: "sixzux4h",
                                    realname: "[后四星_组选4]",
                                    tips: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。",
                                    example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
                                    help: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "三重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "前四",
                rows: [[{
                            title: "前四直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "sixzhixfsq",
                                    realname: "[前四星_复式]",
                                    tips: "从万位、千位、百位、十位中选择一个4位数号码组成一注",
                                    example: "投注方案：3456；开奖号码：3456*，即中四星直选。",
                                    help: "从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "sixzhixdsq",
                                    realname: "[前四星_单式]",
                                    tips: "手动输入号码，至少输入1个四位数号码组成一注。",
                                    example: "投注方案：3456； 开奖号码：3456，即中四星直选一等奖",
                                    help: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {},
                                    compress: true
                                }, {
                                    showname: "组合",
                                    shortname: "sixzhixzhq",
                                    realname: "[前四星_组合]",
                                    tips: "在万位、千位、百位、十位任意位置上任意选择1个或1个以上号码。",
                                    example: "投注方案：1；开奖号码万位：1，即中定位胆万位一等奖。",
                                    help: "从万位、千位、百位、十位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "前四组选",
                            columns: [{
                                    showname: "组选24",
                                    shortname: "sixzux24q",
                                    realname: "[前四星_组选24]",
                                    tips: "从0-9中选择4个号码组成一注。",
                                    example: "投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。",
                                    help: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选12",
                                    shortname: "sixzux12q",
                                    realname: "[前四星_组选12]",
                                    tips: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
                                    example: "投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。",
                                    help: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选6",
                                    shortname: "sixzux6q",
                                    realname: "[前四星_组选6]",
                                    tips: "从“二重号”选择两个号码组成一注。",
                                    example: "投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。",
                                    help: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选4",
                                    shortname: "sixzux4q",
                                    realname: "[前四星_组选4]",
                                    tips: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。",
                                    example: "投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。",
                                    help: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "三重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "前三",
                rows: [[{
                            title: "前三直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "sxzhixfsq",
                                    realname: "[前三码_复式]",
                                    tips: "从万、千、百位各选一个号码组成一注。",
                                    example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
                                    help: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "sxzhixdsq",
                                    realname: "[前三码_单式]",
                                    tips: "手动输入号码，至少输入1个三位数号码组成一注。",
                                    example: "投注方案：345； 开奖号码：345，即中前三直选一等奖",
                                    help: "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "sxzhixhzq",
                                    realname: "[前三码_和值]",
                                    tips: "从0-27中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码前三位：001,010,100,即中前三直选一等奖",
                                    help: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "直选跨度",
                                    shortname: "ssc_zxkd_qs",
                                    realname: "[前三码_直选跨度]",
                                    tips: "从0-9中任意选择1个或1个以上号码",
                                    example: "投注方案：跨度8；开出的三个数字包括0,8,x，其中x≠9，即可中前三直选；",
                                    help: "开出的三个数字包括1,9,x，其中x≠0，即可中前三直选跨度。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                cls: "kd",
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "前三组选",
                            columns: [{
                                    showname: "组三",
                                    shortname: "sxzuxzsq",
                                    realname: "[前三码_组三]",
                                    tips: "从0-9中任意选择2个或2个以上号码。",
                                    example: "投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组选三一等奖。",
                                    help: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组三",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组六",
                                    shortname: "sxzuxzlq",
                                    realname: "[前三码_组六]",
                                    tips: "从0-9中任意选择3个或3个以上号码。",
                                    example: "投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组选六一等奖。",
                                    help: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组六",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "混合组选",
                                    shortname: "sxhhzxq",
                                    realname: "[前三码_混合组选]",
                                    tips: "手动输入号码，至少输入1个三位数号码。",
                                    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
                                    help: "键盘手动输入购买号码，3个数字为一注，开奖号码的万位、千位、百位符合后三组三或组六均为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "组选和值",
                                    shortname: "qsm_zux_hz",
                                    realname: "[前三码_和值]",
                                    tips: "从1-26中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码前三位：001,010,100,即中前三组选和值",
                                    help: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                                                        19, 20, 21, 22, 23, 24, 25, 26],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选包胆",
                                    shortname: "ssc_zuxbd_qs",
                                    realname: "[前三码_组选包胆]",
                                    tips: "从0-9中任选1个号码。",
                                    example: "投注方案：包胆3；开奖号码前三位：(1)出现3xx或者33x,即中前三组三；(2)出现3xy，即中前三组六。",
                                    help: "从0-9中任意选择1个号码组成一注，出现前三组三或组六，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: false,
                                                only: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "前三其他",
                            columns: [{
                                    showname: "特殊号",
                                    shortname: "ssctesh_qs",
                                    realname: "[前三码_特殊号]",
                                    tips: "从下方中任意选择1个或1个以上号码形态。",
                                    example: "投注方案：豹子，开奖号码：000xx，即中豹子；投注方案：顺子，开奖号码：123xx，即中顺子；投注方案：对子，开奖号码：001xx，即中对子；投注方案：半顺，开奖号码：124xx，即中半顺；投注方案：杂六，开奖号码：158xx，即中杂六",
                                    help: "从下方中选择1个号码形态组成1注，所选号码形态与开奖号码的形态相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: ["豹子", "顺子", "对子", "半顺", "杂六"]
                                            }]
                                    }
                                }, {
                                    showname: "和值尾数",
                                    shortname: "sschzws_qs",
                                    realname: "[前三码_和值尾数]",
                                    tips: "从0-9中选择1个号码。",
                                    example: "投注方案：和值尾数8，；开奖号码：前三位和值尾数为8，即中得和值尾数。",
                                    help: "从下方中选择1个号码组成1注，所选号码与开奖号码前三位和值的尾数相同，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "中三",
                rows: [[{
                            title: "中三直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "sxzhixfsz",
                                    realname: "[中三码_复式]",
                                    tips: "从千、百、十位各选一个号码组成一注。",
                                    example: "投注方案：456； 开奖号码：456，即中中三直选一等奖",
                                    help: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "sxzhixdsz",
                                    realname: "[中三码_单式]",
                                    tips: "手动输入号码，至少输入1个三位数号码组成一注。",
                                    example: "投注方案：345； 开奖号码：2345，即中中三直选一等奖",
                                    help: "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "sxzhixhzz",
                                    realname: "[中三码_和值]",
                                    tips: "从0-27中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码中间三位：01001,00010,00100,即中中三直选一等奖",
                                    help: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "直选跨度",
                                    shortname: "ssc_zxkd_zs",
                                    realname: "[中三码_直选跨度]",
                                    tips: "从0-9中任意选择1个或1个以上号码",
                                    example: "投注方案：跨度8；开出的三个数字包括0,8,x，其中x≠9，即可中 中三直选；",
                                    help: "开出的三个数字包括1,9,x，其中x≠0，即可中 中三直选跨度。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                cls: "kd",
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "中三组选",
                            columns: [{
                                    showname: "组三",
                                    shortname: "sxzuxzsz",
                                    realname: "[中三码_组三]",
                                    tips: "从0-9中任意选择2个或2个以上号码。",
                                    example: "投注方案：5,8,8；开奖号码中间三位：1个5，2个8 (顺序不限)，即中中三组选三一等奖。",
                                    help: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组三",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组六",
                                    shortname: "sxzuxzlz",
                                    realname: "[中三码_组六]",
                                    tips: "从0-9中任意选择3个或3个以上号码。",
                                    example: "投注方案：2,5,8；开奖号码中间三位：1个2、1个5、1个8 (顺序不限)，即中中三组选六一等奖。",
                                    help: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组六",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "混合组选",
                                    shortname: "sxhhzxz",
                                    realname: "[中三码_混合组选]",
                                    tips: "手动输入号码，至少输入1个三位数号码。",
                                    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中间三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
                                    help: "键盘手动输入购买号码，3个数字为一注，开奖号码的千位、百位、十位符合中三组三或组六均为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "组选和值",
                                    shortname: "zsm_zux_hz",
                                    realname: "[中三码_和值]",
                                    tips: "从1-26中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码中间三位：001,010,100,即中 中三组选和值",
                                    help: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                                                        19, 20, 21, 22, 23, 24, 25, 26],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选包胆",
                                    shortname: "ssc_zuxbd_zs",
                                    realname: "[前三码_组选包胆]",
                                    tips: "从0-9中任选1个号码。",
                                    example: "投注方案：包胆3；开奖号码中间三位：(1)出现3xx或者33x,即中 中三组三；(2)出现3xy，即中 中三组六。",
                                    help: "从0-9中任意选择1个号码组成一注，出现中三组三或组六，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: false,
                                                only: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "中三其他",
                            columns: [{
                                    showname: "特殊号",
                                    shortname: "ssctesh_zs",
                                    realname: "[中三码_特殊号]",
                                    tips: "从下方中任意选择1个或1个以上号码形态。",
                                    example: "投注方案：豹子，开奖号码：000xx，即中豹子；投注方案：顺子，开奖号码：123xx，即中顺子；投注方案：对子，开奖号码：001xx，即中对子；投注方案：半顺，开奖号码：124xx，即中半顺；投注方案：杂六，开奖号码：158xx，即中杂六",
                                    help: "从下方中选择1个号码形态组成1注，所选号码形态与开奖号码的形态相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: ["豹子", "顺子", "对子", "半顺", "杂六"]
                                            }]
                                    }
                                }, {
                                    showname: "和值尾数",
                                    shortname: "sschzws_zs",
                                    realname: "[中三码_和值尾数]",
                                    tips: "从0-9中选择1个号码。",
                                    example: "投注方案：和值尾数8，；开奖号码：中间三位和值尾数为8，即中得和值尾数。",
                                    help: "从下方中选择1个号码组成1注，所选号码与开奖号码中三位和值的尾数相同，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "后三",
                rows: [[{
                            title: "后三直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "sxzhixfsh",
                                    realname: "[后三码_复式]",
                                    tips: "从百位、十位、个位各选一个号码组成一注。",
                                    example: "投注方案：345；<br>投注方案：345；<br>即中后三直选一等奖",
                                    help: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "sxzhixdsh",
                                    realname: "[后三码_单式]",
                                    tips: "手动输入号码，至少输入1个三位数号码组成一注。",
                                    example: "投注方案：345； 开奖号码：345，即中后三直选一等奖",
                                    help: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "sxzhixhzh",
                                    realname: "[后三码_和值]",
                                    tips: "从0-27中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码后三位：001,010,100,即中后三直选一等奖",
                                    help: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "直选跨度",
                                    shortname: "ssc_zxkd_hs",
                                    realname: "[后三码_直选跨度]",
                                    tips: "从0-9中任意选择1个或1个以上号码",
                                    example: "投注方案：跨度8；开出的三个数字包括0,8,x，其中x≠9，即可中后三直选；",
                                    help: "开出的三个数字包括1,9,x，其中x≠0，即可中后三直选跨度。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                cls: "kd",
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "后三组选",
                            columns: [{
                                    showname: "组三",
                                    shortname: "sxzuxzsh",
                                    realname: "[后三码_组三]",
                                    tips: "从0-9中任意选择2个或2个以上号码。",
                                    example: "投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组选三一等奖。",
                                    help: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组三",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组六",
                                    shortname: "sxzuxzlh",
                                    realname: "[后三码_组六]",
                                    tips: "从0-9中任意选择3个或3个以上号码。",
                                    example: "投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组选六一等奖。",
                                    help: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "组六",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "混合组选",
                                    shortname: "sxhhzxh",
                                    realname: "[后三码_混合组选]",
                                    tips: "手动输入号码，至少输入1个三位数号码。",
                                    example: "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。",
                                    help: "键盘手动输入购买号码，3个数字为一注，开奖号码的百位、十位、个位符合后三组三或组六均为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "组选和值",
                                    shortname: "hsm_zux_hz",
                                    realname: "[后三码_和值]",
                                    tips: "从1-26中任意选择1个或1个以上号码",
                                    example: "投注方案：和值1；开奖号码后三位：001,010,100,即中后三组选和值",
                                    help: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                                                        19, 20, 21, 22, 23, 24, 25, 26],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选包胆",
                                    shortname: "ssc_zuxbd_hs",
                                    realname: "[后三码_组选包胆]",
                                    tips: "从0-9中任选1个号码。",
                                    example: "投注方案：包胆3；开奖号码后三位：(1)出现3xx或者33x,即中后三组三；(2)出现3xy，即中后三组六。",
                                    help: "从0-9中任意选择1个号码组成一注，出现后三组三或组六，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: false,
                                                only: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "后三其他",
                            columns: [{
                                    showname: "特殊号",
                                    shortname: "ssctesh_hs",
                                    realname: "[后三码_特殊号]",
                                    tips: "从下方中任意选择1个或1个以上号码形态。",
                                    example: "投注方案：豹子，开奖号码：000xx，即中豹子；投注方案：顺子，开奖号码：123xx，即中顺子；投注方案：对子，开奖号码：001xx，即中对子；投注方案：半顺，开奖号码：124xx，即中半顺；投注方案：杂六，开奖号码：158xx，即中杂六",
                                    help: "从下方中选择1个号码形态组成1注，所选号码形态与开奖号码的形态相同，且顺序不限，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: ["豹子", "顺子", "对子", "半顺", "杂六"]
                                            }]
                                    }
                                }, {
                                    showname: "和值尾数",
                                    shortname: "sschzws_hs",
                                    realname: "[后三码_和值尾数]",
                                    tips: "从0-9中选择1个号码。",
                                    example: "投注方案：和值尾数8，；开奖号码：后三位和值尾数为8，即中得和值尾数。",
                                    help: "从下方中选择1个号码组成1注，所选号码与开奖号码后三位和值的尾数相同，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "二星",
                rows: [[{
                            title: "后二星　直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "exzhixfsh",
                                    realname: "[后二码_直选_复式]",
                                    tips: "从十、个位各选一个号码组成一注。",
                                    example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。",
                                    help: "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "exzhixdsh",
                                    realname: "[后二码_直选_单式]",
                                    tips: "手动输入号码，至少输入1个两位数号码。",
                                    example: "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。",
                                    help: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "exzhixhzh",
                                    realname: "[后二码_直选_和值]",
                                    tips: "从0-18中任意选择1个或1个以上的和值号码。",
                                    example: "投注方案：和值1；开奖号码后二位：01,10，即中后二直选。",
                                    help: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "大小单双",
                                    shortname: "dxdsh",
                                    realname: "[后二星_大小单双]",
                                    tips: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注。",
                                    example: "投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双一等奖。",
                                    help: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "十位",
                                                balls: ["大", "小", "单", "双"]
                                            }, {
                                                title: "个位",
                                                balls: ["大", "小", "单", "双"]
                                            }]
                                    }
                                }, {
                                    showname: "跨度",
                                    shortname: "ssc_zxkd_her",
                                    realname: "[后二星_大小单双]",
                                    tips: "从0-9中选择1个号码。",
                                    example: "投注方案：跨度9；开奖号码为-,-,-,9,0或-,-,-,0,9，即中后二直选跨度。",
                                    help: "所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                cls: "kd",
                                                tools: true
                                            }]
                                    }
                                }]
                        }, {
                            title: "组选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "exzuxfsh",
                                    realname: "[后二码_组选_复式]",
                                    tips: "从0-9中任意选择2个或2个以上号码。",
                                    example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
                                    help: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "组选",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "exzuxdsh",
                                    realname: "[后二码_组选_单式]",
                                    tips: "手动输入号码，至少输入1个两位数号码。",
                                    example: "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。",
                                    help: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "和值",
                                    shortname: "em_zux_hhz",
                                    realname: "[后二码_组选和值]",
                                    tips: "从1-17中任意选择1个或1个以上号码。",
                                    example: "投注方案：和值1；开奖号码后二位：10或01(顺序不限，不含对子号)，即中后二组选。",
                                    help: "从1-17中任意选择1个或1个以上号码。所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "包胆",
                                    shortname: "ssc_zxbd_her",
                                    realname: "[后二码_组选_单式]",
                                    tips: "从0-9中任意选择1个包胆号码。",
                                    example: "投注方案：包胆号码8；开奖号码后二位：出现1个8（不包括2个8），即中后二组选。",
                                    help: "从0-9中任意选择1个包胆号码，开奖号码的十位、个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: false,
                                                only: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "前二星　直选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "exzhixfsq",
                                    realname: "[前二码_直选_复式]",
                                    tips: "从万、千位各选一个号码组成一注。",
                                    example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
                                    help: "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "exzhixdsq",
                                    realname: "[前二码_直选_单式]",
                                    tips: "手动输入号码，至少输入1个两位数号码。",
                                    example: "投注方案：58；开奖号码前二位：58，即中前二直选一等奖。",
                                    help: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "exzhixhzq",
                                    realname: "[前二码_直选_和值]",
                                    tips: "从0-18中任意选择1个或1个以上的和值号码。",
                                    example: "投注方案：和值1；开奖号码前二位：01,10，即中前二直选。",
                                    help: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "大小单双",
                                    shortname: "dxdsq",
                                    realname: "[前二星_大小单双]",
                                    tips: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注。",
                                    example: "投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双一等奖。",
                                    help: "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: ["大", "小", "单", "双"]
                                            }, {
                                                title: "千位",
                                                balls: ["大", "小", "单", "双"]
                                            }]
                                    }
                                }, {
                                    showname: "跨度",
                                    shortname: "ssc_zxkd_qer",
                                    realname: "[前二星_大小单双]",
                                    tips: "从0-9中选择1个号码。",
                                    example: "投注方案：跨度9；开奖号码为9,0,-,-,-或0,9,-,-,-，即中前二直选跨度。",
                                    help: "所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }, {
                            title: "组选",
                            columns: [{
                                    showname: "复式",
                                    shortname: "exzuxfsq",
                                    realname: "[前二码_组选_复式]",
                                    tips: "从0-9中任意选择2个或2个以上号码。",
                                    example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
                                    help: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "组选",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "exzuxdsq",
                                    realname: "[前二码_组选_单式]",
                                    tips: "手动输入号码，至少输入1个两位数号码。",
                                    example: "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。",
                                    help: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，顺序不限，即为中奖。",
                                    textarea: {}
                                }, {
                                    showname: "和值",
                                    shortname: "em_zux_qhz",
                                    realname: "[前二码_组选_单式]",
                                    tips: "从1-17中任意选择1个或1个以上号码。",
                                    example: "投注方案：和值1；开奖号码前二位：10或01 (顺序不限，不含对子号)，即中前二组选。",
                                    help: "从1-17中任意选择1个或1个以上号码。所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                                cls: "hz",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "包胆",
                                    shortname: "ssc_zxbd_qer",
                                    realname: "[前二码_组选_单式]",
                                    tips: "从0-9中任意选择1个包胆号码。",
                                    example: "投注方案：包胆号码8；开奖号码前二位：出现1个8（不包括2个8），即中前二组选。",
                                    help: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。",
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: false,
                                                only: true,
                                                cls: "bd"
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "定位胆",
                rows: [[{
                            title: "定位胆",
                            columns: [{
                                    showname: "定位胆",
                                    shortname: "dw",
                                    realname: "定位胆",
                                    tips: "在万千百十个位任意位置上任意选择1个或1个以上号码。",
                                    example: "投注方案：1；开奖号码万位：1，即中定位胆万位一等奖。",
                                    help: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "不定胆",
                rows: [[{
                            title: "五星不定胆",
                            columns: [{
                                    showname: "一码不定位",
                                    shortname: "bdd_bdd_wx1",
                                    realname: "[不定胆_五星一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；开奖号码至少出现1个1，即中五星一码不定位一等奖。",
                                    help: "从0-9中选择1个号码，每注由1个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的1个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "二码不定位",
                                    shortname: "bdd_bdd_wx2",
                                    realname: "[不定胆_五星二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码：至少出现1和2各1个，即中五星二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "三码不定位",
                                    shortname: "bdd_bdd_wx3",
                                    realname: "[不定胆_五星三码]",
                                    tips: "从0-9中任意选择3个以上号码。",
                                    example: "投注方案：1,2,3；<br>开奖号码：至少出现1、2、3各1个，即中五星三码不定位。",
                                    help: "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "前四不定胆",
                            columns: [{
                                    showname: "一码不定位",
                                    shortname: "bdd_bdd_qsix1",
                                    realname: "[不定胆_前四星一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；<br>开奖号码前四位：至少出现1个1，即中前四星一码不定位。",
                                    help: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位、十位中包含所选号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "二码不定位",
                                    shortname: "bdd_bdd_qsix2",
                                    realname: "[不定胆_前四星二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码前四位：至少出现1和2各1个，即中前四星二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "后四不定胆",
                            columns: [{
                                    showname: "一码不定位",
                                    shortname: "bdd_bdd_hsix1",
                                    realname: "[不定胆_后四星一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；<br>开奖号码后四位：至少出现1个1，即中后四星一码不定位。",
                                    help: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "二码不定位",
                                    shortname: "bdd_bdd_hsix2",
                                    realname: "[不定胆_后四二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码后四位：至少出现1和2各1个，即中后四星二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "三星不定胆一码",
                            columns: [{
                                    showname: "后三",
                                    shortname: "bdw1mh",
                                    realname: "[不定胆_后三一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；<br>开奖号码后三位：至少出现1个1，即中后三一码不定位。",
                                    help: "从0-9中选择1个号码，每注由1个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的1个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "中三",
                                    shortname: "bdw1mz",
                                    realname: "[不定胆_中三一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；<br>开奖号码中三位：至少出现1个1，即中 中三一码不定位。",
                                    help: "从0-9中选择1个号码，每注由1个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的1个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "前三",
                                    shortname: "bdw1mq",
                                    realname: "[不定胆_前三一码]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：1；<br>开奖号码前三位：至少出现1个1，即中前三一码不定位。",
                                    help: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "三星不定胆二码",
                            columns: [{
                                    showname: "后三",
                                    shortname: "bdw2mh",
                                    realname: "[不定胆_后三二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码后三位：至少出现1和2各1个，即中后三二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "中三",
                                    shortname: "bdw2mz",
                                    realname: "[不定胆_中三二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码前三位：至少出现1和2各1个，即中 中三二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "前三",
                                    shortname: "bdw2mq",
                                    realname: "[不定胆_前三二码]",
                                    tips: "从0-9中任意选择2个以上号码。",
                                    example: "投注方案：1,2；<br>开奖号码前三位：至少出现1和2各1个，即中前三二码不定位。",
                                    help: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "不定胆",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "任选",
                rows: [[{
                            title: "任二",
                            columns: [{
                                    showname: "复式",
                                    shortname: "rx2fs",
                                    realname: "[任选二_复试]",
                                    tips: "万、千、百、十、个任意2位，开奖号分别对应且顺序一致即中奖",
                                    example: "万位买0，千位买1，百万买2，开奖01234，则中奖。",
                                    help: "从万、千、百、十、个中至少2个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "rx2ds",
                                    realname: "[任选二_单式]",
                                    tips: "手动输入号码，至少输入1个两位数号码和至少选择两个位置",
                                    example: "输入号码01并选择万、千位置位，如开奖号码位01***； 则中奖",
                                    help: "手动输入一注或者多注的两个号码和至少两个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    textarea: {}
                                }, {
                                    showname: "组选",
                                    shortname: "rx2zx",
                                    realname: "[任选二_组选]",
                                    tips: "从0-9中任意选择2个或2个以上号码和任意两个位置",
                                    example: "位置选择万、千，号码选择01；开奖号码为01***、则中奖",
                                    help: "从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的两个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "直选和值",
                                    shortname: "rx2_zx_hz",
                                    realname: "[任选二_直选和值]",
                                    tips: "从0-9中任意选择2个或2个以上号码和任意两个位置",
                                    example: "位置选择万、千，号码选择01；开奖号码为01***、则中奖",
                                    help: "从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的两个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"],
                                                chk: [0, 0, 0, 0, 0]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选和值",
                                    shortname: "rx2_zux_hz",
                                    realname: "[任选二_组选和值]",
                                    tips: "从0-9中任意选择2个或2个以上号码和任意两个位置",
                                    example: "位置选择万、千，号码选择01；开奖号码为01***、则中奖",
                                    help: "从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的两个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "任三",
                            columns: [{
                                    showname: "复式",
                                    shortname: "rx3fs",
                                    realname: "[任选三_复式]",
                                    tips: "万、千、百、十、个任意3位，开奖号分别对应且顺序一致即中奖",
                                    example: "万位买0，千位买1，百万买2，十位买3，开奖01234，则中奖。",
                                    help: "从万、千、百、十、个中至少3个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "rx3ds",
                                    realname: "[任选三_单式]",
                                    tips: "手动输入号码，至少输入1个三位数号码和至少选择三个位置",
                                    example: "输入号码012选择万、千、百位置，如开奖号码位012**； 则中奖",
                                    help: "手动输入一注或者多注的三个号码和至少三个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    textarea: {}
                                }, {
                                    showname: "组三",
                                    shortname: "rx3z3",
                                    realname: "[任选三_组三]",
                                    tips: "从0-9中任意选择2个或2个以上号码和任意三个位置",
                                    example: "位置选择万、千、百，号码选择01；开奖号码为110**、则中奖",
                                    help: "从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组六",
                                    shortname: "rx3z6",
                                    realname: "[任选三_组六]",
                                    tips: "从0-9中任意选择3个或3个以上号码和任意三个位置",
                                    example: "位置选择万、千、百，号码选择012；开奖号码为012**、则中奖",
                                    help: "从0-9中任意选择3个或3个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "混合组选",
                                    shortname: "rx3hh",
                                    realname: "[任选三_混合组选]",
                                    tips: "手动输入号码，至少输入1个三位数号码和任意三个位置",
                                    example: "投注方案：345； 选择对应位：百、十、个，开奖号码：**345，即为中奖",
                                    help: "3个数字为一注，所选开奖号码符合对应所选位置的组三或组六均为中奖。",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    textarea: {}
                                }, {
                                    showname: "直选和值",
                                    shortname: "rx3_zx_hz",
                                    realname: "[任选三_直选和值]",
                                    tips: "从0-9中任意选择2个或2个以上号码和任意两个位置",
                                    example: "位置选择万、千，号码选择01；开奖号码为01***、则中奖",
                                    help: "从0-9中任意选择3个或3个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"],
                                                chk: [0, 0, 0, 0, 0]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                cls: "toolong",
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选和值",
                                    shortname: "rx3_zux_hz",
                                    realname: "[任选三_组选和值]",
                                    tips: "从0-9中任意选择3个或3个以上号码和任意三个位置",
                                    example: "位置选择万、千，号码选择01；开奖号码为01***、则中奖",
                                    help: "从0-9中任意选择3个或3个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                                                        19, 20, 21, 22, 23, 24, 25, 26],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: "任四",
                            columns: [{
                                    showname: "复式",
                                    shortname: "rx4fs",
                                    realname: "[任选四_复试]",
                                    tips: "万、千、百、十、个任意4位，开奖号分别对应且顺序一致即中奖",
                                    example: "万位买0，千位买1，百万买2，十位买3，个位买4，开奖01234，则中奖。",
                                    help: "从万、千、百、十、个中至少4个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。",
                                    select: {
                                        layout: [{
                                                title: "万位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "千位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "百位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "十位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "个位",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "单式",
                                    shortname: "rx4ds",
                                    realname: "[任选四_单式]",
                                    tips: "手动输入号码，至少输入1个四位数号码和至少选择四个位置",
                                    example: "输入号码0123选择万、千、百、十位置，如开奖号码位0123*； 则中奖",
                                    help: "手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    textarea: {}
                                }, {
                                    showname: "组选24",
                                    shortname: "rx4_zux_z24",
                                    realname: "[任选四_组选24]",
                                    tips: "手动输入号码，至少输入1个四位数号码和至少选择四个位置",
                                    example: "输入号码0123选择万、千、百、十位置，如开奖号码位0123*； 则中奖",
                                    help: "手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "号码",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选12",
                                    shortname: "rx4_zux_z12",
                                    realname: "[任选四_组选12]",
                                    tips: "手动输入号码，至少输入1个四位数号码和至少选择四个位置",
                                    example: "输入号码0123选择万、千、百、十位置，如开奖号码位0123*； 则中奖",
                                    help: "手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"],
                                                chk: [0, 0, 0, 0, 0]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "二重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选6",
                                    shortname: "rx4_zux_z6",
                                    realname: "[任选四_组选6]",
                                    tips: "手动输入号码，至少输入1个四位数号码和至少选择四个位置",
                                    example: "输入号码0123选择万、千、百、十位置，如开奖号码位0123*； 则中奖",
                                    help: "手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"],
                                                chk: [0, 0, 0, 0, 0]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "组选4",
                                    shortname: "rx4_zux_z4",
                                    realname: "[任选四_组选4]",
                                    tips: "手动输入号码，至少输入1个四位数号码和至少选择四个位置",
                                    example: "输入号码0123选择万、千、百、十位置，如开奖号码位0123*； 则中奖",
                                    help: "手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖",
                                    checkbox: {
                                        layout: [{
                                                title: "位置",
                                                value: ["万位", "千位", "百位", "十位", "个位"],
                                                chk: [0, 0, 0, 0, 0]
                                            }]
                                    },
                                    select: {
                                        layout: [{
                                                title: "三重号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: "单　号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "跨度",
                rows: [[{
                            title: "跨度",
                            columns: [{
                                    showname: "前三跨度",
                                    shortname: "kdqs",
                                    realname: "跨度_前三",
                                    tips: "至少选择一个号码组成一注。",
                                    example: "投注方案：选择5, 等于开奖号前三位2,5,7的最大数7与最小数字2的差值，即为中奖。",
                                    help: "玩法：选择0-9，若所选号码与开奖号前三位的最大最小数字的差值相等，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "中三跨度",
                                    shortname: "kdzs",
                                    realname: "跨度_中三",
                                    tips: "至少选择一个号码组成一注。",
                                    example: "投注方案：选择5, 等于开奖号中三位2,5,7的最大数7与最小数字2的差值，即为中奖。",
                                    help: "玩法：选择0-9，若所选号码与开奖号中三位的最大最小数字的差值相等，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "后三跨度",
                                    shortname: "kdhs",
                                    realname: "跨度_后三",
                                    tips: "至少选择一个号码组成一注。",
                                    example: "投注方案：选择5, 等于开奖号后三位2,5,7的最大数7与最小数字2的差值，即为中奖。",
                                    help: "玩法：选择0-9，若所选号码与开奖号后三位的最大最小数字的差值相等，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "前二跨度",
                                    shortname: "kdqe",
                                    realname: "跨度_前二",
                                    tips: "至少选择一个号码组成一注。",
                                    example: "投注方案：选择5, 等于开奖号前二位2,7的最大数7与最小数字2的差值，即为中奖。",
                                    help: "玩法：选择0-9，若所选号码与开奖号前二位的最大最小数字的差值相等，即中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "后二跨度",
                                    shortname: "kdhe",
                                    realname: "跨度_后二",
                                    tips: "至少选择一个号码组成一注。",
                                    example: "投注方案：选择5, 等于开奖号后二位2,7的最大数7与最小数字2的差值，即为中奖。",
                                    help: "玩法：选择0-9，若所选号码与开奖号后二位的最大最小数字的差值相等，即中奖。。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "趣味",
                rows: [[{
                            title: "特殊",
                            columns: [{
                                    showname: "一帆风顺",
                                    shortname: "qwyffs",
                                    realname: "[特殊_一帆风顺]",
                                    tips: "从0-9中任意选择1个以上号码。",
                                    example: "投注方案：8；开奖号码：至少出现1个8，即中一帆风顺。",
                                    help: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "好事成双",
                                    shortname: "qwhscs",
                                    realname: "[特殊_好事成双]",
                                    tips: "从0-9中任意选择1个以上的二重号码。",
                                    example: "投注方案：8；开奖号码：至少出现2个8，即中好事成双。",
                                    help: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "三星报喜",
                                    shortname: "qwsxbx",
                                    realname: "[特殊_三星报喜]",
                                    tips: "从0-9中任意选择1个以上的三重号码。",
                                    example: "投注方案：8；开奖号码：至少出现3个8，即中三星报喜。",
                                    help: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: "四季发财",
                                    shortname: "qwsjfc",
                                    realname: "[特殊_四季发财]",
                                    tips: "从0-9中任意选择1个以上的四重号码。",
                                    example: "投注方案：8；开奖号码：至少出现4个8，即中四季发财。",
                                    help: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "选号",
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: "龙虎",
                rows: [[{
                            title: "龙虎",
                            columns: [{
                                    showname: "万千",
                                    shortname: "lhwq",
                                    realname: "[龙虎_万千]",
                                    tips: "从万位、千位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码万位大于千位：龙，即中奖。",
                                    help: "根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "万百",
                                    shortname: "lhwb",
                                    realname: "[龙虎_万百]",
                                    tips: "从万位、百位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码万位大于百位：龙，即中奖。",
                                    help: "根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "万十",
                                    shortname: "lhws",
                                    realname: "[龙虎_万十]",
                                    tips: "从万位、十位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码万位大于十位：龙，即中奖。",
                                    help: "根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "万个",
                                    shortname: "lhwg",
                                    realname: "[龙虎_万个]",
                                    tips: "从万位、个位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码万位大于个位：龙，即中奖。",
                                    help: "根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "千百",
                                    shortname: "lhqb",
                                    realname: "[龙虎_千百]",
                                    tips: "从千位、百位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码千位大于百位：龙，即中奖。",
                                    help: "根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "千十",
                                    shortname: "lhqs",
                                    realname: "[龙虎_千十]",
                                    tips: "从千位、十位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码千位大于十位：龙，即中奖。",
                                    help: "根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "千个",
                                    shortname: "lhqg",
                                    realname: "[龙虎_千个]",
                                    tips: "从千位、个位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码千位大于个位：龙，即中奖。",
                                    help: "根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "百十",
                                    shortname: "lhbs",
                                    realname: "[龙虎_百十]",
                                    tips: "从百位、十位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码百位大于十位：龙，即中奖。",
                                    help: "根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "百个",
                                    shortname: "lhbg",
                                    realname: "[龙虎_百个]",
                                    tips: "从百位、个位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码百位大于个位：龙，即中奖。",
                                    help: "根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }, {
                                    showname: "十个",
                                    shortname: "lhsg",
                                    realname: "[龙虎_十个]",
                                    tips: "从十位、个位上选择一个形态组成一注。",
                                    example: "投注方案：龙；开奖号码十位大于个位：龙，即中奖。",
                                    help: "根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。",
                                    select: {
                                        layout: [{
                                                title: "龙虎",
                                                balls: ["龙", "虎", "和"]
                                            }]
                                    }
                                }]
                        }]]
            }];
        var getSelectPlace = function (playArea) {
            var places = [];
            var sp = playArea.find(".places");
            if (sp && sp.length > 0) {
                $.each(sp, function () {
                    var place = [];
                    var as = $(this).find('ul > li input[type="checkbox"]');
                    $.each(as, function () {
                        if ($(this).is(":checked")) {
                            place.push("√")
                        } else {
                            place.push("-")
                        }
                    });
                    places.push(place)
                })
            }
            return places
        };
        var getSelectBall = function (playArea) {
            var datasel = [];
            var sb = playArea.find(".balls");
            if (sb && sb.length > 0) {
                $.each(sb, function () {
                    var ball = [];
                    var as = $(this).find("ul > li > a.selected");
                    $.each(as, function () {
                        var val = $(this).attr("data-val");
                        ball.push(val)
                    });
                    datasel.push(ball)
                })
            }
            return datasel
        };
        var getTextareaBall = function (playArea) {
            var datasel = [];
            var textarea = playArea.find(".textarea > textarea");
            if (textarea && textarea.length > 0) {
                var format = textarea.val().replace(/\,|\;|\n|\t/g, " ");
                var as = format.split(" ");
                $.each(as, function (idx, val) {
                    datasel.push(val)
                })
            }
            return datasel
        };
        var buildSelectPlace = function (playArea, select) {
            $.each(select.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + "</div>")
                }
                if (val.cls) {
                    row.addClass(val.cls)
                }
                if (typeof val.only !== "undefined") {}
                var balls = $('<div class="balls">').append("<ul>");
                $.each(val.balls, function (j, ball) {
                    balls.find("ul").append('<li class="' + (typeof val.only !== 'undefined' ? 'only ' : '') + (String(
                        ball).length > 2 ? ' bigger' : '') + '"><a data-val="' + ball + '">' + ball + "</a></li>")
                });
                balls.find("ul > li > a").unbind("click").click(function () {
                    if ($(this).parent().hasClass("only")) {
                        balls.find("ul > li").removeClass("selected");
                        balls.find("ul > li > a").removeClass("selected")
                    }
                    if ($(this).hasClass("selected")) {
                        $(this).parent().removeClass("selected");
                        $(this).removeClass("selected")
                    } else {
                        $(this).parent().addClass("selected");
                        $(this).addClass("selected")
                    }
                    PlayOptions.update();
                    AdjustPrize.update()
                });
                row.append(balls);
                if (val.tools) {
                    buildBallTools(row, balls)
                }
                playArea.append(row)
            })
        };
        var buildBallTools = function (row, balls) {
            var blist = balls.find("ul > li > a");
            var tools = $('<div class="tools">').append(
                '<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
            var setSelected = function (els, selected) {
                if (selected) {
                    if (!els.hasClass("selected")) {
                        els.trigger("click")
                    }
                } else {
                    if (els.hasClass("selected")) {
                        els.trigger("click")
                    }
                }
            };
            tools.find('a[data-command="all"]').unbind("click").click(function () {
                $.each(blist, function () {
                    setSelected($(this), true)
                })
            });
            tools.find('a[data-command="big"]').unbind("click").click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), false)
                    } else {
                        setSelected($(this), true)
                    }
                })
            });
            tools.find('a[data-command="small"]').unbind("click").click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="single"]').unbind("click").click(function () {
                var arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37];
                $.each(blist, function () {
                    var val = parseInt($(this).attr("data-val"));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="double"]').unbind("click").click(function () {
                var arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38];
                $.each(blist, function () {
                    var val = parseInt($(this).attr("data-val"));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="clean"]').unbind("click").click(function () {
                $.each(blist, function () {
                    setSelected($(this), false)
                })
            });
            row.append(tools)
        };
        var buildTextareaPlace = function (playArea) {
            var textarea = $('<div class="textarea">').append("<textarea>");
            var help = $('<div class="help">').html(
                '<label class="lf">每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。</label><a class="hand clearTextarea rf">清空</a>');
            textarea.find("textarea").keyup(function () {
                $(this).val($(this).val().replace(/[；.,。，、|]/g, " "));
                PlayOptions.update()
            });
            textarea.find("textarea").on("paste", function () {
                var thisarea = $(this);
                setTimeout(function () {
                    thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, " "));
                    PlayOptions.update()
                }, 10)
            });
            playArea.append(textarea);
            playArea.append(help);
            playArea.find(".clearTextarea").unbind("click").click(function () {
                $(".textarea textarea").val("").keyup()
            })
        };
        var lastCheckBox = [];
        var buildCheckboxPlace = function (playArea, checkbox) {
            $.each(checkbox.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + "</div>")
                }
                var places = $('<div class="places">').append("<ul>");
                var allchk = val.chk;
                $.each(val.value, function (j, value) {
                    if (typeof allchk != "undefined") {
                        places.find("ul").append('<li><label><input type="checkbox" ' + (allchk[j] > 0 ?
                            ' checked="checked"' : "") + ">" + value + "</label></li>")
                    } else {
                        places.find("ul").append('<li><label><input type="checkbox">' + value + "</label></li>")
                    }
                });
                places.find('ul > li input[type="checkbox"]').change(function () {
                    lastCheckBox = getSelectPlace(playArea)[0];
                    PlayOptions.update()
                });
                if (lastCheckBox) {
                    for (var j = 0; j < lastCheckBox.length; j++) {
                        if (lastCheckBox[j] == "√") {
                            places.find('ul > li input[type="checkbox"]').eq(j).trigger("click")
                        }
                    }
                }
                row.append(places);
                playArea.append(row)
            })
        };
        var PlayArea = function () {
            var data = function () {
                var playArea = $(".lottery-betting .lottery-opearation > .play-area");
                var datasel = [];
                var places = getSelectPlace(playArea);
                var balls = getSelectBall(playArea);
                var textarea = getTextareaBall(playArea);
                var sb = datasel.concat(places).concat(balls).concat(textarea);
                return sb
            };
            var reset = function () {
                var playList = $(".lottery-betting .lottery-opearation > .play-list");
                playList.find('[data-method="' + $bData.method + '"]').trigger("click")
            };
            return {
                data: data,
                reset: reset
            }
        }();
        var buildPlayOptions = function (playOptions) {
            playOptions.append(['<div class="part-one">',
                    '<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注</div>',
                    '<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>', "</div>"]
                .join(""));
            playOptions.append(['<div class="part-two">', '<div class="label">模式</div>',
                    '<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
                    '<div class="label">倍数</div>',
                    '<div class="multiple"><input name="multiple" type="text" value="1"></div>', "</div>"].join(""));
            var bDataModel = "yuan";
            if ($.cookie("USER_BDATA_MODEL")) {
                bDataModel = $.cookie("USER_BDATA_MODEL")
            }
            playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass("selected");
            var multiple = playOptions.find(".multiple > input");
            multiple.keyup(function () {
                if ($(this).val() == "") {
                    return
                }
                var val = $(this).val();
                if (/^[0-9]*$/.test(val)) {
                    val = Number(val);
                    if (val > 99999) {
                        $(this).val(99999)
                    }
                    if (val < 1) {
                        $(this).val(1)
                    }
                    PlayOptions.update()
                } else {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            multiple.keydown(function (e) {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    if ($(this).val() == "") {
                        return
                    }
                    var val = Number($(this).val());
                    if (!isNaN(val)) {
                        if (e.keyCode == 38) {
                            val++
                        }
                        if (e.keyCode == 40) {
                            val--
                        }
                        if (val > 99999) {
                            val = 99999
                        }
                        if (val < 1) {
                            val = 1
                        }
                        $(this).val(val)
                    }
                }
            });
            multiple.off("blur").blur(function () {
                if ($(this).val() == "") {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            var fenModel = function () {
                if ($FenDownCode > 0) {
                    var thisCode = $SysCode - $FenDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert("info", "提示消息", "分模式最高为" + $UserMaxCode + "。", 3000)
                    }
                }
            };
            var liModel = function () {
                if ($LiDownCode > 0) {
                    var thisCode = $SysCode - $LiDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert("info", "提示消息", "厘模式最高为" + $UserMaxCode + "。", 3000)
                    }
                }
            };
            var defaultModel = function () {
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20
            };
            var update = function (model) {
                if (model == "fen") {
                    fenModel()
                } else {
                    if (model == "li") {
                        liModel()
                    } else {
                        defaultModel()
                    }
                }
            };
            var models = playOptions.find(".model > a");
            models.click(function () {
                if (!$(this).hasClass("selected")) {
                    models.removeClass("selected");
                    $(this).addClass("selected");
                    var model = $(this).attr("data-val");
                    update(model);
                    AdjustPrize.slider();
                    AdjustPrize.update();
                    PlayOptions.update();
                    var expires = new Date(moment().startOf("year").add(1, "years"));
                    $.cookie("USER_BDATA_MODEL", model, {
                        expires: expires,
                        path: "/"
                    })
                }
            });
            update(bDataModel)
        };
        var PlayOptions = function () {
            var els = function () {
                return $(".lottery-betting .lottery-opearation > .play-options")
            };
            var multiple = function () {
                return Number(els().find(".multiple > input").val())
            };
            var model = function () {
                var val = els().find(".model > a.selected").attr("data-val");
                if (val == "yuan") {
                    return {
                        val: val,
                        money: 1
                    }
                }
                if (val == "jiao") {
                    return {
                        val: val,
                        money: 0.1
                    }
                }
                if (val == "fen") {
                    return {
                        val: val,
                        money: 0.01
                    }
                }
                if (val == "li") {
                    return {
                        val: val,
                        money: 0.001
                    }
                }
            };
            var update = function () {
                var sumstr = LotteryUtils.inputFormat($(".play-list .selected").data("method"), PlayArea.data());
                $(".ks_btn").attr("summary", (sumstr.length < 20 ? sumstr : (sumstr.substring(0, 20) + "...")));
                var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
                var total = multiple() * num * $SysUnitMoney * model().money;
                els().find('[data-field="num"]').html(num);
                $("#lottery .totaldeal").html(num);
                $("#lottery .totaldealtime").html("x" + multiple());
                els().find('[data-field="total"]').html(total.toFixed(3));
                $("#lottery .totaldealamount").html(total.toFixed(3));
                var gainnumber = Number(parseFloat($('[data-field="prize"]').html() * multiple()) - total.toFixed(3)).toFixed(
                    3);
                if (isNaN(gainnumber) && String($('[data-field="prize"]').html()).indexOf("/") > -1) {
                    var allb = $('[data-field="prize"]').html().split("/");
                    var totalbonus = 0;
                    var nowchoose = PlayArea.data()[0];
                    var allbonusf = [],
                        bmax, bmin;
                    for (var i = 0; i < allb.length; i++) {
                        allbonusf.push(Number(allb[i]).toFixed(3))
                    }
                    bmax = Math.max.apply(null, allbonusf);
                    bmin = Math.min.apply(null, allbonusf);
                    if (String(nowchoose.join("|")).indexOf("和") > -1 && String(nowchoose.join("|")).indexOf("龙") == -1 &&
                        String(nowchoose.join("|")).indexOf("虎") == -1) {
                        gainnumber = Number(bmax * multiple() - total.toFixed(3)).toFixed(3)
                    }
                    if (String(nowchoose.join("|")).indexOf("和") > -1 && (String(nowchoose.join("|")).indexOf("龙") > -1 ||
                        String(nowchoose.join("|")).indexOf("虎") > -1)) {
                        gainnumber = Number(bmin * multiple() - total.toFixed(3)).toFixed(3) + "~" + Number(bmax *
                            multiple() - total.toFixed(3)).toFixed(3)
                    }
                    if (String(nowchoose.join("|")).indexOf("和") == -1 && (String(nowchoose.join("|")).indexOf("龙") > -
                        1 || String(nowchoose.join("|")).indexOf("虎") > -1)) {
                        gainnumber = Number(bmin * multiple() - total.toFixed(3)).toFixed(3)
                    }
                }(num > 0) ? $("#lottery .totalgain").html(gainnumber) : $("#lottery .totalgain").html("0.000");
                if ($(".footer-bar-deal #mobile_dealcount", window.parent.document).length > 0) {
                    $(".footer-bar-deal #mobile_dealcount", window.parent.document).html(num);
                    $(".footer-bar-deal #mobile_amount", window.parent.document).html(total.toFixed(3))
                }
                if (parseInt(num, 10) > 0) {
                    $('.btn[data-command="add"]').addClass("active")
                } else {
                    $('.btn[data-command="add"]').removeClass("active")
                }
            };
            return {
                els: els,
                multiple: multiple,
                model: model,
                update: update
            }
        }();
        var buildAdjustPrize = function (adjustPrize, column) {
            var start = $UserMaxCode;
            if ($.cookie("USER_BDATA_CODE")) {
                var bCode = $.cookie("USER_BDATA_CODE");
                if (!isNaN(bCode)) {
                    if (bCode > $UserMaxCode) {
                        start = $UserMaxCode
                    } else {
                        if (bCode < $UserMinCode) {
                            start = $UserMinCode
                        } else {
                            start = bCode
                        }
                    }
                }
            }
            adjustPrize.empty();
            var nownick_code = $("#lottery #topltname").attr("nick");
            if (localStorage.getItem(nownick_code + "_code") != null) {
                start = parseInt(localStorage.getItem(nownick_code + "_code"), 10)
            }
            adjustPrize.append([
                    '<div>奖金调节：<label class="rf"><span data-field="code">0</span> / <span data-field="point">0.0</span>%</label></div>',
                    '<div class="slider"></div>',
                    '<div class="range-slider-customed"><input type="range" class="betrate" min="', $UserMinCode,
                    '" max="', $UserMaxCode, '" value="', start, '" step="2"></div>', ""].join(""));
            var slider = adjustPrize.find(".slider");
            var nowbrate = adjustPrize.find(".betrate");
            nowbrate.off("change").on("change", function () {
                var nownick = $("#lottery #topltname").attr("nick");
                localStorage.setItem(nownick + "_code", nowbrate.val());
                update(nowbrate.val())
            });
            nowbrate.off("input").on("input", function () {
                var nownick = $("#lottery #topltname").attr("nick");
                localStorage.setItem(nownick + "_code", nowbrate.val());
                update(nowbrate.val())
            });
            var lc = GameData.getConfig();
            if (parseInt($UserMaxCode, 10) > parseInt(lc.maxBetCode, 10)) {
                $UserMaxCode = parseInt(lc.maxBetCode, 10)
            }
            var sop = {
                connect: "lower",
                behaviour: "snap",
                step: 2,
                start: start,
                range: {
                    "max": $UserMaxCode,
                    "min": $UserMinCode
                }
            };
            slider.noUiSlider(sop);
            if ($UserMaxCode == $UserMinCode) {
                slider.attr("disabled", "disabled")
            } else {
                slider.removeAttr("disabled")
            }
            var update = function (code) {
                var point = $UserLp - ((code - $UserMinCode) / 20).toFixed(1);
                adjustPrize.find('[data-field="code"]').html(code);
                adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
                AdjustPrize.update()
            };
            var onSet = function () {
                var code = Number(slider.val());
                // kevin 2018-1-24 修改 菲律宾1.5分彩 元角分 切换时 玩法奖金问题;
                update(start);
                var expires = new Date(moment().startOf("year").add(1, "years"));
                $.cookie("USER_BDATA_CODE", code, {
                    expires: expires,
                    path: "/"
                })
            };
            var onSlide = function () {
                var code = Number(slider.val());
                update(code)
            };
            slider.on({
                set: onSet,
                slide: onSlide
            });
            update(start)
        };
        var PlayHelp = function () {
            var els = function () {
                return $(".lottery-betting .lottery-opearation > .play-help")
            };
            var update = function (t) {
                els().find('[data-field="prize"]').html(t)
            };
            return {
                els: els,
                update: update
            }
        }();
        var AdjustPrize = function () {
            var els = function () {
                return $(".lottery-betting .lottery-opearation > .adjust-prize")
            };
            var code = function () {
                return Number(els().find('[data-field="code"]').html())
            };
            var point = function () {
                return Number(els().find('[data-field="point"]').html())
            };
            var slider = function () {
                els().find(".slider").noUiSlider({
                    range: {
                        "max": $UserMaxCode,
                        "min": $UserMinCode
                    }
                }, true)
            };
            var update = function () {
                var method = $Method[$bData.method];
                var model = PlayOptions.model();
                var mMoney = PlayOptions.model().money;
                if (method) {
                    var ps = method.bonus.split(",");
                    var psx = Number(method.x);
                    if (String($bData.method).indexOf("nonelh") > -1 && String($bData.method) != "sxzuxzlh") {
                        var topbonus = ps[0];
                        ps.unshift(Number(parseFloat(topbonus / 4.5)).toFixed(8));
                        ps.unshift(Number(parseFloat(topbonus / 4.5)).toFixed(8))
                    }
                    if (String($bData.method).indexOf("hhzx") > -1) {
                        var topbonus = ps[0];
                        ps.unshift(Number(parseFloat(topbonus / 2)).toFixed(2))
                    }
                    var t = [];
                    $('[data-command="chase"]').attr("code", $UserMinCode);
                    for (var i = 0, j = ps.length; i < j; i++) {
                        var percent = Number(ps[i]) / $UserMinCode;
                        var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * ($SysUnitMoney / 2);
                        t.push(pm)
                    }
                    t.sort(function (a, b) {
                        return Number(a) > Number(b) ? 1 : -1
                    });
                    if (t.length == 1) {
                        t[0] = t[0] * model.money;
                        PlayHelp.update(t[0].toFixed(3))
                    } else {
                        var allbonusstr = [];
                        if (t.length > 2 && t.length < 4) {
                            for (j = 0; j < t.length; j++) {
                                allbonusstr.push(Number(t[j] * model.money).toFixed(3))
                            }
                            PlayHelp.update(allbonusstr.join("/"))
                        } else {
                            t[0] = t[0] * model.money;
                            t[t.length - 1] = t[t.length - 1] * model.money;
                            PlayHelp.update(t[0].toFixed(3) + " ~ " + t[t.length - 1].toFixed(3))
                        }
                    }
                }
            };
            return {
                els: els,
                code: code,
                point: point,
                update: update,
                slider: slider
            }
        }();
        var addCallback = [];
        var addToList = function (callback, finalcall) {
            var issue = $('[data-field="global-expect"]').html();
            var method = $bData.method;
            var compress = $bData.compress;
            var datasel = PlayArea.data();
            var num = LotteryUtils.inputNumbers(method, datasel);
            var content = LotteryUtils.inputFormat(method, datasel);
            var code = AdjustPrize.code();
            var point = AdjustPrize.point();
            var multiple = PlayOptions.multiple();
            var model = PlayOptions.model().val;
            var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
            if (num == 0) {
                App.alert("info", "提示消息", "您还没有选择号码或所选号码不全！", 3000000);
                return false
            }
            var _method = $Method[method];
            if (num <= _method.oooNums) {
                App.confirm("question", "温馨提示", "您所投注内容属于单挑玩法，最高奖金为" + _method.oooBonus + "元，确认继续投注？", 0, "确认", "取消", function () {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback);
                    PlayArea.reset()
                })
            } else {
                if (String(method).indexOf("lh") > -1) {
                    var splitcontent = content.split("|");
                    for (i = 0; i < splitcontent.length; i++) {
                        var realnum = parseInt(num / splitcontent.length, 10);
                        total = multiple * realnum * $SysUnitMoney * PlayOptions.model().money;
                        LotteryRecord.add(issue, method, compress, splitcontent[i], realnum, multiple, model, code,
                            point, total, null)
                    }
                    if (typeof finalcall == "function") {
                        finalcall()
                    }
                } else {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback)
                }
                PlayArea.reset()
            }
        };
        var LotteryRecord = function () {
            var els = function () {
                return $(".lottery-record")
            };
            var name = function (method) {
                var method = $Method[method];
                return "[" + method.name + "]"
            };
            var format = function (content) {
                if (content.length > 16) {
                    content = content.substring(0, 16) + '…<a data-command="details">[详细]'
                }
                return content
            };
            var add = function (issue, method, compress, content, num, multiple, model, code, point, total, callback) {
                var tbody = els().find(".list table > tbody");
                var tr = $("<tr>");
                var mobilebasket = ["<li>", '<div class="row clearfix">',
                        '<div class="col-15"><em class="m_ico"></em></div>', '<div class="col-70">',
                        "<h3>5,6,7,8,9</h3>", "<span>五星直选复式 1注 元 2.1% 5倍 10元</span>", "</div>",
                        '<div class="col-15"><em class="m_ico"></em></div>', "</div>", "</li>"].join("");
                BasketLtChoose.push({
                    "m": name(method),
                    "c": content,
                    "num": num,
                    "model": model,
                    "multiple": multiple,
                    "p": point.toFixed(1),
                    "t": total.toFixed(3)
                });
                $("#basket .basketitems").append(mobilebasket);
                tr.append('<td class="content">' + name(method) + format(content) + "</td>");
                tr.append('<td class="num">' + num + "注</td>");
                tr.append('<td class="multiple">' + multiple + "倍</td>");
                tr.append('<td class="point">' + point.toFixed(1) + "%</td>");
                tr.append('<td class="total">' + total.toFixed(3) + "元</td>");
                tr.append('<td class="btn"><a data-command="del">删除</a></td>');
                tr.find('a[data-command="del"]').unbind("click").click(function () {
                    var idx = tbody.find("tr").index(tr);
                    ArrayUtil.remove($bList, idx);
                    tr.remove();
                    if (tbody.find("tr").size() == 0) {
                        $('.ks_btn[data-command="quick"]').removeClass("disabled")
                    }
                });
                tbody.append(tr);
                if (compress === true && num >= 1000) {
                    App.blockUI({
                        target: els(),
                        boxed: true,
                        message: "超大注数处理中..."
                    });
                    App.unblockUI(els());
                    content = LZString.compressToEncodedURIComponent(content);
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: true
                    });
                    if ($.isFunction(callback)) {
                        callback()
                    }
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                } else {
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: false
                    });
                    if ($.isFunction(callback)) {
                        callback()
                    }
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                }
                tr.find('[data-command="details"]').off("click").click(function () {
                    App.alertLimit("chknumdetail", "info", "查看详细", tr.data("c"), 3000000)
                })
            };
            var clear = function () {
                els().find(".list table > tbody").empty();
                $bList = []
            };
            var isInit = false;
            var init = function () {
                isInit = true;
                App.initScroll();
                var button = els().find(".btnfire");
                button.find('[data-command="add"]').off("click").click(function () {
                    addToList()
                });
                button.find('[data-command="submit"]').off("click").click(function () {
                    App.confirm("question", "确认消息", ['<div class="myconfirm">你确认加入第' + $(
                            '.ltp .lottery-open-info [data-field="global-expect"]').text() + "期？<br>", "总注数：", ($(
                            '.total-inner [data-field="sum-num"]').text() == "0" ? $('.text-money[data-field="num"]').text() :
                            $('.total-inner [data-field="sum-num"]').text()), "<br>", "订单笔数：1<br>", "是否追号：否<br>",
                            "投注总额：", ($('.total-inner [data-field="sum-money"]').text() == "0.000" ? $(
                            '.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()),
                            "元</div>", '<div class="cftip aboutmax">温馨提示：本期最高奖金限额400000元，请会员谨慎投注！</div>'].join(""), 0,
                        "确定", "取消", function () {
                        if ($bList.length > 0) {
                            doSubmit()
                        } else {
                            addToList(function () {
                                doSubmit()
                            }, function () {
                                doSubmit()
                            })
                        }
                    })
                });
                button.find('[data-command="clear"]').off("click").click(function () {
                    clear()
                });
                button.find('[data-command="chase"]').off("click").click(function () {
                    if (typeof QueryString.iframe != "undefined") {
                        addToList()
                    }
                    LotteryChase.init()
                })
            };
            var blist = function () {
                return $bList
            };
            return {
                init: init,
                add: add,
                clear: clear,
                blist: blist
            }
        }();
        var initDocument = function () {
            $(".lottery-betting .lottery-opearation").empty();
            var main = $(".lottery-betting .lottery-opearation");
            var playGroups = $('<div class="play-groups">').append("<ul>");
            var playList = $('<div class="play-list">');
            var playHelp = $('<div class="play-help">');
            var playArea = $('<div class="play-area">');
            var adjustPrize = $('<div class="adjust-prize">');
            var playOptions = $('<div class="play-options clearfix">');
            var fullmethods = {};
            var zutypech = {
                "任选": null,
                "五星": "五星组态",
                "后三": "后三组态",
                "二星": "直选和值",
                "前三": "前三组态",
                "定位胆": null,
                "后四": "四星组态",
                "中三": "中三组态"
            };
            var zutypemethod = function (textkey) {
                var chkdtwuxin = function (str) {
                    var ar = str.split(",");
                    if (str == null) {
                        return ""
                    }
                    if (hasDuplicates(ar, 0)) {
                        return "组120"
                    }
                    if (hasDuplicates(ar, 1)) {
                        return "组60"
                    }
                    if (hasDuplicates(ar, 2, 2)) {
                        return "组30"
                    }
                    if (hasDuplicates(ar, 2, 3)) {
                        return "组20"
                    }
                    if (hasDuplicates(ar, 3, 3, 2)) {
                        return "组10"
                    }
                    if (hasDuplicates(ar, 2)) {
                        return "组5"
                    }
                    return "组120"
                };
                var chkdtsixin = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var ar = str.split(",");
                    ar = _.takeRight(ar, 4);
                    if (str == null) {
                        return ""
                    }
                    if (hasDuplicates(ar, 0)) {
                        return "组24"
                    }
                    if (hasDuplicates(ar, 1)) {
                        return "组12"
                    }
                    if (hasDuplicates(ar, 2)) {
                        return "组6"
                    }
                    if (hasDuplicates(ar, 2)) {
                        return "组4"
                    }
                    return "组24"
                };
                var chksan1 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.take(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return "组三"
                    }
                    return "组六"
                };
                var chksan2 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.takeRight(allno, 4);
                    allno = _.take(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return "组三"
                    }
                    return "组六"
                };
                var chksan3 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.takeRight(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return "组三"
                    }
                    return "组六"
                };
                var chktwo = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.takeRight(allno, 2);
                    return eval(allno.join("+"))
                };
                var chktwo1 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.take(allno, 2);
                    return eval(allno.join("+"))
                };
                var chkthree = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.take(allno, 3);
                    return eval(allno.join("+"))
                };
                var chkthree1 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.takeRight(allno, 4);
                    allno = _.take(allno, 3);
                    return eval(allno.join("+"))
                };
                var chkthree2 = function (str) {
                    if (str == null) {
                        return ""
                    }
                    var allno = str.split(",");
                    allno = _.takeRight(allno, 3);
                    return eval(allno.join("+"))
                };
                if (textkey == "五星") {
                    return chkdtwuxin
                }
                if (textkey == "后四") {
                    return chkdtsixin
                }
                if (textkey == "前三") {
                    return chksan1
                }
                if (textkey == "前三和值") {
                    return chkthree
                }
                if (textkey == "中三") {
                    return chksan2
                }
                if (textkey == "中三和值") {
                    return chkthree1
                }
                if (textkey == "后三") {
                    return chksan3
                }
                if (textkey == "后三和值") {
                    return chkthree2
                }
                if (textkey == "二星") {
                    return chktwo
                }
                if (textkey == "后二") {
                    return chktwo
                }
                if (textkey == "前二") {
                    return chktwo1
                }
                return undefined
            };
            var hasDuplicates = function (a, len) {
                if (arguments.length > 2) {
                    var chkeylen = arguments[2];
                    var bc = _.countBy(a, _.identity);
                    var maxsame = 0;
                    for (var key in bc) {
                        if (typeof bc[key] !== "undefined") {
                            if (bc[key] > maxsame) {
                                maxsame = bc[key]
                            }
                        }
                    }
                    var allkeys = Object.keys(bc);
                    if (arguments.length > 3) {
                        return _.uniq(a).length !== a.length && chkeylen == maxsame && arguments[3] == allkeys.length &&
                            (a.length - _.uniq(a).length == len)
                    }
                    return _.uniq(a).length !== a.length && chkeylen == maxsame && (a.length - _.uniq(a).length == len)
                }
                return _.uniq(a).length !== a.length && (a.length - _.uniq(a).length == len)
            };
            var initPlayGroups = function (index) {
                playGroups.find("ul").empty();
                var alllocalmethod = [];
                for (i = 0; i < Layout.length; i++) {
                    alllocalmethod.push(Layout[i].title)
                }
                var topmethodclsdict = {
                    "五星": "wx",
                    "前四": "q4",
                    "后四": "h4",
                    "前三": "q3",
                    "中三": "z3",
                    "后三": "h3",
                    "二星": "ex",
                    "定位胆": "dw",
                    "不定胆": "bdw",
                    "任选": "rx",
                    "趣味": "qw",
                    "龙虎": "lh"
                };
                $.each(Layout, function (i, group) {
                    if ($.inArray(group.title, GameData.getMethodList()) > -1) {
                        var thisGroup = $("<li>").append("<a>" + group.title + "</a>");
                        var mtype = group.title;
                        thisGroup.addClass(topmethodclsdict[group.title]);
                        thisGroup.find("a").off("click").click(function () {
                            if (!$(this).hasClass("selected")) {
                                playGroups.find("li > a.selected").removeClass("selected");
                                $(this).addClass("selected");
                                var topmname = $(this).text();
                                $("#topltname i#mtopname").attr("top", topmname).html("-" + topmname);
                                if (zutypech[$(this).text()] != null) {
                                    $(".lottery-open-list .code").removeClass("expand");
                                    $(".lottery-open-list .title .zutype").html(zutypech[$(this).text()]).show();
                                    $(".lottery-open-list .list .zutype").show()
                                } else {
                                    $(".lottery-open-list .code").addClass("expand");
                                    $(".lottery-open-list .title .zutype").html("").hide();
                                    $(".lottery-open-list .list .zutype").hide()
                                }
                                var nowmethod = zutypemethod(topmname);
                                $(".lottery-open-list .list .zutype").each(function (i, el) {
                                    if (typeof nowmethod != "undefined") {
                                        $(el).html(nowmethod($(el).attr("rel")))
                                    }
                                });
                                initPlayList(group.rows)
                            }
                        });
                        playGroups.find("ul").append(thisGroup)
                    }
                });
                playGroups.find("ul > li").eq(index).find("a").trigger("click")
            };
            var initPlayList = function (list) {
                playList.empty();
                var aviableMethod = GameData.getMethodList();
                var allcoldict = {};
                $.each(list, function (i, rows) {
                    var thisRow = $('<div class="row clearfix">');
                    thisRow.html("");
                    $.each(rows, function (j, row) {
                        thisRow.append('<div class="label">' + row.title + "</div>");
                        $.each(row.columns, function (k, column) {
                            if ($.inArray(column.shortname, GameData.getMethods()) > -1) {
                                allcoldict[column.shortname] = column;
                                var thisColumn = $('<div class="column">').attr("data-compress", column.compress).attr(
                                    "data-method", column.shortname).attr("data-showname", column.showname).html(column
                                    .showname);
                                thisRow.append(thisColumn)
                            }
                        })
                    });
                    playList.append(thisRow)
                });
                playList.find(".row").unbind("click").on("click", ".column", function () {
                    var pthiscol = $(this);
                    if (!$(this).hasClass("selected")) {
                        playList.find(".row > .column").removeClass("selected");
                        $(this).addClass("selected")
                    }
                    var nowtag = $(this).text();
                    $("#topltname i#mtopname").html("-" + (typeof $("#topltname i#mtopname").attr("top") != "undefined" ?
                        $("#topltname i#mtopname").attr("top") : "") + nowtag);
                    var subtype;
                    var topcls = $("#lottery .play-groups a.selected").parent().attr("class");
                    var topindex = $("#lottery .play-groups a.selected").parent().index();
                    var nowltid = parseInt($("#lottery #topltname").attr("rel"), 10);
                    localStorage.setItem(nowltid + "_m", topindex + "|" + $(this).data("method"));
                    if (String(nowtag).indexOf("和值") > -1) {
                        subtype = String($(this).siblings(".label").first().text()).replace("星　直选", "").replace("直选",
                            "").replace("组选", "");
                        if (subtype == "前三" || subtype == "中三" || subtype == "后三") {
                            subtype = subtype + "和值"
                        }
                        $(".lottery-open-list .code").removeClass("expand");
                        $(".lottery-open-list .title .zutype").html(nowtag).show();
                        $(".lottery-open-list .list .zutype").show()
                    } else {
                        sectype = String($(this).siblings(".label").first().text()).replace("星　直选", "").replace("直选",
                            "").replace("组选", "");
                        subtype = playGroups.find("li > a.selected").text();
                        if (subtype != sectype) {
                            subtype = sectype
                        }
                        if (typeof zutypech[subtype] != "undefined") {
                            $(".lottery-open-list .title .zutype").html(zutypech[subtype]).show()
                        }
                    }
                    var nowmethod = zutypemethod(subtype);
                    $(".lottery-open-list .list .zutype").each(function (i, el) {
                        if (typeof nowmethod != "undefined") {
                            $(el).html(nowmethod($(el).attr("rel")))
                        }
                    });
                    var column = allcoldict[$(this).data("method")];
                    $bData.method = pthiscol.data("method");
                    $bData.compress = pthiscol.data("compress");
                    buildPlayHelp(column);
                    buildPlayArea(column);
                    buildAdjustPrize(adjustPrize, column);
                    PlayOptions.update()
                });
                var nowltid = parseInt($("#lottery #topltname").attr("rel"), 10);
                if (localStorage.getItem(nowltid + "_m") != null) {
                    var tcss = localStorage.getItem(nowltid + "_m").split("|");
                    if (tcss.length > 1 && playList.find('.row > .column[data-method="' + tcss[1] + '"]').size() > 0) {
                        playList.find('.row > .column[data-method="' + tcss[1] + '"]').trigger("click")
                    } else {
                        playList.find(".row > .column").eq(0).trigger("click")
                    }
                } else {
                    playList.find(".row > .column").eq(0).trigger("click")
                }
                $("#popup .secmethod").html($(".ltp .lottery-opearation .play-list").html());
                if (localStorage.getItem(nowltid + "_m") == null) {
                    localStorage.setItem(nowltid + "_m", $("#lottery .play-groups a.selected").parent().index() + "|" +
                        $("#popup .secmethod .selected").data("method"))
                }
                if (typeof refreshigh != "undefined") {
                    refreshigh()
                }
            };
            var buildPlayHelp = function (column) {
                playHelp.empty();
                playHelp.append('<div class="tips"><i></i><span class="label">玩法提示：</span>' + column.tips + "</div>");
                playHelp.append(
                    '<div class="prize"><a data-popover=".popover-about" class="open-popover lf">玩法说明</a><i></i>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
                playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example +
                    '</div><div class="help">' + column.help + "</div></div>");
                $("#method-tip p").html(column.example + "<br>" + column.help);
                var show = function (els, target) {
                    var top = $(els).position().top;
                    var left = $(els).position().left;
                    playHelp.find(target).css({
                        top: top + 32,
                        left: left
                    }).show()
                };
                var hide = function (target) {
                    playHelp.find(target).hide()
                };
                playHelp.find(".tips > i").hover(function () {
                    show(this, ".help-info")
                }, function () {
                    hide(".help-info")
                })
            };
            var buildPlayArea = function (column) {
                playArea.empty();
                if (column.checkbox) {
                    buildCheckboxPlace(playArea, column.checkbox)
                }
                if (column.select) {
                    buildSelectPlace(playArea, column.select)
                }
                if (column.textarea) {
                    buildTextareaPlace(playArea, column.textarea)
                }
            };
            buildPlayOptions(playOptions);
            main.append(playGroups);
            main.append(playList);
            main.append(playHelp);
            main.append(playArea);
            main.append(adjustPrize);
            main.append(playOptions);
            var nowltid = parseInt($("#lottery #topltname").attr("rel"), 10);
            if (localStorage.getItem(nowltid + "_m") != null) {
                var tcs = localStorage.getItem(nowltid + "_m").split("|");
                if (tcs.length > 1) {
                    initPlayGroups(parseInt(tcs[0], 10))
                } else {
                    initPlayGroups(3)
                }
            } else {
                initPlayGroups(3)
            }
            LotteryRecord.init()
        };
        var init = function (data) {
            if (data) {
                $Lottery = data.lottery;
                $DownCode = data.downCode;
                $FenDownCode = data.fenDownCode;
                $LiDownCode = data.liDownCode;
                $Method = data.method;
                $SysCode = data.sysCode;
                $SysUnitMoney = data.sysUnitMoney;
                $UserCode = data.userCode;
                $UserLp = data.userLp;
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20
            }
            initDocument();
            LotteryRecord.clear()
        };
        var isLoading = false;
        var doSubmit = function () {
            var thisContent = $(".lottery-record");
            if (!isLoading) {
                if ($bList.length == 0) {
                    return App.alert("info", "提示消息", "投注列表没有订单！", 3000)
                }
                var list = [];
                $.each($bList, function (i, v) {
                    list.push({
                        lottery: v.lottery,
                        issue: v.issue,
                        method: v.method,
                        content: v.content,
                        model: v.model,
                        multiple: v.multiple,
                        code: v.code,
                        compress: v.compress
                    })
                });
                var data = {
                    text: $.toJSON(list)
                };
                GameLotteryCtrl.addOrder({
                    data: data,
                    beforeSend: function () {
                        isLoading = true;
                        App.blockUI({
                            message: "提交中...",
                            target: $(".mainlottery"),
                            boxed: true
                        })
                    },
                    success: function (response) {
                        if (response.error == 0) {
                            isLoading = false;
                            App.unblockUI($(".mainlottery"));
                            LotteryRecord.clear();
                            BasketLtChoose = [];
                            $("#cleanbaketnow").click();
                            App.alert("success", "提示消息", "您的订单已投注成功！", 3000);
                            $("#lottery #ltbalbox").click();
                            $('[data-field="lotteryBalance"]').html(response.data);
                            if (typeof RecordList != "undefined") {
                                RecordList.init()
                            }
                        }
                        if (response.error == 1) {
                            if ("116-05" == response.code) {
                                setTimeout(function () {
                                    isLoading = false;
                                    App.unblockUI($(".mainlottery"));
                                    App.alert("warning", "提示消息", "投注超时，请检查网路情况后重新重试。")
                                }, 10000)
                            } else {
                                if ("116-06" == response.code) {
                                    window.location.href = "./index.html"
                                } else {
                                    isLoading = false;
                                    App.unblockUI($(".mainlottery"));
                                    if (response.message != "该用户已被冻结") {
                                        App.alert("warning", "提示消息", response.message)
                                    } else {
                                        App.alert("normal", "提示消息", '<div class="cm">正在提交，请稍等</div>', 30000, "", function () {}, function () {
                                            App.alert("warning", "提示消息", "投注失败，请注意核对：网络超时")
                                        })
                                    }
                                }
                            }
                        }
                    }
                })
            }
        };
        return {
            namespace: "ssc",
            init: init,
            getConfig: function () {
                return {
                    lottery: $Lottery,
                    downCode: $DownCode,
                    fenDownCode: $FenDownCode,
                    liDownCode: $LiDownCode,
                    method: $Method,
                    sysCode: $SysCode,
                    sysUnitMoney: $SysUnitMoney,
                    userCode: $UserCode,
                    userLp: $UserLp,
                    userMaxCode: $UserMaxCode,
                    userMinCode: $UserMinCode
                }
            },
            bList: function () {
                return $bList
            },
            clear: function () {
                LotteryRecord.clear()
            },
            addCallback: function (cb) {
                addCallback.push(cb)
            }
        }
    }();
 
    var kl8_utils = ssc_utils;
    var kl8_main = ssc_main;
    var pk10_utils = function () {
        var _inputCheck_Num = function (datasel, l, fun) {
            fun = $.isFunction(fun) ? fun : function (n, l) {
                return true
            };
            var newsel = [];
            datasel = ArrayUtil.unique(datasel);
            var regex = new RegExp('^([0-9]{2}\\s{1}){' + (l - 1) + '}[0-9]{2}$');
            $.each(datasel, function (i, n) {
                if (regex.test(n) && fun(n, l)) {
                    newsel.push(n)
                }
            });
            return newsel
        };
        var _numberCheck_Num = function (n) {
            var t = n.split(' ');
            var l = t.length;
            for (var i = 0; i < l; i++) {
                if (Number(t[i]) > 10 || Number(t[i]) < 1) {
                    return false
                }
                for (var j = i + 1; j < l; j++) {
                    if (Number(t[i]) == Number(t[j])) {
                        return false
                    }
                }
            };
            return true
        };
        var _inputNumbers = function (type, datasel) {
            var nums = 0,
                tmp_nums = 1;
            switch (type) {
            case 'qianerzxds':
                return _inputCheck_Num(datasel, 2, _numberCheck_Num).length;
            case 'qiansanzxds':
                return _inputCheck_Num(datasel, 3, _numberCheck_Num).length;
            case 'qiansanzxfs':
                if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            for (var k = 0; k < datasel[2].length; k++) {
                                if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[1][j] !=
                                    datasel[2][k]) {
                                    nums++
                                }
                            }
                        }
                    }
                }
                break;
            case 'zx_q4_fs':
                if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0 && datasel[3].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            for (var k = 0; k < datasel[2].length; k++) {
                                for (var l = 0; l < datasel[3].length; l++) {
                                    if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[0][
                                            i] != datasel[3][l] && datasel[1][j] != datasel[2][k] && datasel[1][j] !=
                                        datasel[3][l] && datasel[2][k] != datasel[3][l]) {
                                        nums++
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 'zx_q5_fs':
                if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0 && datasel[3].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            for (var k = 0; k < datasel[2].length; k++) {
                                for (var l = 0; l < datasel[3].length; l++) {
                                    for (var m = 0; m < datasel[4].length; m++) {
                                        if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[
                                            0][i] != datasel[3][l] && datasel[0][i] != datasel[4][m] && datasel[1][j] !=
                                            datasel[2][k] && datasel[1][j] != datasel[3][l] && datasel[1][j] != datasel[
                                            4][m] && datasel[2][k] != datasel[3][l] && datasel[2][k] != datasel[4][m] &&
                                            datasel[3][l] != datasel[4][m]) {
                                            nums++
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 'qianerzxfs':
                if (datasel[0].length > 0 && datasel[1].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            if (datasel[0][i] != datasel[1][j]) {
                                nums++
                            }
                        }
                    }
                }
                break;
            case 'dingweidan':
                var maxplace = 3;
                for (var i = 0; i < maxplace; i++) {
                    nums += datasel[i].length
                }
                break;
            case 'dwqian':
            case 'dwhou':
                var maxplace = 5;
                for (var i = 0; i < maxplace; i++) {
                    nums += datasel[i].length
                }
                break;
            default:
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    if (datasel[i].length == 0) {
                        tmp_nums = 0;
                        break
                    }
                    tmp_nums *= datasel[i].length
                }
                nums += tmp_nums
            };
            return nums
        };
        var _formatSelect_Num = function (datasel, m, n) {
            var newsel = new Array();
            if (!m) m = 0;
            if (!n) n = 0;
            for (var i = 0; i < m; i++) {
                newsel.push('-')
            }
            for (var i = 0; i < datasel.length; i++) {
                var f = datasel[i].toString().replace(/\,/g, ' ');
                if (f == '') {
                    newsel.push('-')
                } else {
                    newsel.push(f)
                }
            }
            for (var i = 0; i < n; i++) {
                newsel.push('-')
            };
            return newsel.toString()
        };
        var _formatTextarea_Num = function (type, datasel) {
            switch (type) {
            case 'qianerzxds':
                datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num);
                break;
            case 'qiansanzxds':
                datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num);
                break;
            case 'zx_q4_ds':
                datasel = _inputCheck_Num(datasel, 4, _numberCheck_Num);
                break;
            case 'zx_q5_ds':
                datasel = _inputCheck_Num(datasel, 5, _numberCheck_Num);
                break;
            default:
                break
            };
            return datasel.toString().replace(/\,/g, ';')
        };
        var _inputFormat = function (type, datasel) {
            switch (type) {
            case 'qianyi':
                return datasel[0].toString();
            case 'qianerzxfs':
            case 'qiansanzxfs':
            case 'zx_q4_fs':
            case 'zx_q5_fs':
            case 'dingweidan':
            case 'dwqian':
            case 'dwhou':
                return _formatSelect_Num(datasel);
            case 'qianerzxds':
            case 'qiansanzxds':
            case 'zx_q4_ds':
            case 'zx_q5_ds':
                return _formatTextarea_Num(type, datasel);
            case 'dxd1':
            case 'dxd2':
            case 'dxd3':
            case 'dsd1':
            case 'dsd2':
            case 'dsd3':
            case 'lh_lh_1v10':
            case 'lh_lh_2v9':
            case 'lh_lh_3v8':
            case 'lh_lh_4v7':
            case 'lh_lh_5v6':
                return datasel[0].toString().replace(/\,/g, '|');
            default:
                break
            }
        };
        return {
            inputNumbers: _inputNumbers,
            inputFormat: _inputFormat
        }
    }();
    var pk10_main = function () {
        var $Lottery;
        var $DownCode;
        var $FenDownCode;
        var $LiDownCode;
        var $Method;
        var $SysCode;
        var $SysUnitMoney;
        var $UserCode;
        var $UserMaxCode;
        var $UserMinCode;
        var $bData = {}, $bList = [];
        var Layout = [{
                title: '前一',
                rows: [[{
                            title: '前一',
                            columns: [{
                                    showname: '前一',
                                    shortname: 'qianyi',
                                    realname: '[前一]',
                                    tips: '从第一位中选择1个以上号码。',
                                    example: '',
                                    help: '选号与开奖号码中第一位一致即中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '前二',
                rows: [[{
                            title: '前二',
                            columns: [{
                                    showname: '前二复式',
                                    shortname: 'qianerzxfs',
                                    realname: '[前二_复式]',
                                    tips: '从第一位、第二位、第三位中至少各选择1个号码。',
                                    example: '选号与开奖号码中第一位、第二位一致即中奖。',
                                    help: '',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '前二单式',
                                    shortname: 'qianerzxds',
                                    realname: '[前二_单式]',
                                    tips: '手动输入号码，至少输入2个二位数号码组成一注。',
                                    example: '',
                                    help: '如：选择01，02，开奖号码的前2个号码顺序为01，02，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '前三',
                rows: [[{
                            title: '前三',
                            columns: [{
                                    showname: '前三复式',
                                    shortname: 'qiansanzxfs',
                                    realname: '[前三_复式]',
                                    tips: '从第一位、第二位、第三位中至少各选择1个号码。',
                                    example: '',
                                    help: '选号与开奖号码中第一位、第二位、第三位一致即中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第三位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '前三单式',
                                    shortname: 'qiansanzxds',
                                    realname: '[前三_单式]',
                                    tips: '手动输入号码，至少输入3个二位数号码组成一注。',
                                    example: '',
                                    help: '如：手动输入01 02 03，开奖号码的前3个号码顺序为01 02 03，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '前四',
                rows: [[{
                            title: '前四',
                            columns: [{
                                    showname: '前四复式',
                                    shortname: 'zx_q4_fs',
                                    realname: '[前四_复式]',
                                    tips: '从第一位、第二位、第三位、第四位中至少各选择1个号码。',
                                    example: '',
                                    help: '选号与开奖号码中第一位、第二位、第三位、第四位一致即中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第三位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第四位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '前四单式',
                                    shortname: 'zx_q4_ds',
                                    realname: '[前四_单式]',
                                    tips: '手动输入号码，至少输入4个二位数号码组成一注。',
                                    example: '',
                                    help: '如：手动输入01 02 03 04，开奖号码的前5个号码顺序为01 02 03 04，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '前五',
                rows: [[{
                            title: '前五',
                            columns: [{
                                    showname: '前五复式',
                                    shortname: 'zx_q5_fs',
                                    realname: '[前五_复式]',
                                    tips: '从第一位、第二位、第三位、第四位、第五位中至少各选择1个号码。',
                                    example: '',
                                    help: '选号与开奖号码中第一位、第二位、第三位、第四位、第五位一致即中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第三位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第四位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第五位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '前五单式',
                                    shortname: 'zx_q5_ds',
                                    realname: '[前五_单式]',
                                    tips: '手动输入号码，至少输入5个二位数号码组成一注。',
                                    example: '',
                                    help: '如：手动输入01 02 03 04 05，开奖号码的前5个号码顺序为01 02 03 04 05，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '定位胆',
                rows: [[{
                            title: '定位胆',
                            columns: [{
                                    showname: '第1~5名',
                                    shortname: 'dwqian',
                                    realname: '[定位胆_第1~5名]',
                                    tips: '在一、二、三、四、五名任意位置上任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '选择的号码与开奖的号码相对应，即为中奖。如选择第一位购买号码为1,第一位开奖号码为1，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第二名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第三名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第四名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第五名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '第6~10名',
                                    shortname: 'dwhou',
                                    realname: '[定位胆_第6~10名]',
                                    tips: '在第六、七、八、九、十名任意位置上任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '选择的号码与开奖的号码相对应，即为中奖。如选择第六位购买号码为1,第六位开奖号码为1，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第六名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第七名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第八名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第九名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }, {
                                                title: '第十名',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '龙虎',
                rows: [[{
                            title: '龙虎',
                            columns: [{
                                    showname: '1v10',
                                    shortname: 'lh_lh_1v10',
                                    realname: '[龙虎_第一名]',
                                    tips: '从“龙、虎”中至少选一个组成一注。',
                                    example: '',
                                    help: '从龙、虎中选择1个号码形态组成一注，冠军开奖号码大于第十名开奖号码，则为龙；冠军开奖号码小于第十名开奖号码，则为虎',
                                    select: {
                                        layout: [{
                                                title: '第一名',
                                                balls: ['龙', '虎']
                                            }]
                                    }
                                }, {
                                    showname: '2v9',
                                    shortname: 'lh_lh_2v9',
                                    realname: '[龙虎_第二名]',
                                    tips: '从“龙、虎”中至少选一个组成一注。',
                                    example: '',
                                    help: '从龙、虎中选择1个号码形态组成一注，亚军开奖号码大于第九名开奖号码，则为龙；亚军开奖号码小于第九名开奖号码，则为虎',
                                    select: {
                                        layout: [{
                                                title: '第二名',
                                                balls: ['龙', '虎']
                                            }]
                                    }
                                }, {
                                    showname: '3v8',
                                    shortname: 'lh_lh_3v8',
                                    realname: '[龙虎_第三名]',
                                    tips: '从“龙、虎”中至少选一个组成一注。',
                                    example: '',
                                    help: '从龙、虎中选择1个号码形态组成一注，季军开奖号码大于第八名开奖号码，则为龙；季军开奖号码小于第八名开奖号码，则为虎',
                                    select: {
                                        layout: [{
                                                title: '第三名',
                                                balls: ['龙', '虎']
                                            }]
                                    }
                                }, {
                                    showname: '4v7',
                                    shortname: 'lh_lh_4v7',
                                    realname: '[龙虎_第四名]',
                                    tips: '从“龙、虎”中至少选一个组成一注。',
                                    example: '',
                                    help: '从龙、虎中选择1个号码形态组成一注，第四名开奖号码大于第七名开奖号码，则为龙；第四名开奖号码小于第七名开奖号码，则为虎',
                                    select: {
                                        layout: [{
                                                title: '第三名',
                                                balls: ['龙', '虎']
                                            }]
                                    }
                                }, {
                                    showname: '5v6',
                                    shortname: 'lh_lh_5v6',
                                    realname: '[龙虎_第五名]',
                                    tips: '从“龙、虎”中至少选一个组成一注。',
                                    example: '',
                                    help: '从龙、虎中选择1个号码形态组成一注，第五名开奖号码大于第六名开奖号码，则为龙；第五名开奖号码小于第六名开奖号码，则为虎',
                                    select: {
                                        layout: [{
                                                title: '第三名',
                                                balls: ['龙', '虎']
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '大小',
                rows: [[{
                            title: '大小',
                            columns: [{
                                    showname: '第一名',
                                    shortname: 'dxd1',
                                    realname: '[大小_第一名]',
                                    tips: '选择第一名车号大小为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一名',
                                                balls: ['大', '小']
                                            }]
                                    }
                                }, {
                                    showname: '第二名',
                                    shortname: 'dxd2',
                                    realname: '[大小_第二名]',
                                    tips: '选择第二名车号大小为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第二位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第二名',
                                                balls: ['大', '小']
                                            }]
                                    }
                                }, {
                                    showname: '第三名',
                                    shortname: 'dxd3',
                                    realname: '[大小_第三名]',
                                    tips: '选择第三名车号大小为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第三位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第三名',
                                                balls: ['大', '小']
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '单双',
                rows: [[{
                            title: '单双',
                            columns: [{
                                    showname: '第一名',
                                    shortname: 'dsd1',
                                    realname: '[单双_第一名]',
                                    tips: '选择第一名车号单双为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第一名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一名',
                                                balls: ['单', '双']
                                            }]
                                    }
                                }, {
                                    showname: '第二名',
                                    shortname: 'dsd2',
                                    realname: '[单双_第二名]',
                                    tips: '选择第二名车号单双为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第二名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第二名',
                                                balls: ['单', '双']
                                            }]
                                    }
                                }, {
                                    showname: '第三名',
                                    shortname: 'dsd3',
                                    realname: '[单双_第三名]',
                                    tips: '选择第三名车号单双为一注。',
                                    example: '',
                                    help: '选择的号码与开奖号码相对应，即为中奖，如第三名购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第三名',
                                                balls: ['单', '双']
                                            }]
                                    }
                                }]
                        }]]
            }];
        var getSelectBall = function (playArea) {
            var datasel = [];
            var sb = playArea.find('.balls');
            if (sb && sb.length > 0) {
                $.each(sb, function () {
                    var ball = [];
                    var as = $(this).find('ul > li > a.selected');
                    $.each(as, function () {
                        var val = $(this).attr('data-val');
                        ball.push(val)
                    });
                    datasel.push(ball)
                })
            };
            return datasel
        };
        var getTextareaBall = function (playArea) {
            var datasel = [];
            var textarea = playArea.find('.textarea > textarea');
            if (textarea && textarea.length > 0) {
                var format = textarea.val().replace(/\,|\n/g, ';');
                var as = format.split(';');
                $.each(as, function (idx, val) {
                    datasel.push(val)
                })
            };
            return datasel
        };
        var buildSelectPlace = function (playArea, select) {
            $.each(select.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + '</div>')
                }
                if (val.cls) {
                    row.addClass(val.cls)
                };
                var balls = $('<div class="balls">').append('<ul>');
                $.each(val.balls, function (j, ball) {
                    var els = $('<li>').append('<a>' + ball + '</a>');
                    if (val.values) {
                        els.find('a').attr('data-val', val.values[j])
                    } else {
                        els.find('a').attr('data-val', ball)
                    } if (val.styles) {
                        els.find('a').addClass(val.styles[j])
                    }
                    balls.find('ul').append(els)
                });
                balls.find('ul > li > a').click(function () {
                    if ($(this).hasClass('selected')) {
                        $(this).parent().removeClass('selected');
                        $(this).removeClass('selected')
                    } else {
                        $(this).parent().addClass('selected');
                        $(this).addClass('selected')
                    }
                    PlayOptions.update()
                });
                row.append(balls);
                if (val.tools) {
                    buildBallTools(row, balls)
                }
                playArea.append(row)
            })
        };
        var buildBallTools = function (row, balls) {
            var blist = balls.find('ul > li > a');
            var tools = $('<div class="tools">').append(
                '<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
            var setSelected = function (els, selected) {
                if (selected) {
                    if (!els.hasClass('selected')) {
                        els.trigger('click')
                    }
                } else {
                    if (els.hasClass('selected')) {
                        els.trigger('click')
                    }
                }
            };
            tools.find('a[data-command="all"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), true)
                })
            });
            tools.find('a[data-command="big"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), false)
                    } else {
                        setSelected($(this), true)
                    }
                })
            });
            tools.find('a[data-command="small"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="single"]').click(function () {
                var arr = [1, 3, 5, 7, 9, 11];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="double"]').click(function () {
                var arr = [0, 2, 4, 6, 8, 10];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="clean"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), false)
                })
            });
            row.append(tools)
        };
        var buildTextareaPlace = function (playArea) {
            var textarea = $('<div class="textarea">').append('<textarea>');
            var help = $('<div class="help">').html('每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
            textarea.find('textarea').keyup(function () {
                $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'));
                PlayOptions.update()
            });
            textarea.find('textarea').on('paste', function () {
                var thisarea = $(this);
                setTimeout(function () {
                    thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ' '));
                    PlayOptions.update()
                }, 10)
            });
            playArea.append(textarea);
            playArea.append(help)
        };
        var PlayArea = function () {
            var data = function () {
                var playArea = $('.lottery-betting .lottery-opearation > .play-area');
                var datasel = [];
                var balls = getSelectBall(playArea);
                var textarea = getTextareaBall(playArea);
                return datasel.concat(balls).concat(textarea)
            };
            var reset = function () {
                var playList = $('.lottery-betting .lottery-opearation > .play-list');
                playList.find('[data-method="' + $bData.method + '"]').trigger('click')
            };
            return {
                data: data,
                reset: reset
            }
        }();
        var buildPlayOptions = function (playOptions) {
            playOptions.append(['<div class="part-one">',
                    '<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注</div>',
                    '<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>', '</div>']
                .join(''));
            playOptions.append(['<div class="part-two">', '<div class="label">模式</div>',
                    '<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
                    '<div class="label">倍数</div>',
                    '<div class="multiple"><input name="multiple" type="text" value="1"></div>', '</div>'].join(''));
            var bDataModel = 'yuan';
            if ($.cookie('USER_BDATA_MODEL')) {
                bDataModel = $.cookie('USER_BDATA_MODEL')
            }
            playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass('selected');
            var multiple = playOptions.find('.multiple > input');
            multiple.keyup(function () {
                if ($(this).val() == '') return;
                var val = $(this).val();
                if (/^[0-9]*$/.test(val)) {
                    val = Number(val);
                    if (val > 10000) $(this).val(10000);
                    if (val < 1) $(this).val(1);
                    PlayOptions.update()
                } else {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            multiple.keydown(function (e) {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    if ($(this).val() == '') return;
                    var val = Number($(this).val());
                    if (!isNaN(val)) {
                        if (e.keyCode == 38) val++;
                        if (e.keyCode == 40) val--;
                        if (val > 10000) val = 10000;
                        if (val < 1) val = 1;
                        $(this).val(val)
                    }
                }
            });
            multiple.blur(function () {
                if ($(this).val() == '') {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            var fenModel = function () {
                if ($FenDownCode > 0) {
                    var thisCode = $SysCode - $FenDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '分模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var liModel = function () {
                if ($LiDownCode > 0) {
                    var thisCode = $SysCode - $LiDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '厘模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var defaultModel = function () {
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20
            };
            var update = function (model) {
                if (model == 'fen') {
                    fenModel()
                } else if (model == 'li') {
                    liModel()
                } else {
                    defaultModel()
                }
            };
            var models = playOptions.find('.model > a');
            models.click(function () {
                if (!$(this).hasClass('selected')) {
                    models.removeClass('selected');
                    $(this).addClass('selected');
                    var model = $(this).attr('data-val');
                    update(model);
                    AdjustPrize.slider();
                    AdjustPrize.update();
                    PlayOptions.update();
                    var expires = new Date(moment().startOf('year').add(1, 'years'));
                    $.cookie('USER_BDATA_MODEL', model, {
                        expires: expires,
                        path: '/'
                    })
                }
            });
            update(bDataModel)
        };
        var PlayOptions = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-options')
            };
            var multiple = function () {
                return Number(els().find('.multiple > input').val())
            };
            var model = function () {
                var val = els().find('.model > a.selected').attr('data-val');
                if (val == 'yuan') {
                    return {
                        val: val,
                        money: 1
                    }
                }
                if (val == 'jiao') {
                    return {
                        val: val,
                        money: 0.1
                    }
                }
                if (val == 'fen') {
                    return {
                        val: val,
                        money: 0.01
                    }
                }
                if (val == 'li') {
                    return {
                        val: val,
                        money: 0.001
                    }
                }
            };
            var update = function () {
                var sumstr = LotteryUtils.inputFormat($('.play-list .selected').data('method'), PlayArea.data());
                $('.ks_btn').attr('summary', (sumstr.length < 20 ? sumstr : (sumstr.substring(0, 20) + '...')));
                var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
                var total = multiple() * num * $SysUnitMoney * model().money;
                els().find('[data-field="num"]').html(num);
                els().find('[data-field="total"]').html(total.toFixed(3));
                $('#lottery .totaldeal').html(num);
                $('#lottery .totaldealtime').html('x' + multiple());
                $('#lottery .totaldealamount').html(total.toFixed(3));
                var gainnumber = Number(parseFloat($('[data-field="prize"]').html() * multiple()) - total.toFixed(3)).toFixed(
                    3);
                (num > 0) ? $('#lottery .totalgain').html(gainnumber) : $('#lottery .totalgain').html('0.000');
                if (parseInt(num, 10) > 0) {
                    $('.btn[data-command="add"]').addClass('active')
                } else {
                    $('.btn[data-command="add"]').removeClass('active')
                }
            };
            return {
                els: els,
                multiple: multiple,
                model: model,
                update: update
            }
        }();
        var buildAdjustPrize = function (adjustPrize, column) {
            var start = $UserMaxCode;
            if ($.cookie('USER_BDATA_CODE')) {
                var bCode = $.cookie('USER_BDATA_CODE');
                if (!isNaN(bCode)) {
                    if (bCode > $UserMaxCode) {
                        start = $UserMaxCode
                    } else if (bCode < $UserMinCode) {
                        start = $UserMinCode
                    } else {
                        start = bCode
                    }
                }
            }
            adjustPrize.empty();
            var nownick_code = $('#lottery #topltname').attr('nick');
            if (localStorage.getItem(nownick_code + '_code') != null) {
                start = parseInt(localStorage.getItem(nownick_code + '_code'), 10)
            }
            adjustPrize.append([
                    '<div>奖金调节：<label class="rf"><span data-field="code">0</span> / <span data-field="point">0.0</span>%</label></div>',
                    '<div class="slider"></div>',
                    '<div class="range-slider-customed"><input type="range" class="betrate" min="', $UserMinCode,
                    '" max="', $UserMaxCode, '" value="', start, '" step="2"></div>', ''].join(''));
            var slider = adjustPrize.find('.slider');
            var nowbrate = adjustPrize.find('.betrate');
            nowbrate.off('change').on('change', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            }).off('input').on('input', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            });
            var lc = GameData.getConfig();
            if (parseInt($UserMaxCode, 10) > parseInt(lc.maxBetCode, 10)) {
                $UserMaxCode = parseInt(lc.maxBetCode, 10)
            };
            var sop = {
                connect: 'lower',
                behaviour: 'snap',
                step: 2,
                start: start,
                range: {
                    'max': $UserMaxCode,
                    'min': $UserMinCode
                }
            };
            slider.noUiSlider(sop);
            if ($UserMaxCode == $UserMinCode) {
                slider.attr('disabled', 'disabled')
            } else {
                slider.removeAttr('disabled')
            };
            var update = function (code) {

                var point = $UserLp - ((code - $UserMinCode) / 20.0).toFixed(1);
                adjustPrize.find('[data-field="code"]').html(code);
                adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
                AdjustPrize.update()
            };
            var onSet = function () {
                var code = Number(slider.val());
                update(code);
                var expires = new Date(moment().startOf('year').add(1, 'years'));
                $.cookie('USER_BDATA_CODE', code, {
                    expires: expires,
                    path: '/'
                })
            };
            var onSlide = function () {
                var code = Number(slider.val());
                update(code)
            };
            slider.on({
                set: onSet,
                slide: onSlide
            });
            update(start)
        };
        var PlayHelp = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-help')
            };
            var update = function (t) {
                els().find('[data-field="prize"]').html(t)
            };
            return {
                els: els,
                update: update
            }
        }();
        var AdjustPrize = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .adjust-prize')
            };
            var code = function () {
                return Number(els().find('[data-field="code"]').html())
            };
            var point = function () {
                return Number(els().find('[data-field="point"]').html())
            };
            var slider = function () {
                els().find('.slider').noUiSlider({
                    range: {
                        'max': $UserMaxCode,
                        'min': $UserMinCode
                    }
                }, true)
            };
            var update = function () {
                var method = $Method[$bData.method];
                var model = PlayOptions.model();
                var mMoney = PlayOptions.model().money;
                if (method) {
                    var ps = method.bonus.split(',');
                    var psx = Number(method.x);
                    var t = [];
                    $('[data-command="chase"]').attr('code', $UserMinCode);
                    for (var i = 0, j = ps.length; i < j; i++) {
                        var percent = Number(ps[i]) / $UserMinCode;
                        var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * ($SysUnitMoney / 2);
                        t.push(pm)
                    }
                    t.sort(function (a, b) {
                        return Number(a) > Number(b) ? 1 : -1
                    });
                    if (t.length == 1) {
                        t[0] = t[0] * model.money;
                        PlayHelp.update(t[0].toFixed(3))
                    } else {
                        t[0] = t[0] * model.money;
                        t[t.length - 1] = t[t.length - 1] * model.money;
                        PlayHelp.update(t[0].toFixed(3) + ' ~ ' + t[t.length - 1].toFixed(3))
                    }
                }
            };
            return {
                els: els,
                code: code,
                point: point,
                update: update,
                slider: slider
            }
        }();
        var addCallback = [];
        var addToList = function (callback) {
            var issue = $('[data-field="global-expect"]').html();
            var method = $bData.method;
            var compress = $bData.compress;
            var datasel = PlayArea.data();
            var num = LotteryUtils.inputNumbers(method, datasel);
            var content = LotteryUtils.inputFormat(method, datasel);
            var code = AdjustPrize.code();
            var point = AdjustPrize.point();
            var multiple = PlayOptions.multiple();
            var model = PlayOptions.model().val;
            var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
            if (num == 0) {
                App.alert('info', '提示消息', '您还没有选择号码或所选号码不全！', 3000);
                return false
            };
            var _method = $Method[method];
            if (num <= _method.oooNums) {
                App.confirm('question', '温馨提示', '您所投注内容属于单挑玩法，最高奖金为' + _method.oooBonus + '元，确认继续投注？', 0, '确认', '取消', function () {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback);
                    PlayArea.reset()
                })
            } else {
                if (String(method).indexOf('lh') > -1) {
                    var splitcontent = content.split('|');
                    for (i = 0; i < splitcontent.length; i++) {
                        var realnum = parseInt(num / splitcontent.length, 10);
                        total = multiple * realnum * $SysUnitMoney * PlayOptions.model().money;
                        LotteryRecord.add(issue, method, compress, splitcontent[i], realnum, multiple, model, code,
                            point, total, null)
                    }
                    if (typeof finalcall == 'function') {
                        finalcall()
                    }
                } else {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback)
                }
                PlayArea.reset()
            }
        };
        var LotteryRecord = function () {
            var els = function () {
                return $('.lottery-record')
            };
            var name = function (method) {
                var method = $Method[method];
                return '[' + method.name + ']'
            };
            var format = function (content) {
                if (content.length > 16) {
                    content = content.substring(0, 16) + '…<a data-command="details">[详细]'
                };
                return content
            };
            var add = function (issue, method, compress, content, num, multiple, model, code, point, total, callback) {
                var tbody = els().find('.list table > tbody');
                var tr = $('<tr>');
                var mobilebasket = ['<li>', '<div class="row clearfix">',
                        '<div class="col-15"><em class="m_ico"></em></div>', '<div class="col-70">',
                        '<h3>5,6,7,8,9</h3>', '<span>五星直选复式 1注 元 2.1% 5倍 10元</span>', '</div>',
                        '<div class="col-15"><em class="m_ico"></em></div>', '</div>', '</li>'].join('');
                BasketLtChoose.push({
                    'm': name(method),
                    'c': content,
                    'num': num,
                    'model': model,
                    'multiple': multiple,
                    'p': point.toFixed(1),
                    't': total.toFixed(3)
                });
                $('#basket .basketitems').append(mobilebasket);
                tr.append('<td class="content">' + name(method) + format(content) + '</td>');
                tr.append('<td class="num">' + num + '注</td>');
                tr.append('<td class="multiple">' + multiple + '倍</td>');
                tr.append('<td class="point">' + point.toFixed(1) + '%</td>');
                tr.append('<td class="total">' + total.toFixed(3) + '元</td>');
                tr.append('<td class="btn"><a data-command="del">删除</a></td>');
                tr.find('a[data-command="del"]').click(function () {
                    var idx = tbody.find('tr').index(tr);
                    ArrayUtil.remove($bList, idx);
                    tr.remove()
                });
                tbody.append(tr);
                if (compress === true && num >= 1000) {
                    App.blockUI({
                        target: els(),
                        boxed: true,
                        message: '超大注数处理中...'
                    });
                    LZMA.compress(content, 3, function (result) {
                        App.unblockUI(els());
                        if (result === false) {
                            return App.alert('info', '消息提示', '号码添加失败，请重试！', 3000)
                        }
                        content = LZMAUtil.toHex(result);
                        $bList.push({
                            lottery: $Lottery,
                            issue: issue,
                            content: content,
                            num: num,
                            method: method,
                            multiple: multiple,
                            model: model,
                            code: code,
                            compress: true
                        });
                        if ($.isFunction(callback)) callback();
                        for (var i = 0; i < addCallback.length; i++) {
                            if ($.isFunction(addCallback[i])) {
                                addCallback[i]()
                            }
                        }
                    })
                } else {
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: false
                    });
                    if ($.isFunction(callback)) callback();
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                }
            };
            var clear = function () {
                els().find('.list table > tbody').empty();
                $bList = []
            };
            var isInit = false;
            var init = function () {
                isInit = true;
                App.initScroll();
                var button = els().find('.button');
                button.find('[data-command="add"]').off('click').click(function () {
                    addToList()
                });
                button.find('[data-command="submit"]').off('click').click(function () {
                    App.confirm('question', '确认消息', ['<div class="myconfirm">你确认加入第' + $(
                            '.ltp .lottery-open-info [data-field="global-expect"]').text() + '期？<br>', '总注数：', ($(
                            '.total-inner [data-field="sum-num"]').text() == '0' ? $('.text-money[data-field="num"]').text() :
                            $('.total-inner [data-field="sum-num"]').text()), '<br>', '订单笔数：1<br>', '是否追号：否<br>',
                            '投注总额：', ($('.total-inner [data-field="sum-money"]').text() == '0.000' ? $(
                            '.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()),
                            '元</div>', '<div class="cftip aboutmax">温馨提示：本期最高奖金限额200000元，请会员谨慎投注！</div>'].join(''), 0,
                        '确定', '取消', function () {
                        if ($bList.length > 0) {
                            doSubmit()
                        } else {
                            addToList(function () {
                                doSubmit()
                            }, function () {
                                doSubmit()
                            })
                        }
                    })
                });
                button.find('[data-command="clear"]').off('click').click(function () {
                    clear()
                });
                button.find('[data-command="chase"]').off('click').click(function () {
                    LotteryChase.init()
                })
            };
            return {
                init: init,
                add: add,
                clear: clear
            }
        }();
        var zutypech = {
            "大小": "冠军",
            "和值": "冠亚和值",
            "单双": "冠军",
            "龙虎": "1v10"
        };
        var initDocument = function () {
            $('.lottery-betting .lottery-opearation').empty();
            var main = $('.lottery-betting .lottery-opearation');
            var playGroups = $('<div class="play-groups">').append('<ul>');
            var playList = $('<div class="play-list">');
            var playHelp = $('<div class="play-help">');
            var playArea = $('<div class="play-area">');
            var adjustPrize = $('<div class="adjust-prize">');
            var playOptions = $('<div class="play-options clearfix">');
            var initPlayGroups = function (index) {
                playGroups.find('ul').empty();
                $.each(Layout, function (i, group) {
                    if ($.inArray(group.title, GameData.getMethodList()) > -1) {
                        var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
                        thisGroup.find('a').off('click').click(function () {
                            if (!$(this).hasClass('selected')) {
                                playGroups.find('li > a.selected').removeClass('selected');
                                $(this).addClass('selected');
                                var topmname = $(this).text();
                                $('#topltname i#mtopname').attr('top', topmname).html('-' + topmname);
                                if (typeof zutypech[topmname] != 'undefined') {
                                    $('.lottery-open-list .code').removeClass('expand');
                                    $('.lottery-open-list .title .zutype').html(zutypech[topmname]).show();
                                    $('.lottery-open-list .list .zutype').show()
                                } else {
                                    $('.lottery-open-list .code').addClass('expand');
                                    $('.lottery-open-list .title .zutype').html('').hide();
                                    $('.lottery-open-list .list .zutype').hide()
                                }
                                initPlayList(group.rows)
                            }
                        });
                        playGroups.find('ul').append(thisGroup)
                    }
                });
                playGroups.find('ul > li > a').eq(index).trigger('click')
            };
            var initPlayList = function (list) {
                playList.empty();
                $.each(list, function (i, rows) {
                    var thisRow = $('<div class="row clearfix">');
                    $.each(rows, function (j, row) {
                        thisRow.append('<div class="label">' + row.title + '</div>');
                        $.each(row.columns, function (k, column) {
                            if ($.inArray(column.shortname, GameData.getMethods()) > -1) {
                                var thisColumn = $('<div class="column">').attr('data-method', column.shortname).html(
                                    column.showname);
                                thisColumn.off('click').click(function () {
                                    if (!$(this).hasClass('selected')) {
                                        playList.find('.row > .column').removeClass('selected');
                                        $(this).addClass('selected')
                                    };
                                    var nowtag = $(this).text();
                                    var topindex = $('#lottery .play-groups a.selected').parent().index();
                                    var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                                    localStorage.setItem(nowltid + '_m', topindex + '|' + $(this).data('method'));
                                    $('#topltname i#mtopname').html('-' + ((typeof $('#topltname i#mtopname').attr(
                                        'top') != 'undefined' && nowtag != $('#topltname i#mtopname').attr('top') &&
                                        nowtag.indexOf($('#topltname i#mtopname').attr('top')) == -1) ? $(
                                        '#topltname i#mtopname').attr('top') : '') + nowtag);
                                    var subtype;
                                    if (String(nowtag).indexOf('和值') > -1) {} else {
                                        $('.lottery-open-list .code').addClass('expand');
                                        $('.lottery-open-list .title .zutype').html('').hide();
                                        $('.lottery-open-list .list .zutype').hide()
                                    }
                                    $bData.method = column.shortname;
                                    $bData.compress = column.compress;
                                    buildPlayHelp(column);
                                    buildPlayArea(column);
                                    buildAdjustPrize(adjustPrize, column);
                                    PlayOptions.update()
                                });
                                thisRow.append(thisColumn)
                            }
                        })
                    });
                    playList.append(thisRow)
                });
                var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                if (localStorage.getItem(nowltid + '_m') != null) {
                    var tcss = localStorage.getItem(nowltid + '_m').split('|');
                    if (tcss.length > 1 && playList.find('.row > .column[data-method="' + tcss[1] + '"]').size() > 0) {
                        playList.find('.row > .column[data-method="' + tcss[1] + '"]').trigger('click')
                    } else {
                        playList.find('.row > .column').eq(0).trigger('click')
                    }
                } else {
                    playList.find('.row > .column').eq(0).trigger('click')
                }
                $('#popup .secmethod').html($('.ltp .lottery-opearation .play-list').html());
                if (typeof refreshigh != 'undefined') {
                    refreshigh()
                }
            };
            var buildPlayHelp = function (column) {
                playHelp.empty();
                playHelp.append('<div class="tips"><i></i><span class="label">玩法提示：</span>' + column.tips + '</div>');
                playHelp.append(
                    '<div class="prize"><a data-popover=".popover-about" class="open-popover lf">玩法说明</a><i></i>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
                playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example +
                    '</div><div class="help">' + column.help + '</div></div>');
                $('#method-tip p').html(column.example + '<br>' + column.help);
                var show = function (els, target) {
                    var top = $(els).position().top;
                    var left = $(els).position().left;
                    playHelp.find(target).css({
                        top: top + 32,
                        left: left
                    }).show()
                };
                var hide = function (target) {
                    playHelp.find(target).hide()
                };
                playHelp.find('.tips > i').hover(function () {
                    show(this, '.help-info')
                }, function () {
                    hide('.help-info')
                })
            };
            var buildPlayArea = function (column) {
                playArea.empty();
                if (column.select) {
                    buildSelectPlace(playArea, column.select)
                }
                if (column.textarea) {
                    buildTextareaPlace(playArea, column.textarea)
                }
            };
            buildPlayOptions(playOptions);
            main.append(playGroups);
            main.append(playList);
            main.append(playHelp);
            main.append(playArea);
            main.append(adjustPrize);
            main.append(playOptions);
            var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
            if (localStorage.getItem(nowltid + '_m') != null) {
                var tcs = localStorage.getItem(nowltid + '_m').split('|');
                if (tcs.length > 1) {
                    initPlayGroups(parseInt(tcs[0], 10))
                } else {
                    initPlayGroups(0)
                }
            } else {
                initPlayGroups(0)
            }
            LotteryRecord.init()
        };
        var init = function (data) {
            if (data) {
                $Lottery = data.lottery;
                $LotteryName = data.lotteryName;
                $DownCode = data.downCode;
                $FenDownCode = data.fenDownCode;
                $LiDownCode = data.liDownCode;
                $Method = data.method;
                $SysCode = data.sysCode;
                $SysUnitMoney = data.sysUnitMoney;
                $UserCode = data.userCode;
                $UserLp = data.userLp;
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $UserCode - $UserLp * 20
            }
            initDocument();
            LotteryRecord.clear()
        };
        var isLoading = false;
        var doSubmit = function () {
            var thisContent = $('.lottery-record');
            if (!isLoading) {
                if ($bList.length == 0) {
                    return App.alert('info', '提示消息', '投注列表没有订单！', 3000)
                };
                var list = [];
                $.each($bList, function (i, v) {
                    list.push({
                        lottery: v.lottery,
                        issue: v.issue,
                        method: v.method,
                        content: v.content,
                        model: v.model,
                        multiple: v.multiple,
                        code: v.code,
                        compress: v.compress
                    })
                });
                var data = {
                    text: $.toJSON(list)
                };
                GameLotteryCtrl.addOrder({
                    data: data,
                    beforeSend: function () {
                        isLoading = true;
                        App.blockUI({
                            target: thisContent,
                            boxed: true
                        })
                    },
                    success: function (response) {
                        if (response.error == 0) {
                            isLoading = false;
                            App.unblockUI(thisContent);
                            LotteryRecord.clear();
                            BasketLtChoose = [];
                            $("#cleanbaketnow").click();
                            App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                            $('#lottery #ltbalbox').click();
                            $('[data-field="lotteryBalance"]').html(response.data);
                            if (typeof RecordList != 'undefined') {
                                RecordList.init()
                            }
                        }
                        if (response.error == 1) {
                            if ('116-05' == response.code) {
                                setTimeout(function () {
                                    isLoading = false;
                                    App.unblockUI(thisContent);
                                    App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。')
                                }, 10000)
                            } else if ('116-06' == response.code) {
                                window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html'
                            } else {
                                isLoading = false;
                                App.unblockUI(thisContent);
                                if (response.message != '该用户已被冻结') {
                                    App.alert('warning', '提示消息', response.message)
                                } else {
                                    App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>', 30000, '', function () {}, function () {
                                        App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时')
                                    })
                                }
                            }
                        }
                    }
                })
            }
        };
        return {
            init: init,
            getConfig: function () {
                return {
                    lottery: $Lottery,
                    lotteryName: $LotteryName,
                    downCode: $DownCode,
                    fenDownCode: $FenDownCode,
                    liDownCode: $LiDownCode,
                    method: $Method,
                    sysCode: $SysCode,
                    sysUnitMoney: $SysUnitMoney,
                    userCode: $UserCode,
                    userLp: $UserLp,
                    userMaxCode: $UserMaxCode,
                    userMinCode: $UserMinCode
                }
            },
            bList: function () {
                return $bList
            },
            clear: function () {
                LotteryRecord.clear()
            },
            addCallback: function (cb) {
                addCallback.push(cb)
            }
        }
    }();
 
    var k3_utils = function () {
        var _inputCheck_Num = function (datasel, l, fun) {
            fun = $.isFunction(fun) ? fun : function (n, l) {
                return true
            };
            var newsel = [];
            datasel = ArrayUtil.unique(datasel);
            var regex = new RegExp('^[0-6]{' + l + '}$');
            $.each(datasel, function (i, n) {
                if (regex.test(n) && fun(n, l)) {
                    newsel.push(n)
                }
            });
            return newsel
        };
        var _uniqueCheck = function (a, b) {
            return ArrayUtil.intersect(a, b).length == 0 ? true : false
        };
        var _ethdsCheck = function (n, l) {
            if (l != 3) return false;
            var first = n.substring(0, 1);
            var second = n.substring(1, 2);
            var third = n.substring(2, 3);
            if (first == second && second == third) return false;
            if (first == second || second == third || third == first) return true;
            return false
        };
        var _ebthdsCheck = function (n, l) {
            if (l != 2) return false;
            var first = n.substring(0, 1);
            var second = n.substring(1, 2);
            if (first == second) return false;
            return true
        };
        var _sbthdsCheck = function (n, l) {
            if (l != 3) return false;
            var first = n.substring(0, 1);
            var second = n.substring(1, 2);
            var third = n.substring(2, 3);
            if (first != second && second != third && third != first) return true;
            return false
        };
        var _inputNumbers = function (type, datasel) {
            var nums = 0;
            switch (type) {
            case 'ebthds':
                return _inputCheck_Num(datasel, 2, _ebthdsCheck).length;
            case 'ethds':
                return _inputCheck_Num(datasel, 3, _ethdsCheck).length;
            case 'sbthds':
                return _inputCheck_Num(datasel, 3, _sbthdsCheck).length;
            case 'ebthdx':
                if (datasel[0].length >= 2) {
                    nums += ArrayUtil.ComNum(datasel[0].length, 2)
                }
                break;
            case 'ebthdt':
                var maxplace = 2;
                if (datasel.length == maxplace) {
                    if (_uniqueCheck(datasel[0], datasel[1])) {
                        for (var i = 0; i < maxplace; i++) {
                            var s = datasel[i].length;
                            if (s > 0) {
                                if (i > 0) {
                                    nums = datasel[i].length
                                }
                            } else {
                                nums = 0;
                                break
                            }
                        }
                    }
                }
                break;
            case 'ethdx':
                var s = datasel.length;
                if (s > 1) {
                    var a = datasel[0].length;
                    var b = datasel[1].length;
                    if (a > 0 && b > 0) {
                        if (_uniqueCheck(datasel[0], datasel[1])) {
                            nums = a * b
                        }
                    }
                }
                break;
            case 'ethfx':
                nums = datasel[0].length;
                break;
            case 'sbthdx':
                if (datasel[0].length >= 3) {
                    nums += ArrayUtil.ComNum(datasel[0].length, 3)
                }
                break;
            case 'sthdx':
            case 'hezhi':
                nums = datasel[0].length;
                break;
            case 'sthtx':
            case 'slhtx':
                nums = datasel[0].length > 0 ? 1 : 0;
                break;
            default:
                break
            };
            return nums
        };
        var _formatSelect_Num = function (datasel, m, n) {
            var newsel = new Array();
            if (!m) m = 0;
            if (!n) n = 0;
            for (var i = 0; i < m; i++) {
                newsel.push('-')
            }
            for (var i = 0; i < datasel.length; i++) {
                var f = datasel[i].toString().replace(/\,/g, '');
                if (f == '') {
                    newsel.push('-')
                } else {
                    newsel.push(f)
                }
            }
            for (var i = 0; i < n; i++) {
                newsel.push('-')
            };
            return newsel.toString()
        };
        var _formatTextarea_Num = function (type, datasel) {
            switch (type) {
            case 'ebthds':
                datasel = _inputCheck_Num(datasel, 2, _ebthdsCheck);
                break;
            case 'ethds':
                datasel = _inputCheck_Num(datasel, 3, _ethdsCheck);
                break;
            case 'sbthds':
                datasel = _inputCheck_Num(datasel, 3, _sbthdsCheck);
                break;
            default:
                break
            };
            return datasel.toString().replace(/\,/g, ' ')
        };
        var _inputFormat = function (type, datasel) {
            switch (type) {
            case 'ebthds':
            case 'ethds':
            case 'sbthds':
                return _formatTextarea_Num(type, datasel);
            case 'ebthdx':
            case 'ethfx':
            case 'sbthdx':
            case 'sthdx':
            case 'sthtx':
            case 'slhtx':
            case 'hezhi':
                return datasel[0].toString();
            case 'ebthdt':
            case 'ethdx':
                return _formatSelect_Num(datasel);
            default:
                break
            }
        };
        var _typeFormat = function (code) {
            var arr = [];
            code.sort();
            var a = code[0];
            var b = code[1];
            var c = code[2];
            var sanlian = ['123', '234', '345', '456'];
            if ($.inArray(code.toString().replace(/\,/g, ''), sanlian) != -1) {
                arr[0] = '三连号'
            } else if (a == b && b == c) {
                arr[0] = '三同号'
            } else if (a == b || b == c) {
                arr[0] = '二同号'
            } else {
                arr[0] = '三不同'
            }
            arr[1] = parseInt(a) + parseInt(b) + parseInt(c);
            return arr
        };
        return {
            inputNumbers: _inputNumbers,
            inputFormat: _inputFormat,
            typeFormat: _typeFormat
        }
    }();
    var k3_main = function () {
        var $Lottery;
        var $DownCode;
        var $FenDownCode;
        var $LiDownCode;
        var $Method;
        var $SysCode;
        var $SysUnitMoney;
        var $UserCode;
        var $UserLp;
        var $UserMaxCode;
        var $UserMinCode;
        var $bData = {}, $bList = [];
        var Layout = [{
                title: '二不同号',
                rows: [[{
                            title: '二不同号',
                            columns: [{
                                    showname: '标准选号',
                                    shortname: 'ebthdx',
                                    realname: '[二不同号_标准选号]',
                                    tips: '从1-6中任意选择2个或2个以上号码。',
                                    example: '投注方案：2,5；开奖号码中出现：1个2、1个5 (顺序不限)，即中奖。',
                                    help: '从1-6中任意选择2个号码组成一注，顺序不限。开奖号码中出现所选的两个号码即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '号码',
                                                balls: [1, 2, 3, 4, 5, 6]
                                            }]
                                    }
                                }, {
                                    showname: '手动选号',
                                    shortname: 'ebthds',
                                    realname: '[二不同号_手动选号]',
                                    tips: '手动输入号码，至少输入1-6中两个不同的数字组成一注号码。',
                                    example: '投注方案：56；开奖号码：536，即中奖。',
                                    help: '开奖号码中至少包含所输入的两个数字即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '胆拖选号',
                                    shortname: 'ebthdt',
                                    realname: '[二不同号_胆拖选号]',
                                    tips: '从1-6中任意选择1个胆码以及1个以上的号码作为拖码。',
                                    example: '',
                                    help: '从1-6中选择一个胆码和至少一个拖码，如果开奖号码中不重复数字至少包含胆码所选号码即为中奖',
                                    select: {
                                        layout: [{
                                                title: '胆码',
                                                balls: [1, 2, 3, 4, 5, 6],
                                                trigger: 'only'
                                            }, {
                                                title: '拖码',
                                                balls: [1, 2, 3, 4, 5, 6]
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '二同号',
                rows: [[{
                            title: '二同号单选',
                            columns: [{
                                    showname: '标准选号',
                                    shortname: 'ethdx',
                                    realname: '[二同号_标准选号]',
                                    tips: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注。',
                                    example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
                                    help: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注，选号与开奖号码一致即中奖。',
                                    select: {
                                        layout: [{
                                                title: '二同号',
                                                balls: ['11', '22', '33', '44', '55', '66'],
                                                values: [1, 2, 3, 4, 5, 6],
                                                trigger: 'only'
                                            }, {
                                                title: '不同号',
                                                balls: [1, 2, 3, 4, 5, 6]
                                            }]
                                    }
                                }, {
                                    showname: '手动选号',
                                    shortname: 'ethds',
                                    realname: '[二同号_手动选号]',
                                    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
                                    example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
                                    help: '手动输入号码，至少输入1个三位数号码，选号与开奖号码一致即中奖。',
                                    textarea: {}
                                }]
                        }], [{
                            title: '二同号复选',
                            columns: [{
                                    showname: '二同号复选',
                                    shortname: 'ethfx',
                                    realname: '[二同号_复选]',
                                    tips: '选择对子(11*,22*,33*,44*,55*,66*)进行投注。',
                                    example: '投注方案：11*；开奖号码为：112,211,121,即中奖。',
                                    help: '选择对子(11*,22*,33*,44*,55*,66*)投注，开奖号码中包含选择的对子即中奖。',
                                    select: {
                                        layout: [{
                                                title: '二同号',
                                                balls: ['11*', '22*', '33*', '44*', '55*', '66*'],
                                                values: [1, 2, 3, 4, 5, 6],
                                                cls: 'medium'
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '三不同号',
                rows: [[{
                            title: '三不同号',
                            columns: [{
                                    showname: '标准选号',
                                    shortname: 'sbthdx',
                                    realname: '[三不同号_标准选号]',
                                    tips: '选择任意三个或以上的号码进行投注。',
                                    example: '投注方案：2,5,6；开奖号码中出现：256,562,625(顺序不限)即中奖。',
                                    help: '从1-6中任意选择3个（或以上）不相同号码组成一注，顺序不限，若其中三位与开奖号码相同即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '号码',
                                                balls: [1, 2, 3, 4, 5, 6]
                                            }]
                                    }
                                }, {
                                    showname: '手动选号',
                                    shortname: 'sbthds',
                                    realname: '[三不同号_手动选号]',
                                    tips: '对三个各不相同的号码进行投注。',
                                    example: '投注方案：258；开奖号码中出现：1个2、1个5、1个8 (顺序不限)，即中奖。。',
                                    help: '从1-6中任意选择3个或3个以上各不相同号码组成一注，顺序不限，若开奖号码与所选号码相同，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '三同号',
                rows: [[{
                            title: '三同号单选',
                            columns: [{
                                    showname: '三同号单选',
                                    shortname: 'sthdx',
                                    realname: '[三同号单选]',
                                    tips: '选择任意一组以上三位相同的号码。',
                                    example: '投注方案：222；开奖号码为：3个2，即中奖。',
                                    help: '从111,222,333,444,555，666中选择任意一组或一组以上的号码，若和开奖号相同即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '号码',
                                                balls: ['111', '222', '333', '444', '555', '666'],
                                                values: [1, 2, 3, 4, 5, 6],
                                                cls: 'medium'
                                            }]
                                    }
                                }]
                        }], [{
                            title: '三同号通选',
                            columns: [{
                                    showname: '三同号通选',
                                    shortname: 'sthtx',
                                    realname: '[三同号通选]',
                                    tips: '对所有三同号（111,222,333,444,555,666）进行投注。',
                                    example: '投注方案：通选；开奖号码中出现：222或3个其他数字，即中奖。',
                                    help: '投注后，开奖号码为任意数字的三重号，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '胆码',
                                                balls: ['111', '222', '333', '444', '555', '666'],
                                                cls: 'medium',
                                                trigger: 'all'
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '三连号',
                rows: [[{
                            title: '三连号通选',
                            columns: [{
                                    showname: '三连号通选',
                                    shortname: 'slhtx',
                                    realname: '[三同号连选]',
                                    tips: '对所有三个相连的号码进行投注。',
                                    example: '投注方案：三连号通选 开奖号码：123或234或345或456   即为中奖',
                                    help: '开奖号码为3连号（123,234,345,456）即为中奖',
                                    select: {
                                        layout: [{
                                                title: '号码',
                                                balls: ['123', '234', '345', '456'],
                                                cls: 'medium',
                                                trigger: 'all'
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '和值',
                rows: [[{
                            title: '和值',
                            columns: [{
                                    showname: '和值',
                                    shortname: 'hezhi',
                                    realname: '[和值]',
                                    tips: '从3-18中任意选择1个或1个以上号码。',
                                    example: '投注方案：和值4；开奖号码：112,即中奖。',
                                    help: '所选数值等于开奖号码三个数字相加之和，即为中奖。注意:和值为3或18一等奖；4或17二等奖；5或16三等奖；6或15四等奖；7或14五等奖；8或13六等奖；9或12七等奖；10或11八等奖',
                                    select: {
                                        layout: [{
                                                balls: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                                                cls: 'hz'
                                            }]
                                    }
                                }]
                        }]]
            }];
        var getSelectBall = function (playArea) {
            var datasel = [];
            var sb = playArea.find('.balls');
            if (sb && sb.length > 0) {
                $.each(sb, function () {
                    var ball = [];
                    var as = $(this).find('ul > li > a.selected');
                    $.each(as, function () {
                        var val = $(this).attr('data-val');
                        ball.push(val)
                    });
                    datasel.push(ball)
                })
            };
            return datasel
        };
        var getTextareaBall = function (playArea) {
            var datasel = [];
            var textarea = playArea.find('.textarea > textarea');
            if (textarea && textarea.length > 0) {
                var format = textarea.val().replace(/\,|\;|\n|\t/g, ' ');
                var as = format.split(' ');
                $.each(as, function (idx, val) {
                    datasel.push(val)
                })
            };
            return datasel
        };
        var buildSelectPlace = function (playArea, select) {
            $.each(select.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + '</div>')
                }
                if (val.cls) {
                    row.addClass(val.cls)
                };
                var balls = $('<div class="balls">').append('<ul>');
                $.each(val.balls, function (j, ball) {
                    if (val.values) {
                        balls.find('ul').append('<li><a data-val="' + val.values[j] + '">' + ball + '</a></li>')
                    } else {
                        balls.find('ul').append('<li><a data-val="' + ball + '">' + ball + '</a></li>')
                    }
                });
                balls.find('ul > li > a').click(function () {
                    if ($(this).hasClass('selected')) {
                        $(this).parent().removeClass('selected');
                        $(this).removeClass('selected');
                        if (val.trigger == 'all') {
                            balls.find('ul > li > a').removeClass('selected')
                        }
                    } else {
                        if (val.trigger == 'only') {
                            balls.find('ul > li > a').removeClass('selected')
                        }
                        $(this).parent().addClass('selected');
                        $(this).addClass('selected');
                        if (val.trigger == 'all') {
                            balls.find('ul > li > a').addClass('selected')
                        }
                    }
                    PlayOptions.update()
                });
                row.append(balls);
                if (val.tools) {
                    buildBallTools(row, balls)
                }
                playArea.append(row)
            })
        };
        var buildBallTools = function (row, balls) {
            var blist = balls.find('ul > li > a');
            var tools = $('<div class="tools">').append(
                '<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
            var setSelected = function (els, selected) {
                if (selected) {
                    if (!els.hasClass('selected')) {
                        els.trigger('click')
                    }
                } else {
                    if (els.hasClass('selected')) {
                        els.trigger('click')
                    }
                }
            };
            tools.find('a[data-command="all"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), true)
                })
            });
            tools.find('a[data-command="big"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), false)
                    } else {
                        setSelected($(this), true)
                    }
                })
            });
            tools.find('a[data-command="small"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="single"]').click(function () {
                var arr = [1, 3, 5, 7, 9, 11];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="double"]').click(function () {
                var arr = [0, 2, 4, 6, 8, 10];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="clean"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), false)
                })
            });
            row.append(tools)
        };
        var buildTextareaPlace = function (playArea) {
            var textarea = $('<div class="textarea">').append('<textarea>');
            var help = $('<div class="help">').html('每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
            textarea.find('textarea').keyup(function () {
                $(this).val($(this).val().replace(/[；.,。，、|]/g, ' '));
                PlayOptions.update()
            });
            textarea.find('textarea').on('paste', function () {
                var thisarea = $(this);
                setTimeout(function () {
                    thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ' '));
                    PlayOptions.update()
                }, 10)
            });
            playArea.append(textarea);
            playArea.append(help)
        };
        var PlayArea = function () {
            var data = function () {
                var playArea = $('.lottery-betting .lottery-opearation > .play-area');
                var datasel = [];
                var balls = getSelectBall(playArea);
                var textarea = getTextareaBall(playArea);
                return datasel.concat(balls).concat(textarea)
            };
            var reset = function () {
                var playList = $('.lottery-betting .lottery-opearation > .play-list');
                playList.find('[data-method="' + $bData.method + '"]').trigger('click')
            };
            return {
                data: data,
                reset: reset
            }
        }();
        var buildPlayOptions = function (playOptions) {
            playOptions.append(['<div class="part-one">',
                    '<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注</div>',
                    '<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>', '</div>']
                .join(''));
            playOptions.append(['<div class="part-two">', '<div class="label">模式</div>',
                    '<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
                    '<div class="label">倍数</div>',
                    '<div class="multiple"><input name="multiple" type="text" value="1"></div>', '</div>'].join(''));
            var bDataModel = 'yuan';
            if ($.cookie('USER_BDATA_MODEL')) {
                bDataModel = $.cookie('USER_BDATA_MODEL')
            }
            playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass('selected');
            var multiple = playOptions.find('.multiple > input');
            multiple.keyup(function () {
                if ($(this).val() == '') return;
                var val = $(this).val();
                if (/^[0-9]*$/.test(val)) {
                    val = Number(val);
                    if (val > 10000) $(this).val(10000);
                    if (val < 1) $(this).val(1);
                    PlayOptions.update()
                } else {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            multiple.keydown(function (e) {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    if ($(this).val() == '') return;
                    var val = Number($(this).val());
                    if (!isNaN(val)) {
                        if (e.keyCode == 38) val++;
                        if (e.keyCode == 40) val--;
                        if (val > 10000) val = 10000;
                        if (val < 1) val = 1;
                        $(this).val(val)
                    }
                }
            });
            multiple.blur(function () {
                if ($(this).val() == '') {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            var fenModel = function () {
                if ($FenDownCode > 0) {
                    var thisCode = $SysCode - $FenDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '分模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var liModel = function () {
                if ($LiDownCode > 0) {
                    var thisCode = $SysCode - $LiDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '厘模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var defaultModel = function () {
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20;
                //console.log($UserCode , $DownCode,$SysCode, $UserLp * 20)
            };
            var update = function (model) {
                if (model == 'fen') {
                    fenModel()
                } else if (model == 'li') {
                    liModel()
                } else {
                    defaultModel()
                }
            };
            var models = playOptions.find('.model > a');
            models.click(function () {
                if (!$(this).hasClass('selected')) {
                    models.removeClass('selected');
                    $(this).addClass('selected');
                    var model = $(this).attr('data-val');
                    update(model);
                    AdjustPrize.slider();
                    AdjustPrize.update();
                    PlayOptions.update();
                    var expires = new Date(moment().startOf('year').add(1, 'years'));
                    $.cookie('USER_BDATA_MODEL', model, {
                        expires: expires,
                        path: '/'
                    })
                }
            });
            update(bDataModel)
        };
        var PlayOptions = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-options')
            };
            var multiple = function () {
                return Number(els().find('.multiple > input').val())
            };
            var model = function () {
                var val = els().find('.model > a.selected').attr('data-val');
                if (val == 'yuan') {
                    return {
                        val: val,
                        money: 1
                    }
                }
                if (val == 'jiao') {
                    return {
                        val: val,
                        money: 0.1
                    }
                }
                if (val == 'fen') {
                    return {
                        val: val,
                        money: 0.01
                    }
                }
                if (val == 'li') {
                    return {
                        val: val,
                        money: 0.001
                    }
                }
            };
            var update = function () {
                var sumstr = LotteryUtils.inputFormat($('.play-list .selected').data('method'), PlayArea.data());
                $('.ks_btn').attr('summary', (sumstr.length < 20 ? sumstr : (sumstr.substring(0, 20) + '...')));
                var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
                var total = multiple() * num * $SysUnitMoney * model().money;
                els().find('[data-field="num"]').html(num);
                els().find('[data-field="total"]').html(total.toFixed(3));
                $('#lottery .totaldeal').html(num);
                $('#lottery .totaldealtime').html('x' + multiple());
                $('#lottery .totaldealamount').html(total.toFixed(3));
                var gainnumber = Number(parseFloat($('[data-field="prize"]').html() * multiple()) - total.toFixed(3)).toFixed(
                    3);
                (num > 0) ? $('#lottery .totalgain').html(gainnumber) : $('#lottery .totalgain').html('0.000');
                if (parseInt(num, 10) > 0) {
                    $('.btn[data-command="add"]').addClass('active')
                } else {
                    $('.btn[data-command="add"]').removeClass('active')
                }
            };
            return {
                els: els,
                multiple: multiple,
                model: model,
                update: update
            }
        }();
        var buildAdjustPrize = function (adjustPrize, column) {
            var start = $UserMaxCode;
            if ($.cookie('USER_BDATA_CODE')) {
                var bCode = $.cookie('USER_BDATA_CODE');
                if (!isNaN(bCode)) {
                    if (bCode > $UserMaxCode) {
                        start = $UserMaxCode
                    } else if (bCode < $UserMinCode) {
                        start = $UserMinCode
                    } else {
                        start = bCode
                    }
                }
            }
            adjustPrize.empty();
            var nownick_code = $('#lottery #topltname').attr('nick');
            if (localStorage.getItem(nownick_code + '_code') != null) {
                start = parseInt(localStorage.getItem(nownick_code + '_code'), 10)
            }
            adjustPrize.append([
                    '<div>奖金调节：<label class="rf"><span data-field="code">0</span> / <span data-field="point">0.0</span>%</label></div>',
                    '<div class="slider"></div>',
                    '<div class="range-slider-customed"><input type="range" class="betrate" min="', $UserMinCode,
                    '" max="', $UserMaxCode, '" value="', start, '" step="2"></div>', ''].join(''));
            var slider = adjustPrize.find('.slider');
            var nowbrate = adjustPrize.find('.betrate');
            nowbrate.off('change').on('change', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            }).off('input').on('input', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            });
            var lc = GameData.getConfig();
            if (parseInt($UserMaxCode, 10) > parseInt(lc.maxBetCode, 10)) {
                $UserMaxCode = parseInt(lc.maxBetCode, 10)
            }
            slider.noUiSlider({
                connect: 'lower',
                behaviour: 'snap',
                step: 2,
                start: start,
                range: {
                    'max': $UserMaxCode,
                    'min': $UserMinCode
                }
            });
            if ($UserMaxCode == $UserMinCode) {
                slider.attr('disabled', 'disabled')
            } else {
                slider.removeAttr('disabled')
            };
            var update = function (code) {
                var point = $UserLp - ((code - $UserMinCode) / 20.0).toFixed(1);
                adjustPrize.find('[data-field="code"]').html(code);
                adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
                AdjustPrize.update()
            };
            var onSet = function () {
                var code = Number(slider.val());
                update(code);
                var expires = new Date(moment().startOf('year').add(1, 'years'));
                $.cookie('USER_BDATA_CODE', code, {
                    expires: expires,
                    path: '/'
                })
            };
            var onSlide = function () {
                var code = Number(slider.val());
                update(code)
            };
            slider.on({
                set: onSet,
                slide: onSlide
            });
            update(start)
        };
        var PlayHelp = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-help')
            };
            var update = function (t) {
                els().find('[data-field="prize"]').html(t)
            };
            return {
                els: els,
                update: update
            }
        }();
        var AdjustPrize = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .adjust-prize')
            };
            var code = function () {
                return Number(els().find('[data-field="code"]').html())
            };
            var point = function () {
                return Number(els().find('[data-field="point"]').html())
            };
            var slider = function () {
                els().find('.slider').noUiSlider({
                    range: {
                        'max': $UserMaxCode,
                        'min': $UserMinCode
                    }
                }, true)
            };
            var update = function () {
                var method = $Method[$bData.method];
                var model = PlayOptions.model();
                var mMoney = PlayOptions.model().money;
                if (method) {
                    var ps = method.bonus.split(',');
                    var psx = Number(method.x);
                    var t = [];
                    $('[data-command="chase"]').attr('code', $UserMinCode);
                    for (var i = 0, j = ps.length; i < j; i++) {
                        var percent = Number(ps[i]) / $UserMinCode;
                        var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * ($SysUnitMoney / 2);
                        t.push(pm)
                    }
                    t.sort(function (a, b) {
                        return Number(a) > Number(b) ? 1 : -1
                    });
                    if (t.length == 1) {
                        t[0] = t[0] * model.money;
                        PlayHelp.update(t[0].toFixed(3))
                    } else {
                        t[0] = t[0] * model.money;
                        t[t.length - 1] = t[t.length - 1] * model.money;
                        PlayHelp.update(t[0].toFixed(3) + ' ~ ' + t[t.length - 1].toFixed(3))
                    }
                }
            };
            return {
                els: els,
                code: code,
                point: point,
                update: update,
                slider: slider
            }
        }();
        var addCallback = [];
        var addToList = function (callback) {
            var issue = $('[data-field="global-expect"]').html();
            var method = $bData.method;
            var compress = $bData.compress;
            var datasel = PlayArea.data();
            var num = LotteryUtils.inputNumbers(method, datasel);
            var content = LotteryUtils.inputFormat(method, datasel);
            var code = AdjustPrize.code();
            var point = AdjustPrize.point();
            var multiple = PlayOptions.multiple();
            var model = PlayOptions.model().val;
            var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
            if (num == 0) {
                App.alert('info', '提示消息', '您还没有选择号码或所选号码不全！', 3000);
                return false
            };
            var _method = $Method[method];
            if (num <= _method.oooNums) {
                App.confirm('question', '温馨提示', '您所投注内容属于单挑玩法，最高奖金为' + _method.oooBonus + '元，确认继续投注？', 0, '确认', '取消', function () {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback);
                    PlayArea.reset()
                })
            } else {
                LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, callback);
                PlayArea.reset()
            }
        };
        var LotteryRecord = function () {
            var els = function () {
                return $('.lottery-record')
            };
            var name = function (method) {
                var method = $Method[method];
                return '[' + method.name + ']'
            };
            var format = function (content) {
                if (content.length > 16) {
                    content = content.substring(0, 16) + '…<a data-command="details">[详细]'
                };
                return content
            };
            var add = function (issue, method, compress, content, num, multiple, model, code, point, total, callback) {
                var tbody = els().find('.list table > tbody');
                var tr = $('<tr>');
                var mobilebasket = ['<li>', '<div class="row clearfix">',
                        '<div class="col-15"><em class="m_ico"></em></div>', '<div class="col-70">',
                        '<h3>5,6,7,8,9</h3>', '<span>五星直选复式 1注 元 2.1% 5倍 10元</span>', '</div>',
                        '<div class="col-15"><em class="m_ico"></em></div>', '</div>', '</li>'].join('');
                BasketLtChoose.push({
                    'm': name(method),
                    'c': content,
                    'num': num,
                    'model': model,
                    'multiple': multiple,
                    'p': point.toFixed(1),
                    't': total.toFixed(3)
                });
                $('#basket .basketitems').append(mobilebasket);
                tr.append('<td class="content">' + name(method) + format(content) + '</td>');
                tr.append('<td class="num">' + num + '注</td>');
                tr.append('<td class="multiple">' + multiple + '倍</td>');
                tr.append('<td class="point">' + point.toFixed(1) + '%</td>');
                tr.append('<td class="total">' + total.toFixed(3) + '元</td>');
                tr.append('<td class="btn"><a data-command="del">删除</a></td>');
                tr.find('a[data-command="del"]').click(function () {
                    var idx = tbody.find('tr').index(tr);
                    ArrayUtil.remove($bList, idx);
                    tr.remove()
                });
                tbody.append(tr);
                if (compress === true && num >= 1000) {
                    App.blockUI({
                        target: els(),
                        boxed: true,
                        message: '超大注数处理中...'
                    });
                    LZMA.compress(content, 3, function (result) {
                        App.unblockUI(els());
                        if (result === false) {
                            return App.alert('info', '消息提示', '号码添加失败，请重试！', 3000)
                        }
                        content = LZMAUtil.toHex(result);
                        $bList.push({
                            lottery: $Lottery,
                            issue: issue,
                            content: content,
                            num: num,
                            method: method,
                            multiple: multiple,
                            model: model,
                            code: code,
                            compress: true
                        });
                        if ($.isFunction(callback)) callback();
                        for (var i = 0; i < addCallback.length; i++) {
                            if ($.isFunction(addCallback[i])) {
                                addCallback[i]()
                            }
                        }
                    })
                } else {
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: false
                    });
                    if ($.isFunction(callback)) callback();
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                }
            };
            var clear = function () {
                els().find('.list table > tbody').empty();
                $bList = []
            };
            var isInit = false;
            var init = function () {
                isInit = true;
                App.initScroll();
                var button = els().find('.button');
                button.find('[data-command="add"]').off('click').click(function () {
                    addToList()
                });
                button.find('[data-command="submit"]').off('click').click(function () {
                    App.confirm('question', '确认消息', ['<div class="myconfirm">你确认加入第' + $(
                            '.ltp .lottery-open-info [data-field="global-expect"]').text() + '期？<br>', '总注数：', ($(
                            '.total-inner [data-field="sum-num"]').text() == '0' ? $('.text-money[data-field="num"]').text() :
                            $('.total-inner [data-field="sum-num"]').text()), '<br>', '订单笔数：1<br>', '是否追号：否<br>',
                            '投注总额：', ($('.total-inner [data-field="sum-money"]').text() == '0.000' ? $(
                            '.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()),
                            '元</div>', '<div class="cftip aboutmax">温馨提示：本期最高奖金限额200000元，请会员谨慎投注！</div>'].join(''), 0,
                        '确定', '取消', function () {
                        if ($bList.length > 0) {
                            doSubmit()
                        } else {
                            addToList(function () {
                                doSubmit()
                            }, function () {
                                doSubmit()
                            })
                        }
                    })
                });
                button.find('[data-command="clear"]').off('click').click(function () {
                    clear()
                });
                button.find('[data-command="chase"]').off('click').click(function () {
                    LotteryChase.init()
                })
            };
            return {
                init: init,
                add: add,
                clear: clear
            }
        }();
        var initDocument = function () {
            $('.lottery-betting .lottery-opearation').empty();
            var main = $('.lottery-betting .lottery-opearation');
            var playGroups = $('<div class="play-groups">').append('<ul>');
            var playList = $('<div class="play-list">');
            var playHelp = $('<div class="play-help">');
            var playArea = $('<div class="play-area">');
            var adjustPrize = $('<div class="adjust-prize">');
            var playOptions = $('<div class="play-options clearfix">');
            var initPlayGroups = function (index) {
                playGroups.find('ul').empty();
                $.each(Layout, function (i, group) {
                    if ($.inArray(group.title.substring(0, 3), GameData.getMethodList()) > -1) {
                        var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
                        thisGroup.find('a').off('click').click(function () {
                            if (!$(this).hasClass('selected')) {
                                playGroups.find('li > a.selected').removeClass('selected');
                                $(this).addClass('selected');
                                initPlayList(group.rows);
                                var topmname = $(this).text();
                                $('#topltname i#mtopname').attr('top', topmname).html('-' + topmname)
                            }
                        });
                        playGroups.find('ul').append(thisGroup)
                    }
                });
                playGroups.find('ul > li > a').eq(index).trigger('click')
            };
            var initPlayList = function (list) {
                playList.empty();
                $.each(list, function (i, rows) {
                    var thisRow = $('<div class="row clearfix">');
                    $.each(rows, function (j, row) {
                        thisRow.append('<div class="label">' + row.title + '</div>');
                        $.each(row.columns, function (k, column) {
                            if ($.inArray(column.shortname, GameData.getMethods()) > -1) {
                                var thisColumn = $('<div class="column">').attr('data-method', column.shortname).html(
                                    column.showname);
                                thisColumn.off('click').click(function () {
                                    if (!$(this).hasClass('selected')) {
                                        playList.find('.row > .column').removeClass('selected');
                                        $(this).addClass('selected')
                                    };
                                    var nowtag = $(this).text();
                                    var topindex = $('#lottery .play-groups a.selected').parent().index();
                                    var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                                    localStorage.setItem(nowltid + '_m', topindex + '|' + $(this).data('method'));
                                    $('#topltname i#mtopname').html('-' + (typeof $('#topltname i#mtopname').attr('top') !=
                                        'undefined' ? $('#topltname i#mtopname').attr('top') : '') + nowtag);
                                    $bData.method = column.shortname;
                                    $bData.compress = column.compress;
                                    buildPlayHelp(column);
                                    buildPlayArea(column);
                                    buildAdjustPrize(adjustPrize, column);
                                    PlayOptions.update()
                                });
                                thisRow.append(thisColumn)
                            }
                        })
                    });
                    playList.append(thisRow)
                });
                var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                if (localStorage.getItem(nowltid + '_m') != null) {
                    var tcss = localStorage.getItem(nowltid + '_m').split('|');
                    if (tcss.length > 1 && playList.find('.row > .column[data-method="' + tcss[1] + '"]').size() > 0) {
                        playList.find('.row > .column[data-method="' + tcss[1] + '"]').trigger('click')
                    } else {
                        playList.find('.row > .column').eq(0).trigger('click')
                    }
                } else {
                    playList.find('.row > .column').eq(0).trigger('click')
                }
                $('#popup .secmethod').html($('.ltp .lottery-opearation .play-list').html());
                if (typeof refreshigh != 'undefined') {
                    refreshigh()
                }
            };
            var buildPlayHelp = function (column) {
                playHelp.empty();
                playHelp.append('<div class="tips"><i></i><span class="label">玩法提示：</span>' + column.tips + '</div>');
                playHelp.append(
                    '<div class="prize"><a data-popover=".popover-about" class="open-popover lf">玩法说明</a><i></i>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
                playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example +
                    '</div><div class="help">' + column.help + '</div></div>');
                $('#method-tip p').html(column.example + '<br>' + column.help);
                var show = function (els, target) {
                    var top = $(els).position().top;
                    var left = $(els).position().left;
                    playHelp.find(target).css({
                        top: top + 32,
                        left: left
                    }).show()
                };
                var hide = function (target) {
                    playHelp.find(target).hide()
                };
                playHelp.find('.tips > i').hover(function () {
                    show(this, '.help-info')
                }, function () {
                    hide('.help-info')
                })
            };
            var buildPlayArea = function (column) {
                playArea.empty();
                if (column.select) {
                    buildSelectPlace(playArea, column.select)
                }
                if (column.textarea) {
                    buildTextareaPlace(playArea, column.textarea)
                }
            };
            buildPlayOptions(playOptions);
            main.append(playGroups);
            main.append(playList);
            main.append(playHelp);
            main.append(playArea);
            main.append(adjustPrize);
            main.append(playOptions);
            var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
            if (localStorage.getItem(nowltid + '_m') != null) {
                var tcs = localStorage.getItem(nowltid + '_m').split('|');
                if (tcs.length > 1) {
                    initPlayGroups(parseInt(tcs[0], 10))
                } else {
                    initPlayGroups(0)
                }
            } else {
                initPlayGroups(0)
            }
            LotteryRecord.init()
        };
        var init = function (data) {
            if (data) {
                $Lottery = data.lottery;
                $LotteryName = data.lotteryName;
                $DownCode = data.downCode;
                $FenDownCode = data.fenDownCode;
                $LiDownCode = data.liDownCode;
                $Method = data.method;
                $SysCode = data.sysCode;
                $SysUnitMoney = data.sysUnitMoney;
                $UserCode = data.userCode;
                $UserLp = data.userLp;
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $UserCode - $UserLp * 20
            }
            initDocument();
            LotteryRecord.clear()
        };
        var isLoading = false;
        var doSubmit = function () {
            var thisContent = $('.lottery-record');
            if (!isLoading) {
                if ($bList.length == 0) {
                    return App.alert('info', '提示消息', '投注列表没有订单！', 3000)
                };
                var list = [];
                $.each($bList, function (i, v) {
                    list.push({
                        lottery: v.lottery,
                        issue: v.issue,
                        method: v.method,
                        content: v.content,
                        model: v.model,
                        multiple: v.multiple,
                        code: v.code,
                        compress: v.compress
                    })
                });
                var data = {
                    text: $.toJSON(list)
                };
                GameLotteryCtrl.addOrder({
                    data: data,
                    beforeSend: function () {
                        isLoading = true;
                        App.blockUI({
                            target: thisContent,
                            boxed: true
                        })
                    },
                    success: function (response) {
                        if (response.error == 0) {
                            isLoading = false;
                            App.unblockUI(thisContent);
                            LotteryRecord.clear();
                            BasketLtChoose = [];
                            $("#cleanbaketnow").click();
                            App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                            $('#lottery #ltbalbox').click();
                            $('[data-field="lotteryBalance"]').html(response.data);
                            if (typeof RecordList != 'undefined') {
                                RecordList.init()
                            }
                        }
                        if (response.error == 1) {
                            if ('116-05' == response.code) {
                                setTimeout(function () {
                                    isLoading = false;
                                    App.unblockUI(thisContent);
                                    App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。')
                                }, 10000)
                            } else if ('116-06' == response.code) {
                                window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html'
                            } else {
                                isLoading = false;
                                App.unblockUI(thisContent);
                                if (response.message != '该用户已被冻结') {
                                    App.alert('warning', '提示消息', response.message)
                                } else {
                                    App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>', 30000, '', function () {}, function () {
                                        App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时')
                                    })
                                }
                            }
                        }
                    }
                })
            }
        };
        return {
            init: init,
            getConfig: function () {
                return {
                    lottery: $Lottery,
                    lotteryName: $LotteryName,
                    downCode: $DownCode,
                    fenDownCode: $FenDownCode,
                    liDownCode: $LiDownCode,
                    method: $Method,
                    sysCode: $SysCode,
                    sysUnitMoney: $SysUnitMoney,
                    userCode: $UserCode,
                    userLp: $UserLp,
                    userMaxCode: $UserMaxCode,
                    userMinCode: $UserMinCode
                }
            },
            bList: function () {
                return $bList
            },
            clear: function () {
                LotteryRecord.clear()
            },
            addCallback: function (cb) {
                addCallback.push(cb)
            }
        }
    }();
    var y11_utils = function () {
        var _inputCheck_Num = function (datasel, l, fun) {
            fun = $.isFunction(fun) ? fun : function (n, l) {
                return true
            };
            var newsel = [];
            datasel = ArrayUtil.unique(datasel);
            var regex = new RegExp('^([0-9]{2}\\s{1}){' + (l - 1) + '}[0-9]{2}$');
            var regex1 = new RegExp('^([0-9]{2}){' + (l - 1) + '}[0-9]{2}$');
            $.each(datasel, function (i, n) {
                if ((regex.test(n) || regex1.test(n)) && fun(n, l)) {
                    if (!regex1.test(n)) {
                        newsel.push(n)
                    } else {
                        newsel.push(n.replace(/(\d\d)(?!\b)/g, '$1 '))
                    }
                }
            });
            return newsel
        };
        var _numberCheck_Num = function (n) {
            var t = n.split(' ');
            var l = t.length;
            if (t.length == 1 && String(n).length % 2 == 0) {
                n = n.replace(/(\d\d)(?!\b)/g, '$1 ');
                t = n.split(' ');
                l = t.length
            }
            for (var i = 0; i < l; i++) {
                if (Number(t[i]) > 11 || Number(t[i]) < 1) {
                    return false
                }
                for (var j = i + 1; j < l; j++) {
                    if (Number(t[i]) == Number(t[j])) {
                        return false
                    }
                }
            };
            return true
        };
        var _inputNumbers = function (type, datasel) {
            var nums = 0;
            switch (type) {
            case 'sanmzhixdsq':
            case 'sanmzuxdsq':
                return _inputCheck_Num(datasel, 3, _numberCheck_Num).length;
            case 'ermzhixdsq':
            case 'ermzuxdsq':
                return _inputCheck_Num(datasel, 2, _numberCheck_Num).length;
            case 'rx1ds':
                return _inputCheck_Num(datasel, 1, _numberCheck_Num).length;
            case 'rx2ds':
                return _inputCheck_Num(datasel, 2, _numberCheck_Num).length;
            case 'rx3ds':
                return _inputCheck_Num(datasel, 3, _numberCheck_Num).length;
            case 'rx4ds':
                return _inputCheck_Num(datasel, 4, _numberCheck_Num).length;
            case 'rx5ds':
                return _inputCheck_Num(datasel, 5, _numberCheck_Num).length;
            case 'rx6ds':
                return _inputCheck_Num(datasel, 6, _numberCheck_Num).length;
            case 'rx7ds':
                return _inputCheck_Num(datasel, 7, _numberCheck_Num).length;
            case 'rx8ds':
                return _inputCheck_Num(datasel, 8, _numberCheck_Num).length;
            case 'sanmzhixfsq':
                if (datasel[0].length > 0 && datasel[1].length > 0 && datasel[2].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            for (var k = 0; k < datasel[2].length; k++) {
                                if (datasel[0][i] != datasel[1][j] && datasel[0][i] != datasel[2][k] && datasel[1][j] !=
                                    datasel[2][k]) {
                                    nums++
                                }
                            }
                        }
                    }
                }
                break;
            case 'sanmzuxfsq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 2) {
                        nums += s * (s - 1) * (s - 2) / 6
                    }
                }
                break;
            case 'ermzhixfsq':
                if (datasel[0].length > 0 && datasel[1].length > 0) {
                    for (var i = 0; i < datasel[0].length; i++) {
                        for (var j = 0; j < datasel[1].length; j++) {
                            if (datasel[0][i] != datasel[1][j]) {
                                nums++
                            }
                        }
                    }
                }
                break;
            case 'ermzuxfsq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1) / 2
                    }
                }
                break;
            case 'bdw':
            case 'dwd':
            case 'dds':
            case 'czw':
            case 'rx1fs':
                var maxplace = 0;
                if ('bdw' == type || 'dds' == type || 'czw' == type || 'rx1fs' == type) {
                    maxplace = 1
                }
                if ('dwd' == type) {
                    maxplace = 3
                }
                for (var i = 0; i < maxplace; i++) {
                    nums += datasel[i].length
                }
                break;
            case 'rx2fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1) / 2
                    }
                }
                break;
            case 'rx3fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 2) {
                        nums += s * (s - 1) * (s - 2) / 6
                    }
                }
                break;
            case 'rx4fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 3) {
                        nums += s * (s - 1) * (s - 2) * (s - 3) / 24
                    }
                }
                break;
            case 'rx5fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 4) {
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120
                    }
                }
                break;
            case 'rx6fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 5) {
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720
                    }
                }
                break;
            case 'rx7fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 6) {
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040
                    }
                }
                break;
            case 'rx8fs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 7) {
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) * (s - 7) / 40320
                    }
                }
                break;
            default:
                break
            };
            return nums
        };
        var _formatSelect_Num = function (datasel, m, n) {
            var newsel = new Array();
            if (!m) m = 0;
            if (!n) n = 0;
            for (var i = 0; i < m; i++) {
                newsel.push('-')
            }
            for (var i = 0; i < datasel.length; i++) {
                var f = datasel[i].toString().replace(/\,/g, ' ');
                if (f == '') {
                    newsel.push('-')
                } else {
                    newsel.push(f)
                }
            }
            for (var i = 0; i < n; i++) {
                newsel.push('-')
            };
            return newsel.toString()
        };
        var _formatTextarea_Num = function (type, datasel) {
            switch (type) {
            case 'sanmzhixdsq':
            case 'sanmzuxdsq':
                datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num);
                break;
            case 'ermzhixdsq':
            case 'ermzuxdsq':
                datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num);
                break;
            case 'rx1ds':
                datasel = _inputCheck_Num(datasel, 1, _numberCheck_Num);
                break;
            case 'rx2ds':
                datasel = _inputCheck_Num(datasel, 2, _numberCheck_Num);
                break;
            case 'rx3ds':
                datasel = _inputCheck_Num(datasel, 3, _numberCheck_Num);
                break;
            case 'rx4ds':
                datasel = _inputCheck_Num(datasel, 4, _numberCheck_Num);
                break;
            case 'rx5ds':
                datasel = _inputCheck_Num(datasel, 5, _numberCheck_Num);
                break;
            case 'rx6ds':
                datasel = _inputCheck_Num(datasel, 6, _numberCheck_Num);
                break;
            case 'rx7ds':
                datasel = _inputCheck_Num(datasel, 7, _numberCheck_Num);
                break;
            case 'rx8ds':
                datasel = _inputCheck_Num(datasel, 8, _numberCheck_Num);
                break;
            default:
                break
            };
            return datasel.toString().replace(/\,/g, ';')
        };
        var _inputFormat = function (type, datasel) {
            switch (type) {
            case 'sanmzhixfsq':
            case 'dwd':
                return _formatSelect_Num(datasel, 0, 2);
            case 'ermzhixfsq':
                return _formatSelect_Num(datasel, 0, 3);
            case 'sanmzuxfsq':
            case 'ermzuxfsq':
            case 'bdw':
            case 'rx1fs':
            case 'rx2fs':
            case 'rx3fs':
            case 'rx4fs':
            case 'rx5fs':
            case 'rx6fs':
            case 'rx7fs':
            case 'rx8fs':
                return datasel[0].toString();
            case 'sanmzhixdsq':
            case 'sanmzuxdsq':
            case 'ermzhixdsq':
            case 'ermzuxdsq':
            case 'rx1ds':
            case 'rx2ds':
            case 'rx3ds':
            case 'rx4ds':
            case 'rx5ds':
            case 'rx6ds':
            case 'rx7ds':
            case 'rx8ds':
                return _formatTextarea_Num(type, datasel);
            case 'dds':
                return datasel[0].toString().replace(/\,/g, '|');
            case 'czw':
                return datasel[0].toString();
            default:
                break
            }
        };
        var _typeFormat = function (code) {
            code.sort();
            var arr = [];
            var j = 0,
                o = 0,
                z = 0;
            $.each(code, function (idx, val) {
                var num = parseInt(val);
                if (num % 2 == 0) {
                    o++
                } else {
                    j++
                } if (idx == 2) {
                    z = num
                }
            });
            arr[0] = j + '单' + o + '双';
            arr[1] = z;
            return arr
        };
        return {
            inputNumbers: _inputNumbers,
            inputFormat: _inputFormat,
            typeFormat: _typeFormat
        }
    }();
    var y11_main = function () {
        var $Lottery;
        var $DownCode;
        var $FenDownCode;
        var $LiDownCode;
        var $Method;
        var $SysCode;
        var $SysUnitMoney;
        var $UserCode;
        var $UserLp;
        var $UserMaxCode;
        var $UserMinCode;
        var $bData = {}, $bList = [];
        var Layout = [{
                title: '三码',
                rows: [[{
                            title: '前三直选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'sanmzhixfsq',
                                    realname: '[前三直选_复式]',
                                    tips: '从第一位、第二位、第三位中至少各选择1个号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }, {
                                                title: '第三位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'sanmzhixdsq',
                                    realname: '[前三直选_单式]',
                                    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
                                    example: '',
                                    help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
                                    textarea: {}
                                }]
                        }], [{
                            title: '前三组选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'sanmzuxfsq',
                                    realname: '[前三组选_复式]',
                                    tips: '从0-9中任意选择3个或3个以上号码。',
                                    example: '',
                                    help: '从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '选号',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'sanmzuxdsq',
                                    realname: '[前三组选_单式]',
                                    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
                                    example: '',
                                    help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '二码',
                rows: [[{
                            title: '前二直选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'ermzhixfsq',
                                    realname: '[前二直选_复式]',
                                    tips: '从第一位、第二位中至少各选择1个号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'ermzhixdsq',
                                    realname: '[前二直选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码组成一注。',
                                    example: '',
                                    help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
                                    textarea: {}
                                }]
                        }], [{
                            title: '前二组选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'ermzuxfsq',
                                    realname: '[前二组选_复式]',
                                    tips: '从0-9中任意选择2个或2个以上号码。',
                                    example: '',
                                    help: '从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '选号',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'ermzuxdsq',
                                    realname: '[前二组选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码组成一注。',
                                    example: '',
                                    help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '不定胆',
                rows: [[{
                            title: '不定胆',
                            columns: [{
                                    showname: '前三位',
                                    shortname: 'bdw',
                                    realname: '[不定胆_前三位]',
                                    tips: '从01-11中任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '选号',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '定位胆',
                rows: [[{
                            title: '定位胆',
                            columns: [{
                                    showname: '定位胆',
                                    shortname: 'dwd',
                                    realname: '[定位胆]',
                                    tips: '从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '第一位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }, {
                                                title: '第二位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }, {
                                                title: '第三位',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '趣味型',
                rows: [[{
                            title: '趣味型',
                            columns: [{
                                    showname: '定单双',
                                    shortname: 'dds',
                                    realname: '[定单双]',
                                    tips: '从不同的单双组合中任意选择1个或1个以上的组合。',
                                    example: '',
                                    help: '从5种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '定单双',
                                                balls: ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
                                                tools: false,
                                                cls: 'large'
                                            }]
                                    }
                                }, {
                                    showname: '猜中位',
                                    shortname: 'czw',
                                    realname: '[猜中位]',
                                    tips: '从3-9中任意选择1个或1个以上数字。',
                                    example: '',
                                    help: '从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '猜中位',
                                                balls: ['03', '04', '05', '06', '07', '08', '09'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '任选',
                rows: [[{
                            title: '任选复式',
                            columns: [{
                                    showname: '一中一',
                                    shortname: 'rx1fs',
                                    realname: '[任选复式_一中一]',
                                    tips: '从01-11中任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '一中一',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '二中二',
                                    shortname: 'rx2fs',
                                    realname: '[任选复式_二中二]',
                                    tips: '从01-11中任意选择2个或2个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '二中二',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '三中三',
                                    shortname: 'rx3fs',
                                    realname: '[任选复式_三中三]',
                                    tips: '从01-11中任意选择3个或3个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '三中三',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '四中四',
                                    shortname: 'rx4fs',
                                    realname: '[任选复式_四中四]',
                                    tips: '从01-11中任意选择4个或4个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '四中四',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '五中五',
                                    shortname: 'rx5fs',
                                    realname: '[任选复式_五中五]',
                                    tips: '从01-11中任意选择5个或5个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '五中五',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '六中五',
                                    shortname: 'rx6fs',
                                    realname: '[任选复式_六中五]',
                                    tips: '从01-11中任意选择6个或6个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '六中五',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '七中五',
                                    shortname: 'rx7fs',
                                    realname: '[任选复式_七中五]',
                                    tips: '从01-11中任意选择7个或7个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '七中五',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '八中五',
                                    shortname: 'rx8fs',
                                    realname: '[任选复式_八中五]',
                                    tips: '从01-11中任意选择8个或8个以上号码。',
                                    example: '',
                                    help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '八中五',
                                                balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                                                        '11'],
                                                tools: true
                                            }]
                                    }
                                }]
                        }], [{
                            title: '任选单式',
                            columns: [{
                                    showname: '一中一',
                                    shortname: 'rx1ds',
                                    realname: '[任选单式_一中一]',
                                    tips: '手动输入号码，从01-11中任意输入1个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '二中二',
                                    shortname: 'rx2ds',
                                    realname: '[任选单式_二中二]',
                                    tips: '手动输入号码，从01-11中任意输入2个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '三中三',
                                    shortname: 'rx3ds',
                                    realname: '[任选单式_三中三]',
                                    tips: '手动输入号码，从01-11中任意输入3个号码组成一注。。',
                                    example: '',
                                    help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '四中四',
                                    shortname: 'rx4ds',
                                    realname: '[任选单式_四中四]',
                                    tips: '手动输入号码，从01-11中任意输入4个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '五中五',
                                    shortname: 'rx5ds',
                                    realname: '[任选单式_五中五]',
                                    tips: '手动输入号码，从01-11中任意输入5个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '六中五',
                                    shortname: 'rx6ds',
                                    realname: '[任选单式_六中五]',
                                    tips: '手动输入号码，从01-11中任意输入6个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '七中五',
                                    shortname: 'rx7ds',
                                    realname: '[任选单式_七中五]',
                                    tips: '手动输入号码，从01-11中任意输入7个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '八中五',
                                    shortname: 'rx8ds',
                                    realname: '[任选单式_八中五]',
                                    tips: '手动输入号码，从01-11中任意输入8个号码组成一注。',
                                    example: '',
                                    help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }];
        var getSelectBall = function (playArea) {
            var datasel = [];
            var sb = playArea.find('.balls');
            if (sb && sb.length > 0) {
                $.each(sb, function () {
                    var ball = [];
                    var as = $(this).find('ul > li > a.selected');
                    $.each(as, function () {
                        var val = $(this).attr('data-val');
                        ball.push(val)
                    });
                    datasel.push(ball)
                })
            };
            return datasel
        };
        var getTextareaBall = function (playArea) {
            var datasel = [];
            var textarea = playArea.find('.textarea > textarea');
            if (textarea && textarea.length > 0) {
                var format = textarea.val().replace(/\,|\n/g, ';');
                var as = format.split(';');
                $.each(as, function (idx, val) {
                    datasel.push(val)
                })
            };
            return datasel
        };
        var buildSelectPlace = function (playArea, select) {
            $.each(select.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + '</div>')
                }
                if (val.cls) {
                    row.addClass(val.cls)
                };
                var balls = $('<div class="balls">').append('<ul>');
                $.each(val.balls, function (j, ball) {
                    balls.find('ul').append('<li><a data-val="' + ball + '">' + ball + '</a></li>')
                });
                balls.find('ul > li > a').unbind('click').click(function () {
                    if ($(this).hasClass('selected')) {
                        $(this).parent().removeClass('selected');
                        $(this).removeClass('selected')
                    } else {
                        $(this).parent().addClass('selected');
                        $(this).addClass('selected')
                    }
                    PlayOptions.update()
                });
                row.append(balls);
                if (val.tools) {
                    buildBallTools(row, balls)
                }
                playArea.append(row)
            })
        };
        var buildBallTools = function (row, balls) {
            var blist = balls.find('ul > li > a');
            var tools = $('<div class="tools">').append(
                '<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
            var setSelected = function (els, selected) {
                if (selected) {
                    if (!els.hasClass('selected')) {
                        els.trigger('click')
                    }
                } else {
                    if (els.hasClass('selected')) {
                        els.trigger('click')
                    }
                }
            };
            tools.find('a[data-command="all"]').unbind('click').click(function () {
                $.each(blist, function () {
                    setSelected($(this), true)
                })
            });
            tools.find('a[data-command="big"]').unbind('click').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), false)
                    } else {
                        setSelected($(this), true)
                    }
                })
            });
            tools.find('a[data-command="small"]').unbind('click').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="single"]').unbind('click').click(function () {
                var arr = [1, 3, 5, 7, 9, 11];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="double"]').unbind('click').click(function () {
                var arr = [0, 2, 4, 6, 8, 10];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="clean"]').unbind('click').click(function () {
                $.each(blist, function () {
                    setSelected($(this), false)
                })
            });
            row.append(tools)
        };
        var buildTextareaPlace = function (playArea) {
            var textarea = $('<div class="textarea">').append('<textarea>');
            var help = $('<div class="help">').html('每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
            textarea.find('textarea').keyup(function () {
                var testf = String($(this).val()).match(/(\d\d)(\d\d)(\d\d)/g);
                if (testf != null) {
                    if (testf.length > 0) {
                        $(this).val($(this).val().replace(/[；.,。，、|]/g, ';').replace(/(;+)/g, ';').replace(/[ ]/g, ';'))
                    } else {
                        $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'))
                    }
                } else {
                    $(this).val($(this).val().replace(/[；.,。，、|]/g, ';'))
                }
                PlayOptions.update()
            });
            textarea.find('textarea').on('paste', function () {
                var thisarea = $(this);
                setTimeout(function () {
                    var testf = String(thisarea.val()).match(/(\d\d)(\d\d)(\d\d)/g);
                    if (testf != null) {
                        if (testf.length > 0) {
                            thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';').replace(/(;+)/g, ';').replace(/[ ]/g,
                                ';'))
                        } else {
                            thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';'))
                        }
                    } else {
                        thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ';'))
                    }
                    PlayOptions.update()
                }, 10)
            });
            playArea.append(textarea);
            playArea.append(help)
        };
        var PlayArea = function () {
            var data = function () {
                var playArea = $('.lottery-betting .lottery-opearation > .play-area');
                var datasel = [];
                var balls = getSelectBall(playArea);
                var textarea = getTextareaBall(playArea);
                return datasel.concat(balls).concat(textarea)
            };
            var reset = function () {
                var playList = $('.lottery-betting .lottery-opearation > .play-list');
                playList.find('[data-method="' + $bData.method + '"]').trigger('click')
            };
            return {
                data: data,
                reset: reset
            }
        }();
        var buildPlayOptions = function (playOptions) {
            playOptions.append(['<div class="part-one">',
                    '<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注</div>',
                    '<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>', '</div>']
                .join(''));
            playOptions.append(['<div class="part-two">', '<div class="label">模式</div>',
                    '<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
                    '<div class="label">倍数</div>',
                    '<div class="multiple"><input name="multiple" type="text" value="1"></div>', '</div>'].join(''));
            var bDataModel = 'yuan';
            if ($.cookie('USER_BDATA_MODEL')) {
                bDataModel = $.cookie('USER_BDATA_MODEL')
            }
            playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass('selected');
            var multiple = playOptions.find('.multiple > input');
            multiple.keyup(function () {
                if ($(this).val() == '') return;
                var val = $(this).val();
                if (/^[0-9]*$/.test(val)) {
                    val = Number(val);
                    if (val > 10000) $(this).val(10000);
                    if (val < 1) $(this).val(1);
                    PlayOptions.update()
                } else {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            multiple.keydown(function (e) {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    if ($(this).val() == '') return;
                    var val = Number($(this).val());
                    if (!isNaN(val)) {
                        if (e.keyCode == 38) val++;
                        if (e.keyCode == 40) val--;
                        if (val > 10000) val = 10000;
                        if (val < 1) val = 1;
                        $(this).val(val)
                    }
                }
            });
            multiple.blur(function () {
                if ($(this).val() == '') {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            var fenModel = function () {
                if ($FenDownCode > 0) {
                    var thisCode = $SysCode - $FenDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '分模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var liModel = function () {
                if ($LiDownCode > 0) {
                    var thisCode = $SysCode - $LiDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '厘模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var defaultModel = function () {
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20
            };
            var update = function (model) {
                if (model == 'fen') {
                    fenModel()
                } else if (model == 'li') {
                    liModel()
                } else {
                    defaultModel()
                }
            };
            var models = playOptions.find('.model > a');
            models.click(function () {
                if (!$(this).hasClass('selected')) {
                    models.removeClass('selected');
                    $(this).addClass('selected');
                    var model = $(this).attr('data-val');
                    update(model);
                    AdjustPrize.slider();
                    AdjustPrize.update();
                    PlayOptions.update();
                    var expires = new Date(moment().startOf('year').add(1, 'years'));
                    $.cookie('USER_BDATA_MODEL', model, {
                        expires: expires,
                        path: '/'
                    })
                }
            });
            update(bDataModel)
        };
        var PlayOptions = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-options')
            };
            var multiple = function () {
                return Number(els().find('.multiple > input').val())
            };
            var model = function () {
                var val = els().find('.model > a.selected').attr('data-val');
                if (val == 'yuan') {
                    return {
                        val: val,
                        money: 1
                    }
                }
                if (val == 'jiao') {
                    return {
                        val: val,
                        money: 0.1
                    }
                }
                if (val == 'fen') {
                    return {
                        val: val,
                        money: 0.01
                    }
                }
                if (val == 'li') {
                    return {
                        val: val,
                        money: 0.001
                    }
                }
            };
            var update = function () {
                var sumstr = LotteryUtils.inputFormat($('.play-list .selected').data('method'), PlayArea.data());
                $('.ks_btn').attr('summary', (sumstr.length < 20 ? sumstr : (sumstr.substring(0, 20) + '...')));
                var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
                var total = multiple() * num * $SysUnitMoney * model().money;
                els().find('[data-field="num"]').html(num);
                els().find('[data-field="total"]').html(total.toFixed(3));
                $('#lottery .totaldeal').html(num);
                $('#lottery .totaldealtime').html('x' + multiple());
                $('#lottery .totaldealamount').html(total.toFixed(3));
                var gainnumber = Number(parseFloat($('[data-field="prize"]').html() * multiple()) - total.toFixed(3)).toFixed(
                    3);
                (num > 0) ? $('#lottery .totalgain').html(gainnumber) : $('#lottery .totalgain').html('0.000');
                if (parseInt(num, 10) > 0) {
                    $('.btn[data-command="add"]').addClass('active')
                } else {
                    $('.btn[data-command="add"]').removeClass('active')
                }
            };
            return {
                els: els,
                multiple: multiple,
                model: model,
                update: update
            }
        }();
        var buildAdjustPrize = function (adjustPrize, column) {
            var start = $UserMaxCode;
            if ($.cookie('USER_BDATA_CODE')) {
                var bCode = $.cookie('USER_BDATA_CODE');
                if (!isNaN(bCode)) {
                    if (bCode > $UserMaxCode) {
                        start = $UserMaxCode
                    } else if (bCode < $UserMinCode) {
                        start = $UserMinCode
                    } else {
                        start = bCode
                    }
                }
            }
            adjustPrize.empty();
            var nownick_code = $('#lottery #topltname').attr('nick');
            if (localStorage.getItem(nownick_code + '_code') != null) {
                start = parseInt(localStorage.getItem(nownick_code + '_code'), 10)
            }
            adjustPrize.append([
                    '<div>奖金调节：<label class="rf"><span data-field="code">0</span> / <span data-field="point">0.0</span>%</label></div>',
                    '<div class="slider"></div>',
                    '<div class="range-slider-customed"><input type="range" class="betrate" min="', $UserMinCode,
                    '" max="', $UserMaxCode, '" value="', start, '" step="2"></div>', ''].join(''));
            var slider = adjustPrize.find('.slider');
            var nowbrate = adjustPrize.find('.betrate');
            nowbrate.off('change').on('change', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            }).off('input').on('input', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            });
            var lc = GameData.getConfig();
            if (parseInt($UserMaxCode, 10) > parseInt(lc.maxBetCode, 10)) {
                $UserMaxCode = parseInt(lc.maxBetCode, 10)
            }
            slider.noUiSlider({
                connect: 'lower',
                behaviour: 'snap',
                step: 2,
                start: start,
                range: {
                    'max': $UserMaxCode,
                    'min': $UserMinCode
                }
            });
            if ($UserMaxCode == $UserMinCode) {
                slider.attr('disabled', 'disabled')
            } else {
                slider.removeAttr('disabled')
            };
            var update = function (code) {
                var point = $UserLp - ((code - $UserMinCode) / 20.0).toFixed(1);
                adjustPrize.find('[data-field="code"]').html(code);
                adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
                AdjustPrize.update()
            };
            var onSet = function () {
                var code = Number(slider.val());
                update(code);
                var expires = new Date(moment().startOf('year').add(1, 'years'));
                $.cookie('USER_BDATA_CODE', code, {
                    expires: expires,
                    path: '/'
                })
            };
            var onSlide = function () {
                var code = Number(slider.val());
                update(code)
            };
            slider.on({
                set: onSet,
                slide: onSlide
            });
            update(start)
        };
        var PlayHelp = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-help')
            };
            var update = function (t) {
                els().find('[data-field="prize"]').html(t)
            };
            return {
                els: els,
                update: update
            }
        }();
        var AdjustPrize = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .adjust-prize')
            };
            var code = function () {
                return Number(els().find('[data-field="code"]').html())
            };
            var point = function () {
                return Number(els().find('[data-field="point"]').html())
            };
            var slider = function () {
                els().find('.slider').noUiSlider({
                    range: {
                        'max': $UserMaxCode,
                        'min': $UserMinCode
                    }
                }, true)
            };
            var update = function () {
                var method = $Method[$bData.method];
                var model = PlayOptions.model();
                var mMoney = PlayOptions.model().money;
                if (method) {
                    var ps = method.bonus.split(',');
                    var psx = Number(method.x);
                    var t = [];
                    $('[data-command="chase"]').attr('code', $UserMinCode);
                    for (var i = 0, j = ps.length; i < j; i++) {
                        var percent = Number(ps[i]) / $UserMinCode;
                        var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * ($SysUnitMoney / 2);
                        t.push(pm)
                    }
                    t.sort(function (a, b) {
                        return Number(a) > Number(b) ? 1 : -1
                    });
                    if (t.length == 1) {
                        t[0] = t[0] * model.money;
                        PlayHelp.update(t[0].toFixed(3))
                    } else {
                        t[0] = t[0] * model.money;
                        t[t.length - 1] = t[t.length - 1] * model.money;
                        PlayHelp.update(t[0].toFixed(3) + ' ~ ' + t[t.length - 1].toFixed(3))
                    }
                }
            };
            return {
                els: els,
                code: code,
                point: point,
                update: update,
                slider: slider
            }
        }();
        var addCallback = [];
        var addToList = function (callback) {
            var issue = $('[data-field="global-expect"]').html();
            var method = $bData.method;
            var compress = $bData.compress;
            var datasel = PlayArea.data();
            var num = LotteryUtils.inputNumbers(method, datasel);
            var content = LotteryUtils.inputFormat(method, datasel);
            var code = AdjustPrize.code();
            var point = AdjustPrize.point();
            var multiple = PlayOptions.multiple();
            var model = PlayOptions.model().val;
            var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
            if (num == 0) {
                App.alert('info', '提示消息', '您还没有选择号码或所选号码不全！', 3000);
                return false
            };
            var _method = $Method[method];
            if (num <= _method.oooNums) {
                App.confirm('question', '温馨提示', '您所投注内容属于单挑玩法，最高奖金为' + _method.oooBonus + '元，确认继续投注？', 0, '确认', '取消', function () {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total,
                        callback);
                    PlayArea.reset()
                })
            } else {
                LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, callback);
                PlayArea.reset()
            }
        };
        var LotteryRecord = function () {
            var els = function () {
                return $('.lottery-record')
            };
            var name = function (method) {
                var method = $Method[method];
                return '[' + method.name + ']'
            };
            var format = function (content) {
                if (content.length > 16) {
                    content = content.substring(0, 16) + '…<a data-command="details">[详细]'
                };
                return content
            };
            var add = function (issue, method, compress, content, num, multiple, model, code, point, total, callback) {
                var tbody = els().find('.list table > tbody');
                var tr = $('<tr>');
                var mobilebasket = ['<li>', '<div class="row clearfix">',
                        '<div class="col-15"><em class="m_ico"></em></div>', '<div class="col-70">',
                        '<h3>5,6,7,8,9</h3>', '<span>五星直选复式 1注 元 2.1% 5倍 10元</span>', '</div>',
                        '<div class="col-15"><em class="m_ico"></em></div>', '</div>', '</li>'].join('');
                BasketLtChoose.push({
                    'm': name(method),
                    'c': content,
                    'num': num,
                    'model': model,
                    'multiple': multiple,
                    'p': point.toFixed(1),
                    't': total.toFixed(3)
                });
                $('#basket .basketitems').append(mobilebasket);
                tr.append('<td class="content">' + name(method) + format(content) + '</td>');
                tr.append('<td class="num">' + num + '注</td>');
                tr.append('<td class="multiple">' + multiple + '倍</td>');
                tr.append('<td class="point">' + point.toFixed(1) + '%</td>');
                tr.append('<td class="total">' + total.toFixed(3) + '元</td>');
                tr.append('<td class="btn"><a data-command="del">删除</a></td>');
                tr.find('a[data-command="del"]').unbind('click').click(function () {
                    var idx = tbody.find('tr').index(tr);
                    ArrayUtil.remove($bList, idx);
                    tr.remove()
                });
                tbody.append(tr);
                if (compress === true && num >= 1000) {
                    App.blockUI({
                        target: els(),
                        boxed: true,
                        message: '超大注数处理中...'
                    });
                    LZMA.compress(content, 3, function (result) {
                        App.unblockUI(els());
                        if (result === false) {
                            return App.alert('info', '消息提示', '号码添加失败，请重试！', 3000)
                        }
                        content = LZMAUtil.toHex(result);
                        $bList.push({
                            lottery: $Lottery,
                            issue: issue,
                            content: content,
                            num: num,
                            method: method,
                            multiple: multiple,
                            model: model,
                            code: code,
                            compress: true
                        });
                        if ($.isFunction(callback)) callback();
                        for (var i = 0; i < addCallback.length; i++) {
                            if ($.isFunction(addCallback[i])) {
                                addCallback[i]()
                            }
                        }
                    })
                } else {
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: false
                    });
                    if ($.isFunction(callback)) callback();
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                }
            };
            var clear = function () {
                els().find('.list table > tbody').empty();
                $bList = []
            };
            var isInit = false;
            var init = function () {
                isInit = true;
                App.initScroll();
                var button = els().find('.button');
                button.find('[data-command="add"]').off('click').click(function () {
                    addToList()
                });
                button.find('[data-command="submit"]').off('click').click(function () {
                    App.confirm('question', '确认消息', ['<div class="myconfirm">你确认加入第' + $(
                            '.ltp .lottery-open-info [data-field="global-expect"]').text() + '期？<br>', '总注数：', ($(
                            '.total-inner [data-field="sum-num"]').text() == '0' ? $('.text-money[data-field="num"]').text() :
                            $('.total-inner [data-field="sum-num"]').text()), '<br>', '订单笔数：1<br>', '是否追号：否<br>',
                            '投注总额：', ($('.total-inner [data-field="sum-money"]').text() == '0.000' ? $(
                            '.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()),
                            '元</div>', '<div class="cftip aboutmax">温馨提示：本期最高奖金限额200000元，请会员谨慎投注！</div>'].join(''), 0,
                        '确定', '取消', function () {
                        if ($bList.length > 0) {
                            doSubmit()
                        } else {
                            addToList(function () {
                                doSubmit()
                            }, function () {
                                doSubmit()
                            })
                        }
                    })
                });
                button.find('[data-command="clear"]').off('click').click(function () {
                    clear()
                });
                button.find('[data-command="chase"]').off('click').click(function () {
                    LotteryChase.init()
                })
            };
            return {
                init: init,
                add: add,
                clear: clear
            }
        }();
        var zutypech = {};
        var initDocument = function () {
            $('.lottery-betting .lottery-opearation').empty();
            var main = $('.lottery-betting .lottery-opearation');
            var playGroups = $('<div class="play-groups">').append('<ul>');
            var playList = $('<div class="play-list">');
            var playHelp = $('<div class="play-help">');
            var playArea = $('<div class="play-area">');
            var adjustPrize = $('<div class="adjust-prize">');
            var playOptions = $('<div class="play-options clearfix">');
            var initPlayGroups = function (index) {
                playGroups.find('ul').empty();
                $.each(Layout, function (i, group) {
                    if ($.inArray(group.title, GameData.getMethodList()) > -1) {
                        var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
                        thisGroup.find('a').off('click').click(function () {
                            if (!$(this).hasClass('selected')) {
                                playGroups.find('li > a.selected').removeClass('selected');
                                $(this).addClass('selected');
                                var topmname = $(this).text();
                                $('#topltname i#mtopname').attr('top', topmname).html('-' + topmname);
                                if (typeof zutypech[topmname] != 'undefined') {
                                    $('.lottery-open-list .code').removeClass('expand');
                                    $('.lottery-open-list .title .zutype').html(zutypech[topmname]).show();
                                    $('.lottery-open-list .list .zutype').show()
                                } else {
                                    $('.lottery-open-list .code').addClass('expand');
                                    $('.lottery-open-list .title .zutype').html('').hide();
                                    $('.lottery-open-list .list .zutype').hide()
                                }
                                initPlayList(group.rows)
                            }
                        });
                        playGroups.find('ul').append(thisGroup)
                    }
                });
                playGroups.find('ul > li > a').eq(index).trigger('click')
            };
            var initPlayList = function (list) {
                playList.empty();
                $.each(list, function (i, rows) {
                    var thisRow = $('<div class="row clearfix">');
                    $.each(rows, function (j, row) {
                        thisRow.append('<div class="label">' + row.title + '</div>');
                        $.each(row.columns, function (k, column) {
                            if ($.inArray(column.shortname, GameData.getMethods()) > -1) {
                                var thisColumn = $('<div class="column">').attr('data-method', column.shortname).html(
                                    column.showname);
                                thisColumn.off('click').click(function () {
                                    if (!$(this).hasClass('selected')) {
                                        playList.find('.row > .column').removeClass('selected');
                                        $(this).addClass('selected')
                                    };
                                    var nowtag = $(this).text();
                                    var topindex = $('#lottery .play-groups a.selected').parent().index();
                                    var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                                    localStorage.setItem(nowltid + '_m', topindex + '|' + $(this).data('method'));
                                    $('#topltname i#mtopname').html('-' + (typeof $('#topltname i#mtopname').attr('top') !=
                                        'undefined' ? $('#topltname i#mtopname').attr('top') : '') + nowtag);
                                    $bData.method = column.shortname;
                                    $bData.compress = column.compress;
                                    buildPlayHelp(column);
                                    buildPlayArea(column);
                                    buildAdjustPrize(adjustPrize, column);
                                    PlayOptions.update()
                                });
                                thisRow.append(thisColumn)
                            }
                        })
                    });
                    playList.append(thisRow)
                });
                var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                if (localStorage.getItem(nowltid + '_m') != null) {
                    var tcss = localStorage.getItem(nowltid + '_m').split('|');
                    if (tcss.length > 1 && playList.find('.row > .column[data-method="' + tcss[1] + '"]').size() > 0) {
                        playList.find('.row > .column[data-method="' + tcss[1] + '"]').trigger('click')
                    } else {
                        playList.find('.row > .column').eq(0).trigger('click')
                    }
                } else {
                    playList.find('.row > .column').eq(0).trigger('click')
                }
                $('#popup .secmethod').html($('.ltp .lottery-opearation .play-list').html());
                if (typeof refreshigh != 'undefined') {
                    refreshigh()
                }
            };
            var buildPlayHelp = function (column) {
                playHelp.empty();
                playHelp.append('<div class="tips"><i></i><span class="label">玩法提示：</span>' + column.tips + '</div>');
                playHelp.append(
                    '<div class="prize"><a data-popover=".popover-about" class="open-popover lf">玩法说明</a><i></i>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
                playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example +
                    '</div><div class="help">' + column.help + '</div></div>');
                $('#method-tip p').html(column.example + '<br>' + column.help);
                var show = function (els, target) {
                    var top = $(els).position().top;
                    var left = $(els).position().left;
                    playHelp.find(target).css({
                        top: top + 32,
                        left: left
                    }).show()
                };
                var hide = function (target) {
                    playHelp.find(target).hide()
                };
                playHelp.find('.tips > i').hover(function () {
                    show(this, '.help-info')
                }, function () {
                    hide('.help-info')
                })
            };
            var buildPlayArea = function (column) {
                playArea.empty();
                if (column.select) {
                    buildSelectPlace(playArea, column.select)
                }
                if (column.textarea) {
                    buildTextareaPlace(playArea, column.textarea)
                }
            };
            buildPlayOptions(playOptions);
            main.append(playGroups);
            main.append(playList);
            main.append(playHelp);
            main.append(playArea);
            main.append(adjustPrize);
            main.append(playOptions);
            var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
            if (localStorage.getItem(nowltid + '_m') != null) {
                var tcs = localStorage.getItem(nowltid + '_m').split('|');
                if (tcs.length > 1) {
                    initPlayGroups(parseInt(tcs[0], 10))
                } else {
                    initPlayGroups(0)
                }
            } else {
                initPlayGroups(0)
            }
            LotteryRecord.init()
        };
        var init = function (data) {
            if (data) {
                $Lottery = data.lottery;
                $LotteryName = data.lotteryName;
                $DownCode = data.downCode;
                $FenDownCode = data.fenDownCode;
                $LiDownCode = data.liDownCode;
                $Method = data.method;
                $SysCode = data.sysCode;
                $SysUnitMoney = data.sysUnitMoney;
                $UserCode = data.userCode;
                $UserLp = data.userLp;
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $UserCode - $UserLp * 20
            }
            initDocument();
            LotteryRecord.clear()
        };
        var isLoading = false;
        var doSubmit = function () {
            var thisContent = $('.lottery-record');
            if (!isLoading) {
                if ($bList.length == 0) {
                    return App.alert('info', '提示消息', '投注列表没有订单！', 3000)
                };
                var list = [];
                $.each($bList, function (i, v) {
                    list.push({
                        lottery: v.lottery,
                        issue: v.issue,
                        method: v.method,
                        content: v.content,
                        model: v.model,
                        multiple: v.multiple,
                        code: v.code,
                        compress: v.compress
                    })
                });
                var data = {
                    text: $.toJSON(list)
                };
                GameLotteryCtrl.addOrder({
                    data: data,
                    beforeSend: function () {
                        isLoading = true;
                        App.blockUI({
                            target: thisContent,
                            boxed: true
                        })
                    },
                    success: function (response) {
                        if (response.error == 0) {
                            isLoading = false;
                            App.unblockUI(thisContent);
                            LotteryRecord.clear();
                            BasketLtChoose = [];
                            $("#cleanbaketnow").click();
                            App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                            $('#lottery #ltbalbox').click();
                            $('[data-field="lotteryBalance"]').html(response.data);
                            if (typeof RecordList != 'undefined') {
                                RecordList.init()
                            }
                        }
                        if (response.error == 1) {
                            if ('116-05' == response.code) {
                                setTimeout(function () {
                                    isLoading = false;
                                    App.unblockUI(thisContent);
                                    App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。')
                                }, 10000)
                            } else if ('116-06' == response.code) {
                                window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html'
                            } else {
                                isLoading = false;
                                App.unblockUI(thisContent);
                                if (response.message != '该用户已被冻结') {
                                    App.alert('warning', '提示消息', response.message)
                                } else {
                                    App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>', 30000, '', function () {}, function () {
                                        App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时')
                                    })
                                }
                            }
                        }
                    }
                })
            }
        };
        return {
            init: init,
            getConfig: function () {
                return {
                    lottery: $Lottery,
                    lotteryName: $LotteryName,
                    downCode: $DownCode,
                    fenDownCode: $FenDownCode,
                    liDownCode: $LiDownCode,
                    method: $Method,
                    sysCode: $SysCode,
                    sysUnitMoney: $SysUnitMoney,
                    userCode: $UserCode,
                    userLp: $UserLp,
                    userMaxCode: $UserMaxCode,
                    userMinCode: $UserMinCode
                }
            },
            bList: function () {
                return $bList
            },
            clear: function () {
                LotteryRecord.clear()
            },
            addCallback: function (cb) {
                addCallback.push(cb)
            }
        }
    }();
 
    var d3_utils = function () {
        var _inputCheck_Num = function (datasel, l, fun, sort) {
            fun = $.isFunction(fun) ? fun : function (n, l) {
                return true
            };
            var newsel = [];
            if (sort) {
                var sortsel = [];
                $.each(datasel, function (i, n) {
                    sortsel.push(n.split('').sort().toString().replace(/\,/g, ''))
                });
                datasel = sortsel
            }
            datasel = ArrayUtil.unique(datasel);
            var regex = new RegExp('^[0-9]{' + l + '}$');
            $.each(datasel, function (i, n) {
                if (regex.test(n) && fun(n, l)) {
                    newsel.push(n)
                }
            });
            return newsel
        };
        var _HHZXCheck_Num = function (n, l) {
            var a = new Array();
            if (l == 2) {
                a = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99']
            } else {
                a = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999']
            };
            return $.inArray(n, a) == -1 ? true : false
        };
        var _inputNumbers = function (type, datasel) {
            var nums = 0,
                tmp_nums = 1;
            switch (type) {
            case 'sanxzhixds':
                nums = _inputCheck_Num(datasel, 3).length;
                break;
            case 'sanxhhzx':
                nums = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true).length;
                break;
            case 'exzhixdsh':
            case 'exzhixdsq':
                nums = _inputCheck_Num(datasel, 2).length;
                break;
            case 'exzuxdsh':
            case 'exzuxdsq':
                nums = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true).length;
                break;
            case 'sanxzs':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1)
                    }
                }
                break;
            case 'sanxzl':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 2) {
                        nums += s * (s - 1) * (s - 2) / 6
                    }
                }
                break;
            case 'sanxzhixhz':
            case 'exzhixhzh':
            case 'exzhixhzq':
                var cc = {
                    0: 1,
                    1: 3,
                    2: 6,
                    3: 10,
                    4: 15,
                    5: 21,
                    6: 28,
                    7: 36,
                    8: 45,
                    9: 55,
                    10: 63,
                    11: 69,
                    12: 73,
                    13: 75,
                    14: 75,
                    15: 73,
                    16: 69,
                    17: 63,
                    18: 55,
                    19: 45,
                    20: 36,
                    21: 28,
                    22: 21,
                    23: 15,
                    24: 10,
                    25: 6,
                    26: 3,
                    27: 1
                };
                if (type == 'exzhixhzh' || type == 'exzhixhzq') {
                    cc = {
                        0: 1,
                        1: 2,
                        2: 3,
                        3: 4,
                        4: 5,
                        5: 6,
                        6: 7,
                        7: 8,
                        8: 9,
                        9: 10,
                        10: 9,
                        11: 8,
                        12: 7,
                        13: 6,
                        14: 5,
                        15: 4,
                        16: 3,
                        17: 2,
                        18: 1
                    }
                }
                for (var i = 0; i < datasel[0].length; i++) {
                    nums += cc[parseInt(datasel[0][i], 10)]
                }
                break;
            case 'dwd':
                var maxplace = 3;
                for (var i = 0; i < maxplace; i++) {
                    nums += datasel[i].length
                }
                break;
            case 'exzuxfsh':
            case 'exzuxfsq':
                var maxplace = 1;
                for (var i = 0; i < maxplace; i++) {
                    var s = datasel[i].length;
                    if (s > 1) {
                        nums += s * (s - 1) / 2
                    }
                }
                break;
            default:
                var maxplace = 0;
                switch (type) {
                case "sanxzhixfs":
                    maxplace = 3;
                    break;
                case "exzhixfsh":
                case "exzhixfsq":
                    maxplace = 2;
                    break;
                case "yimabdw":
                    maxplace = 1;
                    break
                }
                for (var i = 0; i < maxplace; i++) {
                    if (datasel[i].length == 0) {
                        tmp_nums = 0;
                        break
                    }
                    tmp_nums *= datasel[i].length
                }
                nums += tmp_nums
            };
            return nums
        };
        var _formatSelect_Num = function (datasel, m, n) {
            var newsel = new Array();
            if (!m) m = 0;
            if (!n) n = 0;
            for (var i = 0; i < m; i++) {
                newsel.push('-')
            }
            for (var i = 0; i < datasel.length; i++) {
                var f = datasel[i].toString().replace(/\,/g, '');
                if (f == '') {
                    newsel.push('-')
                } else {
                    newsel.push(f)
                }
            }
            for (var i = 0; i < n; i++) {
                newsel.push('-')
            };
            return newsel.toString()
        };
        var _formatTextarea_Num = function (type, datasel) {
            switch (type) {
            case 'sanxzhixds':
                datasel = _inputCheck_Num(datasel, 3);
                break;
            case 'sanxhhzx':
                datasel = _inputCheck_Num(datasel, 3, _HHZXCheck_Num, true);
                break;
            case 'exzhixdsh':
            case 'exzhixdsq':
                datasel = _inputCheck_Num(datasel, 2);
                break;
            case 'exzuxdsh':
            case 'exzuxdsq':
                datasel = _inputCheck_Num(datasel, 2, _HHZXCheck_Num, true);
                break;
            default:
                break
            };
            return datasel.toString().replace(/\,/g, ' ')
        };
        var _inputFormat = function (type, datasel) {
            switch (type) {
            case 'sanxzhixds':
            case 'sanxhhzx':
            case 'exzhixdsh':
            case 'exzhixdsq':
            case 'exzuxdsh':
            case 'exzuxdsq':
                return _formatTextarea_Num(type, datasel);
            case 'sanxzs':
            case 'sanxzl':
            case 'exzuxfsh':
            case 'exzuxfsq':
            case 'yimabdw':
            case 'sanxzhixhz':
            case 'exzhixhzh':
            case 'exzhixhzq':
                return datasel.toString();
            case 'sanxzhixfs':
                return _formatSelect_Num(datasel);
            case 'exzhixfsh':
                return _formatSelect_Num(datasel, 1);
            case 'exzhixfsq':
                return _formatSelect_Num(datasel, 0, 1);
            default:
                return _formatSelect_Num(datasel)
            }
        };
        var _typeFormat = function (code) {
            var a = [code[0], code[1], code[2]];
            var _a = a.uniquelize();
            var arr = [];
            if (_a.length == 1) arr[0] = '豹子';
            if (_a.length == 2) arr[0] = '组三';
            if (_a.length == 3) arr[0] = '组六';
            return arr
        };
        return {
            inputNumbers: _inputNumbers,
            inputFormat: _inputFormat,
            typeFormat: _typeFormat
        }
    }();
    var d3_main = function () {
        var $Lottery;
        var $DownCode;
        var $FenDownCode;
        var $LiDownCode;
        var $Method;
        var $SysCode;
        var $SysUnitMoney;
        var $UserCode;
        var $UserLp;
        var $UserMaxCode;
        var $UserMinCode;
        var $bData = {}, $bList = [];
        var Layout = [{
                title: '三码',
                rows: [[{
                            title: '直选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'sanxzhixfs',
                                    realname: '[三码_复式]',
                                    tips: '从个、十、百位各选一个号码组成一注。',
                                    example: '',
                                    help: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '百位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '十位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '个位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'sanxzhixds',
                                    realname: '[三码_单式]',
                                    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
                                    example: '',
                                    help: '手动输入一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '直选和值',
                                    shortname: 'sanxzhixhz',
                                    realname: '[三码_和值]',
                                    tips: '从0-27中任意选择1个或1个以上号码',
                                    example: '',
                                    help: '所选数值等于开奖号码的三个数字相加之和，即为中奖。',
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                tools: false,
                                                cls: 'hz'
                                            }]
                                    }
                                }]
                        }], [{
                            title: '组选',
                            columns: [{
                                    showname: '组三',
                                    shortname: 'sanxzs',
                                    realname: '[三码_组三]',
                                    tips: '从0-9中任意选择2个或2个以上号码。',
                                    example: '',
                                    help: '从0-9中选择2个数字组成两注，所选号码与开奖号码相同，且顺序不限，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '组三',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '组六',
                                    shortname: 'sanxzl',
                                    realname: '[三码_组六]',
                                    tips: '从0-9中任意选择3个或3个以上号码。',
                                    example: '',
                                    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '组六',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '混合组选',
                                    shortname: 'sanxhhzx',
                                    realname: '[后三码_混合组选]',
                                    tips: '手动输入号码，至少输入1个三位数号码。',
                                    example: '',
                                    help: '键盘手动输入购买号码，3个数字为一注，开奖号码符合组三或组六均为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '二码',
                rows: [[{
                            title: '后二码　直选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'exzhixfsh',
                                    realname: '[后二码_直选_复式]',
                                    tips: '从十、个位各选一个号码组成一注。',
                                    example: '',
                                    help: '从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '十位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '个位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'exzhixdsh',
                                    realname: '[后二码_直选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码。',
                                    example: '',
                                    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '直选和值',
                                    shortname: 'exzhixhzh',
                                    realname: '[后二码_直选_和值]',
                                    tips: '从0-18中任意选择1个或1个以上的和值号码。',
                                    example: '',
                                    help: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18],
                                                tools: false,
                                                cls: 'hz'
                                            }]
                                    }
                                }]
                        }, {
                            title: '组选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'exzuxfsh',
                                    realname: '[后二码_组选_复式]',
                                    tips: '从0-9中任意选择2个或2个以上号码。',
                                    example: '',
                                    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。',
                                    select: {
                                        layout: [{
                                                title: '组选',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'exzuxdsh',
                                    realname: '[后二码_组选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码。',
                                    example: '',
                                    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。',
                                    textarea: {}
                                }]
                        }], [{
                            title: '前二码　直选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'exzhixfsq',
                                    realname: '[前二码_直选_复式]',
                                    tips: '从百、十位各选一个号码组成一注。',
                                    example: '',
                                    help: '从百位、十位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '百位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '十位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'exzhixdsq',
                                    realname: '[前二码_直选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码。',
                                    example: '',
                                    help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。',
                                    textarea: {}
                                }, {
                                    showname: '直选和值',
                                    shortname: 'exzhixhzq',
                                    realname: '[前二码_直选_和值]',
                                    tips: '从0-18中任意选择1个或1个以上的和值号码。',
                                    example: '',
                                    help: '所选数值等于开奖号码的百位、十位二个数字相加之和，即为中奖。',
                                    select: {
                                        layout: [{
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                                                        18],
                                                tools: false,
                                                cls: 'hz'
                                            }]
                                    }
                                }]
                        }, {
                            title: '组选',
                            columns: [{
                                    showname: '复式',
                                    shortname: 'exzuxfsq',
                                    realname: '[前二码_组选_复式]',
                                    tips: '从0-9中任意选择2个或2个以上号码。',
                                    example: '',
                                    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即中奖。',
                                    select: {
                                        layout: [{
                                                title: '组选',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }, {
                                    showname: '单式',
                                    shortname: 'exzuxdsq',
                                    realname: '[前二码_组选_单式]',
                                    tips: '手动输入号码，至少输入1个两位数号码。',
                                    example: '',
                                    help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，顺序不限，即为中奖。',
                                    textarea: {}
                                }]
                        }]]
            }, {
                title: '定位胆',
                rows: [[{
                            title: '定位胆',
                            columns: [{
                                    showname: '定位胆',
                                    shortname: 'dwd',
                                    realname: '定位胆',
                                    tips: '在百位，十位，个位任意位置上任意选择1个或1个以上号码。',
                                    example: '',
                                    help: '从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '百位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '十位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }, {
                                                title: '个位',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    }
                                }]
                        }]]
            }, {
                title: '不定胆',
                rows: [[{
                            title: '不定胆',
                            columns: [{
                                    showname: '一码不定胆',
                                    shortname: 'yimabdw',
                                    realname: '[不定胆_后三一码]',
                                    tips: '从0-9中任意选择1个以上号码。',
                                    example: '',
                                    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码包含所选号码，即为中奖。',
                                    select: {
                                        layout: [{
                                                title: '不定胆',
                                                balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                tools: true
                                            }]
                                    },
                                    bwd: true
                                }]
                        }]]
            }];
        var getSelectBall = function (playArea) {
            var datasel = [];
            var sb = playArea.find('.balls');
            if (sb && sb.length > 0) {
                $.each(sb, function () {
                    var ball = [];
                    var as = $(this).find('ul > li > a.selected');
                    $.each(as, function () {
                        var val = $(this).attr('data-val');
                        ball.push(val)
                    });
                    datasel.push(ball)
                })
            };
            return datasel
        };
        var getTextareaBall = function (playArea) {
            var datasel = [];
            var textarea = playArea.find('.textarea > textarea');
            if (textarea && textarea.length > 0) {
                var format = textarea.val().replace(/\,|\;|\n|\t/g, ' ');
                var as = format.split(' ');
                $.each(as, function (idx, val) {
                    datasel.push(val)
                })
            };
            return datasel
        };
        var buildSelectPlace = function (playArea, select) {
            $.each(select.layout, function (i, val) {
                var row = $('<div class="row clearfix">');
                if (val.title) {
                    row.append('<div class="label">' + val.title + '</div>')
                }
                if (val.cls) {
                    row.addClass(val.cls)
                };
                var balls = $('<div class="balls">').append('<ul>');
                $.each(val.balls, function (j, ball) {
                    balls.find('ul').append('<li><a data-val="' + ball + '">' + ball + '</a></li>')
                });
                balls.find('ul > li > a').click(function () {
                    if ($(this).hasClass('selected')) {
                        $(this).parent().removeClass('selected');
                        $(this).removeClass('selected')
                    } else {
                        $(this).parent().addClass('selected');
                        $(this).addClass('selected')
                    }
                    PlayOptions.update()
                });
                row.append(balls);
                if (val.tools) {
                    buildBallTools(row, balls)
                }
                playArea.append(row)
            })
        };
        var buildBallTools = function (row, balls) {
            var blist = balls.find('ul > li > a');
            var tools = $('<div class="tools">').append(
                '<ul><li><a data-command="all">全</a></li><li><a data-command="big">大</a></li><li><a data-command="small">小</a></li><li><a data-command="single">单</a></li><li><a data-command="double">双</a></li><li><a data-command="clean">清</a></li></ul>');
            var setSelected = function (els, selected) {
                if (selected) {
                    if (!els.hasClass('selected')) {
                        els.trigger('click')
                    }
                } else {
                    if (els.hasClass('selected')) {
                        els.trigger('click')
                    }
                }
            };
            tools.find('a[data-command="all"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), true)
                })
            });
            tools.find('a[data-command="big"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), false)
                    } else {
                        setSelected($(this), true)
                    }
                })
            });
            tools.find('a[data-command="small"]').click(function () {
                $.each(blist, function (idx) {
                    if (idx < Math.round(blist.length / 2)) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="single"]').click(function () {
                var arr = [1, 3, 5, 7, 9, 11];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="double"]').click(function () {
                var arr = [0, 2, 4, 6, 8, 10];
                $.each(blist, function () {
                    var val = parseInt($(this).attr('data-val'));
                    if ($.inArray(val, arr) != -1) {
                        setSelected($(this), true)
                    } else {
                        setSelected($(this), false)
                    }
                })
            });
            tools.find('a[data-command="clean"]').click(function () {
                $.each(blist, function () {
                    setSelected($(this), false)
                })
            });
            row.append(tools)
        };
        var buildTextareaPlace = function (playArea) {
            var textarea = $('<div class="textarea">').append('<textarea>');
            var help = $('<div class="help">').html('每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。');
            textarea.find('textarea').keyup(function () {
                $(this).val($(this).val().replace(/[；.,。，、|]/g, ' '));
                PlayOptions.update()
            });
            textarea.find('textarea').on('paste', function () {
                var thisarea = $(this);
                setTimeout(function () {
                    thisarea.val(thisarea.val().replace(/[；.,。，、|]/g, ' '));
                    PlayOptions.update()
                }, 10)
            });
            playArea.append(textarea);
            playArea.append(help)
        };
        var PlayArea = function () {
            var data = function () {
                var playArea = $('.lottery-betting .lottery-opearation > .play-area');
                var datasel = [];
                var balls = getSelectBall(playArea);
                var textarea = getTextareaBall(playArea);
                return datasel.concat(balls).concat(textarea)
            };
            var reset = function () {
                var playList = $('.lottery-betting .lottery-opearation > .play-list');
                playList.find('[data-method="' + $bData.method + '"]').trigger('click')
            };
            return {
                data: data,
                reset: reset
            }
        }();
        var buildPlayOptions = function (playOptions) {
            playOptions.append(['<div class="part-one">',
                    '<div class="label">您共选择了 <span class="text-money" data-field="num">0</span> 注</div>',
                    '<div class="label">共计 <span class="text-money" data-field="total">0.000</span> 元</div>', '</div>']
                .join(''));
            playOptions.append(['<div class="part-two">', '<div class="label">模式</div>',
                    '<div class="model"><a data-val="yuan">元</a><a data-val="jiao">角</a><a data-val="fen">分</a><a data-val="li">厘</a></div>',
                    '<div class="label">倍数</div>',
                    '<div class="multiple"><input name="multiple" type="text" value="1"></div>', '</div>'].join(''));
            var bDataModel = 'yuan';
            if ($.cookie('USER_BDATA_MODEL')) {
                bDataModel = $.cookie('USER_BDATA_MODEL')
            }
            playOptions.find('.model > a[data-val="' + bDataModel + '"]').addClass('selected');
            var multiple = playOptions.find('.multiple > input');
            multiple.keyup(function () {
                if ($(this).val() == '') return;
                var val = $(this).val();
                if (/^[0-9]*$/.test(val)) {
                    val = Number(val);
                    if (val > 10000) $(this).val(10000);
                    if (val < 1) $(this).val(1);
                    PlayOptions.update()
                } else {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            multiple.keydown(function (e) {
                if (e.keyCode == 38 || e.keyCode == 40) {
                    if ($(this).val() == '') return;
                    var val = Number($(this).val());
                    if (!isNaN(val)) {
                        if (e.keyCode == 38) val++;
                        if (e.keyCode == 40) val--;
                        if (val > 10000) val = 10000;
                        if (val < 1) val = 1;
                        $(this).val(val)
                    }
                }
            });
            multiple.blur(function () {
                if ($(this).val() == '') {
                    $(this).val(1);
                    PlayOptions.update()
                }
            });
            var fenModel = function () {
                if ($FenDownCode > 0) {
                    var thisCode = $SysCode - $FenDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '分模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var liModel = function () {
                if ($LiDownCode > 0) {
                    var thisCode = $SysCode - $LiDownCode;
                    if ($UserCode > thisCode) {
                        $UserMaxCode = thisCode - $DownCode;
                        App.alert('info', '提示消息', '厘模式最高为' + $UserMaxCode + '。', 3000)
                    }
                }
            };
            var defaultModel = function () {
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $SysCode - $UserLp * 20
            };
            var update = function (model) {
                if (model == 'fen') {
                    fenModel()
                } else if (model == 'li') {
                    liModel()
                } else {
                    defaultModel()
                }
            };
            var models = playOptions.find('.model > a');
            models.click(function () {
                if (!$(this).hasClass('selected')) {
                    models.removeClass('selected');
                    $(this).addClass('selected');
                    var model = $(this).attr('data-val');
                    update(model);
                    AdjustPrize.slider();
                    AdjustPrize.update();
                    PlayOptions.update();
                    var expires = new Date(moment().startOf('year').add(1, 'years'));
                    $.cookie('USER_BDATA_MODEL', model, {
                        expires: expires,
                        path: '/'
                    })
                }
            });
            update(bDataModel)
        };
        var PlayOptions = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-options')
            };
            var multiple = function () {
                return Number(els().find('.multiple > input').val())
            };
            var model = function () {
                var val = els().find('.model > a.selected').attr('data-val');
                if (val == 'yuan') {
                    return {
                        val: val,
                        money: 1
                    }
                }
                if (val == 'jiao') {
                    return {
                        val: val,
                        money: 0.1
                    }
                }
                if (val == 'fen') {
                    return {
                        val: val,
                        money: 0.01
                    }
                }
                if (val == 'li') {
                    return {
                        val: val,
                        money: 0.001
                    }
                }
            };
            var update = function () {
                var sumstr = LotteryUtils.inputFormat($('.play-list .selected').data('method'), PlayArea.data());
                $('.ks_btn').attr('summary', (sumstr.length < 20 ? sumstr : (sumstr.substring(0, 20) + '...')));
                var num = LotteryUtils.inputNumbers($bData.method, PlayArea.data());
                var total = multiple() * num * $SysUnitMoney * model().money;
                els().find('[data-field="num"]').html(num);
                els().find('[data-field="total"]').html(total.toFixed(3));
                $('#lottery .totaldeal').html(num);
                $('#lottery .totaldealtime').html('x' + multiple());
                $('#lottery .totaldealamount').html(total.toFixed(3));
                var gainnumber = Number(parseFloat($('[data-field="prize"]').html() * multiple()) - total.toFixed(3)).toFixed(
                    3);
                (num > 0) ? $('#lottery .totalgain').html(gainnumber) : $('#lottery .totalgain').html('0.000');
                if (parseInt(num, 10) > 0) {
                    $('.btn[data-command="add"]').addClass('active')
                } else {
                    $('.btn[data-command="add"]').removeClass('active')
                }
            };
            return {
                els: els,
                multiple: multiple,
                model: model,
                update: update
            }
        }();
        var buildAdjustPrize = function (adjustPrize, column) {
            var start = $UserMaxCode;
            if ($.cookie('USER_BDATA_CODE')) {
                var bCode = $.cookie('USER_BDATA_CODE');
                if (!isNaN(bCode)) {
                    if (bCode > $UserMaxCode) {
                        start = $UserMaxCode
                    } else if (bCode < $UserMinCode) {
                        start = $UserMinCode
                    } else {
                        start = bCode
                    }
                }
            }
            adjustPrize.empty();
            var nownick_code = $('#lottery #topltname').attr('nick');
            if (localStorage.getItem(nownick_code + '_code') != null) {
                start = parseInt(localStorage.getItem(nownick_code + '_code'), 10)
            }
            adjustPrize.append([
                    '<div>奖金调节：<label class="rf"><span data-field="code">0</span> / <span data-field="point">0.0</span>%</label></div>',
                    '<div class="slider"></div>',
                    '<div class="range-slider-customed"><input type="range" class="betrate" min="', $UserMinCode,
                    '" max="', $UserMaxCode, '" value="', start, '" step="2"></div>', ''].join(''));
            var slider = adjustPrize.find('.slider');
            var nowbrate = adjustPrize.find('.betrate');
            nowbrate.off('change').on('change', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            }).off('input').on('input', function () {
                var nownick = $('#lottery #topltname').attr('nick');
                localStorage.setItem(nownick + '_code', nowbrate.val());
                update(nowbrate.val())
            });
            var lc = GameData.getConfig();
            if (parseInt($UserMaxCode, 10) > parseInt(lc.maxBetCode, 10)) {
                $UserMaxCode = parseInt(lc.maxBetCode, 10)
            }
            slider.noUiSlider({
                connect: 'lower',
                behaviour: 'snap',
                step: 2,
                start: start,
                range: {
                    'max': $UserMaxCode,
                    'min': $UserMinCode
                }
            });
            if ($UserMaxCode == $UserMinCode) {
                slider.attr('disabled', 'disabled')
            } else {
                slider.removeAttr('disabled')
            };
            var update = function (code) {
                var point = $UserLp - ((code - $UserMinCode) / 20.0).toFixed(1);
                adjustPrize.find('[data-field="code"]').html(code);
                adjustPrize.find('[data-field="point"]').html(point.toFixed(1));
                AdjustPrize.update()
            };
            var onSet = function () {
                var code = Number(slider.val());
                update(code);
                var expires = new Date(moment().startOf('year').add(1, 'years'));
                $.cookie('USER_BDATA_CODE', code, {
                    expires: expires,
                    path: '/'
                })
            };
            var onSlide = function () {
                var code = Number(slider.val());
                update(code)
            };
            slider.on({
                set: onSet,
                slide: onSlide
            });
            update(start)
        };
        var PlayHelp = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .play-help')
            };
            var update = function (t) {
                els().find('[data-field="prize"]').html(t)
            };
            return {
                els: els,
                update: update
            }
        }();
        var AdjustPrize = function () {
            var els = function () {
                return $('.lottery-betting .lottery-opearation > .adjust-prize')
            };
            var code = function () {
                return Number(els().find('[data-field="code"]').html())
            };
            var point = function () {
                return Number(els().find('[data-field="point"]').html())
            };
            var slider = function () {
                els().find('.slider').noUiSlider({
                    range: {
                        'max': $UserMaxCode,
                        'min': $UserMinCode
                    }
                }, true)
            };
            var update = function () {
                var method = $Method[$bData.method];
                var model = PlayOptions.model();
                var mMoney = PlayOptions.model().money;
                if (method) {
                    var ps = method.bonus.split(',');
                    var psx = Number(method.x);
                    var t = [];
                    $('[data-command="chase"]').attr('code', $UserMinCode);
                    for (var i = 0, j = ps.length; i < j; i++) {
                        var percent = Number(ps[i]) / $UserMinCode;
                        var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * ($SysUnitMoney / 2);
                        t.push(pm)
                    }
                    t.sort(function (a, b) {
                        return Number(a) > Number(b) ? 1 : -1
                    });
                    if (t.length == 1) {
                        t[0] = t[0] * model.money;
                        PlayHelp.update(t[0].toFixed(3))
                    } else {
                        t[0] = t[0] * model.money;
                        t[t.length - 1] = t[t.length - 1] * model.money;
                        PlayHelp.update(t[0].toFixed(3) + ' ~ ' + t[t.length - 1].toFixed(3))
                    }
                }
            };
            return {
                els: els,
                code: code,
                point: point,
                update: update,
                slider: slider
            }
        }();
        var addCallback = [];
        var addToList = function (callback, finalcall) {
            var issue = $('[data-field="global-expect"]').html();
            var method = $bData.method;
            var compress = $bData.compress;
            var datasel = PlayArea.data();
            var num = LotteryUtils.inputNumbers(method, datasel);
            var content = LotteryUtils.inputFormat(method, datasel);
            var code = AdjustPrize.code();
            var point = AdjustPrize.point();
            var multiple = PlayOptions.multiple();
            var model = PlayOptions.model().val;
            var total = multiple * num * $SysUnitMoney * PlayOptions.model().money;
            if (num == 0) {
                App.alert('info', '提示消息', '您还没有选择号码或所选号码不全！', 3000);
                return false
            };
            var _method = $Method[method];
            if (num <= _method.oooNums) {
                App.confirm('question', '温馨提示', '您所投注内容属于单挑玩法，最高奖金为' + _method.oooBonus + '元，确认继续投注？', 0, '确认', '取消', function () {
                    LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, null);
                    PlayArea.reset()
                })
            } else {
                LotteryRecord.add(issue, method, compress, content, num, multiple, model, code, point, total, callback);
                PlayArea.reset();
                if (typeof finalcall == 'function') {
                    finalcall()
                }
            }
        };
        var LotteryRecord = function () {
            var els = function () {
                return $('.lottery-record')
            };
            var name = function (method) {
                var method = $Method[method];
                return '[' + method.name + ']'
            };
            var format = function (content) {
                if (content.length > 16) {
                    content = content.substring(0, 16) + '…<a data-command="details">[详细]'
                };
                return content
            };
            var add = function (issue, method, compress, content, num, multiple, model, code, point, total, isAll,
                callback) {
                var tbody = els().find('.list table > tbody');
                var tr = $('<tr>');
                var mobilebasket = ['<li>', '<div class="row clearfix">',
                        '<div class="col-15"><em class="m_ico"></em></div>', '<div class="col-70">',
                        '<h3>5,6,7,8,9</h3>', '<span>五星直选复式 1注 元 2.1% 5倍 10元</span>', '</div>',
                        '<div class="col-15"><em class="m_ico"></em></div>', '</div>', '</li>'].join('');
                BasketLtChoose.push({
                    'm': name(method),
                    'c': content,
                    'num': num,
                    'model': model,
                    'multiple': multiple,
                    'p': point.toFixed(1),
                    't': total.toFixed(3)
                });
                $('#basket .basketitems').append(mobilebasket);
                tr.append('<td class="content">' + name(method) + format(content) + '</td>');
                tr.append('<td class="num">' + num + '注</td>');
                tr.append('<td class="multiple">' + multiple + '倍</td>');
                tr.append('<td class="point">' + point.toFixed(1) + '%</td>');
                tr.append('<td class="total">' + total.toFixed(3) + '元</td>');
                tr.append('<td class="btn"><a data-command="del">删除</a></td>');
                tr.find('a[data-command="del"]').click(function () {
                    var idx = tbody.find('tr').index(tr);
                    ArrayUtil.remove($bList, idx);
                    tr.remove()
                });
                tbody.append(tr);
                if (compress === true && num >= 1000) {
                    App.blockUI({
                        target: els(),
                        boxed: true,
                        message: '超大注数处理中...'
                    });
                    LZMA.compress(content, 3, function (result) {
                        App.unblockUI(els());
                        if (result === false) {
                            return App.alert('info', '消息提示', '号码添加失败，请重试！', 3000)
                        }
                        content = LZMAUtil.toHex(result);
                        $bList.push({
                            lottery: $Lottery,
                            issue: issue,
                            content: content,
                            num: num,
                            method: method,
                            multiple: multiple,
                            model: model,
                            code: code,
                            compress: true
                        });
                        if ($.isFunction(callback)) callback();
                        for (var i = 0; i < addCallback.length; i++) {
                            if ($.isFunction(addCallback[i])) {
                                addCallback[i]()
                            }
                        }
                    })
                } else {
                    $bList.push({
                        lottery: $Lottery,
                        issue: issue,
                        content: content,
                        num: num,
                        method: method,
                        multiple: multiple,
                        model: model,
                        code: code,
                        compress: false
                    });
                    if ($.isFunction(callback)) callback();
                    for (var i = 0; i < addCallback.length; i++) {
                        if ($.isFunction(addCallback[i])) {
                            addCallback[i]()
                        }
                    }
                }
            };
            var clear = function () {
                els().find('.list table > tbody').empty();
                $bList = []
            };
            var isInit = false;
            var init = function () {
                isInit = true;
                App.initScroll();
                var button = els().find('.button');
                button.find('[data-command="add"]').off('click').click(function () {
                    addToList()
                });
                button.find('[data-command="submit"]').off('click').click(function () {
                    App.confirm('question', '确认消息', ['<div class="myconfirm">你确认加入第' + $(
                            '.ltp .lottery-open-info [data-field="global-expect"]').text() + '期？<br>', '总注数：', ($(
                            '.total-inner [data-field="sum-num"]').text() == '0' ? $('.text-money[data-field="num"]').text() :
                            $('.total-inner [data-field="sum-num"]').text()), '<br>', '订单笔数：1<br>', '是否追号：否<br>',
                            '投注总额：', ($('.total-inner [data-field="sum-money"]').text() == '0.000' ? $(
                            '.text-money[data-field="total"]').text() : $('.total-inner [data-field="sum-money"]').text()),
                            '元</div>', '<div class="cftip aboutmax">温馨提示：本期最高奖金限额100000元，请会员谨慎投注！</div>'].join(''), 0,
                        '确定', '取消', function () {
                        if ($bList.length > 0) {
                            doSubmit()
                        } else {
                            addToList(function () {
                                doSubmit()
                            }, function () {
                                doSubmit()
                            })
                        }
                    })
                });
                button.find('[data-command="clear"]').off('click').click(function () {
                    clear()
                });
                button.find('[data-command="chase"]').off('click').click(function () {
                    LotteryChase.init()
                })
            };
            return {
                init: init,
                add: add,
                clear: clear
            }
        }();
        var initDocument = function () {
            $('.lottery-betting .lottery-opearation').empty();
            var main = $('.lottery-betting .lottery-opearation');
            var playGroups = $('<div class="play-groups">').append('<ul>');
            var playList = $('<div class="play-list">');
            var playHelp = $('<div class="play-help">');
            var playArea = $('<div class="play-area">');
            var adjustPrize = $('<div class="adjust-prize">');
            var playOptions = $('<div class="play-options clearfix">');
            var zutypech = {
                "三码": "三码组态"
            };
            var zutypemethod = function (textkey) {
                var chkdtwuxin = function (str) {
                    var ar = str.split(',');
                    if (str == null) {
                        return ''
                    }
                    if (hasDuplicates(ar, 0)) {
                        return '组120'
                    }
                    if (hasDuplicates(ar, 1)) {
                        return '组60'
                    }
                    if (hasDuplicates(ar, 2)) {
                        return '组30'
                    }
                    if (hasDuplicates(ar, 2)) {
                        return '组20'
                    }
                    if (hasDuplicates(ar, 3)) {
                        return '组10'
                    }
                    if (hasDuplicates(ar, 3)) {
                        return '组5'
                    };
                    return '组120'
                };
                var chkdtsixin = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var ar = str.split(',');
                    ar = _.takeRight(ar, 4);
                    if (str == null) {
                        return ''
                    }
                    if (hasDuplicates(ar, 0)) {
                        return '组24'
                    }
                    if (hasDuplicates(ar, 1)) {
                        return '组12'
                    }
                    if (hasDuplicates(ar, 2)) {
                        return '组6'
                    }
                    if (hasDuplicates(ar, 2)) {
                        return '组4'
                    };
                    return '组24'
                };
                var chksan1 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.take(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return '组三'
                    };
                    return '组六'
                };
                var chksan2 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.takeRight(allno, 4);
                    allno = _.take(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return '组三'
                    };
                    return '组六'
                };
                var chksan3 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.takeRight(allno, 3);
                    if (hasDuplicates(allno, 1)) {
                        return '组三'
                    };
                    return '组六'
                };
                var chktwo = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.takeRight(allno, 2);
                    return eval(allno.join("+"))
                };
                var chktwo1 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.take(allno, 2);
                    return eval(allno.join("+"))
                };
                var chkthree = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.take(allno, 3);
                    return eval(allno.join("+"))
                };
                var chkthree1 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.takeRight(allno, 4);
                    allno = _.take(allno, 3);
                    return eval(allno.join("+"))
                };
                var chkthree2 = function (str) {
                    if (str == null) {
                        return ''
                    };
                    var allno = str.split(',');
                    allno = _.takeRight(allno, 3);
                    return eval(allno.join("+"))
                };
                if (textkey == "三码") {
                    return chksan1
                }
                if (textkey == "和值") {
                    return chkthree
                };
                return undefined
            };
            var hasDuplicates = function (a, len) {
                return _.uniq(a).length !== a.length && (a.length - _.uniq(a).length == len)
            };
            var initPlayGroups = function (index) {
                playGroups.find('ul').empty();
                $.each(Layout, function (i, group) {
                    if ($.inArray(group.title.substring(0, 3), GameData.getMethodList()) > -1) {
                        var thisGroup = $('<li>').append('<a>' + group.title + '</a>');
                        thisGroup.find('a').off('click').click(function () {
                            if (!$(this).hasClass('selected')) {
                                playGroups.find('li > a.selected').removeClass('selected');
                                $(this).addClass('selected');
                                var topmname = $(this).text();
                                $('#topltname i#mtopname').attr('top', topmname).html('-' + topmname);
                                if (zutypech[$(this).text()] != null) {
                                    $('.lottery-open-list .code').removeClass('expand');
                                    $('.lottery-open-list .title .zutype').html(zutypech[$(this).text()]).show();
                                    $('.lottery-open-list .list .zutype').show()
                                } else {
                                    $('.lottery-open-list .code').addClass('expand');
                                    $('.lottery-open-list .title .zutype').html('').hide();
                                    $('.lottery-open-list .list .zutype').hide()
                                };
                                var nowmethod = zutypemethod(topmname);
                                $('.lottery-open-list .list .zutype').each(function (i, el) {
                                    if (typeof nowmethod != 'undefined') {
                                        $(el).html(nowmethod($(el).attr('rel')))
                                    }
                                });
                                initPlayList(group.rows)
                            }
                        });
                        playGroups.find('ul').append(thisGroup)
                    }
                });
                playGroups.find('ul > li > a').eq(index).trigger('click')
            };
            var initPlayList = function (list) {
                playList.empty();
                $.each(list, function (i, rows) {
                    var thisRow = $('<div class="row clearfix">');
                    $.each(rows, function (j, row) {
                        thisRow.append('<div class="label">' + row.title + '</div>');
                        $.each(row.columns, function (k, column) {
                            if ($.inArray(column.shortname, GameData.getMethods()) > -1) {
                                var thisColumn = $('<div class="column">').attr('data-method', column.shortname).html(
                                    column.showname);
                                thisColumn.off('click').click(function () {
                                    if (!$(this).hasClass('selected')) {
                                        playList.find('.row > .column').removeClass('selected');
                                        $(this).addClass('selected')
                                    };
                                    var nowtag = $(this).text();
                                    var topindex = $('#lottery .play-groups a.selected').parent().index();
                                    var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                                    localStorage.setItem(nowltid + '_m', topindex + '|' + $(this).data('method'));
                                    $('#topltname i#mtopname').html('-' + (typeof $('#topltname i#mtopname').attr('top') !=
                                        'undefined' ? $('#topltname i#mtopname').attr('top') : '') + nowtag);
                                    var subtype;
                                    if (String(nowtag).indexOf('和值') > -1) {
                                        subtype = String($(this).siblings('.label').first().text()).replace('星　直选', '')
                                            .replace('直选', '').replace('组选', '');
                                        if (subtype == '') {
                                            subtype = '和值'
                                        }
                                        if (subtype == '三码') {
                                            subtype = subtype + '和值'
                                        }
                                        $('.lottery-open-list .code').removeClass('expand');
                                        $('.lottery-open-list .title .zutype').html(nowtag).show();
                                        $('.lottery-open-list .list .zutype').show()
                                    } else {
                                        sectype = String($(this).siblings('.label').first().text()).replace('星　直选', '')
                                            .replace('直选', '').replace('组选', '');
                                        subtype = playGroups.find('li > a.selected').text();
                                        if (subtype != sectype && sectype != '') {
                                            subtype = sectype
                                        }
                                        if (typeof zutypech[subtype] != 'undefined') {
                                            $('.lottery-open-list .title .zutype').html(zutypech[subtype]).show()
                                        }
                                    };
                                    var nowmethod = zutypemethod(subtype);
                                    $('.lottery-open-list .list .zutype').each(function (i, el) {
                                        if (typeof nowmethod != 'undefined') {
                                            $(el).html(nowmethod($(el).attr('rel')))
                                        }
                                    });
                                    $bData.method = column.shortname;
                                    $bData.compress = column.compress;
                                    buildPlayHelp(column);
                                    buildPlayArea(column);
                                    buildAdjustPrize(adjustPrize, column);
                                    PlayOptions.update()
                                });
                                thisRow.append(thisColumn)
                            }
                        })
                    });
                    playList.append(thisRow)
                });
                var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
                if (localStorage.getItem(nowltid + '_m') != null) {
                    var tcss = localStorage.getItem(nowltid + '_m').split('|');
                    if (tcss.length > 1 && playList.find('.row > .column[data-method="' + tcss[1] + '"]').size() > 0) {
                        playList.find('.row > .column[data-method="' + tcss[1] + '"]').trigger('click')
                    } else {
                        playList.find('.row > .column').eq(0).trigger('click')
                    }
                } else {
                    playList.find('.row > .column').eq(0).trigger('click')
                }
                $('#popup .secmethod').html($('.ltp .lottery-opearation .play-list').html());
                if (typeof refreshigh != 'undefined') {
                    refreshigh()
                }
            };
            var buildPlayHelp = function (column) {
                playHelp.empty();
                playHelp.append('<div class="tips"><i></i><span class="label">玩法提示：</span>' + column.tips + '</div>');
                playHelp.append(
                    '<div class="prize"><a data-popover=".popover-about" class="open-popover lf">玩法说明</a><i></i>当前玩法奖金<span data-field="prize">0.00</span>元</div>');
                playHelp.append('<div class="help-info"><i class="arrow"></i><div class="example">' + column.example +
                    '</div><div class="help">' + column.help + '</div></div>');
                $('#method-tip p').html(column.example + '<br>' + column.help);
                var show = function (els, target) {
                    var top = $(els).position().top;
                    var left = $(els).position().left;
                    playHelp.find(target).css({
                        top: top + 32,
                        left: left
                    }).show()
                };
                var hide = function (target) {
                    playHelp.find(target).hide()
                };
                playHelp.find('.tips > i').hover(function () {
                    show(this, '.help-info')
                }, function () {
                    hide('.help-info')
                })
            };
            var buildPlayArea = function (column) {
                playArea.empty();
                if (column.select) {
                    buildSelectPlace(playArea, column.select)
                }
                if (column.textarea) {
                    buildTextareaPlace(playArea, column.textarea)
                }
            };
            buildPlayOptions(playOptions);
            main.append(playGroups);
            main.append(playList);
            main.append(playHelp);
            main.append(playArea);
            main.append(adjustPrize);
            main.append(playOptions);
            var nowltid = parseInt($('#lottery #topltname').attr('rel'), 10);
            if (localStorage.getItem(nowltid + '_m') != null) {
                var tcs = localStorage.getItem(nowltid + '_m').split('|');
                if (tcs.length > 1) {
                    initPlayGroups(parseInt(tcs[0], 10))
                } else {
                    initPlayGroups(0)
                }
            } else {
                initPlayGroups(0)
            }
            LotteryRecord.init()
        };
        var init = function (data) {
            if (data) {
                $Lottery = data.lottery;
                $LotteryName = data.lotteryName;
                $DownCode = data.downCode;
                $FenDownCode = data.fenDownCode;
                $LiDownCode = data.liDownCode;
                $Method = data.method;
                $SysCode = data.sysCode;
                $SysUnitMoney = data.sysUnitMoney;
                $UserCode = data.userCode;
                $UserLp = data.userLp;
                $UserMaxCode = $UserCode - $DownCode;
                $UserMinCode = $UserCode - $UserLp * 20
            }
            initDocument();
            LotteryRecord.clear()
        };
        var isLoading = false;
        var doSubmit = function () {
            var thisContent = $('.lottery-record');
            if (!isLoading) {
                if ($bList.length == 0) {
                    return App.alert('info', '提示消息', '投注列表没有订单！', 3000)
                };
                var list = [];
                $.each($bList, function (i, v) {
                    list.push({
                        lottery: v.lottery,
                        issue: v.issue,
                        method: v.method,
                        content: v.content,
                        model: v.model,
                        multiple: v.multiple,
                        code: v.code,
                        compress: v.compress
                    })
                });
                var data = {
                    text: $.toJSON(list)
                };
                GameLotteryCtrl.addOrder({
                    data: data,
                    beforeSend: function () {
                        isLoading = true;
                        App.blockUI({
                            target: thisContent,
                            boxed: true
                        })
                    },
                    success: function (response) {
                        if (response.error == 0) {
                            isLoading = false;
                            App.unblockUI(thisContent);
                            LotteryRecord.clear();
                            BasketLtChoose = [];
                            $("#cleanbaketnow").click();
                            App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                            $('#lottery #ltbalbox').click();
                            $('[data-field="lotteryBalance"]').html(response.data);
                            if (typeof RecordList != 'undefined') {
                                RecordList.init()
                            }
                        }
                        if (response.error == 1) {
                            if ('116-05' == response.code) {
                                setTimeout(function () {
                                    isLoading = false;
                                    App.unblockUI(thisContent);
                                    App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。')
                                }, 10000)
                            } else if ('116-06' == response.code) {
                                window.location.href = 'http://game991.hbs991.com/js/game/lottery/index.html'
                            } else {
                                isLoading = false;
                                App.unblockUI(thisContent);
                                if (response.message != '该用户已被冻结') {
                                    App.alert('warning', '提示消息', response.message)
                                } else {
                                    App.alert('normal', '提示消息', '<div class="cm">正在提交，请稍等</div>', 30000, '', function () {}, function () {
                                        App.alert('warning', '提示消息', '投注失败，请注意核对：网络超时')
                                    })
                                }
                            }
                        }
                    }
                })
            }
        };
        return {
            init: init,
            getConfig: function () {
                return {
                    lottery: $Lottery,
                    lotteryName: $LotteryName,
                    downCode: $DownCode,
                    fenDownCode: $FenDownCode,
                    liDownCode: $LiDownCode,
                    method: $Method,
                    sysCode: $SysCode,
                    sysUnitMoney: $SysUnitMoney,
                    userCode: $UserCode,
                    userLp: $UserLp,
                    userMaxCode: $UserMaxCode,
                    userMinCode: $UserMinCode
                }
            },
            bList: function () {
                return $bList
            },
            clear: function () {
                LotteryRecord.clear()
            },
            addCallback: function (cb) {
                addCallback.push(cb)
            }
        }
    }();
    //var d3_utils = function(){}();
    //var d3_main = function(){}();
 
    return {
        "ssc": {
            'utils': ssc_utils,
            'main': ssc_main
        },
        "kl8": {
            'utils': kl8_utils,
            'main': kl8_main
        },
        "pk10": {
            'utils': pk10_utils,
            'main': pk10_main
        },
        "k3": {
            'utils': k3_utils,
            'main': k3_main
        },
        "11x5": {
            'utils': y11_utils,
            'main': y11_main
        },
        "3d": {
            'utils': d3_utils,
            'main': d3_main
        }
    }
}();
 
var DataFormat = function () {
 
    var formatAmount = function (amount) {
        if (amount < 1) {
            return amount.toFixed(5);
        }
        if (amount < 100) {
            return amount.toFixed(3);
        }
        return amount.toFixed(3);
    }
 
    var formatAccountType = function (code) {
        if (code == 1) {
            return '彩票账户';
        }
        if (code == 2) {
            return '百家乐账户';
        }
    }
 
    var greeting = function () {
        var hour = moment().hour();
        if (hour >= 6 && hour < 11) {
            return '早上好';
        }
        if (hour >= 11 && hour < 13) {
            return '中午好';
        }
        if (hour >= 13 && hour < 19) {
            return '下午好';
        }
        if (hour >= 19 || hour < 6) {
            return '晚上好';
        }
    }
 
    var formatUserType = function (type) {
        if (type == 0) {
            return '玩家';
        }
        if (type == 1) {
            return '代理';
        }
    }
 
    var formatUserVipLevel = function (level) {
        if (level == 0) {
            return '普通会员';
        }
        if (level == 1) {
            return '青铜 VIP';
        }
        if (level == 2) {
            return '紫晶 VIP';
        }
        if (level == 3) {
            return '白金 VIP';
        }
        if (level == 4) {
            return '黄金 VIP';
        }
        if (level == 5) {
            return '钻石 VIP';
        }
        if (level == 6) {
            return '至尊 VIP';
        }
    }
 
    var formatLevelUsers = function (thisUser, list) {
        $.each(list, function (i, val) {
            thisUser += ' > ' + val;
        });
        return thisUser;
    }
 
    var formatUserOnlineStatus = function (status) {
        if (status == 0) {
            return '离线';
        }
        if (status == 1) {
            return '在线';
        }
    }
 
    var formatUserPlanLevel = function (level) {
        if (level == 0) {
            return '菜鸟';
        }
        if (level == 1) {
            return '学徒';
        }
        if (level == 2) {
            return '出师';
        }
        if (level == 3) {
            return '操盘';
        }
        if (level == 4) {
            return '大师';
        }
        if (level == 5) {
            return '宗师';
        }
        if (level == 6) {
            return '大神';
        }
    }
 
    var formatUserCardStatus = function (status) {
        if (status == 0) {
            return '正常';
        }
        if (status == -1) {
            return '资料无效';
        }
        if (status == -2) {
            return '已锁定';
        }
    }
 
    var formatUserRechargeType = function (type) {
        if (type == 0) {
            return '网银充值';
        }
        if (type == 1) {
            return '转账汇款';
        }
        if (type == 3) {
            return '系统充值';
        }
    }
 
    var formatUserRechargeStatus = function (type) {
        if (type == 0) {
            return '成功';
        }
        if (type == 6 || type == 7) {
            return '失败';
        }
        if (type != 0 && type != 6 && type != 7) {
            return '待处理';
        }
    }
 
    var formatUserStatus = function (type) {
        if (!type) {
            return '';
        }
        if (type == 0) {
            return '会员';
        }
        return '代理';
    }
 
    var formatUserWithdrawalsStatus = function (status) {
        /*if(status == 0) {
            return '待处理';
        }
        if(status == 1) {
            return '已完成';
        }
        if(status == -1) {
            return '已拒绝';
        }*/
        if (status == 0) {
            return '成功';
        }
        if (status == 6 || status == 7 || status == 2) {
            return '失败';
        }
        if (status != 0 && status != 6 && status != 7) {
            return '待处理';
        }
    }
 
    var formatUserTransferStatus = function (type) {
        if (type == 0) {
            return '处理中';
        }
        if (type == 1) {
            return '成功';
        }
        if (type == 2) {
            return '失败';
        }
    }
 
    var formatUserBetsModel = function (model) {
        if (model == 'yuan') {
            return '元';
        }
        if (model == 'jiao') {
            return '角';
        }
        if (model == 'fen') {
            return '分';
        }
        if (model == 'li') {
            return '厘';
        }
    }
    //NORMAL(0, "未开奖"), NON_WIN(1, "未中奖"), AWARDED(2, "已派奖"), WAIT_AWARD(3, "等待派奖"), CANCELED(4, "个人撤单"), CANCELD_SYSTEM(
    //5, "系统撤单"), ORDER_REFUND(6, "已退款"), WIN(7, "已中奖"), UNKNOWN(8, "异常状态");
    var formatUserBetsStatus = function (status) {
        if (status == 0) {
            return '未开奖';
        }
        if (status == 1) {
            return '未中奖';
        }
        if (status == 2) {
            return '已派奖';
        }
        if (status == 3) {
            return '等待派奖';
        }
        if (status == 4) {
            return '个人撤单';
        }
        if (status == 5) {
            return '系统撤单';
        }
        if (status == 6) {
            return '已退款';
        }
        if (status == 7) {
            return '已中奖';
        }
        if (status == 8) {
            return '异常状态';
        }
        return '异常状态';
    }
 
    var formatUserChaseStatus = function (status) {
        if (status == 0) {
            return '未开始';
        }
        if (status == 1) {
            return '进行中';
        }
        if (status == 2) {
            return '已完成';
        }
        if (status == -1) {
            return '已撤单';
        }
    }
 
    var formatUserBillType = function (code) {
        if (code == 1000) {
            return '存款';
        }
        if (code == 1001) {
            return '取款';
        }
        if (code == 1002) {
            return '取款退回';
        }
        if (code == 1100) {
            return '转入';
        }
        if (code == 1101) {
            return '转出'
        }
        if (code == 1102) {
            return '上下级转账';
        }
        if (code == 1200) {
            return '优惠活动';
        }
        if (code == 1300) {
            return '消费';
        }
        if (code == 1301) {
            return '派奖';
        }
        if (code == 1302) {
            return '消费返点';
        }
        if (code == 1303) {
            return '取消订单';
        }
        if (code == 1400) {
            return '代理返点';
        }
        if (code == 1500) {
            return '分红';
        }
        if (code == 1600) {
            return '管理员增';
        }
        if (code == 1601) {
            return '管理员减';
        }
        if (code == 1700) {
            return '积分兑换';
        }
        if (code == 1800) {
            return '支付佣金';
        }
        if (code == 1801) {
            return '获得佣金';
        }
        if (code == 1900) {
            return '会员返水';
        }
    }
 
    var formatUserMessageType = function (type) {
        if (type == 0) {
            return '建议反馈';
        }
        if (type == 1) {
            return '已收消息';
        }
        if (type == 2) {
            return '已发消息';
        }
    }
 
    var formatUserMessageStatus = function (status, type) {
        if (status == 0) {
            return '正常';
        }
        if (status == 1) {
            return '已读';
        }
        if (status == -1) {
            return '已删除';
        }
    }
 
    var formatUserSysMessageType = function (type) {
        if (type == 0) {
            return '系统通知';
        }
        if (type == 1) {
            return '到账通知';
        }
        if (type == 2) {
            return '提现通知';
        }
    }
 
    var formatLotteryPaymentThridType = function (type) {
        if (type == 'ips') {
            return '环讯支付';
        }
        if (type == 'baofoo') {
            return '宝付支付';
        }
        if (type == 'newpay') {
            return '新生支付';
        }
        if (type == 'ecpss') {
            return '汇潮支付';
        }
        if (type == 'yeepay') {
            return '易宝支付';
        }
        if (type == 'mobao') {
            return '摩宝支付';
        }
        if (type == 'gopay') {
            return '国付宝支付';
        }
        if (type == 'pay41') {
            return '通汇支付';
        }
    }
 
    return {
        formatAmount: formatAmount,
        formatAccountType: formatAccountType,
        greeting: greeting,
        // 用户类型
        formatUserType: formatUserType,
        // 用户 VIP等级
        formatUserVipLevel: formatUserVipLevel,
        // 用户层级关系
        formatLevelUsers: formatLevelUsers,
        // 用户在线状态
        formatUserOnlineStatus: formatUserOnlineStatus,
        // 计划等级
        formatUserPlanLevel: formatUserPlanLevel,
        // 用户银行卡状态
        formatUserCardStatus: formatUserCardStatus,
        // 充值类型
        formatUserRechargeType: formatUserRechargeType,
        // 取款状态
        formatUserWithdrawalsStatus: formatUserWithdrawalsStatus,
        // 账户转账状态
        formatUserTransferStatus: formatUserTransferStatus,
        // 投注模式
        formatUserBetsModel: formatUserBetsModel,
        // 订单状态
        formatUserBetsStatus: formatUserBetsStatus,
        // 账单类别
        formatUserBillType: formatUserBillType,
        // 消息类型
        formatUserMessageType: formatUserMessageType,
        // 消息状态
        formatUserMessageStatus: formatUserMessageStatus,
        // 系统消息类型
        formatUserSysMessageType: formatUserSysMessageType,
        // 第三方支付类别
        formatLotteryPaymentThridType: formatLotteryPaymentThridType,
        formatUserChaseStatus: formatUserChaseStatus,
        //充值状态
        formatUserRechargeStatus: formatUserRechargeStatus,
        formatUserStatus: formatUserStatus
    }
}();
 
/**
 * 路由器设置
 */
var Route = {
    //DOMAIN:"https://glzszy.com",
    //DOMAIN:"http://phone.caihong788.com",
    //DOMAIN:"http://192.168.0.101",
    DOMAIN: "",
    ROOTPATH: "/yx",
    PATH: "/yx/u/api",
    // 用户登录
    LOGIN: "/login",
    // 用户退出
    LOGOUT: "/logout",
    Account: {
        PATH: "/account",
        // 列出完整的用户信息
        LIST_FULL_INFO: "/list-full-info",
        // 检查用户名是否存在
        CHECK_USERNAME_EXIST: "/check-username-exist",
        // 修改用户昵称
        MODIFY_NICKNAME: "/modify-nickname",
        // 修改用户密码
        MODIFY_PASSWORD: "/modify-password",
        // 修改头像
        MODIFY_AVATAR: "/modify-avatar",
        // 修改用户资金密码
        MODIFY_WITHDRAW_PASSWORD: "/modify-withdraw-password",
        // 准备绑定
        PREPARE_BIND: "/prepare-bind",
        // 请求绑定
        APPLY_BIND: "/apply-bind",
        // 列出卡片
        LIST_CARD: "/list-card",
        // 准备绑定卡片
        PREPARE_BIND_CARD: "/prepare-bind-card",
        // 绑定卡片
        BIND_CARD: "/bind-card",
        // 设置默认卡片
        SET_DEFAULT_CARD: "/set-default-card",
        // 获取随机密保问题
        GET_RANDOM_SECURITY: "/get-random-security",
        // 绑定密保问题
        BIND_SECURITY: "/bind-security",
        // 搜索账单
        SEARCH_BILL: "/search-bill",
        // 获取账单详情
        GET_BILL_DETAILS: "/get-bill-details",
        // 搜索充值
        SEARCH_RECHARGE: "/search-recharge",
        // 准备提现
        PREPARE_WITHDRAW: "/prepare-withdraw",
        // 提现申请
        APPLY_WITHDRAW: "/apply-withdraw",
        // 搜索提现
        SEARCH_WITHDRAW: "/search-withdraw",
        // 同账户转账
        APPLY_SELF_TRANSFER: "/apply-self-transfer",
        // 上下级转账
        APPLY_ACCOUNT_TRANSFER: "/apply-account-transfer",
        // 彩票账户报表
        REPORT_GAME_LOTTERY: "/report-game-lottery",
        // 百家乐账户报表
        REPORT_GAME_BACCARAT: "/report-game-baccarat",
        // 获取消息列表
        LIST_MESSAGE: "/list-message",
        // 获取消息详情
        GET_MESSAGE_DETAILS: "/get-message-details",
        // 发送消息
        SEND_MESSAGE: "/send-message",
        // 读取消息
        READ_MESSAGE: "/read-message",
        // 删除消息
        DELETE_MESSAGE: "/delete-message",
        // 列出系统消息
        LIST_SYSTEM_MESSAGE: "/list-system-message",
        // 清空系统消息
        CLEAR_SYSTEM_MESSAGE: "/clear-system-message",
    },
    Agent: {
        PATH: "/agent",
        // 添加新的用户
        ADD_NEW_ACCOUNT: "/add-new-account",
        // 列出来账号配额
        LIST_CODE_QUOTA: "/list-code-quota",
        // 列出来团队账号
        LIST_TEAM_ACCOUNT: "/list-team-account",
        // 列出在线用户
        LIST_ONLINE_ACCOUNT: "/list-online-account",
        // 搜索彩票游戏订单
        SEARCH_GAME_LOTTERY_ORDER: "/search-game-lottery-order",
        // 搜索账户账单
        SEARCH_ACCOUNT_BILL: "/search-account-bill",
        // 彩票账户报表
        REPORT_GAME_LOTTERY: "/report-game-lottery",
        // 百家乐账户报表
        REPORT_GAME_BACCARAT: "/report-game-baccarat"
    },
    GameLottery: {
        PATH: "/game-lottery",
        // 彩票游戏信息
        STATIC_INFO: "/static-info",
        // 彩票游戏追号时间
        STATIC_CHASE_TIME: "/static-chase-time",
        // 彩票游戏开奖号码
        STATIC_OPEN_CODE: "/static-open-code",
        // 彩票游戏开奖时间
        STATIC_OPEN_TIME: "/static-open-time",
        // 添加订单
        ADD_ORDER: "/add-order",
        // 撤销订单
        CANCEL_ORDER: "/cancel-order",
        // 获取订单
        GET_ORDER: "/get-order",
        // 搜索订单
        SEARCH_ORDER: "/search-order",
        // 拉取开奖通知
        PULL_OPEN_NOTICE: "/pull-open-notice"
    },
    GameBaccarat: {
        PATH: "/game-baccarat",
    },
    Payment: {
        PATH: "/payment",
        // 列出银行
        STATIC_LIST_BANK: "/static-list-bank",
        // 列出所有可用支付方式
        REQUEST_ALL_METHOD: "/request-all-method",
        // 请求第三方支付
        REQUEST_THRID_PAY: "/request-thrid-pay",
    },
    System: {
        PATH: "/system",
        // 列出系统公告
        LIST_NOTICE: "/list-notice",
        // 获取公告详情
        GET_NOTICE_DETAILS: "/get-notice-details",
    },
    WebAjax: {
        PATH: "/game-lottery",
        // 初始化页面
        INIT_PAGE: "/init-page",
        // 循环
        LOOP: "/loop",
        // 初始化彩票页面
        INIT_GAME_LOTTERY: "/init-game-lottery",
    }
};
 
/**
 * HTTP请求
 */
var HttpRequest = function (options) {
    var defaults = {
        type: 'post',
        data: {},
        dataType: 'json',
        async: true,
        cache: false,
        beforeSend: null,
        success: null,
        complete: null
    };
    var o = $.extend({}, defaults, options);
    $.ajax({
        type: 'post',
        url: o.url,
        data: o.data,
        dataType: 'json',
        async: o.async,
        timeout: 10000,
        beforeSend: function () {
            o.beforeSend && o.beforeSend();
        },
        error: function (xhr, textStatus, errorThrown) {
            //console.log(xhr,textStatus,errorThrown);
            if (typeof f7 != 'undefined') {
                if (String(textStatus).indexOf('parse') == -1 && String(textStatus) != 'error') {
                    f7.alert('提交失败[' + textStatus + ']', '提示：');
                }
                if (String(textStatus).indexOf('timeout') > -1) {
                    f7.alert('接口超时，请重试', '提示：');
                }
                //f7.alert('提交失败['+textStatus+']', '提示：');
            }
            if (typeof App != 'undefined' && typeof App.unblockUI != 'undefined') {
                App.unblockUI($('.mainlottery'));
            }
            if (typeof mui != 'undefined' && String(textStatus).indexOf('timeout') == -1) {
                mui.back();
                mui.openWindow({
                    id: 'HBuilder',
                    url: 'index.html'
                });
            }
        },
        success: function (response) {
            o.success && o.success(response);
        },
        complete: function () {
            o.complete && o.complete();
        }
    });
};
 
var MainCtrl = function () {
 
    /**
     * 登录方法
     */
    var login = function (options) {
        //options.url = Route.PATH + Route.LOGIN;
        options.url = Route.DOMAIN + "/sso/login";
        HttpRequest(options);
    };
 
    /**
     * 退出方法
     */
    var logout = function (options) {
        options.url = "/sso/logout";
        HttpRequest(options);
    };
 
    return {
        login: login,
        logout: logout
    }
 
}();
 
var AccountCtrl = function () {
 
    var thisScope = 'Account';
 
    var getScopeUrl = function (key) {
        return Route.DOMAIN + Route.PATH + Route[thisScope].PATH + Route[thisScope][key];
    }
 
    /**
     * 修改密码方法
     */
    var modifyPassword = function (options) {
        options.url = getScopeUrl('MODIFY_PASSWORD');
        HttpRequest(options);
    }
 
    return {
        modifyPassword: modifyPassword
    }
 
}();
 
var GameLotteryCtrl = function () {
 
    var thisScope = 'GameLottery';
 
    var getScopeUrl = function (key) {
        return Route.DOMAIN + Route.PATH + Route[thisScope].PATH + Route[thisScope][key];
    }
 
    /**
     * 获取彩票游戏开奖号码
     */
    var staticOpenCode = function (options) {
        options.url = getScopeUrl('STATIC_OPEN_CODE');
        HttpRequest(options);
    }
 
    /**
     * 获取彩票游戏开奖时间
     */
    var staticOpenTime = function (options) {
        options.url = getScopeUrl('STATIC_OPEN_TIME');
        HttpRequest(options);
    }
 
    /**
     * 投注方法
     */
    var addOrder = function (options) {
        options.url = getScopeUrl('ADD_ORDER');
        HttpRequest(options);
    }
 
    var pullOpenNotice = function (options) {
        options.url = getScopeUrl('PULL_OPEN_NOTICE');
        HttpRequest(options);
    }
 
    return {
        staticOpenCode: staticOpenCode,
        staticOpenTime: staticOpenTime,
        addOrder: addOrder,
        pullOpenNotice: pullOpenNotice
    }
 
}();
 
var PaymentCtrl = function () {
 
    var thisScope = 'Payment';
 
    var getScopeUrl = function (key) {
        return Route.DOMAIN + Route.PATH + Route[thisScope].PATH + Route[thisScope][key];
    }
 
    var requestAllMethod = function (options) {
        options.url = getScopeUrl('REQUEST_ALL_METHOD');
        //console.log(options);
 
        HttpRequest(options);
    }
 
    var requestThridPay = function (options) {
        options.url = getScopeUrl('REQUEST_THRID_PAY');
        HttpRequest(options);
    }
 
    return {
        requestAllMethod: requestAllMethod,
        requestThridPay: requestThridPay
    }
 
}();
 
/**
 * 数据工厂
 */
var AppData = function () {
 
    var isLogin = false; // 是否登录
    var mainAccount; // 主账户
    var lotteryAccount; // 彩票账户
    var baccaratAccount; // 百家乐账户
    var info; // 信息
    var msgCount;
 
    var init = function (options) {
        if (options === undefined) {
            options = {};
        }
        var callbackinit;
        if (arguments.length > 1) {
            callbackinit = arguments[1];
        }
        options.url = Route.DOMAIN + Route.ROOTPATH + Route.WebAjax.PATH + Route.WebAjax.INIT_PAGE;
        options.async = false;
        options.success = function (response) {
            AppDataInitData = response;
            if (response.error == 0) {
                var data = response.data;
                isLogin = data.isLogin;
                if (isLogin) {
                    mainAccount = data.main;
                    lotteryAccount = data.lottery;
                    info = data.info;
                    msgCount = data.msgCount;
                }
                //console.log(mainAccount.type=='0');
                if (typeof mainAccount != 'undefined') {
                    if (mainAccount.type == '0') {
                        $('#agent-top-nav').hide()
                    } else {
                        $('#agent-top-nav').show()
                    }
                }
 
                if (typeof callbackinit != 'undefined') {
                    callbackinit(data);
                }
 
                setTimeout(function () {
                    if (typeof lotteryAccount != 'undefined') {
                        if (parseInt(lotteryAccount.code, 10) < 1701) {
                            $('a[data-dk-dropdown-value="91"]').parent().remove();
                            $('#bonuspage').remove();
                        } else {
                            $('#bonuspage').show();
                        }
                    }
                }, 1000);
            }
        };
        HttpRequest(options);
    };
 
    return {
        init: init,
        isLogin: function () {
            return isLogin;
        },
        getMainAccount: function () {
            return mainAccount;
        },
        getLotteryAccount: function () {
            return lotteryAccount;
        },
        getBaccaratAccount: function () {
            return baccaratAccount;
        },
        getInfo: function () {
            return info;
        },
        getMsgCount: function () {
            return msgCount;
        }
    }
 
}();
 
/**
 * 循环请求
 */
var AppLoop = function () {
 
    var loop = [];
    var callback = [];
 
    var init = function () {
        function timeout() {
            var options = {
 
            }
            options.data = {
                //loop: $.toJSON(loop)
                loop: JSON.stringify(loop)
            }
            options.url = Route.DOMAIN + Route.PATH + Route.WebAjax.LOOP;
            options.success = function (response) {
                if (response.error == 0) {
                    $('[data-field="lotteryBalance"]').html(response.data.lotteryBalance);
                    $('[data-field="baccaratBalance"]').html(response.data.baccaratBalance);
                    $('#will-sum01').html(response.data.lotteryBalance);
                    $('[data-field="msgCount"]').html(response.data.msgCount);
                    for (var i = 0; i < callback.length; i++) {
                        if ($.isFunction(callback[i])) {
                            callback[i](response.data);
                        }
                    }
                }
            };
            HttpRequest(options);
            setTimeout(timeout, 30000)
        }
        timeout();
    }
 
    var push = function (data, cb) {
        loop.push(data);
        callback.push(cb);
    }
 
    return {
        init: init,
        push: push
    }
 
}();
 
//这个页面放所有公共的JS
(function ($) {
    $.pagination = function (options) {
        var language = $.extend({}, $.pagination.language, options.language);
        var opts = $.extend({}, $.pagination.defaults, options);
        var render = $(opts.render);
        var page = 1,
            size = opts.pageSize;
        var load = function () {
            var data = opts.ajaxData;
            if ($.isFunction(data)) {
                data = data();
            }
            data = $.extend({}, data, {
                page: (page - 1),
                size: size
            });
            $.ajax({
                type: opts.ajaxType,
                url: opts.ajaxUrl,
                data: data,
                dataType: 'json',
                beforeSend: opts.beforeSend,
                complete: opts.complete,
                success: function (response) {
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message);
                            setTimeout(function () {
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
        var update = function (totalCount) {
            if (totalCount == 0) return;
            var pageCount = Math.ceil(totalCount / size);
            var pagination = $('<div class="easyweb-pagination">');
            var infos = $('<div class="infos">');
            infos.append(language.infos.replace('${currPage}', '<span class="p">' + page + '</span>').replace(
                '${totalPage}', '<span class="p">' + pageCount + '</span>').replace('${start}', '<span class="s">' + ((
                page - 1) * size + 1) + '</span>').replace('${end}', '<span class="e">' + (page * size > totalCount ?
                totalCount : page * size) + '</span>').replace('${total}', '<span class="t">' + totalCount + '</span>'));
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
            pages.find('.page').click(function () {
                var idx = $(this).html();
                idx = parseInt(idx);
                if (idx != page) {
                    page = idx;
                    load();
                }
            });
            pages.find('.top').click(function () {
                if (page > 1) {
                    page = 1;
                    load();
                }
            });
            pages.find('.prev').click(function () {
                if (page > 1) {
                    page--;
                    load();
                }
            });
            pages.find('.end').click(function () {
                if (page < pageCount) {
                    page = pageCount;
                    load();
                }
            });
            pages.find('.next').click(function () {
                if (page < pageCount) {
                    page++;
                    load();
                }
            });
            var go = $('<div class="go">').append($('<input type="text" />').val(page)).append($('<a class="btn-go">').html(
                language.go));
            go.find('.btn-go').click(function () {
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
        var init = function () {
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
        beforeSend: function () {},
        complete: function () {},
        success: function (list) {},
        pageError: function (response) {
            alert(response.message);
        },
        emptyData: function () {
 
        }
    };
})(jQuery);
 
//轮播插件，不过只有fade的效果
(function ($) {
    $.fn.BannerLoop = function (options) {
        var defaults = {
            focus: true,
            delay: 3000
        }
        var opts = $.extend({}, defaults, options);
        $(this).each(function () {
            var items = $(this).find('.list > .item');
            var loop = $(this).find('.loop');
            if (items.length <= 1) return;
            var index = 0;
            var show = function () {
                $.each(items, function (i) {
                    if ($(this).is(':visible')) {
                        $(this).stop().fadeOut(1500).removeClass('active');
                    }
                    if (i == index) {
                        $(this).stop().fadeIn(1500);
                    }
                });
                setLoop();
            }
            var setLoop = function () {
                loop.find('a').removeClass('active').eq(index).addClass('active');
            }
            var initLoop = function () {
                $.each(items, function (i) {
                    if (i == 0) {
                        loop.append('<a class="active"></a>');
                    } else {
                        loop.append('<a></a>');
                    }
                });
                loop.find('a').each(function (i) {
                    $(this).click(function () {
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
            var start = function () {
                timer = setInterval(function () {
                    if (index == items.length - 1) {
                        index = 0;
                    } else {
                        index++;
                    }
                    show(index);
                }, opts.delay);
            }
            var stop = function () {
                if (timer) clearInterval(timer);
            }
            start();
            if (opts.focus) {
                $(this).hover(stop, start);
            }
        });
    }
})(jQuery);
 
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var QueryString = function () {
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
 
 
var App = function () {
 
    var getGlobalImgPath = function () {
        return '/img';
    }
 
    var location = function () {
        return window.location.protocol + '//' + window.location.host;
    }
 
    var initScroll = function (el) {
        if (!el) el = '.scroller';
        $(el).each(function () {
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
    var destroyScroll = function (el) {
        $(el).each(function () {
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
                $.each(attrList, function (key, value) {
                    the.attr(key, value);
                });
            }
        });
    }
    var blockUI = function (options) {
        options = $.extend(true, {}, options);
        var html = '';
        if (options.animate) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' +
                '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' +
                '</div>';
        } else if (options.iconOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') +
                '"><span class="preloader"></span></div>';
        } else if (options.textOnly) {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') +
                '"><span>  ' + (options.message ? options.message : 'LOADING...') + '</span></div>';
        } else {
            html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') +
                '"><span class="preloader"></span><span>  ' + (options.message ? options.message : '正在加载中...') +
                '</span></div>';
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
    var unblockUI = function (target) {
        if (target.length > 0) {
            $(target).unblock({
                onUnblock: function () {
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
    var getUrl = function (key, isHash) {
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
    var getHash = function (key) {
        return getUrl(key, 1);
    }
    var confirm = function (type, title, content, autoClose, button1, button2, fn1, fn2) {
        if (title == undefined) title = '确认消息';
        if (autoClose == undefined) autoClose = 0;
        if (button1 == undefined) {
            button1 = '确定<i class="icon ok"></i>';
        }
        if (button2 == undefined) {
            button2 = '取消<i class="icon close"></i>';
        }
        if (fn1 == undefined) fn1 = function () {};
        if (fn2 == undefined) fn2 = function () {};
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
        var initp = {
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
            addClass: 'common-confirm',
            zIndex: 20000,
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
                this.destroy();
                box = undefined;
            }
        };
        ////console.log(initp,'initpinitpinitp');
        var box = new jBox('Confirm', initp);
        if (autoClose && autoClose != 0) {
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }
 
    var confirmWide = function (type, title, content, autoClose, button1, button2, fn1, fn2) {
        if (title == undefined) title = '确认消息';
        if (autoClose == undefined) autoClose = 0;
        if (button1 == undefined) {
            button1 = '确定<i class="icon ok"></i>';
        }
        if (button2 == undefined) {
            button2 = '取消<i class="icon close"></i>';
        }
        if (fn1 == undefined) fn1 = function () {};
        if (fn2 == undefined) fn2 = function () {};
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
        var initp = {
            title: title,
            content: content,
            confirmButton: button1,
            cancelButton: button2,
            overlay: true,
            width: '80%',
            blockScroll: false,
            closeOnClick: false,
            closeButton: 'title',
            confirm: fn1,
            cancel: fn2,
            addClass: 'common-confirm',
            zIndex: 20000,
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
                this.destroy();
                box = undefined;
            }
        };
        //console.log(initp,'initpinitpinitp');
        var box = new jBox('Confirm', initp);
        if (autoClose && autoClose != 0) {
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }
    var alert = function (type, title, content, autoClose, button, fn, callback) {
        if (title == undefined) title = '提示消息';
        if (autoClose == undefined) autoClose = 0;
        if (button == undefined) {
            button = '关闭<i class="icon close"></i>';
        }
        if (fn == undefined) fn = function () {}
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
            addClass: 'common-alert',
            zIndex: 20000,
            onInit: function () {
                this.open();
            },
            onCloseComplete: function () {
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
            setTimeout(function () {
                if (box) box.close();
            }, autoClose);
        }
    }
    var notice = function (content, autoClose) {
        if (autoClose == undefined) autoClose = 3000;
        var noticeBox = new jBox('Notice', {
            content: content,
            autoClose: autoClose,
            addClass: 'common-notice'
        });
    }
    var tips = function (title, content, autoClose) {
        $('.message-tips').remove();
        var messageTips = $('<div class="message-tips">');
        messageTips.append('<div class="title">' + title + '</div>');
        messageTips.append('<div class="content">' + content + '</div>');
        $('body').append(messageTips);
        var width = messageTips.width();
        var height = messageTips.height();
        var winWidth = $(window).width();
        messageTips.css({
            bottom: -height,
            right: ((winWidth - 1050) / 2 - width) / 2
        }).stop().animate({
            bottom: 202
        }, 1000, 'easeOutExpo');
        if (autoClose) {
            setTimeout(function () {
                messageTips.stop().animate({
                    bottom: -height,
                }, 1000, 'easeOutExpo', function () {
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
        confirmWide: confirmWide,
        alert: alert,
        notice: notice,
        tips: tips
    }
}();
 
 
 
/**
 * 用户系统消息
 */
var UserSysMessage = function () {
 
    var idArray = [];
    var els = function () {
        return $('.sys-message-list');
    }
 
    // 更新方法
    var update = function (ids) {
        Will.ajax({
            ids: ids
        }, Route.DOMAIN + Route.PATH + '/account/clear-system-message', function (data) {});
    }
 
    // 播放声音
    var audio = function () {
        if ($('.set-voice').find('.msg').hasClass('audio-on')) {
            $('audio#sys-message').remove();
            var audio = $('<audio id="sys-message" autoplay="autoplay">');
            audio.attr('src', '/audio/message.mp3').hide();
            $('body').append(audio);
        }
    }
 
    // 显示效果
    var show = function () {
        if (els().is(':hidden')) {
            var height = els().height();
            els().show().css({
                bottom: -height
            }).stop().animate({
                bottom: 0
            }, 1000, 'easeOutExpo');
        }
    }
 
    // 隐藏效果
    var hide = function () {
        els().hide();
    }
 
    // 有新的消息
    var lastTime = '';
 
    var cleanHtml = function (str) {
        return $("<span />", {
            html: str
        }).text()
        //return str.replace('</div><div>','')
    }
    var add = function (data) {
        var count = 0;
        if (data && data.length > 0) {
            $.each(data, function (i, val) {
                if (lastTime && lastTime >= val.time) {
                    return;
                }
                var item =
                    '<div class="item"><a href="/yx/hbs/manager-message.html#page=0" target="_blank">\
                    <div class="title">\
                        <span class="type">' +
                    DataFormat.formatUserSysMessageType(val.type) + '</span>\
                        <span class="time">' + moment(val.time)
                    .format('HH:mm:ss') + '</span>\
                    </a></div>\
                    <div class="text">' + cleanHtml(val.content) +
                    '</div>\
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
    var init = function () {
        if (!AppData.isLogin()) return;
        var mList = $('<div class="sys-message-list">');
        mList.append('<div class="title">通知列表<a class="clear">清空</a></div>');
        mList.append(
            '<div class="wrapper"><div class="scroller" data-handle-color="#aaa" data-handle-distance="2px"><div class="list"></div></div></div>');
        mList.find('.clear').click(function () {
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
            taglink.map(function (k, el) {
                if (typeof $(el).data('name') != 'undefined') {
                    allname.push($(el).text());
                }
            });
            var coder = {}
            $.ajax({
                type: 'post',
                url: Route.DOMAIN + Route.PATH + '/game-lottery/openLotterys',
                timeout: 10000,
                dataType: 'json',
                success: function (res) {
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
                    //console.log(LotteryMain,'LotteryMain');
                    if (typeof LotteryMain != 'undefined' && $.inArray(String(LotteryMain.getConfig().lottery).toUpperCase(),
                        allok) == -1) {
                        App.alert('info', '提示消息', '该彩种停售  <a href="/yx/home">返回首页</a>', 0,
                            '关闭<i class="icon close"></i>', function () {
                            location.href = '/yx/home';
                        }, function () {
                            location.href = '/yx/home';
                        });
                    }
                    //剔除导航停售彩种
                    $('.lottery_menu ol li').each(function (i, el) {
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
                    $('.gameport ol li').each(function (i, el) {
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
 
    var start = function () {
        Will.ajax({}, Route.DOMAIN + Route.PATH + '/account/list-system-message', function (data) {
            add(data);
            //console.log(data,'sys');
        });
 
        setTimeout(start, 60000);
    }
 
    return {
        init: init,
        add: add
    }
 
}();
 
var load = function (name) {
    $.ajaxSetup({
        async: false
    });
    //$(".bar").load("/bar.html")
    if (arguments.length == 1) $('.' + name).load('/include-' + name + '.html');
    if (arguments.length == 2) arguments[0].load(arguments[1]);
    $.ajaxSetup({
        async: true
    });
}
 
//各种通用的函数
var Will = function () {
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
 
        if (callback) {
            addHashChange(callback);
        }
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        manager.each(function (idx, ele) {
            if (!$(ele).hasClass('fixed') && !$(ele).hasClass('disabled')) {
                $(ele).attr('href', '#page=' + idx);
            }
        });
        var hindex = App.getHash('page');
        //console.log(callback,callback==null,hindex);
        if ($(".manager .nav > a:eq(" + hindex + ")").hasClass('disabled')) {
            //console.log($(".manager .nav > a:not(.disabled)").first().attr('href'));
            window.location.hash = $(".manager .nav > a:not(.disabled)").first().attr('href');
        }
        var change = function () {
            var index = App.getHash('page');
 
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
        var change = function () {
            if (window.location.hash == '' || !App.getHash('refresh')) return;
            var index = App.getHash('page');
            if (index) {
                $(".manager .nav > a").eq(index).click();
                //          }else{
                if ($.isFunction(callback)) callback();
            }
        };
        //      change();
        window.onhashchange = change;
    }
    //manager五个页面的tab切换 deprecated
 
    function tabs(initPages) {
        var manager = $(".manager .nav > a");
        var content = $('[data-init="content"]');
        var index = App.getHash('page');
        manager.each(function (idx, ele) {
            if (idx == 2) $(ele).attr('href', '#page=' + idx + '&refresh=1');
            else $(ele).attr('href', '#page=' + idx);
        });
        manager.click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var i = $(this).index();
            content.eq(i).show();
            content.eq(index).siblings('[data-init="content"]').hide();
            //           if(!$(this).data('initialized')) {
            //              initPages[i]=initPages[i]();
            initPages[i]();
            //              $(this).data('initialized',true);
            //           }
        }).eq((index ? index : 0)).click();
    };
 
    //分页插件的封装
 
    function page(thisContent, data, url, emptyInfo, successCallback) {
        var thisContent = thisContent;
        //      var params = thisContent.find('.params');
        var thisResultTable = thisContent.find('.result > table');
        if (thisContent.find('.result').size() > 1) {
            thisResultTable = thisContent.find('.result:eq(1) > table');
        }
        var searching = url + '/searching';
        //      !thisContent.data(searching)
        var pagination = $.pagination({
            render: thisContent.find('.page-list'),
            pageSize: 10,
            ajaxType: (typeof data.posttype != 'undefined' ? data.posttype : 'post'),
            ajaxUrl: url,
            ajaxData: data,
            beforeSend: function () {
                thisContent.data(searching, true);
                App.blockUI({
                    target: thisContent,
                    boxed: true
                });
            },
            complete: function () {
                thisContent.data(searching, false);
                App.unblockUI(thisContent);
            },
            success: function (list) {
                successCallback(list);
            },
            pageError: function (response) {
                thisContent.data(searching, false);
            },
            emptyData: function () {
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
                success: function (response) {
                    datadom.data(loading, false);
                    App.unblockUI(thisContent);
                    if ((typeof (response.error) == "undefined")) { //没有error,code,message的返回情况
                        if ($.isFunction(successCallback)) successCallback(response);
                        return;
                    }
                    if (response.error != 0) {
                        if (response.code == '0-1' || response.code == '0-4') {
                            if (window.location.pathname == "/index.html") return;
                            App.alert('warning', '提示消息', response.message, 5000);
                            setTimeout(function () {
                                var domain = window.location.protocol + '//' + window.location.host;
                                window.location.href = domain + '/index.html';
                            }, 3000);
                            return;
                        } else {
                            if (String(url).indexOf('zj-bonus') > -1) {
                                App.alert('warning', '提示消息', (response.message == '服务异常' ? '分红未配置' : response.message),
                                    5000);
                            } else {
                                App.alert('warning', '提示消息', (response.message != '' ? response.message : '失败，原因未知'),
                                    5000);
                            }
                            if (String(window.location.pathname).indexOf('manager-finance') > -1) {
                                setTimeout(function () {
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
                error: function () {
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
                animation: {
                    open: 'zoomIn'
                },
                closeButton: 'title',
                draggable: 'title',
                content: content,
                addClass: (clz ? clz : 'common-modal grey'),
                onInit: function () {
                    this.open();
                    //              initEvent(thisContent, callback);
                    if ($.isFunction(onInitCallback)) onInitCallback(this);
                    App.initScroll();
                },
                onCloseComplete: function () {
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
var loadLottery = function (callback) {
    Will.ajax({}, Route.DOMAIN + Route.PATH + '/game-lottery/static-info', function (data, response) {
        if ($.isFunction(callback)) {
            callback(data);
        }
    });
}
 
/**
 * 初始化日期控件
 */
var initDatePicker = function () {
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
    $('.d-range-picker').each(function () {
        var opens = $(this).attr('data-time-opens');
        opts.opens = opens ? opens : 'left';
        var init = $(this).attr('data-time-init');
        if (init) {
            if (init > 0) {
                $(this).val(moment().format('YYYY-MM-DD') + ' 至 ' + moment().add(init, 'days').format('YYYY-MM-DD'));
            } else {
                $(this).val(moment().add(init, 'days').format('YYYY-MM-DD') + ' 至 ' + moment().add(1, 'days').format(
                    'YYYY-MM-DD'));
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
var initTabs = function () {
    $('.tabs').each(function () {
        var tabs = $(this).find('a');
        var panels = $(this).parent().find('.panels > .section');
        tabs.each(function (i) {
            $(this).click(function () {
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
var compt = function () {
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
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(
            10, f - e));
    }
    return {
        add: add,
        sub: sub,
        mul: mul,
        div: div
    }
}();
 
var disableRightClick = function () {
    $(this).contextmenu(function () {
        return false;
    });
    $(this).mousedown(function (e) {
        if (e.button == 2) return false;
    });
}
 
var showOrNotShow = function () {
    if (!AppData.isLogin()) {
        $('#login-form').show();
        $('#will-user-info').hide();
        return false;
    } else {
        $('#login-form').hide();
        $('#will-user-info').show();
        // 隐藏或显示代理账户
        if (AppData.getMainAccount().type == 0) {
            $('[data-visible="proxy"]').hide();
            $('#agtmenulink').remove();
        } else {
            $('[data-visible="proxy"]').show();
        }
    }
}
 
var kefu = function () {
    //在线客服弹出框
    $('a[data-command="kefu"]').each(function () {
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
 
var getLeftSec = function (a) {
    typeof Api != 'undefined' && Api.getCommon('getFavGame', {
        t: new Date().getTime()
    }, function (res) {
        //console.log(res);
        var ltall = ['<li class="title">常玩彩种</li>'],
            allres = res.data;
        var allopenid = [];
        for (i = 0; i < allres.length; i++) {
            if (String(allres[i].lotteryName).indexOf('微信') == -1 && allres[i].lotteryId != '113') {
                allopenid.push(allres[i].lotteryId)
                ltall.push('<li class="mylt_' + allres[i].lotteryId + ' normal' + (i == 0 ? ' first' : '') +
                    '"><a href="/yx/hbs/lottery/' + allres[i].lotteryId +
                    '.html" target="_self"><div class="lt-choose"><h3>' + allres[i].lotteryName + '</h3><span id="tc_' +
                    allres[i].lotteryId + '" data-left="' + allres[i].surplusTime +
                    '" class="lt-countdown">00:00</span></div></a></li>')
            }
        }
        ltall.push(
            '<li class="end"><div class="lt-choose-sets"><a href="#" data-position="center" data-toggle="modal" data-target="#saveMy">设置</a></div></li>')
        if (a == null) {
            $('.lottery-navs ul').html(ltall.join(''));
        } else {
            $('.lottery-navs .lt-countdown').eq(a).data('left', allres[a].surplusTime);
            //console.log(a,'not need all reload',allres[a].surplusTime);
        }
        $('.lottery-navs ul').data('open', allopenid);
        if (typeof GameData !== 'undefined') {
            var ginfo = GameData.getInfo();
            if ($('.mylt_' + ginfo.id).size() > 0) {
                $('.mylt_' + ginfo.id).addClass('on')
            }
        }
    });
}
 
var getViewport = function () {
    var viewPortWidth;
    var viewPortHeight;
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
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
 
 
var ArrayUtil = function () {
 
    // 组合数
    var ComNum = function (n, m) {
        m = parseInt(m);
        n = parseInt(n);
        if (m < 0 || n < 0) {
            return false;
        }
        if (m == 0 || n == 0) {
            return 1;
        }
        if (m > n) {
            return 0;
        }
        if (m > n / 2.0) {
            m = n - m;
        }
        var result = 0.0;
        for (var i = n; i >= (n - m + 1); i--) {
            result += Math.log(i);
        }
        for (var i = m; i >= 1; i--) {
            result -= Math.log(i);
        }
        result = Math.exp(result);
        return Math.round(result);
    }
 
    // 组合值
    var ComVal = function (source, m, x) {
        var n = source.length;
        var list = [];
        var start = 0;
        while (m > 0) {
            if (m == 1) {
                list.push(source[start + x]);
                break;
            }
            for (var i = 0; i <= n - m; i++) {
                var cnm = ComNum(n - 1 - i, m - 1);
                if (x <= cnm - 1) {
                    list.push(source[start + i]);
                    start = start + (i + 1);
                    n = n - (i + 1);
                    m--;
                    break;
                } else {
                    x = x - cnm;
                }
            }
        }
        return list;
    }
 
    // 判断是否存在
    var inArray = function (e, data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] == e) return true;
        }
        return false;
    }
 
    // 数组去重复
    var uniquelize = function (data) {
        var array = new Array();
        for (var i = 0; i < data.length; i++) {
            if (!inArray(data[i], array)) {
                array.push(data[i]);
            }
        }
        return array;
    }
 
    //求两个集合的并集
    var union = function (a, b) {
        return uniquelize(a.concat(b));
    }
 
    //求两个集合的差集
    var minus = function (a, b) {
        var array = new Array();
        var ua = uniquelize(a);
        for (var i = 0; i < ua.length; i++) {
            if (!inArray(ua[i], b)) {
                array.push(ua[i]);
            }
        }
        return array;
    }
 
    //求两个集合的交集
    var intersect = function (a, b) {
        var array = new Array();
        var ua = uniquelize(a);
        for (var i = 0; i < ua.length; i++) {
            if (inArray(ua[i], b)) {
                array.push(ua[i]);
            }
        }
        return array;
    }
 
    //求两个集合的补集
    var complement = function (a, b) {
        return minus(union(a, b), intersect(a, b));
    }
 
    // 去除重复，最快速方法，会排序
    var unique = function (data) {
        data.sort();
        var re = [data[0]];
        for (var i = 1; i < data.length; i++) {
            if (data[i] !== re[re.length - 1]) {
                re.push(data[i]);
            }
        }
        return re;
    }
 
    // 根据下标删除
    var remove = function (data, idx) {
        if (data.length > idx) {
            data.splice(idx, 1);
        }
        return data;
    }
 
    return {
        ComNum: ComNum,
        ComVal: ComVal,
        unique: unique,
        uniquelize: uniquelize,
        intersect: intersect,
        complement: complement,
        remove: remove,
    }
 
}();
 
var LZMAUtil = function () {
 
    var toHex = function (byte_arr) {
        var hex_str = '',
            i, len, tmp_hex;
        len = byte_arr.length;
        for (i = 0; i < len; ++i) {
            if (byte_arr[i] < 0) {
                byte_arr[i] = byte_arr[i] + 256;
            }
            tmp_hex = byte_arr[i].toString(16);
            if (tmp_hex.length === 1) {
                tmp_hex = '0' + tmp_hex;
            }
            hex_str += tmp_hex;
        }
        return hex_str.trim();
    }
 
    return {
        toHex: toHex
    }
 
}();
 
var LotteryChase = function () {
 
    var Config = {};
 
    var els = function () {
        return $('.maintrace');
    }
 
    var TimeList = [];
    var loadExpect = function (count, fn) {
        var url = Route.DOMAIN + Route.PATH + '/game-lottery/static-chase-time';
        var data = {
            name: Config.lottery
        };
        $.ajax({
            type: 'post',
            url: url,
            data: data,
            timeout: 10000,
            dataType: 'json',
            success: function (response) {
                TimeList = response;
                if ($.isFunction(fn)) fn();
            }
        });
    }
 
    /**
     * 计算投注列表信息
     */
    var BListInfo = function () {
        var bList = function () {
            return LotteryMain.bList();
        }
        var money = function (multiple) {
            var amount = 0;
            var list = bList();
            for (var i = 0; i < list.length; i++) {
                var val = list[i];
                amount += multiple * val.num * Config.sysUnitMoney * PrizeUtils.model(val.model).money;
            }
            return amount;
        }
        var cList = function (a) {
            var list = [];
            var thisTable = a.find('.sections').find('table > tbody');
            thisTable.find('tr').each(function () {
                var thisRow = $(this);
                var checkbox = thisRow.find('input[type="checkbox"]');
                var expect = thisRow.find('.expect').html();
                var multiple = Number(thisRow.find('input[type="text"]').val());
                //console.log(checkbox.prop('checked')==true);
                if (checkbox.prop('checked')) {
                    //if(checkbox.is(':checked')) {
                    list.push({
                        expect: expect,
                        multiple: multiple
                    });
                }
            });
            return list;
        }
        return {
            bList: bList,
            cList: cList,
            money: money
        }
    }();
 
    /**
     * 奖金工具
     */
    var PrizeUtils = function () {
        var model = function (val) {
            if (val == 'yuan') {
                return {
                    val: val,
                    money: 1
                };
            }
            if (val == 'jiao') {
                return {
                    val: val,
                    money: 0.1
                };
            }
            if (val == 'fen') {
                return {
                    val: val,
                    money: 0.01
                };
            }
            if (val == 'li') {
                return {
                    val: val,
                    money: 0.001
                };
            }
        }
        var money = function (type, m, code) {
            var method = Config.method[type];
            var mMoney = model(m).money;
            var prize = [];
            if (method) {
                var ps = method.bonus.split(',');
                var psx = Number(method.x);
                for (var i = 0, j = ps.length; i < j; i++) {
                    //var pm = (code / Number(ps[i])) * (Config.sysUnitMoney / 2) * mMoney;
                    var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * (Config.sysUnitMoney /
                        2) * mMoney;
                    prize[i] = pm.toFixed(3);
                }
            }
            return prize;
        }
        var tracesinglemoney = function (type, m, code, mincode) {
            var method = Config.method[type];
            var mMoney = model(m).money;
            var prize = [];
            if (method) {
                var ps = method.bonus.split(',');
                var psx = Number(method.x);
                for (var i = 0, j = ps.length; i < j; i++) {
                    var percent = Number(ps[i]) / mincode;
                    //console.log((code / Number(ps[i])));
                    //var pm = (code / Number(ps[i])) * ps*(Config.sysUnitMoney / 2)*mMoney;
                    var pm = (Number(ps[i]) + ((code() - 1960) / Number(2000)) * Number(psx)) * (Config.sysUnitMoney /
                        2) * mMoney;
                    prize[i] = pm.toFixed(3);
                }
            }
            //console.log(prize,'lastprizeprizeprizeprizeprize');
            return prize;
        }
        return {
            model: model,
            tracesinglemoney: tracesinglemoney,
            money: money
        }
    }();
 
    /**
     * 投注选项
     */
    var Options = function () {
        var update = function () {
            var options = els().find('.options');
            var thisTable = els().find('.sections').find('table > tbody');
            var totalExpect = 0,
                totalMoney = 0;
            //console.log(thisTable,'thisTable');
            thisTable.find('tr').each(function () {
                var thisRow = $(this);
                var checkbox = thisRow.find('input[type="checkbox"]');
                var thisMoney = Number(thisRow.find('.money').html());
                if (checkbox.prop('checked')) {
                    totalExpect++;
                    totalMoney += thisMoney;
                }
            });
            options.find('[data-field="total-expect"]').html(totalExpect);
            $('#autotrace i.totaldeal').html(totalExpect);
            options.find('[data-field="total-money"]').html(totalMoney.toFixed(3));
            $('#autotrace i.totaldealamount').html(totalMoney.toFixed(3));
        }
        var isStop = function () {
            var options = els().find('.options');
            var isStop = options.find('input[name="isStop"]');
            return isStop.is(':checked') ? true : false;
        }
        return {
            update: update,
            isStop: isStop
        };
    }();
 
    /**
     * 计算利润率
     * count 追号期数
     * sMultiple 开始倍数
     * maxMultiple 最大倍投
     * minProfit 最低利润率（百分比）
     * money 单倍金额
     * prize 单倍奖金
     */
    var calculation = function (count, sMultiple, maxMultiple, minProfit, money, prize) {
        var result = []; // 结果
        var totalMoney = 0;
        var multiple = sMultiple;
        console.log(count, 'calculationcalculation');
        for (var i = 0; i < count; i++) {
            var thisMoney = 0;
            var thisPrize = 0;
            var thisProfit = 0;
            while (true) {
                thisMoney = money * multiple;
                thisPrize = prize * multiple;
                var tempTotal = totalMoney + thisMoney;
                thisProfit = (thisPrize - tempTotal) / tempTotal;
                if (thisProfit >= minProfit) break;
                if (multiple > maxMultiple) return result;
                multiple++;
            }
            totalMoney += thisMoney; // 累计投入
            //alert(multiple + '-' + thisMoney + '-' + totalMoney + '-' + thisPrize);
            result.push({
                multiple: multiple,
                thisMoney: thisMoney,
                thisPrize: thisPrize,
                thisProfit: thisProfit
            });
        }
        return result;
    }
 
    var doGenerate = function (a) {
        var tabs = a.find('.tabs');
        var options = a.find('.options');
        var thisTable = a.find('.sections').find('table > tbody');
        var total = Number(options.find('input[name="expect"]').val());
        var index = tabs.find('.active').attr('data-type');
        if (index == 0) {
            // 判断多订单
            if (BListInfo.bList().length > 1) {
                return App.alert('info', '提示消息', '多个订单不支持利润率追号！', 3000);
            }
            var data = BListInfo.bList()[0];
            // 计算单倍奖金
            var usermincode = parseInt($('[data-command="chase"]').attr('code'), 10);
            var prize = PrizeUtils.tracesinglemoney(data.method, data.model, data.code, usermincode);
            //var prize = PrizeUtils.money(data.method, data.model, data.code);
            if (prize.length > 1) {
                return App.alert('info', '提示消息', '该玩法不支持利润率追号！', 3000);
            }
            // 计算单倍投注金额
            var money = data.num * Config.sysUnitMoney * PrizeUtils.model(data.model).money;
            // 获取选项
            var sMultiple = Number(options.find('input[name="sMultiple"]').val());
            var maxMultiple = Number(options.find('input[name="maxMultiple"]').val());
            var minProfit = Number(options.find('input[name="minProfit"]').val());
            minProfit = minProfit / 100; // 变成百分比
            var result = calculation(total, sMultiple, maxMultiple, minProfit, money, prize);
            console.log(result, 'resultresultresult');
            thisTable.empty();
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    if (i > TimeList.length - 1) break;
                    var val = TimeList[i];
                    var multiple = result[i].multiple; // checked="checked"
                    var innerHtml =
                        '<tr>' +
                        '<td class="checkbox" width="10%"><input type="checkbox"></td>' +
                    //'<td class="expect">' + String(val.issue).substr(String(val.issue).length-10,String(val.issue).length) + '</td>'+
                    '<td class="expect">' + val.issue + '</td>' +
                        '<td class="multiple"><input type="text" class="form-control" value="' + multiple + '"> 倍</td>' +
                        '<td class="money" width="30%">' + BListInfo.money(multiple).toFixed(3) + '</td>' +
                    //'<td class="time">' + val.stopTime + '</td>'+
                    '</tr>';
                    thisTable.append(innerHtml);
                }
            } else {
                var innerHtml = '<tr><td>没有符合要求的方案，请调整参数重新计算！</td></tr>';
                thisTable.append(innerHtml);
            }
            thisTable.find('input[type="checkbox"]').prop('checked', true);
            Options.update();
        }
        if (index == 1) {
            var sMultiple = Number(options.find('input[name="sMultiple"]').val());
            thisTable.empty();
            for (var i = 0; i < total; i++) {
                if (i > TimeList.length - 1) break;
                var val = TimeList[i];
                var innerHtml =
                    '<tr>' +
                    '<td class="checkbox" width="10%"><input type="checkbox"></td>' +
                //'<td class="expect">' + String(val.issue).substr(String(val.issue).length-6,String(val.issue).length) + '</td>'+ checked="checked"
                '<td class="expect">' + val.issue + '</td>' +
                    '<td class="multiple"><input type="text" class="form-control" value="' + sMultiple + '"> 倍</td>' +
                    '<td class="money" width="30%">' + BListInfo.money(sMultiple).toFixed(3) + '</td>' +
                //'<td class="time">' + val.stopTime + '</td>'+
                '</tr>';
                thisTable.append(innerHtml);
            }
            thisTable.find('input[type="checkbox"]').prop('checked', true);
            Options.update();
        }
        if (index == 2) {
            var sMultiple = Number(options.find('input[name="sMultiple"]').val());
            var operation = options.find('select[name="operation"]').val();
            var expTimes = Number(options.find('input[name="expTimes"]').val());
            var expMultiple = Number(options.find('input[name="expMultiple"]').val());
            thisTable.empty();
            for (var i = 0; i < total; i++) {
                if (i > TimeList.length - 1) break;
                var val = TimeList[i];
                var multiple = 1;
                if ('x' == operation) {
                    multiple = i < expTimes ? sMultiple : sMultiple * Math.pow(expMultiple, Math.floor(i / expTimes));
                }
                if ('+' == operation) {
                    multiple = i < expTimes ? sMultiple : sMultiple + expMultiple * Math.floor(i / expTimes);
                }
                if (multiple > 10000) return;
                var innerHtml =
                    '<tr>' +
                    '<td class="checkbox"><input type="checkbox"></td>' +
                    '<td class="expect">' + val.issue + '</td>' +
                    '<td class="multiple"><input type="text" class="form-control" value="' + multiple + '"> 倍</td>' +
                    '<td class="money" width="30%">' + BListInfo.money(multiple).toFixed(3) + '</td>' +
                //'<td class="time">' + val.stopTime + '</td>'+ checked="checked"
                '</tr>';
                thisTable.append(innerHtml);
            }
            thisTable.find('input[type="checkbox"]').prop('checked', true);
            Options.update();
        }
        initTableEvent();
    }
 
    var initNormal = function () {
        var options = els().find('.options');
        var thisTable = els().find('.sections').find('table > tbody');
        var total = Number(options.find('input[name="expect"]').val());
        thisTable.empty();
        for (var i = 0; i < total; i++) {
            var val = TimeList[i];
            var innerHtml =
                '<tr>' +
                '<td class="checkbox"><input type="checkbox"></td>' +
                '<td class="expect">' + val.issue + '</td>' +
                '<td class="multiple"><input type="text" class="form-control" value="0" disabled="disabled"> 倍</td>' +
                '<td class="money" width="30%">0.000</td>' +
            //'<td class="time">' + val.stopTime + '</td>'+
            '</tr>';
            thisTable.append(innerHtml);
        }
        initTableEvent();
    }
 
    var initTableEvent = function () {
        //console.log('initTableEventinitTableEvent');
        var thisTable = els().find('.sections').find('table > tbody');
        //console.log(thisTable.find('input[type="checkbox"]'));
        thisTable.find('tr').each(function () {
            var thisRow = $(this);
            var checkbox = thisRow.find('input[type="checkbox"]');
            var multiple = thisRow.find('input[type="text"]');
            var update = function () {
                var val = Number(multiple.val());
                if (isNaN(val)) val = 0;
                thisRow.find('.money').html(BListInfo.money(val).toFixed(3));
                Options.update();
            }
            checkbox.change(function (evt) {
                console.log('checkbox.changecheckbox.change');
                var thischeck = $(this);
                console.log(thischeck.prop('checked'));
                if (!thischeck.prop('checked')) {
                    multiple.attr('bakval', multiple.val()).val(0);
                    multiple.attr('disabled', 'disabled');
                    thischeck.addClass('locked');
                } else {
                    multiple.val(typeof multiple.attr('bakval') != 'undefined' ? parseInt(multiple.attr('bakval'), 10) :
                        1);
                    multiple.removeAttr('disabled');
                    thischeck.removeClass('locked');
                }
                setTimeout(function () {
                    update();
                }, 100)
                /*if (!thischeck.hasClass('locked')) {
          if (thischeck.attr('checked')=='checked') {
            thischeck.attr('checked', false).prop('checked', false);
            multiple.val(1);
            multiple.removeAttr('disabled');
          }else {
            thischeck.attr('checked', true).prop('checked', true);
            multiple.val(0);
            multiple.attr('disabled', 'disabled');
          }
          setTimeout(function() {update();},100)
          thischeck.addClass('locked');
        }else {
          setTimeout(function() {
            thischeck.removeClass('locked');
          },300)
        } */
            });
            multiple.keyup(function () {
                if ($(this).val() == '') return;
                var val = Number($(this).val());
                if (/^[0-9]*$/.test(val)) {
                    if (val > 10000) $(this).val(10000);
                    if (val < 1) $(this).val(1);
                } else {
                    $(this).val(1);
                }
                update();
            });
            multiple.keydown(function (e) {
                if ($(this).val() == '') return;
                var val = Number($(this).val());
                if (!isNaN(val)) {
                    if (e.keyCode == 38) val++;
                    if (e.keyCode == 40) val--;
                    if (val > 10000) val = 10000;
                    if (val < 1) val = 1;
                    $(this).val(val);
                }
            });
        });
    }
 
    var bindNumber = function (els, defval) {
        if (els.length == 0) return;
        els.off('keydown').keydown(function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                if ($(this).val() == '') return;
                var val = Number($(this).val());
                if (!isNaN(val)) {
                    if (e.keyCode == 38) val++;
                    if (e.keyCode == 40) val--;
                    if (val < 0) val = defval;
                    $(this).val(val);
                }
            }
        });
        els.off('keyup').keyup(function () {
            if ($(this).val() == '') return;
            var val = Number($(this).val());
            if (/^[0-9]*$/.test(val)) {
                if (val < 0) $(this).val(1);
            } else {
                $(this).val(defval);
            }
        });
        els.off('blur').blur(function () {
            if ($(this).val() == '') {
                $(this).val(defval);
            }
        });
    }
 
    var initDocEvent = function (a) {
        var tabs = a.find('.tabs');
        var opts = a.find('.options');
        opts.find('.trace_section').hide();
        opts.find('.trace_rate').show();
        tabs.find('a').click(function () {
            var index = $(this).attr('data-type');
            if (!$(this).hasClass('active')) {
                tabs.find('a').removeClass('active');
                $(this).addClass('active');
                $('#autotrace').attr('init', index);
                var indexcls = {
                    '1': 'trace_same',
                    '2': 'trace_double',
                    '0': 'trace_rate'
                };
                opts.find('.trace_section').hide();
                opts.find('section').removeClass('active');
                opts.find('.' + indexcls[index]).show();
                opts.find('section[data-type="' + index + '"]').addClass('active');
            }
        });
 
        opts.find('[data-command="generate"]').click(function () {
            doGenerate(a);
        });
        opts.find('[data-command="submit"]').click(function () {
            var lottery = Config.lottery;
            var blist = BListInfo.bList();
            var clist = BListInfo.cList(a);
            var isStop = Options.isStop();
            //console.log(isStop,'isStopisStopisStop');
            if ($('#autotrace .chkcontinue em.checkright:visible').size() > 0) {
                isStop = true;
            } else {
                isStop = false;
            }
            doSubmit(lottery, blist, clist, isStop);
        });
        // 只能输入数字
        var expect = opts.find('input[name="expect"]');
        var sMultiple = opts.find('input[name="sMultiple"]');
        var maxMultiple = opts.find('input[name="maxMultiple"]');
        var minProfit = opts.find('input[name="minProfit"]');
        var expTimes = opts.find('input[name="expTimes"]');
        var expMultiple = opts.find('input[name="expMultiple"]');
        bindNumber(expect, 1);
        bindNumber(sMultiple, 1);
        bindNumber(maxMultiple, 1);
        bindNumber(minProfit, 1);
        bindNumber(expTimes, 1);
        bindNumber(expMultiple, 1);
    }
 
    // 投注
    var isLoading = false;
    var doSubmit = function (lottery, blist, clist, isStop) {
        if (!isLoading) {
            if (blist.length == 0) {
                return App.alert('info', '提示消息', '投注列表没有订单！', 3000);
            }
            if (clist.length == 0) {
                return App.alert('info', '提示消息', '您没有勾选任何追号计划！', 3000);
            }
            var orderList = [];
            $.each(blist, function (i, v) {
                orderList.push({
                    lottery: v.lottery,
                    method: v.method,
                    content: v.content,
                    model: v.model,
                    code: v.code,
                    compress: v.compress
                });
            });
            var planList = [];
            $.each(clist, function (i, v) {
                planList.push({
                    issue: v.expect,
                    multiple: v.multiple
                });
            });
            var text = {
                orderList: orderList,
                planList: planList,
                winStop: isStop
            }
            var data = {
                text: $.toJSON(text)
            };
            var url = Route.DOMAIN + Route.PATH + '/game-lottery/add-chase';
            isLoading = true;
            var thisContent = els().find('.jBox-content');
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
                success: function (response) {
                    //console.log(response);
                    if (response.error == 0) {
                        f7.alert('您的追号订单已投注成功！', '提示：', function () {
                            f7.closeModal('#autotrace');
                            //console.log('aaaaaaa',$('#basket #cleanbaketnow').size());
                            $('#basket .basketitems').html('');
                            BasketLtChoose = [];
                            $('#addtobasket').attr('rel', 1);
                            jQuery('#basket #cleanbaketnow').click();
                            //console.log($('#basket #cleanbaketnow').click());
                        });
 
                        isLoading = false;
                        App.unblockUI(thisContent);
                        LotteryMain.clear();
                        BasketLtChoose = [];
                        $("#cleanbaketnow").click();
                        typeof box !== 'undefined' && box.close();
                        //App.alert('success', '提示消息', '您的订单已投注成功！', 3000);
                        $('[data-field="lotteryBalance"]').html(response.data);
                        if (typeof RecordList != 'undefined') RecordList.init();
                    }
                    if (response.error == 1) {
                        if ('116-05' == response.code) {
                            setTimeout(function () {
                                isLoading = false;
                                App.unblockUI(thisContent);
                                App.alert('warning', '提示消息', '投注超时，请检查网路情况后重新重试。');
                            }, 10000);
                        } else if ('116-06' == response.code) {
                            window.location.href = '/game/lottery/index.html';
                        } else {
                            isLoading = false;
                            App.unblockUI(thisContent);
                            App.alert('warning', '提示消息', response.message);
                        }
                    }
                },
                error: function () {
                    isLoading = false;
                    App.unblockUI(thisContent);
                }
            });
        }
    }
 
    var initDocument = function (initindex) {
        var innerHtml = [
  '<div class="tabs row">',
      '<div class="col-33"><a data-type="2"', (initindex == 2 ? ' class="active"' : ''), '>翻倍追号</a></div>',
      '<div class="col-33"><a data-type="1"', (initindex == 1 ? ' class="active"' : ''), '>同倍追号</a></div>',
      '<div class="col-33"><a data-type="0"', (initindex == 0 ? ' class="active"' : ''), '>利润率追号</a></div>',
    '</div>',
  '<div class="panels">',
   '<div class="options trace_type">',
    '<div class="row">',
     '<div class="col-33 trace_section trace_rate trace_double trace_same"><label>期数</label><input name="expect" type="text" class="form-control" value="10"></div>',
          '<div class="col-33 trace_section trace_rate trace_double trace_same"><label>起始</label><input name="sMultiple" type="text" class="form-control" value="1">倍</div>',
          '<div class="col-33 trace_section trace_rate"><label>最大</label><input name="maxMultiple" type="text" class="form-control" value="100">倍</div>', //'<div class="col-33"><label>总期数：<span class="text-dark-green" data-field="total-expect">0</span>期</label></div>', //'<div class="col-33"><label>总追号金额：<span class="text-dark-green" data-field="total-money">0.000</span>元</label></div>',
 
     '<input name="isStop" type="checkbox" checked="checked" style="display:none;">',
     '<label style="display:none;">中奖后停止追号</label>',
    '</div>',
        '<div class="row">',
          '<div class="col-33 trace_section trace_double"><label>隔</label><input name="expTimes" type="text" class="form-control" value="1">期</div>',
          '<div class="col-33 trace_section trace_double"><label>倍数</label><select name="operation" class="form-control" style="width:30px; border-right: none;"><option value="x">x</option><option value="+">+</option></select><input name="expMultiple" type="text" class="form-control" value="2"></div>',
          '<div class="col-33 trace_section trace_rate"><label>收益</label><input name="minProfit" type="text" class="form-control" value="30">%</div>',
          '<div class="col-33"><a class="generate likebtn" data-command="generate">生成追号单</a></div>',
          '<div class="col-33"></div>',
        '</div>',
    '<div class="row" style="display:none;">',
     '',
     '',
     '<section class="active" data-type="0">', //'<label> 最大倍投：</label>', //'<input name="maxMultiple" type="text" class="form-control" value="100">', //'<label> 最低收益率：</label>', //'', //'<label> %</label>',
 
     '</section>',
     '<section data-type="2" style="display:none;">',
      '<label> 隔 </label>', //'<input name="expTimes" type="text" class="form-control" value="1">',
 
      '<label> 期，倍 </label>', //'<select name="operation" class="form-control" style="width: 36px; border-right: none;">', //   '<option value="x">x</option>', //  '<option value=",">,</option>', //'</select>', //'<input name="expMultiple" type="text" class="form-control" value="2">',
 
     '</section>',
    '</div>',
    '<div class="btn-group" style="display:none;">', //'<a class="generate" data-command="generate">生成追号单</a>',
 
     '<a class="submit" data-command="submit">确认投注</a>',
    '</div>',
   '</div>',
   '<div class="sections"><table><thead><tr>',
        '<td class="checkbox" width="10%">选择</td><td class="expect">期号</td><td class="multiple">倍数</td><td class="money" width="30%">金额<em class="canhide">（元）</em></td>', //'<td class="time"><em class="canhide">代购</em>截止时间</td>',
 
      '</tr></thead></table><div class="list"><div class="scroller" data-handle-distance="2px"><table><tbody></tbody></table></div></div></div>',
  '</div>'
        ].join('');
        return innerHtml;
    }
 
    var box, defalutCount = 100;
    var init = function () {
        Config = LotteryMain.getConfig();
        if (BListInfo.bList().length == 0) {
            return App.alert('info', '提示消息', '投注列表没有可以追号的订单！');
        }
        if (box == undefined) {
            var thisExpect = $('.lottery-open-info').find('[data-field="global-expect"]').html();
            var doc = initDocument((typeof $('#autotrace').attr('init') != 'undefined' ? parseInt($('#autotrace').attr(
                'init'), 10) : 0));
            //console.log(doc,'ddddddddddd');
            $('#autotrace .maintrace').html(doc);
 
 
            initDocEvent($('#autotrace .maintrace'));
            loadExpect(defalutCount, initNormal);
            /*var jOpt = {
        id:'chaseFloat',
        width: 800,
        height: 535,
        title: '我要追号<font class="f16">（当前销售第 <span data-field="global-expect">' + thisExpect + '</span>期，距离投注截止时间还有<span data-field="global-last-time">00:00:00</span></font>）',
        overlay: true,
        closeOnClick: false,
        blockScroll: false,
        animation: {open: 'zoomIn', close: 'zoomOut'},
        closeButton: 'title',
        draggable: 'title',
        content: doc,
        addClass: 'common-modal lottery-chase noselect default-cursor',
        onInit: function() {
          this.open();
          initDocEvent();
          App.initScroll();
          loadExpect(defalutCount, initNormal);
        },
        onCloseComplete: function() {
          this.destroy();
          box = undefined;
        }
      };
      if (typeof QueryString.iframe !='undefined') {
        jOpt.position = {
          x: 'center',
          y: $('lottery #lottery-frame', window.parent.document).scrollTop()+181//window.parent.document.body.clientHeight/2
        };
        //jOpt.fixed = true
        jOpt.offset = {
          x: 0,
          y: -180
        };
        //console.log(jOpt);
        //console.log($('lottery #lottery-frame', window.parent.document).scrollTop(),jOpt.position);
      }
      box = new jBox('Modal',jOpt);*/
        } else {
            box.toggle();
        }
    }
    return {
        init: init,
        bno: bindNumber
    };
}();
 
/**
 * 走势图
 */
var LotteryTrend = function () {
 
    var init = function (shortName, no, chs) {
        var name = shortName;
        if (name == 'fbffc1m') name = 'ffc';
        if (name == 'fbffc3m') name = '3fc';
        if (name == 'fbffc5m') name = '5fc';
        $('.lottery-code-trend').attr('href', '/static/lottery-trend.html?id=' + no + '&w=1&q=50&chs=' + encodeURI(chs));
        $('.lottery-code-trend').attr('target', new Date().getTime());
    }
 
    return {
        init: init
    }
 
}();
 
/**
 * 合买计划
 */
var LotteryPlan = function () {
 
    var init = function (lottery) {
        var name = lottery.shortName;
        if (name == 'fbffc1m') name = 'ffc';
        if (name == 'fbffc3m') name = '3fc';
        if (name == 'fbffc5m') name = '5fc';
        var thisButton = $('.lottery-record').find('[data-command="plan"]');
        thisButton.attr('href', '/lottery-plan.html?' + name);
    }
 
    return {
        init: init
    }
 
}();
 
/**
 * 彩票开奖时间
 */
var LotteryOpenTime = function () {
 
    var $Lottery; // 彩票游戏
    var $Timer; // 定时器
 
    var loadData = function () {
        var data = {
            name: $Lottery.shortName
        };
        GameLotteryCtrl.staticOpenTime({
            data: data,
            success: function (response) {
                if (response) {
                    if (typeof f7.loopmanage_2 != 'undefined') {
                        clearInterval(f7.loopmanage_2);
                    }
                    handleData(response);
                }
            }
        });
    }
 
    // 格式化时间
    var formatTime = function (seconds) {
        var s = 1,
            m = 60 * s,
            h = m * 60;
        var ss = 0,
            mm = 0,
            hh = 0;
        if (s > 0) {
            hh = Math.floor(seconds / h);
            mm = Math.floor(seconds % h / m);
            ss = Math.floor(seconds % h % m / s);
        }
        var p = function (t) {
            return t < 10 ? '0' + t : t;
        }
        return [p(hh), p(mm), p(ss)];
    }
 
    var setTime = function (issue, openTime) {
        var seconds = openTime.diff(moment(), 'seconds');
        var time = formatTime(seconds);
        $('[data-field="global-expect"]').html(issue);
        //console.log(seconds,issue);
        $('#lottery .openzone .lastis,#basket .openzone .lastis,#zuomainbox .openzone .lastis,#autotrace .openzone .lastis')
            .html((String(issue).indexOf('-') == -1 ? String(issue).substring(issue.length - 3, issue.length) : String(
            issue).split('-')[1]));
        $('[data-field="global-last-time"]').html('<i>' + time[0] + '</i>:<i>' + time[1] + '</i>:<i>' + time[2] +
            '</i>');
        $(
            '#lottery .openzone .lastco,#basket .openzone .lastco,#zuomainbox .openzone .lastco,#autotrace .openzone .lastco')
            .html('<i>' + time[0] + '</i>:<i>' + time[1] + '</i>:<i>' + time[2] + '</i>');
 
        if ($('#basket .lastopis').html() == '') {
            $('#basket .lastopno').html($('#lottery .lastopno').html());
            $('#basket .lastopis').html($('#lottery .lastopis').html());
            $('#zuomainbox .lastopis').html($('#lottery .lastopis').html());
        }
        //console.log(typeof time[0]);
        //console.log($('lottery #topmcounter', window.parent.document).html());
        if (typeof $('lottery #topmcounter', window.parent.document) != 'undefined') {
            $('lottery #topmcounter', window.parent.document).html((time[0] != '00' ? '<i>' + time[0] + '</i>:' : '') +
                '<i>' + time[1] + '</i>:<i>' + time[2] + '</i>');
        }
        if (typeof $('.footer-bar-deal #mcounter_other', window.parent.document) != 'undefined') {
            $('.footer-bar-deal #mcounter_other', window.parent.document).html((time[0] != '00' ? '<i>' + time[0] +
                '</i>:' : '') + '<i>' + time[1] + '</i>:<i>' + time[2] + '</i>');
        }
        //$('.lottery-open-info .last-time > div').html('<i>' + time[0] + '</i><i>' + time[1] + '</i><i>' + time[2] + '</i>');
 
        if (seconds <= 10) {
            //倒计时声音
            /*if($('.set-voice').find('.cd').hasClass('audio-on')) {
                var lotteryCd = document.getElementById('lottery-cd');
                if(lotteryCd) {
                    lotteryCd.play();
                } else {
                    var audio = $('<audio id="lottery-cd" autoplay="autoplay">');
                    audio.attr('src', 'assets/global/audio/cd.mp3').hide();
                    $('body').append(audio);
                }
            } */
        }
        if (seconds == 0) {
            $('div[data-field="code"]').hide();
            $('.codeholder').show();
            if ($('#sys-message').size() > 0) {
                document.getElementById('sys-message').play()
            } else {
                if ($('.set-voice').find('.cd').hasClass('audio-on') && !isMobile.any()) {
                    var audio = $('<audio id="sys-message" autoplay="autoplay">');
                    audio.attr('src', '/audio/message.mp3').hide();
                    $('body').append(audio);
                    document.getElementById('sys-message').play();
                }
            }
        }
        if (seconds % 30 == 0) {
            typeof RecordList != 'undefined' && RecordList.init();
            //console.log('LotteryOpenCode.init');
            var linfo = GameData.getInfo();
            LotteryOpenCode.init(linfo);
        }
        if (seconds > 30 && seconds < 50) {
            //console.log(seconds% 5);
            if (seconds % 5 == 0) {
                var linfo = GameData.getInfo();
                LotteryOpenCode.init(linfo);
            }
            $('div[data-field="code"]').show();
            $('.codeholder').hide();
        }
 
        if (seconds <= 0) {
            if (typeof f7.loopmanage_1 != 'undefined') {
                clearInterval(f7.loopmanage_1);
            }
            $('audio#lottery-cd').remove();
            $('[data-field="expect"]').html(issue);
            $('#lottery .lastopis,#basket .lastopis,#zuomainbox .lastopis').html((String(issue).indexOf('-') == -1 ?
                String(issue).substring(issue.length - 3, issue.length) : String(issue).split('-')[1]));
            clearTimeout($Timer);
            App.alert('warning', '温馨提示', '第 <font class="f18" color="#ff4500">' + issue + '</font> 期 已截止，<br/>请注意投注期号！',
                3000);
            setTimeout(loadData, 1000);
            $Timer = setInterval(loadData, 5000);
            f7.loopmanage_1 = $Timer;
        }
    }
 
 
    var handleData = function (data) {
        $Timer && clearTimeout($Timer);
        var issue = data.issue;
        var seconds = data.surplusTime + 1;
        var openTime = moment().add(seconds, 'seconds'); // moment对象
        setTime(issue, openTime);
        $Timer = setInterval(function () {
            setTime(issue, openTime);
        }, 1000);
        f7.loopmanage_2 = $Timer;
    }
 
    var init = function (lottery) {
        $Lottery = lottery;
        loadData();
    }
 
    return {
        init: init
    }
 
}();
 
/**
 * 彩票开奖号码
 */
var LotteryOpenCode = function () {
 
    var $Lottery; // 彩票游戏
    var $Timer; // 定时器
 
    var $LastIssue; // 上一期的开奖号码
 
    var loadData = function (history) {
        //console.log(history);
        var data = {
            name: $Lottery.shortName,
            history: history
        };
        GameLotteryCtrl.staticOpenCode({
            data: data,
            success: function (response) {
                if (String(response) == '-1') {
                    return false;
                }
                if (response) {
                    handleData(response);
                }
            }
        });
    }
    var $MoreTimer;
    var $CurrCode;
    var handleData = function (list) {
        var thisResultList = $('.lottery-open-list .list');
        thisResultList.empty();
        var getRandomNum = function () {
            var arr = [],
                json = {};
            while (arr.length < 5) {
                var num = Math.round(Math.random() * 9);
                if (!json[num]) {
                    arr.push(num);
                    json[num] = true;
                }
            }
            return arr;
        }
 
        var formatCode = function (code, lottery, zutype) {
            //console.log(lottery,'zutypezutype');
            var format = $('<div class="code' + (typeof zutype != 'undefined' ? '' : ' expand') + '">');
            //console.log(code,lottery);
            if (code == null) {
                //code = getRandomNum().join(',');
            }
            var codes = code.split(',');
            if (codes.length == 20 && (lottery == "hgffc" || lottery == "bjffc" || lottery == "twffc" || lottery ==
                "jndffc")) {
                var bigAry = BigNumber(codes).bigAry;
                for (var i = 0; i < 5; i++) {
                    format.append('<div class="num more">' + bigAry[i] + '</div>');
                }
            } else {
                var length = codes.length > 5 ? 5 : codes.length;
                if ($Lottery.type == 6) {
                    length = codes.length;
                }
                for (var i = 0; i < length; i++) {
                    format.append('<div class="num">' + codes[i].split('|')[0] + '</div>');
                }
                if (codes.length > 3 && codes.length < 5) {
                    format.append('<a class="more">...</a>');
                }
            }
            //console.log($Lottery.type,$Lottery);
            if ($Lottery.type == 10 || $Lottery.shortName == 'BJPK10') {
                format = $('<div class="code' + (typeof zutype != 'undefined' ? '' : ' expand') + '">');
                var sb = code.split(',');
                var leftfive = _.take(sb, 5).join('</div><div class="num">');
                var lastfive = _.takeRight(sb, 5).join('</div><div class="num">');
                format.append('<div class="num">' + leftfive + '</div><br><div class="num">' + lastfive + '</div>')
            }
            return format;
        }
        //console.log(list,'listlist');
        var shortIssue = function (str) {
            if (String(str).indexOf('-') > -1) {
                return str.split('-')[1]
            }
            if (str.length == 6) {
                return str;
            }
            str = _.takeRight(str.split(''), 4).join('');
            return str
        }
        var hasDuplicates = function (a, len) {
            //console.log(a.length-_.uniq(a).length==2);
            return _.uniq(a).length !== a.length && (a.length - _.uniq(a).length == len);
        }
        var zutypemethod = function (textkey) {
            var chkdtwuxin = function (str) {
                if (str == null) {
                    return '';
                }
                var ar = str.split(',');
                //console.log(_.sortBy(ar));
                if (str == null) {
                    return '';
                }
                if (hasDuplicates(ar, 0)) {
                    return '组120'
                }
                if (hasDuplicates(ar, 1)) {
                    return '组60'
                }
                if (hasDuplicates(ar, 2)) {
                    return '组30'
                }
                if (hasDuplicates(ar, 2)) {
                    return '组20'
                }
                if (hasDuplicates(ar, 3)) {
                    return '组10'
                }
                if (hasDuplicates(ar, 3)) {
                    return '组5'
                }
                return '组120'
            }
            var chkdtsixin = function (str) {
                if (str == null) {
                    return '';
                }
                var ar = str.split(',');
                ar = _.takeRight(ar, 4);
                //console.log(_.sortBy(ar));
                if (str == null) {
                    return '';
                }
                if (hasDuplicates(ar, 0)) {
                    return '组24'
                }
                if (hasDuplicates(ar, 1)) {
                    return '组12'
                }
                if (hasDuplicates(ar, 2)) {
                    return '组6'
                }
                if (hasDuplicates(ar, 2)) {
                    return '组4'
                }
                return '组24'
            }
            var chksan1 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.take(allno, 3);
                //console.log(allno);
                if (hasDuplicates(allno, 1)) {
                    return '组三'
                }
                if (allno[0] == allno[1] && allno[0] == allno[2]) {
                    return '豹子'
                }
                return '组六'
            }
            var chksan2 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.takeRight(allno, 4);
                allno = _.take(allno, 3);
                if (hasDuplicates(allno, 1)) {
                    return '组三'
                }
                if (allno[0] == allno[1] && allno[0] == allno[2]) {
                    return '豹子'
                }
                return '组六'
            }
            var chksan3 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.takeRight(allno, 3);
                if (hasDuplicates(allno, 1)) {
                    return '组三'
                }
                if (allno[0] == allno[1] && allno[0] == allno[2]) {
                    return '豹子'
                }
                return '组六'
            }
            var chktwo = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.takeRight(allno, 2);
                return eval(allno.join("+"));
            }
            var chktwo1 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.take(allno, 2);
                return eval(allno.join("+"));
            }
            var chkthree = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.take(allno, 3);
                return eval(allno.join("+"));
            }
            var chkthree1 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.takeRight(allno, 4);
                allno = _.take(allno, 3);
                return eval(allno.join("+"));
            }
            var chkthree2 = function (str) {
                if (str == null) {
                    return '';
                }
                var allno = str.split(',');
                allno = _.takeRight(allno, 3);
                return eval(allno.join("+"));
            }
            if (textkey == "五星") {
                return chkdtwuxin;
            }
            if (textkey == "后四") {
                return chkdtsixin;
            }
            if (textkey == "前三") {
                return chksan1;
            }
            if (textkey == "前三和值") {
                return chkthree;
            }
            if (textkey == "中三") {
                return chksan2;
            }
            if (textkey == "中三和值") {
                return chkthree1;
            }
            if (textkey == "后三") {
                return chksan3;
            }
            if (textkey == "后三和值") {
                return chkthree2;
            }
            if (textkey == "二星") {
                return chktwo;
            }
            if (textkey == "后二") {
                return chktwo;
            }
            if (textkey == "前二") {
                return chktwo1;
            }
            return undefined
        }
        var hasDuplicates = function (a, len) {
            return _.uniq(a).length !== a.length && (a.length - _.uniq(a).length == len);
        }
        //console.log(list,'listlistlist');
        if (list.length > 0) {
            //console.log(list[0].code);
            if (list[0].code != null) {
                if (list[0].code.length < 13) {
                    $('#lottery .lastopno,#basket .lastopno,#zuomainbox .lastopno').html('<em class="ball">' + String(
                        list[0].code).replace(/,/g, '</em><em class="ball">') + '</em>');
                } else {
                    if (list[0].code < 16) {
                        $('#lottery .lastopno,#basket .lastopno,#zuomainbox .lastopno').html(list[0].code);
                    } else {
                        $('#lottery .lastopno,#basket .lastopno,#zuomainbox .lastopno').html(String(list[0].code).substr(
                            0, 14) + '...');
                    }
 
                }
            } else {
                $('#lottery .lastopno,#basket .lastopno,#zuomainbox .lastopno').html('开奖中...');
            }
        }
        $.each(list, function (i, val) {
            if (i == 0) {
                $LastIssue = val.issue;
                $CurrCode = val;
                //console.log('val',$CurrCode);
                showOpenCode(val);
            }
            var item = $('<div class="item">');
            item.append('<div class="expect">' + shortIssue(val.issue) + '</div>');
            var nowtopm = $('.lottery-betting .play-groups a.selected').text();
            if (val.code != null) {
                item.append(formatCode(val.code, val.lottery, zutypemethod(nowtopm)));
            } else {
                item.append('<div class="code wait' + (typeof zutypemethod(nowtopm) != 'undefined' ? '' : ' expand') +
                    '">等待开奖</div>');
            }
 
            //console.log(zutypemethod(nowtopm));
            //console.log(nowtopm);
            if (typeof zutypemethod(nowtopm) !== 'undefined' && parseInt($('#topltname').attr('rel'), 10) != 43 &&
                parseInt($('#topltname').attr('rel'), 10) != 47 && parseInt($('#topltname').attr('rel'), 10) != 204) {
                item.append('<div class="zutype" rel="' + val.code + '">' + zutypemethod(nowtopm)(val.code) + '</div>');
            } else {
                item.append('<div class="zutype" rel="' + val.code + '" style="display:none;"></div>');
            }
 
            item.find('.code .more').hover(function () {
                clearTimeout($MoreTimer);
                showOpenCode(val);
            }, function () {
                $MoreTimer = setTimeout(function () {
                    showOpenCode($CurrCode);
                }, 300);
            });
            thisResultList.append(item);
        });
        //console.log(thisResultList);
    }
 
    var BigNumber = function (smallAry) {
        var smallGroupAry = [];
        var bigStr;
        var bigAry = [];
        var bigExpAry = [];
        for (var i = 0; i < smallAry.length / 4; i++) {
            var small = [];
            var v1 = smallAry[i * 4];
            var v2 = smallAry[i * 4 + 1];
            var v3 = smallAry[i * 4 + 2];
            var v4 = smallAry[i * 4 + 3];
            small.push(v1, v2, v3, v4);
            var sum = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
            var exp = '' + v1 + "+" + v2 + "+" + v3 + "+" + v4 + "=" + (sum);
            var expHtml = '' + exp;
            var length = expHtml.length;
            expHtml = expHtml.substr(0, length - 1) + '<span style="color:yellow">' + expHtml.substr(length - 1, length) +
                '</span>';
            var sumStr = '' + sum;
            bigAry.push(sumStr.substr(sumStr.length - 1, sumStr.length));
            bigExpAry.push(exp);
            smallGroupAry.push(small);
        }
        return {
            bigAry: bigAry,
            bigExpAry: bigExpAry,
            smallGroupAry: smallGroupAry
        }
    }
 
    /**
     * 显示开奖号码
     */
    var timeouter = 0;
    var showOpenCode = function (data) {
        if (data.code != null) {
            //data.code = '8,8,8,8,8'
            $('.onlymobilecode').html(data.code);
            if ($('.codeholder:visible').size() > 0) {
                $('div[data-field="code"]').show();
                $('.codeholder').hide();
            }
            var prevcode = $('.lottery-open-code').find('[data-field="expect"]').data('now');
            //console.log(data.code==prevcode);
            if (typeof prevcode != 'undefined' && data.code == prevcode) {
                //console.log('noneed');
                return false;
            }
            var formatCode = function (code) {
                var format = $('<ul>');
                var codes = code.split(',');
                for (var i = 0; i < codes.length; i++) {
                    // 检测号码个数
                    if ($Lottery.type == 1 || $Lottery.type == 2) {
                        if (i >= 5) break;
                    }
                    if ($Lottery.type == 3 || $Lottery.type == 4) {
                        if (i >= 3) break;
                    }
                    if ($Lottery.type == 5) {
                        if (i >= 20) break;
                    }
                    if ($Lottery.type == 6) {
                        if (i >= 10) break;
                    }
                    // 格式化开奖号码
                    if ($Lottery.type == 6) {
                        format.append('<li class="r' + codes[i] + '"></li>');
                    } else {
                        format.append('<li>' + codes[i] + '</li>');
                    }
                }
                return format;
            }
            $('.lottery-open-code').find('[data-field="expect"]').data('now', data.code).html(data.issue);
            $('#lottery .lastopis,#basket .lastopis,#zuomainbox .lastopis').html((String(data.issue).indexOf('-') == -1 ?
                String(data.issue).substring(data.issue.length - 3, data.issue.length) : String(data.issue).split('-')[
                1]));
            var animateRotateShow = function (els, code, location) {
                var codes = code.split(',');
                var speed = 400,
                    bwidth = 68,
                    tdelay = 0;
                var show = function (code, location, time, delay) {
                    setTimeout(function () {
                        var item = $('<div class="item">');
                        item.html(code);
                        item.css({
                            'left': '-' + bwidth + 'px',
                            'animation': '0.5s linear 0s normal none infinite rotate'
                        });
                        item.animate({
                            'left': location
                        }, time, 'linear', function () {
                            item.attr('style', 'left: ' + location + 'px');
                        });
                        els.find('.rotate').append(item);
                    }, delay);
                }
                for (var i = 0; i < codes.length; i++) {
                    var thisCode = codes[codes.length - 1 - i];
                    var thisLocation = location[codes.length - 1 - i];
                    var time = (thisLocation + bwidth) / speed * 1000;
                    show(thisCode, thisLocation, time, tdelay);
                    tdelay += time;
                }
            }
            var lotteryOpenCode = $('.lottery-open-code').find('[data-field="code"]');
 
            // 滚动效果的
            if ($Lottery.shortName == 'hgssc' || $Lottery.shortName == 'BJPK10' || $Lottery.shortName == 'bjssc' ||
                $Lottery.shortName == 'twbgssc') {
                clearTimeout(timeouter);
                var lotteryOpenCode02 = lotteryOpenCode;
                lotteryOpenCode02.addClass('higher');
                /*lotteryOpenCode02.css({
                webkitFilter: 'url(#go1)',
                filter: 'url(#go1)'
            });*/
                //var smallStr = data.code.split('|')[1];
                //var smallAry = smallStr.split(',');
 
                //小号数据分组
                //var temp = BigNumber(smallAry);
                var allcode = String(data.code).split(',');
                var temp = {
                    bigAry: allcode,
                    smallGroupAry: allcode,
                }
                var smallGroupAry = temp.smallGroupAry;
                var bigAry = temp.bigAry;
                var bigExpAry = temp.bigExpAry;
 
                //生成小号html
                var smallul = '<ul class="small" style="display:none;">';
                for (var idx1 in smallGroupAry) {
                    smallul += '<span class="wp1"><span class="wp2">';
                    //smallGroupAry[idx1];
                    //for (var idx2 in smallGroupAry[idx1]) {
                    smallul += '<li>' + smallGroupAry[idx1] + '</li>';
                    //}
                    smallul += '</span></span>';
                }
                smallul += '</ul>';
 
                //生成大号html
                var bigsul = "<ul class='big'>";
                for (var idx1 in bigAry) {
                    //bigsul += '<li class="ball_'+bigAry[idx1]+'">' + bigAry[idx1] + '</li>';
                    bigsul += '<li class="ball_' + bigAry[idx1] + '"></li>';
                }
                smallul += '</ul>';
 
 
                lotteryOpenCode02.empty();
                var tip = $("<div class='tip1'></div>");
                //lotteryOpenCode02.append(smallul);
                lotteryOpenCode02.append(bigsul);
                lotteryOpenCode02.append(tip);
                lotteryOpenCode02.append('<div style="clear:both;"></div>')
                //lotteryOpenCode02.find('li').hide();
 
                //入场
                var smallli = lotteryOpenCode02.find('.small li');
                /*smallli.removeClass("zoomIn animated");
            smallli.each(function(idx, obj) {
                setTimeout(function() {
                    $(obj).css('display', 'block').addClass("zoomIn animated")
                }, idx * 50);
            });*/
                var bigli = lotteryOpenCode02.find('.big li');
                var smallGroup = lotteryOpenCode02.find('.small .wp2');
 
 
                //大小球动画
                !! function () {
                    timeouter = setTimeout(function () {
                        lotteryOpenCode02.removeAttr("style");
                    }, 1000);
                    smallGroup.each(function (idx, obj) {
                        setTimeout(function () {
                            //$(obj).css('display', 'block').removeClass().addClass("wp2 zoomOut animated");
                            //                      bigli.eq(idx).css({'visibility':'visible','display':'block'}).removeClass().addClass("li2 bounceIn animated");
                            bigli.eq(idx).css('display', 'block').removeClass().addClass("li2 bounceIn animated");
 
                            //$(obj).css('display','block').removeClass().addClass("wp2 zoomOut animated");
                            //$(obj).css('display','block').removeClass().addClass("wp2 bounceOut animated");
 
                            // $(obj).find('li').css('display','block').removeClass().addClass("wp2 bounceOut animated");
                            // setTimeout(function(){
                            // bigli.eq(idx).css('display','block').removeClass().addClass("li2 bounceIn animated");
                            // },500);
 
 
                            // $(obj).css('display','block').removeClass().addClass("wp2 flip animated");
                            // setTimeout(function(){$(obj).css('display','block').removeClass().addClass("wp2 zoomOut animated")},800);
                            // setTimeout(function(){bigli.eq(idx).css('display','block').removeClass().addClass("li2 zoomIn animated")},800);
 
                            // $(obj).css('display','block').removeClass().addClass("wp2 hinge animated");
                            // bigli.eq(idx).css('display','block').removeClass().addClass("li2 rollIn animated");
                        }, 1000 + idx * 200);
                    });
                }()
 
                //大球悬停动画
                /*bigli.unbind();
            bigli.hover(function() {
                // $(this).removeClass().addClass("flipOutY animated");
                // smallGroup.eq($(this).index()).removeClass().addClass("wp2 flipInY animated");
                var ls = smallGroup.eq($(this).index()).find('li');
                var html = "";
                var sum = 0;
                ls.each(function(idx, ele) {
                    var txt = $(this).html();
                    if (idx == ls.length - 1) html += txt + "=";
                    if (idx != ls.length - 1) html += txt + "+";
                    sum += parseInt(txt);
                });
                html += sum;
                var length = html.length;
                html = html.substr(0, length - 1) + '<span style="color:yellow">' + html.substr(length - 1, length) + '</span>';
                tip.html(html);
            }, function() {
                // $(this).removeClass().addClass("flipInY animated");
                // smallGroup.eq($(this).index()).removeClass().addClass("wp2 flipOutY animated");
            });*/
 
            } else {
                lotteryOpenCode.html(formatCode(data.code));
                //入场
                var list = $('.lottery-open-code .code li');
                list.each(function (idx, obj) {
                    setTimeout(function () {
                        //$(obj).css('display', 'block').addClass("zoomIn animated"); bounceInLeft
                        var s = 'zoomIn';
                        $(obj).css('visibility', 'visible');
                        //$(obj).attr('style','visibility: visible;');
                        $(obj).addClass(s + " animated"); //visibility: visible;
                        //$(obj).css('display', 'inline-block')
                    }, idx * 100);
                });
 
                lotteryOpenCode.removeClass('higher');
            }
 
        } else {
            $('.lottery-open-code').find('[data-field="expect"]').data('now', '').html(data.issue);
            $('#lottery .lastopis,#basket .lastopis,#zuomainbox .lastopis').html((String(data.issue).indexOf('-') == -1 ?
                String(data.issue).substring(data.issue.length - 3, data.issue.length) : String(data.issue).split('-')[
                1]));
            $('div[data-field="code"]').hide();
            $('.codeholder').show();
        }
    }
 
    var init = function (lottery) {
        $Lottery = lottery;
        loadData(true);
    }
 
    var flush = function (data) {
        if (data.issue != $LastIssue) {
            loadData(true);
        }
    }
 
    return {
        init: init,
        flush: flush
    }
 
}();
 
/**
 * 开奖通知
 */
var LotteryOpenNotice = function () {
 
    var loadData = function () {
        GameLotteryCtrl.pullOpenNotice({
            success: function (response) {
                if (response.error == 0) {
                    handleData(response.data);
                }
            }
        });
    }
 
    // 播放声音
    var audio = function () {
        if ($('.set-voice').find('.win').hasClass('audio-on')) {
            $('audio#lottery-open').remove();
            var audio = $('<audio id="lottery-open" autoplay="autoplay">');
            audio.attr('src', 'assets/global/audio/lottery-open.mp3').hide();
            $('body').append(audio);
        }
    }
 
    var handleData = function (data) {
        audio();
        var msg = '当前彩种：' + data.lottery + '<br/>';
        msg += '当前期号：' + data.issue + '<br/>';
        msg += '当期投注：' + data.money.toFixed(3) + '元<br/>';
        msg += '当期中奖：' + data.winMoney.toFixed(3) + '元<br/>';
        msg += '当期盈亏：' + data.profit.toFixed(3) + '元<br/>';
        App.tips('消息提示', msg, 8000);
    }
 
    var pull = function () {
        loadData();
    }
 
    return {
        pull: pull
    }
 
}();
 
//========================================================
//以下是通用的投注初始化相关的功能
//========================================================
 
 
//兼容手机版本样式
var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();
 
 
var initPartOne = function () {
    //AppLoop.init();
    //屏蔽右键
    //disableRightClick();
    //系统消息初始化
    //UserSysMessage.init();
    //隐藏或显示代理账户相关功能
    //showOrNotShow();
    //初始化日期控件
    initDatePicker();
    //在线客服弹出框
    kefu();
    //帮助
    $('.fhelp').off('click').on('click', function () {
        var titlechs = $(this).text();
        var topoff = parseInt($(this).attr('rel'), 10);
        BootstrapDialog.show({
            title: titlechs,
            size: 'size-wide',
            message: $('<div class="floathelpbox"></div>').load('/static/help/content.html'),
            onshown: function () {
                $('.floathelpbox').scrollTop(topoff);
            }
        });
    });
 
    //彩种左侧保存
    //getLeftSec();
    $('.w-order-list').unbind('click').click(function () {
        //$('.record-list .panels').toggle();
        $('.record-list .panels').slideToggle();
    });
 
    $('#saveMy').on('shown.bs.modal', function () {
        //alert('对话框已显示。');
        //console.log($('#top-lt-list').data('all'));
        var ltssc = [],
            ltxuan = [],
            ltkuai = [],
            ltother = [];
        var otherdict = {}
        var allres = $('#top-lt-list').data('all');
        var allops = $('.lottery-navs ul').data('open');
        var chkon = function (array, id) {
            if (typeof array != 'undefined') {
                //console.log($.inArray(id,array),id,array);
                if ($.inArray(id, array) > -1) {
                    return '<em class="m_ico m_on"></em>'
                }
            }
            return '<em class="m_ico"></em>'
        }
        for (i = 0; i < allres.length; i++) {
            if (String(allres[i].showName).indexOf('微信') == -1 && String(allres[i].showName).indexOf('急速') == -1 &&
                allres[i].id != '113' && allres[i].id != '110' && allres[i].id != '13' && allres[i].id != '12') {
                if (String(allres[i].code).indexOf('SSC') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltssc.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (String(allres[i].code).indexOf('11Y') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltxuan.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (String(allres[i].code).indexOf('K3') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltkuai.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (typeof otherdict[allres[i].id] == 'undefined') {
                    ltother.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
            }
        }
        $('.savemylt .seccls[rel="ssc"] ul').html(ltssc.join(''));
        $('.savemylt .seccls[rel="xuan"] ul').html(ltxuan.join(''));
        $('.savemylt .seccls[rel="kuai"] ul').html(ltkuai.join(''));
        $('.savemylt .seccls[rel="other"] ul').html(ltother.join(''));
        var errormsg = new $.zui.Messager('最大收藏9个游戏', {
            //icon: 'bell' // 定义消息图标
        })
        $('.savemylt').off('click').on('click', '.m_change', function () {
            //console.log($(this).attr('rel'));
            var route = 'addFavGame';
            var nowel = $(this);
 
            //console.log($(this).find('.m_on').size());
            if (nowel.find('.m_on').size() > 0) {
                route = 'removeFavGame';
            }
            //console.log($('.lottery-navs ul').data('open'),'oppppppp');
            Api.getCommon(route, {
                lotteryId: $(this).attr('rel')
            }, function (res) {
                //console.log(res);
                if (res.code == '0' && res.error == '0') {
                    if (nowel.find('.m_on').size() > 0) {
                        nowel.find('.m_on').html('');
                        nowel.find('.m_on').removeClass('m_on')
                    } else {
                        nowel.find('.m_ico').html('');
                        nowel.find('.m_ico').addClass('m_on')
                    }
                    //getLeftSec();
                } else {
                    errormsg.show();
                }
            })
        })
    });
    //固定菜单
    if (parseInt($('body').width(), 10) > 1200) {
        $('.lottery-navs').css({
            'left': (parseInt($('body').width(), 10) - 1200) / 2,
            'position': 'fixed'
        });
        //$('.lottery-open-list').css({'top':50,'right':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
    } else {
        $('.lottery-navs').css({
            'left': -110,
            'position': 'absolute'
        });
        //$('.lottery-open-list').css({'top':0,'right':-245,'position':'absolute'});
    }
    //console.log(AppData.getMainAccount());
    if (typeof AppData != 'undefined') {
        var udata = AppData.getMainAccount();
        if (typeof udata != 'undefined') {
            var utyp = udata.type;
            if (utyp == '1') {
                $('#agent-top-nav').show();
            }
        }
 
    }
    //刷新余额
    $('.lotteryBalance .m_ico,.menu02 .m_refresh').click(function () {
        $('[data-field="lotteryBalance"],#will-sum01').html('刷新中...');
        Api.getCommon('getUserBalance', {}, function (resp) {
            if (resp == -1) {
                window.location.href = "/yx/home";
                return false;
            } else {
                //console.log(resp.data);
                if (typeof resp.data !== 'undefined') {
                    var left = resp.data.lotteryBalance;
                    setTimeout(function () {
                        $('[data-field="lotteryBalance"]').html(left);
                        $('[data-user-account-available]').html(left);
                        $('#will-sum01').html(left);
                    }, 300)
 
                }
            }
        });
    });
    var goTop = function () {
        $(window).scroll(function (e) {
            //若滚动条离顶部大于100元素
            if ($(window).scrollTop() > 100)
                $(".goTop").fadeIn(1000); //以1秒的间隔渐显id=gotop的元素
            else
                $(".goTop").fadeOut(1000); //以1秒的间隔渐隐id=gotop的元素
        });
    }
 
    //返回顶部
    $('.goTop').unbind('click').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
    goTop();
}
 
var initPartOne_Sec = function () {
    //AppLoop.init();
    //屏蔽右键
    //disableRightClick();
    //系统消息初始化
    //UserSysMessage.init();
    //隐藏或显示代理账户相关功能
    showOrNotShow();
    //初始化日期控件
    initDatePicker();
    //在线客服弹出框
    kefu();
    //帮助
    $('.fhelp').off('click').on('click', function () {
        var titlechs = $(this).text();
        var topoff = parseInt($(this).attr('rel'), 10);
        BootstrapDialog.show({
            title: titlechs,
            size: 'size-wide',
            message: $('<div class="floathelpbox"></div>').load('/static/help/content.html'),
            onshown: function () {
                $('.floathelpbox').scrollTop(topoff);
            }
        });
    });
    //getLeftSec();
    $('.w-order-list').unbind('click').click(function () {
        //$('.record-list .panels').toggle();
        $('.record-list .panels').slideToggle();
    });
 
    $('#saveMy').on('shown.bs.modal', function () {
        //alert('对话框已显示。');
        //console.log($('#top-lt-list').data('all'));
        var ltssc = [],
            ltxuan = [],
            ltkuai = [],
            ltother = [];
        var otherdict = {}
        var allres = $('#top-lt-list').data('all');
        var allops = $('.lottery-navs ul').data('open');
        var chkon = function (array, id) {
            if (typeof array != 'undefined') {
                //console.log($.inArray(id,array),id,array);
                if ($.inArray(id, array) > -1) {
                    return '<em class="m_ico m_on"></em>'
                }
            }
            return '<em class="m_ico"></em>'
        }
        for (i = 0; i < allres.length; i++) {
            if (String(allres[i].showName).indexOf('微信') == -1 && String(allres[i].showName).indexOf('急速') == -1 &&
                allres[i].id != '113' && allres[i].id != '110' && allres[i].id != '13' && allres[i].id != '12') {
                if (String(allres[i].code).indexOf('SSC') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltssc.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (String(allres[i].code).indexOf('11Y') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltxuan.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (String(allres[i].code).indexOf('K3') > -1) {
                    otherdict[allres[i].id] = 1;
                    ltkuai.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
                if (typeof otherdict[allres[i].id] == 'undefined') {
                    ltother.push('<li class="m_change" rel="' + allres[i].id + '">' + chkon(allops, allres[i].id) +
                        allres[i].showName + '</li>')
                }
            }
        }
        $('.savemylt .seccls[rel="ssc"] ul').html(ltssc.join(''));
        $('.savemylt .seccls[rel="xuan"] ul').html(ltxuan.join(''));
        $('.savemylt .seccls[rel="kuai"] ul').html(ltkuai.join(''));
        $('.savemylt .seccls[rel="other"] ul').html(ltother.join(''));
        var errormsg = new $.zui.Messager('最大收藏9个游戏', {
            //icon: 'bell' // 定义消息图标
        })
        $('.savemylt').off('click').on('click', '.m_change', function () {
            //console.log($(this).attr('rel'));
            var route = 'addFavGame';
            var nowel = $(this);
 
            //console.log($(this).find('.m_on').size());
            if (nowel.find('.m_on').size() > 0) {
                route = 'removeFavGame';
            }
            //console.log($('.lottery-navs ul').data('open'),'oppppppp');
            Api.getCommon(route, {
                lotteryId: $(this).attr('rel')
            }, function (res) {
                //console.log(res);
                if (res.code == '0' && res.error == '0') {
                    if (nowel.find('.m_on').size() > 0) {
                        nowel.find('.m_on').html('');
                        nowel.find('.m_on').removeClass('m_on')
                    } else {
                        nowel.find('.m_ico').html('');
                        nowel.find('.m_ico').addClass('m_on')
                    }
                    //getLeftSec();
                } else {
                    errormsg.show();
                }
            })
        })
    });
    //固定菜单
    if (parseInt($('body').width(), 10) > 1200) {
        $('.lottery-navs').css({
            'left': (parseInt($('body').width(), 10) - 1200) / 2,
            'position': 'fixed'
        });
        //$('.lottery-open-list').css({'top':50,'right':(parseInt($('body').width(),10)-1200)/2,'position':'fixed'});
    } else {
        $('.lottery-navs').css({
            'left': -110,
            'position': 'absolute'
        });
        //$('.lottery-open-list').css({'top':0,'right':-245,'position':'absolute'});
    }
    //console.log(AppData.getMainAccount());
    if (typeof AppData != 'undefined') {
        var udata = AppData.getMainAccount();
        if (typeof udata != 'undefined') {
            var utyp = udata.type;
            if (utyp == '1') {
                $('#agent-top-nav').show();
            }
        }
 
    }
    //刷新余额
    $('.lotteryBalance .m_ico,.menu02 .m_refresh').click(function () {
        $('[data-field="lotteryBalance"],#will-sum01').html('刷新中...');
        Api.getCommon('getUserBalance', {}, function (resp) {
            if (resp == -1) {
                window.location.href = "/yx/home";
                return false;
            } else {
                //console.log(resp.data);
                if (typeof resp.data !== 'undefined') {
                    var left = resp.data.lotteryBalance;
                    setTimeout(function () {
                        $('[data-field="lotteryBalance"]').html(left);
                        $('[data-user-account-available]').html(left);
                        $('#will-sum01').html(left);
                    }, 300)
 
                }
            }
        });
    });
    var goTop = function () {
        $(window).scroll(function (e) {
            //若滚动条离顶部大于100元素
            if ($(window).scrollTop() > 100)
                $(".goTop").fadeIn(1000); //以1秒的间隔渐显id=gotop的元素
            else
                $(".goTop").fadeOut(1000); //以1秒的间隔渐隐id=gotop的元素
        });
    }
 
    //返回顶部
    $('.goTop').unbind('click').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
    goTop();
}
 
//游戏数据
var GameData = function () {
 
    var info; // 游戏信息
    var method; // 玩法规则
    var methodTreeLst = []; // 玩法细类列表
    var methodLst = []; // 玩法列表
    var config; // 配置信息
    var thisgame = this;
 
    var init = function (name) {
        var cbfun;
        if (arguments.length > 1) {
            cbfun = arguments[1]
        }
        var options = {};
        options.url = Route.DOMAIN + Route.PATH + Route.WebAjax.PATH + Route.WebAjax.INIT_GAME_LOTTERY;
        options.data = {
            name: name
        };
        options.async = false;
        options.success = function (response) {
            //console.log('GAMEDATA');
            methodTreeLst = [];
            var ptitle = $('lottery .now_lottery', window.parent.document);
            if (typeof ptitle != 'undefined') {
                if (ptitle.html() == '') {
                    ptitle.html(response.data.info.showName);
                }
            }
            if (response.error == 0) {
                var data = response.data;
                info = data.info;
                info.id = name;
                //$('#topltname i.first').html(info.showName);
                method = data.method;
                for (a in method) {
                    var shortname = method[a].name.substr(0, 3);
                    var longname = method[a].name;
                    if (String(method[a].name).indexOf('3D') > -1) {
                        shortname = String(method[a].name).replace('3D', '').substr(0, 5);
                    }
 
                    if (shortname.indexOf('前四') > -1 && shortname.length == 2) {
                        shortname = '前四';
                    }
                    if (String(info.shortName) == 'BJPK10') {
                        shortname = String(method[a].name).substr(0, 5);
                    }
                    if (String(info.shortName).indexOf('11Y') > -1) {
                        shortname = String(method[a].name).substr(0, 5);
                    }
                    if (shortname.indexOf('五星') > -1) {
                        shortname = '五星';
                    }
                    if (shortname.indexOf('不定胆') > -1) {
                        shortname = '不定胆';
                    }
                    if (shortname.indexOf('前二') > -1 || shortname.indexOf('后二') > -1 || shortname.indexOf('二星后') > -1 ||
                        shortname.indexOf('二星前') > -1) {
                        shortname = ((String(method[a].name).indexOf('3D') > -1 || String(info.shortName).indexOf('11Y') > -
                            1) ? '二码' : '二星');
                        if (String(info.shortName) == 'BJPK10') {
                            shortname = '前二';
                        }
                    }
                    if (shortname.indexOf('任选') > -1) {
                        shortname = '任选';
                    }
                    if (shortname.indexOf('单式任') > -1) {
                        shortname = '任选';
                    }
                    if (shortname.indexOf('大小') > -1) {
                        shortname = '大小';
                    }
                    if (shortname.indexOf('单双') > -1) {
                        shortname = '单双';
                    }
                    if (shortname.indexOf('组选组六') > -1 || shortname.indexOf('组选组三') > -1) {
                        shortname = (String(method[a].name).indexOf('3D') > -1 ? '三码' : '三星');
                    }
                    if (shortname.indexOf('后三') > -1 && longname.indexOf('不定胆') == -1) {
                        shortname = '后三';
                    }
                    if (longname.indexOf('不定胆') > -1) {
                        shortname = '不定胆';
                    }
                    if (shortname.indexOf('定位胆') > -1) {
                        shortname = '定位胆';
                    }
                    if (shortname.indexOf('前三') > -1) {
                        shortname = '前三';
                        if (String(info.shortName).indexOf('11Y') > -1) {
                            shortname = '三码';
                        }
                    }
                    if (shortname.indexOf('后四') > -1) {
                        shortname = '后四';
                    }
                    if (shortname.indexOf('猜1个') > -1) {
                        shortname = '猜中位';
                    }
                    if (shortname.indexOf('猜前四') > -1) {
                        shortname = '前四';
                    }
                    if (shortname.indexOf('猜前五') > -1) {
                        shortname = '前五';
                    }
                    if (shortname.indexOf('龙虎和') > -1 || shortname.indexOf('龙虎1') > -1 || shortname.indexOf('龙虎2') > -1 ||
                        shortname.indexOf('龙虎3') > -1 || shortname.indexOf('龙虎4') > -1 || shortname.indexOf('龙虎5') > -1) {
                        shortname = '龙虎';
                    }
                    if (shortname.indexOf('趣味三') > -1 || shortname.indexOf('趣味二') > -1 || shortname.indexOf('趣味一') > -1 ||
                        shortname.indexOf('趣味四') > -1 || shortname.indexOf('趣味好') > -1) {
                        shortname = '趣味';
                    }
                    if (shortname.indexOf('冠军') > -1) {
                        shortname = '前一';
                    }
                    if (shortname.indexOf('中三') > -1) {
                        shortname = '中三';
                    }
                    if (shortname.indexOf('四星') > -1) {
                        shortname = '后四';
                    }
                    if (String(method[a].name).indexOf('大小单双') > -1) {
                        shortname = '大小单双';
                    }
                    methodTreeLst.push(a);
                    if ($.inArray(shortname, methodLst) == -1) {
                        methodLst.push(shortname);
                    }
                }
                config = data.config;
                if (typeof cbfun == 'function') {
                    cbfun(config, thisgame);
                }
            }
            //console.log(methodTreeLst,'methodTreeLstmethodTreeLstmethodTreeLst');
        };
        HttpRequest(options);
    };
 
    return {
        init: init,
        getInfo: function () {
            return info;
        },
        getMethod: function () {
            return method;
        },
        getMethods: function () {
            return methodTreeLst;
        },
        getMethodList: function () {
            return methodLst;
        },
        getConfig: function () {
            return config;
        }
    }
 
}();
 
/**
 * 自动初始化
 */
var init_two = function () {
    var locSearch = window.location.pathname;
    var hashlid = $('#hashlid').text();
    //console.log(hashlid,$('#hashlid').text(),'$(#hashlid).text()$(#hashlid).text()$(#hashlid).text()');
    if (locSearch) {
        //      var a = 'http://127.0.0.1/hz/hbs/lottery/1.html';
        var a = locSearch;
        var reg = /\/\d+\.html/;
        var test = a.match(reg);
        if (test != null) {
            var reg1 = /\d+/;
            var lotteryId = test[0].match(reg1)[0];
            //var name = locSearch.substring(1);
            //console.info(lotteryId);
            GameData.init(lotteryId);
        } else {
            if (typeof QueryString != 'undefined' && typeof QueryString.lid !== 'undefined') {
                GameData.init(QueryString.lid);
            } else {
                //console.log(hashlid,$('#lottery #topltname').attr('rel'),'hashlidhashlid');
                GameData.init(hashlid);
            }
        }
 
    } else {
        //window.location.href = '/404.html';
    }
}
 
 
//$(document).ready(function() {
var init_one = function () {
    //console.log(GameData.getInfo());
    var lotteryInfo = GameData.getInfo();
    var lotteryMethod = GameData.getMethod();
    var lotteryConfig = GameData.getConfig();
    var lotteryName = typeof GameData.getInfo() != 'undefined' ? GameData.getInfo().showName : false;
    var lotteryShortName = typeof GameData.getInfo() != 'undefined' ? GameData.getInfo().shortName : false;
    var lotteryType = typeof GameData.getInfo() != 'undefined' ? GameData.getInfo().type : false;
    var lotteryId = typeof GameData.getInfo() != 'undefined' ? GameData.getInfo().id : false;
    //console.log(GameData.getInfo());
 
    LotteryPlan.init(lotteryShortName);
 
    // 初始化彩票玩法
    if (typeof LotteryMain != 'undefined') {
        //console.log('LotteryMainLotteryMainLotteryMain');
        LotteryMain.init({
            lottery: lotteryInfo.shortName,
            downCode: lotteryInfo.downCode,
            fenDownCode: lotteryInfo.fenDownCode,
            liDownCode: lotteryInfo.liDownCode,
            method: lotteryMethod,
            //sysCode: (lotteryConfig.sysCode > lotteryConfig.maxBetCode ? lotteryConfig.maxBetCode : lotteryConfig.sysCode),
            sysCode: lotteryConfig.sysCode,
            sysUnitMoney: lotteryConfig.sysUnitMoney,
            userCode: (AppData.getLotteryAccount().code > lotteryConfig.maxBetCode ? lotteryConfig.maxBetCode : AppData
                .getLotteryAccount().code),
            userLp: AppData.getLotteryAccount().point
        });
        // 投注记录
        typeof RecordList != 'undefined' && RecordList.init();
        // 开奖信息
        LotteryOpenTime.init(lotteryInfo);
        // 开奖号码
        LotteryOpenCode.init(lotteryInfo);
        //LotteryTrend.init(lotteryShortName,lotteryId,lotteryName);
        //  AppLoop.init();
        AppLoop.push({
            key: 'PlayLottery',
            lottery: lotteryInfo.shortName
        }, function (res) {
            var thisData = res.PlayLottery;
            if (thisData) {
                if (thisData.openCode) {
                    LotteryOpenCode.flush(thisData.openCode);
                }
                if (thisData.hasNewNotice) {
                    // 拉取盈亏消息
                    //LotteryOpenNotice.pull();
                    // 刷新订单
                    //RecordList.init();
                }
            }
        });
    }
 
    //WebQQ.init();//聊天插件
    setTimeout(function () {
        var ptitle = $('lottery .iframebox', window.parent.document);
        ptitle.height($('body .page-content').height());
    }, 400)
    //});
}
 
//购物篮临时存储
var BasketLtChoose = [];
//========================================================
//以下是通用的投注相关的功能
//========================================================
var init_three = function () {
    $('body').on('click', function (e) {
        if (typeof $('.quickgo', window.parent.document) != 'undefined') {
            if (typeof $('.quickgo', window.parent.document).attr('shown') != 'undefined') {
                if (typeof window.parent != 'undefined') {
                    window.parent.toggleLeftBar()
                }
            }
        }
    });
    var shortName = '';
    if (typeof GameData.getInfo() != 'undefined') {
        shortName = GameData.getInfo().shortName.toLowerCase().replace(/[0-9]/g, "");
    }
    //alert(shortName);
    $('.ltp .openzone').attr('rel', shortName);
    $('.ltp .openzone').addClass(shortName);
    ! function () { //增加+-号控制倍数按钮
        $('.lottery-betting .multiple .addm').size() == 0 && $('.lottery-betting .multiple').append(
            '<span class="addm">+</span>');
        $('.lottery-betting .multiple .subm').size() == 0 && $('.lottery-betting .multiple').prepend(
            '<span class="subm">-</span>');
        $('.lottery-betting .multiple .addm').off("click").on("click", function () {
            var event = $.Event("keydown");
            event.keyCode = 38;
            $(this).prev().trigger(event);
            $(this).prev().trigger("keyup");
        });
        $('.lottery-betting .multiple .subm').off("click").on("click", function () {
            var event = $.Event("keydown");
            event.keyCode = 40;
            $(this).next().trigger(event);
            $(this).next().trigger("keyup");
        });
    }();
 
    ! function () { //行前序号
        $('.lottery-betting').delegate('[data-command="add"]', "click", function () {
            var $trs = $('.lottery-record tr');
            $trs.each(function () {
                $(this).find('.content').prepend($(this).index() + 1);
            });
        });
    }();
 
    $('.lottery-record .total').append([
    //'<div class="total">第<span data-field="global-expect">00000000</span>期投注截止时间  <span data-field="global-last-time">00:00:00</span>    订单总计 <span data-field="sum-order">0</span> 个    总注数 <span data-field="sum-num">0</span> 注    总金额 ¥ <span data-field="sum-money">0</span> 元</div>'
 
    //'<div class="total">订单总计 <span data-field="sum-order">0</span> 个    总注数 <span data-field="sum-num">0</span> 注    总金额 ¥ <span data-field="sum-money">0</span> 元</div>'
 
    '<div class="total-inner"><h5>总注数</h5><span data-field="sum-num">0</span>注<h5 class="nextlines">总金额</h5> ¥<span data-field="sum-money">0</span>元</div>'
    ].join(''));
    var sumAll = function () { //计算总注数总金额
        if (!$('.lottery-record')) return;
        var mul = 0;
        var num = 0;
        var total = 0;
        var domNum = $('.lottery-record .list .num');
        domNum.each(function () {
            num = compt.add(num, parseFloat($(this).text()));
        });
        $('.lottery-record .list .total').each(function () {
            total = compt.add(total, parseFloat($(this).text()));
        });
        $('[data-field="sum-order"]').text(domNum.size());
        $('[data-field="sum-num"],#basket .totaldeal').text(num);
        $('[data-field="sum-money"],#basket .totaldealamount').text(total.toFixed(3));
        //console.log(domNum.size(),num,total.toFixed(3));
        setTimeout(sumAll, 500);
    };
    if ($('[data-field="sum-num"]').size() > 0) {
        sumAll();
    }
 
    if (typeof LotteryMain != 'undefined') {
        //投注列表的倍数修改和模式修改
        LotteryMain.addCallback(function () {
            var $tr = $('.lottery-record tr:last-child');
            if ($tr.data('initialized')) return;
            var $mul = $tr.find('.multiple')
            var mulHtml = $tr.find('.multiple').html();
            var $mulInput = $('<input name="multiple" type="text" value="' + parseInt(mulHtml) + '">');
            $mulInput.after('<span>倍</span>');
            $mul.html($mulInput);
            $mul.append('<span>倍</span>');
            var blist = LotteryMain.bList();
            var data = blist[$tr.index()];
 
            var strVar = "";
            strVar += "<select>";
            strVar += "        <option value='yuan'>元<\/option>";
            strVar += "        <option value='jiao'>角<\/option>";
            strVar += "        <option value='fen'>分<\/option>";
            strVar += "        <option value='li'>厘<\/option>";
            strVar += "<\/select>";
            var $select = $(strVar);
            $select.val(data.model);
            $tr.find('.multiple').after($select);
            $select.wrap("<td></td>");
 
            $mulInput.blur(function () { //倍数输入事件
                { //格式
                    if ($(this).val() == '') return;
                    var val = $(this).val();
                    if (/^[0-9]*$/.test(val)) {
                        val = Number(val);
                        if (val > 10000) $(this).val(10000);
                        if (val < 1) $(this).val(1);
                    } else {
                        $(this).val(1);
                    }
                } { //计算
                    var oldMul = data.multiple;
                    var newMul = $(this).val();
                    data.multiple = newMul;
                    var $total = $(this).parent().nextAll('.total');
 
                    //$total.html((parseInt($total.html())/oldMul*newMul).toFixed(3) + '元');
                    $total.html(compt.mul(compt.div(parseFloat($total.html()), oldMul), newMul).toFixed(3) + '元');
                }
            });
 
            $select.change(function () {
                var model = $(this).val();
                var scale = 1;
                var oldScale = m2s(data.model);
                var newScale = m2s(model);
                data.model = model;
                var $total = $(this).parent().nextAll('.total');
                //$total.html((parseInt($total.html())/oldScale*newScale).toFixed(3) + '元');
                $total.html(compt.mul(compt.div(parseFloat($total.html()), oldScale), newScale).toFixed(3) + '元');
 
                function m2s(model) {
                    var scale = 1;
                    if (model == 'yuan') {
                        scale = 1;
                    } else if (model == 'jiao') {
                        scale = 0.1;
                    } else if (model == 'fen') {
                        scale = 0.01;
                    } else if (model == 'li') {
                        scale = 0.001;
                    }
                    return scale;
                }
            });
            $tr.data('initialized', true);
        });
    }
 
    //一键投注
    $(".button").find('[data-command="quick"]').click(function () {
        /*if($('[data-injection="order-list"]').bootstrapTable('getData').length){
            App.alert('warning', '提示消息', "请先完成购彩栏中的订单，如没有完成不能快速投注！");
            return ;
        }*/
        var num = parseInt($('.play-options [data-field="num"]').html());
        if (num == 0) {
            App.alert('warning', '提示消息', "您还没选择号码！");
            return;
        }
        BootstrapDialog.show({
            cssClass: 'quick-bet',
            title: '<i class="icon lock"></i>快速投注',
            message: function () {
                /*$html=$('<table data-injection="quick-bet"></table>');
                    $html.bootstrapTable({
                        showHeader:false,clickToSelect:true,singleSelect:true,
                        data:[{money:100},{money:200},{money:300},{money:400},{money:500},{money:600},
                                {money:800},{money:1000},{money:1500},{money:2000},{money:3000},{money:5000},{money:'自定义'}],
                        columns:[{radio:true,formatter:function(value, row, index) {
                                    if (index === 0) return {checked: true};
                            }},{field:'money',editable:{type:'text',mode:'inline',validate: function(value) {
                             if( !/^[0-9]*$/.test(value)) {
                                return '请填写正确的金额！';
                            }
                        }}},{formatter:function(){
                                return '元';
                            }}]
                    });
                    var sb = $html.find('a.editable').not($html.find('a.editable:last')).unbind().removeClass('editable editable-click');
                    $html.find('a.editable:last').click(function(){ $('[data-injection="quick-bet"] a.editable').next().find('input').val(0)});
                    return $html;*/
                return "<div class='cftip lname'>彩种：" + GameData.getInfo().showName +
                    "</div><div class='cftip digest'>" + $('.play-list .selected').parent().find('>.label').text() +
                    "," + $('.play-list .selected').text() + " " + $('.ks_btn').attr('summary') +
                    "</div><div class='cftip totalm'>付款总金额：" + $('span.text-money[data-field="total"]').text() +
                    "元</div>"
            }(),
            buttons: [{
                    label: '确定投注',
                    action: function (dialog) {
                        var unitMoney = 2; // 单倍投注金额
                        var maxMultiple = 10000; // 最大投注限额
                        var calculate = function (num, amount) {
                            var unitAmountYuan = num * unitMoney; // 单倍元模式投注金额
                            var result;
                            //console.log(amount,unitAmountYuan);
                            if (amount >= unitAmountYuan) {
                                var multiple = parseInt(amount / unitAmountYuan);
                                var total = unitAmountYuan * multiple;
                                if (multiple <= maxMultiple) {
                                    result = {
                                        model: 'yuan',
                                        multiple: multiple,
                                        total: total
                                    };
                                }
                            }
                            var unitAmountJiao = unitAmountYuan * 0.1; // 单倍角模式投注金额
                            if (amount >= unitAmountJiao) {
                                var multiple = parseInt(amount / unitAmountJiao);
                                var total = unitAmountJiao * multiple;
                                var isReplace = true;
                                if (multiple <= maxMultiple) {
                                    if (result) {
                                        if (total - result.total <= 1) {
                                            isReplace = false;
                                        }
                                    }
                                    if (isReplace) {
                                        result = {
                                            model: 'jiao',
                                            multiple: multiple,
                                            total: total
                                        };
                                        //console.log(result,'jiao');
                                    }
                                }
                            }
                            var unitAmountFen = unitAmountJiao * 0.1; // 单倍分模式投注金额
                            unitAmountFen = new Number(unitAmountFen).toFixed(2);
                            if (amount >= unitAmountFen) {
                                var multiple = parseInt(amount / unitAmountFen);
                                var total = unitAmountFen * multiple;
                                var isReplace = true;
                                if (multiple <= maxMultiple) {
                                    if (result) {
                                        if (total - result.total <= 0.1) {
                                            isReplace = false;
                                        }
                                    }
                                    if (isReplace) {
                                        result = {
                                            model: 'fen',
                                            multiple: multiple,
                                            total: total
                                        };
                                    }
                                }
                            }
                            var unitAmountLi = unitAmountFen * 0.1; // 单倍厘模式投注金额
                            unitAmountLi = new Number(unitAmountLi).toFixed(3);
                            if (amount >= unitAmountLi) {
                                var multiple = parseInt(amount / unitAmountLi);
                                var total = unitAmountLi * multiple;
                                var isReplace = true;
                                if (multiple <= maxMultiple) {
                                    if (result) {
                                        if (total - result.total <= 0.01) {
                                            isReplace = false;
                                        }
                                    }
                                    if (isReplace) {
                                        result = {
                                            model: 'li',
                                            multiple: multiple,
                                            total: total
                                        };
                                    }
                                }
                            }
                            var newModel;
                            //console.log(result);
                            if (result.model == "yuan") newModel = 0;
                            if (result.model == "jiao") newModel = 1;
                            if (result.model == "fen") newModel = 2;
                            if (result.model == "li") newModel = 3;
                            $('.play-options [name="multiple"]').val(result.multiple);
                            $('.play-options [name="multiple"]').trigger("keyup");
                            $('.play-options .model a').eq(newModel).click();
                            //$('[data-injection="order-list"]').bootstrapTable("removeAll");
                            $('[data-command="submit"]').click();
                            $('[name="multiple"]').val(1);
                        }
                        //var data = $('[data-injection="quick-bet"]').bootstrapTable('getSelections');
                        var modelPoint = function () {
                            var points = {
                                'yuan': 1,
                                'jiao': 0.1,
                                'fen': 0.01,
                                'li': 0.001
                            }
                            return points[$('.model a.selected').data('val')]
                        }
                        var amount = parseInt($('input[name=multiple]').first().val(), 10) * num * unitMoney *
                            parseFloat(modelPoint());
                        //console.log(amount);
                        if (amount < 0.01) {
                            App.alert('warning', '提示消息', "使用厘模式进行投注，单注注单最小金额为0.01元！");
                            dialog.close();
                            return;
                        }
                        calculate(num, amount);
                        dialog.close();
                    }
   }, {
                    label: '取消',
                    action: function (dialog) {
                        dialog.close();
                    }
   }]
        });
    });
}
