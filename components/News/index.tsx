


const News: React.FC = ()=>{
    return (
        <div className="bg-black text-white px-2 lg:w-72">
            <h2 className="text-yellow-500 text-2xl">New</h2>
            <div>
                <div className="py-4 border-b-2 border-white">
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="py-4 border-b-2 border-white">
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="py-4">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    );
};

export default News;