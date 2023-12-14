import { View, Text } from "react-native";
import { memo } from "react";
import { useRoute } from "@react-navigation/native";
import SelectedProductCard from "../components/SelectedProductCard";

const PizzaPage = () => {
    const rout = useRoute();
    const { title, img, price, description } = rout.params.data;
    return (
        <View>
            <SelectedProductCard
                title={title}
                img={img}
                price={price}
                description={description}
            />
        </View>
    );
};

export default memo(PizzaPage);
