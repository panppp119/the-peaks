import * as CONST from 'constants/loadingConstant'

export const loadingReducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case CONST.IS_LOADING:
      return action.loading

    case CONST.STOP_LOADING:
      return action.loading

    default:
      return state
  }
}
