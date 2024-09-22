import {api, handleResponse} from "./api";

export async function createQuote({ formData }) {
    const response = await api.post(`/quotes`, formData);
    return handleResponse(response);
}

export async function getQuotesList() {
    const response = await api.get(`/quotes`);
    return handleResponse(response);
}

export async function getQuote(id) {
    const response = await api.get(`/quotes/${id}`);
    return handleResponse(response);
}

export async function getQuotesListByUser(id) {
    const response = await api.get(`/quotes/user/${id}`);
    return handleResponse(response);
}

export async function getQuotesListByTattooArtist(id) {
    const response = await api.get(`/quotes/tattoo-artist/${id}`);
    return handleResponse(response);
}

export async function approveQuote({ id, formData }) {
    const response = await api.put(`/quotes/approve/${id}`, formData);
    return handleResponse(response);
}