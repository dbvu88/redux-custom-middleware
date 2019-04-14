
export const GET_ANIMALS = 'GET_ANIMALS'
export const ADD_ANIMAL = 'ADD_ANIMAL'
export const TAKE_ANIMAL = 'KILL_ANIMAL'

export const getAnimals = animals => {
    return { type: GET_ANIMALS, animals }
}