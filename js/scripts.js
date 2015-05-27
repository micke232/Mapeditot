var objectMaker = {
    name: "object",
    cssClass: NaN,
    object: false,
    x: NaN,
    y: NaN
};
var objectsArray = [];
var objectCounter = 0;

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
var grassButton = document.getElementById("buttonGrass");
grassButton.addEventListener("click", function(e){
    objectMaker.object = false;
    objectMaker.cssClass = "floor";
    paintObjects = 1;
    selected(objectMaker.cssClass);
});

var wallButton = document.getElementById("buttonWall");
wallButton.addEventListener("click", function(e){
    objectMaker.object = false;
    objectMaker.cssClass = "wall";
    paintObjects = 0;
    selected(objectMaker.cssClass);
});

var doorButton = document.getElementById("buttonDoor");
doorButton.addEventListener("click", function(e){
    objectMaker.cssClass = "door";
    objectMaker.object = true;
    selected(objectMaker.cssClass);
});

var coinButton = document.getElementById("buttonCoin");
coinButton.addEventListener("click", function(e){
    objectMaker.cssClass = "coin";
    objectMaker.object = true;
    selected(objectMaker.cssClass);
});

var blobButton = document.getElementById("buttonMonsterBlob");
blobButton.addEventListener("click", function(e){
    objectMaker.cssClass = "blob";
    objectMaker.object = true;
    selected(objectMaker.cssClass);
});

var deleteButton = document.getElementById("buttonDelete");
deleteButton.addEventListener("click", function(e){
    objectMaker.cssClass = "delete";
    objectMaker.object = false;
    selected(objectMaker.cssClass);
});

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
                newDiv.className = "floor";
                if (map[y] == objectPosition.y && map[x] == objectPosition.x){
                    newDiv.className = "";
                    newDiv.className = cssClass;
                }
            }
            if (map[y][x] == 0) {
                newDiv.className = "";
                newDiv.className = "wall";

            }
            for (var i in objectsArray){ //loops through the object array and paint the doors or what ever objects is inside objectArray
                if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "door"){
                    newDiv.className = "";
                    newDiv.className = "door";
                }

                if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "coin"){
                    newDiv.className = "";
                    newDiv.className = "coin";
                }
                
                if (x == objectsArray[i].x && y == objectsArray[i].y && objectsArray[i].cssClass == "blob"){
                    newDiv.className = "";
                    newDiv.className = "blob";
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



