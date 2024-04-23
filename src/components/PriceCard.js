import React from "react";

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{plan}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <ul className="list-group list-group-flush">
          {features.map((feature, index) => (
            <li key={index} className="list-group-item">
              {feature}
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary">
          Choose Plan
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
