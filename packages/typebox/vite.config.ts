import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: 'index',
        },
        outDir: 'dist',
        emptyOutDir: true,
        target: 'es2022',
        rolldownOptions: {
            // Peer dependencies stay outside the bundle: the user installs them once.
            external: ['@schemantic/core', /^typebox(\/.*)?$/],
        },
    },
});
