import { TextInput, View, Image, StyleSheet } from "react-native";
import CustomPressable from "../../../components/CustomPressable";
import heartImg from "../../../assets/heart.png";
import searchingImg from "../../../assets/search.png";
import { useState, memo } from "react";
import COLORS from "../../../components/colors";
import {
    StretchInX,
    StretchOutY,
    useAnimatedStyle,
    interpolate,
    Extrapolation,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Header = ({
    inputValue,
    setInputValue,
    onShowPage,
    scroll,
    setHeaderHeight,
    headerHeight,
}) => {
    const [inputVisibility, setInputVisibility] = useState(false);

    const toggleSearchFild = () => {
        setInputVisibility(!inputVisibility);
    };

    const onChangeText = (value) => {
        setInputValue(value);
    };
    const getHeightHeader = (event) => {
        const height = event.nativeEvent.layout.height;
        setHeaderHeight(height);
    };

    const animatedStylesHeader = useAnimatedStyle(() => {
        return {
            position: "absolute",
            opacity: interpolate(
                scroll.value,
                [0, 50],
                [1, 0.0],
                Extrapolation.CLAMP
            ),
            top: interpolate(
                scroll.value,
                [0, 50],
                [0, -headerHeight],
                Extrapolation.CLAMP
            ),
        };
    });

    return (
        <Animated.View
            style={[styles.header, animatedStylesHeader]}
            onLayout={getHeightHeader}
        >
            {inputVisibility && (
                <Animated.View
                    style={styles.animatedBox}
                    entering={StretchInX}
                    exiting={StretchOutY}
                >
                    <TextInput
                        style={styles.searchField}
                        placeholder="Search..."
                        onChangeText={onChangeText}
                        value={inputValue}
                    />
                </Animated.View>
            )}
            <View style={styles.headerButtonsWrapper}>
                <CustomPressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={onShowPage}
                >
                    <Image style={styles.headerImg} source={heartImg} />
                </CustomPressable>
                <CustomPressable onPress={toggleSearchFild}>
                    <Image style={styles.headerImg} source={searchingImg} />
                </CustomPressable>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingVertical: 15,
        position: "relative",
    },

    animatedBox: {
        flexGrow: 1,
    },

    searchField: {
        backgroundColor: COLORS.lightGrey,
        borderRadius: 9,
        padding: 10,
        shadowColor: COLORS.defaultShadowIos,
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

export default memo(Header);
