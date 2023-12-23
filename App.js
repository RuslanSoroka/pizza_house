import { View } from "react-native";
import Navigator from "./src/navigation";
import useAppStateListener from "./src/hooks/useAppState";
import { Dimensions, Image, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function App() {
    const appState = useAppStateListener();

    return (
        <>
            {appState !== "active" && (
                <View style={styles.appState}>
                    <Image
                        style={styles.stateImage}
                        source={{
                            uri: "https://futureofbeinghuman.asu.edu/wp-content/uploads/2023/01/Pizza-and-a-slice-of-future-3.png",
                        }}
                        resizeMode="cover"
                    />
                </View>
            )}
            <Navigator />
        </>
    );
}

const styles = StyleSheet.create({
    appState: {
        flex: 2000,
    },
    stateImage: {
        width: width,
        height: height,
    },
});
