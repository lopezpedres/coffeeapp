import types from "../Types/types";

const PreviewReducer = (state, action) => {
  switch (action.type) {
    case types.coffeeDelete:
      return state.filter((aCoffee) => aCoffee.id !== action.payload.id);
    case types.coffeeUpdate:
      return state.map((aCoffee) =>
        aCoffee.id === action.payload.id ? action.payload : aCoffee
      );

    default:
      return state;
  }
};
export default PreviewReducer;
