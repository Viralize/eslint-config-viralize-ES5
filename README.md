# eslint-config-viralize-es5

Eslint rules to enforce Viralize standards and best practices during development of ES5 project in Viralize

## Install

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-viralize-es5@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-viralize-es5
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-viralize-es5;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-viralize-es5
  ```

2. Add `"extends": "viralize-es5"` to your .eslintrc.
