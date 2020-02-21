const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Ok')}, 2000);
});


//Só pode usar um await se estiver dentro de uma função async
//Com async - await
async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    //sem async -await
    // minhaPromise().then(response => {
    //     console.log(response);

    //     minhaPromise().then(response => {
    //         console.log(response);

    //         minhaPromise().then(response => {
    //             console.log(response);
    //         })
    //     })
    // })
}

// É possível utilizar tmb com arrow function
const executaPromise2 = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise2();