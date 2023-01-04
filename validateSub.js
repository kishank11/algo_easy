"use strict";
exports.__esModule = true;
exports.validateSub = void 0;
function validateSub(array, sequence) {
    // Write your code here.
    var seqIdx = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (seqIdx == sequence.length) {
            break;
        }
        if (sequence[seqIdx] == value) {
            seqIdx++;
        }
    }
    return seqIdx === sequence.length;
}
exports.validateSub = validateSub;
var ans = validateSub([1, 32, 43, 431], [1, 32, 43]);
console.log(ans);
