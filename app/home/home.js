import { add_css } from "../tools.js"

export function load_main() {
    add_css("/app/home/home.css")

    let main_wrapper = document.createElement("div")
    main_wrapper.setAttribute("id", "main")

    let intro = document.createElement("p")
    intro.setAttribute("id", "intro-text")
    intro.textContent = "Hi, my name is Alejandro Romero-Lozano"
    $(main_wrapper).append(intro)

    $("body").append(main_wrapper)

}