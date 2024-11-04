import { useRouter } from "next/router";
import { WebStructure } from "@/types/WebStructure";

import portuguese_web_structure from "@/international/portuguese_web_structure";
import english_web_structure from "@/international/english_web_structure";
import spanish_web_structure from "./spanish_web_structure";

// import { useDispatch, useSelector } from "react-redux";
// import { setActiveLanguage } from "@/store/slices/interfaceSlice";

import { useMemo } from "react";

export function useSimpleTranslation(): WebStructure {
    // const dispatch = useDispatch();
    const router = useRouter();
    const { locale } = router;

    const t = useMemo(() => {
        let defaultLang = english_web_structure; // Default to English if locale is undefined

        if (locale?.startsWith("pt")) {
            defaultLang = portuguese_web_structure;
            console.log("Lang: pt");
        } else if (locale?.startsWith("es")) {
            defaultLang = spanish_web_structure;
            console.log("Lang: es");
        } else {
            console.log("Lang: en");
        }
        return defaultLang;
    }, [locale]);

    return t;
}
