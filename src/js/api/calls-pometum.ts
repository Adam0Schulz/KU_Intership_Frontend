
// For Pometum Site (Apple Database)

import { api } from "./axios"
import { Metadata, PometumSite } from "@js/interfaces"

export const getAll = async (): Promise<PometumSite> => {
    return api.get("/content").then(res => res.data)
}

export const getMeta = async (): Promise<Metadata> => {
    return await api.get("/meta")
}
