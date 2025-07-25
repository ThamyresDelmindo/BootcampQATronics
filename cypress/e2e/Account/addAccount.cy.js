import { faker } from '@faker-js/faker'
import { gerarNomeConta } from '../support/utils/fakerUtils'



describe('Adicionar Conta', () => {
  it('Adicionar uma nova conta com sucesso', () => {
    //Acessa o site 
    cy.visit('https://seubarriga.wcaquino.me')
    cy.get('#email').type('test123@gmail.com')
    cy.get('#senha').type('test123')
    cy.get('button[type=submit]').click()

    //Confirma que a msg de Bem vindo está visível
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Bem vindo')
    
    cy.contains('Contas').click()
    cy.contains('Adicionar').click()

    const nomeConta = gerarNomeConta()
    cy.get('input#nome').type(nomeConta)
    cy.get('button[type=submit]').click()

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Conta adicionada com sucesso!')
  })
})