// Cache sencillo en memoria con TTL
const cache = {};
function set(key, value, ttlMs) {
  cache[key] = { value, expires: Date.now() + ttlMs };
}
function get(key) {
  const item = cache[key];
  if (!item) return null;
  if (Date.now() > item.expires) { delete cache[key]; return null; }
  return item.value;
}
module.exports = { set, get };