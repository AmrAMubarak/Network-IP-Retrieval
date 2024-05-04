const os = require("node:os");

function getPrivateIp() {
  const interface = os.networkInterfaces();
  console.log(interface["WiFi"]);
  for (const inface in interface) {
    for (const details of interface[inface]) {
      if (!details.internal && details.family === "IPv4") {
        return [details.address, details.netmask];
      }
    }
  }
}

function toBinary(addressORsubnet) {
  const number = addressORsubnet.split(".").map((value) => Number(value));
  const numberToBinary = number.map((address) => address.toString(2));
  return numberToBinary;
}

function result(address, subnet) {
  const res = [];
  for (let i = 0; i < 4; i++) {
    res.push(parseInt(address[i], 2) & parseInt(subnet[i], 2));
  }
  return res;
}
const [address, netmask] = getPrivateIp();
console.log(toBinary(address));
console.log(toBinary(netmask));
console.log(result(toBinary(address), toBinary(netmask)).join("."));
