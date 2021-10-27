import { api } from '../../api'
import fetchListData from './fetchListData'

export const listApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchListData(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = listApi
