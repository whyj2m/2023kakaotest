import { IoIosArrowRoundForward } from "react-icons/io";

function Etc() {
    return (
        <div className="wrap_etc clearfix">
            <div className="item_etc float-left">
                <a href="#" className="link_etc">
                    <strong className="tit_etc">사람과 기술로 일상을 돕는 카카오 서비스</strong>
                    <span className="txt_item">서비스 바로가기<IoIosArrowRoundForward className="float-right"/></span>
                </a>
            </div>
            <div className="item_etc float-right">
                <a href="#" className="link_etc">
                    <strong className="tit_etc">세상만사에 관심이 많다면, 당신은 이미 카카오 크루</strong>
                    <span className="txt_item">인재영입 바로가기<IoIosArrowRoundForward className="float-right"/></span>
                </a>
            </div>
        </div>
    )
}

export default Etc;