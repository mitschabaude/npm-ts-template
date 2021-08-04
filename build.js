import esbuild from 'esbuild';

main();

async function main() {
  await esbuild.build({
    entryPoints: ['index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    target: 'es2020',
    format: 'esm',
    plugins: [],
  });
}
