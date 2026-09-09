var FSC_SRC = "assets/fsc-c108985.jpg";
var CF_SRC  = "assets/carbon-free-id6221.png";

function selo(qual){
  return qual === "fsc"
    ? '<div class="seal seal-fsc"><img src="'+FSC_SRC+'" alt="FSC C108985 — A marca do manejo florestal responsável"></div>'
    : '<div class="seal seal-cf"><img src="'+CF_SRC+'" alt="Carbon Free ID6221"></div>';
}

var LOGO_V     = "assets/brolo-vertical.jpg";
var LOGO_V_NEG = "assets/brolo-vertical-branco.png";

function igIcon(){
  return '<svg class="ig-ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9">'+
    '<rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"></rect>'+
    '<circle cx="12" cy="12" r="4.4"></circle>'+
    '<circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" stroke="none"></circle>'+
  '</svg>';
}

var ENDERECO = "Rua Maria da Conceição Stanwez, 267 — Vila Cardoso Franco, São Paulo, SP, 03978-110";

var MAPS_Q = encodeURIComponent(
  "Rua Maria da Conceição Stanwez, 267, Vila Cardoso Franco, São Paulo, SP, 03978-110"
);

var MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + MAPS_Q;

var WA_NUM = "5511999753856";

var WA_MSG =
  "Olá! Conheci a Brolo pelo site e gostaria de falar sobre embalagens para a minha empresa.";

function waLink(extra){
  return "https://wa.me/" + WA_NUM + "?text=" +
    encodeURIComponent(extra ? WA_MSG + " " + extra : WA_MSG);
}

var waFloat = document.getElementById("waFloat");

if(waFloat){
  waFloat.href = waLink();
}


/* ============================================================
   GERADOR DE MOCKUPS
   ============================================================ */

var _uid = 0;

var PAL = {
  kraft: {
    f:"#DEB98C",
    f2:"#C89B62",
    s:"#B98F58",
    fold:"#CFA778",
    crease:"#A87C45",
    ink:"#4A3418"
  },

  branco: {
    f:"#FBF9F6",
    f2:"#EDE9E2",
    s:"#DFDAD1",
    fold:"#F2EEE7",
    crease:"#CFC9BE",
    ink:"#1B1C1F"
  },

  preto: {
    f:"#282A31",
    f2:"#1A1B20",
    s:"#141519",
    fold:"#30323A",
    crease:"#0E0F12",
    ink:"#F2F0EC"
  }
};


function art(shape, tone, accent, label){

  var p = PAL[tone] || PAL.kraft;
  var a = accent || "#00AEEF";
  var t = label || "SUA MARCA";
  var u = "a" + (++_uid);

  var defs =
    '<defs>'+
      '<linearGradient id="'+u+'f" x1="0" y1="0" x2="1" y2="0">'+
        '<stop offset="0" stop-color="'+p.f2+'"></stop>'+
        '<stop offset=".28" stop-color="'+p.f+'"></stop>'+
        '<stop offset=".82" stop-color="'+p.f+'"></stop>'+
        '<stop offset="1" stop-color="'+p.f2+'"></stop>'+
      '</linearGradient>'+
      '<linearGradient id="'+u+'s" x1="0" y1="0" x2="1" y2="0">'+
        '<stop offset="0" stop-color="'+p.s+'"></stop>'+
        '<stop offset="1" stop-color="'+p.f2+'"></stop>'+
      '</linearGradient>'+
      '<filter id="'+u+'b" x="-50%" y="-50%" width="200%" height="200%">'+
        '<feGaussianBlur stdDeviation="7"></feGaussianBlur>'+
      '</filter>'+
    '</defs>';


  function marca(x, y, w, size){

    var cabe = (w - 10) / Math.max(t.length, 1);

    size = Math.max(
      6,
      Math.min(size, (cabe - 1.2) / 0.58)
    );

    var h = Math.round(size * 2.3);

    return ''+
      '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+a+'"></rect>'+
      '<text '+
        'x="'+(x + w/2)+'" '+
        'y="'+(y + h/2 + size*0.36)+'" '+
        'text-anchor="middle" '+
        'font-family="Poppins,Verdana,sans-serif" '+
        'font-weight="700" '+
        'font-size="'+size+'" '+
        'letter-spacing="1.2" '+
        'fill="#FFFFFF">'+
        t+
      '</text>';
  }


  function linhas(x, y, w){
    return ''+
      '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="3" rx="1.5" fill="'+p.ink+'" opacity=".26"></rect>'+
      '<rect x="'+x+'" y="'+(y+9)+'" width="'+Math.round(w*0.62)+'" height="3" rx="1.5" fill="'+p.ink+'" opacity=".16"></rect>';
  }


  function sombra(cx, rx){
    return ''+
      '<ellipse cx="'+cx+'" cy="274" rx="'+rx+'" ry="10" fill="#000000" opacity=".18" filter="url(#'+u+'b)"></ellipse>';
  }


  var s = "";


  if(shape === "saco" || shape === "mini"){

    var h = shape === "mini" ? 128 : 196;
    var y0 = 262 - h;

    s += sombra(122, 74);

    s +=
      '<path d="M154 '+(y0+6)+' L190 '+(y0+18)+' L190 254 L154 262 Z" fill="url(#'+u+'s)"></path>';

    s +=
      '<path d="M56 '+y0+' L154 '+(y0+6)+' L154 262 L56 262 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M56 '+y0+' L154 '+(y0+6)+' L154 '+(y0+22)+' L56 '+(y0+16)+' Z" fill="'+p.fold+'"></path>';

    s +=
      '<path d="M154 '+(y0+6)+' L190 '+(y0+18)+' L190 '+(y0+32)+' L154 '+(y0+22)+' Z" fill="'+p.crease+'" opacity=".55"></path>';

    s +=
      '<rect x="152" y="'+(y0+8)+'" width="1.5" height="'+(254-y0)+'" fill="'+p.crease+'" opacity=".45"></rect>';

    s += marca(
      72,
      y0 + (shape === "mini" ? 48 : 74),
      68,
      10
    );

    if(shape !== "mini"){
      s += linhas(72, y0 + 124, 60);
    }
  }


  else if(shape === "sacola"){

    s += sombra(120, 78);

    s +=
      '<path d="M74 68 q26 -34 54 -2" fill="none" stroke="'+p.ink+'" stroke-width="5" stroke-linecap="round" opacity=".85"></path>';

    s +=
      '<path d="M158 74 q14 -22 26 -6" fill="none" stroke="'+p.ink+'" stroke-width="4" stroke-linecap="round" opacity=".45"></path>';

    s +=
      '<path d="M152 66 L188 78 L188 252 L152 262 Z" fill="url(#'+u+'s)"></path>';

    s +=
      '<path d="M52 60 L152 66 L152 262 L52 262 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M52 60 L152 66 L152 80 L52 74 Z" fill="'+p.fold+'"></path>';

    s +=
      '<path d="M152 66 L188 78 L188 92 L152 80 Z" fill="'+p.crease+'" opacity=".5"></path>';

    s +=
      '<rect x="150" y="68" width="1.5" height="192" fill="'+p.crease+'" opacity=".45"></rect>';

    s += marca(68,132,70,11);
    s += linhas(68,186,62);
  }


  else if(shape === "pao"){

    s += sombra(116,60);

    s +=
      '<path d="M146 30 L176 42 L176 250 L146 262 Z" fill="url(#'+u+'s)"></path>';

    s +=
      '<path d="M62 24 L146 30 L146 262 L62 262 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M62 24 L146 30 L146 44 L62 38 Z" fill="'+p.fold+'"></path>';

    s +=
      '<rect x="144" y="32" width="1.5" height="228" fill="'+p.crease+'" opacity=".45"></rect>';

    s += marca(76,62,56,8);

    s +=
      '<path d="M74 196 q30 -12 60 0" fill="none" stroke="'+p.crease+'" stroke-width="2" opacity=".5"></path>';

    s += linhas(76,116,48);
  }


  else if(shape === "talher"){

    s += sombra(112,40);

    s +=
      '<path d="M134 34 L156 44 L156 252 L134 262 Z" fill="url(#'+u+'s)"></path>';

    s +=
      '<path d="M78 28 L134 34 L134 262 L78 262 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M78 28 L134 34 L134 46 L78 40 Z" fill="'+p.fold+'"></path>';

    s +=
      '<rect x="132" y="36" width="1.5" height="224" fill="'+p.crease+'" opacity=".45"></rect>';

    s += marca(88,66,36,7);

    s +=
      '<rect x="92" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';

    s +=
      '<rect x="102" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';

    s +=
      '<rect x="112" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';
  }


  else if(shape === "jogo"){

    s += sombra(120,88);

    s +=
      '<path d="M26 96 L214 84 L206 244 L34 232 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M26 96 L214 84 L214 90 L26 102 Z" fill="'+p.fold+'"></path>';

    s +=
      '<circle cx="120" cy="162" r="38" fill="none" stroke="'+a+'" stroke-width="4"></circle>';

    s +=
      '<text x="120" y="168" text-anchor="middle" font-family="Poppins,Verdana,sans-serif" font-weight="700" font-size="13" letter-spacing="1" fill="'+p.ink+'">'+t+'</text>';

    s += linhas(44,214,56);
  }


  else if(shape === "acoplado"){

    s += sombra(120,80);

    s +=
      '<path d="M44 62 L196 62 L196 262 L44 262 Z" fill="url(#'+u+'f)"></path>';

    s +=
      '<path d="M196 62 L196 262 L176 262 L176 62 Z" fill="'+p.f2+'" opacity=".5"></path>';

    s +=
      '<path d="M44 62 L96 62 L44 114 Z" fill="'+p.fold+'"></path>';

    s +=
      '<path d="M44 114 L96 62" fill="none" stroke="'+p.crease+'" stroke-width="1.5" opacity=".7"></path>';

    s += marca(66,148,108,12);
    s += linhas(66,204,88);
  }


  return ''+
    '<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mockup de embalagem personalizada">'+
      defs+
      s+
    '</svg>';
}


