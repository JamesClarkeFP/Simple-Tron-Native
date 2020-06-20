export const GET_AVAILABLE = "GET_AVAILABLE"

//const proxy = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'http://a31f652467a434deaa17267893363707-1252241133.eu-west-2.elb.amazonaws.com:8000/tron/team/'

export const getAvailable = () => {
  return async dispatch => {
    const response = await fetch(endpoint);
    const resData = await response.json();

    dispatch({ type: GET_AVAILABLE, team: resData });
  };
}