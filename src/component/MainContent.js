import { BsThreeDotsVertical } from "react-icons/bs";

function MainContent() {
    return (
        <div className="maincontent">
            <div className="section-content">
                <div className="wrap-item">
                    <div className="inner-item">
                        <div className="item-card">
                            <span className="item-content">
                                <span role="text" className="item-icon" style={{padding:'20px'}}>
                                    <img src="./images/itemicon.webp" alt=""  className="item-img" width='36px' height='36px'/>
                                    <span className="text-cate"> Tech Ethics </span>
                                    <span className="dot"></span>
                                </span>
                                <a href="#" style={{padding:'20px'}}>
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
                            <BsThreeDotsVertical  />
                            </button>
                        </div>
                    </div>
                    <div className="inner-item">
                        <div className="item-card">
                            <span className="item-content">
                                <span role="text" className="item-icon" style={{padding:'20px'}}>
                                    <img src="./images/star.webp" alt=""  className="item-img" width='36px' height='36px'/>
                                    <span className="text-highlight"> 하이라이트</span>
                                    <span className="dot"></span>
                                </span>
                                <a href="#" style={{padding:'20px'}}>
                                    <strong className="text-card"> 왼쪽 두번째 카드 타이틀 </strong>
                                    <span className="item-thumb">
                                        <img src="./images/itemimgleft.webp" alt="" />
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
            </div>
        </div>
    )
}

export default MainContent;