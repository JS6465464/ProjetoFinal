# MiniGénio

O **MiniGénio** é uma aplicação web educativa direcionada para crianças dos **3 aos 7 anos**, que reúne diferentes jogos e atividades num único ambiente.

A aplicação procura combinar **diversão e aprendizagem**, trabalhando competências como memória, atenção, concentração, associação e raciocínio lógico.

---

## Requisitos

Para executar o MiniGénio são necessários:

* Um navegador web atualizado, como **Google Chrome**, **Microsoft Edge** ou **Mozilla Firefox**.
* Um **servidor web local** para disponibilizar os ficheiros da aplicação.
* Os ficheiros completos do projeto.

Não é necessário instalar uma base de dados ou um servidor backend.

---

# Configuração

### 1. Obter o projeto através do Git

O projeto está disponível num repositório Git. Para obter uma cópia local, abra um terminal e execute:

git clone <URL_DO_REPOSITORIO>

Depois de concluído o processo, entre na pasta criada:

cd REPOSITORIO

### 2. Garantir que todos os ficheiros estão disponíveis

A aplicação utiliza diferentes pastas para os jogos, módulos comuns e recursos multimédia. Por isso, é importante obter o repositório completo e manter a estrutura original das pastas.

A estrutura deve ser mantida para que os caminhos utilizados pelos ficheiros HTML, CSS e JavaScript continuem a funcionar corretamente.

### 3. Disponibilizar a aplicação através de um servidor

Inicie um servidor web local na pasta principal do projeto.

Pode ser utilizado qualquer método que disponibilize os ficheiros através de `http://localhost/...`.

Por exemplo, pode utilizar uma extensão como **Live Server**, caso esteja a utilizar o Visual Studio Code, mas esta é apenas uma das formas possíveis de executar um servidor local.

### 3. Abrir a aplicação

Depois de iniciar o servidor, abra no navegador o endereço disponibilizado pelo servidor.

Normalmente será semelhante a:

```text
http://localhost:5500/
```

O endereço e a porta podem variar consoante o servidor utilizado.

A página inicial do MiniGénio deverá ser apresentada e a aplicação estará pronta a ser utilizada.

---

# Usage / Guia de utilização

O MiniGénio é uma aplicação web educativa composta por uma **homepage, três jogos educativos e vários módulos comuns**. A partir da homepage é possível gerir os utilizadores, aceder aos jogos, consultar o histórico e utilizar o sistema de brinquedos e recompensas.

## 1. Iniciar a aplicação

Ao abrir o MiniGénio é apresentada a **homepage**, que funciona como ponto central da aplicação.

A partir desta página é possível:

* Selecionar ou criar um utilizador;
* Escolher um amigo;
* Aceder aos diferentes jogos;
* Consultar o histórico;
* Aceder à coleção de brinquedos;
* Utilizar o mini-jogo dos balões;
* Apagar um utilizador;
* Fazer reset aos dados de um utilizador.

---

## 2. Gestão de utilizadores

### Criar um utilizador

No primeiro acesso, a aplicação cria automaticamente um utilizador inicial caso ainda não exista nenhum registo.

É possível criar outros utilizadores através da área de gestão de utilizadores.

Os utilizadores são identificados pelo **nome e pelo avatar escolhido**, mantendo o processo simples e adequado ao público infantil.

A aplicação permite ter até **quatro utilizadores**.

### Selecionar um utilizador

Quando existem vários utilizadores, é possível selecionar o perfil pretendido.

Ao mudar de utilizador, os dados associados ao perfil selecionado são carregados, incluindo:

* Progresso nos jogos;
* Resultados;
* Histórico;
* Brinquedos adquiridos;
* Amigo escolhido;
* Progresso associado às recompensas.

Desta forma, cada utilizador mantém os seus próprios dados.

### Apagar um utilizador

Quando existem vários utilizadores, é possível eliminar um dos registos através da área de gestão de utilizadores.

Quando existe apenas **um utilizador**, o respetivo registo não pode ser eliminado. Esta limitação garante que a aplicação mantém sempre um utilizador disponível.

### Fazer reset a um utilizador

É possível fazer reset aos dados de um utilizador.

Esta operação repõe o respetivo perfil para o estado inicial, eliminando o progresso, histórico, brinquedos adquiridos e restantes dados associados ao perfil.

---

## 3. Escolher um amigo

O utilizador pode escolher um amigo para o acompanhar durante a utilização da aplicação.

O amigo faz parte da experiência visual e está também relacionado com o sistema de brinquedos e recompensas.

A escolha de um amigo **não é obrigatória para jogar**.

Um utilizador que ainda não tenha escolhido um amigo pode continuar a utilizar todos os jogos e consultar o seu histórico, mas **não pode receber brinquedos como recompensa**.

---

## 4. Jogos educativos

O MiniGénio disponibiliza três jogos principais:

| Jogo                    | Principal objetivo                              |
| ----------------------- | ----------------------------------------------- |
| Jogo das Diferenças     | Desenvolver atenção e capacidade de observação  |
| Jogo da Memória         | Desenvolver memória e concentração              |
| Jogo dos Sons / Animais | Desenvolver associação e reconhecimento de sons |

