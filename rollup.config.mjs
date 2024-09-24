import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      // {
      //   file: packageJson.module,
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: { declaration: true, outDir: "./dist/cjs" },
        // compilerOptions: { declaration: true, outDir: "./dist" },

        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: true,
      // },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: { declaration: true, outDir: "./dist/esm" },
        // compilerOptions: { declaration: true, outDir: "./dist" },

        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "dist/esm/components/Page/index.d.ts",
    output: { file: packageJson.types, format: "esm" },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
