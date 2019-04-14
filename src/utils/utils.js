// import { GET_ANIMALS } from './actions/index' 
export const textToEmoji = store => { 
    console.log('store', store)
    return next => { 
        console.log('next', next)
        return action => {
            console.log(JSON.stringify(action));

            if (action.animals) {
                action.animals = action.animals.map(animal => emojiOf(animal));
            }
            if (action.animal) {
                // console.log(action)
                action.animal = emojiOf(action.animal)
            }
            
            console.log(JSON.stringify(action));
            return next(action);
        }
    }
}
const emojiMapper = {
    monkey: '🐵',
    chicken: '🐔',
    goat: '🐐',
    dog: '🐶',
    deer: '🦌',
    hamster: '🐹'
}

const emojiOf = (animal) => { 
    if (emojiMapper[`${animal}`]) {
        console.log(animal)
        return emojiMapper[`${animal}`]
    }

    return `sorry! no emoji for '${animal}' yet, please check back in the future`;
};


