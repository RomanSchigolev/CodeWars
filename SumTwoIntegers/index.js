const add = (x, y) => {
  if (x === 0 || y === 0) {
    return x || y;
  } else {
    const sum = x ^ y;
    const carry = (x & y) << 1;
    return add(sum, carry);
  }
};

console.log(add(4, 5)); // 9

/*
For example:
x = 4, y = 5;
1)add(4, 5):
4 (on base 10) = 00000000000000000000000000000100 (on base 2)
5 (on base 10) = 00000000000000000000000000000101 (on base 2)

00000000000000000000000000000100
            XOR(^)
00000000000000000000000000000101
--------------------------------
00000000000000000000000000000001 = 1 (on base 10)


00000000000000000000000000000100
            AND(&)
00000000000000000000000000000101
--------------------------------
00000000000000000000000000000100 = 4 (on base 10)

00000000000000000000000000000100 << 1 (shift the bits to the left by 1) = 00000000000000000000000000001000 = 8 (on base 10)


2)add(1, 8):
1 (on base 10) = 00000000000000000000000000000001 (on base 2)
8 (on base 10) = 00000000000000000000000000001000 (on base 2)

00000000000000000000000000000001
            XOR(^)
00000000000000000000000000001000
--------------------------------
00000000000000000000000000001001 = 9 (on base 10)


00000000000000000000000000000001
            AND(&)
00000000000000000000000000001000
--------------------------------
00000000000000000000000000000000 = 0 (on base 10)

00000000000000000000000000000000 << 1 (shift the bits to the left by 1) = 00000000000000000000000000000000 = 0 (on base 10)

3)add(9, 0) => 9.
*/
