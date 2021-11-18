import types from "../Types/types";
const PreviewReducer = (state, action) => {
  switch (action.type) {
    case types.coffeeDelete: {
      return;
    }

    default:
      return state;
  }
};