Cada jogo possui regras e mecânicas próprias, mas está integrado com os módulos comuns da aplicação.

### Jogo das Diferenças

O **Jogo das Diferenças** apresenta duas imagens semelhantes, nas quais existem diferenças que devem ser identificadas.

O jogador deve selecionar as zonas onde encontra diferenças.

O jogo inclui:

* Diferentes rondas;
* Identificação das diferenças;
* Contagem de acertos;
* Progressão entre rondas;
* Feedback visual;
* Sons associados às ações;
* Apresentação da solução correta.

Os resultados são registados no histórico do utilizador.

### Jogo da Memória

No **Jogo da Memória**, o objetivo é encontrar os pares de cartas correspondentes.

Existem dois níveis de dificuldade:

* **Fácil** — 12 cartas;
* **Difícil** — 20 cartas.

O jogador deve memorizar a posição das cartas e encontrar os respetivos pares.

O jogo acompanha o número de tentativas realizadas e apresenta o resultado no final.

Dependendo do desempenho, podem também ser atribuídas recompensas.

### Jogo dos Sons / Animais

O **Jogo dos Sons / Animais** apresenta diferentes animais e utiliza sons como elemento principal da atividade.

O jogador deve associar o som apresentado ao animal correspondente.

A atividade permite trabalhar a capacidade de:

* Reconhecer sons;
* Associar sons a imagens;
* Identificar animais;
* Manter a atenção;
* Responder corretamente às rondas apresentadas.

O jogo possui diferentes níveis e está integrado com o sistema comum de resultados e recompensas.

---

## 5. Histórico

Os resultados dos jogos podem ser guardados no histórico do utilizador.

O histórico permite consultar informações relativas às atividades realizadas, incluindo:

* Jogo realizado;
* Número de acertos;
* Número de jogadas ou tentativas;
* Data da realização.

O histórico é associado ao utilizador atualmente selecionado, pelo que cada utilizador possui o seu próprio histórico.

---

## 6. Brinquedos e recompensas

O MiniGénio possui um sistema de **brinquedos e recompensas** que permite ao utilizador adquirir brinquedos virtuais através de determinadas atividades.

As recompensas dependem das regras definidas para cada jogo e do estado atual do utilizador.

Para poder receber brinquedos, o utilizador necessita de ter escolhido um amigo.

A coleção de brinquedos pode ser consultada a partir da **homepage e dos jogos**.

Os brinquedos adquiridos ficam associados ao respetivo utilizador e permanecem guardados enquanto os dados locais da aplicação forem mantidos.

---

## 7. Mini-jogo dos balões

Na homepage existe também um pequeno **mini-jogo dos balões**.

Os balões podem ser rebentados independentemente de o utilizador ter escolhido um amigo.

Quando o utilizador ainda não possui um amigo, esta atividade não atribui recompensas.

Depois de escolher um amigo, o progresso dos balões pode contribuir para a obtenção de uma oportunidade de recompensa, de acordo com as regras definidas pela aplicação.

---

## 8. Dados e persistência

Os dados utilizados pela aplicação são guardados localmente no navegador através do **LocalStorage**.

Entre os dados armazenados encontram-se:

* Utilizadores;
* Avatar e amigo selecionados;
* Progresso dos jogos;
* Resultados;
* Histórico;
* Brinquedos adquiridos;
* Estado de determinadas atividades.

Desta forma, os diferentes jogos e módulos comuns conseguem partilhar os dados do utilizador atualmente ativo.

A aplicação não necessita de uma conta, servidor backend ou base de dados para guardar estes dados.

> **Nota:** os dados ficam associados ao armazenamento local do navegador. Se os dados do navegador forem eliminados ou a aplicação for utilizada noutro dispositivo, os dados guardados localmente não são recuperados automaticamente.


# Notas

### Persistência e limitações

O MiniGénio não utiliza contas, palavras-passe, uma API ou uma base de dados.

Esta decisão teve como objetivo manter a experiência simples para crianças pequenas e evitar a necessidade de introduzir dados pessoais ou processos de autenticação.

Como consequência, os dados ficam associados ao armazenamento local do navegador. Se os dados do navegador forem eliminados ou a aplicação for utilizada noutro dispositivo, os dados guardados localmente não são recuperados automaticamente.

Uma possível evolução futura seria disponibilizar mecanismos de **exportação e importação dos dados**, permitindo criar uma cópia de segurança sem alterar a simplicidade da utilização da aplicação pelas crianças.

---

### Tecnologias

O projeto utiliza principalmente:

* **HTML** — estrutura das páginas;
* **CSS** — apresentação e adaptação das interfaces;
* **JavaScript** — lógica, interatividade e gestão dos dados;
* **LocalStorage** — persistência local dos dados;

Não é necessário um backend ou uma base de dados para executar a aplicação.

---

### Nota Final

Para garantir o funcionamento correto da aplicação, recomenda-se sempre executá-la através de um **servidor web local** e não abrindo diretamente o `index.html`.

A aplicação foi desenvolvida para funcionar localmente e os dados permanecem armazenados no navegador utilizado.
