import React, { useState } from "react";
import "./card.css";
import { useRef } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
const Card = (props) => {
  
  const containerRef = useRef(null);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [show1, set1Show] = useState(false);
  const { rightArrowPositon} = props;
  const {leftArrowPosition} = props

  const scrollNext = (value) => {
    console.log(containerRef.current);
    if (value > 0) {
      containerRef.current.scrollBy(props.scroll?  props.scroll:1000, 0);
      set1Show(true);
    } else {
      containerRef.current.scrollBy(props.scroll? -props.scroll:-1000, 0);
      set1Show(false);
    }
  };
  return (
    <div className="grand-pr">
     
    
     {
       props.title ? <div>
       <div className="left-btn-section">
         <h1 className="left-title">{props.title}</h1>
        
         <button >view All</button>
       </div>
       <div className="left-image-pr">
         <img
           className="left-image"
           src={props.leftImage}
           alt="logo"
         />
       </div>
     </div>: null
     } 
      
      <div className="grand-flex-pr" style={{width: props.divider? '100%':null}}>
      
        {show1 ? (
          <div className="left-btn" onClick={() => scrollNext(-1)} style={{left:leftArrowPosition+'px'}}>
            <AiOutlineLeft />
          </div>
        ) : (
          <div className="right-btn" onClick={() => scrollNext(1)} style={{right: rightArrowPositon+'px'}}>
            <AiOutlineRight />
          </div>
        )}
        <div className="card-flex" ref={containerRef}>
          
          {props.product.map((item,i) => {
            console.log(props.product)
            return (
              <div className="card-pr" key={i}>
               <Link to={'/SinglePage/'+item.category+'/'+ item.brand} state={item}><img src={item.img} alt="logo" className="card-images" /></Link> 
                <p className="product-title">{item.title}</p>
                {
                  item.review ?    <div>
                    <div className="review-flex">
                      <div className="review-background">{item.review} <AiFillStar style={{color:'white',width:'12px' }}/></div>
                      <div>{item.rating}</div>
                    </div>
                    <div className="price-flex">
                      <div className="product-price">{item.price}</div>
                      <del>{item.discount}</del>
                      <div>{item.offer}</div>d
                    </div>
                  </div>:<div>
                  <p className="offer">{item.offer}</p>
                <p className="des">{item.des}</p>
                  </div>
                }
                
              </div>
            );
          })}
        </div>
      {
        props.rightImage ?   <div className="right-image-pr">
        <img className="right-image" src={props.rightImage} alt="logo" />
        </div>  :null
       
      }  
      </div>
    </div>
  );
};

export default Card;
