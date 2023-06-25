function traverseSet() {
  for (let i = 0; i < n; i++) {
    if ((s >> i) & 1) { // i in s
      // 处理 i 的逻辑
    }
  }
}

function enumerateSetFromEmpty() {
  for (let s = 0; s < (1 << n); s++) {
    // 处理 s 的逻辑
  }
}

function enumerateSetFromAll() {
  for (let sub = s; sub; sub = (sub - 1) & s) {
    // 处理 sub 的逻辑
  }
}

