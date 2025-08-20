//Divbichos

const divbichos = document.getElementById("divbichos")
const descricaodivbichos = ["Cachorros", "Gatos", "Pássaros", "Peixes", "Roedores", "Répteis", "Outros Pets", "Casa e Jardim"]

function acrescentardivbichos() {
    divbichos.innerHTML = ''

    for (let i = 0; i < descricaodivbichos.length; i++) {
        divbichos.innerHTML += `
        <div class="flex flex-col text-center lg:hover:scale-105">
                    <a href="#"><img src="images/ilustracao/bicho${i + 1}.webp" alt="${descricaodivbichos[i]}" class="rounded-full w-26 min-w-23"></a>
                    <p class="text-black font-(family-name:--fonteprincipal) text-base pt-3">${descricaodivbichos[i]}</p>
        </div>
        `
    }
}

acrescentardivbichos()


//DivServiços

const divservicos = document.getElementById("divservicos")
const titulosservicos = ["Veterinário", "Banho e Tosa", "Adoção", "Adestramento"]
const descricaoservicos = ["Cuidamos do seu pet com os veterinários mais bem qualificados do país!", "Com os produtos mais sofisticados, melhoramos a aparência do seu pet!", "Ao invés de comprar, por que não adotar um novo pet?", "Com nossos adestradores, seu pet estará em boas mãos e aprenderá muito mais rápido a se comportar!"]
const vetoresservicos = ['<path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>', '<path d="M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"></path>', '<path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>', '<path d="M201.57,54.46a104,104,0,1,0,0,147.08A103.4,103.4,0,0,0,201.57,54.46ZM65.75,65.77a87.63,87.63,0,0,1,53.66-25.31A87.31,87.31,0,0,1,94,94.06a87.42,87.42,0,0,1-53.62,25.35A87.58,87.58,0,0,1,65.75,65.77ZM40.33,135.48a103.29,103.29,0,0,0,65-30.11,103.24,103.24,0,0,0,30.13-65,87.78,87.78,0,0,1,80.18,80.14,104,104,0,0,0-95.16,95.1,87.78,87.78,0,0,1-80.18-80.14Zm149.92,54.75a87.69,87.69,0,0,1-53.66,25.31,88,88,0,0,1,79-78.95A87.58,87.58,0,0,1,190.25,190.23Z"></path>']

function acrescentardivservicos() {
    divservicos.innerHTML = ''

    for (let i = 0; i < titulosservicos.length; i++) {
        divservicos.innerHTML += `
            <div class="card bg-base-100 w-96 shadow-lg shadow-(color:--cor1) border-(--cor1) border-1 border-solid max-sm:max-w-xs max-sm:m-auto">
                        <div class="card-body">
                        <div class="flex items-center gap-1 pt-3">
                            <h2 class="card-title font-(family-name:--fonteprincipal) font-[700]">${titulosservicos[i]}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#7BD3EA" viewBox="0 0 256 256">${vetoresservicos[i]}</svg>
                        </div>
                            <p class="font-base">${descricaoservicos[i]}</p>
                        </div>
                        <figure>
                            <img src="images/servicos/servico${i + 1}.webp"
                                alt="${titulosservicos[i]}"/>
                        </figure>
                    </div>
        `
    }
}

acrescentardivservicos()


//DivRecomendados

const divrecomendados = document.getElementById('divrecomendados')
const tituloprodutos = ["Ração Seca True para Cães Adultos Raças Médias e Grandes", "Ração Premier Pet Formula Frango Cães Adultos Raças Médias", "Ração Seca Quatree Life Salmão e Arroz Gatos Castrados", "Ração Nutrócia Canários", "Ração Megazoo Extrusada Ouriço Hedgehogs", "Alimento Alcon Garden Koi Colours para Carpas", "Ração Úmida GranPlus Sachê Gourmet Frango", "Ração Megazoo Critical Care para Carnívoros"]
const pesoprodutos = ["10,1kg", "20kg", "10,1kg", "5kg", "700g", "4kg", "85g", "200g"]
const precoprodutos = ["R$284,90", "R$305,90", "R$204,90", "R$315,90", "R$149,90", "R$429,90", "R$3,90", "R$63,90"]
const categoriaprodutos1 = ["Cachorros", "Cachorros", "Gatos", "Pássaros", "Roedores", "Peixes", "Gatos", "Répteis"]
const categoriaprodutos2 = ["Ração", "Ração", "Ração", "Ração", "Ração", "Ração", "Ração", "Ração"]

