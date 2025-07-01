import { defineConfig } from "vite";
import react from "@vite/plugin-react"
import { plugin } from "postcss";

export default defineConfig({
    plugin : [react()],
    base:"/Shoes-E-Com",
});