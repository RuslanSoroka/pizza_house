import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { memo } from "react";
import heart from "../../../assets/heart.png";
import busket from "../../../assets/busket.png";
import COLORS from "../../../components/colors";
import CustomPressable from "../../../components/CustomPressable";
import { observer } from "mobx-react";
import onSetOrder from "../../../components/onSelectedOrder.js";

const ProductCard = ({ title, img, oldPrice, price, isNew, description }) => {
    return (
        <View style={styles.productCard}>
            <View style={styles.imgWrapper}>
                <Image
                    style={styles.imgProduct}
                    source={{
                        uri: img,
                    }}
                />
                {isNew && (
                    <View style={styles.statusProduct}>
                        <Text style={styles.statusText}>New</Text>
                    </View>
                )}
            </View>
            <View style={styles.infoProduct}>
                <Text style={styles.titleProduct}>{title}</Text>
                <View style={styles.wrapperPrices}>
                    <Text style={styles.newPrice}>{price} uah</Text>
                    <Text style={styles.oldPrice}>{oldPrice} uah</Text>
                </View>
                <Text style={styles.descriptionProduct} numberOfLines={1}>
                    {description}
                </Text>
            </View>
            <View style={styles.optionsCard}>
                <View style={styles.wrapperHeartImg}>
                    <Image style={styles.heartImg} source={heart} />
                </View>
                <CustomPressable onPress={() => onSetOrder(title, img, price)}>
                    <View style={styles.wrapperBusketImg}>
                        <Text style={styles.textBuy}>Buy</Text>
                        <Image style={styles.busketImg} source={busket} />
                    </View>
                </CustomPressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: "100%",
        backgroundColor: COLORS.productCardBg,
        flexDirection: "row",
        padding: 15,
        columnGap: 20,
        marginBottom: 15,
        shadowColor: COLORS.lightGrey,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,

        elevation: 8,
        borderRadius: 10,
    },

    imgProduct: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },

    statusProduct: {
        position: "absolute",
        right: -15,
        top: -15,
        padding: 5,
        borderColor: COLORS.white,
        borderWidth: 3,
        borderRadius: 100,
    },

    statusText: {
        color: COLORS.white,
        fontSize: 20,
    },

    infoProduct: {
        flex: 1,
        justifyContent: "space-between",
    },

    titleProduct: {
        fontWeight: "700",
        fontSize: 20,
        color: COLORS.orange,
    },

    wrapperPrices: {
        flexDirection: "row",
        justifyContent: "space-around",
        columnGap: 10,
    },

    newPrice: {
        fontSize: 15,
        fontWeight: "700",
        color: COLORS.green,
    },

    oldPrice: {
        textDecorationLine: "line-through",
        color: COLORS.orange,
    },

    optionsCard: {
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    heartImg: {
        width: 30,
        height: 30,
    },

    wrapperBusketImg: {
        flexDirection: "row",
        alignItems: "flex-end",
    },

    textBuy: {
        fontSize: 20,
    },

    busketImg: {
        width: 30,
        height: 30,
    },
});

export default observer(ProductCard);
