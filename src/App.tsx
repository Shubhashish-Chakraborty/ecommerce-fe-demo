import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Layout } from "./Pages/Layout";
import { Home } from "./Pages/Home";


export default function App() {



    return (
        <div className="min-h-screen bg-custom-1 flex flex-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}