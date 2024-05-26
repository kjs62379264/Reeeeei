import React from "react";

const ServiceItem = ({ title, image, description, address, phone }) => {
    return (
        <div className="service-item">
            <h1>{title}</h1>
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