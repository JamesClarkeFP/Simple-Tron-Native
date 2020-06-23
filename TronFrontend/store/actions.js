export const GET_AVAILABLE = "GET_AVAILABLE"
export const SET_TEAM = "SET_TEAM"
export const GET_GRID = "GET_GRID"
export const SET_GRID = "SET_GRID"
export const START_GAME = "START_GAME"

//const proxy = 'https://cors-anywhere.herokuapp.com/'
const gridEndpoint = 'http://a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/board/'
const endpoint = 'http:a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/team/'
const startedEndpoint = 'http://a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/started/'

export const getAvailable = () => {
  return async dispatch => {
    const response = await fetch(endpoint + 1);
    const resData = await response.json();
    
    dispatch({ type: GET_AVAILABLE, team: resData.team });
  };
}

export const setTeam = (colour) => {
    return async dispatch => {
      const data = {team: colour}
      const response = await fetch(endpoint + '1',{
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
       
      if (colour == 'blue') {
        dispatch({ type: SET_TEAM, team: 'blue', myTeam: 'blue' });
      } else if (colour == 'red') {
        dispatch({ type: SET_TEAM, team: 'red', myTeam: 'red' });
      } else {
        dispatch({ type: SET_TEAM, team: colour });
      }
    };
}

export const getGrid = () => {
    return async dispatch => {
      const response = await fetch(gridEndpoint + 1);
      const resData = await response.json();
      let data = JSON.parse(resData.board)
      dispatch({ type: GET_GRID, board: data });
    };
}

export const setGrid = (grid) => {
    return async dispatch => {
      const response = await fetch(gridEndpoint + '1',{
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(grid) // body data type must match "Content-Type" header
      });
      const resData = await response.json();

      dispatch({ type: SET_GRID, grid: resData.board });
    }
}

export const startGame = (started) => {
    return async dispatch => {
      const response = await fetch(startedEndpoint + '1',{
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({"started":started}) // body data type must match "Content-Type" header
      });
      const resData = await response.json();

      dispatch({ type: START_GAME, started: started });
    }
}