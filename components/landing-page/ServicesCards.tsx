import ParallaxCard from "./ParallaxCard";

let cardInfo = [
    {
        title: <>Immersive Arts &<br /> <span className="text-orange-500">Storytelling</span></>,
        description: "Bring exhibits to life, and tell your story in a new and engaging way, while letting us take care of all your technical worries.",
        bgImage: "/parallaxCards/arts-bg.jpg",
        url: "/services/arts-immersive-experiences",
        external: false
    },
    {
        title: <>Digital Heritage & <br /><span className="text-orange-500">Cultural Storytelling</span></>,
        description: "Engage visitors with interactive storytelling, while bringing your heritage to life.",
        bgImage: "/parallaxCards/tourism-bg.jpg",
        url: "/services/tourism-cultural-storytelling",
        external: false
    },
    {
        title: <>VR Trainings, Simulation <br /><span className="text-orange-500">and Education</span></>,
        description: "Enhance learning with interactive simulations and training tools. Increase accessibility, and make learning fun, while having access to detailed analytics.",
        bgImage: "/parallaxCards/training-bg.png",
        url: "/services/trainings-simulations",
        external: false
    },
    {
        title: <>Interactive Installations & <br /><span className="text-orange-500">Promotional Campaigns</span></>,
        description: "Engage your audience with cutting edge technology and memorable experiences, either if it is for a conference stand, or a nation/world-wide campaign.",
        bgImage: "/parallaxCards/installation-bg.jpg",
        url: "/services/interactive-installations",
        external: false
    },
    {
        title: <>ArtLink <span className="icon"></span><br /> <p><span className="text-orange-500">The artworld at your fingertips</span></p></>,
        description: "Explore the 2500+ freely accesible immersive art pieces hosted on our platform, or be part of the 90+ cultural events empowered by Artlink. Available for free on both Android and iOS.",
        bgImage: "/parallaxCards/artlink_bg.jpg",
        url: "https://bit.ly/ArtLinkDownload",
        external: true
    }
]

const ServicesCards = () => {

    return (
        <div className="py-20 flex flex-wrap justify-center">
            {cardInfo.map((card, idx) => {
                return (
                    <ParallaxCard
                        title={card.title}
                        description={card.description}
                        targetId={idx}
                        bgImage={card.bgImage}
                        url={card.url}
                        external={card.external}
                    ></ParallaxCard>
                );
            })}
        </div>
    );
}

export default ServicesCards;