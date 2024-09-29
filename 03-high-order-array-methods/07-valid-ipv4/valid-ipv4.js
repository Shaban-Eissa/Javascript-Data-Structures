const isValidIPv4 = (ip) => {
  const ipEntites = ip.split(".");

  if (ipEntites.length !== 4) return false;

  return ipEntites.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

module.exports = isValidIPv4;
