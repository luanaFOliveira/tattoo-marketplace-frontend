import { api, errorToast } from "./api";
import { toast } from "react-toastify";

export async function logInUser(payload) {
    const response = await api.post("/login/user", payload);
    return handleResponse(response, "Credenciais inválidas.");
}

export async function logInTattooArtist(payload) {
    const response = await api.post("/login/tattoo-artist", payload);
    return handleResponse(response, "Credenciais inválidas.");
}

async function handleResponse(response, errorMessage) {
    if (response.response) {
      const { status } = response.response;
  
      if (status === 401 || status === 404) {
        toast.error(errorMessage);
      } else {
        errorToast(response);
      }
    } else if (response.data) {
      const { token, user } = response.data;
      return { token, user };
    }
}

