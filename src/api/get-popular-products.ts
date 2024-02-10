import { api } from '@/lib/axios'

export type GetPopularProductsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts(): Promise<GetPopularProductsResponse> {
  const res = await api.get('/metrics/popular-products')

  return res.data
}
