import types from "../Types/types";

const PreviewReducer = (state, action) => {
  switch (action.type) {
    case types.coffeeDelete:
      return state.filter((aCoffee) => aCoffee.id !== action.payload.id);

    default:
      return state;
  }
};
export default PreviewReducer;
