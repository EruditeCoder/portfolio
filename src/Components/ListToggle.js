const ListToggle = (event) => {
    for (let i = 0; i < event.target.parentElement.children.length; i++) {
        const element = event.target.parentElement.children[i].firstChild
        if (element.classList.contains("font-bold") > 0) {
            element.classList.remove("font-bold")
        } else if (event.target === event.target.parentElement.children[i]) {
            element.classList.add("font-bold")
        }
    }
}

export default ListToggle