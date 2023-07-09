
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homePage/HomePage';
import { CountryListPage } from './pages/countryListPage/CountryListPage';
import { CountryDetailPage } from './pages/countryDetailPage/CountryDetailPage';
import { DestinationDetailPage } from './pages/destinationDetailPage/DestinationDetailPage';

function App() {
  return (
    
      <div className="App">
       
       <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/continent/:contId" element={<CountryListPage />} />
          <Route path="/continent/:contId/country/:countryId" element={<CountryDetailPage/>} />
          <Route path="/continent/:contId/country/:countryId/destination/:destinationId" element={<DestinationDetailPage />} />

       </Routes>

      </div>
    
  );
}

export default App;
