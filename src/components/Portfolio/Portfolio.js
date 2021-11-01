import React ,{useState , useEffect} from 'react' ;
import  {PorfolioSection ,Title,List,Span , PortfolioItem,ImageWrapper,Image, Overlay,OverlaySpan}  from './style.js'
import axios from 'axios';



const Portfolio = () => {

    const [ images , setImages] = useState([]);


    useEffect(() => { 
 axios.get('js/data.json').then(res =>{setImages(res.data.portfolio)}  )   
       
          
        
    }, [])


const PortfolioImages =  images.map((imageItem) => {

return(

    <ImageWrapper key={imageItem.id}>
    <Image src={imageItem.image} alt="" />
    <Overlay>
       
    </Overlay>
</ImageWrapper>


)})

return (
        <PorfolioSection >
        <Title><Span>My</Span> Portfolio</Title>
        <List>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </List>
        
        <div class="box">
            
        {PortfolioImages}
        </div>
        
    </PorfolioSection>
    
    )
}

export default Portfolio
