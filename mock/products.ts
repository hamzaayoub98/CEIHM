import {product} from "../types";

export const productsList : product[] =[{
    id:0,
    name:"chips",
    prix:25,
    img:'../assets/images/chips.png',
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
    img:'../assets/images/chips.png',
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
    img:'../assets/images/chips.png',
    nutriscore:0,
    apport:[
        {'calories':700},{'sucres':'60gr'},{'sel':'10gr'},{'lipides':'1gr'},
    ],
    composition:["des trucs"],
    similaires:[0,1]
}
];
