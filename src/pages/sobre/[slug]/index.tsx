import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";
import { commonTransition } from "@/utils/Animations";

import { teamMembers, TeamMember } from "@/data/Team_Members";

import { Team_Data_EN } from "@/content-list/team/english";
import { Team_Data_PT } from "@/content-list/team/portuguese";

import CardPanner from "@/components/CardPanner";

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on

    const paths: { params: { slug: string }; locale: string }[] = [];

    // Add Portuguese paths
    Team_Data_PT.forEach((person) => {
        if (person.slug) {
            paths.push({ params: { slug: person.slug }, locale: "pt-BR" });
        } else {
            console.error("Missing team member in portuguese:", person);
        }
    });

    // Add English paths
    Team_Data_EN.forEach((person) => {
        if (person.slug) {
            paths.push({ params: { slug: person.slug }, locale: "en" });
        } else {
            console.error("Missing team member in portuguese:", person);
        }
    });

    console.log("paths:", paths);

    return {
        paths,
        fallback: true,
    };
};

const TeamMemberDetailPage = ({ person }: { person: TeamMember | null }) => {
    if (!person) {
        return <div>Team Member not found</div>;
    }

    return (
        <>
            <Head>
                <title>{person.name + " | Taborda Lima & Advogados Associados"}</title>
                <meta name="description" content={person.bio[0]} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"sobre-" + person.name}>
                <div className="Container Dark_Container Alt_Paragraphs Centered_Container Full_Width_Container">
                    <div className="Team_Member_Description_Card">
                        <Image className="Team_Member_Container_Image Mobile_Only" src={person.image} alt={person.name} width={1080} height={1080} />

                        <CardPanner image_src={person.image} />
                        <div className="Team_Member_Description_Card_Info">
                            <div className="Team_Member_Container_Header">
                                <h1>{person.name}</h1>
                                <h2>{person.role}</h2>
                                <Link className="Team_Member_Container_OAB_Link" href={person.oabLink} target="_blank" rel="noopener noreferrer">
                                    {person.oab} <span className="material-icons">open_in_new</span>
                                </Link>
                            </div>
                            {person.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </m.main>
        </>
    );
};

export async function getStaticProps({ params, locale }: { params: { slug: string }; locale: string }) {
    console.log(`getStaticProps called for locale: ${locale}, slug: ${params.slug}`);
    if (!params || typeof params.slug !== "string") {
        return {
            notFound: true,
        };
    }

    const list = locale === "pt-BR" ? Team_Data_PT : Team_Data_EN;
    console.log("team membeer slug:", params.slug);
    const person = list.find((person) => person.slug === params.slug);

    if (!person) {
        return {
            notFound: true,
        };
    }

    return { props: { person } };
}

export default TeamMemberDetailPage;
