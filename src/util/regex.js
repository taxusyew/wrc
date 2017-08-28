import {restoreValue} from './util.js';

/**
 * 银行卡号校验
 */

export const isBankCard = (str)  => {
    str = restoreValue(str);
    if (str.length < 10 || !/^[\d\s]+$/g.test(str)) {
        return false;
    }
    return true;
};

// 手机号格式校验
export const isMobile = (str) => {
    str = restoreValue(str);
    if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(str)) {
        return false;
    }
    return true;
};

/**
 * 卡后数字
 * to check... 是否是3位或4位数字
 */
export const isValidCode = (str) => {
    str = restoreValue(str);
    if (!/^\d{3,4}$/.test(str)) {
        return false;
    }
    return true;
};

/**
 * 银行卡有效期 月/年
 */
export const isValidDate = (str) => {
    // 月是0?1-12
    // 年是2位数字
    // if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(str)) {
    str = restoreValue(str);
    if (!/^(0[1-9]|1[0-2])(\d{2})$/.test(str)) {
        return false;
    }
    return true;
};

/**
 * 身份证
 */
export const isIdentityCard = (str) => {
    str = restoreValue(str);
    if (!/^\d{17}(\d|X)$/.test(str)) {
        return false;
    }

    return true;
};

/**
 * 校验护照、港澳通行证
 */
export const isPassPort = (str) => {
    console.log('isPassPort', str);

    // 月是0?1-12
    // 年是2位数字
    if (!/(^[a-zA-Z0-9]{1,18}$)/.test(str)) {
        return false;
    }
    return true;
};

/**
 * 真实姓名
 */
export const isValidName = (str) => {
    if (str === '') {
        return false;
    }
    if (/[\[\]\{\}+=\\\|~<>€£¥")(;:\/*（）（,!@#$&^%0-9]/.test(str)) {
        return false;
    }
    return true;
};
