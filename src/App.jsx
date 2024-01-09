import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import MainLayout from "@/components/layouts/main-layout"
import AuthLayout from "@/components/layouts/auth-layout";

import HomePage from "@/components/pages/Home";
import LoginPage from "@/components/pages/auth/Login";
import RegisterPage from "@/components/pages/auth/Register";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;