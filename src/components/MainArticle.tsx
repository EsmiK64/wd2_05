import React from "react"
import articleCover from "../images/image-web-3-desktop.jpg"
import articleCoverMobile from "../images/image-web-3-mobile.jpg"

function MainArticle() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div>
                    <img src={articleCover} alt="Web 3 article cover" className="object-cover hidden lg:block" />
                    <img src={articleCoverMobile} className="lg:hidden" />
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <h2 className="text-5xl font-bold lg:w-1/2">The Bright Future of Web 3.0?</h2>
                    <div className="flex flex-col lg:w-1/2 justify-start items-stretch gap-5">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className="p-3 bg-secondary text-white tracking-widest hover:bg-dark-blue w-fit">READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainArticle;