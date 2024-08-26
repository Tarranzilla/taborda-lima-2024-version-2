import { useSimpleTranslation } from "@/international/use_translation";

const Privacidade = () => {
    const t = useSimpleTranslation();

    return (
        <main>
            <div className="Privacidade_Container">
                {t.privacy.paragraphs.map((paragraph, index) => (
                    <div key={index} className="Privacidade_Topico">
                        <h2>{paragraph.title}</h2>
                        {paragraph.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Privacidade;
