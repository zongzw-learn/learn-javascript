/**
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

 

示例 1:

输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

示例 2:

输入: amount = 3, coins = [2]
输出: 0
解释: 只用面额2的硬币不能凑成总金额3。

示例 3:

输入: amount = 10, coins = [10] 
输出: 1

 

注意:

你可以假设：

    0 <= amount (总金额) <= 5000
    1 <= coin (硬币面额) <= 5000
    硬币种类不超过 500 种
    结果符合 32 位符号整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change-2
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    // var combines = []
    var hash_combines = {}
    function findSubGroup(subAmount, combines, coinIndex) {
        var i = coinIndex;
        for (; i < coins.length; i++) {
            if (subAmount - coins[i] > 0) {
                findSubGroup(subAmount - coins[i], [...combines, coins[i]], i);
                findSubGroup(subAmount - coins[i], [...combines, coins[i]], i + 1);
            } else if (subAmount - coins[i] == 0) {
                hash_combines[[...combines, coins[i]].join(',')] = 0;
                return;
            }
        }
    }

    findSubGroup(amount, [], 0);

    Object.keys(hash_combines).forEach(k => { console.log(k)});
};

change(15, [1, 2, 5])
