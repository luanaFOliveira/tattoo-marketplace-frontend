import {api, handleResponse} from "./api";

export async function createTattooArtist({ formData }) {
    const response = await api.post(`/tattoo-artist`, formData);
    return handleResponse(response);
}

export async function getTattooArtistList() {
    const response = await api.get(`/tattoo-artist`);
    return handleResponse(response);
}

export async function getTattooArtist(id) {
    const response = await api.get(`/tattoo-artist/${id}`);
    return handleResponse(response);
}

export async function getTattooArtistListByCategory(id) {
    const response = await api.get(`/tattoo-artist/categories/${id}`);
    return handleResponse(response);
}