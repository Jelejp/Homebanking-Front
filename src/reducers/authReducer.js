// src/reducers/authReducer.js
import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";

const initialState = {
    loggedIn: false,
    token: '',
    client: {
        fullName: '',
        email: '',
    }
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            return {
                ...state,
                loggedIn: true,
                // token: action.payload.token,  // Guardar el token en el estado
                client: {
                    fullName: action.payload.fullName,
                    email: action.payload.email,
                }
            };
        })
        .addCase(logout, (state, action) => {
            return {
                ...state,
                loggedIn: false,
                token: '',
                client: {
                    fullName: '',
                    email: '',
                }
            };
        });
});

export default authReducer;

