# graphql serrver & client playground

apollo-server を利用したgraphql のサーバー実装と、@apollo/clientを利用したクライアント実装、及びfirestore との連携

## 技術スタック
- graphql-codegen
- @apollo/client
- apollo-server
- next.js
- firebase
  - firestore

## セットアップ、開発
```sh
$ yarn setup
$ yarn dev
```

- `/packages/server/.env` に`Firebase サービスアカウント`の以下を追加
  - **FIREBASE_PROJECT_ID**
  - **FIREBASE_CLIENT_EMAIL**
  - **FIREBASE_PRIVATE_KEY**

## 参考
- [Apollo Docs](https://apollographql-jp.com/tutorial/introduction/)
- [graphql-codegen で型定義を生成する (React, Apollo, TypeScript)](https://qiita.com/mizchi/items/fb9f598cea94d2c8072d)


## License
MIT ©[ivgtr](https://github.com/ivgtr)


[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  
