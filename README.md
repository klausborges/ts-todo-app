# Todo App

Essa aplicação de lista de tarefas foi inicialmente desenvolvido como um teste para entrevista da TagoIO. É inteiramente desenvolvida em TypeScript, fazendo uso de algumas bibliotecas extras como [Styled Components](https://styled-components.com/), [polished](https://polished.js.org/), [date-fns](https://date-fns.org/), e [uuid](https://www.npmjs.com/package/uuid).

## Decisões de Design

- Primeiramente, a aplicação foi construída com apenas uma página, mas ao fim do desenvolvimento fez mais sentido tornar a lista em um componente para simplificar mais o código;
  
- Apesar de que há uma certa repetição porque o componente `TodoList` podia ser usado duas vezes, não fazia sentido separar as duas listas parciais de tarefas concluídas e não concluídas;

- Pelo motivo acima, também foram criados dois styled components para `FinishedTodos` e `UnfinishedTodos`, já que mesmo sendo as duas partes da `TodoList`, ambas podem ter estilização diferente caso desejado;
  
- Além disso, o próprio `Item` da `TodoList` podia ser um sub-componente, mas também parecia desnecessário passar mais uma vez o estado e as funções de toggle e remoção já que o estado foi mantido na página `Todo`;
  
- A própria página `Todo` pode ser vista como desnecessária, já que a aplicação consiste apenas nessa página, mas dessa forma o código parece mais organizado;
  
- A aplicação não foi desenvolvida mobile first e responsividade não foi aplicada profundamente logo de cara, dado o escopo de uma primeira versão;
  
- A estilização deixa a desejar na estética e em acessibilidade, mas também pareceu fora do escopo para uma primeira versão;

## Funcionalidades Extras

Ao longo do desenvolvimento, algumas funcionalidades extras foram sendo adicionadas além do que seria uma lista de tarefas básica, de modo melhorar a experiência do usuário. São elas:

- Botão para colapso da seção de tarefas concluídas;
  
- Badge com contador de tarefas concluídas/totais em cada seção;
  
- Visão diferente na seção de tarefas não concluídas caso todas tenham sido concluídas;
  
- Tarefas não concluídas mostram o tempo que se passou desde que foram adicionadas, e tarefas já concluídas mostram o tempo que se passou desde que foram criadas até quando foram marcadas como concluídas;
  
- Timer para atualizar o estado e mostrar o tempo correto das tarefas não concluídas (o das tarefas já concluídas é uma duração fixa);

## To Do List da Aplicação de To Do List

- [ ] Tornar a aplicação realmente responsiva;
- [ ] Adicionar seletor de tema para _dark mode_;
- [ ] Melhorias estéticas;
  - [ ] Melhor estilização e cores da aplicação no geral;
  - [ ] Estilizar a checkbox;
  - [ ] Estilizar a barra de rolagem do overflow, ou removê-la totalmente;
    - [ ] Independente da barra de rolagem, ela deixa as duas listas com larguras diferentes caso apareça em apenas uma delas;
- [ ] Testar `react-spring` para animar o colapso da seção de tarefas e também a adição e remoção de tarefas;
- [ ] As variáveis memoizadas `finishedTodos` e `unfinishedTodos` já poderiam contar com os tempos formatados pra evitar o excesso de código no meio do TSX;

## Licença

Todo App é software livre de acordo com a [licença MIT](https://github.com/spaceporn/todo-app/blob/master/LICENSE).
