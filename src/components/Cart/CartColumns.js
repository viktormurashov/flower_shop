import React from "react";

export default function CartColumns() {
  return (
    <div>
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Цветы</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Название цветов</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Цена</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Количество</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Удалить</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Итог</p>
          </div>
        </div>
      </div>
    </div>
  );
}
