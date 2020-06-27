import { GET_AVAILABLE, GET_GRID } from "./actions";
import { SET_TEAM, SET_GRID} from "./actions";
import { START_GAME, START_GAME_NOW} from "./actions";
import { SET_LOOP} from "./actions"
const initialState = {
    "team":"both",
    "myTeam":"none",
    "started":"false",
    "startedNow":"false",
    "gameLoop":-1,
    "grid":
        [[{x: 0, y: 0, value: 0.5}, {x: 1, y: 0, value: 0.5}, {x: 2, y: 0, value: 0.5}, {x: 3, y: 0, value: 0.5}, {x: 4, y: 0, value: 0.5}, {x: 5, y: 0, value: 0.5}, {x: 6, y: 0, value: 0.5}, {x: 7, y: 0, value: 0.5}, {x: 8, y: 0, value: 0.5}, {x: 9, y: 0, value: 0.5}],
        [{x: 0, y: 1, value: 0.5}, {x: 1, y: 1, value: 0.5}, {x: 2, y: 1, value: 0.5}, {x: 3, y: 1, value: 0.5}, {x: 4, y: 1, value: 0.5}, {x: 5, y: 1, value: 0.5}, {x: 6, y: 1, value: 0.5}, {x: 7, y: 1, value: 0.5}, {x: 8, y: 1, value: 0.5}, {x: 9, y: 1, value: 0.5}],
        [{x: 0, y: 2, value: 0.5}, {x: 1, y: 2, value: 0.5}, {x: 2, y: 2, value: 0.5}, {x: 3, y: 2, value: 0.5}, {x: 4, y: 2, value: 0.5}, {x: 5, y: 2, value: 0.5}, {x: 6, y: 2, value: 0.5}, {x: 7, y: 2, value: 0.5}, {x: 8, y: 2, value: 0.5}, {x: 9, y: 2, value: 0.5}],
        [{x: 0, y: 3, value: 0.5}, {x: 1, y: 3, value: 0.5}, {x: 2, y: 3, value: 0.5}, {x: 3, y: 3, value: 0.5}, {x: 4, y: 3, value: 0.5}, {x: 5, y: 3, value: 0.5}, {x: 6, y: 3, value: 0.5}, {x: 7, y: 3, value: 0.5}, {x: 8, y: 3, value: 0.5}, {x: 9, y: 3, value: 0.5}],
        [{x: 0, y: 4, value: 0.5}, {x: 1, y: 4, value: 0.5}, {x: 2, y: 4, value: 0.5}, {x: 3, y: 4, value: 0.5}, {x: 4, y: 4, value: 0.5}, {x: 5, y: 4, value: 0.5}, {x: 6, y: 4, value: 0.5}, {x: 7, y: 4, value: 0.5}, {x: 8, y: 4, value: 0.5}, {x: 9, y: 4, value: 0.5}],
        [{x: 0, y: 5, value: 0.5}, {x: 1, y: 5, value: 0.5}, {x: 2, y: 5, value: 0.5}, {x: 3, y: 5, value: 0.5}, {x: 4, y: 5, value: 0.5}, {x: 5, y: 5, value: 0.5}, {x: 6, y: 5, value: 0.5}, {x: 7, y: 5, value: 0.5}, {x: 8, y: 5, value: 0.5}, {x: 9, y: 5, value: 0.5}],
        [{x: 0, y: 6, value: 0.5}, {x: 1, y: 6, value: 0.5}, {x: 2, y: 6, value: 0.5}, {x: 3, y: 6, value: 0.5}, {x: 4, y: 6, value: 0.5}, {x: 5, y: 6, value: 0.5}, {x: 6, y: 6, value: 0.5}, {x: 7, y: 6, value: 0.5}, {x: 8, y: 6, value: 0.5}, {x: 9, y: 6, value: 0.5}],
        [{x: 0, y: 7, value: 0.5}, {x: 1, y: 7, value: 0.5}, {x: 2, y: 7, value: 0.5}, {x: 3, y: 7, value: 0.5}, {x: 4, y: 7, value: 0.5}, {x: 5, y: 7, value: 0.5}, {x: 6, y: 7, value: 0.5}, {x: 7, y: 7, value: 0.5}, {x: 8, y: 7, value: 0.5}, {x: 9, y: 7, value: 0.5}],
        [{x: 0, y: 8, value: 0.5}, {x: 1, y: 8, value: 0.5}, {x: 2, y: 8, value: 0.5}, {x: 3, y: 8, value: 0.5}, {x: 4, y: 8, value: 0.5}, {x: 5, y: 8, value: 0.5}, {x: 6, y: 8, value: 0.5}, {x: 7, y: 8, value: 0.5}, {x: 8, y: 8, value: 0.5}, {x: 9, y: 8, value: 0.5}],
        [{x: 0, y: 9, value: 0.5}, {x: 1, y: 9, value: 0.5}, {x: 2, y: 9, value: 0.5}, {x: 3, y: 9, value: 0.5}, {x: 4, y: 9, value: 0.5}, {x: 5, y: 9, value: 0.5}, {x: 6, y: 9, value: 0.5}, {x: 7, y: 9, value: 0.5}, {x: 8, y: 9, value: 0.5}, {x: 9, y: 9, value: 0.5}],
        [{x: 0, y: 10, value: 0.5}, {x: 1, y: 10, value: 0.5}, {x: 2, y: 10, value: 0.5}, {x: 3, y: 10, value: 0.5}, {x: 4, y: 10, value: 0.5}, {x: 5, y: 10, value: 0.5}, {x: 6, y: 10, value: 0.5}, {x: 7, y: 10, value: 0.5}, {x: 8, y: 10, value: 0.5}, {x: 9, y: 10, value: 0.5}]]
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
    case START_GAME_NOW:
        return { ...state, startedNow: action.startedNow}
    case SET_LOOP:
        return { ...state, gameLoop: action.gameLoop}
    default:
      return { ...state };
  }
};
export default state;