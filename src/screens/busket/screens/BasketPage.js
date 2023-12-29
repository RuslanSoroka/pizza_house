import {
    FlatList,
    StyleSheet,
    ActivityIndicator,
    Text,
    View,
} from "react-native";
import orderStore from "../../home/store/Order";
import { observer } from "mobx-react";
import OrderCard from "../components/OrderCard";
import COLORS from "../../../components/colors";
import OrderingSection from "../../../components/OrderingSection";
import { useState } from "react";

const BasketPage = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteOrder = (id) => {
        orderStore.setId(id);
        orderStore.filteredArray();
    };

    const letBuy = () => {
        if (orderStore.orders.length >= 1) {
            orderStore.resetOrders();
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                navigation.navigate("HomeScreen");
            }, 2000);
        }
    };

    return (
        <View style={styles.busketContainer}>
            {orderStore.orders.length < 1 && !isLoading && (
                <View style={styles.isEmpty}>
                    <Text>Basket is empty</Text>
                </View>
            )}
            <View style={styles.orderCardWrapper}>
                <FlatList
                    data={orderStore.orders}
                    renderItem={({ item }) => (
                        <OrderCard
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            id={item.id}
                            onDelete={() => deleteOrder(item.id)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.orderSectionWrapper}>
                <OrderingSection
                    onAction={letBuy}
                    price={orderStore.totalAmount}
                    text="Amount:"
                    textButton="Buy"
                />
            </View>
            {isLoading && (
                <ActivityIndicator style={styles.spinner} color="#0000ff" />
            )}
        </View>
    );
};

export default observer(BasketPage);

const styles = StyleSheet.create({
    busketContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: COLORS.backgroundMain,
    },

    isEmpty: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    orderCardWrapper: {
        flex: 1,
        width: "90%",
        marginTop: 20,
        marginBottom: 10,
    },

    orderSectionWrapper: {
        width: "95%",
        marginTop: "auto",
    },

    spinner: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});
