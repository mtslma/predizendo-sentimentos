# 🔮 Predizendo sentimentos

---
### 📝 1. Introdução

Repositório dedicado ao projeto de **AI & Chabot** do curso de **Análise e Desenvolvimento de Sistemas** da **FIAP**.

Esse projeto visa desenvolver um modelo de linguagem capaz de analisar os sentimentos expressos nos feedbacks dos usuários das linhas 8 e 9 do Grupo CCR, bem como da plataforma Autorail Monitor. O Autorail Monitor foi desenvolvido para o Challenge da FIAP em parceria com a CCR e é uma ferramenta que permite aos passageiros acompanharem em tempo real alertas e o funcionamento de linhas e estações. O objetivo principal é criar um sistema capaz de classificar automaticamente o sentimento em cada feedback (positivo ou negativo), fornecendo insights valiosos para aprimorar continuamente os serviços.

### 🛠 2. Ferramentas e Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram empregadas no desenvolvimento deste projeto:

* **Python:** Manipulação de dados e implementação de modelos de machine learning.
* **Pandas:** Análise e manipulação de dataframes;
* **Scikit-learn (sklearn):** Divisão de dados, vetorização de texto e implementação dos modelos de classificação.
* **Pickle:** Módulo Python para serializar objetos, utilizado para salvar o modelo treinado que obteve melhor classificação.

---

### ⚙ Configuração Local do Projeto

**Para iniciar o projeto localmente, siga estes passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/mtslma/predizendo-sentimentos.git
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd predizendo-sentimentos
    ```

3.  **Verifique a instalação do Python:**
    ```bash
    python --version
    ```

4.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Navegue até o diretório `backend`:** `backend`
    ```bash
    cd backend
    ```

6.  **Abra o Jupyter Notebook `train_model.ipynb`, selecione como kernel o mesmo Python que instalou os requisitos e execute todas as células de código**

7.  **Inicie a API Flask:**

    **Windows:**
    ```bash
    .\run_server.bat
    ```

    **Unix (Linux/macOS):**
    ```bash
    ./run_server.sh
    ```

8.  **Utilizando o programa:**
    Abra o arquivo `index.html` localizado na raiz do projeto no seu navegador.

**Pronto\! Agora você pode fornecer feedbacks e obter as predições de sentimentos. 😁**

---

### 📃 Detalhes do modelo

Os resultados da avaliação dos diferentes modelos foram apresentados durante a execução do script `train_model.ipynb`, indicando a acurácia e outras métricas de classificação para cada um. O modelo com a maior acurácia no conjunto de teste foi identificado como o melhor para esta tarefa específica e salvo.

---

### ✏ Possíveis melhorias

O dataset atual, focado na polaridade do sentimento (positivo ou negativo), oferece uma base sólida para a classificação geral das opiniões dos usuários. No entanto, para obter insights ainda mais profundos e acionáveis, aprimorar o dataset com informações mais granulares sobre os aspectos específicos mencionados nos feedbacks pode ser extremamente valioso e seria um bom início para aprimorar o modelo como um todo.
