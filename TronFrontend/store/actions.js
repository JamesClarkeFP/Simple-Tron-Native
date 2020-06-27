export const GET_AVAILABLE = "GET_AVAILABLE"
export const SET_TEAM = "SET_TEAM"
export const GET_GRID = "GET_GRID"
export const SET_GRID = "SET_GRID"
export const START_GAME = "START_GAME"
export const START_GAME_NOW = "START_GAME_NOW"
export const SET_LOOP = 'SET_LOOP'

//const proxy = 'https://cors-anywhere.herokuapp.com/'
const gridEndpoint =    'http://a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/board/'
const endpoint =        'http://a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/team/'
const startedEndpoint = 'http://a90274ef4af5a4620b2c6c6ee77bd7e2-1502387468.eu-west-2.elb.amazonaws.com:8000/tron/started/'

export const getAvailable = () => {
  return async dispatch => {
    const response = await fetch(endpoint + 1);
    const resData = await response.json();
    
    dispatch({ type: GET_AVAILABLE, team: resData.team });
  };
}

export const setLoop = (number) =>{
  return dispatch => {
    dispatch({ type: SET_LOOP, gameLoop: number})
  }
  
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
      
      //////// This converts the basic 2d array to one that my program can render values with easily //////
      let key = 0
      for (let y = 0; y<11 ; y++){
        for (let x = 0; x<10 ; x++){
          data[y][x] = {x:x, y:y, value: data[y][x], key:key}
          key++
        }
      }
      //////////

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
      //console.log(resData.board)
      dispatch({ type: SET_GRID, grid: JSON.parse(resData.board) });
    }
}

export const setSquare = (grid, xin,yin,value) => {
  
    return async dispatch => {
      //Converts the complex 2d array to the simple one
      let data = []
      for (let y = 0; y<11 ; y++){
        let temprow = []
        for (let x = 0; x<10 ; x++){
          temprow.push(grid[y][x].value)
        }
        data.push(temprow)
      }

      let collision = false 
      for (let y = 0; y<11 ; y++){
        for (let x = 0; x<10 ; x++){
            if (y == yin && x==xin){ //this only passes when it is the square we are adding  
                if (data[y][x] != 0.5){
                  //console.log(data[y][x])
                  collision = true
                } else {
                  data[y][x] = value //replaces the value with the one desired
                }
            }
        }
      }

      //fills the screen on collision
      if (collision == true){
        for (let y = 0; y<11 ; y++){
          for (let x = 0; x<10 ; x++){
                data[y][x] = 1
          }
        }
        collision =false 
      }


      //////////
      //Sets the current grid state from the api
      const response2 = await fetch(gridEndpoint + '1',{
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({board:JSON.stringify(data)}) // body data type must match "Content-Type" header
      });
      const resData2 = await response2.json();

      dispatch({ type: SET_GRID, grid: JSON.parse(resData2.board)});
    };
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

export const startGameNow = (started) => {
    return dispatch => {
        dispatch({ type: START_GAME_NOW, startedNow: started });
    }
}