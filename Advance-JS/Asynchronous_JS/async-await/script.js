// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(console.log);  // Output: Hello


// -----------------------------------------------------------------------

// //normal f
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = `Data fetched from server!`;
//             resolve(data);
//         }, 4000)
//     })
// }

// //async function
// async function displayData(){
//     try {
//         console.log("Fetching data from server...");
//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log("Data displayed successfully!");       
//     } catch (error) {
//         console.log(error)
//     }
// } 

// //calling the function
// displayData();

// --------------------------------------------------

// exercise
console.log('Start');

function getUserDataFromDb(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Just got name : ${name}');
            resolve(name);
        }, 2000)
    })
}

function getUserHobbiesFromDb(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting hobbies...');
            resolve(['Cricket', 'Reading', 'Journaling']);
        }, 2000)
    })
}

async function getUserData(name) {
    try {
        const username = await getUserDataFromDb(name);
        console.log(`User Name : ${username}`);
        const hobbies = await getUserHobbiesFromDb(username);
        console.log(`User Hobbies : ${hobbies}`);
        
    } catch (error) {
        console.log('Error fetching user data:', error);
    }
}

getUserData("Abdul Sami Abbasi");

console.log('End');