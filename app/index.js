import { load_header } from "./header/header.js"

window.onload = (event) => {

    setup_to_screen()

    load_header()
}

function setup_to_screen() {

    if (window.screen.width <= 500 ) {
        // console.log("setting mobile")
        window.localStorage.setItem("type", "mobile")
    }
    else {
        // console.log("setting desktop")
        window.localStorage.setItem("type", "desktop")

    }
}