import { StyleSheet, Text, View, Image } from "react-native";
import COLORS from "../../../components/colors";
import CustomPressable from "../../../components/CustomPressable";
import { useEffect, useReducer } from "react";
import { INCREASE, DECREASE } from "../reducer/actionTypes";
import { increase, decrease } from "../reducer/actions";
import orderStore from "../../home/store/Order";
import { observer } from "mobx-react";

const OrderCard = ({ title, img, price, id, onDelete }) => {
    const initialQuantiti = {
        count: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case INCREASE:
                return { count: state.count + 1 };
            case DECREASE:
                return { count: state.count - 1 };
            default:
                state;
        }
    };
    const [quantiti, dispatch] = useReducer(reducer, initialQuantiti);

    useEffect(() => {
        orderStore.setQuantity(quantiti.count, id);
    }, [quantiti]);

    const newPrice = price * quantiti.count;
    const addQuantitiProduct = () => {
        dispatch(increase());
    };

    const removeQuantitiProduct = () => {
        dispatch(decrease());
    };

    return (
        <View style={styles.orderCard}>
            <Image style={styles.orderImage} source={{ uri: img }} />
            <View style={styles.infoProduct}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.quantitiProductSection}>
                    <CustomPressable
                        onPress={
                            quantiti.count <= 1 ? null : removeQuantitiProduct
                        }
                    >
                        <Text style={styles.minus}>-</Text>
                    </CustomPressable>
                    <Text style={styles.quantiti}>
                        {quantiti.count <= 1
                            ? (quantiti.count = 1)
                            : quantiti.count}
                    </Text>
                    <CustomPressable onPress={addQuantitiProduct}>
                        <Text style={styles.plus}>+</Text>
                    </CustomPressable>
                </View>
                <Text style={styles.price} numberOfLines={2}>
                    Price: {quantiti.count >= 1 ? newPrice : price} uah
                </Text>
            </View>
            <CustomPressable onPress={() => onDelete(id)}>
                <Image
                    style={styles.deleteIcon}
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/1345/1345874.png",
                    }}
                />
            </CustomPressable>
        </View>
    );
};

export default observer(OrderCard);

const styles = StyleSheet.create({
    orderCard: {
        width: "100%",
        backgroundColor: COLORS.productCardBg,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginBottom: 15,
        columnGap: 10,
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

    orderImage: {
        width: 120,
        height: 120,
    },

    infoProduct: {
        flex: 1,
        justifyContent: "space-between",
    },

    title: {
        fontWeight: "700",
        fontSize: 20,
        alignSelf: "center",
        color: COLORS.orange,
    },

    quantitiProductSection: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    minus: {
        color: COLORS.grey,
        fontSize: 60,
    },

    quantiti: {
        fontSize: 20,
    },

    plus: {
        color: COLORS.grey,
        fontSize: 40,
    },

    price: {
        fontSize: 20,
        fontWeight: "700",
        color: COLORS.green,
        alignSelf: "center",
        textAlign: "center",
    },

    deleteIcon: {
        width: 30,
        height: 30,
    },
});
