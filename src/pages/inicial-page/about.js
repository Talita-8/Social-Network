
export const Home = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <title>TPM</title>
      <br>
      <div id='logo-name' class='network-name'>
        <h1 class='tpm-name'>TPM</h1>
        <p class='subtitle-one'>Tudo é possível para Mulheres que compartilham ideais!</p>
         <br>
         
         <img class="women-img" src="./img/inicial-img.png" alt="women">

          <div id= "text-about class= "">
              <p id='about-text'> Além da Sobrevivência - Um Espaço Seguro para Mulheres
              “Sororidade é a ideia de solidariedade entre mulheres, que se apoiam para conquistar a 
              liberdade e a igualdade que desejam. É respeitar, ouvir e dar voz umas às outras sem julgamentos” <br><br>
              Esse espaço é destinado às mulheres que procuram um espaço seguro para compartilhar planos, sonhos, 
              desafios, oportunidades e encontrar apoio e fortalecimento.
              Há potência em mulheres construtoras de igualdade.
              </p>
          </div>
        </div> 
      `
 return rootElement;
};

