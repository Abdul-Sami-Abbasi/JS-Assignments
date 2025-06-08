// function CheckNumber(number){
//     return new Promise((resolve, reject) => {
//         if(number % 2 === 0){
//             resolve(`${number} is an even number.`);
//         }else{
//             reject('${number} is an odd number');
//         }
//     })
// }

// CheckNumber(1101).then((message) => {
//     console.log(`Success: ${message}`);
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// });

// --------------------------------------------------------------------------

function callbackHell(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data1";
            console.log(data);
            resolve(data);
        }, 2000);
    });
}

function firstFunction(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            const proceessedData = `${data} - Data2`;
            console.log(proceessedData);
            resolve(proceessedData);
        }, 2000);
    });
}

function secondFunction(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            const proceessedData = `${data} - Data3`;
            console.log(proceessedData);
            resolve(proceessedData);
        }, 1000);
    });
}

callbackHell()
.then((data1) => firstFunction(data1))
.then((data2) => secondFunction(data2))
.then((data3) => {
    console.log(`Final Result of all functions with promises: ${data3}`);
})