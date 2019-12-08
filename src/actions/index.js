import weatherAPI from "../api/weatherAPI";
import backend from "../api/backend";
import history from "../history";

export const fetchWeather = (lat, lon) => async dispatch => {
  const response = await weatherAPI.get(
    `/weather?lat=${lat}&lon=${lon}&appid=d0a10211ea3d36b0a6423a104782130e`
  );
  console.log(response.data);
  dispatch({
    type: "WEATHER",
    payload: {
      deg: Math.round(response.data.main.temp - 273.15),
      city: response.data.name,
      icon: response.data.weather[0].icon
    }
  });
};

export const formSignUp = formValues => async dispatch => {
  //console.log("response await");
  const response = await backend.post("/signup", { ...formValues });
  console.log(response);
  dispatch({ type: "USER", payload: response.data });
  if (!response.data.message) {
    history.push("/");
  }
};

export const formLogIn = formValues => async dispatch => {
  console.log("response await");
  const response = await backend.post("/login", { ...formValues });
  console.log(response);

  dispatch({ type: "USER", payload: response.data });
  if (!response.data.message) {
    history.push("/");
  }
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
};