/* ============================================================
   DADOS
   ============================================================ */

var PRODUTOS = [

  {
    id:"pao",
    nome:"Sacos publicitários para pães",
    cat:"pao",
    sub:"publicitario",
    foto:"assets/prod-pao.jpg",
    desc:"Embalagens de papel desenvolvidas para acondicionar e valorizar pães, com possibilidade de impressão personalizada.",
    art:["pao","kraft","#101114","PADARIA"]
  },

  {
    id:"pao-pers",
    nome:"Sacos personalizados para pães",
    cat:"pao",
    sub:"personalizado",
    foto:"assets/prod-pao-pers.jpg",
    desc:"Transforme uma embalagem de uso diário em mais um ponto de contato com a sua marca.",
    art:["pao","branco","#00AEEF","SUA MARCA"]
  },

  {
    id:"saco",
    nome:"Sacos de papel",
    cat:"saco",
    foto:"assets/prod-saco.jpg",
    desc:"Versáteis para diferentes aplicações e disponíveis com personalização para a identidade da sua empresa.",
    art:["saco","kraft","#101114","SUA MARCA"]
  },

  {
    id:"sacola",
    nome:"Sacolas de papel",
    cat:"sacola",
    foto:"assets/prod-sacola.jpg",
    desc:"Uma embalagem que acompanha o produto e continua levando a sua marca depois da compra.",
    art:["sacola","branco","#101114","SUA MARCA"]
  },

  {
    id:"mini",
    nome:"Sacos mini",
    cat:"mini",
    foto:"assets/prod-mini.jpg",
    desc:"Formatos menores para aplicações que pedem praticidade sem abrir mão da apresentação.",
    art:["mini","kraft","#101114","MINI"]
  },

  {
    id:"talher",
    nome:"Embalagens para talheres",
    cat:"talher",
    foto:"assets/prod-talher.jpg",
    desc:"Uma solução prática para organizar, proteger e apresentar os talheres no atendimento ao cliente.",
    art:["talher","branco","#101114","MARCA"]
  },

  {
    id:"acoplado",
    nome:"Papel acoplado",
    cat:"acoplado",
    foto:"assets/prod-acoplado.jpg",
    desc:"Uma solução em papel para diferentes aplicações no food service, com possibilidade de personalização.",
    art:["acoplado","kraft","#101114","SUA MARCA"]
  },

  {
    id:"jogo",
    nome:"Jogo americano",
    cat:"jogo",
    foto:"assets/prod-jogo.jpg",
    desc:"Funcionalidade à mesa com espaço para levar comunicação e identidade de marca até a experiência do consumidor.",
    art:["jogo","branco","#101114","MARCA"]
  }

];


var ICO = {

  alvo:
    '<circle cx="12" cy="12" r="8.6"></circle>'+
    '<circle cx="12" cy="12" r="4.6"></circle>'+
    '<circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"></circle>',

  selo:
    '<circle cx="12" cy="9.4" r="5.9"></circle>'+
    '<path d="m9.7 9.4 1.6 1.6 3-3.2"></path>'+
    '<path d="M8.6 14.4 7.2 22l4.8-2.4 4.8 2.4-1.4-7.6"></path>',

  aperto:
    '<path d="M2.6 12.4 6 9.1l3.2 2.9a2 2 0 0 0 2.7 0l.6-.6"></path>'+
    '<path d="M21.4 11.6 18 14.9l-2.6-2.4"></path>'+
    '<path d="M9.4 6.6h4.3l4.3 4.1"></path>'+
    '<path d="M6 9.1 9.4 6.6"></path>'+
    '<path d="M12.5 11.4l2.9 2.6 2.2 2"></path>'+
    '<path d="M12.2 15.4l2 1.8"></path>'+
    '<path d="M10.4 17.6l1.5 1.3"></path>',

  ideia:
    '<path d="M9.3 16.6a5.6 5.6 0 1 1 5.4 0"></path>'+
    '<path d="M9.6 19.2h4.8"></path>'+
    '<path d="M10.4 21.4h3.2"></path>'+
    '<path d="M12 3.1V1.7"></path>'+
    '<path d="M4.8 6.3 3.8 5.3"></path>'+
    '<path d="M19.2 6.3l1-1"></path>',

  grafico:
    '<path d="M3.4 20.4h17.2"></path>'+
    '<path d="M6.6 20.4v-5"></path>'+
    '<path d="M11 20.4v-8.6"></path>'+
    '<path d="M15.4 20.4v-4"></path>'+
    '<path d="M19.8 20.4V8.2"></path>'+
    '<path d="m6.6 12.2 4.4-4.2 4.4 3.4 4.4-6"></path>'
};


function ico(k){
  return ''+
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
      ICO[k]+
    '</svg>';
}


var VALORES = [

  [
    "alvo",
    "Cliente no centro",
    "Ouvir, entender e buscar soluções que façam sentido para quem está do outro lado."
  ],

  [
    "selo",
    "Qualidade",
    "Fazer bem feito, com atenção, consistência e cuidado em cada detalhe."
  ],

  [
    "aperto",
    "Relacionamento ativo",
    "Construir relações transparentes, próximas e feitas para durar."
  ],

  [
    "ideia",
    "Inovação e melhoria contínua",
    "Não aceitar o “sempre foi assim” quando existe uma maneira melhor de fazer."
  ],

  [
    "grafico",
    "Foco em resultado",
    "Trabalhar com responsabilidade e direcionar energia para aquilo que realmente faz diferença."
  ]

];


var CLIENTES = [

  ["Starbucks","assets/cli-starbucks.png"],
  ["BIBI","assets/cli-bibi.png"],
  ["Rei do Mate","assets/cli-rei-do-mate.png"],
  ["Joaquina","assets/cli-joaquina.png"],
  ["Camarada Camarão","assets/cli-camarada.png"],
  ["Cheirin Bão","assets/cli-cheirin-bao.png"],
  ["Graal","assets/cli-graal.png"],
  ["Esfiha Imigrantes","assets/cli-esfiha-imigrantes.png"]

];


