export default {
  /**
   * 格式化金额
   * @param {number} amount - 金额
   * @param {number} [digits] - 小数位数
   * @return {string} 格式化后的数字，默认两位小数
   */
  currency(amount, digits = 2) {
    // const num = Math.pow(10, digits)
    const num = 10 ** digits
    const result = Math.round(amount * num) / num
    return `￥${result.toFixed(digits)}`
  },
}
