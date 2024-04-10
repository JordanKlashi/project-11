import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: localStorage.getItem('token') || null,
    isLoggedIn: localStorage.getItem('token') ? true : false,
    currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {},
    loading: false
}

export const login = createAsyncThunk(
    'userSlice/login',
    async (userData) => {
        try {
            const { data } = await axios.post("http://localhost:3001/api/v1/user/login", userData);
            const token = await data.body.token;
            localStorage.setItem('token', JSON.stringify(token));
            return { token };
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
    'userSlice/fetchUserProfile',
    async (token) => {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        };
        const { data } = await axios.post('http://localhost:3001/api/v1/user/profile', {}, { headers });
        return data.body;
    }
);

export const editUsername = createAsyncThunk(
    "userSlice/editUsername",
    async ({ username, token }) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
        }
        const data = {
            userName: username,
        }
        const response = await axios.put("http://localhost:3001/api/v1/user/profile",
            data,
            { headers }
        )
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            localStorage.clear();
            state.isLoggedIn = false;
            state.currentUser = {};
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            state.error = null;
            state.isLoggedIn = true;
        });

        builder.addCase(login.rejected, (state, action) => {
            localStorage.clear();
            state.error = action.error.message || 'Access Denied! Invalid account';
            state.isLoggedIn = false;
        });

        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            state.error = null;
        });

        builder.addCase(fetchUserProfile.rejected, (state, action) => {
            state.error = action.error.message || 'Failed to fetch user profile';
        });
        builder.addCase(editUsername.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.error = null;
        })
        builder.addCase(editUsername.rejected, (state, action) => {
            state.error = action.error.message || 'Failed to change username';
        })
    },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;