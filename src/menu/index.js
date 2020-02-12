class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get formattedPrice() {
    return `€ ${this.price}`;
  }
}

export default MenuItem;