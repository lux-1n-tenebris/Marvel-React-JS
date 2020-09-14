// import React from "react";
// import axios from "axios";
// import config from "../config/";
// let timeout = null;
//
// export default handleSearch(e) {
//   let search = e.target.value;
//
//   if (timeout) {
//     clearTimeout(timeout)
//   }
//
//   timeout = setTimeout(() => {
//     axios.get(config.url + config.name + search + config.publicApi + config.hash + config.timeStamp)
//       .then(res => {
//         const heroes = res.data.data.results;
//         this.setState({
//           isLoaded: true,
//           heroes
//         });
//       }, error => {
//         console.log(error)
//       });
//   }, 500);
// }
//
// // export default handleSearch;