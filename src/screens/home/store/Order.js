import {
    observable,
    computed,
    makeObservable,
    action,
    runInAction,
} from "mobx";

class OrderStore {
    @observable orders;
    @observable id;
    @observable indexOf;

    constructor() {
        this.orders = [];
        this.id = "";
        this.indexOf = null;
        makeObservable(this);
    }

    @action setOrders(orderItem) {
        this.orders = [...this.orders, orderItem];
    }

    @action setAmount(sum, id) {
        this.orders.forEach((item) => {
            if (item.id === id) {
                item.amount = sum;
            }
        });
    }

    @action setId(orderId) {
        this.id = orderId;
    }

    @action filteredArray() {
        return (this.orders = this.orders.filter(
            (item) => item.id !== this.id
        ));
    }

    @computed get totalPrice() {
        return this.orders
            .map((item) => item.price)
            ?.reduce((amount, digit) => amount + digit, 0);
    }

    @computed get totalAmount() {
        return this.orders
            .map((item) => item.amount)
            ?.reduce((amount, digit) => amount + digit, 0);
    }

    @action resetOrders() {
        this.orders = [];
    }
}

const orderStore = new OrderStore();

export default orderStore;
