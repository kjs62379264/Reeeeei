import React from "react";
import'../../App.css';
import haengjuImage from '../images/img-9.jpg'

export default function Services(){
    return (
        <div className="services">
            <div className="content">
                <h1>행주산성</h1>
                    <img 
                        src={haengjuImage}
                        alt="행주산성"
                        className="image"
                    />
                    <div className="info-container">
                        <p className="introduction">
                        임진왜란 당시 왜군을 격파하여 나라를 위기에서 벗어나게 하는 큰 공을 세운 충장공 권율 도원수의 행주대첩을 기념하기 위해 제례행사인 행주대첩제와 고양시 대표 축제인 행주문화제 등 다양한 행사가 개최되고 있다.
                        </p>
                        <div className="details">
                            <div className="info-box">
                                <p><strong>주소:</strong>경기도 고양시 덕양구 행주로 15번길 89</p>
                            </div>
                            <div className="info-box">
                            <p><strong>전화번호:</strong> 031-8075-4642</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}