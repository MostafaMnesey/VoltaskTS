// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      colors: {
        mainColor: "#40C1BD",
        darkGreen: "#236A68",
        subColor: "#F6D710",
        txtGray: "#676767",
        hoverSubColor: "#E7BF46",
        textColor: "#1B514F",
        grayy: "#4C4C4C",
        bluee: "#40C1BD",
        "txt-black": "#1F1F1F",
        "txt-op-0": "#696969",
        input: "#F5F5F5",
        main: "#FE5013",
        redd: "#FF0000",
      },
      backgroundImage: {
        side: "url('/imgs/side.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
