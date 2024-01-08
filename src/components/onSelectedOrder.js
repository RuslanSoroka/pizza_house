import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import orderStore from "../screens/home/store/Order";

const onSetOrder = (title, img, price) => {
    const selectedOrder = {
        id: uuidv4(),
        title: title,
        img: img,
        price: price,
        amount: 0,
    };
    orderStore.setOrders(selectedOrder);
};
export default onSetOrder;
