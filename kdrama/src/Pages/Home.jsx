import Card from '../components/Card'
import kdramaData from '../data/kdramas.json'

function Home() {
    return ( 
        <div>
             {
                kdramaData.map((kdrama) =>  {
                    return <Card 
                    cover={kdrama.cover}
                    title={kdrama.title}
                    genres={kdrama.genres} />
                })
             }   
        </div>
    )
}
export default Home