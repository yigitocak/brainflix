import React, { useEffect, useState } from 'react';
import './styles/partials/global.scss';
import Header from "./components/Header/Header";
import {HomePage} from "./pages/HomePage/HomePage";
import {NotFound} from "./pages/NotFound/NotFound";
import {UploadPage} from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import {baseUrl, API_KEY} from "./utils/utils";

function App() {
    const [nextVideos, setNextVideos] = useState([])

    useEffect(() => {
        const fetchNextVideos = async () => {
            const response = await axios.get(`${baseUrl}videos?api_key=${API_KEY}`);
            if (response.data) {
                setNextVideos(response.data);
            } else {
                console.error("No data received from fetch");
            }
        };
        fetchNextVideos();
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage nextVideos={nextVideos} />} />
                    <Route path="/video/:videoId" element={<HomePage nextVideos={nextVideos} />} />
                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;