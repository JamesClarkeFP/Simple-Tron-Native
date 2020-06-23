import { GET_AVAILABLE, GET_GRID } from "./actions";
import { SET_TEAM, SET_GRID} from "./actions";
import { START_GAME} from "./actions";

const initialState = {
    "team":"both",
    "myTeam":"none",
    "started":"false",
    "grid":"[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]",
};
  
const state = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVAILABLE:
      return { ...state, team: action.team };
    case SET_TEAM:
      return { ...state, team: action.team , myTeam: action.myTeam };
    case GET_GRID:
        return { ...state, grid: action.board}
    case SET_GRID:
        return { ...state, grid: action.grid}
    case START_GAME:
        return { ...state, started: action.started}
    default:
      return { ...state };
  }
};
export default state;