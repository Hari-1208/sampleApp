import {store_data} from "../../redux/action/action";
const initialstate = {
    storeData:''
}
export const reducertextdata = (state=initialstate,action) => {
    console.log('test',action)
   switch (action.type){
       case store_data:
           return{
               storeData:action.payload
           }
           default :
           return state;
   }
}; 