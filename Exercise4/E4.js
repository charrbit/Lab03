function update() {
    let theParagraph = document.getElementById("mainParagraph");

    // border data
    let redVal = document.getElementById("redBordVal").value;
    let greenVal = document.getElementById("greenBordVal").value;
    let blueVal = document.getElementById("blueBordVal").value;
    let widthVal = document.getElementById("widthVal").value;
    
    theParagraph.style.border = widthVal + "px solid rgb(" + redVal + "," + greenVal + "," + blueVal + ")";

    // background data
    redVal = document.getElementById("redBackVal").value;
    greenVal = document.getElementById("greenBackVal").value;
    blueVal = document.getElementById("blueBackVal").value;

    theParagraph.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
}