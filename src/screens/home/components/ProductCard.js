import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import heart from "../../../assets/heart.png";
import busket from "../../../assets/busket.png";

const ProductCard = ({ data }) => {
    return (
        <>
            {data.map(
                ({ id, title, img, oldPrice, price, isNew, description }) => {
                    return (
                        <View key={id} style={styles.productCard}>
                            <View style={styles.imgWrapper}>
                                <Image
                                    style={styles.imgProduct}
                                    source={{
                                        uri: img,
                                    }}
                                />
                                {isNew && (
                                    <View style={styles.statusProduct}>
                                        <Text style={styles.statusText}>
                                            New
                                        </Text>
                                    </View>
                                )}
                            </View>
                            <View style={styles.infoProduct}>
                                <Text style={styles.titleProduct}>{title}</Text>
                                <View style={styles.wrapperPrices}>
                                    <Text style={styles.newPrice}>
                                        {price} uah
                                    </Text>
                                    <Text style={styles.oldPrice}>
                                        {oldPrice} uah
                                    </Text>
                                </View>
                                <Text
                                    style={styles.descriptionProduct}
                                    numberOfLines={1}
                                >
                                    {description}
                                </Text>
                            </View>
                            <View style={styles.optionsCard}>
                                <View style={styles.wrapperHeartImg}>
                                    <Image
                                        style={styles.heartImg}
                                        source={heart}
                                    />
                                </View>
                                <View style={styles.wrapperBusketImg}>
                                    <Text style={styles.textBuy}>Buy</Text>
                                    <Image
                                        style={styles.busketImg}
                                        source={busket}
                                    />
                                </View>
                            </View>
                        </View>
                    );
                }
            )}
        </>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: "90%",
        backgroundColor: "grey",
        flexDirection: "row",
        padding: 30,
        columnGap: 20,
        marginBottom: 15,
        shadowColor: "grey",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,

        elevation: 8,
    },

    imgProduct: {
        width: 100,
        height: 100,
    },

    statusProduct: {
        position: "absolute",
        right: -15,
        top: -15,
        padding: 5,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 100,
    },

    statusText: {
        color: "white",
        fontSize: 20,
    },

    infoProduct: {
        flex: 1,
        justifyContent: "space-between",
    },

    titleProduct: {
        fontWeight: "700",
        fontSize: 20,
    },

    wrapperPrices: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: 10,
    },

    newPrice: {
        fontSize: 15,
        fontWeight: "700",
    },

    oldPrice: {
        textDecorationLine: "line-through",
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

export default ProductCard;
