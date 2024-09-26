import { motion as m } from "framer-motion";
import { useSimpleTranslation } from "@/international/use_translation";
import { commonTransition } from "@/utils/Animations";

const TermosDeUso = () => {
    const t = useSimpleTranslation();

    return (
        <m.main variants={commonTransition} initial="hidden" animate="visible" exit="exit" key={"pagina-termos-de-uso"}>
            <div className="Privacidade_Container">
                {t.terms.paragraphs.map((paragraph, index) => (
                    <div key={index} className="Privacidade_Topico">
                        <h2>{paragraph.title}</h2>
                        {paragraph.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                ))}
            </div>
        </m.main>
    );
};

export default TermosDeUso;
