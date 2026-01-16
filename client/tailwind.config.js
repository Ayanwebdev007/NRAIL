/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8b0000',
                secondary: '#000000',
                accent: '#600000',
                light: '#f4f4f4',
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
            }
        },
    },
    corePlugins: {
        preflight: true, // Enabled to ensure proper base styling
    },
    plugins: [],
}
