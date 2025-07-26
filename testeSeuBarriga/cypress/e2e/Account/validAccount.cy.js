describe('Adicionar Conta Válida', () => {
  it('Deve adicionar uma conta com sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/')
    cy.get('#email').type('silvania@gmail.com')
    cy.get('#senha').type('123456')
    cy.get('.btn').click()
    cy.contains('Bem vindo, Silvania!').should('exist')
    cy.contains('Contas').click()
    cy.contains('Adicionar').click()
    cy.get('#nome').type('Teste Automação')
    cy.get('.btn').click()
    cy.contains('Conta adicionada com sucesso!').should('exist')
  })
})