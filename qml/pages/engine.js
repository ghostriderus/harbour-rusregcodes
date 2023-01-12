var regindexnum, regioncode, trpl, z//, zz

function digitPressed (number) {
    if (regionumeric.text.length < 2) {
        regionumeric.text = regionumeric.text + number ;
    } else if (regionumeric.text.length === 2){
        z = regionumeric.text + number;
        //zz = trpl.indexOf(z);
        if (trpl.indexOf(z) !== -1) {
            regionumeric.text = z
        }
        else {
            regionumeric.text = number;
        }
    }   else {
        regionumeric.text = number;
    }

}

//function regionVisible () {
//    regindexnum = "r" + regionumeric.text);
//    regionlabel.text = regioncode[regindexnum];
//}
function regionVisible () {
    regindexnum = "r" + regionumeric.text;
    regionlabel.text = regioncode[regindexnum];
}
function regionVisibleUA () {
    regindexnum = "r" + regionumeric.text.toLowerCase();
    regionlabel.text = regioncodeUA[regindexnum];
}
function regionVisibleBY () {
    regindexnum = "r" + regionumeric.text.toLowerCase();
    regionlabel.text = regioncodeBY[regindexnum];
}

trpl = "102, 103, 113, 116, 121, 123, 124, 125, 126, 134, 136, 138, 142, 147, 150, 152, 154, 156, 159, " +
    "161, 163, 164, 172, 173, 174, 177, 178, 186, 190, 193, 196, 197, 199, 277, 299, 702, 716, 725, 750, " +
    "761, 763, 774, 777, 790, 797, 799"

regioncode = {
    r00: "¯\\_(ツ)_/¯",
    r: "...",
    r0: "...",
    r1: "...",
    r2: "...",
    r3: "...",
    r4: "...",
    r5: "...",
    r6: "...",
    r7: "...",
    r8: "...",
    r9: "...",
    r01: "Республика Адыгея",
    r02: "Республика Башкортостан",
    r03: "Республика Бурятия",
    r04: "Республика Алтай (Горный Алтай)",
    r05: "Республика Дагестан",
    r06: "Республика Ингушетия",
    r07: "Кабардино-Балкарская Республика",
    r08: "Республика Калмыкия",
    r09: "Республика Карачаево-Черкессия",
    r10: "Республика Карелия",
    r11: "Республика Коми",
    r12: "Республика Марий Эл",
    r13: "Республика Мордовия",
    r14: "Республика Саха (Якутия)",
    r15: "Республика Северная Осетия — Алания",
    r16: "Республика Татарстан",
    r17: "Республика Тыва",
    r18: "Удмуртская Республика",
    r19: "Республика Хакасия",
    r20: "Утилизировано(бывш. Чечня)",
    r21: "Чувашская Республика",
    r22: "Алтайский край",
    r23: "Краснодарский край",
    r24: "Красноярский край",
    r25: "Приморский край",
    r26: "Ставропольский край",
    r27: "Хабаровский край",
    r28: "Амурская область",
    r29: "Архангельская область",
    r30: "Астраханская область",
    r31: "Белгородская область",
    r32: "Брянская область",
    r33: "Владимирская область",
    r34: "Волгоградская область",
    r35: "Вологодская область",
    r36: "Воронежская область",
    r37: "Ивановская область",
    r38: "Иркутская область",
    r39: "Калининградская область",
    r40: "Калужская область",
    r41: "Камчатский край",
    r42: "Кемеровская область",
    r43: "Кировская область",
    r44: "Костромская область",
    r45: "Курганская область",
    r46: "Курская область",
    r47: "Ленинградская область",
    r48: "Липецкая область",
    r49: "Магаданская область",
    r50: "Московская область",
    r51: "Мурманская область",
    r52: "Нижегородская область",
    r53: "Новгородская область",
    r54: "Новосибирская область",
    r55: "Омская область",
    r56: "Оренбургская область",
    r57: "Орловская область",
    r58: "Пензенская область",
    r59: "Пермский край",
    r60: "Псковская область",
    r61: "Ростовская область",
    r62: "Рязанская область",
    r63: "Самарская область",
    r64: "Саратовская область",
    r65: "Сахалинская область",
    r66: "Свердловская область",
    r67: "Смоленская область",
    r68: "Тамбовская область",
    r69: "Тверская область",
    r70: "Томская область",
    r71: "Тульская область",
    r72: "Тюменская область",
    r73: "Ульяновская область",
    r74: "Челябинская область",
    r75: "Забайкальский край",
    r76: "Ярославская область",
    r77: "г. Москва",
    r78: "г. Санкт-Петербург",
    r79: "Еврейская АО",
    r80: "Забайкальский край",
    r81: "Пермский край",
    r82: "Республика Крым (и др.)",
    r83: "Ненецкий АО",
    r84: "Красноярский край",
    r85: "Иркутская область",
    r86: "Ханты-Мансийский АО — Югра",
    r87: "Чукотский АО",
    r88: "Красноярский край",
    r89: "Ямало-Ненецкий АО",
    r90: "Московская область",
    r91: "Калининградская область",
    r92: "г. Севастополь",
    r93: "Краснодарский край",
    r94: "г. Байконур",
    r95: "Чеченская республика",
    r96: "Свердловская область",
    r97: "г. Москва",
    r98: "г. Санкт-Петербург",
    r99: "г. Москва",
    r102: "Республика Башкортостан",
    r103: "Республика Бурятия",
    r113: "Республика Мордовия",
    r116: "Республика Татарстан",
    r121: "Чувашская республика",
    r123: "Краснодарский край",
    r124: "Красноярский край",
    r125: "Приморский край",
    r126: "Ставропольский край",
    r134: "Волгоградская область",
    r136: "Воронежская область",
    r138: "Иркутская область",
    r142: "Кемеровская область",
    r147: "Ленинградская область",
    r150: "Московская область",
    r152: "Нижегородская область",
    r154: "Новосибирская область",
    r156: "Оренбургская область",
    r159: "Пермский край",
    r161: "Ростовская область",
    r163: "Самарская область",
    r164: "Саратовская область",
    r172: "Тюменская область",
    r173: "Ульяновская область",
    r174: "Челябинская область",
    r177: "г. Москва",
    r178: "г. Санкт-Петербург",
    r186: "Ханты-Мансийский АО — Югра",
    r190: "Московская область",
    r193: "Краснодарский край",
    r196: "Свердловская область",
    r197: "г. Москва",
    r199: "г. Москва",
    r277: "г. Москва",
    r299: "г. Москва",
    r702: "Республика Башкортостан",
    r716: "Республика Татарстан",
    r725: "Приморский край",
    r750: "Московская область",
    r761: "Ростовская область",
    r763: "Самарская область",
    r774: "Челябинская область",
    r777: "г. Москва",
    r790: "Московская область",
    r797: "г. Москва",
    r799: "г. Москва",
}

