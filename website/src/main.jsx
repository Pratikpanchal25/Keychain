import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import HomePage from "./Pages/HomePage.jsx"
import CardsPage from "./Pages/CardsPage.jsx"
import ContactUsPage from './Pages/ContactUsPage.jsx';
import CustomDesignsPage from './Pages/CustomDesignsPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<CardsPage />} />
      <Route path="/shop" element={<CardsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/custom-designs" element={<CustomDesignsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
      <RouterProvider router={router} />
  // </Provider>
);