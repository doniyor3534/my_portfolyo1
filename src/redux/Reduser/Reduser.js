import { Type } from "../actionType/types";

const initilstate = {
    HomeCardsmass:[
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
        {name:'React',video:`<iframe width="560" height="315" src="https://www.youtube.com/embed/nUuuIRH0zy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`},
    ],
}


export const ReduserFun =(state=initilstate,{type,payload})=>{
    switch (type) {
        case Type.add :
            
            break;
    
        default:
            return state;
    }
}