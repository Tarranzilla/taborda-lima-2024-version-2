import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSimpleTranslation } from "@/international/use_translation";

import { useSelector, useDispatch } from "react-redux";
import { setAcceptedCookies } from "@/store/slices/user_slice";
import { RootState } from "@/store/store";

const Cookies = () => {
    const t = useSimpleTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const isCookiesAccepted = useSelector((state: RootState) => state.user.acceptedCookies);
    const isPrivacyPage = router.pathname === "/privacidade";

    const set_accepted_cookies_action = (accepted: boolean) => {
        dispatch(setAcceptedCookies(accepted));
    };

    return (
        <>
            {/* Cookies */}
            <AnimatePresence>
                {!isCookiesAccepted && !isPrivacyPage && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Cookies_Banner">
                        <div className="Cookies_Banner_Content">
                            <div className="Cookies_Header">
                                <span className="material-icons Cookie_Icon">cookie</span>
                                <h1 className="Cookies_Title">{t.cookies.title}</h1>
                            </div>
                            <div className="Cookies_Paragraphs">
                                {t.cookies.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="Cookie_Paragraph">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <m.button
                            whileTap={{ scale: 0.95 }}
                            className="Cookie_Button"
                            onClick={() => {
                                set_accepted_cookies_action(true);
                                localStorage.setItem("cookiesAccepted", "true");
                            }}
                        >
                            <span className="material-icons">done</span>
                            {t.cookies.btnText}
                        </m.button>
                        <m.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                router.push("/privacidade");
                                //setIsModalOpen(false);
                            }}
                            className="Cookie_Button"
                        >
                            <span className="material-icons">info</span>
                            {t.common.knowMoreBtn?.title}
                        </m.button>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cookies;
