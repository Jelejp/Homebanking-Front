import { createAction } from "@reduxjs/toolkit";

export const login = createAction('LOGIN', (client/*info de user*/) => {
    const clearClient = {
        fullName: client.firstName + ' ' + client.lastName,
        email: client.email,
        token: client.token

    }
    return { payload: clearClient }
})
export const logout = createAction('LOGOUT');