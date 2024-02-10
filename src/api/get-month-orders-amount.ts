import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount(): Promise<GetMonthOrdersAmountResponse> {
  const res = await api.get('/metrics/month-orders-amount')

  return res.data
}
