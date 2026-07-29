let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let storyResult = document.getElementById("story_result");
let form = document.querySelector(".form_container");

titleInput.oninput = function () {
    mainTitle.textContent = titleInput.value;
};

submitButton.onclick = function (event) {
    event.preventDefault();

    if (
        titleInput.value === "" ||
        noun.value === "" ||
        verb.value === "" ||
        adjective.value === ""
    ) {
        alert("Please fill in all fields!");
        return;
    }

    form.style.display = "none";

    storyResult.textContent =
        "One day I found a " +
        adjective.value +
        " " +
        noun.value +
        " that loved to " +
        verb.value +
        " all day long!";
};