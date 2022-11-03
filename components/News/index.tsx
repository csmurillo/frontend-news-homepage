const News: React.FC = ()=>{
    return (
        <div className="bg-black text-white px-5 py-6 mb-16 lg:px-6 lg:py-8 md:w-[22em] w-full">
            <h2 className="text-softOrange text-3xl lg:text-4xl lg:mb-1">New</h2>
            <div>
                <div className="py-4 border-b-2 border-darkGrayishBlue lg:py-8">
                    <h3 className="text-xl mb-2 text-offWhite font-bold hover:text-softOrange hover:cursor-pointer">Hydrogen VS Electric Cars</h3>
                    <p className="text-base text-grayishBlue font-medium">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="py-4 border-b-2 border-darkGrayishBlue lg:py-8">
                    <h3 className="text-xl mb-2 text-offWhite font-bold hover:text-softOrange hover:cursor-pointer">The Downsides of AI Artistry</h3>
                    <p className="text-base text-grayishBlue font-medium">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="py-4 lg:py-8">
                    <h3 className="text-xl mb-2 text-offWhite font-bold hover:text-softOrange hover:cursor-pointer">Is VC Funding Drying Up?</h3>
                    <p className="text-base text-grayishBlue font-medium">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    );
};

export default News;

