function Card({cover, title,genres,id}) {
    return(
        <div className="Card" key={id}>
           <img src={cover} alt="Couverture du kdrama" />
           <p>{title}</p>
           <p>{genres}</p>
        </div>
    )
}

export default Card