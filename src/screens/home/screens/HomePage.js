import { StyleSheet, View, FlatList, Text, Modal } from "react-native";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { useState } from "react";
import CustomPressable from "../../../components/CustomPressable";
import COLORS from "../../../components/colors";

const HomePage = () => {
    const [inputValue, setInputValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    let mocProduct = [
        {
            id: 1,
            title: "Margarita",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 140,
            price: 120,
            isNew: true,
            description:
                "Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created.",
        },
        {
            id: 2,
            title: "Diablo",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 200,
            price: 170,
            isNew: false,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 3,
            title: "Four Cheese",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 250,
            price: 215,
            isNew: true,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 4,
            title: "Peperoni",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 140,
            price: 130,
            isNew: false,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 5,
            title: "Hawaii",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 175,
            price: 150,
            isNew: false,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 6,
            title: "Vegetarian",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 110,
            price: 100,
            isNew: true,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 7,
            title: "Barbecue",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 220,
            price: 205,
            isNew: false,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
        {
            id: 8,
            title: "Carbonara",
            img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
            oldPrice: 270,
            price: 190,
            isNew: false,
            description:
                "This cerberus of a pizza is made with three meat toppings: spicy meatballs, spicy pepperoni, and parma ham. In case that wasn’t enough, toss over some finely chopped chilli and a lashing of your favourite hot sauce. Not for the faint of heart (or tongue), this pizza is equal parts.",
        },
    ];

    if (inputValue) {
        mocProduct = mocProduct.filter((product) =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Header
                inputValue={inputValue}
                setInputValue={setInputValue}
                setModalVisible={setModalVisible}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <CustomPressable
                    style={styles.buttonCloseOutside}
                    onPress={closeModal}
                    withoutFeedback={true}
                />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Are you shure you want to close modal?
                        </Text>
                        <CustomPressable
                            style={styles.buttonCloseInside}
                            onPress={closeModal}
                        >
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </CustomPressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.productCardWpapper}>
                <FlatList
                    data={mocProduct}
                    renderItem={({ item }) => (
                        <ProductCard
                            title={item.title}
                            img={item.img}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            isNew={item.isNew}
                            description={item.description}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: COLORS.backgroundMain,
    },

    productCardWpapper: {
        marginTop: 20,
        paddingBottom: 60,
        width: "90%",
    },

    buttonCloseOutside: {
        flex: 3,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGrey,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: COLORS.defaultShadowIos,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        fontWeight: "700",
        color: COLORS.grey,
        marginBottom: 10,
    },
    buttonCloseInside: {
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: COLORS.red,
    },
});

export default HomePage;
