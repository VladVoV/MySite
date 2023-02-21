import '../../App.css';
import Navbar from "../../Components/Navbar/Navbar";
import VolunteerFaq from "../../Components/Main info/VolunteerFAQ/VolunteerFAQ";
import WhyVolunteer from "../../Components/Main info/Why Volunteer/WhyVolunteer";
import Cards from "../../Components/Main info/Cards/Cards";
import SecondFAQ from "../../Components/Main info/SecondFAQ/SecondFAQ_first";
import SecondFAQ_second from "../../Components/Main info/SecondFAQ/SecondFAQ_second";
import WhatWeDoing from "../../Components/Main info/WhatWeDoing/WhatWeDoing";
import We from "../../Components/Main info/We/We";
import Footer from "../../Components/Footer/Footer";

function App() {
  return (
      <div>
        <Navbar/>
        <VolunteerFaq/>
          <WhyVolunteer/>
          <Cards/>
          <SecondFAQ/>
          <SecondFAQ_second/>
          <WhatWeDoing/>
          <We/>
          <Footer/>
      </div>
  );
}

export default App;
