const fetch = require("node-fetch");
const config = require("../config/config.json");

function getPerson(id) {
    fetch(`${config.urlStarWarsFindPeople}${id}`)
        .then(response => response.json())
        .then(person => console.log(person.name));
}

async function getPersonAsync(id) {
    const response = await fetch(`${config.urlStarWarsFindPeople}${id}`);
    const person = await response.json();
    console.log(person.name);
}

//getPersonAsync(1);

async function getPersonAsyncPromise(id) {
    const response = await fetch(`${config.urlStarWarsFindPeople}${id}`);
    const person = await response.json();
    return person;
}

//getPersonAsyncPromise(1).then(response => console.log(response));

async function getPersonAsyncWithError(id) {

    const response = await fetch(`${config.urlStarWarsFindPeople}${id}`);
    const body = await response.json();

    if (response.status !== 200)
        throw Error(body.detail);

    return body;
}

// getPersonAsyncWithError(0)
//     .then(person => console.log(person.name))
//     .catch(error => console.log(error.message));


async function loadPerson(id) {

    try {
        const response = await getPersonAsyncWithError(id);
        console.log(response);

    } catch (error) {
        console.error(error.message);
    }

}

// loadPerson(0);
// loadPerson(1);

//arrow function
const getPersonFunctionExpression = async (id) => {
    const response = await fetch(`${config.urlStarWarsFindPeople}${id}`);
    return await response.json();
};

// getPersonFunctionExpression(1)
//     .then(response => console.log(response.name))
//     .catch(error => console.log(error.message));


const StarWars = require("../class/starWarsClass.js");

async function loadData() {
    const sw = new StarWars();

    const person = sw.getPerson(1);
    const film = sw.getFilm(1);

    const listAction = [person, film];

    const [actionPerson, actionFilm] = await Promise.all(listAction);

    console.log(actionPerson);
    console.log(actionFilm);
}

loadData();