export const About = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = ` 
    <h1>Sobre</h1> 
       <p>
        Além da Sobrevivência - Um Espaço Seguro para Mulheres 
        “Sororidade é a ideia de solidariedade entre mulheres, 
        que se apoiam para conquistar a liberdade e a igualdade que desejam. 
        É respeitar, ouvir e dar voz umas às outras sem julgamentos”
        Esse espaço é destinado às mulheres que procuram um espaço seguro 
        para compartilhar planos, sonhos, desafios, oportunidades e encontrar
        apoio e fortalecimento. Há potência em mulheres construtoras de igualdade.
       </p>
     <button class="home-buttons login">Login</button>
     <button class="home-buttons subscribe">Inscreva-se</button>`;
};
