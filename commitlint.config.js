export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 120],
        'subject-case': [0],
        'scope-enum': [
            1,
            'always',
            ['core', 'typebox', 'config', 'protoc-gen', 'ci', 'deps', 'docs', 'repo'],
        ],
    },
};
