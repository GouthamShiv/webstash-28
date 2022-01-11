const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

// async / await format
async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username);
        console.log(data);
        createUserCard(data);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard("No profile with this username")
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    getUser(user ? user : "gouthamshiv");
    search.value = "";
});

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio ? user.bio : '-'}</p>
                
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                    <a href="#" class="repo">Repo 4</a>
                </div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(errorMessage) {
  const cardHTML = `
        <div class="card">
            <h1>${errorMessage}</h1>
        </div>
    `;
  main.innerHTML = cardHTML;
}
// .then format
// function getUser(username) {
//     axios(API_URL + username)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }