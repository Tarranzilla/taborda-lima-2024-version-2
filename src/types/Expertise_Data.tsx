import { Expertise } from "./Expertise";

export type Expertise_Data = {
    key: string;
    slug: string;
    name: string;
    head_title: string;
    head_description: string;
    expertises: Expertise[];
    image: string;
};
