import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowForwardOutline } from "react-icons/io5";
import Etc from "./etc";


function MainContent() {
    return (
        <div className="maincontent">
            <div className="section-content">
                <div className="wrap-item">
                    <div className="inner-item">
                        <div className="item-card">
                            <span className="item-content">
                                <span role="text" className="item-icon" style={{ padding: '20px' }}>
                                    <img src="./images/itemicon.webp" alt="" className="item-img" width='36px' height='36px' />
                                    <span className="text-cate"> Tech Ethics </span>
                                    <span className="dot"></span>
                                </span>
                                <a href="#" style={{ padding: '20px' }}>
                                    <strong className="text-card"> 왼쪽 첫번째 카드 타이틀 </strong>
                                    <span className="item-thumb">
                                        <img src="./images/itemimgleft.webp" alt="" />
                                    </span>
                                </a>
                                <span role="text" className="info-card">
                                    <span className="text-keyword">#선생님 </span>
                                    <span className="text-keyword">#안녕하세요 </span>
                                    <span className="text-keyword">#감사합니다 </span>
                                    <span className="text-keyword">#곧 크리스마스 </span>
                                </span>
                            </span>
                            <button type="button" className="btn-share1">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </div>
                    <div className="inner-item">
                        <div className="item-card">
                            <span className="item-content">
                                <span role="text" className="item-icon" style={{ padding: '20px' }}>
                                    <img src="./images/star.webp" alt="" className="item-img" width='36px' height='36px' />
                                    <span className="text-highlight"> 하이라이트</span>
                                    <span className="dot"></span>
                                </span>
                                <a href="#" style={{ padding: '20px' }}>
                                    <strong className="text-card"> 카카오와 함께하는 단골첼린지 </strong>
                                    <span className="item-thumb">
                                        <img src="./images/left2.webp" alt="" />
                                    </span>
                                </a>
                                <span role="text" className="info-card">
                                    <span className="text-keyword">#단골만들기 </span>
                                    <span className="text-keyword">#카카오톡채널 </span>
                                </span>
                            </span>
                            <button type="button" className="btn-share2">
                                <BsThreeDotsVertical />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="wrap-item" style={{ minWidth: '666px' }}>
                    <div className="inner-item-right">
                        <div className="item-card-right" style={{ left: '0', top: '0' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo1.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 약속과 책임 </span>
                                        <span className="dot"></span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '0 0 20px 20px' }}>
                                            ESG보고서,
                                            <br />
                                            카카오의 약속과 책임
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card-right">
                                        <span className="text-keyword">#카카오ESG </span>
                                        <span className="text-keyword">#ESG 보고서 </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card-right" style={{ left: '333px', top: '0' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo2.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 카톡설명서 </span>
                                        <span className="dot"></span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '0 0 20px 20px' }}>
                                            모두의 카톡을 더가깝고 안전하게,
                                            <br />
                                            카톡설명서
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card-right">
                                        <span className="text-keyword">#카카오톡 커뮤니 </span>
                                        <span className="text-keyword">#Holy shit </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card-right" style={{ left: '0px', top: '195px', marginTop: '36px' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo3.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 액티브그린 </span>
                                        <span className="dot"></span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '0 0 20px 20px' }}>
                                            이용자와 함께 꿈꾸는
                                            <br />
                                            지속가능한 지구
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card-right">
                                        <span className="text-keyword">#esg </span>
                                        <span className="text-keyword">#액티브 그린 </span>
                                        <span className="text-keyword">#환경 </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card-right" style={{ left: '333px', top: '195px', marginTop: '36px' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo4.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 고객센터 </span>
                                        <span className="dot"></span>
                                    </span>
                                    <strong className="text-card-right-4">
                                        어떤 서비스를 도와드릴까요?
                                    </strong>
                                    <ul className="list-cs">
                                        <li><a href="" className="link-cs"> 카카오 </a></li>
                                        <li><a href="" className="link-cs"> 다음 </a></li>
                                        <li><a href="" className="link-cs"> 커머스 </a></li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div className="item-card-right" style={{ left: '0px', top: '422px', marginTop: '36px' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '0 0 20px 20px', fontSize: '22px' }}>
                                            카카오, 디지털 플랫폼
                                            <br />
                                            이용자 보호 노력 담은...

                                        </p>
                                    </strong>
                                    <span role="text" className="info-card-right">
                                        <span className="text-keyword">#카카오톡 커뮤니 </span>
                                        <span className="text-keyword">#Holy shit </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/right-logo6.webp" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card-right" style={{ left: '333px', top: '422px', marginTop: '36px' }}>
                            <a href="#" className="wrap-content">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/itemicon.webp" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> Tech Ethics </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '0 0 20px 20px', fontSize: '22px' }}>
                                            끊임없는 즐거움...
                                            <br />
                                            카카오엔터테이먼트의 AI..

                                        </p>
                                    </strong>
                                    <span role="text" className="info-card-right">
                                        <span className="text-keyword">#AI맞춤추천 </span>
                                        <span className="text-keyword">#믹스업 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/right-logo7.webp" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-content2">
                <strong className="content2-text">기술과 사람으로 더 나은 세상을 만듭니다</strong>
                <a href="#" className="content2-link">카카오문화 바로가기 <IoArrowForwardOutline style={{ marginTop: '', fontSize: '17px' }} /></a>
                <img src="./images/content2img.png" alt="" className="content2-image" />
            </div>
            <div className="section-sns">
                <strong className="text-sns">카카오의 다양한 소식을 구독해보세요</strong>
                <ul className="inner-sns">
                    <li><a href="#" className="link"></a></li>
                    <li><a href="#" className="link-youtube"></a></li>
                    <li><a href="#" className="link-insta"></a></li>
                    <li><a href="#" className="link-face"></a></li>
                    <li><a href="#" className="link-in"></a></li>
                </ul>
            </div>
            <div className="section-content3">
                <div className="wrap-item">
                    <div className="inner-item3" style={{ position: 'relative', height: '1600px' }}>
                        <div className="item-card" style={{ position: 'absolute', left: '0', top: '0' }}>
                            <a href="#" target="_blank" className="wrap-content">
                                <span role="text" className="item-icon">
                                    <img src="./images/content3_logo1.png" alt="" className="item-img" width='36px' height='36px' />
                                    <span className="text-cate"> 카카오 프라이버시 </span>
                                    <span className="dot"></span>
                                </span>
                                <strong className="text-card-right">
                                    <p style={{ marginTop: '13px' }}>
                                        ESG보고서,
                                        <br />
                                        카카오의 약속과 책임
                                    </p>
                                </strong>
                                <span role="text" className="info-card">
                                    <span className="text-keyword">#카카오프라이버시 </span>
                                    <span className="text-keyword">#프라이머리 </span>
                                </span>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '0', top: '230px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            카카오 김범수
                                            <br />
                                            경영쇄신위원장 -김소영...
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#준법과신뢰위원회 </span>
                                        <span className="text-keyword">#법을준수 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo4.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '333px', top: '380px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            카카오, 2023
                                            <br />
                                            디지털플랫폼 엑스포 ..

                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#기술혁신 </span>
                                        <span className="text-keyword">#디지털플랫폼엑스포 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo5.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '333px', top: '0' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/content3_logo2.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> Tech Ethics </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            끊임없는 즐거움...
                                            <br />
                                            카카오엔터테이먼트의 AI..

                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#AI맞춤추천 </span>
                                        <span className="text-keyword">#믹스업 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo3.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '0px', top: '610px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            카카오, 지역 개발자 양성
                                            <br />
                                            프로젝트'카카오 테크...
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#카카오테크캠퍼스 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo6.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '333px', top: '760px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            '무인도의 디바', 글로벌
                                            <br />
                                            5위-40개국TOP10 등극
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#카카오엔터테이먼트 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo7.webp" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '0px', top: '990px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            카카오엔터테이먼트'2023'
                                            <br />
                                            드라마 영화공모전'수상...
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#카카오엔터테이먼트 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo8.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '333px', top: '760px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            '무인도의 디바', 글로벌
                                            <br />
                                            5위-40개국TOP10 등극
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#카카오엔터테이먼트 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo7.webp" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '333px', top: '1140px' }}>
                            <a href="#" className="wrap-content-big">
                                <div role="text">
                                    <span role="text" className="item-icon" style={{ padding: '20px', display: "block" }}>
                                        <img src="./images/right-logo5.png" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> 보도자료 </span>
                                        <span className="text-date"> 2023.11.29 </span>
                                    </span>
                                    <strong className="text-card-right">
                                        <p style={{ padding: '10px 14px 20px 20px', fontSize: '22px' }}>
                                            카카오톡 선물하기에
                                            <br />
                                            이탈리아 럭셔리 오트..
                                        </p>
                                    </strong>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#커머스CIC </span>
                                        <span className="text-keyword">#카카오톡 선물하기 </span>
                                    </span>
                                    <span className="item-thumb-right">
                                        <img src="./images/content3_logo9.png" alt="" className="thumb-right" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="item-card" style={{ position: 'absolute', left: '0', top: '1370px' }}>
                            <a href="#" target="_blank" className="wrap-content">
                                <span role="text" className="item-icon">
                                    <img src="./images/content3_logo10.png" alt="" className="item-img" width='36px' height='36px' />
                                    <span className="text-cate"> 주가정보 </span>
                                </span>
                                <div className="text-card-stock">
                                    <span style={{ marginTop: '13px' }}>
                                        49,700
                                    </span>
                                    <div style={{ marginLeft: '10px' }}>
                                        <div className="triangle"></div>
                                    </div>
                                    <div style={{ fontSize: '17px', color: '#2879ff', fontWeight: 'bold' }}> 800 </div>
                                </div>
                                <span role="text" className="info-card">
                                    <span className="text-keyword">#카카오프라이버시 </span>
                                    <span className="text-keyword">#프라이머리 </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="wrap-item" style={{ minWidth: '666px' }}>
                    <div className="sticky" style={{position:'sticky' , top:'170px'}}>
                        <div className="inner-item-sticky">
                            <div className="item-card">
                                <span className="item-content">
                                    <span role="text" className="item-icon" style={{ padding: '20px' }}>
                                        <img src="./images/itemicon.webp" alt="" className="item-img" width='36px' height='36px' />
                                        <span className="text-cate"> Tech Ethics </span>
                                        <span className="dot"></span>
                                    </span>
                                    <a href="#" style={{ padding: '20px' }}>
                                        <strong className="text-card"> 왼쪽 첫번째 카드 타이틀 </strong>
                                        <span className="item-thumb">
                                            <img src="./images/itemimgleft.webp" alt="" />
                                        </span>
                                    </a>
                                    <span role="text" className="info-card">
                                        <span className="text-keyword">#선생님 </span>
                                        <span className="text-keyword">#안녕하세요 </span>
                                        <span className="text-keyword">#감사합니다 </span>
                                        <span className="text-keyword">#곧 크리스마스 </span>
                                    </span>
                                </span>
                                <button type="button" className="btn-share1">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Etc></Etc>
            <a href="#" className="link_collection">카카오 소식 모아보기</a>
        </div>
    )

}


export default MainContent;


