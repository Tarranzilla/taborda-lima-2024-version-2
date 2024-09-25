import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User_Firebase = {
    id: string | null;
    email: string | null;
    display_name: string | null;
    avatar_url: string | null;
};

export type User_Local = {
    id: string;
    name: string;
    email: string;
    telephone: string;
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        complement: string;
        zip: string;
    };
    avatar_url: string;
    isOwner: boolean;
    isAdmin: boolean;
    isEditor: boolean;
};

type UserState = {
    firebaseUser: User_Firebase | null;
    currentUser: User_Local | null;
    editedCurrentUser: User_Local | null;
    isAdmin: boolean;
};

const initialState: UserState = {
    firebaseUser: null,
    currentUser: null,
    editedCurrentUser: null,
    isAdmin: false,
};

type SetFirebaseUserAction = PayloadAction<User_Firebase | null>;
type SetCurrentUserAction = PayloadAction<User_Local | null>;
type SetEditedCurrentUserAction = PayloadAction<User_Local | null>;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFirebaseUser: (state, action: SetFirebaseUserAction) => {
            state.firebaseUser = action.payload;
        },
        setCurrentUser: (state, action: SetCurrentUserAction) => {
            state.currentUser = action.payload;
        },

        setCurrentEditedUser: (state, action: SetEditedCurrentUserAction) => {
            state.editedCurrentUser = action.payload;
        },

        setUserIsAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        },
    },
});

export const { setFirebaseUser, setCurrentUser, setCurrentEditedUser, setUserIsAdmin } = userSlice.actions;
export default userSlice.reducer;
