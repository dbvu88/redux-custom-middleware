// import { GET_ANIMALS } from './actions/index' 
export const animalReplacer = store => next => action => {
    // switch (action.types) {
    //     case GET_ANIMALS:
        
    // }
    // const result = next(action);

    console.log(JSON.stringify(action));
    return next(action);
}