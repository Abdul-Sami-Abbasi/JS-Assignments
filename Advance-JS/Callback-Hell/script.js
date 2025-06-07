console.log("Start");

// -----------------------------------------------------------

function getUserDataFromDb(name, callback) {
  setTimeout(() => {
    console.log("Getting user name");
    callback(name);
    console.log("getUserDataFromDb finished");
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting user hobbies");
    callback(["Reading", "Traveling", "Gaming"]);
  }, 2000);
}

getUserDataFromDb("Sami", (data) => {
  console.log(`User data: ${data}`);
  getUserHobbies(data, (hobbies) => {
    console.log(`User hobbies: ${hobbies}`);
  });
});

// -----------------------------------------------------------

console.log("End");
