import { GET_AVAILABLE } from "./actions";
  
let TEAM = []
  
const initialState = {
team: TEAM
};
  
const state = (state = initialState, action) => {
  let tempList = []
  switch (action.type) {
    case GET_AVAILABLE:
      return { ...state, team: action.team };

    default:
      return state;
  }
};
  
export default state;