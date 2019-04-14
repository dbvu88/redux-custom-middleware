
export const GET_ANIMALS = 'GET_ANIMALS'
export const ADD_ANIMAL = 'ADD_ANIMAL'
// export const retrieve_ANIMAL = 'KILL_ANIMAL'

export const getAnimals = animals => {
    return { type: GET_ANIMALS, animals }
}

export const addAnimal = animal => {
    return { type: ADD_ANIMAL, animal }
}