function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div>
            <p>Property concatenation Demonstration: {classes} </p>
            <p className={props.className}>Demonstration for props binding</p>
        </div>
    )
}

export default Card;