var regioncodeBY = {
    r: "...",
    r0: "ВВ МВД, МО, ГПК",
    r1: "Брестская область",
    raxx: "Брестская область",
    r2: "Витебская область",
    rbxx: "Витебская область",
    r3: "Гомельская область",
    rexx: "Гомельская область",
    r4: "Гродненская область",
    rcxx: "Гродненская область",
    r5: "Минская область",
    roxx: "Минская область",
    r6: "Могилёвская область",
    rtxx: "Могилёвская область",
    r7: "г. Минск",
    rmxx: "г. Минск",
    raax: "г. Минск",
    reak: "г. Минск"
}

function digitPressedBY (number) {
    if (number !== "8" && number !== "9" && number !== "*" && number !== "#"){
        regionumeric.text = number
    } else {
        regionumeric.text = ""
    }
}
function longPressedBY (number) {
    if (number ==="0"){
        regionumeric.text = "0"
    } else if (number === "1"){
        regionumeric.text = "Axx"
    } else if (number === "2"){
        regionumeric.text = "Bxx"
    } else if (number === "3"){
        regionumeric.text = "Exx"
    } else if (number === "4"){
        regionumeric.text = "Cxx"
    } else if (number === "5"){
        regionumeric.text = "Oxx"
    } else if (number === "6"){
        regionumeric.text = "Txx"
    } else if (number === "7"){
        regionumeric.text = "Mxx"
    } else if (number === "8"){
        regionumeric.text = "AAX"
    } else if (number === "9"){
        regionumeric.text = "EAK"
    }
}

