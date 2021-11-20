import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative md:px-10 xl:px-36">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div className="">
                    <img loading="lazy" src="/amazon-banner1.jpg" alt="banner" />
                </div>
                <div className="">
                    <img loading="lazy" src="/amazon-banner2.jpg" alt="banner" />
                </div>
                <div className="">
                    <img loading="lazy" src="/amazon-banner3.jpg" alt="banner" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
