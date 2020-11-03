let pokeEntrees =
    [
        [
            "pokeSnack/essai1.jpg",
            "La salade herbizarre",
            "",
            "pokeSnack/pokesalade.jpg",
            "Il ne faut pas en manger beaucoup ou vous vous sentirez tout bizarre !",
            "4.99"
        ],
        [
            "pokeSnack/essai1.jpg",
            "Poke Snacks Surprises mother fucker ! !",
            "",
            "pokeSnack/produitpokeball/pokeball1.png",
            "Ce qu'il y a à l'intérieur est un secret jusqu'à ce que vous arriviez ! Venez voir",
            "6.49"
        ]

    ]
let pokePlats =
    [
        [
            "pokeSnack/essai1.jpg",
            "Le repas de Pikachu",
            "",
            "pokeSnack/produitpika/slidepika.png",
            "Un autre joli visage de Pikachu apparaît lorsque vous avez fini de manger !",
            "9.99"
        ],
        [
            "pokeSnack/essai1.jpg",
            "Le repas d'évoli",
            "produitevoli",
            "pokeSnack/produitevoli/evoli.png",
            "Un repas d'évoli populaire qui est maintenant plus grand que jamais !",
            "9.99"
        ],
        [
            "pokeSnack/essai1.jpg",
            "Le repas de Ronflex",
            "article-100",
            "pokeSnack/produitronflex/ronflex.png",
            " Remplissez votre ventre ! Deviendrez-vous somnolent comme Ronflex ?",
            "12.99"
        ]
    ]

let pokeDesserts =
    [
        [
            "pokeSnack/essai1.jpg",
            "Crêpes aux fruits Pokémon Cafe",
            "article-100",
            "pokeSnack/produitcrepe/crepes.png",
            " Dégustez des crêpes originales avec une garniture de fruits abondante.",
            "15.99"
        ]
    ]




let mugs =
    [
        [
            "mug",
            "Le BulbiMug",
            "bulbimug",
            "pokemug/bulbiMug.jpg",
            "Un Mug bizarre et original, bulbizar ré-haussera vos thés",
            "14,99"
        ],
        [
            "mug",
            'Le "NANI" mug',
            "nanimug",
            "pokemug/naniMug.jpg",
            "Rien de mieux pour exprimer votre surprise à un nippon comme Pikachu !",
            "9,99"
        ],
        [
            "mug",
            "Le PokeBall mug",
            "pokeballmug",
            "pokemug/pokeMug.jpg",
            "Stocker votre boisson chaud... Attraper les Tous !",
            "12,99"
        ]
    ]
    let coffees =
    [
        [
            "coffee",
            "Le Bulbathée",
            "bulbathee",
            "bulbizarre.png",
            "Un thé sulfureux où votre palais s'émerveillera des saveurs d'orient",
            "14,99"
        ],
        [
            "coffee",
            'Le Théffroi',
            "theffroi",
            "coffee/theffroi.png",
            "Son amerturne éffroi certain, d'autre en redemande !",
            "9,99"
        ],
        [
            "coffee",
            "Le Pikoffee",
            "pikoffee",
            "coffee/pikoffee.png",
            "Démarrer votre journer par un bon coup de jus, PIKACHUUUUUUU !",
            "12,99"
        ],
        [
            "coffee",
            "Le Pikachino",
            "pikachino",
            "slider7.jpg",
            "Picachu développe d'autres attaques foudroyantes sur votre palais !",
            "12,99"
        ],
        [
            "coffee",
            "Le Pikafrappé",
            "pikafrappe",
            "coffee/pikafrappe.png",
            "Pour calmer vos hardeur de l'étincelle sur glace rafréchira vos neurones !",
            "12,99"
        ]
    ]

let carteTable = (i, ele) => `<table id="carte${i}" width="280" height="400" align="center" background="${ele[0]}">
<thead valign=top>
<tr>
    <th rowspan="2" width=6 ></th> 
    <th colspan="3" height=1>
        <font size="1" height=1>
            <h2 align="left">${ele[1]}</h2>
        </font>
    </th>
    <th rowspan="2" width=6 ></th >
</tr >
<tr height="160">
    <th colspan="4" valign=center colspan="2" height=1 >
        <!-- <th valign = center  height="200"> -->
        <a href="${ele[2]}.html">
            <img width="240" height="150" src="${ele[3]}" alt="" >

        </a>
    </th>

</tr>
</thead>
<tbody>
<tr>
    <td rowspan="2"></td>
    <td rowspan="2" width=25></td>
    <td rowspan="1" valign = baseline align = center width=150 height=100>
        
            <p align=left ><font size="3"  >${ele[4]} <a href="${ele[2]}.html"><br>[voir plus...]</font></p>
        
    </td>
    
    <td width=6 rowspan = "1"  colspan = "2" align = center >
        <font size="2">
            <h3 >${ele[5]}&euro;</h3>
            
        </font>
        <br>
    </td>
</tr>
<tr>
    <td colspan="2" valign=top align= right>
        <form action="../form/commander.html" method="get">
        <input type="hidden" name="${ele[2]}">
            <input type="submit" value="Achetez">&nbsp;  
        </form>
    </td>
</tr>
</tbody>
</table>`
let carte = (i, ele, stored = false) => `${ stored ? `<div><input type="radio" id="${ele[2]}" name="good_input">`:""}<article id="entree${i}" class="all ${ele[0]} ${ele[2]}">
<header>
    <h4>${ele[1]}</h4>
    ${stored ? `<label class="store-good-clicking ${ele[2]}" for="${ele[2]}" ` : `<a ${ele[2]}" href="/img/${ele[3]}" target="_blank" `} style="background:url('/img/${ele[3]} ') no-repeat center / contain ;">
    ${stored ? `</label>` : `</a>` }
    
</header>
<main>
    <p>${ele[4]}</p>
</main>
<footer>
    <div>Prix :<span class="btn-gradient">${ele[5]}€</span>
    </div>
    ${ stored ? `<form action="/form/commander.html">
    <input type="hidden" name="id" value="${ele[2] + i}">
    <input type="submit" value="Commander" class="btn-gradient">
</form>`:""}
</footer>
</article>
${ stored ? `</div>`:""}`
let carteCheckbox = (i,ele) => `<input type="radio" id="${ele[2]}" name="good_input">`
let fabrique = (tab, funcBuilder, label = false) => {

    tab.length

    let liste = ""

    tab.forEach((ele, i) => {

        liste += funcBuilder(i, ele, label)

    });

    return liste
}

// document.querySelectorAll(".lesCartes").forEach(x => x.insertAdjacentHTML('afterbegin', fabrique(mugs)))
document.querySelectorAll("#menu .entrees").forEach(x => x.insertAdjacentHTML('beforeend', fabrique(pokeEntrees, carte)))
document.querySelectorAll("#menu .plats").forEach(x => x.insertAdjacentHTML('beforeend', fabrique(pokePlats, carte)))
document.querySelectorAll("#menu .desserts").forEach(x => x.insertAdjacentHTML('beforeend', fabrique(pokeDesserts, carte)))
document.querySelectorAll("#store .goods").forEach(x => x.insertAdjacentHTML('beforeend', fabrique(mugs, carte, true)))
document.querySelectorAll("#store .goods").forEach(x => x.insertAdjacentHTML('beforeend', fabrique(coffees, carte, true)))