/* ============================================================
   DEPOIMENTOS DE TESTE
   ============================================================ */

var DEPOIMENTOS = [

  {
    texto:
      "A qualidade de impressão e a consistência entre os pedidos fazem diferença para a nossa operação. É importante receber o produto mantendo o mesmo padrão que foi aprovado no início.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "O atendimento próximo e a clareza durante o processo são um grande diferencial. Quando precisamos alinhar alguma demanda, conseguimos resolver de forma rápida e direta.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "Trabalhamos com a Brolo há algum tempo e o que mais nos atende é a confiabilidade no prazo e o cuidado com cada detalhe da produção.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "A embalagem chega com uma apresentação muito consistente e isso ajuda bastante na experiência que queremos entregar ao consumidor. O padrão visual se mantém muito bem.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "Desde o desenvolvimento até a entrega, sentimos que existe acompanhamento de verdade. A equipe entende o que precisamos e procura encontrar uma solução que faça sentido.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "Para quem trabalha com volume, previsibilidade é fundamental. Ter um parceiro que mantém o padrão de qualidade e acompanha nossas necessidades facilita bastante a operação.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "O resultado final ficou muito próximo do que imaginávamos quando começamos o projeto. Cor, impressão e acabamento ajudaram a valorizar a apresentação da nossa marca.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "Uma coisa que valorizamos é a facilidade para conversar quando surge uma necessidade diferente. Existe proximidade no atendimento e isso agiliza bastante o dia a dia.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  },

  {
    texto:
      "A embalagem é parte importante da experiência do nosso cliente. Encontrar uma empresa que entende isso e consegue manter o padrão traz segurança para a nossa marca.",
    nome:"Cliente Brolo",
    cargo:"Depoimento ilustrativo"
  }

];


var CATS = [

  {
    id:"todos",
    nome:"Todos"
  },

  {
    id:"pao",
    nome:"Sacos para pães",
    subs:[
      {
        id:"todos",
        nome:"Todos"
      },
      {
        id:"publicitario",
        nome:"Publicitários"
      },
      {
        id:"personalizado",
        nome:"Personalizados"
      }
    ]
  },

  {
    id:"saco",
    nome:"Sacos de papel"
  },

  {
    id:"sacola",
    nome:"Sacolas de papel"
  },

  {
    id:"mini",
    nome:"Sacos mini"
  },

  {
    id:"talher",
    nome:"Embalagens para talheres"
  },

  {
    id:"acoplado",
    nome:"Papel acoplado"
  },

  {
    id:"jogo",
    nome:"Jogo americano"
  }

];


var PORTFOLIO = [

  ["pao","kraft","#101114","PANIFÍCIO","pao","publicitario"],
  ["pao","branco","#101114","PADARIA","pao","publicitario"],
  ["pao","kraft","#00AEEF","REDE PÃES","pao","personalizado"],
  ["pao","branco","#EC008C","DOCERIA","pao","personalizado"],

  ["saco","kraft","#101114","BURGER","saco"],
  ["saco","branco","#00AEEF","DELIVERY","saco"],

  ["sacola","branco","#101114","BOUTIQUE","sacola"],
  ["sacola","preto","#F4F2EE","PREMIUM","sacola"],
  ["sacola","kraft","#101114","VAREJO","sacola"],

  ["mini","kraft","#101114","DOCES","mini"],
  ["mini","branco","#101114","PORÇÕES","mini"],

  ["talher","branco","#101114","BISTRÔ","talher"],
  ["talher","kraft","#101114","MESA","talher"],

  ["acoplado","kraft","#101114","GRILL","acoplado"],
  ["acoplado","branco","#101114","SNACK","acoplado"],

  ["jogo","branco","#101114","CAFÉ","jogo"],
  ["jogo","branco","#EC008C","REDE","jogo"]

];


var CATNOME = {

  pao:"Sacos para pães",
  saco:"Sacos de papel",
  sacola:"Sacolas de papel",
  mini:"Sacos mini",
  talher:"Embalagens para talheres",
  acoplado:"Papel acoplado",
  jogo:"Jogo americano"

};


/* ============================================================
   BLOCOS REUTILIZÁVEIS
   ============================================================ */

function cardProduto(p){

  var visual = p.foto
    ? '<img src="'+p.foto+'" alt="'+p.nome+'">'
    : art(p.art[0],p.art[1],p.art[2],p.art[3]);

  return ''+
    '<button class="card'+(p.foto ? ' tem-foto' : '')+'" '+
      'data-cat="'+p.cat+'" '+
      (p.sub ? 'data-sub="'+p.sub+'"' : '')+
    '>'+

      '<div class="thumb">'+
        '<span class="pers">Personalizável</span>'+
        visual+
      '</div>'+

      '<div class="body">'+
        '<h3>'+p.nome+'</h3>'+
        '<span class="go">Ver no portfólio →</span>'+
      '</div>'+

    '</button>';
}


function shot(item){

  return ''+
    '<figure class="shot" style="margin:0">'+

      art(
        item[0],
        item[1],
        item[2],
        item[3]
      )+

      '<figcaption class="cat">'+
        CATNOME[item[4]]+
      '</figcaption>'+

    '</figure>';
}


function cardDepoimento(d){

  return ''+

    '<article class="depo-card">'+

      '<div class="depo-aspas" aria-hidden="true">'+
        '“'+
      '</div>'+

      '<p>'+
        '“'+d.texto+'”'+
      '</p>'+

      '<div class="depo-autor">'+

        '<span></span>'+

        '<strong>'+
          d.nome+
        '</strong>'+

        '<small>'+
          d.cargo+
        '</small>'+

      '</div>'+

    '</article>';

}


function montarSlidesDepoimentos(){

  var slides = '';

  for(var i = 0; i < DEPOIMENTOS.length; i += 3){

    var grupo =
      DEPOIMENTOS.slice(i, i + 3);

    slides +=
      '<div class="depo-slide">'+
        grupo.map(cardDepoimento).join("")+
      '</div>';

  }

  return slides;

}


function blocoContato(titulo, texto, rotulo, classe){

  return ''+

    '<section class="dark-block '+(classe || '')+'">'+

      '<div class="wrap">'+

        '<div class="split">'+

          '<div>'+
            '<div class="eyebrow">Contato</div>'+
            '<h2>'+titulo+'</h2>'+
          '</div>'+

          '<div class="stack">'+

            '<p class="lead">'+texto+'</p>'+

            '<div class="center-cta">'+

              '<a class="btn btn-primary" href="'+waLink()+'" target="_blank" rel="noopener">'+
                (rotulo || "Fale com a Brolo no WhatsApp")+
              '</a>'+

            '</div>'+

          '</div>'+

        '</div>'+

      '</div>'+

    '</section>';
}


/* ============================================================
   PÁGINAS
   ============================================================ */

var PAGES = {};


/* ============================================================
   HOME
   ============================================================ */

