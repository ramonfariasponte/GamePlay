import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: theme.colors.primary
    },
    iconWrapper: {
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1,
        textAlign: "center",
        color: theme.colors.headding
    }
});