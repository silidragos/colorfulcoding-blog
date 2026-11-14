import styles from "./Team.module.css";
import TeamMember from "./TeamMember";

let TeamData = [
    {
        img: '/team/dragos-new.png',
        name: "Dragoș Silion",
        role: "CEO & XR Developer",
    },
    {
        img: '/team/bogdan.png',
        name: "Bogdan Topîrceanu",
        role: "Creative Director UX|UI",
    },
    {
        img: '/team/ionut.png',
        name: "Ionuț Olteanu",
        role: "3D Artist",
    },
    {
        img: '/team/vlad.png',
        name: "Vlad Visnevschi",
        role: "XR developer",
    },
    {
        img: '/team/others.png',
        name: "Friends",
        role: "Our network of collaborators & freelancers",
    }
]

const Team = () => {
    return (
        <section id="team" className={styles.section} aria-labelledby="team-heading">
            <div className={styles.inner}>
                <h2 id="team-heading" className={styles.heading}>Meet the <span>Core Team</span></h2>
                <p className={styles.description}>
                    We are a team of complementary-skilled professionals with equal care for the crafts of technology, visual arts and business developement.
                    The core team suplemented by freelancers and other partners associates to deliver the best results for you in time.
                </p>
                <div className={styles.grid}>
                    {TeamData.map((member) => (
                        <TeamMember
                            key={member.name}
                            img={member.img}
                            memberName={member.name}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
