describe("Validar criação de movimentação com Data de Movimentação em branco", () => {
  beforeEach(() => {
    cy.login(
      "thamyres.delmindo22@gmail.com",
      "123456",
      "https://seubarriga.wcaquino.me/login"
    );
  });

  it("Deve impedir a criação de movimentação com data de transação em branco", () => {
    cy.get("a[href='/movimentacao']").click();
    cy.get("select[name='tipo']").select("Despesa");

    // NÃO preencher data de transação
    cy.get("input[name='data_pagamento']").type("17/07/2025");
    cy.get("input[name='descricao']").type("Pagamento aluguel");
    cy.get("input[name='interessado']").type("Florinda");
    cy.get("input[name='valor']").type("500");
    cy.get("select[name='conta']").select("Conta2");
    cy.get("input[id=status_pendente]").check();
    cy.get("button[type='submit']").click();

    // Verificar se aparece mensagem de erro
    cy.contains("Data da Movimentação é obrigatório").should("be.visible");
  });
});