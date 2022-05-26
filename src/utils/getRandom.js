export const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }


export const getRandomWithoutRepeat = (min, max, neededNumbers) => {
    const numbers = []
    for(let i = 0; i<neededNumbers; i++) {
        let number = Math.floor(Math.random() * (max - min) + min)
        if(!numbers.includes(number)) {
            numbers.push(number)
        } else {
            continue
        }
    }
    return numbers
}