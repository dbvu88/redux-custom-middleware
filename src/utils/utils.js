// import { GET_ANIMALS } from './actions/index' 
export const textToEmoji = store => { 
    console.log('store', store)
    return next => { 
        console.log('next', next)
        return action => {
            if (action.animals) {
                action.animals = action.animals.map(animal => emojiOf(animal));
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
    deer: '🦌'
}

const emojiOf = (animal) => { 
    if (emojiMapper[`${animal}`]) {
        return emojiMapper[`${animal}`]
    }

    return `sorry! no emoji for '${animal}' yet, please check back in the future`;
};


