const createPlace = (place, rating) => ({ place, rating, get label() { return this.place } })

export default [
  createPlace('The Burger', 4),
  createPlace('3B cafe', 5),
  createPlace('True Burger', 3),
  createPlace('Burger Farm', 3),
  createPlace('Trallebus', 2),
  createPlace('Star Burger', 3),
]
