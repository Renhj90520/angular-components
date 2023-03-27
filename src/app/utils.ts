export function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const maxPos = chars.length;
  let str = "";
  for (let k = 0; k < length; k++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}
