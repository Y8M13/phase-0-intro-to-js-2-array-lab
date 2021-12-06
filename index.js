// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
    var name_1=[...cats, name]
    return name_1;
}
function prependCat(name) {
    var name_2=[name, ...cats];
    return name_2;
}
function removeLastCat(name) {
    var catz=cats.slice(0,cats.length-1);
    return catz;
}
function removeFirstCat(name) {
    var catz=cats.slice(1);
    return catz;
}