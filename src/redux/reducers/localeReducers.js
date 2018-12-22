import { SET_LOCALE } from '../actionTypes'

const initialState = {
  language: {
    locale: navigator.language
  }
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_LOCALE:
      return {
        language: {
          locale: action.payload.locale
        }
      }
    default:
      return state
  }
}
