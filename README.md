### Projeto Final

## MiniGénio

## Instruções para executar a aplicação

O *MiniGénio* é uma aplicação Web desenvolvida em HTML, CSS e JavaScript.

Por se tratar de uma aplicação Web, não necessita de um processo de instalação tradicional. Depois de descompactar o projeto, a aplicação deverá ser executada através de um servidor local.

## 1. Descompactar o projeto

Descompactar o ficheiro fornecido para uma pasta no computador.

Depois de descompactado, deverá existir a pasta principal do projeto *MiniGénio*, contendo o ficheiro index.html e as restantes pastas e ficheiros necessários ao funcionamento da aplicação.

## 2. Abrir o projeto no Visual Studio Code

1. Abrir o *Visual Studio Code*.
2. Selecionar *File > Open Folder*.
3. Selecionar a pasta principal do projeto MiniGénio.
4. Confirmar que os ficheiros e pastas do projeto aparecem no Explorer do Visual Studio Code.

## 3. Verificar o Live Server

Para executar a aplicação pode ser utilizada a extensão *Live Server* do Visual Studio Code.

Caso o Live Server ainda não esteja instalado:

1. Abrir a área *Extensions* do Visual Studio Code.
2. Pesquisar por *Live Server*.
3. Selecionar *Live Server*.
4. Clicar em *Install*.

Se a extensão já estiver instalada, este passo pode ser ignorado.

## 4. Executar o MiniGénio

1. No Explorer do Visual Studio Code, localizar o ficheiro index.html existente na pasta principal do projeto.
2. Clicar em *Go Live*, na barra inferior do Visual Studio Code.

## 5. Alternativa

Em alternativa pode ser usado outro servidor local


## 6. Utilizar a aplicação

Quando a página principal do *MiniGénio* aparecer no navegador, a aplicação está pronta a utilizar.

A navegação para os jogos e restantes funcionalidades é realizada através da própria interface do MiniGénio.


### MiniGénio — Informações Gerais

Plataforma de jogos educativos para crianças pequenas, com um perfil de
criança partilhado entre os vários jogos.

## Jogos

- **Jogo dos Animais — Descobre o Som**: ouvir o som de um animal e
  escolher a imagem certa entre várias.
- **Jogo das Diferenças**: encontrar a diferença certa numa imagem.
- **Jogo da memória**: encontrar as duas cartas que têem a mesma imagem

Cada jogo é independente (a sua própria página), mas todos partilham o
mesmo perfil de utilizador e o mesmo sistema de recompensas.

## Estrutura geral

- Uma página inicial onde se escolhe ou cria o perfil da criança (nome e
  um "amigo"/avatar).
- Cada jogo é um modulo à parte, dentro da sua própria pasta.
- Uma pasta comum com módulos partilhados entre todos os jogos:
  - **Amigo do utilizador** — mostra o avatar escolhido no perfil.
  - **Dados** — guarda o histórico de partidas de cada criança.
  - **Brinquedos** — coleção de recompensas e o popup para as escolher.

## Como funciona, em linhas gerais

1. A criança escolhe (ou cria) o seu perfil na página inicial.
2. Entra num dos jogos, onde o avatar escolhido aparece automaticamente.
3. Ao terminar uma partida, o resultado fica guardado no histórico desse
   perfil.
4. Em certas condições (por exemplo, uma partida perfeita), a criança pode
   ganhar um brinquedo novo para a sua coleção.

Todos os dados (perfis, histórico, brinquedos) ficam guardados no
`localStorage` do navegador, sem necessidade de servidor.

## Estado atual

Projeto em desenvolvimento, com os jogos e os módulos comuns a serem
integrados progressivamente.