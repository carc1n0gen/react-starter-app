
export const LOCALE_SET = 'LOCALE_SET'
function setLocale(state, locale) {
  localStorage.setItem('locale', locale)
  return {
    ...state,
    locale
  }
}

export default function localeReducer(state, action) {
  switch(action.type) {
    case LOCALE_SET: return setLocale(state, action.locale)
    default: return state
  }
}
