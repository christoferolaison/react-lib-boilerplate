// @flow

function merge(a: Object, b: Object): Object {
  return { ...a, ...b }
}

export default merge
