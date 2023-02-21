let initialState = {
  counter: 10,
};

export default function CounterReducer(state = initialState, action) {
  if (action.type === "increase") {
    return {
      ...state,
      counter: ++state.counter,
    };
  }
  if (action.type === "decrease") {
    if (state.counter > 0) {
      return {
        ...state,
        counter: --state.counter,
      };
    }
  }
  return state;
}
