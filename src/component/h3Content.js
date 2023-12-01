import MainContent from "./MainContent";

function h3Content() {
    return (
        <div className="main">
          <div className="main-content">
            <article className="content-article">
                <h3 className="tit_main tit_date29">
                    <span role="span-text">
                        <em className="em-text">11월 29일에 전하는</em>
                        <span className="em-text2">
                            카카오 소식입니다   
                            <span className="badge-update"> 1 </span>
                            <span></span>
                        </span>                 
                    </span>
                </h3>
                <MainContent/>
            </article>
          </div>
        </div>
    )
}

export default h3Content;