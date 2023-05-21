async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  })
}
// validation
let t = Date.now();

sleep(100).then(() => {
  console.log(Date.now() - t); // 114 random value
});
