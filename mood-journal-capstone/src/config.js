// export const { API_BASE_URL } = require('./config');

// export const fetchMoodEntries = (entries) => dispatch => {
//   fetch(`${API_BASE_URL}/api/moodjournal/entries`)
//     .then(res => {
//       if (!res.ok){
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(resJson => console.log(resJson));
// }


module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://mood-journal-capstone-backend.herokuapp.com/"
};