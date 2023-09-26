
// For Pometum Site (Apple Database)

import { AxiosResponse } from "axios"
import { api } from "./axios"
import { Metadata, PometumSite } from "@js/interfaces"

export const getAll = async (): Promise<AxiosResponse<PometumSite, any>> => {
    return api.get("/content").then(res => res.data)
}

export const getMeta = async (): Promise<AxiosResponse<Metadata, any>> => {
    return await api.get("/apple")
}
