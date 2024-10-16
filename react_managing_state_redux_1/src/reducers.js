const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  name: "John Doe",
  status: "online",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default rootReducer;
