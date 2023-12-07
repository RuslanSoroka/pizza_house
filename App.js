import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import HomePage from "./src/screens/home/screens/HomePage";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <HomePage />
        </SafeAreaView>
    );
}
