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
        {name:'Safari',link:'llll',img:'./img/imgg.jpg'},
        {name:'Shop',link:'llll',img:'./img/imgg.jpg'},
        {name:'Crud',link:'llll',img:'./img/imgg.jpg'},
        {name:'Redux',link:'llll',img:'./img/imgg.jpg'},
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