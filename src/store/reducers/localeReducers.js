import { SET_LOCALE } from '../actions'

const initialState = {
  locale: navigator.language
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_LOCALE:
      return {
        locale: action.payload.locale
      }
    default:
      return state
  }
}
