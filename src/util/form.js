import { restoreValue, checkButtonPass } from './util.js';

const checkAllForm = (type, value) => (dispatch, getState) => {
    let action = {
        'type': 'FORM_PASS',
        'formType': type
    };

    action[type] = {};
    action[type].value = value;

    dispatch(action);

    let state = getState();
    let cardRequired = state.card.channelInfo.card_item_required;
    let infoform = state.infoform;
    if (checkButtonPass(cardRequired, infoform)) {
        dispatch({'type': 'BUTTON_ENABLE'});
    }

}

export const formError = (e, dispatch, type) => {
    let action = {
        'type': 'FORM_ERROR',
        'formType': type
    };
    let value = restoreValue(e);
    
    action[type] = {};
    action[type].value = value;

    if (e.length == '') {
        action[type].errormsg = '';
    } else {
        action[type].errormsg = '请输入正确格式';
    }
    dispatch(action);
};

export const formInputChenk = (e, checkRule = [], dispatch, type) => {
    let value = restoreValue(e);

    let result = checkRule.map(rule => {
        return rule(value);
    });
    // 可以对 reduce 的初始值设置为 1
    // 因为如果用户没有传入 checkRule，那么就意味着输入任何值都是可以的
    let flag = result.reduce((all, cur) => {
        return all && cur;
    }, 1);
    let action = {
        'type': 'FORM_PASS',
        'formType': type
    };

    action[type] = {};
    action[type].value = value;
    action[type].errormsg = '';

    if (flag) {
        dispatch(checkAllForm(type, value));
        return true;
    } else {
        action['type'] = 'FORM_FAIL';
        dispatch(action);
        dispatch({'type': 'BUTTON_DISABLE'});
        return false;
    }

};