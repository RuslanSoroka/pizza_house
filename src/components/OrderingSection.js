import { StyleSheet, Text, View } from "react-native";
import CustomPressable from "./CustomPressable";
import COLORS from "./colors";

const OrderingSection = ({ price, text, textButton, onAction }) => (
    <View style={styles.orderingSection}>
        <View style={styles.priceBox}>
            <Text style={styles.textPrice}>{text ? text : "Prise:"}</Text>
            <Text style={styles.price}>{price} uah</Text>
        </View>
        <CustomPressable style={styles.btnBuy} onPress={onAction}>
            <Text style={styles.textBuy}>
                {textButton ? textButton : "To basket"}
            </Text>
        </CustomPressable>
    </View>
);

export default OrderingSection;

const styles = StyleSheet.create({
    orderingSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },

    textPrice: {
        fontSize: 15,
    },

    price: {
        fontSize: 20,
        fontWeight: "700",
        color: COLORS.green,
    },

    btnBuy: {
        backgroundColor: COLORS.green,
        padding: 10,
        width: "30%",
        borderRadius: 30,
        alignSelf: "center",
    },

    textBuy: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: "center",
    },
});
