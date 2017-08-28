// 判断是否在钱包APP内部
export const isInWalletApp = (qs) => {
    if (/BaiduWallet/.test(window.navigator.userAgent) || /Bainuo|BDNuomiApp/.test(window.navigator.userAgent)) {
        return true
    } else {
        return false
    }
};

// 判断入参是否为数组
export const isArray = (o) => {
    return Object.prototype.toString.call(o) === '[object Array]';
}

// 判断一个传入对象是否为空
export const empty = (x) => {
    if (!x) {
        return true;
    }
    if(isArray(x) && x.length == 0) {
        return true;
    }

    if (Object.keys(x).length == 0) {
        return true;
    }
    return false;
}

export const max = (a) => {

    if( !isArray ) {return}

    let maxLocal = a[0];

    for(let i = 0; i < a.length; i++) {
        if(parseFloat(a[i], 10) > maxLocal) {
            maxLocal = a[i]
        }
    }

    return maxLocal
}

export const min = (a, b) => {
}

export const zip = (a, b) => {
    let len = Math.min(a.length, b.length);
    let zip_array = [];
    for(let i = 0; i<len; i++) {
        zip_array.push([a[i], b[i]]);
    }
    return zip_array;
};


//分解url成为对象
export const getQueryString = () => {
    //获取url中的参数
    var search = location.search.slice(1).split('&');
    var res = {};
    var i = 0;
    var item;
    for (;item = search[i++];) {
        var parm = item.split('=');
        try {
            res[parm[0]] = decodeURIComponent(parm[1]);
        } catch (e) {
            res[parm[0]] = parm[1];
        }
    }
    return res;
}

// 大写 normalizer
export const upperNormalizer = (x) => {
    return x.toUpperCase();
}

// *两边加空格
export const starNormalizer = x => {
    x = x || '';
    return x.replace(/(\*+)/g, ' $1 ');;
};

// 通用有效期
export const commonNormalizer = (x, margin, sep) => {
    if (!x) {
        return '';
    }

    let value = x.split(sep).join('');
    if(value.length < margin) return x;
    return value.match(new RegExp('.{1,' + margin + '}', 'g')).join(sep);
}

// 分段 normalizer
export const segmentNormalizer = (x) => {
    return commonNormalizer(x, 4, ' ')
}

// 连续处理不同的分隔符
export const seriesNormalizer = (value, series) => {

    if (!isArray(series) || !value) {
        return '';
    }

    value = value.split(' ').join('');
    if(value.length < series[0]) return value;

    let head = '',
        tail = value,
        final = '';

    // 每次都切除一段文本
    for (let i = 0; i < series.length; i++) {
        let gap = series[i];
        tail = tail.split(' ').join('');
        value = commonNormalizer(tail, gap, ' ');
        head = value.slice(0, gap+1);
        tail = value.slice(gap+1);
        final += head;
    }

    // 如果字符串还有剩余
    // 就统一使用序列最后一个
    if (tail.length > 0) {
        tail = tail.split(' ').join('');
        value = commonNormalizer(tail, series[series.length-1], ' ');
        final += value;
    }
    return final;
}

// 身份证 normalizer
export const certiNormalizer = (x) => {
    return seriesNormalizer(x, [6, 8, 4]);
}

// noop normalizer
export const nope = (x) => {
    return x && x.split(' ').join('');
}

// 手机 normalizer
export const phoneNormalizer = (x) => {
    return seriesNormalizer(x, [3, 5, 3]);
}

// 有效期 normalizer
export const validDateNormalizer = (x) => {
    return commonNormalizer(x, 2, '/')
}

// 卡号 normalizer
export const cardNoNormalizer = x => {
    return seriesNormalizer(x, [4]);
};

// 得到卡类型
export const getCardType = (cardType)=> {
    return cardType == 2 ? '储蓄卡': '信用卡';
}

// 处理对象里的参数
export const pushParams = (obj, key, value) => {
    if (value && value != '') {
        obj[key] = value;
    }
}

// 将 obj 转换成 querystring
export const obj2qs = (qs) => {
    return Object.keys(qs).map(function(key) {
        return encodeURIComponent(key) + '=' +
               encodeURIComponent(qs[key]);
    }).join('&');
};

