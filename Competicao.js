class Competicao {
    constructor(atletas){
      this.atletas = atletas;
      this.ordem = []
    }
    ordenaNotas(){
      this.ordem = this.atletas.map(atleta => {
        return [...atleta.notas].sort((a, b) => a - b);
      })
    }
    calcularMedias(notasOrdenadas){
        let notasValidas = notasOrdenadas.slice(1,4);
        let soma = notasValidas.reduce((acc, nota) => acc + Number(nota), 0);
        return soma /notasValidas.length;
  
    }
  
    obterMedia(){
      this.ordenaNotas();
        this.atletas.forEach((atleta, i)=>{
          let notasOrdenadas = this.ordem[i];
          let media = this.calcularMedias(notasOrdenadas);
  
          console.log(`Atleta: ${atleta.nome}`);
          console.log(`Notas obtidas: ${atleta.notas.join(", ")}`)
          console.log(`Medias obtidas: ${media}`)
        })
    }
    
    }
  
  
  
  let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
  ];
  
  let competicao = new Competicao(atletas);
  
  competicao.obterMedia();
  