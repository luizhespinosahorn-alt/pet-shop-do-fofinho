
const WA='https://wa.me/5567991028282';
const whatsappMessages = {
 inicio:'Olá! Vim pelo site do Pet Shop do Fofinho e gostaria de saber mais sobre os serviços para o meu pet.',
 veterinario:'Olá! Gostaria de saber como agendar uma consulta veterinária para o meu pet.',
 'banho-tosa':'Olá! Gostaria de consultar horários para agendar banho e tosa para o meu pet.',
 loja:'Olá! Estou vendo o catálogo e gostaria de tirar uma dúvida sobre os produtos da loja.',
 contato:'Olá! Encontrei o contato pelo site e gostaria de tirar uma dúvida com a equipe.'
};
function whatsappUrl(message){
 return WA + '?text=' + encodeURIComponent(message);
}

const IMG={vet:'assets/images/dra-luara-vet.webp',portrait:'assets/images/dra-luara-portrait.webp',pet:'assets/images/dra-luara-pet.webp',dalmata:'assets/images/dra-luara-dalmata.webp'};
const photos={
 hero:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1300&q=85',
 vet:'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=85',
 grooming:'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85',
 store:'https://images.unsplash.com/photo-1589924691995-400dc9old?auto=format&fit=crop&w=1200&q=85',
 about:'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1100&q=85'
};

const GOOGLE_PLACE_ID='ChIJQxap6afnhpQR85OCJ4GMkGU';
const GOOGLE_PROFILE='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Pet Shop Do Fofinho, Rua Padre Valentim 350, Campo Grande MS')+'&query_place_id='+GOOGLE_PLACE_ID;
const GOOGLE_WRITE='https://search.google.com/local/writereview?placeid='+GOOGLE_PLACE_ID;
// Draft only: aggregate obtained 26/11/2026 from public business listing. No individual review author or star rating verified.
const reviewThemes=[
 {service:'veterinario',label:'Atendimento veterinário',title:'Atenção nas consultas',text:'Tutores destacam a explicação dos diagnósticos e das orientações de cuidado.'},
 {service:'veterinario',label:'Atendimento veterinário',title:'Confiança na Dra. Luara',text:'Os relatos mencionam dedicação e carinho no atendimento aos animais.'},
 {service:'banho-tosa',label:'Banho e tosa',title:'Respeito ao jeito de cada pet',text:'Há menções à atenção durante o banho e ao respeito pelo bem-estar dos animais.'},
 {service:'geral',label:'Experiência na loja',title:'Um ambiente acolhedor',text:'O acolhimento e a atenção da equipe aparecem entre os elogios.'},
 {service:'geral',label:'Experiência na loja',title:'Preço justo',text:'Clientes comentam sobre valores acessíveis e uma boa relação entre atendimento e preço.'},
 {service:'veterinario',label:'Atendimento veterinário',title:'Agilidade no cuidado',text:'Há relatos de rapidez no atendimento e no encaminhamento de exames quando necessários.'}
];
function reviewsSection(page){
 const items=page==='inicio'?reviewThemes:reviewThemes.filter(r=>r.service===page);
 const heading=page==='inicio'?'O carinho que oferecemos, na voz de quem confia em nós.':page==='veterinario'?'Confiança em cada cuidado.':'Carinho em cada banho.';
 return `<section class="section reviews-section" aria-labelledby="reviews-title"><div class="wrap"><div class="reviews-heading"><div class="section-head"><span class="kicker">Quem conhece, confia.</span><h2 id="reviews-title">${heading}</h2><p>Conheça as experiências de quem já faz parte da nossa família.</p></div><div class="review-rating"><strong>5,0</strong><div><div class="stars" aria-label="Nota 5 de 5">★★★★★</div><span class="review-google">Avaliações no Google</span><small>35 avaliações · consulta em 26/11/2026</small></div></div></div><div class="review-grid">${items.map(r=>`<article class="review-card"><span class="kicker">${r.label}</span><h3>${r.title}</h3><p>${r.text}</p><span class="review-source">Tema de avaliações públicas · não é citação literal</span></article>`).join('')}</div><p class="review-draft-note">Prévia: os cartões acima resumem temas encontrados em avaliações públicas. Os comentários originais, nomes e notas individuais serão inseridos após conferência e autorização de uso.</p><div class="actions"><a class="btn" href="${GOOGLE_PROFILE}" target="_blank" rel="noopener noreferrer">Ver todas as avaliações no Google ↗</a><a class="btn outline" href="${GOOGLE_WRITE}" target="_blank" rel="noopener noreferrer">Deixe sua avaliação ↗</a></div></div></section>`;
}

