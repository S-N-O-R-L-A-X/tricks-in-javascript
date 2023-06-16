function f() {
  const url = "https://dds.bridgewebs.com/cgi-bin/bsol2/ddummy?dealstr=W:Q2.52.AJ63.A8532xJT98.JT98.KQT8.TxK53.KQ74.75.KQJ7xA764.A63.942.964&sockref=1685632564329&request=m&uniqueTID=1685632564329";
  fetch(url).then((res) => {
    console.log(res);
    return res.json();
  }).then((x) => {
    return x;
  })
}

const x = f();
console.log(x);
