function modPowerOfTwo(x, mod) {
  return x & (mod - 1);
}

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) == 0;
}


function lowBit(x) {
  return x & (-x);
}