export const Home = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <title>TPM</title>
      <br>
      <div id='logo-name' class='network-name'>
        <h1 class='tpm-name'>TPM</h1>
      
        <p id='subtitle-one'>Tudo é possível para Mulheres que compartilham ideais!</p>
                                              <br>
          <img class="mae-carol" src="./img/mcarol.jpg" alt="Desenho de Mae Carol Jemison astronauta">      

          <div id= "text-about class= "">
          <span onclick="document.getElementById('text-about').style.display='aboutmode'" class=""></span>
            <button id='about'>SOBRE</button>
            <p id='about-text'> Além da Sobrevivência - Um Espaço Seguro para Mulheres
            “Sororidade é a ideia de solidariedade entre mulheres, que se apoiam para conquistar a liberdade e a igualdade que desejam. É respeitar, ouvir e dar voz umas às outras sem julgamentos” – Escola Educação
Esse espaço é destinado às mulheres que procuram um espaço seguro para compartilhar planos, sonhos, desafios, oportunidades e encontrar apoio e fortalecimento.
Há potência em mulheres construtoras de igualdade.
            </p>
          </div>
        </div> 
      `

return rootElement;
};

export const About = () => {
  document.getElementById('about').addEventListener('click',(e) => {
  e.preventDefault();
  document.getElementById('text-about').style.display = 'block';
})
}