PAGES.home = function(){

  return ''+

  '<section class="hero">'+

    '<div class="wrap">'+

      '<div class="hero-regua"></div>'+

      '<div class="hero-grid">'+

        '<div>'+

          '<div class="eyebrow">'+
            'Brolo Embalagens · desde 1989'+
          '</div>'+

          '<h1>'+
            'Sua marca merece uma embalagem à altura.'+
          '</h1>'+

          '<p class="lead" style="margin-top:22px">'+
            'Embalagens de papel personalizadas, produzidas com cuidado em cada detalhe para representar a sua marca do jeito que ela precisa ser vista.'+
          '</p>'+

          '<div class="hero-cta">'+

            '<a class="btn btn-primary" href="#/produtos">'+
              'Conheça nossos produtos'+
            '</a>'+

            '<a class="btn btn-ghost" href="'+waLink()+'" target="_blank" rel="noopener">'+
              'Fale com a Brolo no WhatsApp'+
            '</a>'+

          '</div>'+

        '</div>'+

        '<div class="hero-art">'+

          '<div class="hero-placa" aria-hidden="true"></div>'+

          '<img class="hero-produto" src="assets/prod-herosacola.jpg" alt="Sacolas de papel personalizadas produzidas pela Brolo">'+

        '</div>'+

      '</div>'+

    '</div>'+

    '<svg class="hero-curva" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">'+
      '<path d="M0,200 L0,18 C 300,18 560,138 880,175 C 1120,193 1300,200 1440,200 Z"></path>'+
    '</svg>'+

  '</section>'+


  '<section class="tight apos-hero">'+

    '<div class="wrap">'+

      '<div class="split">'+

        '<div>'+
          '<div class="eyebrow">A Brolo</div>'+
          '<h2>Mais de três décadas construindo confiança no papel.</h2>'+
        '</div>'+

        '<div class="stack">'+

          '<p class="lead">'+
            'A Brolo nasceu de uma empresa familiar e cresceu junto com seus clientes. Ao longo dos anos, ampliamos nossa operação, investimos em capacidade e atravessamos uma sucessão familiar que deu continuidade à experiência construída desde 1989.'+
          '</p>'+

          '<p class="lead">'+
            'Hoje, seguimos evoluindo com o mesmo princípio que trouxe a Brolo até aqui: <strong>fazer bem feito e cuidar de quem confia a própria marca nas nossas mãos.</strong>'+
          '</p>'+

          '<a class="btn btn-ghost" style="align-self:flex-start" href="#/sobre">'+
            'Nossa história'+
          '</a>'+

        '</div>'+

      '</div>'+


      '<div class="nums reveal">'+

        '<div>'+
          '<span class="k">Desde</span>'+
          '<div class="n" data-count="1989" data-plain="1">1989</div>'+
          '<p class="l">Experiência construída ao longo de gerações.</p>'+
        '</div>'+

        '<div>'+
          '<span class="k">Produção</span>'+
          '<div class="n" data-count="150" data-suffix="M+">0</div>'+
          '<p class="l">de embalagens produzidas por ano.</p>'+
        '</div>'+

        '<div>'+
          '<span class="k">Alcance</span>'+
          '<div class="n">'+
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">'+
              '<path d="M12 21.5s7.2-6.35 7.2-11.4A7.2 7.2 0 0 0 4.8 10.1C4.8 15.15 12 21.5 12 21.5z"></path>'+
              '<circle cx="12" cy="10" r="2.6"></circle>'+
            '</svg>'+
            'Todo o Brasil'+
          '</div>'+
          '<p class="l">Presença em todos os estados.</p>'+
        '</div>'+

      '</div>'+

    '</div>'+

  '</section>'+


  '<section class="dark-block confianca">'+

    '<div class="wrap">'+

      '<div class="split">'+

        '<div>'+
          '<div class="eyebrow">Confiança</div>'+
          '<h2>Comprar da Brolo é estar em boas mãos.</h2>'+
        '</div>'+

        '<p class="lead">'+
          'Uma embalagem carrega a sua marca antes mesmo de alguém experimentar o seu produto. Por isso, para a gente, não basta produzir: é preciso cuidar.'+
        '</p>'+

      '</div>'+


      '<div class="pillars reveal">'+

        '<article>'+
          '<h3>Qualidade que aparece no produto.</h3>'+
          '<p class="small">Impressão bem definida, consistência ao longo da produção e atenção aos detalhes para que o resultado represente aquilo que foi aprovado.</p>'+
        '</article>'+

        '<article>'+
          '<h3>Compromisso que aparece na relação.</h3>'+
          '<p class="small">A gente entende a necessidade, mantém uma comunicação próxima e trabalha para que o combinado seja cumprido.</p>'+
        '</article>'+

      '</div>'+


      '<p class="fecho">'+
        'Porque cliente no centro, para a Brolo, não é uma frase. É a forma como a gente escolhe trabalhar.'+
      '</p>'+

    '</div>'+

  '</section>'+


  '<section class="kraft-block tight">'+

    '<div class="wrap">'+

      '<div class="split">'+

        '<div>'+
          '<div class="eyebrow">Sustentabilidade</div>'+
          '<h2>Escolhas responsáveis também fazem parte da embalagem.</h2>'+
        '</div>'+

        '<div class="stack">'+

          '<p class="lead">'+
            'Trabalhamos com certificações que reforçam nosso compromisso com uma cadeia mais responsável e com impactos ambientais tratados de forma mensurável.'+
          '</p>'+

          '<a class="btn btn-ghost" style="align-self:flex-start" href="#/sustentabilidade">'+
            'Conheça nossas certificações'+
          '</a>'+

        '</div>'+

      '</div>'+


      '<div class="certs reveal">'+

        '<div class="cert">'+
          selo("fsc")+
          '<div>'+
            '<h3>Selo FSC®</h3>'+
            '<p class="small">Garante que o papel vem de florestas manejadas de forma responsável e sustentável.</p>'+
          '</div>'+
        '</div>'+

        '<div class="cert">'+
          selo("cf")+
          '<div>'+
            '<h3>Selo Carbon Free</h3>'+
            '<p class="small">Indica que as emissões de carbono foram compensadas.</p>'+
          '</div>'+
        '</div>'+

      '</div>'+

    '</div>'+

  '</section>'+


  '<section>'+

    '<div class="wrap">'+

      '<div class="sec-head">'+

        '<div>'+
          '<div class="eyebrow">Produtos</div>'+
          '<h2>O papel pode assumir muitas formas. A sua marca também.</h2>'+
        '</div>'+

        '<a class="btn btn-ghost" href="#/produtos">'+
          'Ver catálogo completo'+
        '</a>'+

      '</div>'+


      '<p class="lead" style="margin-top:18px">'+
        'Conheça as embalagens produzidas pela Brolo. Todos os nossos produtos podem receber a identidade da sua marca.'+
      '</p>'+


      '<div class="grid-p">'+
        PRODUTOS.map(cardProduto).join("")+
      '</div>'+

    '</div>'+

  '</section>'+


  '<section class="clientes">'+

    '<div class="wrap">'+

      '<div class="eyebrow">Clientes</div>'+

      '<h2>Marcas que já confiaram na Brolo.</h2>'+


      '<div class="clientes-faixa">'+

        '<div class="clientes-trilho">'+

          [0,1].map(function(copia){

            return ''+

              '<div class="clientes-leva">'+

                CLIENTES.map(function(c){

                  return ''+
                    '<img src="'+c[1]+'" alt="'+(copia ? '' : c[0])+'" '+(copia ? 'aria-hidden="true"' : '')+'>';

                }).join("")+

              '</div>';

          }).join("")+

        '</div>'+

      '</div>'+

    '</div>'+

  '</section>'+


  /* ========================================================
     DEPOIMENTOS
     ======================================================== */

  '<section class="depoimentos-home">'+

    '<div class="wrap">'+

      '<div class="depo-topo">'+

        '<div class="depo-titulo">'+

          '<div class="eyebrow">Depoimentos</div>'+

          '<h2>'+
            'O que nossos<br>clientes dizem.'+
          '</h2>'+

        '</div>'+

        '<p class="depo-intro">'+
          'Mais do que embalagens,<br>'+
          'construímos parcerias que<br>'+
          'crescem com o tempo.'+
        '</p>'+

      '</div>'+


      '<div class="depo-slider">'+

        '<button class="depo-arrow depo-prev" type="button" aria-label="Depoimentos anteriores">'+

          '<svg viewBox="0 0 24 24" aria-hidden="true">'+
            '<path d="M15 18l-6-6 6-6"></path>'+
          '</svg>'+

        '</button>'+


        '<div class="depo-viewport">'+

          '<div class="depo-track">'+
            montarSlidesDepoimentos()+
          '</div>'+

        '</div>'+


        '<button class="depo-arrow depo-next" type="button" aria-label="Próximos depoimentos">'+

          '<svg viewBox="0 0 24 24" aria-hidden="true">'+
            '<path d="M9 18l6-6-6-6"></path>'+
          '</svg>'+

        '</button>'+

      '</div>'+


      '<div class="depo-dots">'+

        '<button type="button" class="on" data-depo-page="0" aria-label="Página 1"></button>'+

        '<button type="button" data-depo-page="1" aria-label="Página 2"></button>'+

        '<button type="button" data-depo-page="2" aria-label="Página 3"></button>'+

      '</div>'+

    '</div>'+

  '</section>'+


  blocoContato(
    "Sua próxima embalagem pode começar aqui.",
    "Conte para a gente o que sua empresa precisa. Nossa equipe conversa com você diretamente pelo WhatsApp e entende o seu projeto.",
    null,
    "cta-depoimentos"
  );

};


