'use client'

import { useRef, useState } from 'react';
import useMousePosition from '../utils/UseMousePosition';
import './parallax-card.css';

const ParallaxCard = (props: { title: JSX.Element, description: string, targetId: number, bgImage: string, url: string, external: boolean }) => {
    const mousePos = useMousePosition();
    var cardContent = useRef<any>();

    const [isHovering, setHovering] = useState(false);

    const GetTX = function (): number {
        if (!isHovering) return 0;
        if (!cardContent.current) return 0;
        if (!mousePos.x) return 0;
        ;
        const cardWidth = cardContent.current.offsetWidth;
        const mX = mousePos.x - cardContent.current.offsetLeft - cardWidth / 2;
        const mousePX = mX / cardWidth;

        return mousePX * -40;
    }

    const GetTY = function (): number {
        if (!isHovering) return 0;
        if (!cardContent.current) return 0;
        if (!mousePos.y) return 0;

        const cardHeight = cardContent.current.offsetHeight;
        const mY = mousePos.y - cardContent.current.offsetTop - cardHeight / 2;
        const mousePY = mY / cardHeight;

        return mousePY * -40;
    }

    const GetRX = function (): number {
        if (!isHovering) return 0;
        if (!cardContent.current) return 0;
        if (!mousePos.x) return 0;

        const cardWidth = cardContent.current.offsetWidth;
        const mX = mousePos.x - cardContent.current.offsetLeft - cardWidth / 2;
        const mousePX = mX / cardWidth;

        return mousePX * -30;
    }

    const GetRY = function (): number {
        if (!isHovering) return 0;
        if (!cardContent.current) return 0;
        if (!mousePos.y) return 0;

        const cardHeight = cardContent.current.offsetHeight;
        const mY = mousePos.y - cardContent.current.offsetTop - cardHeight / 2;
        const mousePY = mY / cardHeight;

        return mousePY * 30;
    }

    const OnMouseEnter = function (): void {
        setHovering(true);
    }

    const OnMouseLeave = function (): void {
        setHovering(false);
    }

    const OnMouseMove = function (): void {

    }


    function OnCardClick(evt: any): void {
        console.log("Card clicked", props.targetId);
    }

    return (
        <div className="parallax-card" ref={cardContent} onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave} onMouseMove={OnMouseMove} onClick={OnCardClick}>
            <a href={props.url} target={props.external ? "_blank" : "_self"}>
                <div className="parallax-card__content"
                    style={{
                        transform: `rotateY(${GetRX()}deg) rotateX(${GetRY()}deg)`
                    }}
                >
                    <div className='card-bg' style={{
                        backgroundImage: `url("${props.bgImage}")`,
                        transform: `translateX(${GetTX()}px) translateY(${GetTY()}px)`
                    }}></div>

                    <div className='card-info'>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </a>
        </div >
    );
}



export default ParallaxCard;