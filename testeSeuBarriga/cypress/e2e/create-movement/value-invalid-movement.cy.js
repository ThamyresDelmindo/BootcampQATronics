describe("Validar campo 'Valor' aceita apenas números", () => {
  beforeEach(() => {
    cy.login(
      "thamyres.delmindo22@gmail.com",
      "123456",
      "https://seubarriga.wcaquino.me/login"
    );
  });

  it("Deve impedir criar movimentação com letras no campo Valor", () => {
    cy.get("a[href='/movimentacao']").click();
    cy.get("select[name='tipo']").select("Despesa");
    cy.get("input[name='data_transacao']").type("16/06/2025");
    cy.get("input[name='data_pagamento']").type("17/07/2025");
    cy.get("input[name='descricao']").type("Pagamento aluguel");
    cy.get("input[name='interessado']").type("Florinda");

    // Digitar valor inválido (com letras)
    cy.get("input[name='valor']").type("abc500");
    cy.get("select[name='conta']").select("Conta2");
    cy.get("input[id=status_pendente]").check();
    cy.get("button[type='submit']").click();

    // Verificar mensagem de erro relacionada ao valor
    cy.contains("Valor deve ser um número").should("be.visible");
  });
});