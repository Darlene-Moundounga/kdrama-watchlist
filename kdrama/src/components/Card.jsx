function kdramaCard({cover, title,genres}) {
    return(
        <div>
           <img src={cover} alt="Couverture du kdrama" />
           <p>{title}</p>
           <p>{genres}</p>
        </div>
    )
}

export default kdramaCard