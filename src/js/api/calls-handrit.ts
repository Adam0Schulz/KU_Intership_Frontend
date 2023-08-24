
// For Handrit Dictionary

import { api } from "./axios"
import { HandritSite, Metadata } from "@js/interfaces"

export const getAll = async (): Promise<HandritSite> => {
    return api.get("/content").then(res => res.data)
}

export const getMeta = async (): Promise<Metadata> => {
    return await api.get("/meta")
}
