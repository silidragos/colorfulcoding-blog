"use client"

import StrokeTitle from "./StrokeTitle";
import TeamMember from "./TeamMember";

let TeamData = [
    {
        img: '/team/dragos.png',
        name: "Dragoș Silion",
        role: "CEO & XR Developer",
        my: "0",
    },
    {
        img: '/team/bogdan.png',
        name: "Bogdan Topîrceanu",
        role: "Creative Director UX|UI",
        my: "0px",
    },
    {
        img: '/team/ionut.png',
        name: "Ionuț Olteanu",
        role: "3D Artist",
        my: "0",
    },
    {
        img: '/team/vlad.png',
        name: "Vlad Visnevschi",
        role: "XR developer",
        my: "0px",
    },
    {
        img: '/team/others.png',
        name: "Friends",
        role: "Our network of collaborators & freelancers",
        my: "0px",
    }
]

const Team = () => {
    return (
        <div id="team">
            <section id="team">
                <StrokeTitle>
                    <h1><span className='text-zinc-900 stroke-text'>Core</span> <span className="text-orange-500">Team</span></h1>
                </StrokeTitle>
                <div className="flex items-end justify-end mx-20">
                    <p className="sm:w-full md:w-1/2 lg:w-1/2 my-20 text-right">
                        We are a team of complementary-skilled professionals with equal care for the crafts of technology, visual arts and business developement.
                        The core team suplemented by freelancers and other partners associates to deliver the best results for you in time.
                    </p>
                </div>

                <div className="mx-20 flex flex-wrap justify-center">
                    {TeamData.map((member, idx) => {
                        return (
                            <TeamMember key={idx} 
                            my={member.my} 
                            img={member.img} 
                            memberName={member.name} 
                            role={member.role}>
                            </TeamMember>
                        )
                    })}
                </div>
            </section>

        </div>
    )
}

export default Team;