/**
 * 正则
 */
// 手机号
export const mobile = /^1[3456789]\d{9}$/
// 座机，必须0开头且包含短横线
export const phone = /^0\d{2,3}-\d{6,8}$/
// 邮箱
export const email = /^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/
// 数字
export const number = /^\d+$/
// 数字字母
export const numberLetter = /^[A-Za-z0-9]+$/
// 身份证
export const ID = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 中文
export const Chinese = /^[\u4e00-\u9fa5]+$/