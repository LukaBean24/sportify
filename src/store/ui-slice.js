import { createSlice } from '@reduxjs/toolkit'

const initialState = { menuIsOpen: false }

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer
