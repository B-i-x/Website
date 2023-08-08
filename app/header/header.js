import { add_css } from "../tools.js"

export function load_header() {
    add_css("app/header/header.css")

    let header_wrapper = document.createElement("div")
    header_wrapper.setAttribute("id", "header")

    load_title(header_wrapper)
    $("body").append(header_wrapper)

}

function load_title(header_wrapper) {

    function indv_section(section_name) {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "section-link")

        let text = document.createElement("a")
        text.textContent = section_name
        $(wrapper).append(text)

        return wrapper
    }


    let title_wrapper = document.createElement("div")
    title_wrapper.setAttribute("class", "title")

    let icon = document.createElement("img")
    icon.src = "res/img/logo/android-chrome-512x512.png"
    icon.setAttribute("class", "logo")

    const projects = indv_section("Projects")
    const contact = indv_section("Contact")

    $(title_wrapper).append(icon, projects, contact)

    $(header_wrapper).append(title_wrapper)
}