/* ============================================================
   PRODUTOS
   ============================================================ */

PAGES.produtos = function(){

  return ''+

    '<section>'+

      '<div class="wrap">'+

        '<div class="eyebrow">Catálogo</div>'+

        '<h2>Encontre a embalagem certa para a sua marca.</h2>'+


        '<div class="stack" style="margin-top:18px">'+

          '<p class="lead">'+
            'A Brolo produz diferentes soluções em papel, todas com possibilidade de personalização.'+
          '</p>'+

          '<p class="lead">'+
            'Escolha um produto para conhecer e veja no Portfólio exemplos de como ele pode ganhar a identidade da sua empresa.'+
          '</p>'+

        '</div>'+


        '<div class="grid-p">'+
          PRODUTOS.map(cardProduto).join("")+
        '</div>'+

      '</div>'+

    '</section>'+


    blocoContato(
      "Precisa de algo diferente?",
      "Nem toda necessidade começa em um produto pronto. Conte para a nossa equipe o que você procura e a gente avalia as possibilidades para o seu projeto.",
      "Falar com a Brolo"
    );

};


/* ============================================================
   PORTFÓLIO
   ============================================================ */

function filtrarPortfolio(cat, sub){

  return PORTFOLIO.filter(function(i){

    if(cat === "todos"){
      return true;
    }

    if(i[4] !== cat){
      return false;
    }

    if(!sub || sub === "todos"){
      return true;
    }

    return i[5] === sub;

  });

}


function barraSubfiltros(cat, sub){

  var c = CATS.filter(function(x){
    return x.id === cat;
  })[0];


  if(!c || !c.subs){
    return "";
  }


  return ''+

    '<div class="filters filters-sub" id="subfiltros">'+

      c.subs.map(function(s){

        return ''+

          '<button data-sub="'+s.id+'" class="'+((sub || "todos") === s.id ? "on" : "")+'">'+
            s.nome+
          '</button>';

      }).join("")+

    '</div>';

}


PAGES.portfolio = function(cat, sub){

  cat = cat || "todos";

  return ''+

    '<section>'+

      '<div class="wrap">'+

        '<div class="eyebrow">Portfólio</div>'+

        '<h2>Veja o que a gente é capaz de colocar no papel.</h2>'+


        '<div class="stack" style="margin-top:18px">'+

          '<p class="lead">'+
            'Cada marca tem uma identidade. Aqui, você encontra uma seleção de embalagens produzidas pela Brolo em diferentes formatos, cores e aplicações.'+
          '</p>'+

          '<p class="small">'+
            'Sem nomes. Sem exposição da carteira. O foco é no trabalho.'+
          '</p>'+

        '</div>'+


        '<div class="filters" id="filters">'+

          CATS.map(function(c){

            return ''+

              '<button data-cat="'+c.id+'" class="'+(c.id === cat ? "on" : "")+'">'+
                c.nome+
              '</button>';

          }).join("")+

        '</div>'+


        '<div id="areaSub">'+
          barraSubfiltros(cat,sub)+
        '</div>'+


        '<div class="gallery" id="gallery">'+

          filtrarPortfolio(cat,sub)
            .map(shot)
            .join("")+

        '</div>'+

      '</div>'+

    '</section>'+


    blocoContato(
      "Agora imagine a sua marca aqui.",
      "Fale com a nossa equipe e conte o que você tem em mente.",
      "Falar com a Brolo"
    );

};


/* ============================================================
   SOBRE
   ============================================================ */

PAGES.sobre = function(){

  var linha = [

    [
      "1989",
      "Onde tudo começou.",
      "Nasce o negócio familiar que daria origem à Brolo e iniciaria uma história construída em torno das embalagens de papel."
    ],

    [
      "Crescimento",
      "Mais capacidade para acompanhar novos clientes.",
      "A operação cresce, novos equipamentos chegam e a empresa passa a atender demandas cada vez maiores."
    ],

    [
      "Expansão",
      "Investir para continuar evoluindo.",
      "A estrutura se amplia, a tecnologia avança e a Brolo aumenta sua capacidade de produção."
    ],

    [
      "Sucessão familiar",
      "Uma nova geração para dar continuidade à história.",
      "A condução do negócio passa para a nova geração, combinando a experiência construída ao longo dos anos com uma gestão voltada para o futuro."
    ],

    [
      "Hoje",
      "Experiência para continuar crescendo.",
      "Mais de 150 milhões de embalagens por ano, presença em todos os estados do Brasil e uma marca que continua evoluindo sem esquecer de onde veio."
    ]

  ];


  return ''+

    '<section>'+

      '<div class="wrap">'+

        '<div class="abre">'+

          '<div class="eyebrow">Sobre</div>'+

          '<h2>Uma história de família que virou indústria.</h2>'+


          '<div class="abre-texto">'+

            '<p class="lead">'+
              'Desde 1989, a Brolo cresce sem perder aquilo que sempre esteve no centro do negócio: fazer bem feito, construir relações e tratar cada cliente com responsabilidade.'+
            '</p>'+

            '<p class="lead">'+
              'Ao longo de mais de três décadas, a empresa evoluiu, ganhou estrutura, capacidade e experiência. E, com a sucessão familiar, uma nova geração passou a conduzir essa história para o próximo capítulo.'+
            '</p>'+

          '</div>'+

        '</div>'+


        '<div class="tl">'+

          linha.map(function(r){

            return ''+

              '<div class="row">'+

                '<div class="yr">'+
                  r[0]+
                '</div>'+

                '<div>'+

                  '<h3>'+
                    r[1]+
                  '</h3>'+

                  (
                    r[2]
                    ? '<p class="small">'+r[2]+'</p>'
                    : ''
                  )+

                '</div>'+

              '</div>';

          }).join("")+

        '</div>'+

      '</div>'+

    '</section>'+


    '<section class="mvv">'+

      '<div class="wrap">'+

        '<div class="mvv-topo">'+

          '<div class="eyebrow">'+
            'No que a gente acredita'+
          '</div>'+

          '<h2>'+
            'O jeito como a gente trabalha também faz parte do que entregamos.'+
          '</h2>'+

        '</div>'+


        '<div class="mvv-bloco">'+

          '<div class="mvv-rot">Missão</div>'+

          '<p>'+
            'Entregar qualidade, confiança, atender com prioridade e criar relações que duram. Elevar a experiência e o valor dos clientes, cuidando de cada detalhe.'+
          '</p>'+

        '</div>'+


        '<div class="mvv-bloco">'+

          '<div class="mvv-rot">Visão</div>'+

          '<p>'+
            'Ser referência no setor e um excelente lugar para se trabalhar, sempre honrando o sangue Brolo que nos trouxe até aqui.'+
          '</p>'+

        '</div>'+


        '<div class="mvv-bloco">'+

          '<div class="mvv-rot">Valores</div>'+

          '<ul class="valores">'+

            VALORES.map(function(v){

              return ''+

                '<li>'+

                  ico(v[0])+

                  '<div>'+

                    '<span>'+
                      v[1]+
                    '</span>'+

                    '<p>'+
                      v[2]+
                    '</p>'+

                  '</div>'+

                '</li>';

            }).join("")+

          '</ul>'+

        '</div>'+

      '</div>'+

    '</section>'+


    blocoContato(
      "Quer conhecer a Brolo de perto?",
      "A gente responde no WhatsApp e, se fizer sentido, marca uma conversa com o comercial."
    );

};


/* ============================================================
   SUSTENTABILIDADE
   ============================================================ */

