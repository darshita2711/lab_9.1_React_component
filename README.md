# React Component Library

## About
This project contains three reusable components built with React, TypeScript, and CSS.

- **AlertBox:** Displays success, error, warning, and info messages.
- **UserProfileCard:** Displays user information such as name, email, and role.
- **ProductDisplay:** Displays product details, price, and stock status.

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the application:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal.

## How to Use

Import the component you want to use:

```tsx
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
```

Pass the required props to each component.

## Features

- Reusable components
- TypeScript for type safety
- Optional props and callback functions
- Custom CSS styling

## Technologies

- React
- TypeScript
- CSS
- Vite