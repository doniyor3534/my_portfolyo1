import { Type } from "../actionType/types";
import '../../components/style.css'


const initilstate = {
    HomeCardsmass:[
        {name:'HTML',img:"./img/html.png",video:`https://youtu.be/nUuuIRH0zy0`},
        {name:'Css',img:"./img/css.png",video:`https://youtu.be/0tOCbRQLi_0`},
        {name:'Sass',img:"./img/sass.png",video:`https://youtu.be/eqGlcbkFvi8`},
        {name:'Bootstrap',img:"./img/bootstrap.png",video:`https://youtu.be/JOyACY-oRmo`},
        {name:'Javascript',img:"./img/javascript.png",video:`https://www.youtube.com/watch?v=9wPNESB02Xs&list=PLx6KiwtsRjcp75rLHEVH4TqD6Z4VCXGZ6`},
        {name:'React',img:"./img/react.png",video:`https://www.youtube.com/watch?v=Sz9keiVFcwg&list=PLx6KiwtsRjcp3IhKX4gYY8gcSIHg2bngl`},
        {name:'Redux',img:"./img/redux.png",video:`https://youtu.be/EsmZUQsRhSM`},
        {name:'GitHub',img:"./img/github.png",video:`https://youtu.be/NAr4P7TsQgI`},
    ],
    portfolyoMassiv:[
        {name:'AdminPanel',linkgithub:'https://github.com/doniyor3534/AdminPanelredux1',linkdemo:'https://adminpanelredux1.netlify.app',img:'./img/p/admin.png'},
        {name:'Safari',linkgithub:'https://github.com/doniyor3534/shopppp',linkdemo:'https://safari-shop.netlify.app',img:'./img/p/safari.png'},
        {name:'YouTube',linkgithub:'https://github.com/doniyor3534/YouTubeamalyot',linkdemo:'https://silly-eclair-c0964d.netlify.app',img:'./img/p/youtube.png'},
        {name:'PDP',linkgithub:'https://github.com/doniyor3534',linkdemo:'https://pdppage.netlify.app',img:'./img/p/pdp.png'},
        {name:'SneksShop',linkgithub:'https://github.com/doniyor3534',linkdemo:'https://exquisite-marzipan-00618e.netlify.app',img:'./img/p/sneks.png'},
        {name:'Shop',linkgithub:'https://github.com/doniyor3534',linkdemo:'https://shiny-sorbet-6be780.netlify.app',img:'./img/p/shop.png'},
        {name:'Kofe',linkgithub:'https://github.com/doniyor3534',linkdemo:'https://doniyorbektursunov-bootstrap-css2.netlify.app',img:'./img/p/kofe.png'},
        {name:'Servise',linkgithub:'https://github.com/doniyor3534',linkdemo:'https://idyllic-scone-584d85.netlify.app',img:'./img/p/brandname.png'},
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