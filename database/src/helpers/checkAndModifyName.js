module.exports = (props) => {
    let arr = []

    //SPLIT STRING TO ARRAY
    if (props.name) {
        arr = props.name.split(" ")
    } else {
        arr = props.title.split(" ")
    }

    //FIRST LETTER OF EACH WORD IS CAPITALIZED
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const value = arr.join(" ").trim()

    const keys = Object.keys(props)
    const propNameOrTitle = keys.filter(function (prop) { return prop === "name" || prop === "title" })

    return {
        value,
        propNameOrTitle: propNameOrTitle[0]
    }

}