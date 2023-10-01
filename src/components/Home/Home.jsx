import React, { useEffect, useState } from "react";
import "./home.css";
import Category from "../Category/Category";
import Caraousel from "../Caraousel/Caraousel";
import Card from "../Card/Card";
import product from "./ProductList.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Dividerr from "../divider/Dividerr";
import PreFooter from "../PreFooter/PreFooter";
import { mobileData } from "../../productData/MobileData";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect((item) => {
    setData(product.products);
  }, []);
  const product = [
    {
      img: "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70",
      title: "Premium PowerBanks",
      offer: "Shop Now",
      des: "Mi,Realme & more",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
      title: "Top Mirrorless Cameras",
      offer: "Shop Now",
      des: "Canon, Sony, Fujifilm...",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70",
      title: "Monitors",
      offer: "From ₹7949",

      des: "Lenovo",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kl9rssw0/monitor/y/c/2/proart-display-pa278qv-27-pa278qv-asus-original-imagyfpfyzwgdygs.jpeg?q=70",
      title: "Asus  Monitors",
      offer: "From ₹14999",
      des: "Top Rated",
    },
    {
      img: "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70",
      title: "Best of Trimmers",
      offer: "From ₹399",
      des: "realme,Mi, Philips & more",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kah413k0/printer/k/f/g/brother-hl-l2321d-ind-original-imafsffc6q5bfym4.jpeg?q=70",
      title: "Printers",
      offer: "From ₹10190",
      des: "Brother",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      title: "Printers",
      offer: "From ₹3999",
      des: "HP",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70",
      title: "Monitors",
      offer: "From ₹6599",
      des: "acer",
    },
  ];
  const product2 = [
    {
      img: "https://rukminim2.flixcart.com/image/200/200/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=70",
      title: "Geared Cycles",
      offer: "From ₹3999",
      des: "Leader, Craiac & more",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
      title: "Tyres ",
      offer: "From ₹799",
      des: "Apollo, Bridgestone,Ceat and",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=70",
      title: "Yoga Mat-",
      offer: "From ₹159",

      des: "beatXP,HRX & Adrenex",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
      title: "Electronic Cycle",
      offer: "Up to 40% Off",
      des: "Nuze, Motovolt & more",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
      title: "Tricycles & Rideons ",
      offer: "Up to 70% Off ",
      des: "Figurines ,Battle Toys & more",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70",
      title: "Remote Control Toys ",
      offer: "Up to 80% Off ",
      des: "Buy Now!",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70",
      title: "Gym Essentials ",
      offer: "From ₹139",
      des: "Shop Now",
    },
    {
      img: "https://rukminim2.flixcart.com/image/200/200/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70",
      title: "Car pressure wahser",
      offer: "Up to 65% Off ",
      des: "Bosch, Black & Decker & More",
    },
  ];
  
  return (
    <div>
      <Category />
      <Caraousel />
      <Card
        product={product}
        rightImage={
          "https://rukminim2.flixcart.com/fk-p-flap/464/708/image/96dfa570f965d53a.jpg?q=70"
        }
        leftImage={
          "https://media.istockphoto.com/id/1001665648/vector/funky-colorful-drawn-musical-headphones.jpg?s=612x612&w=0&k=20&c=cWDHJFeV7-7imdJU8TA9o4-kALV0bbMlwVR5_-pQxjI="
        }
        title={"Best of Electronics"}
      />
      <Card
        product={product2}
        leftImage={
          "https://imgcdn.floweraura.com/ily-red-teddy-bear-9902437gf-A.jpg"
        }
        title={"Beauty,Food,Toys & More"}
        rightArrowPositon={0}
      />
      <Dividerr />
      <Card
        product={mobileData}
        scroll={1200}
        rightArrowPositon={0}
        leftArrowPosition={0}
        divider={true}
      />
      <PreFooter />
    </div>
  );
};
export default Home;
