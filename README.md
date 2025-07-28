# 🧪 Projeto de Testes - Sistema Seu Barriga

Este projeto foi desenvolvido como entrega final do **Bootcamp de Quality Assurance - Ciclo 2025.2**, promovido pela **Escola Atlântico Avanti**.

## 📌 Sobre o sistema testado

O sistema [Seu Barriga](https://seubarriga.wcaquino.me/) é uma aplicação web voltada para prática de testes de software, inspirada no personagem do seriado **Chaves**, que cobrava aluguéis da vizinhança. O sistema simula um controle de finanças pessoais, com funcionalidades como:

- Cadastro de usuários
- Login
- Criação, edição e exclusão de contas
- Lançamento de receitas e despesas
- Visualização de resumo mensal
- Relatórios e mensagens de erro

---

## 🎯 Objetivo do Projeto

Realizar uma simulação completa de uma sprint de QA, incluindo:

- Planejamento de testes
- Escrita de cenários e casos de teste
- Execução manual dos testes
- Automação de cenários com Cypress
- Apresentação final (Demo Day) com métricas e relatório de falhas

---

## 📋 Plano de Teste

### Técnicas e tipos aplicados:

- **Caixa preta**
- **Funcional**
- **Exploratório**
- **Baseado na experiência**
- Testes positivos e negativos com foco na **UI**

### Ambiente de teste:

- Navegador: Google Chrome v138.0.7204.101
- Sistema: Windows 10+
- Ambiente: Produção

### Ferramentas utilizadas:

- Google Sheets (planilhas e gráficos)
- Ferramenta de captura de tela
- Cypress (automatização)
- GitHub

---

## ✅ Testes realizados

### Testes manuais

- **6 cenários escritos**
- **28 casos de teste executados**
- Relatórios com evidências e bugs abertos conforme padrão

### Testes automatizados

- **6 cenários automatizados**
- **14 casos de teste com Cypress**
- Scripts prontos e mantidos na pasta `/cypress/e2e`

Automatizamos somente os fluxos que eram viáveis dentro da proposta, o restante foi executado manualmente para representar um cenário real de projeto híbrido.

---

## 🐞 Bugs encontrados

### BUG001: Aceita valor negativo em movimentação (CT021)
- **Criticidade:** Alta
- **Descrição:** Sistema aceita valor negativo mesmo com campo de situação preenchido
- **Status:** Aberto

### BUG002: Resumo mensal exibe dados de meses errados (CT023)
- **Criticidade:** Alta
- **Descrição:** Exibe resumos de maio, junho e julho mesmo selecionando apenas “Maio”
- **Status:** Aberto

### BUG003: Resumo mensal exibe dados duplicados (CT025)
- **Criticidade:** Alta
- **Descrição:** Selecionando “Junho”, o sistema exibe também julho
- **Status:** Aberto

---

## 📈 Métricas

| Métrica                          | Valor |
|----------------------------------|-------|
| Casos de teste executados       | 28    |
| Casos com sucesso               | 25    |
| Casos com falha                 | 3     |
| Cenários com automação parcial  | 6     |
| Casos de teste automatizados    | 14    |

---

## 💡 Melhorias sugeridas

- Permitir inserção de valores com vírgula no campo “Valor”
- Implementar funcionalidade de **recuperação de senha**
- Disponibilizar opção de **exportação de dados**

---

## 📁 Estrutura do repositório

# 🧪 Projeto de Testes - Sistema Seu Barriga

Este projeto foi desenvolvido como entrega final do **Bootcamp de Quality Assurance - Ciclo 2025.2**, promovido pela **Escola Atlântico Avanti**.

## 📌 Sobre o sistema testado

O sistema [Seu Barriga](https://seubarriga.wcaquino.me/) é uma aplicação web voltada para prática de testes de software, inspirada no personagem do seriado **Chaves**, que cobrava aluguéis da vizinhança. O sistema simula um controle de finanças pessoais, com funcionalidades como:

- Cadastro de usuários
- Login
- Criação, edição e exclusão de contas
- Lançamento de receitas e despesas
- Visualização de resumo mensal
- Relatórios e mensagens de erro

---

## 🎯 Objetivo do Projeto

Realizar uma simulação completa de uma sprint de QA, incluindo:

- Planejamento de testes
- Escrita de cenários e casos de teste
- Execução manual dos testes
- Automação de cenários com Cypress
- Apresentação final (Demo Day) com métricas e relatório de falhas

---

## 📋 Plano de Teste

### Técnicas e tipos aplicados:

- **Caixa preta**
- **Funcional**
- **Exploratório**
- **Baseado na experiência**
- Testes positivos e negativos com foco na **UI**

### Ambiente de teste:

- Navegador: Google Chrome v138.0.7204.101
- Sistema: Windows 10+
- Ambiente: Produção

### Ferramentas utilizadas:

- Google Sheets (planilhas e gráficos)
- Ferramenta de captura de tela
- Cypress (automatização)
- GitHub

---

## ✅ Testes realizados

### Testes manuais

- **6 cenários escritos**
- **28 casos de teste executados**
- Relatórios com evidências e bugs abertos conforme padrão

### Testes automatizados

- **6 cenários automatizados**
- **14 casos de teste com Cypress**
- Scripts prontos e mantidos na pasta `/cypress/e2e`

Automatizamos somente os fluxos que eram viáveis dentro da proposta, o restante foi executado manualmente para representar um cenário real de projeto híbrido.

---

## 🐞 Bugs encontrados

### BUG001: Aceita valor negativo em movimentação (CT021)
- **Criticidade:** Alta
- **Descrição:** Sistema aceita valor negativo mesmo com campo de situação preenchido
- **Status:** Aberto

### BUG002: Resumo mensal exibe dados de meses errados (CT023)
- **Criticidade:** Alta
- **Descrição:** Exibe resumos de maio, junho e julho mesmo selecionando apenas “Maio”
- **Status:** Aberto

### BUG003: Resumo mensal exibe dados duplicados (CT025)
- **Criticidade:** Alta
- **Descrição:** Selecionando “Junho”, o sistema exibe também julho
- **Status:** Aberto

---

## 📈 Métricas

| Métrica                          | Valor |
|----------------------------------|-------|
| Casos de teste executados       | 28    |
| Casos com sucesso               | 25    |
| Casos com falha                 | 3     |
| Cenários com automação parcial  | 6     |
| Casos de teste automatizados    | 14    |

---

## 💡 Melhorias sugeridas

- Permitir inserção de valores com vírgula no campo “Valor”
- Implementar funcionalidade de **recuperação de senha**
- Disponibilizar opção de **exportação de dados**

---

## 📁 Estrutura do repositório

# 🧪 Projeto de Testes - Sistema Seu Barriga

Este projeto foi desenvolvido como entrega final do **Bootcamp de Quality Assurance - Ciclo 2025.2**, promovido pela **Escola Atlântico Avanti**.

## 📌 Sobre o sistema testado

O sistema [Seu Barriga](https://seubarriga.wcaquino.me/) é uma aplicação web voltada para prática de testes de software, inspirada no personagem do seriado **Chaves**, que cobrava aluguéis da vizinhança. O sistema simula um controle de finanças pessoais, com funcionalidades como:

- Cadastro de usuários
- Login
- Criação, edição e exclusão de contas
- Lançamento de receitas e despesas
- Visualização de resumo mensal
- Relatórios e mensagens de erro

---

## 🎯 Objetivo do Projeto

Realizar uma simulação completa de uma sprint de QA, incluindo:

- Planejamento de testes
- Escrita de cenários e casos de teste
- Execução manual dos testes
- Automação de cenários com Cypress
- Apresentação final (Demo Day) com métricas e relatório de falhas

---

## 📋 Plano de Teste

### Técnicas e tipos aplicados:

- **Caixa preta**
- **Funcional**
- **Exploratório**
- **Baseado na experiência**
- Testes positivos e negativos com foco na **UI**

### Ambiente de teste:

- Navegador: Google Chrome v138.0.7204.101
- Sistema: Windows 10+
- Ambiente: Produção

### Ferramentas utilizadas:

- Google Sheets (planilhas e gráficos)
- Ferramenta de captura de tela
- Cypress (automatização)
- GitHub

---

## ✅ Testes realizados

### Testes manuais

- **6 cenários escritos**
- **28 casos de teste executados**
- Relatórios com evidências e bugs abertos conforme padrão

### Testes automatizados

- **6 cenários automatizados**
- **14 casos de teste com Cypress**
- Scripts prontos e mantidos na pasta `/cypress/e2e`

Automatizamos somente os fluxos que eram viáveis dentro da proposta, o restante foi executado manualmente para representar um cenário real de projeto híbrido.

---

## 🐞 Bugs encontrados

### BUG001: Aceita valor negativo em movimentação (CT021)
- **Criticidade:** Alta
- **Descrição:** Sistema aceita valor negativo mesmo com campo de situação preenchido
- **Status:** Aberto

### BUG002: Resumo mensal exibe dados de meses errados (CT023)
- **Criticidade:** Alta
- **Descrição:** Exibe resumos de maio, junho e julho mesmo selecionando apenas “Maio”
- **Status:** Aberto

### BUG003: Resumo mensal exibe dados duplicados (CT025)
- **Criticidade:** Alta
- **Descrição:** Selecionando “Junho”, o sistema exibe também julho
- **Status:** Aberto

---

## 📈 Métricas

| Métrica                          | Valor |
|----------------------------------|-------|
| Casos de teste executados       | 28    |
| Casos com sucesso               | 25    |
| Casos com falha                 | 3     |
| Cenários com automação parcial  | 6     |
| Casos de teste automatizados    | 14    |

---

## 💡 Melhorias sugeridas

- Permitir inserção de valores com vírgula no campo “Valor”
- Implementar funcionalidade de **recuperação de senha**
- Disponibilizar opção de **exportação de dados**

---

## 📁 Estrutura do repositório

<pre>📁 testeSeuBarriga/
├── 📂 cypress/
├── 📂 node_modules/
├── 📂 ApresentacaoFinal/
├── 📄 Especificação - QATronics - Seu Barriga.pdf
├── 📄 Especificação de bugs - Seu Barriga.pdf
├── 📄 Plano de Teste - QATronics - Seu Barriga.pdf
├── 📄 Relatório de Testes - Squad 7 - QATronics - Seu Barriga.pdf
├── 📄 cypress.config.js
├── 📄 package-lock.json
├── 📄 package.json
</pre>
---

## 👩‍💻 Integrantes da equipe

- **Cristiano Caldas** 
- **Leandro Frota** 
- **Samuel Brito**  
- **Thamyres Delmindo** 

---

📅 Projeto apresentado no **Demo Day** em 26/07/2025.  
🎓 Desenvolvido no **Bootcamp Atlântico Avanti - QA Ciclo 2025.2**

---
