const initialState = {
  quantity: 1
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        quantity: state.quantity + 1
      };
    case "DECREMENT":
      return {
        quantity: state.quantity - 1
      };
    default:
      return state;
  }
};