/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Yekan Bakh"']
            }
        },
    },
    plugins: [require("@tailwindcss/forms")({
        strategy: 'class', // only generate classes
    }),],
}