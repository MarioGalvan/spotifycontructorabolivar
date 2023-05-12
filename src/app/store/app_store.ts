import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    logged: boolean;
    access_token: string;
}

const initialState: AppState = {
    logged: false,
    access_token: typeof window !== "undefined" && sessionStorage.getItem("access_token") || ""
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLogged: (state: AppState, action: PayloadAction<boolean>) => {
            state.logged = action.payload;
        },
        setAccessToken: (state: AppState, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },

        logout: (state: AppState) => {
            state.logged = false;
            state.access_token = "";
        }
    }
});

export const { setLogged,setAccessToken,logout } = appSlice.actions;
export default appSlice.reducer;
