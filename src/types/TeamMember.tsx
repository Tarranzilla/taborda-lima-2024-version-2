export type TeamMember = {
    name: string;
    role: string;
    slug: string;
    memberPage: string;
    linkedin: string;
    oab?: string;
    oabLink?: string;
    bio: string[];
    image: string;
    curriculum?: Curriculum;
};

type Curriculum = {
    items: CurriculumItem[]
}

type CurriculumItem = {
    title?: string;
    description: string;
    date?: string;
    link?: string;
}