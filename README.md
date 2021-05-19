# Mobile Accessibility

<!-- Banner & Badges. Badges should have newlines -->
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
![written in typescript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square)
[![expo sdk v41](https://img.shields.io/badge/expo%20sdk-41-4630EB.svg?style=flat-square)](https://expo.io)

Mobile application to showcase usage, examples, effort and importance of accessibility support.

## Background

The motivation for this app is to educate developers of mobile applications about the existing APIs on the iOS & Android platform to offer an experience accessible to all. Consider this sample (React Native) application as a playground or example to see the (mostly) low effort required to create a large difference in usage towards people who may not be able to depend on their vision, hearing, motion etc.

This application is written in React Native, but the underlying principles and APIs will just fall back onto Apple & Google's defined APIs for Accessibility. For more information about which specific API is called take a look at the [React Native Accessibility documentation](https://reactnative.dev/docs/accessibility).

## Install

This application is currently only viewable by running it locally as it is not distributed to the App Store / Play Store.

### Dependencies

We use Expo as a React Native framework. Mainly to have a lower overhead towards building the app and making it easier for novices to get started with contributing or checking it out. If you want to run the app please refer to [Expo's _'Getting Started'_ documentation](https://docs.expo.io/get-started/installation/) as it contains the required steps.

## Usage

After you've installed Expo, run `expo start` or `npm start` from the root of the project. This will start the Expo packager that will load the application to your device.
If the packager started succesfully a QR code is displayed on your screen, scanning it with the Expo Go app (from the App Store / Play Store) will run the application locally on your device. Changes to the code/app are reflected on your device immediatly!

## Screenshots

## Maintainer(s)

- [@thibmaek](https://github.com/thibmaek)

## Contributing

[View the contribution guidelines](https://github.com/inthepocket/mobile-accessibility/blob/main/.github/CONTRIBUTING.md)

## License

MIT

For more info, see [license file](https://github.com/inthepocket/mobile-accessibility/blob/main/LICENSE)
