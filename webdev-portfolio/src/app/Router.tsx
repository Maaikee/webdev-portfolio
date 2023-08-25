import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <body>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </body>
      <Footer />
    </BrowserRouter>
  );
}
