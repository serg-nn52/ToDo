export const createActionFilter = (data: string) => {
  return {
    type: "GET_FILTER",
    payload: data,
  };
};