function digitPressedUA(number){
    if ((regionumeric.text.length === 0 || regionumeric.text.length === 2) && ("1, 5, 2, 7, 4, *".indexOf(number) !== -1)){
        regionumeric.text = returnLetter(number)
    } else if (regionumeric.text.length === 1 && isNaN(regionumeric.text)){
        if ((uacodestr.indexOf(regionumeric.text + returnLetter(number))) !== -1){
            regionumeric.text += returnLetter(number)
        } else {return}
    }
}
function returnLetter(number) {
    switch(number){
    case "0": return "T"
    case "1": return "A"
    case "2": return "B"
    case "3": return "E"
    case "4": return "I"
    case "5": return "K"
    case "6": return "M"
    case "7": return "H"
    case "8": return "O"
    case "9": return "P"
    case "*": return "C"
    case "#": return "X"
    }
}
function longPressedUA(number){
    if ((regionumeric.text.length === 0 || regionumeric.text.length === 2) && (number === "0" || number === "1" || number === "2")){
        regionumeric.text = number
    } else if (regionumeric.text.length === 1 && !isNaN(regionumeric.text) && !isNaN(number)){
        if (regionumeric.text === "2" && number === "9"){
            return
        } else {
            regionumeric.text += number
        }
    }
}
var uacodestr = "AK,KK,AB,KB,AC,KC,AE,KE,AH,KH,AM,KM,AO,KO,AP,KP,AT,KT,AA,KA,CI,AI,KI,BA,HA,BB,HB,BC,HC,BE,HE,BH,HH,BI,HI,BK,HK,CH,IH,BM,HM,BO,HO,AX,KX,BT,HT,BX,HX,CA,IA,CB,IB,CE,IE,II"
var regioncodeUA = {
    r00: "¯\\_(ツ)_/¯",
    r: "...",
    r0: "...",
    r1: "...",
    r2: "...",
    r3: "...",
    r4: "...",
    r5: "...",
    r6: "...",
    r7: "...",
    r8: "...",
    r9: "...",
    ra: "...",
    rb: "...",
    ri: "...",
    rk: "...",
    rh: "...",
    rc: "...",
    r01: "АР Крым",
    rak: "АР Крым",
    rkk: "АР Крым",
    r02: "Винницкaя облacть",
    rab: "Винницкaя облacть",
    rkb: "Винницкaя облacть",
    r03: "Вoлынскaя облacть",
    rac: "Вoлынскaя облacть",
    rkc: "Вoлынскaя облacть",
    r04: "Днeпpoпетровская обл.",
    rae: "Днeпpoпетровская обл.",
    rke: "Днeпpoпетровская обл.",
    r05: "Дoнeцкaя облacть",
    rah: "Дoнeцкaя облacть",
    rkh: "Дoнeцкaя облacть",
    r06: "Житoмиpcкaя облacть",
    ram: "Житoмиpcкaя облacть",
    rkm: "Житoмиpcкaя облacть",
    r07: "Закapпатскaя облacть",
    rao: "Закapпатскaя облacть",
    rko: "Закapпатскaя облacть",
    r08: "Запopoжская облacть",
    rap: "Запopoжская облacть",
    rkp: "Запopoжская облacть",
    r09: "Ивaно-Фpaнковская обл.",
    rat: "Ивaно-Фpaнковская обл.",
    rkt: "Ивaно-Фpaнковская обл.",
    r11: "Kиeв",
    raa: "Kиeв",
    rka: "Kиeв",
    rci: "Kиeв",
    r10: "Kиeвскaя облacть",
    rai: "Kиeвскaя облacть",
    rki: "Kиeвскaя облacть",
    r12: "Kировoгpaдская облacть",
    rba: "Kировoгpaдская облacть",
    rha: "Kировoгpaдская облacть",
    r13: "Лугaнскaя облacть",
    rbb: "Лугaнскaя облacть",
    rhb: "Лугaнскaя облacть",
    r14: "Львoвскaя облacть",
    rbc: "Львoвскaя облacть",
    rhc: "Львoвскaя облacть",
    r15: "Никoлaeвская облacть",
    rbe: "Никoлaeвская облacть",
    rhe: "Никoлaeвская облacть",
    r16: "Одeccкая облacть",
    rbh: "Одeccкая облacть",
    rhh: "Одeccкая облacть",
    r17: "Полтaвcкая облacть",
    rbi: "Полтaвcкая облacть",
    rhi: "Полтaвcкая облacть",
    r18: "Poвенская облacть",
    rbk: "Poвенская облacть",
    rhk: "Poвенская облacть",
    r27: "г. Ceвaстoполь",
    rch: "г. Ceвaстoполь",
    rih: "г. Ceвaстoполь",
    r19: "Cумcкaя облacть",
    rbm: "Cумcкaя облacть",
    rhm: "Cумcкaя облacть",
    r20: "Tepнопoльскaя облacть",
    rbo: "Tepнопoльскaя облacть",
    rho: "Tepнопoльскaя облacть",
    r21: "Xaрькoвскaя облacть",
    rax: "Xaрькoвскaя облacть",
    rkx: "Xaрькoвскaя облacть",
    r22: "Xeрсoнская облacть",
    rbt: "Xeрсoнская облacть",
    rht: "Xeрсoнская облacть",
    r23: "Xмeльницкая облacть",
    rbx: "Xмeльницкая облacть",
    rhx: "Xмeльницкая облacть",
    r24: "Чepкaсская облacть",
    rca: "Чepкaсская облacть",
    ria: "Чepкaсская облacть",
    r25: "Чeрнигoвскaя облacть",
    rcb: "Чeрнигoвскaя облacть",
    rib: "Чeрнигoвскaя облacть",
    r26: "Чepновицкaя облacть",
    rce: "Чepновицкaя облacть",
    rie: "Чepновицкaя облacть",
    r28: "Общегосудapственный",
    rii: "Общегосудapственный"
}
