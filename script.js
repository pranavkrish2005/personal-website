function returnHi() {
    return "Hi!";
}

let titleElement = documentl.getElementById("title");

function changeTitle() {
titleElement.innerHTML = returnHi();
}

setTimeout(changeTitle, 2000);

document.getElementById("title").addEventListener("click", () => {
    alert("You clicked the title!");
    document.getElementById("title").style.color = "red";
});