function home(){return `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><span class="kicker">Pet shop · Campo Grande, MS</span><h1>Cuidado de verdade,<br>com carinho de sobra.</h1><p>Seu pet faz parte da família. Aqui, cada visita é uma oportunidade de cuidar, acolher e deixar o dia dele um pouquinho melhor.</p><div class="actions"><a class="btn" href="${whatsappUrl(whatsappMessages.inicio)}" target="_blank" rel="noopener noreferrer">Converse com a nossa equipe ↗</a><a class="btn outline" href="#servicos">Conheça nossos serviços</a></div></div><div class="hero-image"><img src="${IMG.vet}" alt="Dra. Luara cuidando de um cachorro" fetchpriority="high"><div class="image-note"><b>Todo pet merece cuidado de perto.</b><span>Com atenção, respeito e carinho.</span></div></div></div></section><div class="intro"><div class="wrap intro-inner"><div class="intro-item"><span>♡</span> Atendimento próximo e atencioso</div><div class="intro-item"><span>✿</span> Respeito ao jeitinho de cada pet</div><div class="intro-item"><span>⌖</span> São Francisco · Campo Grande</div></div></div><section class="section" id="servicos"><div class="wrap"><div class="section-head"><span class="kicker">Como podemos ajudar?</span><h2>Um cuidado especial para cada necessidade.</h2><p>Da saúde à higiene, passando por tudo aquilo que faz parte da rotina do seu companheiro.</p></div><div class="services"><article class="service"><div class="symbol">🩺</div><h3>Atendimento veterinário</h3><p>Atenção profissional e orientação cuidadosa para a saúde e o bem-estar do seu pet.</p><a href="#veterinario">Conheça o atendimento →</a></article><article class="service"><div class="symbol">🫧</div><h3>Banho e tosa</h3><p>Um momento de higiene e cuidado, respeitando o conforto de cada animal.</p><a href="#banho-tosa">Conheça banho e tosa →</a></article><article class="service"><div class="symbol">🦴</div><h3>Produtos para pets</h3><p>Uma loja com itens que acompanham o dia a dia do seu melhor amigo.</p><a href="#loja">Explore nossa loja →</a></article></div></div></section><section class="section story"><div class="wrap story-grid"><div class="story-photo"><img src="${photos.about}" alt="Cachorro em um momento de carinho" loading="lazy"></div><div><span class="kicker">Nosso jeito de cuidar</span><h2>Mais do que atender pets. É cuidar de quem faz parte da família.</h2><p>Acreditamos que cada animal tem seu próprio jeitinho. Por isso, acolhimento, atenção e respeito fazem parte de cada experiência no Pet Shop do Fofinho.</p><p>Queremos que você se sinta à vontade para conversar com nossa equipe e encontrar o cuidado certo para seu companheiro.</p><div class="pill-list"><span class="pill">Carinho em cada atendimento</span><span class="pill">Cuidado com respeito</span><span class="pill">Tudo pertinho de você</span></div><a class="btn" href="#contato">Venha nos conhecer</a></div></div></section><section class="section"><div class="wrap"><div class="section-head"><span class="kicker">Um pouquinho do nosso universo</span><h2>Os melhores momentos têm patas.</h2></div><div class="photo-row"><img src="${photos.hero}" alt="Dois cachorros juntos ao ar livre" loading="lazy"><img src="${photos.grooming}" alt="Cachorro durante os cuidados de higiene" loading="lazy"><img src="${photos.about}" alt="Cachorro em um momento de carinho" loading="lazy"></div></div></section>${reviewsSection('inicio')}${contactSection(whatsappMessages.inicio)}`}
function contactSection(message){return `<section class="contact" id="contato"><div class="wrap contact-grid"><div><span class="kicker" style="color:#d8b29d">Estamos pertinho</span><h2>Vai ser um prazer receber vocês.</h2><p>Fale com a nossa equipe pelo WhatsApp ou venha nos visitar. Estamos no bairro São Francisco, em Campo Grande.</p><a class="btn" style="background:#f7f4ec;color:#354333;border-color:#f7f4ec" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer">Chamar no WhatsApp ↗</a></div><div class="contact-info"><div><b>Endereço</b><span>Rua Padre Valentim, 350 · São Francisco<br>Campo Grande, MS · 79009-290</span></div><div><b>Telefone / WhatsApp</b><a href="tel:+5567991028282">(67) 99102-8282</a></div><div><b>Instagram</b><a href="https://instagram.com/petshopdofofinho" target="_blank">@petshopdofofinho ↗</a></div><div><b>Como chegar</b><a href="https://www.google.com/maps/search/?api=1&query=Rua+Padre+Valentim+350+Sao+Francisco+Campo+Grande+MS" target="_blank">Abrir no Google Maps ↗</a></div></div></div></section>`}
function veterinary(){return `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#inicio">Início</a> / Atendimento veterinário</div><div class="page-grid"><div><span class="kicker">Saúde e bem-estar</span><h1>Atendimento veterinário</h1><p style="font-size:1.08rem">Cuidado profissional com atenção ao que seu pet precisa.</p><div class="actions"><a class="btn" href="${WA}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o atendimento veterinário.') }" target="_blank" rel="noopener noreferrer">Consultar atendimento ↗</a></div></div><div class="page-photo"><img src="${IMG.vet}" alt="Dra. Luara com um cachorro durante um atendimento — imagem tratada digitalmente"></div></div></div></section><section class="page-content"><div class="wrap"><article class="vet-profile"><div class="vet-profile-grid"><figure class="vet-profile-photo"><img src="${IMG.portrait}" alt="Retrato da Dra. Luara" loading="lazy"></figure><div><span class="kicker">Conheça quem cuida</span><h2>Conheça a Dra. Luara</h2><p class="vet-name">Luara Michelle Ribeiro Trimarco · Médica-veterinária</p><p>Com formação em Medicina Veterinária pela Universidade Católica Dom Bosco (UCDB), a Dra. Luara possui uma trajetória acadêmica que inclui participação em pesquisas científicas voltadas à saúde animal.</p><p>À frente do Pet Shop do Fofinho, em Campo Grande – MS, dedica-se a oferecer um atendimento individualizado, acolhedor e responsável, priorizando a saúde, o conforto e o bem-estar de cada paciente.</p><p>Os comentários de tutores destacam a atenção nas consultas, a clareza nas orientações e o carinho com os animais.</p><div class="actions"><a class="btn" href="${whatsappUrl(whatsappMessages.veterinario)}" target="_blank" rel="noopener noreferrer">Agendar atendimento ↗</a></div></div></div><div class="vet-credentials"><div class="vet-credential"><span class="kicker">Formação</span><b>Medicina Veterinária</b><small>Universidade Católica Dom Bosco (UCDB)</small></div><div class="vet-credential"><span class="kicker">Trajetória profissional</span><b>Registros desde 2017</b><small>CRMV-MS 6328 · registro informado, situação atual a confirmar.</small></div><div class="vet-credential"><span class="kicker">Pesquisa científica</span><b>Saúde animal</b><small>Participação em pesquisa sobre alterações inflamatórias no ligamento cruzado de cães com leishmaniose visceral.</small></div></div><div class="gallery-pair"><img src="${IMG.pet}" alt="Dra. Luara com um cachorro" loading="lazy"><img src="${IMG.dalmata}" alt="Momento de cuidado com um dálmata" loading="lazy"></div></article></div></section>${reviewsSection('veterinario')}${contactSection(whatsappMessages.veterinario)}`}

