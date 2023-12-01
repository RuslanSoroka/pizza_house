import { StyleSheet, View } from "react-native";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const mocProduct = [
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
    ];
    return (
        <View style={styles.container}>
            <ProductCard data={mocProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomePage;
