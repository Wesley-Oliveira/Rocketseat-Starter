//Q1 Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// sem async - await
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');

//         delay().then(() => {
//             console.log('2s');

//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

// com async - await
const executaPromise = async () => {
    await delay();
    console.log('1');
    await delay();
    console.log('2');
    await delay();
    console.log('3');
};

executaPromise();

// Q2
// import axios from 'axios';
// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//          console.log('Usuário não existe');
//     })
// }

import axios from 'axios';

    //todo retorno do axios, retorna promises
async function getUserFromGithub(username) {
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    } catch(err) {
        console.warn('Usuário não existe');
    }
}

getUserFromGithub('Wesley-Oliveira');
getUserFromGithub('Wesley-Oliveiraasdasdasd');

// Q3
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Repositório não existe');
//         })
//     }
// }

class Github {
    static async getUser(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch (err) {
            console.warn("Não encontrado");
        }
    }
}

Github.getUser('Wesley-Oliveira');
Github.getUser('Wesley-Oliveiraasdasd');

// Q4
// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.log('Usuário não existe');
//     });
// }
// buscaUsuario('diego3g');

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }   
}

buscaUsuario('Wesley-Oliveira');
buscaUsuario('Wesley-Oliveiraasdasdasasdsd');