const money = value => new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(value);
const groomingPrices = [
 ['Até 5 kg',50,70,80],
 ['Até 10 kg',60,75,90],
 ['Até 15 kg',70,85,100],
 ['Até 20 kg',90,100,130],
 ['Até 25 kg',100,110,140],
 ['Até 30 kg',110,120,150],
 ['Cada +5 kg',10,10,10]
];
const catGroomingPrices = [['Banho',80],['Tosa higiênica',120],['Tosa completa',150]];
function groomingPriceRows(rows){
 return rows.map(([label,...values]) => `<tr><th scope="row">${label}</th>${values.map(value => `<td>${money(value)}</td>`).join('')}</tr>`).join('');
}
function groomingPriceSection(){
 return `<section class="section price-section" aria-labelledby="price-title">
  <div class="wrap">
   <div class="section-head"><h2 id="price-title">Preços de banho e tosa</h2></div>
   <div class="price-tables">
    <table class="price-table">
     <caption>Cães</caption>
     <thead><tr><th scope="col">Peso</th><th scope="col">Banho</th><th scope="col">Tosa higiênica</th><th scope="col">Tosa completa</th></tr></thead>
     <tbody>${groomingPriceRows(groomingPrices)}</tbody>
    </table>
    <table class="price-table">
     <caption>Gatos</caption>
     <thead><tr><th scope="col">Serviço</th><th scope="col">Valor</th></tr></thead>
     <tbody>${groomingPriceRows(catGroomingPrices)}</tbody>
    </table>
   </div>
   <p style="margin-top:18px">Banho medicinal · <strong>${money(20)}</strong></p>
  </div>
 </section>`;
}
function grooming(){
 return `<section class="page-hero">
  <div class="wrap">
   <div class="breadcrumb"><a href="#inicio">Início</a> / Banho e tosa</div>
   <div class="page-grid">
    <div><span class="kicker">Higiene com carinho</span><h1>Banho e tosa</h1>
     <p>Um momento de cuidado, conforto e bem-estar para o seu pet.</p>
     <div class="actions"><a class="btn" href="${WA}?text=${encodeURIComponent('Olá! Gostaria de agendar banho e tosa.')}" target="_blank" rel="noopener noreferrer">Agendar banho e tosa ↗</a></div>
    </div>
    <figure class="page-photo grooming-photo"><img src="assets/images/banho-tosa-mural.webp" alt="Mural de cachorros em uma banheira no espaço de banho e tosa"></figure>
   </div>
  </div>
 </section>
 ${groomingPriceSection()}
 <section class="page-content"><div class="wrap content-grid">
  <div><h2>Cada pet tem seu próprio jeitinho.</h2><p>O banho e a tosa fazem parte da rotina de higiene dos nossos companheiros. A Pati cuida dessa etapa com atenção ao conforto de cada pet.</p>
   <div class="team-card"><div class="team-avatar" aria-hidden="true">🐾</div><div><h3>Pati</h3><p>Banho e tosa</p></div></div>
  </div>
  <aside class="soft-panel"><h3>Quer marcar um horário?</h3><p>Converse com a equipe sobre o cuidado que seu pet precisa.</p><a class="btn" href="${whatsappUrl(whatsappMessages['banho-tosa'])}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp ↗</a></aside>
 </div></section>${reviewsSection('banho-tosa')}${contactSection(whatsappMessages['banho-tosa'])}`;
}

