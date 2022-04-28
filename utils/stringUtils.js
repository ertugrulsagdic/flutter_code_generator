// make first letter lowecase
const makeFirstLetterLowerCase = (/** @type {string} */ str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// make first letter uppercase
const makeFirstLetterUpperCase = (/** @type {string} */ str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// make snackcase to camelcase
const makeSnackCaseToCamelCase = (/** @type {string} */ str) => {
    return makeFirstLetterUpperCase(
        str.replace(/(\_[a-z])/g, function ($1) {
            return $1.toUpperCase().replace('_', '');
        })
    );
}

module.exports = {
    makeFirstLetterLowerCase,
    makeFirstLetterUpperCase,
    makeSnackCaseToCamelCase
}