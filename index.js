function getStyle(id, name)
{
    var element = document.getElementById(id);
    return element.currentStyle ? 
            element.currentStyle[name] : window.getComputedStyle ? 
                window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

function toggleContent(sectionId = ""){ 
    var elmt = document.getElementById(sectionId);
    var display = getStyle(sectionId, "display");
    if(elmt != null){
        if(display === "none"){
            elmt.style.display = "block";
        } else {
            elmt.style.display = "none";
        }
    }
}