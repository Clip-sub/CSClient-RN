# Clip-sub Client - React Native

Clip-sub Client app, powered by [React Native](https://facebook.github.io/react-native/). With cross-platform support (iOS and Android). Originally created for fansubs websites to create their own fancy, colorful and interactive app.

The main aim of this project is to provide users (especially fansubs) a convenient framework to build their own apps. It integrates nicely with WordPress, using standard official Material Design on Android and Human UX Guideline on iOS.

- [x] Fetching and posting posts.
- [x] Reading comments / posting comments.
- [x] User registration / authentication.
- [x] Administration, managing pages / posts.
- [x] Consistent push notifications using OneSignal.
- [x] Fully-configurable theming system.
- [x] Editing and uploading avatar (through Gravatar).

## Getting started

### Minimum requirements:

- iOS 8 or above.
- Android v14 or above.
- Xcode 8 (for iOS app packaging and building).
- Mac OS (for iOS app).
- NodeJS 4.5 or above (6 is preferred).

### Clone the repository:

`git clone https://github.com/Clip-sub/CSClient-RN.git`

then:

`cd CSClient-RN`

then install the dependencies and modules, using NPM:

`npm install`

or Yarn:

`yarn add`

All native modules are already linked. You only have to install npm packages like above to start working. However if you get troubles with native modules, you can always unlink them whenever you like:

`react-native unlink`

### Install necessary plugin on Wordpress back-end:

With CSClient-RN, we use two main plugins on server side to provide the REST API:

- [JSON API](https://wordpress.org/plugins/json-api/) for cookie validation, nonce generator.
- [JSON API User](https://wordpress.org/plugins/json-api-user/) for cookie authentication, user validation.
- Wordpress REST API: Included with every Wordpress package from v4.7 onward.
- [OneSignal](https://wordpress.org/plugins/onesignal-free-web-push-notifications/) for cross-platform push notification service.
- [WP-Basic-Auth](https://wordpress.org/plugins/wp-basic-auth/) Using for user authentication after they have registered on your site.
- [Application Passwords](https://wordpress.org/plugins/application-passwords/) for user-registration. With the design of WordPress API, there is no way to add an user without authenticating as a privileged user first (which I found weird). We also should not expose admin's password to anyone, so this is the best option for now.
