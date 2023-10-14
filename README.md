# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Changes to the frontend

Made a single source of truth for data/content management and added the single-file rule.

We now have a single file containing all the data and the file name and path is `/src/data/index.json`
This file is responsible for manipulating/updating data based on prompts and is a critical part of the repo.

The data distribution between all the components is done using the context api. Only a single context is created in the `/src/context/` directory and the code is distributed as follows:

```jsx
import React, { createContext, useState } from 'react'
import * as data from '@/data/index.json'

export type IGlobalDataType = typeof data

// @ts-ignore
export const AppContext = createContext<IGlobalDataType>(data)

type Props = {
  children?: React.ReactNode
  dataFromJson?: IGlobalDataType
}

const AppContextData: React.FC<Props> = ({ children, dataFromJson = data }) => {
  let [appData, _setAppData] = useState<IGlobalDataType>(dataFromJson)

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>
}

export default AppContextData

```

We are importing the json file in the context:

```jsx
import * as data from '@/data/index.json'
```

Then we are creating a dynamic type based on the schema of the json data to use typescript support:

```jsx
export type IGlobalDataType = typeof data
```

Then we are creating a context using the dynamic type we generated:

```jsx
export const AppContext = createContext < IGlobalDataType > data
```

and finally, we are creating the provider and exporting the context:

```jsx
const AppContextData: React.FC<Props> = ({ children, dataFromJson = data }) => {
  let [appData, _setAppData] = useState < IGlobalDataType > dataFromJson

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>
}

export default AppContextData
```

Importing and using the context globally in the `/src/main.tsx` file as follows:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './404.tsx'
import AppContextData from './contexts/AppContextData.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextData>
      <RouterProvider router={router} />
    </AppContextData>
  </React.StrictMode>,
)

```

And then using the context on different components like this:

```jsx
const appData = useContext<IGlobalDataType>(AppContext)

appData.chart_header = // The chart_header variable coming from the index.json file
```
