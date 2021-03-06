import { AxiosResponse } from "axios";
import { CreateCategoryRequest, ListCategory } from "../interfaces/category";
import ApiClient from "../utils/api";

export const listCategories = async (token: string, collectionId: number): Promise<ListCategory[]> => {
  return (await ApiClient({
    method: 'GET',
    url: `/category/list/${collectionId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })).data
}

export const createCategory = async (token: string, data: CreateCategoryRequest): Promise<AxiosResponse> => {
  return (await ApiClient({
    method: 'POST',
    url: `/category/create`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data
  }))
}

export const deleteCategory = async (token: string, categoryName: string): Promise<AxiosResponse> => {
  return (await ApiClient({
    method: 'DELETE',
    url: `/category/delete/${categoryName}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }))
}
