function PromiseWithTimeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args).then(resolve, reject)
      setTimeout(() => reject("Time Limit Exceeded"), t)
    })
  }
};