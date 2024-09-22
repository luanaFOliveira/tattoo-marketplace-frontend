import {api, handleResponse} from "./api";

export async function createCategory({ formData }) {
    const response = await api.post(`/categories`, formData);
    return handleResponse(response);
}

export async function getCategoriesList() {
    const response = await api.get(`/categories`);
    return handleResponse(response);
}

export async function getCategory(id) {
    const response = await api.get(`/categories/${id}`);
    return handleResponse(response);
}

