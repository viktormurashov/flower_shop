import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../components/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            inCart,
            company,
            img,
            info,
            price,
            title
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h2>{title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2" />
                    <h4 className="text-blue">
                      <strong>
                        Цена: <span></span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text font-weight-bold mt-3 mb-0">
                      Описание:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/">
                        <ButtonContainer>Вернуться назад</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={id => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "Перейти в корзину" : "Добавить в корзину"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
