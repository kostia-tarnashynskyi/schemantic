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
            output: {
                // protoc runs the plugin as an executable, so the bundle needs a Node shebang.
                banner: '#!/usr/bin/env node',
            },
        },
    },
});
