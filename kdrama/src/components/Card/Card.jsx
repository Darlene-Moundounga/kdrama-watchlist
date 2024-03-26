function Card({cover, title,genres}) {
    return(
        <div id="card" key={title}>
           <img src={cover} alt="Couverture du kdrama" />
           <p className="cardTitle">{title}</p>
           <p className="cardGenre">{genres}</p>
        </div>
    )
}

export default Card