PAGES.sustentabilidade = function(){

  return ''+

    '<section class="dark-block">'+

      '<div class="wrap">'+

        '<div class="split">'+

          '<div>'+

            '<div class="eyebrow">Sustentabilidade</div>'+

            '<h2>Responsabilidade que vai além do discurso.</h2>'+

          '</div>'+

          '<div class="stack">'+

            '<p class="lead">'+
              'Para a Brolo, sustentabilidade precisa estar ligada a práticas e certificações que possam ser comprovadas.'+
            '</p>'+

            '<p class="lead">'+
              'Por isso, trabalhamos com programas reconhecidos que ajudam a garantir rastreabilidade de materiais e tratamento responsável das emissões abrangidas.'+
            '</p>'+

          '</div>'+

        '</div>'+


        '<div class="certs">'+

          '<div class="cert">'+

            selo("fsc")+

            '<div>'+

              '<h3>Selo FSC®</h3>'+

              '<p class="small">'+
                'O selo FSC® é uma certificação que garante que produtos de madeira e papel sejam originários de florestas manejadas de forma responsável e sustentável.'+
              '</p>'+

              '<p class="cod">FSC® C108985</p>'+

            '</div>'+

          '</div>'+


          '<div class="cert">'+

            selo("cf")+

            '<div>'+

              '<h3>Carbon Free</h3>'+

              '<p class="small">'+
                'O selo Carbon Free é uma certificação que indica que um produto, serviço ou empresa compensou suas emissões de carbono.'+
              '</p>'+

              '<p class="cod">Carbon Free · ID6221</p>'+

            '</div>'+

          '</div>'+

        '</div>'+

      '</div>'+

    '</section>';

};


/* ============================================================
   CONTATO
   ============================================================ */

PAGES.contato = function(){

  return ''+

    '<section>'+

      '<div class="wrap">'+

        '<div class="split">'+

          '<div>'+

            '<div class="eyebrow">Contato</div>'+

            '<h2>Fale com quem entende de embalagem.</h2>'+

          '</div>'+

          '<div class="stack">'+

            '<p class="lead">'+
              'Não precisa preencher formulário nem conversar com robô.'+
            '</p>'+

            '<p class="lead">'+
              'Chame a Brolo pelo WhatsApp e fale diretamente com a nossa equipe.'+
            '</p>'+

            '<a class="btn btn-primary" style="align-self:flex-start" href="'+waLink()+'" target="_blank" rel="noopener">'+
              'Falar no WhatsApp'+
            '</a>'+

          '</div>'+

        '</div>'+


        '<div class="contact-grid">'+

          '<a href="'+waLink()+'" target="_blank" rel="noopener">'+
            '<span class="k">WhatsApp e telefone</span>'+
            '<span class="v">(11) 99975-3856</span>'+
          '</a>'+

          '<a href="mailto:contato@grupobrolo.com.br">'+
            '<span class="k">E-mail</span>'+
            '<span class="v">contato@grupobrolo.com.br</span>'+
          '</a>'+

          '<a class="ig" href="https://instagram.com/broloembalagens" target="_blank" rel="noopener">'+
            '<span class="k">Instagram</span>'+
            '<span class="v">'+
              igIcon()+
              '@broloembalagens'+
            '</span>'+
          '</a>'+

          '<div>'+
            '<span class="k">Atendimento</span>'+
            '<span class="v">Segunda a sexta, das 7h às 17h</span>'+
          '</div>'+

          '<div style="grid-column:1/-1">'+
            '<span class="k">Endereço</span>'+
            '<span class="v">'+
              'Rua Maria da Conceição Stanwez, 267<br>'+
              'Vila Cardoso Franco — São Paulo/SP · 03978-110'+
            '</span>'+
          '</div>'+

        '</div>'+


        '<div class="map">'+

          '<iframe '+
            'title="Mapa da regiao da fabrica da Brolo Embalagens" '+
            'loading="lazy" '+
            'src="https://www.openstreetmap.org/export/embed.html'+
              '?bbox=-46.5077%2C-23.6240%2C-46.5031%2C-23.6206'+
              '&amp;layer=mapnik'+
              '&amp;marker=-23.6226800%2C-46.5043500">'+
          '</iframe>'+

        '</div>'+


        '<div class="map-pe">'+

          '<span>'+
            'Rua Maria da Conceição Stanwez, 267 — Vila Cardoso Franco, São Paulo/SP · 03978-110'+
          '</span>'+

          '<a class="btn btn-ghost" href="'+MAPS_URL+'" target="_blank" rel="noopener">'+
            'Abrir no Google Maps'+
          '</a>'+

        '</div>'+

      '</div>'+

    '</section>';

};


/* ============================================================
   ROTEADOR
   ============================================================ */

function parse(){

  var h = (location.hash || "#/")
    .replace("#/","");

  var parts = h.split("?");

  var route = parts[0] || "home";

  var q = {};


  if(parts[1]){

    parts[1]
      .split("&")
      .forEach(function(kv){

        var p = kv.split("=");

        q[p[0]] =
          decodeURIComponent(
            p[1] || ""
          );

      });

  }


  if(!PAGES[route]){
    route = "home";
  }


  return {
    route:route,
    q:q
  };

}


function render(){

  var r = parse();

  var app =
    document.getElementById("app");


  app.innerHTML =
    r.route === "portfolio"
      ? PAGES.portfolio(
          r.q.cat,
          r.q.sub
        )
      : PAGES[r.route]();


  document
    .querySelectorAll(".menu a")
    .forEach(function(a){

      a.classList.toggle(
        "on",
        a.getAttribute("data-r") === r.route
      );

    });


  var menu =
    document.getElementById("menu");

  if(menu){
    menu.classList.remove("open");
  }


  window.scrollTo(0,0);

  wire(r);
  observe();

}


/* ============================================================
   EVENTOS
   ============================================================ */

function wire(r){

  document
    .querySelectorAll(".card")
    .forEach(function(c){

      c.addEventListener(
        "click",
        function(){

          var destino =
            "#/portfolio?cat=" +
            c.getAttribute("data-cat");

          var s =
            c.getAttribute("data-sub");


          if(s){
            destino += "&sub=" + s;
          }


          location.hash = destino;

        }
      );

    });


  /* ==========================================================
     FILTROS DO PORTFÓLIO
     ========================================================== */

  var f =
    document.getElementById("filters");


  if(f){

    var atual = {

      cat:
        (
          r &&
          r.q &&
          r.q.cat
        ) || "todos",

      sub:
        (
          r &&
          r.q &&
          r.q.sub
        ) || "todos"

    };


    function redesenhar(){

      document
        .getElementById("gallery")
        .innerHTML =

        filtrarPortfolio(
          atual.cat,
          atual.sub
        )
        .map(shot)
        .join("");


      var url =
        "#/portfolio?cat=" +
        atual.cat;


      if(
        atual.sub &&
        atual.sub !== "todos"
      ){

        url +=
          "&sub=" +
          atual.sub;

      }


      history.replaceState(
        null,
        "",
        url
      );

    }


    function ligarSub(){

      var s =
        document.getElementById(
          "subfiltros"
        );


      if(!s){
        return;
      }


      s.addEventListener(
        "click",
        function(e){

          var b =
            e.target.closest("button");


          if(!b){
            return;
          }


          atual.sub =
            b.getAttribute(
              "data-sub"
            );


          s
            .querySelectorAll("button")
            .forEach(function(x){

              x.classList.toggle(
                "on",
                x === b
              );

            });


          redesenhar();

        }
      );

    }


    f.addEventListener(
      "click",
      function(e){

        var b =
          e.target.closest("button");


        if(!b){
          return;
        }


        atual.cat =
          b.getAttribute(
            "data-cat"
          );

        atual.sub =
          "todos";


        f
          .querySelectorAll("button")
          .forEach(function(x){

            x.classList.toggle(
              "on",
              x === b
            );

          });


        document
          .getElementById("areaSub")
          .innerHTML =
          barraSubfiltros(
            atual.cat,
            atual.sub
          );


        ligarSub();

        redesenhar();

      }
    );


    ligarSub();

  }


  /* ==========================================================
     CARROSSEL DE DEPOIMENTOS
     ========================================================== */

  var depoTrack =
    document.querySelector(".depo-track");

  var depoPrev =
    document.querySelector(".depo-prev");

  var depoNext =
    document.querySelector(".depo-next");

  var depoDots =
    document.querySelectorAll(".depo-dots button");


  if(
    depoTrack &&
    depoPrev &&
    depoNext
  ){

    var depoSlides =
      depoTrack.querySelectorAll(".depo-slide");

    var depoPagina = 0;


    function atualizarDepoimentos(){

      depoTrack.style.transform =
        "translate3d(-" +
        (depoPagina * 100) +
        "%, 0, 0)";


      depoDots.forEach(
        function(dot, i){

          var ativo =
            i === depoPagina;


          dot.classList.toggle(
            "on",
            ativo
          );


          dot.setAttribute(
            "aria-current",
            ativo
              ? "true"
              : "false"
          );

        }
      );

    }


    depoNext.addEventListener(
      "click",
      function(){

        depoPagina++;

        if(
          depoPagina >=
          depoSlides.length
        ){
          depoPagina = 0;
        }

        atualizarDepoimentos();

      }
    );


    depoPrev.addEventListener(
      "click",
      function(){

        depoPagina--;

        if(depoPagina < 0){

          depoPagina =
            depoSlides.length - 1;

        }

        atualizarDepoimentos();

      }
    );


    depoDots.forEach(
      function(dot){

        dot.addEventListener(
          "click",
          function(){

            depoPagina =
              parseInt(
                dot.getAttribute(
                  "data-depo-page"
                ),
                10
              ) || 0;


            atualizarDepoimentos();

          }
        );

      }
    );


    atualizarDepoimentos();

  }

}


