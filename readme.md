### Open Points
- [ ] Javascript
    - [x] Bundles
    - [ ] Source Maps
    - [x] ES
    - [x] Typescript
    - [x] Unit Testing Library (Jest)
        - use TS configuration from https://basarat.gitbooks.io/typescript/docs/testing/jest.html. It will automatically fix the ES Modules issues
- [ ] HMR
- [ ] Postcss
    - [x] Nesting
    - [x] 1 Bundle per Portal
    - [ ] CSS Variables
        - [ ] Bug: cross-file css variables are not working by using postcss-css-variables (variables undefined) or postcss-preset-env (variables cached wrong)
- [ ] Code Fromatter like Prettuier or StandardJS
- [ ] Git Hooks
        - [ ] Avoid linter errors
        - [ ] Avoid failed tests

### Notes
parcel flags:
- https://parceljs.org/cli.html
- https://github.com/parcel-bundler/parcel/blob/5c5d5f8af634c0e0aa8e8a3542892febe7c27e85/src/cli.js#L21