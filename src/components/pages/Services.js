import React from "react";
import '../../App.css';
import haengjuImage from '../images/img-9.jpg';
import ServiceItem from '../ServiceItem';

export default function Services() {
    return (
        <div className="services">
            <ServiceItem 
                title="행주산성"
                image={haengjuImage}
                description="임진왜란 당시 왜군을 격파하여 나라를 위기에서 벗어나게 하는 큰 공을 세운 충장공 권율 도원수의 행주대첩을 기념하기 위해 제례행사인 행주대첩제와 고양시 대표 축제인 행주문화제 등 다양한 행사가 개최되고 있다."
                address="경기도 고양시 덕양구 행주로 15번길 89"
                phone="031-8075-4642"
            />
            <ServiceItem 
                title="행주커뮤니티센터"
                image={haengjuImage}
                description="마을 주민의 참여로 운영되는 거점 공간인 컨테이너형 건물과 이색적인 전시와 체험, 편의시설을 갖추고 있는 해찬송학 김 전시관으로 이루어져 있다."
                address="경기도 고양시 덕양구 행주산성로 38 (행주외동 54-5)"
                phone="031-8075-3405"
            />
            <ServiceItem 
                title="행주산성역사공원"
                image={haengjuImage}
                description="바다와 민물이 만나는 한강하구는 다양한 생태계의 보고이며 한강을 직접 만져볼 수 있는 빨랫돌머리, 군초소 전망대인 행호정, 군철책 포토존 등을 만나볼 수 있다."
                address="경기도 고양시 덕양구 행주외동 140-8"
                phone="031-8075-3404"
            />
            <ServiceItem 
                title="화성연무대"
                image={haengjuImage}
                description="유네스코 세계문화유산 수원화성 안에 화성의 동문인 창룡문과 북쪽 수문인 화홍문 사이에 높은 언덕에 위치하고 있으며, 사방이 트여있어 화성의 동쪽에서 성 안을 살펴보기에 좋은 구조이다."
                address="경기도 수원시 팔발구 창룡대로103번길 20 (매향동)"
                phone="031-228-4686"
            />
            <ServiceItem 
                title="화성장안문"
                image={haengjuImage}
                description="화성의 북문이자 정문이며 장안이라는 말은 수도라는 뜻을 가지고 있어 또 다른 서울이라는 의미를 담고 있다. 왕이 수도인 한양에서 수원으로 들어오는 문으로 쓰였으며, 서울의 숭례문보다 큰 것이 특징이다."
                address="경기도 수원시 팔달구 정조로 910 (장안동)"
                phone="031-228-4480"
            />
            <ServiceItem 
                title="갯골생태공원"
                image={haengjuImage}
                description="경기도 유일의 내만갯벌(내륙 안쪽에 행성된 갯벌)로 옛 염전의 정취를 느낄 수 있는 아름다운 공원이다. 이곳에서는 칠면초, 나문재, 퉁퉁마디 등의 염생식물을 관찰할 수 있으며, 붉은발농게, 방게 등을 관찰할 수 있다."
                address="경기도 시흥시 동서로 287(장곡동)"
                phone="031-488-6900"
            />
            <ServiceItem 
                title="오이도 선사유적공원"
                image={haengjuImage}
                description="다양한 선사문화생활상을 엿볼 수 있는 선사체험마을과 굼칩 체험이 가능한 야영마을, 발굴터, 사냥터 등이 조성되어 있고, 신석기시대 오이도 패총의 중요성을 알려주는 패총전시관, 오이도 낙조를 감상할 수 있는 전망대, 산책길 등 다양한 볼거리를 갖추고 있다."
                address="경기도 시흥시 서해안로 113-27"
                phone="031-488-6909"
            />
            <ServiceItem 
                title="오이도포구 해양관광단지"
                image={haengjuImage}
                description="삼면을 둘러싼 제방길을 따라 만조 때는 바다를, 썰물 때는 살아 움직이는 바다 생물을 관찰할 수 있으며 저녁에는 아름다운 낙조를 감상할 수 있다."
                address="경기도 시흥시 오이도중앙로 67"
                phone="031-310-2904"
            />
            <ServiceItem 
                title="세미원"
                image={haengjuImage}
                description="세미원 연꽃박물관은 연꽃이라는 단일한 테마 아래 연꽃 관련 생활용품, 고서, 음식 등의 유물이 전시된 세계 유일의 박물관이다. 연꽃 가득한 여름이 가장 아름다우며 각 계절에 맞는 테마로 정원을 꾸며 사계절 내내 볼거리를 제공한다."
                address="경기도 양평군 양서면 양수로 93"
                phone="031-775-1835"
            />
            <ServiceItem 
                title="한국민속촌"
                image={haengjuImage}
                description="한국민속촌은 오랜 시간을 거쳐 전승되어 온 우리 문화 속 생활풍속을 한데 모아 우리의 전통문화를 소개하기 위해 1974년에 설립되었다. 높은 교육적 가치를 지닌 한국민속촌은 설립 이후부터 지금까지 생생한 문화체험과 아름다운 자연 속의 전통문화 관광지로써 사랑받고 있다."
                address="경기도 용인시 시흥구 민속촌로 90(보라동)"
                phone="031-288-0000"
            />
            <ServiceItem 
                title="개항장 역사문화의 거리"
                image={haengjuImage}
                description="이곳은 엣 일본영사관인 중구청과 일본 제 1은행 인천지점, 일본 제 18은행 인천지점, 일본 제 58은행 인천지점 등 근대 건축을 그대로 볼 수 있는 장소이다."
                address="인천광역시 중구 제물량로232번안길 27 (중앙동2가)"
                phone="032-760-6448"
            />
            <ServiceItem 
                title="연안부두해양광장"
                image={haengjuImage}
                description="서해 도서로 운항하는 여객선의 출발지이며, 싱싱한 생선과 젓갈 등을 저렴한 가격으로 구입할 수 있는 인천종합어시장과 수협에서 직영하는 회센터, 바다낚시를 즐길 수 있는 남항부두가 있는가 하면 해수탕도 여러 곳 있다."
                address="인천광역시 중구 연안부두로 36"
                phone="032-760-6448"
            />
            <ServiceItem 
                title="월미문화의거리"
                image={haengjuImage}
                description="인천의 대표적인 관광지 중의 하나인 월미도에는 월미문화의거리, 월미공원, 월미테마파크 등이 있으며, 초상화를 그려주는 길거리 화가들이 나와 있고 앉아 쉴 수 있는 벤치가 있는 작은 쉼터 같은 거리이다."
                address="인천광역시 중구 월미로 36"
                phone="032-764-0842"
            />
            <ServiceItem 
                title="하나개해수욕장"
                image={haengjuImage}
                description="무의도에서 가장 큰 갯벌이라는 뜻의 하나개해수욕장은 1km 길이의 해번에 밀가루처럼 입자가 고운 모래가 깔려있는 해수욕장이다. 해변가에 원두막 형태로 지은 방갈로들이 이국적인 분위기를 연출한다."
                address="인천광역시 중구 무의동 산189번지 (무의동)"
                phone="032-751-8833"
            />
        </div>
    );
}