function acrescentarprodutos() {

    divrecomendados.innerHTML = ''

    for (let i = 0; i < tituloprodutos.length; i++) {
        divrecomendados.innerHTML += `
             <div class="card realtive bg-base-100 shadow-md items-center max-w-76 lg:hover:scale-101">
                        <figure class="pt-4 h-66 w-56">
                            <img src="images/produtos/produto${i + 1}.webp"
                                alt="${tituloprodutos[i]}"/>
                        </figure>
                        <div class="card-body">
                                <h2 class="card-title text-black font-(family-name:--fonteprincipal) text-md font-bold">
                                    ${tituloprodutos[i]}
                                </h2>
                                <div class="badge badge-soft badge-error font-semibold mb-5">${pesoprodutos[i]}</div>
                            <div class="card-actions justify-between items-center">
                                <span
                                    class="text-3xl text-start font-(family-name:--fontesecundaria) text-(--cor2)">${precoprodutos[i]}</span>
                                <div class="mb-10">
                                    <div class="badge badge-outline badge-warning text-xs">${categoriaprodutos1[i]}</div>
                                    <div class="badge badge-outline badge-warning text-xs">${categoriaprodutos2[i]}</div>
                                </div>
                                <div class="pb-2 flex absolute bottom-0">
                                <button role="button" class="btn bg-(--cor2) p-4 rounded-lg w-46 hover:bg-red-400" aria-label="Botão que adiciona produto ao Carrinho"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    }
}

acrescentarprodutos()


//DivProdutosExclusivos

const divprodutosexclusivos = document.getElementById('divprodutosexclusivos')
const tituloexclusivo = ["Ração Úmida True Mixer Carne, Batata Doce e Ervilha para Cães", "Ração Liva Super Premium para Cães Filhotes de Raças Médias", "Ração Seca Suprema Sabor Carne para Cães Adultos", "Kit Ração Nutrilus Pro+ Frango & Carne para Cães Adultos", "Biscoito Nutrilus para Cães Adultos Porte Médio e Grande", "Poytara Jabuti Saco"]
const pesoexclusivo = ["320g", "10,1kg", "20kg", "20kg", "1kg", "800g"]
const precoexclusivo = ["R$19,90", "R$169,90", "R$174,90", "R$215,90", "R$39,90", "R$120,90"]
const categoriaexclusivo1 = ["Cachorros", "Cachorros", "Cachorros", "Cachorros", "Cachorros", "Répteis"]
const categoriaexclusivo2 = ["Ração", "Ração", "Ração", "Ração", "Biscoito", "Ração"]

function acrescentarprodutosexclusivos() {

    divprodutosexclusivos.innerHTML = ''

    for (let i = 0; i < tituloexclusivo.length; i++) {
        divprodutosexclusivos.innerHTML += `
             <div class="card realtive bg-base-100 shadow-md items-center max-w-76 lg:hover:scale-101">
                        <figure class="pt-4 h-66 w-56">
                            <img src="images/exclusivos/exclusivo${i + 1}.webp"
                                alt="${tituloexclusivo[i]}"/>
                        </figure>
                        <div class="card-body">
                                <h2 class="card-title text-black font-(family-name:--fonteprincipal) text-md font-bold">
                                    ${tituloexclusivo[i]}
                                </h2>
                                <div class="badge badge-soft badge-error font-semibold mb-5">${pesoexclusivo[i]}</div>
                            <div class="card-actions justify-between items-center">
                                <span
                                    class="text-3xl text-start font-(family-name:--fontesecundaria) text-(--cor2)">${precoexclusivo[i]}</span>
                                <div class="mb-10">
                                    <div class="badge badge-outline badge-warning text-xs">${categoriaexclusivo1[i]}</div>
                                    <div class="badge badge-outline badge-warning text-xs">${categoriaexclusivo2[i]}</div>
                                </div>
                                <div class="pb-2 flex absolute bottom-0">
                                <button role="button" class="btn bg-(--cor2) p-4 rounded-lg w-46 hover:bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    }
}

acrescentarprodutosexclusivos()


//DivFAQ


const arrayfaq = [
    {
        id: 1,
        pergunta: "Posso agendar o banho e tosa online?",
        resposta: "Sim, você pode agendar pelo nosso site/aplicativo/WhatsApp. Consulte a disponibilidade e escolha o melhor horário para você e seu pet."
    },
    {
        id: 2,
        pergunta: "Meu pet tem alergias/pele sensível. O que devo informar?",
        resposta: "É fundamental nos informar sobre qualquer alergia, sensibilidade ou condição de saúde do seu pet antes do serviço. Assim, podemos usar produtos adequados e garantir um tratamento seguro."
    },
    {
        id: 3,
        pergunta: "Vocês realizam entregas de produtos?",
        resposta: "Sim, oferecemos serviço de entrega para compras. Consulte nossa política de frete para saber as áreas de cobertura, prazos e custos."
    },
    {
        id: 4,
        pergunta: "Vocês oferecem o serviço de “Taxi Dog” (busca e entrega)?",
        resposta: "Sim, oferecemos o serviço de busca e entrega (Taxi Dog) para maior comodidade. Consulte nossa equipe para verificar a área de cobertura e agendar o transporte do seu pet com segurança."
    },
    {
        id: 5,
        pergunta: "Qual o horário de funcionamento?",
        resposta: "Estamos abertos todos os dias 24h por dia."
    }
]

