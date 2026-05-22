# Offline Notes App

A simple offline-first notes application built using React Native and Expo.

## Features

- Create notes
- Edit notes
- Delete notes
- Offline local persistence using AsyncStorage
- Clean and minimal UI
- Notes remain saved after app restart

## Tech Stack

- React Native
- Expo
- React Navigation
- AsyncStorage

## Project Structure

```text
screens/
components/
storage/
```

## Storage Approach

The app uses AsyncStorage for lightweight local persistence. It was chosen because the project only required offline storage without complex querying or relational data.

## APK

APK build was generated using Expo EAS Build.

## Running Locally

```bash
npm install
npx expo start
```

## Build APK

```bash
eas build --platform android --profile preview
```