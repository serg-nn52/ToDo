export const loadState = () => {
  try {
    const savedState = localStorage.getItem('state');
    console.log(savedState);
    
    if (savedState === null) {
      return undefined;
    }
    return savedState.JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  localStorage.setItem('state', JSON.stringify(state))
};