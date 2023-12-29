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

    constructor() {
        this.orders = [];
        this.id = "";
        makeObservable(this);
    }

    @action setOrders(orderItem) {
        this.orders = this.orders?.filter(
            (item) => item.title !== orderItem.title
        );
        this.orders.push(orderItem);
    }

    @action setQuantity(quantity, id) {
        this.orders.forEach((item) => {
            if (item.id === id) {
                item.amount = quantity;
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

    @computed get totalAmount() {
        return this.orders
            .map((item) => item.price * item.amount)
            ?.reduce((amount, digit) => amount + digit, 0);
    }

    @action resetOrders() {
        this.orders = [];
    }
}

const orderStore = new OrderStore();

export default orderStore;
