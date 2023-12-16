import { Text, View } from "react-native";
import Navigator from "./src/navigation";
import useAppStateListener from "./src/utils/hooks";
import { Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function App() {
    const { appState } = useAppStateListener();

    return (
        <>
            {appState !== "active" && (
                <View
                    style={{
                        flex: 2000,
                    }}
                >
                    <Image
                        style={{
                            width: width,
                            height: height,
                        }}
                        source={{
                            uri: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
                        }}
                    />
                </View>
            )}
            <Navigator />
        </>
    );
}
