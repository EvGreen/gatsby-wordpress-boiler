import qs from "query-string"

const url = typeof window !== 'undefined' ? window.location : '';

const setQueryStringWithoutPageReload = qsValue => {
  const newurl =
    url.protocol +
    "//" +
    url.host +
    url.pathname +
    qsValue
  window.history.pushState({ path: newurl }, "", newurl)
}

export const getQueryStringValue = (
  key,
  queryString = url.search
) => {
  const values = qs.parse(queryString)
  return values[key]
}

export const setQueryStringValue = (
  key,
  value,
  queryString = url.search
) => {
  const values = qs.parse(queryString)
  const newQsValue = qs.stringify({
    ...values,
    [key]: value
  })
  setQueryStringWithoutPageReload(`?${newQsValue}`)
};