// 将 querystring 转换成 obj
export const qs2obj= (qs) => {
    if(qs.indexOf('?') > -1){
        qs= qs.split('?')[1];
    }
    var pairs = qs.split('&');
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        // result[pair[0]] = JSON.parse(decodeURIComponent(pair[1] || ''));
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
};

// 复原用户的输入，清楚所有格式
export const restoreValue = (value) => {
    if (!value) {
        return '';
    }
    value = value.split(' ').join('');
    value = value.split('/').join('');
    return value;
};

// 检查按钮能否下一步
export const checkButtonPass = (value, baseinfo) => {
    if (!value) {
        return false;
    }
    let needCheck = Object.keys(value).filter(x=> {
        // certificate_code 并不是可以渲染的组件
        if (value[x] == 1 && x != 'certificate_type' && x != 'verify_code') {
            return x;
        }
    });

    let flag = needCheck.reduce((all, cur) => {
        let camel = dash2Camel(cur);
        let info = baseinfo[camel];
        if (info) {
            return all && info.ispass;
        } else {
            return false;
        }

    }, 1);

    return flag ;
};

// 字符串首字符大写
export const upperFirstLetter = (str) => {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (x) => x.toUpperCase());
};

// 把后端返回的字段名，转换成驼峰命名
export const dash2Camel = (str) => {
    if(!str) {return str};

    let list = str.split('_');
    let result = list[0];
    for (var idx = 1; idx < list.length; idx++) {
        result += upperFirstLetter(list[idx]);
    }

    return result;
};

// 弱密码判断：是否相同
export const weak_pwd_same = (pwd) => {
    var p = 0, p1 = 0, q = pwd || 0;
    p = q % 10;
    q = (q - p) / 10;
    p1 = q % 10;
    q = (q - p1) / 10;

    if( p != p1 ) {
        return false;
    }

    while( q > 0 ) {

        p = p1;
        p1 = q % 10;
        q = (q - p1) / 10;

        if ( q < 10 ) {
            if( ( q === p1 ) && ( p1 === p)) {
                return true;
            } else {
                return false;
            }
        }

        if ( p1 === p ) {
            continue;
        } else {
            return false;
        }

    }

    return true;
}

// 弱密码判断：是否连续
export const weak_pwd_sequence = (pwd)=> {
    var p = pwd % 10;
    var q = (pwd - p) / 10;

    var p1 = q % 10;
    q = (q - p1) / 10;
    var asend = 0;

    // 升序
    if ( p === p1 + 1) {
        asend = -1;
    }
    // 降序
    else if ( p === p1 -1) {
        asend = 1;
    }
    // 不连续
    else {
        return false;
    }

    while( q > 0 ) {
        p = p1;
        p1 = q % 10;
        q = (q - p1) / 10;

        if ( p1 === p + asend ) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

// 反转接口所需要的有效期
// 月/年  -> 年月
export const reverseValidate = (x) => {
    if(!x) return '';
    let vd = x.split('');
    let server_valid_date_str = vd[2]+vd[3]+vd[0]+vd[1];
    return server_valid_date_str;
}

// 判断用户是否需要校验密码
export const needCheckPwd = x => {
    if (x == '0') {
        return false
    } else {
        return true
    }
}

// 判断是否反显可修改
export const canModifyInput = x => {
    if (x == '3') {
        return true
    } else {
        return false
    }
}

// 忘记密码
export const forgetPassword = x => {
    // BIND_CARD.track('checkpwd_findpwd', false);
    window.location.href = '//m.baifubao.com/static/wap/findpass/?ru=' + encodeURIComponent(window.location.href);
}

// 删除字符串前后的空格
export const trim = str => {
    str = str.replace(/^\s*/, '');
    str = str.replace(/\s*$/, '');
    return str;
}

// 判断一个 DOM 是否有某个类名
export const hasClass = (obj, cls) => {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

// 给一个 dom 元素添加类
export const addClass = (obj, cls) => {
    let newCls = trim(obj.className);
    if (!hasClass(obj, cls)) {
        obj.className = newCls + " " + cls;
    }
}

// 给一个 dom 元素删除类
export const removeClass = (obj, cls) => {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
