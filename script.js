var oneFilled;
var twoFilled;
var threeFilled;

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function getCharacters(){
    var d1 = Math.floor(Math.random() * (charList.length - 1));
    var d2 = Math.floor(Math.random() * (charList.length - 1));
    var d3 = Math.floor(Math.random() * (charList.length - 1));

    document.getElementById("drag1").src = charList[d1];
    document.getElementById("drag2").src = charList[d2];
    document.getElementById("drag3").src = charList[d3];
    
    // const drag = document.createElement("img");
    // drag.src = charList[d2];

    // document.body.appendChild(drag);
  }

  function newCharacters(){
    var d1 = Math.floor(Math.random() * (charList.length - 1));
    var d2 = Math.floor(Math.random() * (charList.length - 1));
    var d3 = Math.floor(Math.random() * (charList.length - 1));

    
    const ele = document.createElement("img");
    ele.src = charList[d2];
    ele.draggable = true;
    ele.ondragstart = drag()

    document.body.appendChild(ele);
  }
  