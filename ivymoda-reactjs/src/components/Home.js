import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
const Home = () => {
    const slides = document.getElementById("slides");
const allSlides = document.querySelectorAll(".slide");
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;

let canISlide = true;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

next.addEventListener("click", () => switchSlide("next"));
prev.addEventListener("click", () => switchSlide("prev"));

slides.addEventListener("transitionend", checkIndex);

slides.addEventListener("mousedown", dragStart);

slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchmove", dragMove);
slides.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  initialPosition = slides.offsetLeft;

  if (e.type === "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;

    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
}

function dragMove(e) {
  if (e.type === "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }

  slides.style.left = `${slides.offsetLeft - posX2}px`;
}

function dragEnd() {
  /* 
    three possibilities:
    1. next slide
    2. prev slide
    3. stay still
    */
  finalPosition = slides.offsetLeft;
  if (finalPosition - initialPosition < -496) {
    switchSlide("next", "dragging");
  } else if (finalPosition - initialPosition > 496) {
    switchSlide("prev", "dragging");
  } else {
    slides.style.left = `${initialPosition}px`;
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

function switchSlide(arg, arg2) {
  slides.classList.add("transition");

  if (canISlide) {
    if (!arg2) {
      initialPosition = slides.offsetLeft;
    }
    if (arg === "next") {
      slides.style.left = `${initialPosition - slideWidth}px`;
      index++;
    } else {
      slides.style.left = `${initialPosition + slideWidth}px`;
      index--;
    }
  }

  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");

  if (index === -1) {
    slides.style.left = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }

  if (index === slidesLength) {
    slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
  }

  canISlide = true;
}
    return (
        <div>
            <div className='item-nav-info'>
                < div className='item-nav-info'><NavLink className='item-nav-info-link' to='/danh-muc/hang-nu-moi-ve'>FREE SHIPPING ĐƠN HÀNG NGUYÊN GIÁ</NavLink></div>
                < div className='item-nav-info'><NavLink className='item-nav-info-link' to='/about/chinh-sach-bao-hanh'>BẢO HÀNH TRỌN ĐỜI</NavLink></div>
                < div className='item-nav-info'><NavLink className='item-nav-info-link' to='/about/chinh-sach-the-thanh-vien'>CHÍNH SÁCH THẺ THÀNH VIÊN</NavLink></div>
            </div>
            <div className='body'>
                <div className="slider">
                    <div className="slides" id="slides">
                        <span className="slide">
                            <img src="/images/slider1.jpg" alt="" />
                        </span>
                        <span className="slide">
                            <img src="/images/slider1.jpg" alt="" />
                        </span>
                        <span className="slide">
                            <img src="/images/slider1.jpg" alt="" />
                        </span>
                        <span className="slide">
                            <img src="/images/slider1.jpg" alt="" />
                        </span>
                        <span className="slide">
                            <img src="/images/slider1.jpg" alt="" />
                        </span>
                    </div>
      
                    <NavLink to='/' id="prev" className="prev">
                        <i className="fas fa-caret-left"></i>
                    </NavLink>
                    <NavLink to='/' id="next" className="next">
                        <i className="fas fa-caret-right"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;