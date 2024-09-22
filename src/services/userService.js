import {api, handleResponse} from "./api";

export async function createUser({ formData }) {
    const response = await api.post(`/users`, formData);
    return handleResponse(response);
}

export async function getUserList() {
    const response = await api.get(`/users`);
    return handleResponse(response);
}
