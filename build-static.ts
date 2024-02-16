await Bun.build({
    entrypoints: ["./src/root.tsx"],
    outdir: "./build-static",
})