
module.exports = ({ form }) => {
    // for (let prop in form) {
    //     if (!form[prop]) throw new ClientError(`Falta el valor de ${prop}`, 401)
    // }

    console.log(Object.keys(Movie))

    const props = []
    for (let prop in form) {
        console.log(prop)
        if (form[prop] === null) props.push(prop)
    }


    const string = props.toString(" ").slice(props.length)

    if (props.length) throw new ClientError(`Missing value on props: ${string}`, 401)





} 