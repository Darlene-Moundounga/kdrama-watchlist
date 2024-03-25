import About from '../components/About'
import Card from '../components/Card'
import Header from '../components/Header/Header'
import Title from '../components/pageTitle/Title'
import kdramaData from '../data/kdramas.json'

function Home() {
    return ( 
        <div>
            <Header/>
            <Title/>
            <About/>
        <div className='Card-Content'>
             {
                kdramaData.map((kdrama) =>  {
                    return <Card 
                    cover={kdrama.cover}
                    title={kdrama.title}
                    genres={kdrama.genres} 
                    key={kdrama.title}/>
                })
             }   
        </div>
        </div>
    )
}
export default Home