/* ============================================================
   REVEALS + CONTADORES
   ============================================================ */

function countUp(el){

  var target =
    parseFloat(
      el.getAttribute(
        "data-count"
      )
    );


  if(
    el.getAttribute(
      "data-plain"
    )
  ){
    return;
  }


  var suffix =
    el.getAttribute(
      "data-suffix"
    ) || "";


  var start =
    performance.now();

  var dur =
    1100;


  function step(t){

    var k =
      Math.min(
        1,
        (t-start) / dur
      );


    var v =
      Math.round(
        target *
        (
          1 -
          Math.pow(
            1-k,
            3
          )
        )
      );


    el.textContent =
      suffix === "M+"
        ? v + " milhões"
        : v;


    if(k < 1){

      requestAnimationFrame(
        step
      );

    }else{

      el.textContent =
        suffix === "M+"
          ? "+150 milhões"
          : target;

    }

  }


  requestAnimationFrame(
    step
  );

}


function observe(){

  document
    .documentElement
    .classList
    .add("anima");


  var io =
    new IntersectionObserver(
      function(entries){

        entries.forEach(
          function(en){

            if(
              !en.isIntersecting
            ){
              return;
            }


            en.target
              .classList
              .add("in");


            en.target
              .querySelectorAll(
                "[data-count]"
              )
              .forEach(
                countUp
              );


            io.unobserve(
              en.target
            );

          }
        );

      },
      {
        threshold:0,
        rootMargin:
          "0px 0px -8% 0px"
      }
    );


  document
    .querySelectorAll(
      ".reveal"
    )
    .forEach(
      function(el){

        io.observe(el);

      }
    );


  setTimeout(
    function(){

      document
        .querySelectorAll(
          ".reveal:not(.in)"
        )
        .forEach(
          function(el){

            if(
              el
                .getBoundingClientRect()
                .top
              <
              innerHeight
            ){

              el
                .classList
                .add("in");

            }

          }
        );

    },
    1200
  );

}


/* ============================================================
   MENU
   ============================================================ */

var burger =
  document.getElementById("burger");


if(burger){

  burger.addEventListener(
    "click",
    function(){

      var menu =
        document.getElementById("menu");

      if(menu){
        menu.classList.toggle("open");
      }

    }
  );

}


window.addEventListener(
  "hashchange",
  render
);


render();


/* ============================================================
   MODO VISUAL
   ============================================================ */

