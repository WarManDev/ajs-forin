export default function sortFeatures(obj, args = []) {
  let arrayKeys = [];

  for (const item in obj) {
    if (args.indexOf(item) === -1) {
      arrayKeys.push(item);
    }
  }

  arrayKeys = [...args, ...arrayKeys.sort()];
  const result = [];
  for (const item of arrayKeys) {
    result.push({ key: item, value: obj[item] });
  }
  return result;
}
