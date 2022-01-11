const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");

// async / await format
async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    getUser(user ? user : "gouthamshiv");
    search.value = "";
});

// .then format
// function getUser(username) {
//     axios(API_URL + username)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }