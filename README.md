### Projeto Final

# MiniGénio — Jogos Educativos

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