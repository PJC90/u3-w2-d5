
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Ciao = () => {

  
    return(
        

                    <Carousel responsive={responsive}>
                        <div><img src="https://placekitten.com/300" alt=""/></div>
                        <div><img src="https://placekitten.com/301" alt=""/></div>
                        <div><img src="https://placekitten.com/302" alt=""/></div>
                        <div><img src="https://placekitten.com/303" alt=""/></div>
                        <div><img src="https://placekitten.com/304" alt=""/></div>
                        <div><img src="https://placekitten.com/305" alt=""/></div>
                        <div><img src="https://placekitten.com/306" alt=""/></div>
                        <div><img src="https://placekitten.com/307" alt=""/></div>
                        <div><img src="https://placekitten.com/308" alt=""/></div>
                        <div><img src="https://placekitten.com/309" alt=""/></div>
                       
                        </Carousel>
                       
            
    )
}
export default Ciao
