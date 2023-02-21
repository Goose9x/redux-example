let initialState = {
  isDarkMode: true,
};

export default function DarkModeReducer(state = initialState, action) {
  if (action.type === "darkMode") {
    return {
      ...state,
      isDarkMode: !state.isDarkMode,
    };
  }
  return state;
}
