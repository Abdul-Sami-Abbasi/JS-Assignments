// (Brootforce Approach) B/c fatch API only rejects, when there is a network Error

// const data = fetch("text.txt")
// .then((data => data.text()))
// .then((text => console.log(text)))
// .catch((error) => console.error("Error fetching the file:", error));

// -----------------------------------------------------------------------

// const data = fetch("text.txt")
// .then((response) => {
    //     if(!response.ok) throw Error(response.statusText)
    //         return response.text();
//     }
// )
// .then((data) => console.log(data))
// .catch((error) => console.log(`error : ${error}`))

// -----------------------------------------------------------------------

const result = document.querySelector(".results");

async function fetchData(){
    try {
        const data = await fetch("text.txt")
        if(!data.ok) throw Error(data.statusText); 
        const formatedText = await data.text();
        result.innerHTML = "Loading...";
        setTimeout(() => {
            result.innerHTML = formatedText;
        }, 2000);
    } catch (error) {
        console.log(error);
        result.innerHTML = "Error fetching the file.";
    }
}

fetchData()