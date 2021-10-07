function Horror(props) {
   // console.log(props)
    //console.log(props.id)
    return (
        <div class="card" >
            <h2>{props.title}</h2>
            <h3>{props.year}</h3>
            <p>{props.descriptor} Likes </p>
            <p>{props.votes} Votes </p>
            <button class="vote-btn">Vote &lt;3</button>
        </div>
    )
}

export default Horror

