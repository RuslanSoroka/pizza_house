import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/home/screens/HomePage";
import PizzaPage from "../screens/home/screens/PizzaPage";
import SaleModal from "../screens/home/components/SaleModal";
import SettingPage from "../screens/settingsScreen/components/screens/SettingPage";
import { ImageTabHome, ImageTabSettings } from "../components/TabsIcons";
import { memo } from "react";

const HomeStack = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator
            screenOptions={{
                initialRouteName: HomePage,
            }}
        >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomePage}
                options={{
                    title: "Home",
                }}
            />
            <HomeStack.Screen name="Pizza" component={PizzaPage} />
            <HomeStack.Screen
                name="Sale"
                component={SaleModal}
                options={{
                    animation: "slide_from_bottom",
                    presentation: "modal",
                }}
            />
        </HomeStack.Navigator>
    );
};

const SettingStack = () => {
    const SettingStack = createNativeStackNavigator();
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name="Primary" component={SettingPage} />
        </SettingStack.Navigator>
    );
};

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ImageTabHome,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingPage}
                options={{
                    tabBarIcon: ImageTabSettings,
                }}
            />
        </Tab.Navigator>
    );
};

const Navigator = () => (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
);

export default memo(Navigator);
