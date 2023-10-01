import React, { useEffect, useRef, useState } from "react";
import "./singlePage.css";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart2, BsCartFill } from "react-icons/bs";
import {addToCart} from '../redux/actions/cartAction'
import {
  AiFillHeart,
  AiOutlineArrowUp,
  AiOutlineUp,
  AiTwotoneThunderbolt,
  AiOutlineDown,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoIosInformationCircleOutline, IoMdShareAlt } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import MenuComp from "../components/Menu/MenuComp";
import { Modal } from "antd";
import ModalComp from "../lib/ModalComp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SinglePage = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  let useRefDataColor = useRef();
  const [currentIndexState, setCurrentIndexState] = useState(0);

  let { pathname } = useLocation();
  let newpath = "";
  for (let i = 0; i < pathname.length; i++) {
    if (pathname[i] === "/") {
      newpath = newpath + " > ";
    } else {
      newpath = newpath + pathname[i];
    }
  }

  const [currentImg, setCurrentImg] = React.useState(state.imgGroup[0].data[0]);
  const [heartColor, setHeartColor] = useState("single-heart-logo");
  const [showKnowMore, setShowKnowMore] = React.useState(false);
  const [zoomImageStyle, setZoomImageStyle] = React.useState({
    backgorundPosition: "0% 0%",
  });
  const [desShow, setDesShow] = useState(false);
  const [zoomShow, setZoomShow] = useState(false);

  const refTarget = useRef();
  const dispatch = useDispatch();


  const scrollDownHandler = (ruler) => {
    if (ruler > 0) {
      refTarget.current.scrollBy(0, 500);
    } else {
      refTarget.current.scrollBy(0, -500);
    }
  };
  const handleMouseOver = (e) => {
    console.log("run");
    setZoomShow(true);

    //  const  {left,top,width,height} = e.target.getBoundingClientRect();
    //  const x = (e.pagex - left) / width * 100;
    //  const y = (e.pagey - top)/height *100;
    //    setZoomImageStyle({backgorundPosition:`${x} ${y}`});
  };
  
  const colorVariantHandler = (index) => {
    setCurrentIndexState(index);
  };
  return (
    <div style={{ background: "white", margin: "0 5vh 0 5vh" }}>
      <div className="singlepage_pr">
        <div
          style={{
            height: "auto",
            backgroundColor: "white",
            position: "relative",
            width: "80vh",
          }}
        >
          <div className="single-left-grand-pr">
            <div className="single-left-pr">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <AiOutlineUp
                  className="single-left-arrow-up"
                  onClick={() => scrollDownHandler(-1)}
                />
                <div className="single-left-flex" ref={refTarget}>
                  {state.imgGroup[currentIndexState].data.map((item) => {
                    return (
                      <div className="single-left-image-pr">
                        <img
                          src={item}
                          alt="logo"
                          className="single-left-image"
                          onMouseOver={() => setCurrentImg(item)}
                        />
                      </div>
                    );
                  })}
                </div>
                <AiOutlineDown
                  className="single-left-down-arrow"
                  onClick={() => scrollDownHandler(1)}
                />
              </div>
              <div className="single-right-image-grand">
                <div
                  className="single-right-image-pr"
                  onMouseOver={() => handleMouseOver()}
                >
                  <img src={currentImg} alt="logo" />
                  <AiFillHeart
                    className={heartColor}
                    onClick={() =>
                      setHeartColor(
                        heartColor === "single-heart-logo-update"
                          ? "single-heart-logo"
                          : "single-heart-logo-update"
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="single-section-buy-btn">
              <button className="single-add-cart" onClick={()=>{
                 dispatch(addToCart(state));
                 navigate('/cart')
              }}>
                <BsCartFill />
                ADD TO CART
              </button>

              <button className="single-buy-now">
                <AiTwotoneThunderbolt /> BUY NOW
              </button>
            </div>
          </div>
        </div>
        <div className="single-main-right-pr">
          <div>
            <div>
              <div className="right-path-flex">
                <p>
                  {" "}
                  <NavLink to="/">Home</NavLink> {newpath}
                </p>
                <div className="single-share-flex">
                  <input type="checkbox" />
                  <IoMdShareAlt />
                  Share{" "}
                </div>
              </div>
              <div className="single-right-title-flex">
                {zoomShow ? <div className="single-zoom-image">hi</div> : null}
                <p>{state.title}</p>
              </div>
              <div className="single-right-ratingAndreview-flex">
                <span>{state.review}</span>
                <span>{state.rating} & </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "2vh" }}
                >
                  {state.reviews} Reviews{" "}
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="logo "
                    style={{ width: "80px" }}
                  />
                </span>
              </div>
              <div className="single-right-price-section">
                {state.price} <del>{state.discount}</del>{" "}
                <span>
                  {state.offer} <IoIosInformationCircleOutline />
                </span>
              </div>
              <div className="single-right-deliveryCharge">
                +₹59 Secured Packaging Fee
              </div>
              <div>Available offers</div>
              <div>
                <p>
                  <span></span>Eligible for Flipkart Pay Later
                </p>
                <p>
                  <span></span>Bank Offer10% Instant Discount on ICICI Bank
                  Credit Card Txns, up to ₹750 on orders of ₹5,000 and aboveT&C
                </p>
                <p>
                  <span></span>Bank Offer10% Instant Discount on ICICI Bank
                  Credit Card EMI Txns, up to ₹1,250 on orders of ₹5,000 and
                  aboveT&C
                </p>
                <p>
                  <span></span>Bank Offer10% Instant Discount on ICICI Bank
                  Debit Card and EMI Txns, up to ₹500 on orders of ₹5,000 and
                  aboveT&C
                </p>
                <MenuComp />
              </div>
              <div className="single-right-exchange">
                <div className="single-exchange-title-flex">
                  <div className="single-title-first-flex">
                    <input type="radio" name="exchange" />{" "}
                    <p>Buy Without Exchange</p>
                  </div>{" "}
                  <div>{state.price}</div>
                </div>
                <div className="single-title-second-flex">
                  <div>
                    <input type="radio" name="exchange" />
                  </div>
                  <div className="sigle-title-third-flex">
                    <p>Buy with Exchange</p> <span>₹26,999</span>
                  </div>
                </div>
                <div className="exchange-offer">
                  Includes ₹2,000 off on exchnage of your phone
                </div>
                <div className="exchange-value">
                  <p>Your mobile model</p>
                  <p>Your exchnage value:3000</p>
                </div>
              </div>
              <div className="warranty-details">
                <div>
                  <img src={state.brandImage} alt="" />
                </div>
                <div>1 Year Headset and 6 Months Accessories</div>
                {showKnowMore ? (
                  <div className="single-knowMore">
                    <div className="single-knowMore-title">
                      Warranty Details
                    </div>
                    <div>
                      <img src={state.brandImage} alt="brand" /> 1 Year Handset
                      and 6 Months Accessories
                    </div>
                    <div>
                      <div className="single-knowMore-left">
                        <h1>{state.brand}</h1>
                        <p>{state.about}</p>
                        <h1>{state.brand}</h1>
                        <p>{state.website}</p>
                      </div>
                      <div className="single-knowMore-right">
                        <p>{state.des}</p>
                        <p>
                          Televisions/Home Theaters/Refrigerator/Washing
                          machine/ Air conditioners/ Air Purifier/ streaming
                          device & Soundbars: 080-46331090 / Mobiles/Headphones
                          & others: WhatsApp chat : +91 8067916686
                          Mobiles/Headphones and others:
                          https://support.motorola.com/in/en/contactus For
                          DOA-DAP cases:
                          https://en-in.support.motorola.com/app/flipkart
                          Televisions/Home Theaters / Air Purifier/ Refrigerator
                          and Soundbars: support.moto@flipkart.com
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <pre
                    onClick={() => setShowKnowMore(true)}
                    className="btn-knowMore"
                  >
                    {" "}
                    Know more
                  </pre>
                )}
              </div>
              <div className="first-single-variant-change-flex">
                <div className="second-single-variant-change-flex">
                  <div>Color</div>
                  <div className="cart-var-pr">
                    {state.imgGroup.map((item, index) => {
                      return (
                        <img
                          src={item.data[0]}
                          className="cart-variant-img"
                          onClick={() => colorVariantHandler(index)}
                          ref={useRefDataColor}
                        ></img>
                      );
                    })}
                  </div>
                </div>
                <div className="third-single-variant-change-flex">
                  <div>RAM</div>
                  <div className="single-ram-variant">
                    {state.RAM.map((item) => {
                      return (
                        <div className="ram-variant-box" title={item}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="single-delivery-check">
                <div>Delivery</div>
                <div>
                  <div className="delivery-location-pr">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter Delivery Pincode"
                      className="deliver-check"
                    />{" "}
                    <span className="delivery-check">Check</span>
                    <MdLocationPin className="location-icons" />
                  </div>

                  <div>
                    Delivery by Dynamic | Free <del>₹40</del>{" "}
                    <AiOutlineQuestionCircle />
                    <p>if ordered before 2:31 PM</p>
                  </div>
                  <div>
                    <ModalComp />
                  </div>
                </div>
              </div>
              <div className="single-highlight-flex">
                <div>Highlights</div>
                <div>
                  <ul>
                    {state.Highlights.map((item) => {
                      return <li className="highlight-li">{item}</li>;
                    })}
                  </ul>
                </div>
                <div>Easy Payment Options</div>
                <div>
                  <ul>
                    {state.EasyPaymentOptions.map((item) => {
                      return <li className="highlight-li">{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-seller-pr">
              <div>Seller</div>
              <div>
                Flashtech Retails Dynamic
                <ul>
                  {state.Seller.map((item) => {
                    return <li className="seller-li">{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="Flipkart-plus-img-pr">
              <img src="https://rukminim2.flixcart.com/lockin/400/400/images/promotion_banner_v2_active.png?q=50"></img>
            </div>
          </div>
          <div className="singlePage-des-main">
            <div className="singlePage-first-main-title">
              {" "}
              <h1>Product Description</h1>
            </div>
            <div className="singlePageFirstDes">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vh",
                  paddingLeft: "2vh",
                }}
              >
                <div>
                  <h2>{state.ProductDescription[0].title}</h2>
                </div>
                <div>{state.ProductDescription[0].des}</div>
              </div>
              <div style={{ paddingRight: "2vh" }}>
                <img src={state.ProductDescription[0].img} alt="logo" />
              </div>
            </div>
            <div className="singlePage-second-des">
              <div className="single-second-des-img">
                <img src={state.ProductDescription[1].img} alt="logo" />
              </div>
              <div className="single-Page-second-flex">
                <div>
                  <h2>{state.ProductDescription[1].title}</h2>
                </div>
                <div>{state.ProductDescription[1].des}</div>
              </div>
            </div>

            {!desShow ? (
              <div className="singlePageDesViewAll">
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    marginTop: "2vh",
                  }}
                  onClick={() => setDesShow(true)}
                >
                  View All Features
                </button>
              </div>
            ) : (
              <div>
                {state.ProductDescription.map((item, index) => {
                  if (index % 2 === 0 && index !== 1 && index !== 0) {
                    return (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2vh",
                          }}
                          className="singlePageFirstDes"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "2vh",
                            }}
                          >
                            <div>
                              <h2>{item.title}</h2>
                            </div>
                            <div>{item.des}</div>
                          </div>
                          <div>
                            <img src={item.img} alt="logo" />
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index % 2 !== 0 && index !== 1 && index !== 0) {
                    return (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2vh",
                          }}
                          className="singlePageFirstDes"
                        >
                          <div>
                            <img src={item.img} alt="logo" />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "2vh",
                            }}
                          >
                            <div>
                              <h2>{item.title}</h2>
                            </div>
                            <div>{item.des}</div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
          <div>hi</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
