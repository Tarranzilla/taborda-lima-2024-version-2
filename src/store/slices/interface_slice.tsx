import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Tipo para a Lógica da Interface
type InterfaceState = {
    selectedLanguage: "none" | "en" | "pt-BR";
    colorMode: "light" | "dark";
    contentViewerMode: "standard" | "media" | "text";

    activePage: string;
    activeSubpage: string | null;
    activeItem: string | null;

    isCookiesOpen: boolean;
    isMenuOpen: boolean;
    isUserTabOpen: boolean;
    userTabNeedsUpdate: boolean;
    isControlPanelOpen: boolean;
};

// Estado inicial da interface
const initialInterfaceState: InterfaceState = {
    selectedLanguage: "none", // "none" | "en" | "pt-BR
    colorMode: "light",
    contentViewerMode: "standard",

    activePage: "home",
    activeSubpage: null,
    activeItem: null,

    isCookiesOpen: false,
    isMenuOpen: false,
    isUserTabOpen: false,
    userTabNeedsUpdate: false,
    isControlPanelOpen: false,
};

// Define o slice da interface
const InterfaceSlice = createSlice({
    name: "interface_slice",
    initialState: initialInterfaceState,
    reducers: {
        setActiveLanguage: (state, action: PayloadAction<"none" | "en" | "pt-BR">) => {
            state.selectedLanguage = action.payload;
        },
        toggleColorMode: (state) => {
            console.log("Toggling color mode");
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        },
        setContentViewerMode: (state, action: PayloadAction<"standard" | "media" | "text">) => {
            state.contentViewerMode = action.payload;
        },

        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
        setActiveSubpage: (state, action: PayloadAction<string>) => {
            state.activeSubpage = action.payload;
        },
        setActiveItem: (state, action: PayloadAction<string>) => {
            state.activeItem = action.payload;
        },

        toggleCookiesOpen: (state) => {
            state.isCookiesOpen = !state.isCookiesOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        toggleMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleUserTabOpen: (state) => {
            state.isUserTabOpen = !state.isUserTabOpen;
        },

        setUserTabNeedsUpdate: (state, action: PayloadAction<boolean>) => {
            state.userTabNeedsUpdate = action.payload;
        },

        setUserTabOpen: (state, action: PayloadAction<boolean>) => {
            state.isUserTabOpen = action.payload;
        },

        setControlPanelOpen: (state, action: PayloadAction<boolean>) => {
            state.isControlPanelOpen = action.payload;
        },
    },
});

export const {
    setActiveLanguage,
    toggleColorMode,
    setContentViewerMode,

    setActivePage,
    setActiveSubpage,
    setActiveItem,

    toggleCookiesOpen,
    closeMenu,
    toggleMenuOpen,
    toggleUserTabOpen,
    setUserTabNeedsUpdate,
    setUserTabOpen,
    setControlPanelOpen,
} = InterfaceSlice.actions;

export default InterfaceSlice.reducer;
