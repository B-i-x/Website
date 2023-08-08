import { add_css } from "../tools.js"

export function load_header() {
    add_css("app/header/header.css")

    let header_wrapper = document.createElement("div")
    header_wrapper.setAttribute("id", "header")

    load_title(header_wrapper)
    $("body").append(header_wrapper)


    const navbar_wrapper = create_navbar()
    if (window.screen.width <= 500) {
        navbar_wrapper.style.flexDirection = "column";
        let navbar_button = create_navbar_button()
        
        $(navbar_button).click(function() {
            $(navbar_wrapper).toggle( "slow", function() {
                // Animation complete.
              });
        })

        $(header_wrapper).append(navbar_button)
    }
    else {
        navbar_wrapper.style.flexDirection = "row"; 
        
        $(header_wrapper).append(navbar_wrapper)
    }

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

function create_navbar() {
    function indv_section(section_name) {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "section-link")

        let text = document.createElement("a")
        text.textContent = section_name
        $(wrapper).append(text)

        return wrapper
    }

    let wrapper = document.createElement("div")
    wrapper.setAttribute("id", "navbar_wrapper")

    const projects = indv_section("Projects")
    const contact = indv_section("Contact")


    wrapper.style.display = "flex"
    $(wrapper).append(projects, contact)

    return wrapper

}

function create_navbar_button() {
    let button = document.createElement("button")
    button.setAttribute("id", "navbar_button")

    button.style.backgroundImage = "url('res/img/menu.png')"

    return button
  
}

