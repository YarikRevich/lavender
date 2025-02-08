function enableDynamicScene(){
    document.getElementById("static-scene").className = "disabled";
    document.getElementById("dynamic-scene").className = "enabled";
    document.getElementById("drawingCanvas").className = "disabled";
    document.getElementById("scene-click").className = "disabled";
}

function enableStaticScene(){
    document.getElementById("static-scene").className = "enabled";
    document.getElementById("dynamic-scene").className = "disabled";
    document.getElementById("drawingCanvas").className = "enabled";
    document.getElementById("scene-click").className = "scene-click";
}