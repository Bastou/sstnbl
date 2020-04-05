import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import cssPorter from "rollup-plugin-css-porter";
import sourcemaps from "rollup-plugin-sourcemaps";

const ROOT_DIST_PATH = "dist/";

const plugins = [commonjs(), resolve(), babel(), terser(), sourcemaps()];

const css = [cssPorter({ dest: ROOT_DIST_PATH + "/css/main.css" })];

/**
 * Default ESM module for modern browsers
 * Include css output with it
 */
const esm = {
  input: "src/js/main.js",
  output: {
    format: "es",
    file: ROOT_DIST_PATH + "js/main.min.js",
    name: "main",
    sourcemap: true,
  },
  plugins: [...plugins, ...css],
};

/**
 * IIFE module for browsers that doesn't support module
 */
const iife = {
  input: "src/js/main.js",
  output: {
    format: "iife",
    file: ROOT_DIST_PATH + "js/main.iife.min.js",
    name: "main",
    sourcemap: true,
  },
  plugins,
};

const conf = process.env.BABEL_ENV === "esm" ? esm : iife;
export default conf;
