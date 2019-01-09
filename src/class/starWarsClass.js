const fetch = require("node-fetch");
const config = require("../config/config.json");

//class
class StarWars {
    async getPerson(id) {
        const response = await fetch(`${config.urlStarWarsFindPeople}${id}`);
        return await response.json();
    }

    async getFilm(id) {
        const response = await fetch(`${config.urlStarWarsFindFilm}${id}`);
        return await response.json();
    }
}

module.exports = StarWars;
