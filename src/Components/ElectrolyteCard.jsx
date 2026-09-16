import React from "react";
import "./CSS/ElectrolyteCard.css";

const ElectrolyteCard = ({Heading,image,Text}) => {
    return (
        <div className="electrolyte-card">

            <div className="electrolyte-image">
                <img
                    src={image}
                    alt="Electrolyte Imbalance"
                />
            </div>

            {/* Content */}
            <div className="electrolyte-content">

                <h3>
                    {Heading}
                </h3>

                <p>
                   {Text}
                </p>

            </div>

        </div>
    );
};

export default ElectrolyteCard;