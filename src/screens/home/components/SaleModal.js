import { StyleSheet, View, FlatList, Text, Image, Share } from "react-native";
import CustomPressable from "../../../components/CustomPressable";
import COLORS from "../../../components/colors";
import { Dimensions } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const SaleModal = ({ navigation }) => {
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const rout = useRoute();
    const mocSale = rout.params.data;

    const onShare = async (link) => {
        try {
            const result = await Share.share({
                message: link,
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleBack = () => navigation.goBack();

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.slider}>
                    <FlatList
                        data={mocSale}
                        renderItem={({ item }) => (
                            <View style={styles.saleImgBox}>
                                <CustomPressable
                                    withoutFeedback={true}
                                    onPress={() => onShare(item.link)}
                                >
                                    <Image
                                        style={styles.saleImg}
                                        source={{ uri: item.img }}
                                        resizeMode="cover"
                                    />
                                </CustomPressable>
                            </View>
                        )}
                        keyExtractor={(product) => product.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScroll={({ nativeEvent }) => {
                            setCurrentSliderIndex(
                                Math.round(
                                    nativeEvent.contentOffset.x /
                                        nativeEvent.layoutMeasurement.width
                                )
                            );
                        }}
                        onEndReached={() => {
                            mocSale.push(
                                {
                                    id: 4,
                                    img: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_640.jpg",
                                    link: "link4",
                                },
                                {
                                    id: 5,
                                    img: "https://cdn.pixabay.com/photo/2016/03/05/09/22/eat-1237431_640.jpg",
                                    link: "link5",
                                },
                                {
                                    id: 6,
                                    img: "https://cdn.pixabay.com/photo/2015/04/08/13/14/pizza-712667_640.jpg",
                                    link: "link6",
                                },
                                {
                                    id: 7,
                                    img: "https://cdn.pixabay.com/photo/2022/03/04/00/47/wine-7046276_640.jpg",
                                    link: "link7",
                                },
                                {
                                    id: 8,
                                    img: "https://cdn.pixabay.com/photo/2015/04/28/21/20/pizza-744405_640.jpg",
                                    link: "link8",
                                }
                            );
                        }}
                        onEndReachedThreshold={0.6}
                    />
                    <View style={styles.dotsWrapper}>
                        {mocSale.map((item, index) => {
                            return (
                                <View
                                    key={item.id}
                                    style={[
                                        styles.dot,
                                        currentSliderIndex === index
                                            ? styles.active
                                            : null,
                                    ]}
                                ></View>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.modalOptions}>
                    <CustomPressable
                        style={styles.buttonCloseInside}
                        onPress={handleBack}
                    >
                        <Text style={styles.textStyle}>Close modal</Text>
                    </CustomPressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: width,
        height: height,
        backgroundColor: COLORS.backgroundMain,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: COLORS.defaultShadowIos,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    slider: {
        flex: 4,
    },

    saleImgBox: {
        width: width,
        alignItems: "center",
        justifyContent: "flex-end",
    },

    saleImg: {
        minWidth: 400,
        height: 480,
        borderRadius: 20,
    },

    dotsWrapper: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        columnGap: 5,
    },

    active: {
        backgroundColor: COLORS.grey,
    },

    dot: {
        width: 15,
        height: 15,
        backgroundColor: COLORS.lightGrey,
        borderRadius: 50,
    },

    modalOptions: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },

    buttonCloseInside: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: COLORS.red,
    },

    textStyle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "700",
    },
});

export default SaleModal;
