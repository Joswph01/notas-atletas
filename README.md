# notas-atletas
Projeto de certificação 1 - lógica de programação em JavaScript 

Curso: DevStart Senai.
Tema: Pontuação dos atletas.

O projeto começa com a declaração da classe competição que recebe os seguintes métodos:
Um construtor com o parametro de atleta e da matriz vazia ordem. Após isso contém a primeira função OrdenaNotas que transforma a nota dos atletas em ordem crescente, utiliza o [...atleta.notas] para criar uma cópia e não alterar o parametro original.

Após isso vamos para o método calcularNota que recebe o parametro das notas ordenadas, então é declarada uma váriavel que pega o valor menos a primeira e ultima nota, e então é declarada a váriavel soma que recebe o valor da soma das 3 notas do atleta, após isso retornamos a soma dividia pelo número de notas.

E então vamos para o último método, que é o obterMedia, que começa com um forEach que itera pelo código em que declara a váriavel notasOrdenadas que recebe a ordem e a media que recebe a media, após isso apresentamos a resposta no console. 

assim para ser chamado sendo necessário só o objetos.obterMedia();