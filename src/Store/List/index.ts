import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'list',
  initialState: { selectedItems: [], data: [null] } as ListState,
  reducers: {
    setListData: (state, { payload: { data } }: ListPayload) => {
      if (typeof data !== 'undefined') {
        state.data = data
      }
    },
    setSelectedItems: (
      state,
      { payload: { selectedItems } }: SelectedItemsPayload,
    ) => {
      if (typeof selectedItems !== 'undefined') {
        state.selectedItems = selectedItems
      }
    },
  },
})

export const { setListData, setSelectedItems } = slice.actions

export default slice.reducer

export type ListState = {
  selectedItems: number[]
  data: unknown[]
}

type SelectedItemsPayload = {
  payload: {
    selectedItems: number[]
  }
}

type ListPayload = {
  payload: {
    selectedItems: number[]
    data: unknown[]
  }
}
