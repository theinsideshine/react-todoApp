export const todoReducer = (state = [] , action )=>{

 switch(action.type){

    case 'add':
        return [ ...state, action.payload ];

        // El .filter devuelve un nuevo arreglo ,con todod los 
        // elemento del arregllo que cumpla la condicion . Ver mozilla Doc
        // tambien puedo poner action.payload.id, ya va a comparar con el .id
        // Como estoy mandado payload = todo.id dejo solo payload
        
    case 'delete':
        return state.filter( todo => todo.id !== action.payload);

    // Mismo resultado que toggle-old con solucion ternario con return implicito

   case 'toggle':
       return state.map ( todo=> 
        (todo.id === action.payload )
            ? {...todo,done: !todo.done}
            : todo
            ); 
   /*
     Recorre todo el state=todos 
    cuando encuentra el id toggle el valor de done,
    importante : si no encuentra nada devuelve el todo, 
    para no devolver undefined
   */

    case 'toggle-old':
        return state.map ( todo => {
            if (todo.id === action.payload ){
                return {
                    ...todo,
                    done: !todo.done
                }
            }else {
                return todo;
            }
        })
    default: //Se llama al inicialicar
        return state;

 }

}