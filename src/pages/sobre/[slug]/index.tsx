import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { teamMembers, TeamMember } from "@/data/Team_Members";

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on services
    const paths = teamMembers.map((person) => ({
        params: { slug: person.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

const TeamMemberDetailPage = ({ person }: { person: TeamMember }) => {
    return (
        <main>
            <div className="Container Dark_Container Alt_Paragraphs Centered_Container">
                <div className="Team_Member_Description_Card">
                    <Image className="Team_Member_Container_Image" src={person.image} alt={person.name} width={400} height={400} />
                    <div className="Team_Member_Description_Card_Info">
                        <div className="Team_Member_Container_Header">
                            <h1>{person.name}</h1>
                            <h2>{person.role}</h2>
                            <h3>
                                {person.oab} <span className="material-icons">open_in_new</span>
                            </h3>
                        </div>
                        {person.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || typeof params.slug !== "string") {
        return {
            notFound: true,
        };
    }

    const person = teamMembers.find((person) => person.slug === params.slug);

    if (!person) {
        return {
            notFound: true,
        };
    }

    return { props: { person } };
};

export default TeamMemberDetailPage;
