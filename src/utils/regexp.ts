/**
 * 正则
 */
// 手机号
export const mobile = /^1[3456789]\d{9}$/
// 座机
export const phone = /^(\d{3,4}-{0,1})?\d{6,8}$/
// 邮箱
export const email = /^\w+(\.)?(\w+)?@[0-9a-z]+(\.[a-z]+){1,3}$/
// 数字
export const number = /^\d+$/
// 数字字母
export const numberLetter = /^[A-Za-z0-9]+$/