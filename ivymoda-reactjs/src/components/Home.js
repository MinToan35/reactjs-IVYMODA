import React, { useState,useEffect } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import Slide from "./Slide";
import items from "./data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Home() {
  const [ products] = useState(items);
  const [value, setValue] = useState(0);
  const {  product, id } =  products[value];

  
  let settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };

  


  return (
    <div>
      <div className="item-nav-info">
        <div className="item-nav-info">
          <NavLink className="item-nav-info-link" to="/danh-muc/hang-nu-moi-ve">
            FREE SHIPPING ĐƠN HÀNG NGUYÊN GIÁ
          </NavLink>
        </div>
        <div className="item-nav-info">
          <NavLink
            className="item-nav-info-link"
            to="/about/chinh-sach-bao-hanh"
          >
            BẢO HÀNH TRỌN ĐỜI
          </NavLink>
        </div>
        <div className="item-nav-info">
          <NavLink
            className="item-nav-info-link"
            to="/about/chinh-sach-the-thanh-vien"
          >
            CHÍNH SÁCH THẺ THÀNH VIÊN
          </NavLink>
        </div>
      </div>
      <Slide />
      <h3>NEW ARRIVAL</h3>
      <section className="section">
        <div className=" products-center">
          {/* btn container */}
          <div className="btn-container">
            { products.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`category-btn ${index === value && "active-btn"}`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>
  
          <article className="product-container">
            <div className="product-slide">
            { product.map((duty, index) => {
              const image = duty.image;
              const name = duty.name;
              return (
                <Slider {...settings} key={index} className="product-index" >
                  {image.map((images, number) => {
                    return (
                      <div key={number} className="product-item" >
                        <img src={images} alt={id}></img>
                        <p>{name[number]}</p>
                      </div>
                    );
                  })}
                </Slider>
              );
            })}
            </div>
          </article>
        </div>
        
      </section>

      
    </div>
  );
}

export default Home;
