// TODO: доделать изменение темы в JS
const button = document.querySelector(".theme-toggle");
const body = document.querySelector(".container");
const information_block = document.querySelector(".information");
const a_link = document.querySelector(".link");

a_link.onmouseover = function ()
{
    a_link.style.color = "rgb(84, 125, 186)";
}

a_link.onmouseleave = function ()
{
    a_link.style.color = "rgb(70, 174, 65)";
}

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    information_block.classList.toggle("dark-mode2");

    if (button.innerHTML === "Переключить на темную тему")
    {
        button.innerHTML = "Переключить на светлую тему";
    }
    else
    {
        button.innerHTML = "Переключить на темную тему";
    } 
});

