import { Carousel } from 'antd';
import '../Caraousel/caraousel.css';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const Caraousel = () => (
    <Carousel dots={null} style={{ padding: '2vh' }} arrows prevArrow={<AiOutlineLeft className='left-arrow' />} nextArrow={<AiOutlineRight/>} autoplay id='carousel'>
      <div className='image-pr'>
        <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/b063fe6dfa04f38a.jpg?q=50' alt='logo1' />
      </div>
      <div className='image-pr'>
        <img className='image' src='https://rukminim1.flixcart.com/fk-p-flap/844/140/image/7fd0e4ab26429926.jpg?q=50' alt='logo2' />
      </div>
      <div className='image-pr'>
        <img className='image' src='https://storiesflistgv2.blob.core.windows.net/stories/2019/09/Flipkart-BigBillionDays2019-banner.jpg' alt='logo3' />
      </div>
    </Carousel>
  );
  
  export default Caraousel; 