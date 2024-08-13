export default function cleanSet(set, startString) {
  let results = '';
  if (!startString || typeof startString !== 'string') return results;
  for (const str of set) {
    if (str && str.startsWith(startString)) {
      results += `${str.slice(startString.length)}-`;
    }
  }
  return results.slice(0, -1);
}
