const INITIAL_STATE = { userId: null, username: "", uploadedImages: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
