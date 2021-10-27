export const validURL = (str: string): boolean => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )
  return pattern.test(str)
}

export const formatLink = (str: string): string => {
  const prefixHttps = 'https://'
  const prefixHttp = 'http://'
  let localStr = str.slice()
  if (
    localStr.substr(0, prefixHttps.length) !== prefixHttps &&
    localStr.substr(0, prefixHttp.length) !== prefixHttp
  ) {
    localStr = prefixHttps + localStr
  }
  return localStr
}
