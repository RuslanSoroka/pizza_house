import { Image } from "react-native";
import { StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
    tabImg: {
        width: 25,
        height: 25,
    },
});
