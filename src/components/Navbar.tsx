import Link from "next/link";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { toggleMenuOpen, setMenuOpen } from "@/store/slices/interface_slice";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/use_translation";

import { Exepertise_Data_EN } from "@/content-list/services/english";
import { Exepertise_Data_PT } from "@/content-list/services/portuguese";
import { Expertise } from "@/content-list/services/english";

import DragAndCloseModal from "@/components/DragAndCloseModal";

const MotionLink = m(Link);
const LogoLink = m(Link);

const Navbar = () => {
    const dispatch = useDispatch();

    const toggleMenu_Action = () => {
        dispatch(toggleMenuOpen());
    };

    const setMenuOpen_Action = (state: boolean) => {
        dispatch(setMenuOpen(state));
    };

    const router = useRouter();

    const changeLanguage = () => {
        const currentLocale = router.locale;
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";
        const currentPath = router.asPath;
        router.push(currentPath, currentPath, { locale: newLocale, scroll: false });
    };

    const isEnglish = router.locale === "en";

    const t = useSimpleTranslation();

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<Expertise[]>([]);

    const searchIsEmpty = searchTerm === "";

    const searchExpertises = (searchTerm: string) => {
        const expertise_list = isEnglish ? Exepertise_Data_EN : Exepertise_Data_PT;

        return expertise_list.flatMap((expertise) =>
            expertise.expertises.filter((sub_expertise) => sub_expertise.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    };

    useEffect(() => {
        if (searchTerm === "") {
            setSearchResults([]);
            return;
        }
        const searchResults = searchExpertises(searchTerm);
        setSearchResults(searchResults);
        console.log(searchResults);
    }, [searchTerm]);

    return (
        <>
            {/* Navbar */}
            <nav className="Navbar_Top">
                <m.button whileTap={{ scale: 0.95 }} className="Nav_Button Language_Selector_Btn Mobile_Only" onClick={changeLanguage}>
                    {isEnglish ? (
                        <Image src={"/general_assets/navbar_lang_btn_en.png"} width={32} height={32} quality={100} alt="Language Selector" />
                    ) : (
                        <Image
                            src={"/general_assets/navbar_lang_btn_ptbr.png"}
                            className="BR_Flag"
                            width={32}
                            height={32}
                            quality={100}
                            alt="Language Selector"
                        />
                    )}
                </m.button>

                <LogoLink key={"LOGO"} whileTap={{ scale: 0.95 }} href={"/#"} className="Navbar_Logo_Container">
                    <svg id="Layer_2" className="Navbar_Logo Svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 35">
                        <g id="Layer_1-2">
                            <path className="cls-2" d="M0,19.83h73.96M84.86,19.83h72.63" />
                            <path
                                className="cls-1"
                                d="M6.8,1.08v7.85c0,2.12.03,3.49.08,4.03.09.62.31.96.74,1.02.34.06.62.09.82.09.11,0,.14.03.14.11s-.08.14-.28.14c-.43,0-.91-.03-1.5-.03-.57-.03-.82-.03-.79-.03s-.23,0-.74.03c-.48,0-.85.03-1.08.03-.2,0-.28-.06-.28-.14s.06-.11.17-.11.28-.03.54-.09c.28-.06.45-.4.54-1.02.06-.48.08-1.81.08-4.03V1.08l-2.75.03c-.48,0-.82.03-1.05.09-.4.08-.68.25-.85.51-.08.14-.14.28-.23.45-.11.2-.2.31-.28.31-.06,0-.08-.06-.08-.17,0-.34.14-.99.42-1.93.06-.23.11-.37.17-.37.03,0,.11.06.28.11.17.06.34.11.54.11.68.06,1.19.09,1.47.09h6.95c.48,0,.94-.03,1.33-.09.37-.06.54-.08.51-.08.06,0,.08.08.08.23,0,.2,0,.59-.03,1.13,0,.57-.03.88-.03.91,0,.17-.03.23-.11.23s-.11-.09-.14-.31l-.03-.2c-.06-.65-.82-.99-2.3-1.02l-2.32-.03ZM14.15,12.27L18.34.74c.17-.48.31-.74.42-.74.08,0,.23.23.4.68,1.08,2.81,2.52,6.52,4.34,11.2.48,1.25,1.08,1.93,1.73,2.1.2.06.4.09.59.09.14,0,.2.03.2.11s-.11.14-.37.14c-1.22,0-2.18-.03-2.92-.03-.37-.03-.57-.06-.57-.14,0-.06.06-.11.14-.14.17-.03.23-.2.11-.48l-1.73-4.59c-.03-.06-.08-.09-.17-.09h-4c-.09,0-.14.03-.17.14l-1.13,3.29c-.17.51-.25.91-.25,1.25s.23.54.71.54h.17c.14,0,.2.03.2.11s-.08.14-.28.14c-.17,0-.43-.03-.82-.03-.37-.03-.57-.03-.62-.03,0,0-.28,0-.79.03-.51,0-.96.03-1.3.03-.23,0-.34-.06-.34-.14s.06-.11.17-.11c.17,0,.34-.03.54-.06.62-.09,1.16-.65,1.56-1.73h0ZM16.72,8.16h3.54c.08,0,.11-.06.08-.14l-1.76-5.02c-.06-.11-.11-.2-.14-.2-.06,0-.09.08-.14.2l-1.64,5.02c-.03.09,0,.14.06.14h0ZM28.69,8.93v-3.29c0-2.24-.03-3.6-.06-4-.03-.6-.28-.94-.79-1.05-.17-.06-.37-.06-.62-.06-.11,0-.14-.06-.14-.11,0-.11.08-.14.28-.14.34,0,.79,0,1.33.03.54,0,.79,0,.77,0h.85c.45-.03.85-.03,1.19-.03,1.33,0,2.32.34,3,1.02.45.51.71,1.11.71,1.76s-.2,1.3-.54,1.9c-.23.34-.65.82-1.22,1.45.82.26,1.53.68,2.13,1.3.71.74,1.08,1.62,1.08,2.61,0,1.08-.37,2.01-1.16,2.78-.88.85-2.07,1.28-3.57,1.28-.14,0-.6-.03-1.33-.06-.74-.03-1.11-.06-1.13-.06.03,0-.23,0-.74.03-.48,0-.85.03-1.08.03-.2,0-.31-.06-.31-.14s.06-.11.2-.11c.11,0,.28-.03.51-.09.28-.06.48-.4.54-1.02.06-.48.11-1.81.11-4.03h0ZM30.16,1.08v4.99c0,.08.06.17.14.2.28.06.65.09,1.13.09.54,0,.91-.03,1.11-.09.2-.06.4-.2.57-.4.45-.51.68-1.13.68-1.87,0-.88-.2-1.62-.59-2.18-.43-.68-1.08-1.02-1.93-1.02-.34,0-.62.03-.88.09-.14.03-.23.11-.23.2h0ZM30.16,6.97v1.05c0,2.5,0,3.83.03,4.03.03.51.06.82.11.96.06.2.23.37.51.48.37.2.94.29,1.64.29.65,0,1.22-.2,1.67-.54.62-.45.93-1.16.93-2.1,0-1.67-.59-2.89-1.81-3.71-.4-.29-.91-.46-1.53-.54-.2-.03-.68-.06-1.45-.06-.09,0-.11.06-.11.14h0ZM39.32,7.29c0-1.79.6-3.37,1.76-4.76,1.36-1.67,3.23-2.52,5.56-2.52,2.13,0,3.88.62,5.22,1.87,1.39,1.28,2.1,2.98,2.1,5.1s-.68,3.91-2.04,5.36c-1.39,1.5-3.17,2.24-5.39,2.24-2.35,0-4.2-.79-5.5-2.41-1.13-1.36-1.7-2.98-1.7-4.88h0ZM41.07,6.75c0,2.13.59,3.86,1.73,5.19,1.11,1.28,2.52,1.93,4.22,1.93,1.22,0,2.3-.37,3.2-1.16,1.28-1.11,1.93-2.83,1.93-5.21,0-2.13-.59-3.83-1.73-5.1-1.05-1.16-2.35-1.73-3.91-1.73s-2.92.51-3.88,1.5c-1.05,1.11-1.56,2.64-1.56,4.59h0ZM58.42,8.93v-3.29c0-2.24,0-3.6-.03-4-.03-.6-.31-.94-.79-1.05-.17-.06-.4-.06-.65-.06-.08,0-.14-.06-.14-.11,0-.11.11-.14.31-.14.34,0,.79,0,1.33.03.54,0,.79,0,.77,0h.94c.62-.03,1.02-.03,1.25-.03,1.5,0,2.64.26,3.4.8.85.62,1.28,1.47,1.28,2.52,0,1.47-.74,2.92-2.24,4.31,1.22,1.56,1.93,2.44,2.1,2.67.71.91,1.28,1.59,1.76,2.1.71.76,1.47,1.19,2.27,1.33.23.03.48.06.74.06.08,0,.14.03.14.11s-.14.14-.42.14h-1.33c-.88,0-1.56-.11-1.98-.37-.37-.17-.74-.51-1.16-.99-.2-.23-.65-.82-1.33-1.73-.57-.77-1.22-1.67-2.04-2.75-.06-.09-.14-.12-.23-.12h-2.3c-.08,0-.11.06-.11.14v.45c0,2.13.03,3.46.08,4,.06.62.31.96.71,1.02.37.06.65.09.85.09.08,0,.14.03.14.11s-.08.14-.28.14c-.43,0-.94-.03-1.5-.03-.57-.03-.85-.03-.79-.03-.85.03-1.45.06-1.76.06-.2,0-.28-.06-.28-.14s.06-.11.17-.11.31-.03.54-.09c.28-.06.45-.4.54-1.02.06-.48.09-1.81.09-4.03h0ZM59.92,1.19v6.09c0,.09.03.17.11.2.34.2.99.31,1.96.31.57,0,1.05-.11,1.39-.37.76-.51,1.13-1.47,1.13-2.84,0-1.19-.28-2.1-.85-2.75-.59-.65-1.36-.96-2.35-.96-.6,0-.99.03-1.25.08-.11.06-.14.12-.14.23h0ZM72.42,8.93v-3.29c0-2.24,0-3.6-.03-4-.03-.6-.31-.94-.79-1.05-.17-.06-.4-.06-.65-.06-.08,0-.14-.06-.14-.11,0-.11.11-.14.31-.14.34,0,.79,0,1.33.03.54,0,.79,0,.77,0,1.22-.03,2.04-.03,2.49-.03,1.64,0,2.83.06,3.6.2,1.62.28,2.89.91,3.86,1.9,1.19,1.25,1.79,2.81,1.79,4.73,0,2.07-.65,3.83-2.01,5.24-1.33,1.42-3.2,2.12-5.61,2.12-.65,0-1.5-.06-2.58-.11-1.08-.08-1.59-.11-1.53-.11,0,0-.26,0-.74.03-.51,0-.88.03-1.11.03-.2,0-.28-.06-.28-.14s.06-.11.17-.11.31-.03.54-.09c.28-.06.45-.4.54-1.02.06-.48.08-1.81.08-4.03h0ZM73.98,5.36v2.3c0,2.15.03,3.49.03,4.03.06.79.11,1.28.23,1.42.34.51,1.39.74,3.15.74s3.26-.57,4.42-1.7c.48-.48.82-1.11,1.11-1.96.26-.79.37-1.62.37-2.49,0-1.87-.6-3.43-1.76-4.68-.79-.85-1.76-1.42-2.86-1.76-.85-.23-1.9-.34-3.23-.34-.62,0-.99.03-1.16.12-.17.06-.26.2-.26.37-.03.57-.03,1.9-.03,3.97h0ZM87.93,12.27l4.2-11.54c.17-.48.31-.74.43-.74.08,0,.23.23.4.68,1.08,2.81,2.52,6.52,4.34,11.2.48,1.25,1.08,1.93,1.73,2.1.2.06.4.09.59.09.14,0,.2.03.2.11s-.14.14-.37.14c-1.22,0-2.18-.03-2.92-.03-.37-.03-.57-.06-.57-.14,0-.06.06-.11.14-.14.17-.03.23-.2.11-.48l-1.73-4.59c-.06-.06-.08-.09-.17-.09h-4c-.08,0-.14.03-.17.14l-1.13,3.29c-.17.51-.25.91-.25,1.25s.23.54.71.54h.17c.14,0,.2.03.2.11s-.08.14-.28.14c-.17,0-.45-.03-.82-.03-.37-.03-.57-.03-.62-.03,0,0-.28,0-.79.03-.51,0-.96.03-1.3.03-.23,0-.34-.06-.34-.14s.06-.11.17-.11c.17,0,.34-.03.54-.06.62-.09,1.16-.65,1.56-1.73h0ZM90.51,8.16h3.54c.08,0,.11-.06.08-.14l-1.76-5.02c-.06-.11-.11-.2-.14-.2-.06,0-.08.08-.14.2l-1.64,5.02c-.03.09,0,.14.06.14h0ZM110.07,5.64v3.32c0,2.58.11,4,.4,4.28.28.25,1.02.4,2.24.4s1.93-.17,2.24-.54c.25-.31.42-.68.48-1.13.03-.14.08-.23.17-.23.06,0,.11.08.11.28,0,.59-.11,1.19-.28,1.84-.08.26-.23.43-.48.48-.06.03-.28.03-.68.03-1.05,0-2.07-.03-3.09-.06-1.05-.03-1.67-.06-1.9-.06-.03,0-.28,0-.76.03-.48,0-.82.03-1.05.03-.2,0-.31-.06-.31-.14s.06-.11.2-.11c.11,0,.28-.03.51-.09.28-.06.48-.4.54-1.02.06-.48.09-1.81.09-4.03v-3.29c0-2.24,0-3.6-.03-4-.03-.6-.31-.94-.79-1.05-.17-.06-.4-.06-.62-.06-.11,0-.17-.06-.17-.11,0-.11.11-.14.31-.14.34,0,.79,0,1.33.03.54,0,.79,0,.76,0h.82c.57-.03.96-.03,1.19-.03.2,0,.28.03.28.14,0,.06-.11.08-.34.11-.11.03-.25.03-.42.06-.43.06-.68.43-.71,1.05-.03.4-.03,1.76-.03,4h0ZM121.04,5.64v3.29c0,2.12.03,3.49.11,4.03.06.62.31.96.71,1.02.37.06.65.09.85.09.08,0,.14.03.14.11s-.11.14-.31.14c-.4,0-.91-.03-1.47-.03-.59-.03-.85-.03-.79-.03,0,0-.23,0-.74.03-.51,0-.85.03-1.08.03-.2,0-.31-.06-.31-.14s.06-.11.17-.11c.14,0,.31-.03.54-.09.28-.06.45-.4.54-1.02.06-.48.08-1.81.08-4.03v-3.29c0-2.24,0-3.6-.03-4-.03-.6-.25-.94-.62-1.05-.23-.03-.4-.06-.59-.06-.08,0-.14-.06-.14-.11,0-.11.11-.14.31-.14.23,0,.62,0,1.13.03h.74s.23,0,.74,0c.48-.03.85-.03,1.08-.03.2,0,.31.03.31.14,0,.06-.06.11-.17.11-.09,0-.26,0-.45.06-.42.06-.65.43-.68,1.05-.03.4-.06,1.76-.06,4h0ZM140.23.51l1.25,11.4c.11,1.16.45,1.81.99,1.98.45.06.88.11,1.33.17.03.03.03.06.03.08,0,.11-.11.17-.37.17-1.19,0-2.21-.03-3.12-.11-.34-.03-.51-.08-.51-.2,0-.06.03-.11.11-.11.08-.03.11-.26.08-.68l-.88-9.58h-.06l-4.56,9.69c-.31.65-.51.99-.62.99-.08,0-.26-.28-.57-.85-.23-.43-.94-1.87-2.18-4.34-.08-.2-.48-1.08-1.19-2.58-.74-1.59-1.16-2.5-1.25-2.72h-.08l-.74,8.62v.94c0,.31.14.51.48.57.14.03.31.06.45.06.25.06.4.08.4.14,0,.11-.11.17-.34.17-.28,0-.85-.03-1.73-.06-.03,0-.25,0-.65.03-.4,0-.71.03-.91.03s-.31-.06-.31-.17c0-.06.06-.08.17-.08.17,0,.37-.03.57-.06.28-.06.45-.26.57-.57.08-.17.11-.48.17-.99l1.33-12.1c.03-.23.11-.34.23-.34.08,0,.17.11.26.28l5.7,11.68,5.44-11.65c.11-.2.2-.31.28-.31.11,0,.2.17.23.51h0ZM145.62,12.27l4.22-11.54c.17-.48.31-.74.4-.74.11,0,.25.23.42.68,1.05,2.81,2.5,6.52,4.31,11.2.51,1.25,1.08,1.93,1.73,2.1.23.06.43.09.62.09.11,0,.17.03.17.11s-.11.14-.37.14c-1.19,0-2.18-.03-2.92-.03-.37-.03-.54-.06-.54-.14,0-.06.03-.11.11-.14.2-.03.23-.2.11-.48l-1.73-4.59c-.03-.06-.08-.09-.14-.09h-4c-.09,0-.17.03-.2.14l-1.11,3.29c-.17.51-.26.91-.26,1.25s.23.54.71.54h.17c.11,0,.2.03.2.11s-.11.14-.28.14-.45-.03-.82-.03c-.37-.03-.59-.03-.62-.03s-.28,0-.79.03c-.54,0-.96.03-1.3.03-.25,0-.37-.06-.37-.14s.06-.11.17-.11c.17,0,.37-.03.54-.06.65-.09,1.16-.65,1.56-1.73h0ZM148.22,8.16h3.54c.09,0,.11-.06.09-.14l-1.79-5.02c-.03-.11-.08-.2-.14-.2-.03,0-.08.08-.11.2l-1.64,5.02c-.03.09,0,.14.06.14h0Z"
                            />
                            <path
                                className="cls-1"
                                d="M1.33,32.15l2.44-6.69c.11-.29.2-.43.25-.43s.11.14.23.4c.62,1.62,1.45,3.8,2.52,6.49.28.71.62,1.13.99,1.22.11.03.26.06.37.06.06,0,.08,0,.08.06s-.06.08-.2.08c-.71,0-1.28,0-1.7-.03-.23,0-.31-.03-.31-.06,0-.06.03-.09.06-.09.11-.03.14-.14.09-.28l-1.02-2.66c-.03-.06-.06-.06-.08-.06h-2.32c-.06,0-.09.03-.11.08l-.65,1.9c-.08.28-.14.54-.14.74s.14.31.42.31h.09c.08,0,.11,0,.11.06s-.06.08-.17.08c-.09,0-.26,0-.45-.03h-.85c-.28.03-.54.03-.74.03-.14,0-.2-.03-.2-.08s.03-.06.08-.06c.11,0,.2-.03.31-.03.37-.06.68-.4.91-1.02h0ZM2.83,29.77h2.07s.06-.03.03-.09l-1.02-2.89c-.03-.09-.06-.14-.08-.14s-.03.06-.06.14l-.96,2.89c0,.06,0,.09.03.09h0ZM9.78,30.22v-1.9c0-1.33,0-2.1-.03-2.32-.03-.37-.17-.57-.45-.62-.11-.03-.23-.03-.37-.03-.06,0-.08-.03-.08-.09s.06-.09.17-.09c.2,0,.45.03.77.03s.48.03.45.03c.71-.03,1.19-.06,1.45-.06.96,0,1.64.06,2.07.14.96.14,1.7.51,2.27,1.11.68.71,1.05,1.62,1.05,2.72,0,1.22-.4,2.24-1.19,3.06-.77.82-1.87,1.22-3.26,1.22-.37,0-.88,0-1.5-.06-.62-.03-.91-.06-.88-.06h-.43c-.31.03-.51.03-.65.03-.11,0-.17-.03-.17-.08s.06-.06.11-.06.17-.03.31-.06c.17-.03.25-.23.31-.6.03-.28.06-1.05.06-2.32h0ZM10.69,28.15v3.66c.03.48.09.74.14.82.2.29.79.43,1.81.43s1.9-.31,2.58-.99c.26-.25.48-.65.62-1.11.17-.48.23-.96.23-1.47,0-1.08-.34-1.98-1.02-2.72-.45-.48-1.02-.82-1.67-.99-.48-.14-1.11-.23-1.87-.23-.34,0-.57.03-.68.09-.09.03-.14.11-.14.23v2.29h0ZM19.93,26.51l2.07,5.53c.31-.71.74-1.79,1.3-3.26.54-1.42.88-2.32.99-2.75.08-.2.11-.34.11-.4,0-.11-.06-.2-.14-.23-.08-.06-.23-.06-.4-.06-.09,0-.14-.03-.14-.09s.09-.09.26-.09.37.03.65.03c.25,0,.37.03.4.03.42-.03.71-.06.85-.06.11,0,.17.03.17.09s-.03.09-.11.09c-.23,0-.4.03-.54.11-.17.11-.37.45-.59,1.02-.11.28-.51,1.28-1.19,2.92-.74,1.79-1.22,2.86-1.39,3.26-.11.23-.2.45-.31.65-.06.11-.11.17-.14.17-.06,0-.11-.03-.17-.14-.03-.06-.11-.23-.23-.51l-2.64-6.61c-.11-.31-.23-.51-.34-.62-.09-.08-.23-.17-.45-.23-.08-.03-.23-.03-.4-.03-.06,0-.08-.03-.08-.09s.08-.09.28-.09.45.03.77.03.48.03.48.03c.03,0,.14-.03.4-.03s.45-.03.62-.03c.2,0,.28.03.28.09s-.06.09-.14.09h-.17c-.08,0-.17.03-.2.06-.11.03-.14.11-.14.2s.09.4.28.91h0ZM26.42,29.26c0-1.02.34-1.96,1.02-2.78.79-.96,1.87-1.45,3.23-1.45,1.25,0,2.27.37,3.03,1.08.82.74,1.22,1.73,1.22,2.98s-.4,2.27-1.19,3.09c-.79.88-1.84,1.3-3.12,1.3-1.36,0-2.44-.45-3.2-1.39-.65-.79-.99-1.73-.99-2.84h0ZM27.47,28.95c0,1.25.31,2.24.99,3,.62.77,1.45,1.13,2.44,1.13.71,0,1.33-.23,1.87-.68.74-.65,1.11-1.64,1.11-3.03,0-1.22-.34-2.21-.99-2.95-.62-.68-1.36-1.02-2.27-1.02s-1.7.28-2.27.88c-.6.65-.88,1.53-.88,2.67h0ZM42.63,32.43v-1.84c0-.45-.03-.71-.06-.85-.06-.11-.2-.2-.43-.26-.06-.03-.2-.03-.37-.03-.06,0-.08-.03-.08-.09s.06-.08.17-.08c.23,0,.48,0,.79.03.31,0,.45,0,.43,0h.42c.31-.03.51-.03.65-.03.11,0,.17.03.17.08s-.03.09-.08.09-.14,0-.28.03c-.23.03-.37.26-.4.6,0,.26-.03.62-.03,1.13v1.64c-.03.06-.06.11-.14.14-.59.34-1.33.48-2.27.48-1.47,0-2.66-.37-3.54-1.13-.37-.31-.65-.74-.88-1.28-.28-.57-.42-1.19-.42-1.81,0-.79.2-1.53.54-2.18.34-.6.74-1.05,1.28-1.36.74-.45,1.67-.68,2.86-.68.57,0,1.11.06,1.64.2.23.03.54.09.88.09.09.03.14.06.14.11,0-.03-.03.11-.06.4-.03.31-.03.68-.03,1.13,0,.14-.03.23-.08.23s-.08-.06-.08-.17c-.03-.28-.08-.51-.23-.71-.14-.23-.43-.43-.85-.6-.48-.2-1.05-.28-1.67-.28-.96,0-1.73.26-2.32.71-.71.57-1.05,1.47-1.05,2.75,0,.65.14,1.3.43,1.93.2.45.42.79.71,1.05.79.76,1.73,1.16,2.83,1.16.54,0,.94-.09,1.22-.23.14-.09.2-.2.2-.37h0ZM45.92,32.15l2.44-6.69c.11-.29.2-.43.25-.43s.14.14.23.4c.62,1.62,1.47,3.8,2.52,6.49.28.71.62,1.13.99,1.22.11.03.25.06.37.06.06,0,.11,0,.11.06s-.08.08-.23.08c-.71,0-1.28,0-1.7-.03-.2,0-.31-.03-.31-.06,0-.06.03-.09.06-.09.11-.03.14-.14.08-.28l-1.02-2.66c0-.06-.06-.06-.08-.06h-2.32c-.06,0-.08.03-.11.08l-.62,1.9c-.11.28-.17.54-.17.74s.14.31.43.31h.08c.09,0,.11,0,.11.06s-.06.08-.14.08c-.11,0-.28,0-.48-.03h-.82c-.31.03-.57.03-.77.03-.14,0-.2-.03-.2-.08s.03-.06.08-.06c.11,0,.2-.03.31-.03.37-.06.68-.4.91-1.02h0ZM47.42,29.77h2.07c.06,0,.06-.03.06-.09l-1.05-2.89c-.03-.09-.06-.14-.08-.14,0,0-.03.06-.06.14l-.96,2.89c0,.06,0,.09.03.09h0ZM54.37,30.22v-1.9c0-1.33,0-2.1-.03-2.32-.03-.37-.17-.57-.45-.62-.11-.03-.23-.03-.37-.03-.06,0-.09-.03-.09-.09s.06-.09.17-.09c.2,0,.45.03.76.03s.48.03.45.03c.71-.03,1.19-.06,1.45-.06.96,0,1.64.06,2.1.14.94.14,1.67.51,2.24,1.11.68.71,1.05,1.62,1.05,2.72,0,1.22-.4,2.24-1.19,3.06-.76.82-1.84,1.22-3.26,1.22-.37,0-.85,0-1.5-.06-.62-.03-.91-.06-.88-.06h-.42c-.28.03-.51.03-.62.03s-.17-.03-.17-.08.03-.06.08-.06c.08,0,.17-.03.31-.06.17-.03.25-.23.31-.6.03-.28.06-1.05.06-2.32h0ZM55.28,28.15v1.33c0,1.25,0,2.01.03,2.33,0,.48.06.74.11.82.2.29.79.43,1.81.43s1.9-.31,2.58-.99c.28-.25.48-.65.62-1.11.17-.48.23-.96.23-1.47,0-1.08-.34-1.98-1.02-2.72-.45-.48-1.02-.82-1.67-.99-.48-.14-1.11-.23-1.84-.23-.37,0-.6.03-.71.09-.08.03-.14.11-.14.23v2.29h0ZM63.01,29.26c0-1.02.34-1.96,1.02-2.78.79-.96,1.87-1.45,3.23-1.45,1.25,0,2.24.37,3.03,1.08.79.74,1.22,1.73,1.22,2.98s-.4,2.27-1.19,3.09c-.79.88-1.84,1.3-3.12,1.3-1.36,0-2.44-.45-3.2-1.39-.65-.79-.99-1.73-.99-2.84h0ZM64.03,28.95c0,1.25.34,2.24,1.02,3,.62.77,1.45,1.13,2.44,1.13.71,0,1.33-.23,1.87-.68.74-.65,1.11-1.64,1.11-3.03,0-1.22-.34-2.21-.99-2.95-.62-.68-1.39-1.02-2.27-1.02-.94,0-1.7.28-2.27.88-.6.65-.91,1.53-.91,2.67h0ZM74.86,33.48c-.57,0-1.05-.09-1.45-.28-.08-.06-.14-.2-.14-.4,0-.62,0-1.05.06-1.25,0-.06.03-.09.08-.09.03,0,.06.06.06.11,0,.17.03.31.03.4.17.74.71,1.11,1.62,1.11.48,0,.88-.14,1.16-.46.26-.28.37-.59.37-.96s-.09-.71-.26-.96c-.17-.29-.51-.6-.99-.99l-.48-.4c-.54-.45-.91-.85-1.13-1.25-.17-.31-.26-.68-.26-1.08,0-.59.2-1.08.6-1.42.4-.37.94-.54,1.64-.54.34,0,.68.03.99.11.17.03.28.06.37.06s.11.03.11.06c0-.03,0,.09-.03.34,0,.23-.03.51-.03.82,0,.17,0,.23-.06.23s-.08-.03-.08-.11c-.03-.26-.08-.43-.14-.54-.23-.4-.65-.59-1.36-.59-.37,0-.68.11-.94.34-.26.23-.37.54-.37.91,0,.31.09.6.26.85.17.23.54.57,1.05.96l.31.26c.59.48,1.02.91,1.25,1.3.2.37.31.77.31,1.22,0,.77-.31,1.36-.91,1.79-.42.31-.99.45-1.64.45h0ZM82.88,32.15l2.44-6.69c.08-.29.17-.43.23-.43s.14.14.25.4c.6,1.62,1.45,3.8,2.5,6.49.28.71.62,1.13,1.02,1.22.11.03.23.06.34.06.08,0,.11,0,.11.06s-.08.08-.23.08c-.68,0-1.25,0-1.67-.03-.23,0-.34-.03-.34-.06,0-.06.03-.09.08-.09.11-.03.11-.14.06-.28l-.99-2.66c-.03-.06-.06-.06-.11-.06h-2.3c-.06,0-.08.03-.11.08l-.65,1.9c-.11.28-.14.54-.14.74s.14.31.4.31h.11c.06,0,.11,0,.11.06s-.06.08-.17.08c-.08,0-.25,0-.48-.03h-.82c-.31.03-.54.03-.77.03-.11,0-.2-.03-.2-.08s.03-.06.11-.06.2-.03.31-.03c.37-.06.65-.4.91-1.02h0ZM84.39,29.77h2.04c.06,0,.06-.03.06-.09l-1.02-2.89c-.03-.09-.06-.14-.08-.14s-.06.06-.08.14l-.94,2.89c-.03.06,0,.09.03.09h0ZM92.07,33.48c-.57,0-1.05-.09-1.45-.28-.11-.06-.17-.2-.17-.4,0-.62.03-1.05.08-1.25,0-.06.03-.09.06-.09.06,0,.08.06.08.11,0,.17,0,.31.03.4.14.74.68,1.11,1.59,1.11.51,0,.88-.14,1.16-.46.26-.28.4-.59.4-.96s-.08-.71-.28-.96c-.17-.29-.48-.6-.96-.99l-.48-.4c-.54-.45-.91-.85-1.13-1.25-.17-.31-.25-.68-.25-1.08,0-.59.2-1.08.59-1.42.4-.37.94-.54,1.62-.54.37,0,.68.03,1.02.11.14.03.28.06.37.06.06,0,.11.03.11.06,0-.03-.03.09-.03.34-.03.23-.03.51-.03.82,0,.17-.03.23-.06.23-.06,0-.08-.03-.11-.11,0-.26-.06-.43-.11-.54-.23-.4-.68-.59-1.36-.59-.37,0-.71.11-.94.34-.25.23-.4.54-.4.91,0,.31.09.6.28.85.17.23.51.57,1.05.96l.28.26c.62.48,1.05.91,1.28,1.3.2.37.31.77.31,1.22,0,.77-.31,1.36-.94,1.79-.43.31-.96.45-1.62.45h0ZM98.22,33.48c-.57,0-1.05-.09-1.45-.28-.11-.06-.17-.2-.17-.4,0-.62.03-1.05.06-1.25.03-.06.06-.09.08-.09.06,0,.09.06.09.11,0,.17,0,.31.03.4.14.74.68,1.11,1.59,1.11.48,0,.88-.14,1.16-.46.25-.28.4-.59.4-.96s-.11-.71-.28-.96c-.17-.29-.48-.6-.96-.99l-.48-.4c-.54-.45-.94-.85-1.13-1.25-.2-.31-.28-.68-.28-1.08,0-.59.2-1.08.62-1.42.4-.37.94-.54,1.62-.54.34,0,.68.03.99.11.17.03.28.06.4.06.06,0,.11.03.11.06,0-.03-.03.09-.03.34-.03.23-.03.51-.03.82,0,.17-.03.23-.08.23-.03,0-.06-.03-.08-.11,0-.26-.06-.43-.14-.54-.2-.4-.65-.59-1.33-.59-.4,0-.71.11-.96.34-.26.23-.37.54-.37.91,0,.31.08.6.28.85.17.23.51.57,1.02.96l.31.26c.62.48,1.02.91,1.28,1.3.2.37.31.77.31,1.22,0,.77-.31,1.36-.94,1.79-.42.31-.96.45-1.62.45h0ZM102.39,29.26c0-1.02.34-1.96.99-2.78.82-.96,1.9-1.45,3.26-1.45,1.22,0,2.24.37,3,1.08.82.74,1.22,1.73,1.22,2.98s-.4,2.27-1.16,3.09c-.82.88-1.87,1.3-3.15,1.3-1.36,0-2.44-.45-3.2-1.39-.65-.79-.96-1.73-.96-2.84h0ZM103.41,28.95c0,1.25.34,2.24.99,3,.65.77,1.47,1.13,2.44,1.13.74,0,1.33-.23,1.87-.68.74-.65,1.11-1.64,1.11-3.03,0-1.22-.31-2.21-.99-2.95-.6-.68-1.36-1.02-2.27-1.02s-1.7.28-2.27.88c-.6.65-.88,1.53-.88,2.67h0ZM117.1,33.48c-1.5,0-2.69-.4-3.54-1.16-.88-.79-1.3-1.84-1.3-3.18,0-.45.08-.94.23-1.39.23-.62.54-1.13.96-1.56.77-.77,1.87-1.16,3.29-1.16.6,0,1.11.06,1.56.14.51.09.88.14,1.11.14.11.03.14.06.14.14,0,0,0,.08-.03.2,0,.11,0,.23-.03.4,0,.31,0,.68-.03,1.11,0,.14-.03.23-.08.23s-.08-.08-.08-.23c0-.48-.17-.85-.45-1.11-.48-.4-1.22-.59-2.15-.59-1.11,0-1.96.25-2.49.76-.65.62-.96,1.56-.96,2.84,0,1.05.37,1.96,1.08,2.75.77.79,1.7,1.19,2.81,1.19.91,0,1.53-.2,1.87-.54.2-.2.34-.51.4-.91.03-.11.08-.17.11-.17.06,0,.08.06.08.17,0,.06-.03.26-.08.57-.06.37-.11.65-.14.79-.06.17-.14.25-.28.34-.43.14-1.05.23-1.96.23h0ZM123.05,28.32v1.9c0,1.25.03,2.01.06,2.32.06.37.2.57.43.6.2.03.37.06.48.06.06,0,.08,0,.08.06s-.06.08-.17.08c-.25,0-.54,0-.88-.03-.31,0-.48,0-.45,0h-.42c-.28.03-.51.03-.62.03s-.17-.03-.17-.08.03-.06.08-.06c.08,0,.17-.03.31-.06.17-.03.28-.23.31-.6.06-.28.06-1.05.06-2.32v-1.9c0-1.33,0-2.1-.03-2.32,0-.37-.14-.57-.34-.62-.14-.03-.25-.03-.34-.03-.06,0-.08-.03-.08-.09s.06-.09.17-.09c.14,0,.37.03.65.03s.42.03.42.03c0,0,.14-.03.42-.03s.51-.03.62-.03c.14,0,.2.03.2.09s-.03.09-.08.09c-.08,0-.17,0-.28.03-.25.03-.37.26-.4.62-.03.23-.03.99-.03,2.32h0ZM126,32.15l2.44-6.69c.11-.29.2-.43.26-.43s.14.14.23.4c.62,1.62,1.45,3.8,2.52,6.49.28.71.62,1.13.99,1.22.11.03.25.06.37.06.06,0,.08,0,.08.06s-.06.08-.2.08c-.71,0-1.28,0-1.7-.03-.2,0-.31-.03-.31-.06,0-.06.03-.09.06-.09.11-.03.14-.14.08-.28l-1.02-2.66c-.03-.06-.06-.06-.08-.06h-2.33c-.06,0-.08.03-.11.08l-.65,1.9c-.08.28-.14.54-.14.74s.14.31.42.31h.08c.08,0,.11,0,.11.06s-.06.08-.17.08c-.08,0-.25,0-.45-.03h-.85c-.28.03-.54.03-.74.03-.14,0-.2-.03-.2-.08s.03-.06.08-.06c.11,0,.2-.03.31-.03.37-.06.68-.4.91-1.02h0ZM127.5,29.77h2.07s.06-.03.03-.09l-1.02-2.89c-.03-.09-.06-.14-.09-.14s-.03.06-.06.14l-.96,2.89c0,.06,0,.09.03.09h0ZM134.45,30.22v-1.9c0-1.33,0-2.1-.03-2.32-.03-.37-.17-.57-.45-.62-.11-.03-.23-.03-.37-.03-.06,0-.08-.03-.08-.09s.06-.09.17-.09c.2,0,.45.03.77.03s.48.03.45.03c.71-.03,1.19-.06,1.45-.06.96,0,1.64.06,2.1.14.94.14,1.67.51,2.24,1.11.68.71,1.05,1.62,1.05,2.72,0,1.22-.4,2.24-1.19,3.06-.77.82-1.87,1.22-3.26,1.22-.37,0-.88,0-1.5-.06-.62-.03-.91-.06-.88-.06h-.43c-.28.03-.51.03-.62.03-.14,0-.2-.03-.2-.08s.06-.06.11-.06.17-.03.31-.06c.17-.03.25-.23.31-.6.03-.28.06-1.05.06-2.32h0ZM135.35,28.15v1.33c0,1.25,0,2.01.03,2.33,0,.48.06.74.11.82.2.29.79.43,1.81.43s1.9-.31,2.58-.99c.28-.25.48-.65.62-1.11.17-.48.23-.96.23-1.47,0-1.08-.34-1.98-1.02-2.72-.45-.48-1.02-.82-1.67-.99-.48-.14-1.11-.23-1.87-.23-.34,0-.57.03-.68.09-.08.03-.14.11-.14.23v2.29h0Z"
                            />
                            <path
                                className="cls-1"
                                d="M143.09,29.26c0-1.02.34-1.96,1.02-2.78.79-.96,1.87-1.45,3.23-1.45,1.25,0,2.24.37,3.03,1.08.79.74,1.22,1.73,1.22,2.98s-.4,2.27-1.19,3.09c-.82.88-1.84,1.3-3.12,1.3-1.36,0-2.44-.45-3.2-1.39-.65-.79-.99-1.73-.99-2.84h0ZM144.11,28.95c0,1.25.34,2.24,1.02,3,.62.77,1.45,1.13,2.44,1.13.71,0,1.33-.23,1.87-.68.74-.65,1.11-1.64,1.11-3.03,0-1.22-.34-2.21-.99-2.95-.62-.68-1.39-1.02-2.3-1.02s-1.67.28-2.24.88c-.59.65-.91,1.53-.91,2.67h0ZM154.94,33.48c-.57,0-1.05-.09-1.45-.28-.11-.06-.14-.2-.14-.4,0-.62,0-1.05.06-1.25,0-.06.03-.09.08-.09.03,0,.06.06.06.11,0,.17.03.31.03.4.17.74.68,1.11,1.62,1.11.48,0,.88-.14,1.16-.46.25-.28.37-.59.37-.96s-.08-.71-.25-.96c-.2-.29-.51-.6-.99-.99l-.48-.4c-.54-.45-.91-.85-1.13-1.25-.17-.31-.25-.68-.25-1.08,0-.59.2-1.08.6-1.42.4-.37.94-.54,1.62-.54.37,0,.71.03,1.02.11.14.03.28.06.37.06s.11.03.11.06c0-.03,0,.09-.03.34,0,.23-.03.51-.03.82,0,.17,0,.23-.06.23s-.08-.03-.08-.11c-.03-.26-.09-.43-.14-.54-.23-.4-.65-.59-1.36-.59-.37,0-.68.11-.94.34-.25.23-.4.54-.4.91,0,.31.11.6.28.85.17.23.54.57,1.05.96l.31.26c.6.48,1.02.91,1.25,1.3.2.37.31.77.31,1.22,0,.77-.31,1.36-.91,1.79-.45.31-.99.45-1.64.45h0Z"
                            />
                            <path
                                className="cls-1"
                                d="M78.69,19.57c.2-.14.34-.31.42-.48.11-.17.14-.37.14-.57,0-.28-.03-.48-.14-.62-.08-.11-.23-.2-.42-.2-.14,0-.28.06-.4.2-.08.11-.14.28-.14.48,0,.14.06.31.14.54.08.2.23.4.4.65h0ZM79.31,21.36c-.2-.23-.4-.46-.57-.65-.17-.23-.31-.45-.45-.65-.17.11-.31.26-.42.43-.11.17-.17.34-.17.51,0,.23.08.43.23.6.11.14.31.23.51.23.17,0,.31-.03.45-.11.14-.09.28-.2.43-.34h0ZM79.43,21.47c-.17.2-.4.37-.62.48-.2.11-.45.17-.71.17-.28,0-.51-.08-.68-.23-.17-.17-.25-.37-.25-.59,0-.26.08-.48.28-.74.17-.23.45-.43.79-.62-.17-.26-.28-.48-.34-.68-.08-.2-.11-.4-.11-.57,0-.31.09-.59.28-.82.2-.2.45-.31.74-.31.25,0,.45.06.62.23.17.17.25.37.25.62,0,.2-.08.43-.23.62-.14.23-.37.46-.68.65.2.28.4.51.54.71.17.2.31.34.4.45.14-.2.28-.4.4-.65.14-.26.23-.4.28-.46.08-.11.2-.23.28-.28.11-.06.2-.08.31-.08.14,0,.25.03.34.11.08.08.14.2.14.34,0,.08-.03.17-.11.23-.06.08-.14.11-.25.11-.08,0-.17-.03-.23-.09-.03-.06-.06-.14-.06-.25v-.17h-.06c-.08,0-.23.17-.42.51-.17.31-.34.6-.51.79.25.26.45.46.62.6.2.11.34.2.45.2.14,0,.25-.06.37-.14.11-.08.17-.11.17-.11h.06v.06c0,.11-.08.23-.28.34-.2.14-.4.2-.65.2-.17,0-.34-.06-.51-.14-.17-.08-.37-.25-.62-.48h0Z"
                            />
                        </g>
                    </svg>
                </LogoLink>

                <div className="Navbar_Link_Container">
                    {t.navbar.navLinks?.map((link, index) => (
                        <MotionLink
                            key={index}
                            className="Navbar_Link"
                            href={link.path}
                            onClick={() => {
                                setMenuOpen_Action(false);
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.name}
                        </MotionLink>
                    ))}
                </div>

                <div className="Navbar_Tools_Container">
                    <m.button whileTap={{ scale: 0.95 }} className="Nav_Button Language_Selector_Btn Desktop_Only" onClick={changeLanguage}>
                        <p className="Language_Label">{isEnglish ? "LANGUAGE" : "IDIOMA"}</p>

                        <div className="Language_Flags">
                            <Image
                                src={"/general_assets/navbar_lang_btn_ptbr.png"}
                                className={isEnglish ? "Language_Flag_Img BR_Flag" : "Language_Flag_Img BR_Flag Active"}
                                width={32}
                                height={32}
                                alt="Language Selector"
                            />
                            <Image
                                src={"/general_assets/navbar_lang_btn_en.png"}
                                className={isEnglish ? "Language_Flag_Img Active" : "Language_Flag_Img"}
                                width={32}
                                height={32}
                                alt="Language Selector"
                            />
                        </div>
                    </m.button>
                    <m.button
                        whileTap={{ scale: 0.95 }}
                        className="Nav_Button Menu_Btn"
                        onClick={() => {
                            toggleMenu_Action();
                        }}
                    >
                        <span className="material-icons">menu_book</span>
                    </m.button>
                </div>
            </nav>

            {/* Menu */}
            <DragAndCloseModal>
                <div className="Menu_Main_Info">
                    <span className="Service_Full_Description_Pattern Menu_Pattern"></span>

                    <div className="Menu_Search_Container">
                        <input
                            placeholder={isEnglish ? "Type your search here" : "Digite aqui o que busca"}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        ></input>
                        <button>
                            <span className={searchIsEmpty ? "material-icons" : "material-icons Active"}>search</span>
                        </button>
                    </div>

                    {searchResults.length > 0 && (
                        <div className="Menu_Search_Results">
                            {searchResults.map((result, index) => (
                                <MotionLink
                                    whileTap={{ scale: 0.95 }}
                                    key={index + "MENU_SEARCH_RESULT"}
                                    href={result.link}
                                    onClick={() => {
                                        //setIsModalOpen(false);
                                        setMenuOpen_Action(false);
                                        setSearchTerm("");
                                    }}
                                >
                                    {result.title}
                                    <span className="material-icons">open_in_new</span>
                                </MotionLink>
                            ))}
                        </div>
                    )}

                    {t.menu.links?.map((link, index) => (
                        <MotionLink
                            whileTap={{ scale: 0.95 }}
                            key={index + "MENU_LINK"}
                            href={link.path}
                            onClick={() => {
                                //setIsModalOpen(false);
                                setMenuOpen_Action(false);
                            }}
                        >
                            {link.name}
                        </MotionLink>
                    ))}

                    <m.button whileTap={{ scale: 0.95 }} className="Language_Btn" onClick={changeLanguage}>
                        <span className="material-icons">language</span>
                        {isEnglish ? "Mudar para Português" : "Change to English"}
                    </m.button>

                    <span className="Service_Full_Description_Pattern Menu_Pattern"></span>
                </div>
            </DragAndCloseModal>
        </>
    );
};

export default Navbar;