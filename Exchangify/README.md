# Exchangify

## Introduction
Exchangify is an Ionic and Angular-based application that allows users to perform real-time currency conversion from USD to various international currencies. By integrating with the CurrencyLayer API, Exchangify provides users with accurate, up-to-date exchange rates in a user-friendly interface.

## Project Overview
- **App Purpose**: Provides real-time currency conversion with an easy-to-navigate interface.
- **Core Focus**: API integration, data binding, dependency injection, and responsive design.
- **Primary Technologies**: Ionic, Angular, and Capacitor for cross-platform functionality.

## Key Features
1. **Real-Time Currency Conversion**: Converts USD to multiple currencies using live exchange rates.
2. **API Integration**: Fetches data from CurrencyLayer API.
3. **Responsive UI**: Uses Ionic components to ensure a user-friendly interface on any device.
4. **Interactive Elements**: Currency selection, responsive grid layout, and animated hover effects for improved UX.

## Interfaces

### 1. Home Page
Displays a welcome message with a button that navigates to the Conversion Page.

![Home](./assets/home.jpg)

### 2. Conversion Page
The main conversion interface with a dropdown list for currency selection, input fields, and the conversion result display.

![Conversion](./assets/conversion.jpg)

### 3. Currency Selection
Allows users to choose their desired currency to see the exchange rate with USD.

![Selection](./assets/selection.jpg)

### 4. Result Page
Displays the conversion result, showing how much 1 USD is worth in the selected currency.

![Result](./assets/result.jpg)

## Ionic Commands and Capacitor Setup

### Installation and Setup
1. **Install Ionic CLI**: Install the Ionic CLI globally for project management.
 ```bash
   npm install -g @ionic/cli
```
2. **Verify Ionic Installation**
```bash
    ionic --version
```
3. **Create a New Project**: Start a new Ionic Angular project called "Exchangify."
```bash
ionic start Exchangify blank --type=angular
```
4. **Install Capacitor**: Set up Capacitor to add native functionalities.
```bash
npm install @capacitor/core @capacitor/cli
npx cap init Exchangify com.example.exchangify
```
5. **Add Android Platform**: Enable Android support by adding the platform.
```bash
npm install @capacitor/android
npx cap add android
```
6. **Run the App**: Launch the development server to view the app.
 ```bash
ionic serve
 ```
### Project Structure Commands
- **Generate Page**: Creates an Angular page for the conversion screen.
```bash
ionic generate page conversion
```
- **Generate Service**: Sets up a service to handle data fetching from the API.
```bash
ionic generate service services/rate-fetcher
```
## HTTP Configuration
### 1. app.module.ts:
- **Import HttpClientModule**: Enables HTTP requests in Angular.
```bash
import { HttpClientModule } from '@angular/common/http';
```
- **Providers Array**: Add provideHttpClient to enable dependency injection for HTTP services.
```bash
providers: [provideHttpClient]
```
### 2. Injecting HttpClient
- **Inject**: Add HttpClient in the RateFetcherService constructor to enable HTTP requests.
### 3. home.page.ts - Currency Management
- **Currency Array**: Stores currencies fetched from the API.
- **ngOnInit()**: Calls the service to initialize currencies on component load.
- **Handling Selection**: Uses #currencySelect reference to access selected currency values.
- **Event Handling**: `onChange(...)` retrieves the selected currency’s exchange rate.

## Currency Data Management
### Fetching and Displaying Currency Data

#### Currency Keys: 
- Uses `Object.keys(data['quotes'])` to retrieve currency codes, extracting only the last 3 characters `(key.slice(-3))` .
#### Looping Arrays:
- **for...in**: Iterates over the keys in an object, accessing properties like USDGBP, USDEUR.
- **for...of**: Loops through values in arrays, ideal for simple data lists. Avoid using for...of with objects.

### Styling and Layout
#### Key Styles
- **Colors**: Custom palette with primary color #18534F and background `#ECF8F6` for cohesive branding.
- **Logo Styling**: Rounded edges, shadow effects, and subtle scaling on hover.
- **Content Layout**: Grid and card elements ensure a responsive, structured design.

### What I Learned
This project helped solidify my understanding of:

1. **API Integration**: Learned how to fetch data from a third-party API and handle responses within Angular services.
2. **Dependency Injectio**n: Enhanced my skills in Angular's DI to manage and use services effectively across components.
3. **Styling with SCSS**: Improved my ability to apply consistent styling using SCSS, creating a professional look and feel.
4. **Ionic Components**: Gained experience using **ion-grid**, **ion-card**, **ion-select**, and more, to build responsive layouts.
5. **Looping Structures in TypeScript**: Practiced using **for...in** and **for...of** loops to manage data from API responses.
6. **Capacitor Setup**: Set up Capacitor for Android, adding native functionality to my Ionic application.

-------------------------------------------------------------------------
This README outlines Exchangify's structure, setup, and key learning points, making it a comprehensive guide for future reference.