const productImages = {
 "arranhador-sisal": "assets/images/produto-arranhador-sisal.webp",
 "bandejas": "assets/images/produto-bandejas.webp",
 "billy-castrados": "assets/images/produto-billy-castrados.webp",
 "billy-filhotes": "assets/images/produto-billy-filhotes.webp",
 "bolinhas": "assets/images/produto-bolinhas.webp",
 "bolsa-transporte": "assets/images/produto-bolsa-transporte.webp",
 "capitao": "assets/images/produto-capitao.webp",
 "casinha": "assets/images/produto-casinha.webp",
 "catpower-adultos": "assets/images/produto-catpower-adultos.webp",
 "catpower-castrados": "assets/images/produto-catpower-castrados.webp",
 "circuito": "assets/images/produto-circuito.webp",
 "golden-carne": "assets/images/produto-golden-carne.webp",
 "golden-frango": "assets/images/produto-golden-frango.webp",
 "golden-light": "assets/images/produto-golden-light.webp",
 "keldog-tapetes": "assets/images/produto-keldog-tapetes.webp",
 "naturalstick": "assets/images/produto-naturalstick.webp",
 "peitoral-guia": "assets/images/produto-peitoral-guia.webp",
 "petkiss-melancia": "assets/images/produto-petkiss-melancia.webp",
 "petlife-filhote": "assets/images/produto-petlife-filhote.webp",
 "petlife-pequenas": "assets/images/produto-petlife-pequenas.webp",
 "pipicat-bianco": "assets/images/produto-pipicat-bianco.webp",
 "pipicat-classic": "assets/images/produto-pipicat-classic.webp",
 "quartz-caes": "assets/images/produto-quartz-caes.webp",
 "quartz-castrados": "assets/images/produto-quartz-castrados.webp",
 "specialcat-ultralife": "assets/images/produto-specialcat-ultralife.webp",
 "gatan": "assets/images/produto-gatan.webp",
 "comedouro-inox": "assets/images/produto-comedouro-inox.webp",
 "comedouros": "assets/images/produto-comedouros.webp",
 "coleiras-guias": "assets/images/produto-coleiras-guias.webp",
 "brinquedos-borracha": "assets/images/produto-brinquedos-borracha.webp",
 "arranhador-bolinha": "assets/images/produto-arranhador-bolinha.webp",
 "special-dog-filhotes": "assets/images/produto-special-dog-filhotes.webp",
 "special-dog-ultralife": "assets/images/produto-special-dog-ultralife.webp",
 "special-cat-adultos": "assets/images/produto-special-cat-adultos.webp",
 "chanin-adultos": "assets/images/produto-chanin-adultos.webp",
 "max-castrados": "assets/images/produto-max-castrados.webp",
 "dog-power-adulto": "assets/images/produto-dog-power-adulto.webp"
};
const products = [
 {name:'Casinha de madeira',cat:'Acessórios',image:'casinha',source:'studio'},
 {name:'Circuito de madeira para gatos',cat:'Acessórios',image:'circuito',source:'studio'},
 {name:'GoldeN Adultos Mini Bits Frango e Arroz',cat:'Rações para cães',price:16,image:'golden-frango',source:'fabricante',unit:'granel'},
 {name:'GoldeN Adultos Mini Bits Carne e Arroz',cat:'Rações para cães',image:'golden-carne',source:'fabricante',unit:'granel'},
 {name:'GoldeN Light Frango e Arroz',cat:'Rações para cães',price:20,image:'golden-light',source:'fabricante',unit:'granel'},
 {name:'Capitão Dog Adultos Carne',cat:'Rações para cães',price:8,image:'capitao',source:'fabricante',unit:'granel'},
 {name:'Special Dog Filhotes', image:'special-dog-filhotes',source:'embalagem',cat:'Rações para cães',price:14.9,unit:'granel'},
 {name:'Special Dog Ultralife / Gold Life', image:'special-dog-ultralife',source:'embalagem',cat:'Rações para cães',price:16,unit:'granel'},
 {name:'Special Cat Adultos', image:'special-cat-adultos',source:'embalagem',cat:'Rações para gatos',price:16,unit:'granel'},
 {name:'Chanin Adultos', image:'chanin-adultos',source:'embalagem',cat:'Rações para gatos',price:14,unit:'granel'},
 {name:'Max para Gatos Castrados', image:'max-castrados',source:'embalagem',cat:'Rações para gatos',price:20,unit:'granel'},
 {name:'Gatan Mix Adultos Carne e Frango',cat:'Rações para gatos',price:10,image:'gatan',source:'fabricante',unit:'granel'},
 {"name":"Dog Power Adultos Frango e Arroz", "image":"dog-power-adulto", "source":"embalagem", "cat":"Rações para cães", "price":18, "unit":"granel"},
 {"name":"Pet.life Adultos Raças Pequenas Frango e Arroz", "cat":"Rações para cães", "image":"petlife-pequenas", "source":"embalagem", "price":16, "unit":"granel"},
 {"name":"Quartz Essencial Cães Adultos", "cat":"Rações para cães", "image":"quartz-caes", "source":"embalagem", "unit":"granel"},
 {"name":"Pet.life Filhotes Frango e Arroz 3 kg", "cat":"Rações para cães", "image":"petlife-filhote", "source":"embalagem"},
 {"name":"Cat Power Gatos Castrados Salmão", "cat":"Rações para gatos", "image":"catpower-castrados", "source":"embalagem", "price":22, "unit":"granel"},
 {"name":"Quartz Gatos Castrados Salmão", "cat":"Rações para gatos", "image":"quartz-castrados", "source":"embalagem", "price":18, "unit":"granel"},
 {"name":"Billy Cat Select Filhotes", "cat":"Rações para gatos", "image":"billy-filhotes", "source":"embalagem", "price":18, "unit":"granel"},
 {"name":"Billy Cat Select Castrados", "cat":"Rações para gatos", "image":"billy-castrados", "source":"embalagem", "price":15, "unit":"granel"},
 {"name":"Cat Power Adultos Frango 3 kg", "cat":"Rações para gatos", "image":"catpower-adultos", "source":"embalagem"},
 {"name":"Special Cat Ultralife Gatos Castrados Frango", "cat":"Rações para gatos", "image":"specialcat-ultralife", "source":"embalagem"},
 {"name":"Keldog Slim Odor Block · 7 tapetes", "cat":"Higiene", "image":"keldog-tapetes", "source":"embalagem"},
 {"name":"Pipicat Classic 4 kg", "cat":"Higiene", "image":"pipicat-classic", "source":"embalagem"},
 {"name":"Pipicat Bianco Sensitive", "cat":"Higiene", "image":"pipicat-bianco", "source":"embalagem"},
 {"name":"Pet Kiss Shampoo e Condicionador 2 em 1 · Melancia, 500 ml", "cat":"Higiene", "image":"petkiss-melancia", "source":"embalagem", "price":18},
 {"name":"Bandejas sanitárias para gatos", "cat":"Higiene", "image":"bandejas", "source":"studio"},
 {"name":"Comedouro de inox", "image":"comedouro-inox", "source":"studio", "cat":"Acessórios"},
 {"name":"Comedouros de plástico", "image":"comedouros", "source":"studio", "cat":"Acessórios"},
 {"name":"Peitoral com guia", "cat":"Acessórios", "image":"peitoral-guia", "source":"studio"},
 {"name":"Coleiras e guias", "image":"coleiras-guias", "source":"studio", "cat":"Acessórios"},
 {"name":"Bolsa de transporte para pets", "cat":"Acessórios", "image":"bolsa-transporte", "source":"studio"},
 {"name":"Brinquedos de borracha para cães", "image":"brinquedos-borracha", "source":"studio", "cat":"Brinquedos"},
 {"name":"Bolinhas para pets", "cat":"Brinquedos", "image":"bolinhas", "source":"studio"},
 {"name":"Arranhador com bolinha para gatos", "image":"arranhador-bolinha", "source":"studio", "cat":"Brinquedos"},
 {"name":"Arranhador de sisal para gatos", "cat":"Brinquedos", "image":"arranhador-sisal", "source":"studio"},
 {"name":"Coolors Natural Stick · 6 unidades", "cat":"Petiscos", "image":"naturalstick", "source":"studio"}
];
const productCategories = ['Todos', 'Rações para cães', 'Rações para gatos', 'Acessórios', 'Brinquedos', 'Higiene', 'Petiscos'];
const normalizeSearch = value => value.trim().normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();

