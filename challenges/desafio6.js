// Desafio 6
// Vamos explorar mais operadores aritméticos!
//
// Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o
// maior valor, menor valor, média e o desvio padrão das avaliações (campo imdb.rating).
// Para a média e o desvio padrão arredonde os valores para uma casa decimal utilizando o $round.
//
// Dica: todos os filmes na coleção, que já ganharam um Oscar, começam com uma
// sequência de string parecida com essas abaixo,
// portanto $regex é um operador bem-vindo:
// Won 10 Oscars
// Won 1 Oscar
// Utilizem o $stdDevSamp para calcular o desvio padrão.
//
// O resultado da sua query deve ter o seguinte formato:
// {
//   "maior_rating" : <maior_rating>,
//   "menor_rating" : <menor_rating>,
//   "media_rating" : <media_rating>,
//   "desvio_padrao" : <desvio_padrao>
// }
