export default function hasValuesFromArray(values, array) {
  for (const item of array) {
    if (!values.has(item)) {
      return false;
    }
  }
  return true;
}