function productCard(product){
 const {name,cat,price,image,source,unit,bagPrice} = product;
 const isFood = cat === 'Rações para cães' || cat === 'Rações para gatos';
 const bulkPrice = unit === 'granel' ? price : undefined;
 const message = encodeURIComponent(`Olá! Gostaria de saber se vocês têm ${name} disponível.`);
 const imageAlt = source === 'studio' ? 'Imagem ilustrativa de ' + name : 'Embalagem de referência de ' + name;
 return `<article class="product" data-cat="${cat}" data-name="${normalizeSearch(name + ' ' + cat)}">
  ${image ? `<figure class="product-pic${source ? ' product-pic-pack' : ''}"><img src="${productImages[image]}" alt="${imageAlt}" loading="lazy">${source === 'studio' ? '<figcaption>Imagem ilustrativa</figcaption>' : ''}</figure>` : ''}
  <div class="product-body">
   <small>${cat}</small>
   <h3>${name}</h3>
   ${isFood ? `<div class="food-options">
    ${foodOption(name, 'A granel', bulkPrice === undefined ? 'Sob consulta' : money(bulkPrice) + ' / kg')}
    ${foodOption(name, 'Saco fechado', bagPrice === undefined ? 'Sob consulta' : money(bagPrice))}
   </div>` : `<p class="product-price">${price === undefined ? 'Sob consulta' : money(price)}</p>
   <a class="product-link" href="${WA}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${name} pelo WhatsApp">Consultar no WhatsApp ↗</a>`}
  </div>
 </article>`;
}
function foodOption(name, format, priceLabel){
 const message = encodeURIComponent(`Olá! Gostaria de consultar preço e disponibilidade de ${name} na opção ${format.toLowerCase()}.`);
 return `<a class="food-option" href="${WA}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${name} – ${format} pelo WhatsApp">
  <span>${format}<span aria-hidden="true"> ↗</span></span><strong>${priceLabel}</strong>
 </a>`;
}
function catalog(){
 return `<section class="page-hero"><div class="wrap">
  <div class="breadcrumb"><a href="#inicio">Início</a> / Nossa loja</div>
  <h1>Nossa loja</h1>
  <p class="catalog-note">Rações, petiscos, brinquedos e itens de higiene para cães e gatos. Consulte pelo WhatsApp as opções de ração a granel ou em saco fechado. As embalagens são fotos de referência.</p>
 </div></section>
 <section class="page-content"><div class="wrap">
  <div class="catalog-tools">
   <input class="search" id="productSearch" type="search" placeholder="Buscar um produto..." aria-label="Buscar um produto">
   <div class="filters" role="group" aria-label="Categorias de produtos">
    ${productCategories.map((category,index) => `<button type="button" class="filter${index ? '' : ' active'}" data-filter="${category}" aria-pressed="${!index}">${category}</button>`).join('')}
   </div>
  </div>
  <p id="catalogEmpty" class="empty" role="status" hidden>Nenhum produto encontrado. Tente buscar por outro nome ou categoria.</p>
  <div class="product-grid" id="productGrid">${products.map(productCard).join('')}</div>
 </div></section>${contactSection(whatsappMessages.loja)}`;
}

