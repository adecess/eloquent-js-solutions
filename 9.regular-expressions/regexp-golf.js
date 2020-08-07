// Fill in the regular expressions

verify(/\w*(cat|car)\w*/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/\w*(pop|prop)\w*/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/\w*(ferret|ferry|ferrari)\w*/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/\b\w+ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[^e ]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
    }
}