// algoritm
// 1. ceeate func getOwnProps(obj)
// 2. use Object.keys(obj) to return obj propetries
// 3. export func

export function getOwnProps(obj) {
  return Object.keys(obj).filter(prop => typeof obj[prop] !== 'function');
}