function contactPage(){return `<section class="contact-page-hero"><div class="wrap"><div class="breadcrumb"><a href="#inicio">Início</a> / Contato</div><div class="contact-hero-grid"><div><span class="kicker">Estamos pertinho de você</span><h1>Vamos conversar?</h1><p>Estamos aqui para ajudar você a cuidar de quem faz parte da família. Tire suas dúvidas, consulte horários ou fale com a nossa equipe.</p></div><div class="contact-team-photo"><img src="assets/images/dra-luara-pet.webp" alt="Dra. Luara com um cachorro" loading="eager"></div></div></div></section>
<section class="contact-page-body"><div class="wrap contact-page-layout"><div><span class="kicker">Fale com a gente</span><h2>Vai ser um prazer receber vocês.</h2><p>Escolha o jeito mais fácil de entrar em contato. Estamos no bairro São Francisco, em Campo Grande.</p><div class="contact-page-details">
<article><b>WhatsApp e telefone</b><p><a href="${whatsappUrl(whatsappMessages.contato)}" target="_blank" rel="noopener noreferrer">(67) 99102-8282 ↗</a></p></article>
<article><b>Endereço</b><p>Rua Padre Valentim, 350 · São Francisco<br>Campo Grande, MS · CEP 79009-290</p></article>
<article><b>Horário de atendimento</b><p>Consulte os horários atualizados com a nossa equipe pelo WhatsApp.</p></article>
<article><b>Instagram</b><p><a href="https://www.instagram.com/petshopdofofinho/" target="_blank" rel="noopener noreferrer">@petshopdofofinho ↗</a></p></article>
</div></div><form class="contact-form" id="contactForm"><span class="kicker">Mande uma mensagem</span><h2>Como podemos ajudar?</h2><p>Preencha os campos e vamos preparar sua mensagem para enviar pelo WhatsApp.</p>
<label for="contactName">Seu nome</label><input id="contactName" name="name" required autocomplete="name" placeholder="Como podemos chamar você?">
<label for="contactPhone">Seu telefone</label><input id="contactPhone" name="phone" type="tel" required autocomplete="tel" placeholder="(67) 99999-9999">
<label for="contactSubject">Sobre o que você quer falar?</label><select id="contactSubject" name="subject" required><option value="" disabled selected>Selecione um assunto</option><option>Atendimento veterinário</option><option>Banho e tosa</option><option>Produtos da loja</option><option>Outras dúvidas</option></select>
<label for="contactMessage">Sua mensagem</label><textarea id="contactMessage" name="message" required placeholder="Conte para a gente como podemos ajudar..."></textarea>
<button type="submit" class="btn">Enviar pelo WhatsApp ↗</button><small>Ao clicar, o WhatsApp abrirá com a mensagem preenchida. Você poderá revisar antes de enviar.</small></form></div></section>
<section class="contact-map"><div class="wrap contact-map-grid"><div><span class="kicker">Venha nos visitar</span><h2>Um cantinho de carinho em Campo Grande.</h2><p>Rua Padre Valentim, 350 · São Francisco, Campo Grande – MS.</p><a class="btn outline" href="https://www.google.com/maps/search/?api=1&query=Rua+Padre+Valentim+350+Sao+Francisco+Campo+Grande+MS" target="_blank" rel="noopener noreferrer">Ver rota no Google Maps ↗</a></div><iframe title="Mapa do Pet Shop Do Fofinho" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Rua%20Padre%20Valentim%20350%20S%C3%A3o%20Francisco%20Campo%20Grande%20MS&output=embed"></iframe></div></section>`}
function setupContactForm(){const form=document.getElementById('contactForm');if(!form)return;form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const name=form.elements.name.value.trim();const phone=form.elements.phone.value.trim();const subject=form.elements.subject.value;const message=form.elements.message.value.trim();const text=`Olá! Meu nome é ${name}.\nTelefone: ${phone}\nAssunto: ${subject}\n\n${message}`;window.open(WA+'?text='+encodeURIComponent(text),'_blank','noopener,noreferrer');});}

