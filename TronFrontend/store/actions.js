export const GET_AVAILABLE = "GET_AVAILABLE"
export const SET_TEAM = "SET_TEAM"

//const proxy = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'http://a31f652467a434deaa17267893363707-1252241133.eu-west-2.elb.amazonaws.com:8000/tron/team/'

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