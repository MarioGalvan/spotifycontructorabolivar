import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  logged: boolean;
}

const initialState: AppState = {
    logged: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLogged: (state:AppState, action: PayloadAction<boolean>) => {
            state.logged = action.payload;
        }
    }
});

export const { setLogged } = appSlice.actions;
export const selectLogged = (state: any) => state.logged;
export default appSlice.reducer;
