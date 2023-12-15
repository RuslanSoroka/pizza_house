import { StyleSheet, View, FlatList, Text, Modal } from "react-native";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { memo, useCallback, useState } from "react";
import COLORS from "../../../components/colors";
import CustomPressable from "../../../components/CustomPressable";

let arr = [
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

const mocSaleProduct = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589577_640.jpg",
        link: "link1",
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2017/08/06/06/42/pizza-2589569_640.jpg",
        link: "link2",
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_640.jpg",
        link: "link3",
    },
];

const HomePage = ({ navigation }) => {
    const [inputValue, setInputValue] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const [mocProduct, setMocProduct] = useState(arr);

    const overDataProduct = {
        id: 10,
        title: "Kebab",
        img: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
        oldPrice: 199,
        price: 170,
        isNew: true,
        description:
            "Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created.Margherita pizza is known for its ingredients representing the colours of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a universally-adored pizza is created.",
    };

    const filtered = mocProduct?.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    const updateMocProduct = () => {
        setRefreshing(true);
        setTimeout(() => {
            setMocProduct((mocProduct) => {
                return [overDataProduct, ...mocProduct];
            });
            setRefreshing(false);
        }, 3000);
    };

    const showPizza = (product) => {
        const selectedPizza = mocProduct.find((id) => id === product);
        navigation.navigate("Pizza", { data: selectedPizza });
    };

    const showSalePage = useCallback(
        () => navigation.navigate("Sale", { data: mocSaleProduct }),
        []
    );

    return (
        <View style={styles.container}>
            <Header
                inputValue={inputValue}
                setInputValue={setInputValue}
                onShowPage={showSalePage}
            />
            {/* <SaleModal mocSale={mocSaleProduct} /> */}

            <View style={styles.productCardWpapper}>
                <FlatList
                    data={filtered}
                    renderItem={({ item }) => (
                        <CustomPressable onPress={() => showPizza(item)}>
                            <ProductCard
                                title={item.title}
                                img={item.img}
                                oldPrice={item.oldPrice}
                                price={item.price}
                                isNew={item.isNew}
                                description={item.description}
                            />
                        </CustomPressable>
                    )}
                    keyExtractor={(item) => item.id}
                    onRefresh={() => updateMocProduct(mocProduct)}
                    refreshing={refreshing}
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
});

export default memo(HomePage);
