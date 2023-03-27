const charsUsed = [];

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
    if (charsUsed.length < charList.length){
      var d1 = Math.floor(Math.random() * (charList.length - 1));
      var d2 = Math.floor(Math.random() * (charList.length - 1));
      var d3 = Math.floor(Math.random() * (charList.length - 1));
      var monkaW = 0;
      while (charsUsed.includes(d1)) {
        d1 = Math.floor(Math.random() * (charList.length - 1))
        monkaW += 1;
        if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
            break;
        }
      }
      monkaW = 0;
      while (d1 == d2 || d2 == d3 || charsUsed.includes(d2)) {
        d2 = Math.floor(Math.random() * (charList.length - 1))
        monkaW += 1;
        if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
            break;
        }
      }
      monkaW = 0;
      while (d1 == d3 || d2 == d3 || charsUsed.includes(d3)) {
        d3 = Math.floor(Math.random() * (charList.length - 1))
        monkaW += 1;
        if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
            break;
        }
      }
      charsUsed.push(d1);
      charsUsed.push(d2);
      charsUsed.push(d3);
      
      document.getElementById("drag1").src = charList[d1];
      document.getElementById("drag2").src = charList[d2];
      document.getElementById("drag3").src = charList[d3];
      
      // const drag = document.createElement("img");
      // drag.src = charList[d2];

      // document.body.appendChild(drag);
    }
  }

  function newCharacters(){

    var d1 = Math.floor(Math.random() * (charList.length - 1));
    var d2 = Math.floor(Math.random() * (charList.length - 1));
    var d3 = Math.floor(Math.random() * (charList.length - 1));
    var monkaW = 0;
    while (charsUsed.includes(d1)) {
        d1 = Math.floor(Math.random() * (charList.length - 1))
        monkaW += 1;
        if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
            break;
        }
    }

    while (d1 == d2 || d2 == d3 || charsUsed.includes(d2)) {
      d2 = Math.floor(Math.random() * (charList.length - 1))
      monkaW += 1;
      if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
          break;
      }
    }
    monkaW = 0;
    while (d1 == d3 || d2 == d3 || charsUsed.includes(d3)) {
      d3 = Math.floor(Math.random() * (charList.length - 1))
      monkaW += 1;      
      if (monkaW > 1000) { //pretty sure the while loop should work fine but just in case OMEGALUL
          break;
      }
    }
    charsUsed.push(d1);
    charsUsed.push(d2);
    charsUsed.push(d3);
    

    const ele1 = document.createElement("img");
    const ele2 = document.createElement("img");
    const ele3 = document.createElement("img");
    defineEle(ele1, d1);
    defineEle(ele2, d2);
    defineEle(ele3, d3);
    

    document.getElementById("chars").appendChild(ele1);
    document.getElementById("chars").appendChild(ele2);
    document.getElementById("chars").appendChild(ele3);
    if (charsUsed.length == 66){
      document.getElementById("btn").disabled = true;
    }

  }
  
  function defineEle(ele1, d1){
    ele1.src = charList[d1];
    ele1.draggable = true;
    ele1.ondrag = function(ev){
      let x = ev.clientX;
      console.log("X coords: " + x);
      //      document.getElementById("div1").appendChild(ele);
      if (x >= 380 && x < 800){
        document.getElementById("div1").appendChild(ele1);
      } else if (x >= 820 && x < 1100){
        document.getElementById("div2").appendChild(ele1);
      } else if (x >= 1100){
        document.getElementById("div3").appendChild(ele1);
      }
    }
  }
