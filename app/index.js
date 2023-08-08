import { load_header } from "./header/header.js"
import { load_main } from "./home/home.js"

window.onload = (event) => {

    setup_to_screen()

    load_header()

    load_main()
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