// const result = document.querySelector('.results');

// async function fetchData() {
//     try {
//         const response = await fetch("data.json");
//         if (!response.ok) throw Error(response.statusText);
//         const data = await response.json();
//         result.textContent = data.name;
//         result.textContent = data.age;
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchData()

// ---------------------------------------------------------------------
const btn = document.querySelector('.btn');
btn.addEventListener('click', makeRequest);

function makeRequest(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if(!res.ok) throw Error(res.statusText);
            return res.json();
        }).then((data) => {
            // document.querySelector('.id').innerHTML = (data.id);
            // document.querySelector('.title').innerHTML = (data.title);
            // document.querySelector('.body').innerHTML = (data.body);
            let output = document.querySelector('.all-posts');
            data.forEach(post => {
                output.innerHTML += `
                    <div>(title) : <h2>${post.title}</h2></div>
                    <div>(id) : <h3>${post.title}</h3></div>
                    <div>(body) : <p>${post.body}</p></div>
                `;
            });

        }).catch((err) => {
            console.error('Error fetching data:', err);
            document.querySelector('.error').textContent = 'Failed to fetch data';
        })
}