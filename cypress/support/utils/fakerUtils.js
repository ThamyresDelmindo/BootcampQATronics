import { faker } from '@faker-js/faker'

export function gerarNomeConta() {
  return faker.finance.accountName()
}