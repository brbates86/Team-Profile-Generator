//import employee construct
const Employee = require('./Employee');

//Engine construct
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
// return github from input
    getGithub () {
        return this.github;
    }
//overide to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;