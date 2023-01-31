import React, { useState } from "react";
import starFill from "../assets/images/star-fill.svg";
import starStroke from "../assets/images/star-stroke.svg";
import btnClose from "../assets/images/btn-close-overlay.svg";
import localisation from "../assets/images/localisation.svg";
import mail from "../assets/images/send-mail.svg";
import image1 from "../assets/images/plombier-evier.jpg";
import image2 from "../assets/images/remplacement-robinet-radiateur.jpg";
import image3 from "../assets/images/reparation-debouchage-wc.jpg";
import tel from "../assets/images/tel.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

const swiperModules = [Pagination];
const swiperParams = {
  tag: "div",
  wrapperTag: "ul",
  slidesPerView: 1,

  pagination: {
    el: "#swiper-pagination",
    clickable: true,
  },
};

const getStars = (reviews) => {
  let filledStars = 0;
  let sum = 0;

  reviews?.forEach((review) => {
    sum += review.rating;
  });

  const avg = reviews.length > 0 ? sum / reviews.length : 1;

  filledStars = Math.ceil(avg * 5);

  let stars = [];
  for (let i = 0; i < 5; ++i) {
    let star = undefined;
    if (filledStars > 0) {
      star = 1;
    } else {
      star = 0;
    }
    stars.push(star);
    filledStars--;
  }
  return stars;
};

const Card = (props) => {
  const { data } = props;
  const [isOpen, setOpen] = useState(false);

  const images = data?.images;
  const stars = getStars(data?.reviews);

  const handleOnClick = () => {
    setOpen(!isOpen);
  };

  return (
    <article className="card">
      <figure className="card__content">
        <div className="card__bg">
          <Swiper
            className="card__slider"
            modules={swiperModules}
            {...swiperParams}
          >
            {images &&
              images.map((image, index) => {
                return (
                  <SwiperSlide key={index} tag="li" className="card__item">
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            {!images && (
              <>
                <SwiperSlide tag="li" className="card__item">
                  <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide tag="li" className="card__item">
                  <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide tag="li" className="card__item">
                  <img src={image3} alt="" />
                </SwiperSlide>
              </>
            )}
          </Swiper>
          <div id="swiper-pagination"></div>
        </div>
        <figcaption className="card__legende">
          <div className="card__info">
            <span>
              <div className="card__etoiles">
                {stars.map((filledStar, index) => {
                  return filledStar === 1 ? (
                    <img src={starFill} alt="" key={index} />
                  ) : (
                    <img src={starStroke} alt="" key={index} />
                  );
                })}
              </div>
              <div className="card__prix">
                <span>€</span>
                <span>€</span>
                <span>€</span>
              </div>
            </span>
            <h2 className="card__title">{data?.name}</h2>
            <p className="card__ville">
              <img src={localisation} alt="" />
              Angers
            </p>
          </div>
          <p className="card__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, voluptas...
          </p>
          <button className="card__iconeI" onClick={() => handleOnClick()}>
            i
          </button>
        </figcaption>
      </figure>

      <footer
        className={
          isOpen ? "card__overlay card__overlay--open" : "card__overlay"
        }
      >
        <button className="card__closeOverlay" onClick={() => handleOnClick()}>
          <img src={btnClose} alt="" />
        </button>
        <div className="card__profil">
          <div className="card__legende card__legende--overlay">
            <div className="card__info">
              <span>
                <div className="card__etoiles">
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                </div>
                <div className="card__prix">
                  <span>€</span>
                  <span>€</span>
                  <span>€</span>
                </div>
              </span>
              <h2 className="card__title">ABC Paysagiste</h2>
              <p className="card__ville">
                <img src={localisation} alt="" />
                Angers
              </p>
            </div>
          </div>
          <img
            className="card__profilPic"
            src="https://picsum.photos/100"
            alt=""
          />
          <p className="card__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, voluptas?
          </p>
        </div>
        <div className="card__tarifs card__section">
          <h3>Tarifs</h3>
          <div className="card__tarifsItem">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1000€</span>
          </div>
          <div className="card__tarifsItem">
            <p>Lorem ipsum dolor sit amet</p>
            <span>1000€</span>
          </div>
        </div>
        <div className="card__metiers card__section">
          <h3>Métiers associés</h3>
          <div>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="card__contact card__section">
          <h3>Contact</h3>
          <div>
            <p className="card__mail">
              <img src={mail} alt="" />
              xyz@gmail.com
            </p>
            <p className="card__tel">
              <img src={tel} alt="" />
              +330000000000
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Card;
