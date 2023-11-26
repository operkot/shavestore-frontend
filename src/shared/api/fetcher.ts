import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

const axsinstance = axios.create({ baseURL: `${BASE_URL}/api` })

export default function ({
  url = '/',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
}) {
  return axsinstance({ url, method, headers, params, data }).then(
    res => res.data
  )
}
