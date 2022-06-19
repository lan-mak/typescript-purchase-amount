import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalCount(): number {
    let total: number = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  totalDiscont(count: number): number {
    return this.totalCount() - ((this.totalCount() / 100) * count);
  }

  deleteItem(id: number): void {
    const itemId: number = this.items.findIndex((item) => item.id === id);
    if (itemId >= 0) {
      this._items.splice(itemId, 1);
    }
  }
}
