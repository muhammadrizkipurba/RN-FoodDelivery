import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#47b881", // orange
    secondary: "#d4eee2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    transparentBlack1: "rgba(88, 88, 88, 0.13)",
    transparentBlack2: "rgba(88, 88, 88, 0.63)",

    lightGray: "#e8e8e8",
    lightGray2: "#e0e0e0",
    lightGray3: "##d9d9d9",
    lightGray4: "#c7c7c7",
    transparent: "transparent",
    darkgray: '#7a7c80',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 22,
    h2: 18,
    h3: 16,
    h4: 14,
    body1: 22,
    body2: 18,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 20 },
    h2: { fontSize: SIZES.h2, lineHeight: 20 },
    h3: { fontSize: SIZES.h3, lineHeight: 20 },
    h4: { fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontSize: SIZES.body1, lineHeight: 20 },
    body2: { fontSize: SIZES.body2, lineHeight: 20 },
    body3: { fontSize: SIZES.body3, lineHeight: 20 },
    body4: { fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontSize: SIZES.body5, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;