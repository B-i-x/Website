import { add_css } from "../tools.js"

export function load_header() {

    let header_wrapper = document.createElement("div")
    header_wrapper.setAttribute("id", "header")

    load_title(header_wrapper)

    $("body").append(header_wrapper)

    add_css("app/header/header.css")
}

function load_title(header_wrapper) {
    let title_wrapper = document.createElement("div")
    title_wrapper.setAttribute("class", "title")

    let icon = document.createElement("img")
    icon.src = "res/img/logo/android-chrome-512x512.png"
    icon.setAttribute("class", "logo")

    let title = document.createElement("p")
    title.textContent = "Alex Romero-Lozano"

    $(title_wrapper).append(icon, title)

    $(header_wrapper).append(title_wrapper)
}

function navbar() {}