import * as CONST from 'constants/bookmarkConstant'

export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case CONST.ADD_BOOKMARK:
      console.log(action)
      return [...state, action.bookmark]

    case CONST.REMOVE_BOOKMARK:
      console.log(action)
      return state.filter((bookmark) => bookmark.id === action.bookmark.id)

    default:
      return state
  }
}
