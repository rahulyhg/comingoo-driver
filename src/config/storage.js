// import firebase from "firebase";
// import { firebaseConfig } from "../../env";
// import { handlers } from "../helpers";

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export const uploadImages = async images => {
//   console.log("images", images);
//   let storageRef = storage.ref();
//   let promises = images.map(image => {
//     return new Promise((resolve, reject) => {
//       const blob = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.onload = function() {
//           resolve(xhr.response);
//         };
//         xhr.onerror = function(e) {
//           reject(new TypeError("Network request failed"));
//         };
//         xhr.responseType = "blob";
//         xhr.open("GET", image, true);
//         xhr.send(null);
//       });

//       blob.then(result => {
//         let imgRef = storageRef.child("/images/" + Math.random() + ".jpg");
//         imgRef
//           .put(result)
//           .then(function(snapshot) {
//             imgRef.getDownloadURL().then(function(url) {
//               console.log("TCL: url", url);
//               resolve(url);
//             });
//           })
//           .catch(err => reject(err));
//       });
//     });
//   });

//   try {
//     const res = await Promise.all(promises);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };
