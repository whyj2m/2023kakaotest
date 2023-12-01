import { IoSearchOutline } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import { PiMoonLight } from "react-icons/pi";


function header() {
    return (
        <div className="header">
            <div className="wrap-header">
                <a href="/"><h1 className="wrap-title">KAKAO</h1></a>
                <nav className="wrap-content-head">
                    <ul className="wrap-list">
                        <li>
                            <a href="#">소개</a>
                        </li>
                        <li>
                            <a href="#">이야기</a>
                        </li>
                        <li>
                            <a href="#">뉴스</a>
                        </li>
                        <li>
                            <a href="#">기술과 서비스</a>
                        </li>
                        <li>
                            <a href="#">약속과 책임</a>
                        </li>
                    </ul>
                </nav>
                <div className="util">
                    <button type="button" className="btn-search">
                        <span></span>
                        <IoSearchOutline />
                    </button>
                    <button type="button" className="btn-language">
                        <span></span>
                        <ImEarth />
                    </button>
                    <button type="button" className="btn-mode">
                        <span></span>
                        <PiMoonLight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default header;