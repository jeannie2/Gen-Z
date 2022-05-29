//'use strict';

const genzArray = require("./genz.json");

const getRandomSlangTerm = () => {
    return genzArray[Math.floor(Math.random()*genzArray.length)];
}

const getAllSlangTerms = () => {
    return genzArray;
};

module.exports = {
 getRandomSlangTerm,
 getAllSlangTerms
};