import { useRef, useState, useEffect } from "react";
import { AppState } from "react-native";

const useAppStateListener = () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
        };

        const subscription = AppState.addEventListener(
            "change",
            handleAppStateChange
        );

        return () => {
            subscription.remove();
        };
    }, []);

    return appStateVisible;
};

export default useAppStateListener;
