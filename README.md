# README

## [Compozer](https://github.com/pacificpelican/compozer)

**'a text editing tool built on web technology'**

*created in 2023-2024 by [Daniel J. McKeown](https://danieljmckeown.com)*

### Features
- Custom Composition Page
- Custom Post List
- Custom Post Page with [Share Sheet](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- Built on [RedwoodJS](https://redwoodjs.com) v6
- Account System (using [DB Auth](https://redwoodjs.com/docs/auth/dbauth))
- Ready for Local Deployment
- Steps before Remote Deployment
  - Query, Edit, and Delete only a user's own posts (security)
  - Connect to a Deployment Database (data)
  - Share Sheet still not supported on all browsers ([web standards](https://caniuse.com/web-share))

### QuickStart
Start by installing dependencies:

```
yarn install
```

Then start the development server:

```
yarn redwood dev
```

<i>more info in the [Redwood README](./REDWOOD-README.md)</i>

![keyboard ocean logo for Compozer](./web/public/iac.png "keyboard ocean logo for Compozer")
