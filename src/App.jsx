import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Submission from "./pages/Submission";
import SubmissionRentalIncome from "./pages/SubmissionRentalIncome";
import Questions from "./pages/Questions";
import Questions1 from "./pages/Questions1";
import Questions2 from "./pages/Questions2";
import Questions3 from "./pages/Questions3";
import Questions4 from "./pages/Questions4";
import Questions5 from "./pages/Questions5";
import Questions6 from "./pages/Questions6";
import Questions7 from "./pages/Questions7";
import Questions8 from "./pages/Questions8";
import Questions9 from "./pages/Questions9";
import Questions10 from "./pages/Questions10";
import Questions11 from "./pages/Questions11";
import Questions12 from "./pages/Questions12";
import Questions13 from "./pages/Questions13";
import Questions14 from "./pages/Questions14";
import Questions15 from "./pages/Questions15";
import Questions16 from "./pages/Questions16";
import Questions17 from "./pages/Questions17";
import Questions18 from "./pages/Questions18";
import TaxReturn from "./pages/TaxReturn";

import React from "react";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaxReturn />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/submission-rental-income" element={<SubmissionRentalIncome/>} />/submission-rental-income
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions1" element={<Questions1 />} />
      <Route path="/questions2" element={<Questions2 />} />
      <Route path="/questions3" element={<Questions3 />} />
      <Route path="/questions4" element={<Questions4 />} />
      <Route path="/questions5" element={<Questions5 />} />
      <Route path="/questions6" element={<Questions6 />} />
      <Route path="/questions7" element={<Questions7 />} />
      <Route path="/questions8" element={<Questions8 />} />
      <Route path="/questions9" element={<Questions9 />} />
      <Route path="/questions10" element={<Questions10 />} />
      <Route path="/questions11" element={<Questions11 />} />
      <Route path="/questions12" element={<Questions12 />} />
      <Route path="/questions13" element={<Questions13 />} />
      <Route path="/questions14" element={<Questions14 />} />
      <Route path="/questions15" element={<Questions15 />} />
      <Route path="/questions16" element={<Questions16 />} />
      <Route path="/questions17" element={<Questions17 />} />
      <Route path="/questions18" element={<Questions18 />} />
          </Routes>
   </BrowserRouter>
  );
}
export default App;
