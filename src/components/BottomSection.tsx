import image1 from "../images/image-retro-pcs.jpg"
import image2 from "../images/image-top-laptops.jpg"
import image3 from "../images/image-gaming-growth.jpg"

function BottomSection() {
    return (
        <>
            <div className="flex flex-col lg:flex-row px-10 lg:px-5 gap-10">
                <div className="flex flex-row gap-3 *:p-2">
                    <img className="h-40" src={image1} />
                    <div className="flex flex-col">
                        <p className="text-3xl text-slate-400 font-bold">01</p>
                        <a className="text-lg font-bold hover:text-secondary" href="#">Reviving Retro PCs</a>
                        <p className="text-slate-600">What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3 *:p-2">
                    <img className="h-40" src={image2} />
                    <div className="flex flex-col">
                        <p className="text-3xl text-slate-400 font-bold">02</p>
                        <a className="text-lg font-bold hover:text-secondary" href="#">Top 10 Laptops of 2022</a>
                        <p className="text-slate-600">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3 *:p-2">
                    <img className="h-40" src={image3} />
                    <div className="flex flex-col">
                        <p className="text-3xl text-slate-400 font-bold">03</p>
                        <a className="text-lg font-bold hover:text-secondary" href="#">The Growth of Gaming</a>
                        <p className="text-slate-600">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSection;