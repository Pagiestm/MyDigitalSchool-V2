/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "blue-aqua": "#2DB7C4",
                "Cyan": "#29A5B0",
                "black": "#181818",
                "laser-lemon": "#FFBD1D",
                "black-light": "#555555",
            },
            fontFamily: {
                "sans": ["Roboto", "Arial", "sans-serif"],
                "sora": ["Sora", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};