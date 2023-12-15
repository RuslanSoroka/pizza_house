import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from "react-native";
import COLORS from "../../../components/colors";
import heart from "../../../assets/heart.png";
import CustomPressable from "../../../components/CustomPressable";
import { ScrollView } from "react-native";

const SelectedProductCard = ({ title, img, price, description }) => {
    return (
        <View style={styles.selectedProduct}>
            <View style={styles.imgWrapper}>
                <Image
                    style={styles.imgProduct}
                    source={{
                        uri: img,
                    }}
                />
            </View>
            <View style={styles.infoProduct}>
                <View style={styles.topLine}>
                    <Text style={styles.titleProduct}>{title}</Text>
                    <Image style={styles.heartImg} source={heart} />
                </View>
                <ScrollView style={styles.descriptionBox}>
                    <Text style={styles.descriptionProduct}>{description}</Text>
                </ScrollView>
            </View>
            <View style={styles.orderSection}>
                <View style={styles.priceBox}>
                    <Text style={styles.textPrice}>Prise:</Text>
                    <Text style={styles.price}>{price} uah</Text>
                </View>
                <CustomPressable style={styles.btnBuy}>
                    <Text style={styles.textBuy}>Buy</Text>
                </CustomPressable>
            </View>
        </View>
    );
};

export default SelectedProductCard;

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    selectedProduct: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 5,
        backgroundColor: COLORS.productCardBg,
    },

    imgWrapper: {
        backgroundColor: "red",
    },

    imgProduct: {
        width: "100%",
        height: height / 3,
        alignSelf: "center",
    },

    statusText: {
        color: COLORS.white,
        fontSize: 20,
    },

    infoProduct: {
        flex: 1,
        paddingTop: 30,
        rowGap: 20,
        marginBottom: "auto",
    },

    topLine: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    titleProduct: {
        fontWeight: "700",
        fontSize: 20,
    },

    heartImg: {
        width: 30,
        height: 30,
    },

    descriptionBox: {
        flex: 1,
    },

    descriptionProduct: {
        fontSize: 17,
        fontWeight: "500",
    },

    orderSection: {
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
