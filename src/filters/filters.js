export default {
    format: function (millisecond, fmt) {
        millisecond = (millisecond + '0000').slice(0, 13);

        const time = new Date(parseInt(millisecond));
        const o = {
            'M+': time.getMonth() + 1,
            'd+': time.getDate(),
            'h+': time.getHours(),
            'm+': time.getMinutes(),
            's+': time.getSeconds(),
            'q+': Math.floor((time.getMonth() + 3) / 3),
            'S': time.getMilliseconds()
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }

        return fmt;
    },
    firstLetterChange: function(value) {
        if (/^[0-9]+/.test(value)) {
            return 'A' + value;

        }
        return value;
    },
    getLocation : function(value) {
        if (value instanceof Array) {
          return value[0].address.split(" ")[0];
        }
    },
    monthDay : function(value) {
      return value && value.trim().slice(5, 10);
    }
};
