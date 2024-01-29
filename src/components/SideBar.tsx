function Sidebar() {
    return (
        <>
            <div className="bg-dark-blue flex flex-col p-10 w-full lg:w-3/4">
                <h2 className="text-primary text-4xl font-bold mb-3">New</h2>
                <div>
                    <a href="#" className="text-lg font-bold text-white hover:text-primary">New Hydrogen VS Electric Cars</a>
                    <p className="text-slate-200 font-light">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr className="border-off-white my-5"/>
                <div>
                    <a href="#" className="text-lg font-bold text-white hover:text-primary">The Downsides of AI Artistry</a>
                    <p className="text-slate-200 font-light">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <hr className="border-off-white my-5"/>
                <div>
                    <a href="#" className="text-lg font-bold text-white hover:text-primary">Is VC Funding Drying Up?</a>
                    <p className="text-slate-200 font-light">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar;