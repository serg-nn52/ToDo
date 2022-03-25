const filterReducer = (
  state = "",
  action: { type: string; payload: string }
) => {
  switch (action.payload) {
    case "all": {
      return "all";
    }
    case "done": {
      return "done";
    }
    case "actual": {
      return "actual";
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
