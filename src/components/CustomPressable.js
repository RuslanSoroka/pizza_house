import { Platform, Pressable } from "react-native";
import COLORS from "./colors";

const CustomPressable = ({ onPress, style, children, withoutFeedback }) => (
    <Pressable
        onPress={onPress}
        android_ripple={
            withoutFeedback
                ? undefined
                : {
                      color: COLORS.android_ripple,
                      borderless: false,
                      radius: -5,
                      foreground: true,
                  }
        }
        style={({ pressed }) => [
            Platform.OS === "ios" &&
                !withoutFeedback && {
                    opacity: pressed ? 0.5 : 1,
                },
            style,
        ]}
    >
        {children}
    </Pressable>
);

export default CustomPressable;
