import { IoSearchOutline } from "react-icons/io5";
import { ImEarth } from "react-icons/im";
import { PiMoonLight } from "react-icons/pi";
import { useState } from "react";


function Header() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleHover = (index) => {
        setHoveredIndex(index);
    };

    const menuItems = [
        { label: '소개', link: '#' },
        { label: '이야기', link: '#' },
        { label: '뉴스', link: '#' },
        { label: '기술과 서비스', link: '#' },
        { label: '약속과 책임', link: '#' },
    ];
    return (
        <div className="header">
            <div className="wrap-header">
                <a href="/"><h1 className="wrap-title">KAKAO</h1></a>
                <nav className="wrap-content-head">
                    <ul className="wrap-list">
                        {
                            menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(-1)}
                                    style={{ color: index === hoveredIndex ? '#000' : '#666' }}
                                >
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))
                        }
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

export default Header;