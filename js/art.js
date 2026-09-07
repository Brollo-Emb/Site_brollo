var _uid = 0;
var PAL = {
  kraft:  {f:"#DEB98C", f2:"#C89B62", s:"#B98F58", fold:"#CFA778", crease:"#A87C45", ink:"#4A3418"},
  branco: {f:"#FBF9F6", f2:"#EDE9E2", s:"#DFDAD1", fold:"#F2EEE7", crease:"#CFC9BE", ink:"#1B1C1F"},
  preto:  {f:"#282A31", f2:"#1A1B20", s:"#141519", fold:"#30323A", crease:"#0E0F12", ink:"#F2F0EC"}
};

/* Desenha um mockup de embalagem. Volume vem de tres planos — frente,
   sanfona lateral e aba superior — mais sombra projetada e vincos. */
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

  /* area impressa: tarja na cor da marca do cliente + nome */
  function marca(x, y, w, size){
    /* o nome do cliente varia de tamanho: ajusta o corpo para caber na tarja */
    var cabe = (w - 10) / Math.max(t.length, 1);
    size = Math.max(6, Math.min(size, (cabe - 1.2) / 0.58));
    var h = Math.round(size * 2.3);
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+a+'"></rect>'+
      '<text x="'+(x + w/2)+'" y="'+(y + h/2 + size*0.36)+'" text-anchor="middle" '+
      'font-family="Poppins,Verdana,sans-serif" font-weight="700" font-size="'+size+'" '+
      'letter-spacing="1.2" fill="#FFFFFF">'+t+'</text>';
  }
  function linhas(x, y, w){
    return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="3" rx="1.5" fill="'+p.ink+'" opacity=".26"></rect>'+
      '<rect x="'+x+'" y="'+(y+9)+'" width="'+Math.round(w*0.62)+'" height="3" rx="1.5" fill="'+p.ink+'" opacity=".16"></rect>';
  }
  function sombra(cx, rx){
    return '<ellipse cx="'+cx+'" cy="274" rx="'+rx+'" ry="10" fill="#000000" opacity=".18" filter="url(#'+u+'b)"></ellipse>';
  }

  var s = "";

  if (shape === "saco" || shape === "mini"){
    var h  = shape === "mini" ? 128 : 196;
    var y0 = 262 - h;
    s += sombra(122, 74);
    /* sanfona lateral, recuada */
    s += '<path d="M154 '+(y0+6)+' L190 '+(y0+18)+' L190 254 L154 262 Z" fill="url(#'+u+'s)"></path>';
    /* frente */
    s += '<path d="M56 '+y0+' L154 '+(y0+6)+' L154 262 L56 262 Z" fill="url(#'+u+'f)"></path>';
    /* aba superior dobrada */
    s += '<path d="M56 '+y0+' L154 '+(y0+6)+' L154 '+(y0+22)+' L56 '+(y0+16)+' Z" fill="'+p.fold+'"></path>';
    s += '<path d="M154 '+(y0+6)+' L190 '+(y0+18)+' L190 '+(y0+32)+' L154 '+(y0+22)+' Z" fill="'+p.crease+'" opacity=".55"></path>';
    /* vinco vertical da sanfona */
    s += '<rect x="152" y="'+(y0+8)+'" width="1.5" height="'+(254-y0)+'" fill="'+p.crease+'" opacity=".45"></rect>';
    s += marca(72, y0 + (shape === "mini" ? 48 : 74), 68, 10);
    if (shape !== "mini") s += linhas(72, y0 + 124, 60);
  }

  else if (shape === "sacola"){
    s += sombra(120, 78);
    /* alcas */
    s += '<path d="M74 68 q26 -34 54 -2" fill="none" stroke="'+p.ink+'" stroke-width="5" stroke-linecap="round" opacity=".85"></path>';
    s += '<path d="M158 74 q14 -22 26 -6" fill="none" stroke="'+p.ink+'" stroke-width="4" stroke-linecap="round" opacity=".45"></path>';
    s += '<path d="M152 66 L188 78 L188 252 L152 262 Z" fill="url(#'+u+'s)"></path>';
    s += '<path d="M52 60 L152 66 L152 262 L52 262 Z" fill="url(#'+u+'f)"></path>';
    s += '<path d="M52 60 L152 66 L152 80 L52 74 Z" fill="'+p.fold+'"></path>';
    s += '<path d="M152 66 L188 78 L188 92 L152 80 Z" fill="'+p.crease+'" opacity=".5"></path>';
    s += '<rect x="150" y="68" width="1.5" height="192" fill="'+p.crease+'" opacity=".45"></rect>';
    s += marca(68, 132, 70, 11);
    s += linhas(68, 186, 62);
  }

  else if (shape === "pao"){
    s += sombra(116, 60);
    s += '<path d="M146 30 L176 42 L176 250 L146 262 Z" fill="url(#'+u+'s)"></path>';
    s += '<path d="M62 24 L146 30 L146 262 L62 262 Z" fill="url(#'+u+'f)"></path>';
    s += '<path d="M62 24 L146 30 L146 44 L62 38 Z" fill="'+p.fold+'"></path>';
    s += '<rect x="144" y="32" width="1.5" height="228" fill="'+p.crease+'" opacity=".45"></rect>';
    s += marca(76, 62, 56, 8);
    /* boca do saco: abertura sugerida na base */
    s += '<path d="M74 196 q30 -12 60 0" fill="none" stroke="'+p.crease+'" stroke-width="2" opacity=".5"></path>';
    s += linhas(76, 116, 48);
  }

  else if (shape === "talher"){
    s += sombra(112, 40);
    s += '<path d="M134 34 L156 44 L156 252 L134 262 Z" fill="url(#'+u+'s)"></path>';
    s += '<path d="M78 28 L134 34 L134 262 L78 262 Z" fill="url(#'+u+'f)"></path>';
    s += '<path d="M78 28 L134 34 L134 46 L78 40 Z" fill="'+p.fold+'"></path>';
    s += '<rect x="132" y="36" width="1.5" height="224" fill="'+p.crease+'" opacity=".45"></rect>';
    s += marca(88, 66, 36, 7);
    /* talher sugerido por dentro */
    s += '<rect x="92" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';
    s += '<rect x="102" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';
    s += '<rect x="112" y="150" width="4" height="72" rx="2" fill="'+p.ink+'" opacity=".22"></rect>';
  }

  else if (shape === "jogo"){
    s += sombra(120, 88);
    /* folha em leve perspectiva */
    s += '<path d="M26 96 L214 84 L206 244 L34 232 Z" fill="url(#'+u+'f)"></path>';
    s += '<path d="M26 96 L214 84 L214 90 L26 102 Z" fill="'+p.fold+'"></path>';
    s += '<circle cx="120" cy="162" r="38" fill="none" stroke="'+a+'" stroke-width="4"></circle>';
    s += '<text x="120" y="168" text-anchor="middle" font-family="Poppins,Verdana,sans-serif" '+
         'font-weight="700" font-size="13" letter-spacing="1" fill="'+p.ink+'">'+t+'</text>';
    s += linhas(44, 214, 56);
  }

  else if (shape === "acoplado"){
    s += sombra(120, 80);
    /* folha com canto virado */
    s += '<path d="M44 62 L196 62 L196 262 L44 262 Z" fill="url(#'+u+'f)"></path>';
    s += '<path d="M196 62 L196 262 L176 262 L176 62 Z" fill="'+p.f2+'" opacity=".5"></path>';
    s += '<path d="M44 62 L96 62 L44 114 Z" fill="'+p.fold+'"></path>';
    s += '<path d="M44 114 L96 62" fill="none" stroke="'+p.crease+'" stroke-width="1.5" opacity=".7"></path>';
    s += marca(66, 148, 108, 12);
    s += linhas(66, 204, 88);
  }

  return '<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" role="img" '+
         'aria-label="Mockup de embalagem personalizada">' + defs + s + '</svg>';
}
