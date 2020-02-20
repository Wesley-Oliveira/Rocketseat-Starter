var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var nomeUser;
var repos =  [];

function renderRepos() {
    listElement.innerHTML = '';
    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement)
    }
}

renderRepos();

function find() {
    repos = ['Carregando...'];
    renderRepos();

    repos = [];
    nomeUser = inputElement.value;

    axios.get('https://api.github.com/users/'+ nomeUser +'/repos')
    .then(function(response) {
        for(var i = 0; i < response.data.length; i++){
            repos.push(response.data[i].name)
        }
        console.log(response.status)
        renderRepos();
    })
    .catch(function(error) {
        repos = [];
        renderRepos();
        console.log(error.response.status);
        alert(error.message);
    });
}

buttonElement.onclick = find;