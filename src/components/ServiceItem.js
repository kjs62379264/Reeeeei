import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ title, image, description, address, phone }) => {
    return (
        <div className="service-item">
            <h3> <Link to='/mappings'>{title}</Link> </h3>
            <div className="info-row">
                <img 
                    src={image}
                    alt={title}
                    className="image"
                />
                <div className="info-container">
                    <p className="introduction">
                        {description}
                    </p>
                    <div className="details">
                        <p className="info-box"><strong>주소:</strong> {address}</p>
                        <p className="info-box"><strong>전화번호:</strong> {phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;