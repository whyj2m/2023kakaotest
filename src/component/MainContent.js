import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowForwardOutline } from "react-icons/io5";
import WrapCulture from "./WrapCulture";
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
                <div className="wrap-item">
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
                                        <img src="./images/right-logo6.webp" alt="" className="thumb-right"/>
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
                                        <img src="./images/right-logo7.webp" alt="" className="thumb-right"/>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-content2">
                <strong className="content2-text">기술과 사람으로 더 나은 세상을 만듭니다</strong>
                <a href="#" className="content2-link">카카오문화 바로가기 <IoArrowForwardOutline style={{marginTop:'', fontSize:'17px'}} /></a>
            </div>
            <Etc></Etc>
            <a href="#" className="link_collection">카카오 소식 모아보기</a>
        </div>
    )

}


export default MainContent;


