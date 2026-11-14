import ParallaxCard from "./ParallaxCard";

let cardInfo = [
    {
        title: "Immersive Art & Interactive Storytelling",
        description: "Bring exhibits to life, and tell your story in a new and engaging way, while letting us take care of all your technical worries.",
        bgImage: "/parallaxCards/arts-bg.jpg",
        url: "/services/arts-immersive-experiences",
        external: false
    },
    {
        title: "Digital Heritage & Cultural Exploration",
        description: "We digitally reconstruct historic places, artifacts, and environments, transforming cultural heritage into interactive experiences for museums, institutions, and visitors.",
        bgImage: "/parallaxCards/tourism-bg.jpg",
        url: "/services/tourism-cultural-storytelling",
        external: false
    },
    {
        title: "VR Training, Simulation & Digital Twins",
        description: "We create immersive training environments and interactive digital twins that help people practice procedures, explore complex systems, and develop practical skills in safe, realistic simulations.",
        bgImage: "/parallaxCards/training-bg.png",
        url: "/practimentor-about",
        external: false
    },
    {
        title: "Interactive Installations & Brand Experiences",
        description: "We design engaging XR experiences for brands, events, and public spaces, combining creative storytelling with interactive technology to turn audiences into active participants.",
        bgImage: "/parallaxCards/installation-bg.jpg",
        url: "/services/interactive-installations",
        external: false
    }
]

const ServicesCards = () => {

    return (
        <div className="project-grid">
            {cardInfo.map((card) => {
                return (
                    <ParallaxCard
                        title={card.title}
                        description={card.description}
                        key={card.url}
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
