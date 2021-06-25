/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

 

提示：

    每个链表中的节点数在范围 [1, 100] 内
    0 <= Node.val <= 9
    题目数据保证列表表示的数字不含前导零

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var i = 0;

    var t = 0;
    var r = []
    for (; i < l1.length && i < l2.length; i++) {
        var s = l1[i] + l2[i] + t;
        r.push(s % 10);
        if (s >= 10) {
            t = 1;
        } else {
            t = 0;
        }
    }

    var l;
    if (l1.length > l2.length) {
        l = l1;
    } else {
        l = l2;
    }
    for (; i < l.length; i++) {
        var s = l[i] + t;
        r.push(s % 10);
        if (s >= 10) {
            t = 1;
        } else {
            t = 0;
        }
    }

    if (t == 1) {
        r.push(1);
    }

    return r;
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
console.log(addTwoNumbers([2,4,3], [5,6,4]))