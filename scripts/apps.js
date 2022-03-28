

function outPut(){
    document.getElementById("output").innerHTML = list;
}

function yesFunction() {
    list.push('YES');
    outPut();
}

function noFunction() {
    list.push("NO");
    outPut();
}

function clearList(){
    list.length =0;
    document.getElementById("output").innerHTML = "";

}


function consoleFunction(){
console.log(list);
}


let list = [];

function getVote() {
    let map = {};
    // console.log(list);
  for (let i = 0; i < list.length; i++) {
      let item = list[i];
      map[item] = (map[item] + 1) || 1;
    }
    document.getElementById("output").textContent = JSON.stringify(map);
    return map;
  }

//   getVote(list);