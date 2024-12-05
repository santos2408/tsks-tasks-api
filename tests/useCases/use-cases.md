# Caso de Uso: Cadastro e Gerenciamento de Tarefas

O objetivo é criar uma aplicação que permita aos usuários gerenciar suas tarefas diárias. Cada tarefa deverá ter uma descrição, um status de conclusão, e a data em que foi criada. O sistema precisa ser capaz de salvar, listar, atualizar e excluir tarefas, aplicando boas práticas de Clean Architecture e design patterns. A aplicação deve ter cobertura de testes com uso de mocks, stubs, e spies.

## Requisitos Funcionais

1. **Cadastrar Categoria**:

   [ ] - O usuário deve poder cadastrar uma nova categoria informando o nome da categoria.
   [ ] - O nome da categoria é obrigatório e não pode ser vazio.
   [ ] - Uma categoria cadastrada deve ser salva no banco de dados ou em um armazenamento simulado.

2. **Cadastrar Tarefa**:

   [ ] - O usuário deve poder cadastrar uma nova tarefa informando uma descrição e a categoria que a tarefa pertence.
   [ ] - Se a categoria informada não existir, ela deve ser criada junto com a tarefa
   [x] - A descrição da tarefa é obrigatória e não pode ser vazia.
   [x] - Uma tarefa cadastrada deve ser salva no banco de dados ou um armazenamento simulado.

3. **Listar Tarefas**:

   [x] O sistema deve ser capaz de listar todas as tarefas já cadastradas, exibindo suas descrições, status e data de criação.
   [ ] - O sistema deve ser capaz de gerar todas as categorias e suas respectivas tarefas

4. **Atualizar Status da Tarefa**:

   - O usuário deve poder marcar uma tarefa como "concluída" ou "pendente".
   - Ao atualizar o status de uma tarefa, o sistema deve garantir que apenas o status é modificado, mantendo a integridade dos demais dados.

5. **Excluir Tarefa**:
   - O usuário deve poder excluir uma tarefa específica pelo seu identificador.
   - O sistema deve confirmar se a tarefa existe antes de tentar excluí-la, para evitar erros.

## Requisitos Técnicos

1. **Arquitetura**:

   - **Clean Architecture**: Organize o código em camadas (Entities, Use Cases, Interface Adapters (Controllers), Frameworks & Drivers (Repositories)).
   - As camadas devem ser independentes entre si, com dependências injetadas.

2. **Testes**:
   - **Mocks e Stubs**: Use _mocks_ para simular o comportamento do repositório (`TaskRepository`) e _stubs_ para retornar tarefas durante os testes.
   - **Spies**: Verifique se métodos como `save`, `findById` e `delete` foram chamados quando esperado.
   - **Cobertura de Casos de Erro**: Inclua testes para erros, como tentar adicionar uma tarefa com descrição vazia ou tentar excluir uma tarefa inexistente.

<!-- 2. **Casos de Uso**:

   - **AddTask**: Cria uma nova tarefa com uma descrição e salva-a no repositório.
   - **GetTasks**: Retorna todas as tarefas cadastradas.
   - **UpdateTaskStatus**: Atualiza o status de uma tarefa específica.
   - **DeleteTask**: Exclui uma tarefa específica.

2. **Entidade `Task`**:

   - Crie uma entidade `Task` com os seguintes atributos:
     - `id`: Identificador único.
     - `description`: Texto da tarefa.
     - `status`: Pode ser "concluída" ou "pendente".
     - `createdAt`: Data e hora em que a tarefa foi criada.

3. **Repositório `TaskRepository`**:

   - Defina uma interface `TaskRepository` com os métodos:
     - `save(task)`: Salva uma nova tarefa.
     - `findById(id)`: Busca uma tarefa pelo seu ID.
     - `findAll()`: Retorna todas as tarefas cadastradas.
     - `delete(id)`: Exclui uma tarefa pelo seu ID. -->
