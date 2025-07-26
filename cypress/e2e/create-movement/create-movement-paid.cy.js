describe("Validar criação de movimentação", () => {
  it("Deve criar uma movimentação de receita com situação de pago", () => {
    cy.login(
      "leandro@email.com.br",
      "123456",
      "https://seubarriga.wcaquino.me/login"
    );
    cy.get("a[href='/movimentacao']").click();
    cy.get("select[name='tipo']").select("Receita");
    cy.get("input[name='data_transacao']").type("13/05/2025");
    cy.get("input[name='data_pagamento']").type("14/05/2025");
    cy.get("input[name='descricao']").type("Recebimento de aluguel");
    cy.get("input[name='interessado']").type("Barriga");
    cy.get("input[name='valor']").type("500");
    cy.get("select[name='conta']").select("Conta1");
    cy.get("input[id=status_pago]").check();
    cy.get("button[type='submit']").click();
  });
});