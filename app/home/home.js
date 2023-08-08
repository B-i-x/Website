import { add_css } from "../tools.js"

export function load_main() {
    add_css("/app/home/home.css")

    let main_wrapper = document.createElement("div");
    main_wrapper.setAttribute("id", "main");

    let spacer = document.createElement("p");
    spacer.setAttribute("id", "intro-spacer");
    $(main_wrapper).append(spacer);

    let intro = document.createElement("div");
    intro.setAttribute("id", "intro-text-wrapper");
    let first = document.createElement("p");
    first.textContent = "Hi, my name is"; 
    let second = document.createElement("p");
    second.textContent = "Alejandro Romero-Lozano"
    $(intro).append(first, second)
    $(main_wrapper).append(intro)

    let personal = document.createElement("img");
    personal.setAttribute("id", "intro-image");
    personal.src = "res/img/personal/alex.png";
    $(main_wrapper).append(personal);

    $("body").append(main_wrapper);

}