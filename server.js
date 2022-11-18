
function validateInput(input, tokens) {
    if (typeof input !== 'string') {
        throw new Error("Input should be a string");
    }

    if (input.length < 6) {
        throw new Error("Input should have at least 6 characters");
    }

    if (!Array.isArray(tokens)) {
        throw new Error("'tokens' should be an array");
    }

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var properties = Object.keys(token);
        if (properties.length > 1 || !properties.includes("tokenName")) {
            throw new Error("Invalid array format");
        }
    }
}


function addTokens(input, tokens) {
    validateInput(input, tokens);
    for (var i = 0; i < tokens.length; i++) {
        input = input.replace(/\.\.\./, tokens[i].tokenName)
    }
    return input
}


console.log(addTokens("Subsemnatul ..., domicilat in ...", [{ tokenName: "Cristina" }, {tokenName: "Bucharest"}]))


console.log(addTokens("Subsemnatul, domicilat in ", [{ tokenName: "Cristina" }, {tokenName: "Bucharest"}]))