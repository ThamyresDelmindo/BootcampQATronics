describe('Adicionar Conta com Nome Duplicado', () => {
  it('Deve exibir mensagem de erro ao tentar adicionar conta com nome duplicado', () => {
    cy.visit('https://seubarriga.wcaquino.me/')
    cy.get('#email').type('silvania@gmail.com')
    cy.get('#senha').type('123456')
    cy.get('.btn').click()
    cy.contains('Bem vindo, Silvania!').should('exist')
    cy.contains('Contas').click()
    cy.contains('Adicionar').click()
    cy.get('#nome').type('Teste Automação')
    cy.get('.btn').click()
    cy.contains('Já existe uma conta com esse nome!').should('exist')
  })
})