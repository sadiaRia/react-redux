import { buyCake } from './cakeTypes';

const buy_cake = (number = 1) => {
  return {
    type: buyCake,
    payload: number
  }
}

export {
  buy_cake
}