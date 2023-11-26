export const flattenParamsObject = (obj: any, parentKey?: string) => {
  let result: any = {}

  Object.keys(obj).forEach(key => {
    const value = obj[key]
    const _key = parentKey ? parentKey + '[' + key + ']' : key

    if (typeof value === 'object') {
      result = { ...result, ...flattenParamsObject(value, _key) }
    } else {
      result[_key] = value
    }
  })

  return result
}
