import * as Type from "./type";

const initialState = {
  token: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_AUTH:
      return { ...state, profile: payload.user, token: payload.token };

    case Type.REMOVE_AUTH:
      return { ...state, profile: null, token: null };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";
