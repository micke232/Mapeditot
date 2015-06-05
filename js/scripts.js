var objectMaker = {
  name: "object",
  cssClass: NaN,
  object: false,
  uniqueId: NaN,
  x: NaN,
  y: NaN
};
var objectsArray = [];
var objectCounter = 0;
var JSONextraction = [];
var parsed = NaN;
var map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] //10
]; //0 1 2 3 4 5 6 7 8 9 10  12  14  16
                         //11  13  15

//buttons
document.addEventListener("click", function(e){
  var buttonId = e.srcElement.id;
  switch(buttonId){ //Made a switch for all the buttons.
    case "buttonGrass":
      objectMaker.object = false;
      objectMaker.cssClass = "floor";
      paintObjects = 1;
      selected(objectMaker.cssClass);
      break;

    case "buttonWall":
      objectMaker.object = false;
      objectMaker.cssClass = "wall";
      paintObjects = 0;
      selected(objectMaker.cssClass);
      break;

    case "buttonDoor":
      objectMaker.cssClass = "door";
      objectMaker.object = true;
      selected(objectMaker.cssClass);
      break;

    case "buttonCoin":
      objectMaker.cssClass = "coin";
      objectMaker.object = true;
      selected(objectMaker.cssClass);
      break;

    case "buttonMonsterBlob":
      objectMaker.cssClass = "blob";
      objectMaker.object = true;
      selected(objectMaker.cssClass);
      break;

    case "buttonDelete":
      objectMaker.cssClass = "delete";
      objectMaker.object = false;
      selected(objectMaker.cssClass);
      break;

    case "buttonUniqueId":
      objectMaker.cssClass = "add";
      var checker = objectMaker.cssClass;
      objectMaker.object = false;
      objectUniqueId();
      break;
    
    case "buttonSave": 
      objectMaker.cssClass = "";
      var checker = objectMaker.cssClass;
      objectMaker.object = false;
      saveTextAsFile();
      break;
  };
});

//unique id button
function objectUniqueId(){
  var x = objectMaker.x;
  var y = objectMaker.y;
  for (var i in objectsArray){
    if (x == objectsArray[i].x && y == objectsArray[i].y){
      objectsArray[i].uniqueId = document.getElementById("uniqueValueIdInput").value;
      document.getElementById("consoleDiv").innerHTML = "Unique ID of object = " + document.getElementById("uniqueValueIdInput").value + "<br>" + "position x " + x + " y " + y;
      document.getElementById("uniqueValueIdInput").value = "";


    }
  }
};

var paintObjects = NaN;
var objectPosition = {
  x: NaN,
  y: NaN
};

document.getElementById("map").addEventListener("click", function(e){
  var x = e.target.dataset.x; 
  var y = e.target.dataset.y;
  map[y][x] = paintObjects;
  objectPosition.x = x;
  objectPosition.y = y;
  if (objectMaker.cssClass == "delete"){
    for (var i in objectsArray){
      if (x == objectsArray[i].x && y == objectsArray[i].y){
        objectsArray.splice(i, 1);//deletes the object that has the position x and y 1 is for only 1 object

      }
    };
  }
  if (objectMaker.object == true || objectMaker.cssClass != objectMaker.cssClass == "delete"){ //Check if its acutally an object or not. (false is just wall or floor).
    objectMaker.x = x; //gives the position of the object 
    objectMaker.y = y;
    objectCounter++
    makeNewObject(); //call the function that makes the new object
  }

  drawMap();
});


var element = document.getElementById("map"); 

function drawMap(){

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (var y = 0; y < map.length; y++){
    for (var x = 0; x < map[y].length; x++){
      var newDiv = document.createElement("div");
      newDiv.classList.add("floor");
      newDiv.dataset.x = x;
      newDiv.dataset.y = y;
      if (map[y][x] == 1) {
        newDiv.className = "";
        newDiv.className = "floor sel";
        if (map[y] == objectPosition.y && map[x] == objectPosition.x){
          newDiv.className = "";
          newDiv.className = cssClass;
        }
      }
      if (map[y][x] == 0) {
        newDiv.className = "";
        newDiv.className = "wall sel";

      }
      for (var i in objectsArray){ //loops through the object array and paint the doors or what ever objects is inside objectArray
        if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "door"){
          newDiv.className = "";
          newDiv.className = "door sel";
        }

        if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "coin"){
          newDiv.className = "";
          newDiv.className = "coin sel";
        }

        if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "blob"){
          newDiv.className = "";
          newDiv.className = "blob sel";
        }

        element.appendChild(newDiv);
      }
    }

  }
};

function makeNewObject(){
  //pushes new objects into "objects".
  var object = {
    name: "object",
    uniqueId: objectMaker.uniqueId,
    cssClass: objectMaker.cssClass,
    object: objectMaker.object,
    x: objectMaker.x,
    y: objectMaker.y
  };
  objectsArray.push(object);
};

function selected(css){
  selectedDiv = document.getElementById("selected");
  selectedDiv.className = "";
  selectedDiv.className = css;
}

makeNewObject();
drawMap();


//save file to disk
function saveTextAsFile()
{ //storing information in a JSON object
  var mapObject = [map,objectsArray];
  var textFileAsBlob = new Blob([JSON.stringify(mapObject)]);
  
  var fileNameToSaveAs = document.getElementById("fileName").value;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.URL != null)
  {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  }
  else
  {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}

//Load file from disk and puts the information in the "console"
window.onload = function(){
  var fileInput = document.getElementById("fileInput");
  var fileDisplayArea = document.getElementById("consoleDiv");
  
  fileInput.addEventListener("change", function(e){
    var file = fileInput.files[0];
    var textType = /text.*/;
    if (file.type.match(textType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        JSONextraction = reader.result;
        parsed = JSON.parse(JSONextraction);
        map = parsed[0];
        objectsArray = parsed[1];
        drawMap();
        fileDisplayArea.innerText = reader.result;
      }

      reader.readAsText(file);  
    } else {
      fileDisplayArea.innerText = "File is not supported!";
    }
  });
}
