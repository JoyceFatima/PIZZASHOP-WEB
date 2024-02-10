import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount(): Promise<GetMonthCanceledOrdersAmountResponse> {
  const res = await api.get('/metrics/month-canceled-orders-amount')

  return res.data
}
