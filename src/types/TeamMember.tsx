import ParagraphsWithTitle from "./ParagraphsWithTitle";
import { AcademicCourse } from "./AcademicCourse";
import { AcademicCitation } from "./AcademicCitation";

export type TeamMember = {
    name: string;
    role: string;
    OAB_number: string;
    OAB_Link: string;
    picture: string;

    cellphone: string;
    telephone: string;
    email: string;
    description: string[];
    professionalExperience?: ParagraphsWithTitle[];
    complementaryEducation?: AcademicCourse[];
    academicBackground?: AcademicCourse[];
    academicProduction?: AcademicCitation[];
};
