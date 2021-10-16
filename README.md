# Projeto gerador de frases
O presente projeto é uma versão do repositório de Celso Henrique. Repositório original: <a href="https://github.com/celso-henrique/naruto-quotes-client">naruto-quotes-client</a>

1. Os commits anteriores foram para formar a estrutura básica da aplicação.
2. O commit atual foram escritos dois testes: o primeiro foi para verificação da existência de um botão, uma imagem e uma frase no arquivo App, o segundo teste foi para verificar se os elementos de botão, frase e um discurso para o arquivo Quote.
3. Adicionando tipagem no arquivo Quotes, estilizações para a div Wrapper, na tag p e na speaker. E uma imagem de fundo na tela inicial do projeto.
4. Criação de um botão estilizado para exibição na tela principal. Adicionado o teste para verificar se o botão exibido na tela e se está chamando uma função e também foi feita a tipagem para aceitar somente funções na propriedade onUpdate no arquivo Quotes.
5. Criação de um teste da ligação entre a aplicação e a API que fornece as frases para exibir na tela. E tambem foi criado um arquivo .env para a variável de ambiente REACT_APP_API
6. Feita a integração com a API onde estão as frases que são exibidas na tela assim como o teste para integração da mesma. Usamos também componente que mudam de estado com a função onUpdate no App. Repositório de onde encontrá-la <a href="https://github.com/celso-henrique/naruto-quotes-server">naruto-quotes-server</a>. É necessário ter python para executá-la.