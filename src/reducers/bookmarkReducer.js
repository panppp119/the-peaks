import * as CONST from 'constants/bookmarkConstant'

export const bookmarkReducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case CONST.ADD_BOOKMARK:
      return [...state, action.bookmark]

    case CONST.REMOVE_BOOKMARK:
      return state.filter((bookmark) => bookmark.id === action.bookmark.id)

    default:
      return state
  }
}
