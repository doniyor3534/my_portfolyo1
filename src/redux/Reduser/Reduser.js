import { Type } from "../actionType/types";
import '../../components/style.css'


const initilstate = {
    HomeCardsmass:[
        {name:'React',img:"./img/html.png",video:`https://youtu.be/nUuuIRH0zy0`},
        {name:'React',img:"./img/css.png",video:`https://youtu.be/0tOCbRQLi_0`},
        {name:'React',img:"./img/sass.png",video:`https://youtu.be/eqGlcbkFvi8`},
        {name:'React',img:"./img/bootstrap.png",video:`https://youtu.be/JOyACY-oRmo`},
        {name:'React',img:"./img/javascript.png",video:`https://www.youtube.com/watch?v=9wPNESB02Xs&list=PLx6KiwtsRjcp75rLHEVH4TqD6Z4VCXGZ6`},
        {name:'React',img:"./img/react.png",video:`https://www.youtube.com/watch?v=Sz9keiVFcwg&list=PLx6KiwtsRjcp3IhKX4gYY8gcSIHg2bngl`},
        {name:'React',img:"./img/redux.png",video:`https://youtu.be/EsmZUQsRhSM`},
        {name:'React',img:"./img/github.png",video:`https://youtu.be/NAr4P7TsQgI`},
    ],
    portfolyoMassiv:[
        {name:'AdminPanel',link:'https://adminpanelredux1.netlify.app',img:'./img/p/admin.png'},
        {name:'Safari',link:'https://safari-shop.netlify.app',img:'./img/p/safari.png'},
        {name:'YouTube',link:'https://silly-eclair-c0964d.netlify.app',img:'./img/p/youtube.png'},
        {name:'PDP',link:'https://pdppage.netlify.app',img:'./img/p/pdp.png'},
        {name:'SneksShop',link:'https://exquisite-marzipan-00618e.netlify.app',img:'./img/p/sneks.png'},
        {name:'Shop',link:'https://shiny-sorbet-6be780.netlify.app',img:'./img/p/shop.png'},
        {name:'Kofe',link:'https://doniyorbektursunov-bootstrap-css2.netlify.app',img:'./img/p/kofe.png'},
        {name:'Servise',link:'https://idyllic-scone-584d85.netlify.app',img:'./img/p/brandname.png'},
    ]
}


export const ReduserFun =(state=initilstate,{type,payload})=>{
    switch (type) {
        case Type.add :
            
            break;
    
        default:
            return state;
    }
}