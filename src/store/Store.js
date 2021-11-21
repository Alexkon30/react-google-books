import { makeAutoObservable } from "mobx"

class Store {

  constructor() {
    makeAutoObservable(this)
    this.books = {}
  }

  setBooks(newBooks) {
    this.books = newBooks
  }

}

export default Store
