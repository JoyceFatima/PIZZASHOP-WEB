import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByText('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByText('Nome do usuário').fill('John Doe')
  await page.getByText('Seu celular').fill('1197364849')
  await page.getByText('Seu e-mail').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()

  
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByText('Nome do estabelecimento').fill('Coffee and Pizza')
  await page.getByText('Nome do usuário').fill('John Doe')
  await page.getByText('Seu celular').fill('1197364849')
  await page.getByText('Seu e-mail').fill('johndoe@example.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()

  
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  await expect(page.url()).toContain('/sign-in')
})
