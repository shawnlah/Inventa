import { AxiosResponse } from "axios"
import { CreateCollectionRequest, ListCollectionResponse, UpdateCollectionRequest } from "../interfaces/collection"
import ApiClient from "../utils/api"

export const listCollections = async (token: string, userId: number): Promise<ListCollectionResponse[]> => {
  return (await ApiClient({
    method: 'GET',
    url: `/collection/list/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}

export const createCollection = async (token: string, data: CreateCollectionRequest): Promise<AxiosResponse> => {
  return (await ApiClient({
    method: 'POST',
    url: '/collection/create',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data
  }))
}

export const updateCollection = async (token: string, data: UpdateCollectionRequest): Promise<AxiosResponse> => {
  return (await ApiClient({
    method: 'PUT',
    url: '/collection/update',
    headers: {
      Authorization: `Bearer ${token}`
    },
    data
  }))
}

export const deleteCollection = async (token: string, collectionId: string): Promise<AxiosResponse> => {
  return (await ApiClient({
    method: 'DELETE',
    url: `/collection/delete/${collectionId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }))
}
