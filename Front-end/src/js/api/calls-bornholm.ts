
// For Bornholm Dictionary

import { api } from "./axios"
import { BornholmSite, Metadata } from "@js/interfaces"

export const getAll = async (): Promise<BornholmSite> => {
    return api.get("/content").then(res => res.data)
}

export const getMeta = async (): Promise<Metadata> => {
    return await api.get("/meta")
}
