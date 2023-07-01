const userObj = {
  username: "kyaw swar",
  email: "kyawswar@gmail.com",
  password: "kyaw@1243",
  gender: "male",
  phnumber: 84884452,
  address: "No(5),Hlaedan Road",
  profile: [
    {
      imagename: "kyawswar.jpg",
      imagepath: "www.image.com",
      imagesize: "120KB",
    },
  ],
};
// console.log("user obj", userObj);

const data = { ...userObj };
// console.log("data", data);

// const { username, email, password, gender, phnumber, address, profile } =
//   userObj;

// console.log("adderess", profile);

// const { username, profile, ...rest } = userObj;

const {
  profile: [{ imagename, imagepath, imagesize }],
} = userObj;

console.log("image name", imagename);
console.log("image path", imagepath);
// console.log("image size", imagesize);

// console.log("username", username);

// profile.map((data) => {
//   //   console.log("data", data.imagename);
//   console.log("data", data.imagepath);
//   //   console.log("data", data.imagesize);
// });
