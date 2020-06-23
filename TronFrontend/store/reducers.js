import { GET_AVAILABLE } from "./actions";
import { SET_TEAM } from "./actions";

let TEAM = {"team": "both"};
let MYTEAM = {"myTeam" : "cracker"};

const initialState = {
    "team":"both",
    "myTeam":"none"
};
  
const state = (state = initialState, action) => {
console.log(state)
  switch (action.type) {
    case GET_AVAILABLE:
      return { ...state, team: action.team };
    case SET_TEAM:
        //console.log(action.myTeam)
      return { ...state, team: action.team , myTeam: action.myTeam };
    default:
      return { ...state };
  }
};
  
export default state;