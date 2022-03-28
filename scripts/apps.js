var list = [];
document.getElementById("output").innerHTML = list;

function yesFunction() {
    list.push('YES');
    document.getElementById("output").innerHTML = list;
}

function noFunction() {
    list.push('NO');
    document.getElementById("output").innerHTML = list;
}

console.log(list)