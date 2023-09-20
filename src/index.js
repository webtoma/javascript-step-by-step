import _ from 'lodash'
import '../src/scss/styles.scss' // Import scss
import axios from 'axios';
function component () {
  const element = document.createElement('div')
  element.classList.add('container')
  element.innerHTML = _.join(['Hello', 'OnePoint'], ' ')
  return element
}
document.body.appendChild(component())


  
let longitude = 44.83;
let latitude = -0.57;
let api_key = '891fcaaa0f613df11046ed15bd1a4607';

const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.83&lon=-0.57&appid=891fcaaa0f613df11046ed15bd1a4607`)
   .then((response)=>console.log(response.data.main.temp - 273.15))
   .catch((err)=> console.log(err))
                }
getWeather();
// logs:
// => {login: "mapbox", id: 600935, node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMDkzNQ==", avatar_url: "https://avatars1.githubusercontent.com/u/600935?v=4", gravatar_id: "", …}
// => 200
// => OK
// => {x-ratelimit-limit: "60", x-github-media-type: "github.v3", x-ratelimit-remaining: "60", last-modified: "Wed, 01 Aug 2018 02:50:03 GMT", etag: "W/"3062389570cc468e0b474db27046e8c9"", …}
// => {adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}