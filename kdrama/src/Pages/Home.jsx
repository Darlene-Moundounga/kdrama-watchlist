import Card from '../components/Card'
import kdramaData from '../data/kdramas.json'

function Home() {
    return ( 
        <div className='Card-Content'>
             {
                kdramaData.map((kdrama) =>  {
                    return <Card 
                    cover={kdrama.cover}
                    title={kdrama.title}
                    genres={kdrama.genres} 
                    id={kdrama.title}/>
                })
             }   
        </div>
    )
}
export default Home