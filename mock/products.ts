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
    composition:["des trucs"],
    similaires:[1,2]
},{
    id:1,
    name:"chips",
    prix:25,
    img:require('../assets/images/chips.png'),
    nutriscore:0,
    apport:[
    {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
],
    composition:["des trucs"],
    similaires:[0,2]
},{
    name:"chips",
    id:2,
    prix:25,
    img:require('../assets/images/chips.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[0,1]
}
];


export const similairesList :any[] =[{
    productId:0,
    similairesId:[
        2
    ]
},{
    productId:1,
    similaireId:[

    ]
},{
    productId:2,
    similairesId:[
        0,1
    ]
}];

export const salesProducts : salesproduct[] =[{
    id:0,
    name:"Viande",
    prix:25,
    img:require('../assets/images/pngegg.png'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["Test"],
    similaires:[1,2]
},{
    id:1,
    name:"Chocolat",
    prix:25,
    img:require('../assets/images/chocolat.png'),
    nutriscore:0,
    apport:[
    {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
],
    composition:["des trucs"],
    similaires:[0,2]
},{
    name:"Pâtes Barilla",
    id:2,
    prix:25,
    img:require('../assets/images/pates.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[0,1]
},{
    name:"6 Pack Coca-cola",
    id:2,
    prix:25,
    img:require('../assets/images/coca.jpeg'),
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[0,1]
}
];