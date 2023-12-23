import { Image, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import orderStore from "../screens/home/store/Order";
import { observer } from "mobx-react";
import COLORS from "./colors";

export const ImageTabHome = ({ focused }) => {
    const active =
        "https://cdn.iconscout.com/icon/free/png-256/free-home-815-457353.png";
    const inactive =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUR1JSssVQ_74o50_egjXsBC89nWibHRJrw&usqp=CAU";
    return (
        <Image
            style={styles.tabImg}
            source={{
                uri: focused ? active : inactive,
            }}
        />
    );
};

export const ImageTabSettings = ({ focused }) => {
    const active =
        "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/settings-87.png";
    const inactive =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY56Ld8a0L7fCRpb8a4D6zpsBiUyltMSA3WA&usqp=CAU";
    return (
        <Image
            style={styles.tabImg}
            source={{
                uri: focused ? active : inactive,
            }}
        />
    );
};

export const ImageTabBasket = observer(({ focused }) => {
    const active =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDtVQF4oD5KDIjgr2kkSK65okQB5b4JItYWCwgCn03KqrUpjLdNK7riFORGp9nDjGDcU&usqp=CAU";
    const inactive =
        "https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png";
    return (
        <View>
            <Image
                style={styles.tabImg}
                source={{
                    uri: focused ? active : inactive,
                }}
            />
            <View style={styles.orders}>
                <Text style={styles.lengthOrders}>
                    {orderStore.orders.length}
                </Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    tabImg: {
        width: 25,
        height: 25,
    },

    orders: {
        borderRadius: 50,
        position: "absolute",
        backgroundColor: COLORS.green,
        top: -5,
        right: -7,
    },

    lengthOrders: {
        color: COLORS.white,
        paddingHorizontal: 3,
        fontSize: 13,
    },
});
