import { faker } from '@faker-js/faker'
import { gerarNomeConta } from '../support/utils/fakerUtils'


describe('Excluir Conta', () => {
  it('Excluir uma conta com sucesso', () => {

    cy.visit('https://seubarriga.wcaquino.me')
    cy.get('#email').type('test123@gmail.com')
    cy.get('#senha').type('test123')
    cy.get('button[type=submit]').click()

    // Criar uma conta para ser excluída
    cy.contains('Contas').click()
    cy.contains('Adicionar').click()

    const nomeConta = gerarNomeConta()
    cy.get('#nome').type(nomeConta)
    cy.get('button[type=submit]').click()

    cy.get('.alert-success').should('contain', 'Conta adicionada com sucesso!')

   
    cy.contains('Contas').click()
    cy.contains('Listar').click()


    cy.contains('td', nomeConta)
      .parent()
      .find('span.glyphicon-remove-circle')
      .click()


    
    cy.get('.alert-success').should('be.visible').and('contain', 'Conta removida com sucesso!')
  })
})