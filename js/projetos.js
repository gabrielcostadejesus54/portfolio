let localProjetos = document.querySelector('.wraper-projeto')
let projetos = [
    {
        nome: 'Agencia Bold',
        img: 'agenciaBold.png',
        site: 'https://gabrielcostadejesus54.github.io/Agencia-Bold/'
    },
    {
        nome: 'Danki code',
        img: 'dankiCode.png',
        site: 'https://gabrielcostadejesus54.github.io/danki-code/'
    },
    {
        nome: 'Cena',
        img: 'cena.png',
        site: 'https://gabrielcostadejesus54.github.io/landing_page_cena/'
    },
    {
        nome: 'Tec Code',
        img: 'tecCode.png',
        site: 'https://gabrielcostadejesus54.github.io/tec_code/'
    },
    {
        nome: 'Trilha de CSS da DIO',
        img: 'css-developer.png',
        site: 'https://gabrielcostadejesus54.github.io/trilha-css-desafio-01/'
    },
    {
        nome: 'Agência de Viagens',
        img: 'agenciaViagens.PNG',
        site: 'https://gabrielcostadejesus54.github.io/agencia_de_viagens/'
    },
    {
        nome: 'AluCar',
        img: 'Alucar.PNG',
        site: 'https://gabrielcostadejesus54.github.io/AluCar/'
    },
    {
        nome: 'CM Life',
        img: 'cm_life.PNG',
        site: 'https://gabrielcostadejesus54.github.io/CM-Life/'
    },
    {
        nome: 'LinkBio Neymar',
        img: 'bio_neymar.PNG',
        site: 'https://gabrielcostadejesus54.github.io/LinkBio_NeymarJr/'
    },
    {
        nome: 'Visite Paraty',
        img: 'paraty.PNG',
        site: 'https://gabrielcostadejesus54.github.io/visite-paraty/'
    },
    {
        nome: 'Pet Boutique',
        img: 'pet_boutique.PNG',
        site: 'https://gabrielcostadejesus54.github.io/Pet-Boutique/'
    }

    
]


for(let i = 0; i < projetos.length; i++){
    localProjetos.innerHTML += `
    <div class="single-projeto">
        <a target="_blank" href="${projetos[i].site}">
            <div class="img-projeto" style="background-image: url('img/projetos/${projetos[i].img}');"></div>
        </a>
        <p class="nome-projeto">${projetos[i].nome}</p>
    </div> 
    `
}   
