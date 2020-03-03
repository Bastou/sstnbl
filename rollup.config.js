import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const plugins = [commonjs(), resolve(), babel(), terser()];

const iife = {
  input: "src/js/main.js",
  output: {
    format: "iife",
    file: "dist/js/main.iife.min.js",
    name: "main"
  },
  plugins
};

const esm = {
  input: "src/js/main.js",
  output: {
    format: "es",
    file: "dist/js/main.esm.min.js"
  },
  plugins
};

const conf = process.env.BABEL_ENV === "esm" ? esm : iife;
export default conf;