(function(){

  if(
    !/[?&]visual=1/.test(
      location.search
    )
  ){
    return;
  }


  var CONTROLES = [

    {
      g:"Cores"
    },

    {
      v:"--paper",
      r:"Fundo da página",
      t:"cor"
    },

    {
      v:"--surface",
      r:"Fundo dos cartões",
      t:"cor"
    },

    {
      v:"--surface-2",
      r:"Fundo secundário",
      t:"cor"
    },

    {
      v:"--ink",
      r:"Texto principal",
      t:"cor"
    },

    {
      v:"--ink-soft",
      r:"Texto de apoio",
      t:"cor"
    },

    {
      v:"--muted",
      r:"Texto discreto",
      t:"cor"
    },

    {
      v:"--line",
      r:"Linhas e bordas",
      t:"cor"
    },

    {
      v:"--magenta",
      r:"Cor de destaque",
      t:"cor"
    },

    {
      g:"Forma"
    },

    {
      v:"--canto",
      r:"Curva grande",
      t:"px",
      min:0,
      max:240,
      passo:2
    },

    {
      v:"--canto-sm",
      r:"Curva média",
      t:"px",
      min:0,
      max:120,
      passo:2
    },

    {
      v:"--r",
      r:"Cantos dos botões",
      t:"px",
      min:0,
      max:32,
      passo:1
    },

    {
      g:"Espaço"
    },

    {
      v:"--maxw",
      r:"Largura do conteúdo",
      t:"px",
      min:900,
      max:1600,
      passo:20
    },

    {
      v:"--pad-secao",
      r:"Respiro das seções",
      t:"px",
      min:32,
      max:180,
      passo:4
    },

    {
      g:"Tipografia"
    },

    {
      v:"--esc-h1",
      r:"Tamanho do título",
      t:"px",
      min:28,
      max:88,
      passo:1
    },

    {
      v:"--esc-h2",
      r:"Tamanho dos subtít.",
      t:"px",
      min:20,
      max:60,
      passo:1
    },

    {
      v:"--esc-corpo",
      r:"Tamanho do texto",
      t:"px",
      min:14,
      max:22,
      passo:1
    }

  ];


  var raiz =
    document.documentElement;


  var salvos = {};


  try{

    salvos =
      JSON.parse(
        localStorage.getItem(
          "brolo-visual"
        ) || "{}"
      );

  }catch(e){}


  function lerAtual(v){

    return (
      salvos[v] ||
      getComputedStyle(
        raiz
      )
      .getPropertyValue(v) ||
      ""
    ).trim();

  }


  function aplicar(v, valor){

    raiz.style.setProperty(
      v,
      valor
    );


    salvos[v] =
      valor;


    localStorage.setItem(
      "brolo-visual",
      JSON.stringify(
        salvos
      )
    );

  }


  Object
    .keys(salvos)
    .forEach(
      function(v){

        raiz.style.setProperty(
          v,
          salvos[v]
        );

      }
    );


  var css =
    document.createElement(
      "style"
    );


  css.textContent =

    "#vis{"+
      "position:fixed;"+
      "top:0;"+
      "right:0;"+
      "bottom:0;"+
      "width:310px;"+
      "z-index:999;"+
      "background:#141519;"+
      "color:#EDEBE7;"+
      "font-family:Poppins,Verdana,sans-serif;"+
      "overflow-y:auto;"+
      "box-shadow:-14px 0 40px rgba(0,0,0,.34);"+
      "transform:translateX(310px);"+
      "transition:transform .25s ease"+
    "}"+

    "#vis.on{transform:none}"+

    "body.vis-on{padding-right:310px}"+

    "#vis h4{"+
      "margin:0;"+
      "padding:16px 18px 12px;"+
      "font-size:.72rem;"+
      "letter-spacing:.16em;"+
      "text-transform:uppercase;"+
      "color:#8B8882;"+
      "border-bottom:1px solid #24262B"+
    "}"+

    "#vis .g{"+
      "padding:18px 18px 6px;"+
      "font-size:.66rem;"+
      "letter-spacing:.18em;"+
      "text-transform:uppercase;"+
      "color:#7E7B76"+
    "}"+

    "#vis .c{"+
      "padding:7px 18px;"+
      "display:flex;"+
      "align-items:center;"+
      "gap:10px;"+
      "justify-content:space-between"+
    "}"+

    "#vis .c label{"+
      "font-size:.83rem;"+
      "color:#C9C6C1;"+
      "flex:1"+
    "}"+

    "#vis .c input[type=color]{"+
      "width:36px;"+
      "height:26px;"+
      "border:1px solid #34373D;"+
      "background:none;"+
      "padding:0;"+
      "cursor:pointer;"+
      "border-radius:3px"+
    "}"+

    "#vis .c input[type=range]{"+
      "width:118px;"+
      "accent-color:#EC008C"+
    "}"+

    "#vis .c b{"+
      "font-size:.72rem;"+
      "color:#8B8882;"+
      "font-weight:500;"+
      "min-width:44px;"+
      "text-align:right;"+
      "font-variant-numeric:tabular-nums"+
    "}"+

    "#vis .acoes{"+
      "padding:16px 18px 26px;"+
      "display:flex;"+
      "flex-direction:column;"+
      "gap:8px;"+
      "border-top:1px solid #24262B;"+
      "margin-top:12px"+
    "}"+

    "#vis button{"+
      "padding:11px 14px;"+
      "border:1px solid #34373D;"+
      "background:#1D1F24;"+
      "color:#EDEBE7;"+
      "font:inherit;"+
      "font-size:.84rem;"+
      "font-weight:600;"+
      "border-radius:3px;"+
      "cursor:pointer"+
    "}"+

    "#vis button:hover{background:#26282E}"+

    "#vis .primario{"+
      "background:#EDEBE7;"+
      "color:#141519;"+
      "border-color:#EDEBE7"+
    "}"+

    "#vis .primario:hover{background:#fff}"+

    "#visAba{"+
      "position:fixed;"+
      "top:50%;"+
      "right:0;"+
      "transform:translateY(-50%);"+
      "z-index:1000;"+
      "background:#141519;"+
      "color:#fff;"+
      "border:0;"+
      "padding:14px 9px;"+
      "writing-mode:vertical-rl;"+
      "font:inherit;"+
      "font-size:.72rem;"+
      "font-weight:600;"+
      "letter-spacing:.14em;"+
      "text-transform:uppercase;"+
      "cursor:pointer;"+
      "border-radius:3px 0 0 3px"+
    "}"+

    "#visSaida{"+
      "position:fixed;"+
      "inset:0;"+
      "z-index:1001;"+
      "background:rgba(10,11,13,.86);"+
      "display:none;"+
      "padding:5vh 4vw"+
    "}"+

    "#visSaida.on{display:block}"+

    "#visSaida textarea{"+
      "width:100%;"+
      "height:100%;"+
      "background:#0E0F12;"+
      "color:#DDD9D3;"+
      "border:1px solid #2A2D33;"+
      "padding:18px;"+
      "font-family:ui-monospace,Consolas,monospace;"+
      "font-size:.82rem;"+
      "line-height:1.6;"+
      "resize:none"+
    "}";


  document.head.appendChild(
    css
  );


  var painel =
    document.createElement(
      "aside"
    );


  painel.id =
    "vis";


  var html =
    '<h4>Modo visual</h4>';


  CONTROLES.forEach(
    function(c,i){

      if(c.g){

        html +=
          '<div class="g">'+
            c.g+
          '</div>';

        return;

      }


      var atual =
        lerAtual(c.v);


      if(c.t === "cor"){

        html += ''+

          '<div class="c">'+

            '<label for="v'+i+'">'+
              c.r+
            '</label>'+

            '<input type="color" id="v'+i+'" data-var="'+c.v+'" value="'+paraHex(atual)+'">'+

          '</div>';

      }else{

        var n =
          parseFloat(atual) ||
          c.min;


        html += ''+

          '<div class="c">'+

            '<label for="v'+i+'">'+
              c.r+
            '</label>'+

            '<input type="range" id="v'+i+'" data-var="'+c.v+'" data-un="px" min="'+c.min+'" max="'+c.max+'" step="'+c.passo+'" value="'+n+'">'+

            '<b id="b'+i+'">'+
              Math.round(n)+
              'px'+
            '</b>'+

          '</div>';

      }

    }
  );


  html += ''+

    '<div class="acoes">'+

      '<button class="primario" id="visCopiar">'+
        'Copiar meus ajustes'+
      '</button>'+

      '<button id="visZerar">'+
        'Voltar ao original'+
      '</button>'+

    '</div>';


  painel.innerHTML =
    html;


  document.body.appendChild(
    painel
  );


  var aba =
    document.createElement(
      "button"
    );


  aba.id =
    "visAba";

  aba.textContent =
    "Visual";


  document.body.appendChild(
    aba
  );


  var saida =
    document.createElement(
      "div"
    );


  saida.id =
    "visSaida";


  saida.innerHTML =
    '<textarea readonly></textarea>';


  document.body.appendChild(
    saida
  );


  function paraHex(v){

    v =
      (v || "").trim();


    if(
      /^#[0-9a-f]{6}$/i.test(v)
    ){
      return v;
    }


    if(
      /^#[0-9a-f]{3}$/i.test(v)
    ){

      return ''+
        '#'+
        v[1]+v[1]+
        v[2]+v[2]+
        v[3]+v[3];

    }


    var d =
      document.createElement(
        "div"
      );


    d.style.color =
      v;


    document.body.appendChild(
      d
    );


    var rgb =
      getComputedStyle(d)
        .color
        .match(/\d+/g);


    d.remove();


    if(!rgb){
      return "#000000";
    }


    return ''+
      '#'+

      rgb
        .slice(0,3)
        .map(function(n){

          return (
            "0"+
            parseInt(n,10)
              .toString(16)
          ).slice(-2);

        })
        .join("");

  }


  painel.addEventListener(
    "input",
    function(e){

      var alvo =
        e.target;

      var v =
        alvo.getAttribute(
          "data-var"
        );


      if(!v){
        return;
      }


      if(
        alvo.type === "color"
      ){

        aplicar(
          v,
          alvo.value
        );

      }else{

        aplicar(
          v,
          alvo.value + "px"
        );


        var b =
          document.getElementById(
            "b" +
            alvo.id.slice(1)
          );


        if(b){

          b.textContent =
            alvo.value +
            "px";

        }

      }

    }
  );


  aba.addEventListener(
    "click",
    function(){

      painel
        .classList
        .toggle("on");


      document.body
        .classList
        .toggle(
          "vis-on",
          painel
            .classList
            .contains("on")
        );

    }
  );


  document
    .getElementById(
      "visZerar"
    )
    .addEventListener(
      "click",
      function(){

        Object
          .keys(salvos)
          .forEach(
            function(v){

              raiz.style
                .removeProperty(v);

            }
          );


        salvos = {};


        localStorage.removeItem(
          "brolo-visual"
        );


        location.reload();

      }
    );


  document
    .getElementById(
      "visCopiar"
    )
    .addEventListener(
      "click",
      function(){

        var linhas =
          Object
            .keys(salvos)
            .map(function(v){

              return ''+
                "  "+
                v+
                ": "+
                salvos[v]+
                ";";

            });


        var texto =

          linhas.length

          ? ''+
            '/* Ajustes do modo visual — cole aqui no chat que eu aplico no site */\n'+
            ':root{\n'+
            linhas.join("\n")+
            '\n}'

          : 'Nenhum ajuste feito ainda.';


        var ta =
          saida.querySelector(
            "textarea"
          );


        ta.value =
          texto;


        saida
          .classList
          .add("on");


        ta.select();


        try{

          document.execCommand(
            "copy"
          );

        }catch(e){}

      }
    );


  saida.addEventListener(
    "click",
    function(e){

      if(
        e.target === saida
      ){

        saida
          .classList
          .remove("on");

      }

    }
  );

})();