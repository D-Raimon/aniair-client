let apiUrl
const apiUrls = {
  production: 'https://thawing-fjord-30518.herokuapp.com/',
  development: 'http://localhost:4741'
}
// https://thawing-fjord-30518.herokuapp.com/ | https://git.heroku.com/thawing-fjord-30518.git
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
