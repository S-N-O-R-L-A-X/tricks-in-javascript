const axios = require("axios");

axios.post('http://dds.aws.globalbridge.app/api', {
  "hands": { "S": ["D3", "C6", "DT", "D8", "DJ", "D6", "CA", "C3", "S2", "C2", "C4", "S9", "S7"], "W": ["DA", "S4", "HT", "C5", "D4", "D7", "S6", "S3", "DK", "CT", "D2", "SK", "H8"], "N": ["C7", "H6", "H7", "H9", "CJ", "SA", "S8", "SQ", "D5", "S5", "HK", "C8", "HA"], "E": ["H2", "H5", "CQ", "D9", "H4", "ST", "HQ", "SJ", "HJ", "DQ", "H3", "C9", "CK"] }
}).then(res => {
  console.log(`状态码: ${res.statusCode}`);
  console.log(res);
}).catch(error => {
  console.error(error);
})
