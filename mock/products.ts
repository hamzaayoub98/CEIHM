import {product} from "../types";
import {salesproduct} from "../types";

export const productsList : product[] =[{
    id:0,
    name:"chips",
    prix:25,
    img:require('../assets/images/chips.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["Pomme de terre, huile , sel"],
    similaires:[1]
},{
    id:1,
    name:"Gateaux apperitifs",
    prix:25,
    img:require('../assets/images/monaco.jpeg'),
    nutriscore:0,
    apport:[
    {'calories':300},{'sucres':'10gr'},{'sel':'30gr'},{'lipides':'12gr'},
],
    composition:["farine, fromage, sel, huile"],
    similaires:[0]
},{
    name:"Ketchup",
    id:2,
    prix:25,
    img:require('../assets/images/ketchup.jpg'),
    nutriscore:0,
    apport:[
        {'calories':400},{'sucres':'80gr'},{'sel':'5gr'},{'lipides':'0gr'},
    ],
    composition:["Tomates, vinaigre, sucre"],
    similaires:[]
},{
    id:3,
    name:"Viande",
    prix:25,
    img:require('../assets/images/pngegg.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["Test"],
    similaires:[]
},{
    id:4,
    name:"Chocolat",
    prix:25,
    img:require('../assets/images/chocolat.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[]
},{
    name:"Pâtes Barilla",
    id:5,
    prix:25,
    img:require('../assets/images/pates.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[]
},{
    name:"6 Pack Coca-cola",
    id:6,
    prix:25,
    img:require('../assets/images/coca.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[]
}
];




export const salesProducts : salesproduct[] =[{
    id:3,
    name:"Viande",
    prix:25,
    img:require('../assets/images/pngegg.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["Test"],
    similaires:[]
},{
    id:4,
    name:"Chocolat",
    prix:25,
    img:require('../assets/images/chocolat.png'),
    nutriscore:0,
    apport:[
    {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
],
    composition:["des trucs"],
    similaires:[]
},{
    name:"Pâtes Barilla",
    id:5,
    prix:25,
    img:require('../assets/images/pates.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[]
},{
    name:"6 Pack Coca-cola",
    id:6,
    prix:25,
    img:require('../assets/images/coca.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[]
}
];
