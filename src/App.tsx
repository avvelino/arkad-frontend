import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Carteira from "./views/Carteira/Carteira";
import ArkadPlus from "./views/ArkadPlus/ArkadPlus";
import Transacoes from "./views/Transacoes/Transacoes";
import Suporte from "./views/Suporte/Suporte";
import NovoCartao from "./views/Carteira/NovoCartao";
import CardCredit from "./views/Carteira/CardCredit/CardCredit.jsx";
import Inscrever from "./views/Inscrever/Inscrever.jsx";
import Login from "./views/Login/Login.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/carteira" element={<Carteira />} />
                    <Route path="/novoCartao" element={<CardCredit />} />
                    <Route path="/transacoes" element={<Transacoes />} />
                    <Route path="/arkadplus" element={<ArkadPlus />} />
                    <Route path="/suporte" element={<Suporte />} />
                    <Route path="/inscrever" element={<Inscrever />} />
                    <Route path="/entrar" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
