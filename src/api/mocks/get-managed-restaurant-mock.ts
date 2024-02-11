import { http, HttpResponse } from 'msw'

import { GetManagerRestaurantResponse } from '../get-manager-restaurant'

export const getManagerRestaurantMock = http.get<
  never,
  never,
  GetManagerRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurat-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
