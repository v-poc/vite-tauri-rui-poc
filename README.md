# vite-tauri-rui-poc

<a href="https://nikoni.top/rui-next/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=RUI%20docs%20%26%20demos&color=3366cc" alt="RUI docs & demos" /></a> [![Required Node.JS >= v16.0.0](https://img.shields.io/static/v1?label=node&message=%3E=16.0.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

## INTRODUCTION

The HelloWorld demo based on RUI (react-hooks) with Vite 4 and Tauri.

> RUI contains Mobile web UI components based on React.

## Project setup

### How to setup your project

```
npm i
```

> Make sure to [setup your environment](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment) for Tauri development.

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

> The bundle dmg for macOS:
> - `/vite-tauri-rui-poc/src-tauri/target/release/bundle/dmg/vite-tauri-rui-poc_(VERSION)_aarch64.dmg`
> The bundle dmg for windows:
> - `/vite-tauri-rui-poc/src-tauri/target/release/bundle/msi/vite-tauri-rui-poc_(VERSION)_x64_en-US.msi`
> - `/vite-tauri-rui-poc/src-tauri/target/release/bundle/nsis/vite-tauri-rui-poc_(VERSION)_x64-setup.exe`

### `tauri` info

```
> tauri "info" - macOS


[✔] Environment
    - OS: Mac OS 13.2.0 X64
    ✔ Xcode Command Line Tools: installed
    ✔ rustc: 1.69.0 (84c898d65 2023-04-16)
    ✔ Cargo: 1.69.0 (6e9a83356 2023-04-12)
    ✔ rustup: 1.26.0 (5af9b9484 2023-04-05)
    ✔ Rust toolchain: stable-aarch64-apple-darwin (default)
    - node: 16.14.0
    - pnpm: 8.3.1
    - yarn: 1.22.5
    - npm: 8.3.1

[-] Packages
    - tauri [RUST]: 1.3.0
    - tauri-build [RUST]: 1.3.0
    - wry [RUST]: 0.24.3
    - tao [RUST]: 0.16.1
    - @tauri-apps/api [NPM]: not installed!
    - @tauri-apps/cli [NPM]: 1.3.1

[-] App
    - build-type: bundle
    - CSP: unset
    - distDir: Injected by vite-plugin-tauri, you can change this if you want to use tauri cli directly
    - devPath: Injected by vite-plugin-tauri, you can change this if you want to use tauri cli directly
    - framework: React
    - bundler: Vite
```

```
> tauri "info" - windows

[✔] Environment
    - OS: Windows 10.0.19044 X64
    ✔ WebView2: 113.0.1774.42
    ✔ rustc: 1.69.0 (84c898d65 2023-04-16)
    ✔ Cargo: 1.69.0 (6e9a83356 2023-04-12)
    ✔ rustup: 1.26.0 (5af9b9484 2023-04-05)
    ✔ Rust toolchain: stable-x86_64-pc-windows-msvc (default)
    - node: 16.17.0
    - npm: 9.6.7

[-] Packages
    - tauri [RUST]: 1.3.0
    - tauri-build [RUST]: 1.3.0
    - wry [RUST]: 0.24.3
    - tao [RUST]: 0.16.1
    - @tauri-apps/api [NPM]: not installed!
    - @tauri-apps/cli [NPM]: 1.3.1

[-] App
    - build-type: bundle
    - CSP: unset
    - distDir: Injected by vite-plugin-tauri, you can change this if you want to use tauri cli directly
    - devPath: Injected by vite-plugin-tauri, you can change this if you want to use tauri cli directly
    - framework: React
    - bundler: Vite
```

### Customize configuration

About vite and electron, please check Configuration Reference - [vite](https://vitejs.dev/config/) | [tauri](https://tauri.app/).

## License

<img src="https://nikoni.top/images/niko-mit-react.png" alt="MIT License" width="396" height="250"/>