function render(){let key=location.hash.replace('#','')||'inicio';let app=document.getElementById('app');if(key==='inicio'||key==='servicos')app.innerHTML=home();else if(key==='contato')app.innerHTML=contactPage();else if(key==='loja')app.innerHTML=catalog();else if(key==='veterinario')app.innerHTML=veterinary();else if(key==='banho-tosa')app.innerHTML=grooming();else app.innerHTML=home();const message=Object.hasOwn(whatsappMessages,key)?whatsappMessages[key]:whatsappMessages.inicio;document.querySelectorAll('[data-page-whatsapp]').forEach(link=>{link.href=whatsappUrl(message)});document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===key));document.querySelector('.navlinks').classList.remove('open');document.querySelector('.menu').setAttribute('aria-expanded','false');document.querySelector('.menu').textContent='☰';window.scrollTo(0,0);setupCatalog();setupContactForm();if(key==='servicos')document.getElementById('servicos')?.scrollIntoView();}

function setupCatalog(){
 const search = document.getElementById('productSearch');
 if(!search) return;
 const cards = [...document.querySelectorAll('#productGrid .product')];
 const filters = [...document.querySelectorAll('.filter')];
 const empty = document.getElementById('catalogEmpty');
 let category = 'Todos';
 function update(){
  const query = normalizeSearch(search.value);
  let found = false;
  cards.forEach(card => {
   const visible = (category === 'Todos' || category === card.dataset.cat) && card.dataset.name.includes(query);
   card.classList.toggle('hidden',!visible);
   found ||= visible;
  });
  empty.hidden = found;
 }
 search.addEventListener('input',update);
 filters.forEach(button => button.addEventListener('click',() => {
  category = button.dataset.filter;
  filters.forEach(filter => {
   filter.classList.toggle('active',filter === button);
   filter.setAttribute('aria-pressed',String(filter === button));
  });
  update();
 }));
}

document.querySelector('.menu').addEventListener('click',()=>{let n=document.querySelector('.navlinks');let open=n.classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',String(open));document.querySelector('.menu').textContent=open?'×':'☰';});
window.addEventListener('hashchange',render);document.getElementById('year').textContent=new Date().getFullYear();render();
