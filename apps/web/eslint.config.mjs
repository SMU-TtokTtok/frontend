import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'public/sw.js',
      'public/workbox-*.js',
      'public/worker-*.js',
      'public/firebase-messaging-sw.js',
    ],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];

export default eslintConfig;
