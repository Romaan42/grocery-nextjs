class Checkout {
  constructor(name, address, number, items, totalPrice, status) {
    this.name = name;
    this.address = address;
    this.number = number;
    this.items = items;
    this.totalPrice = totalPrice;
    this.status = status;
  }

  save() {
    console.log(this);
  }

  static find() {
    return [];
  }
}

export default Checkout;
