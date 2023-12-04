import { TextInput, View, Image, StyleSheet } from "react-native";
import CustomPressable from "../../../components/CustomPressable";
import heartImg from "../../../assets/heart.png";
import searchingImg from "../../../assets/search.png";
import { useState } from "react";

const Header = ({ inputValue, setInputValue, setModalVisible }) => {
    const [inputVisibility, setInputVisibility] = useState(false);

    const toggleSearchFild = () => {
        setInputVisibility(!inputVisibility);
    };

    const onChangeText = (value) => {
        setInputValue(value);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.header}>
            {inputVisibility && (
                <TextInput
                    style={styles.searchField}
                    placeholder="Search..."
                    onChangeText={onChangeText}
                    value={inputValue}
                />
            )}
            <View style={styles.headerButtonsWrapper}>
                <CustomPressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={showModal}
                >
                    <Image style={styles.headerImg} source={heartImg} />
                </CustomPressable>
                <CustomPressable onPress={toggleSearchFild}>
                    <Image style={styles.headerImg} source={searchingImg} />
                </CustomPressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginVertical: 10,
        minHeight: 37,
    },

    searchField: {
        backgroundColor: "#C8D0D0",
        borderRadius: 9,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexGrow: 1,
    },

    headerButtonsWrapper: {
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center",
        marginLeft: 30,
    },

    headerImg: {
        width: 30,
        height: 30,
    },
});

export default Header;
