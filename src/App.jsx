import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pharmacies from './components/Pharmacies/Pharmacies';
import Footer from './components/Footer/Footer'
// import Login from './components/Auth/Login/Login'
// import Signup from './components/Auth/Signup/Signup'
const App = () => {
  return (
      <div>
        <Sidebar/>
        <div>
          <Navbar/>
          <div id="home"><Hero /></div>
          <div id="features"><Features /></div>
          <div id="how-it-works"><HowItWorks /></div>
          <div id="pharmacies"><Pharmacies /></div>
          <Footer/>
        </div>
      </div>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import HowItWorks from './components/HowItWorks/HowItWorks';
// import Pharmacies from './components/Pharmacies/Pharmacies';
// import Footer from './components/Footer/Footer';
// import Login from './components/Auth/Login/Login';
// import Signup from './components/Auth/Signup/Signup';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home layout route */}
//         <Route
//           path="/"
//           element={
//             <div>
//               <Sidebar />
//               <div>
//                 <Navbar />
//                 <div id="home"><Hero /></div>
//                 <div id="features"><Features /></div>
//                 <div id="how-it-works"><HowItWorks /></div>
//                 <div id="pharmacies"><Pharmacies /></div>
//                 <Footer />
//               </div>
//             </div>
//           }
//         />

//         {/* Auth routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import HowItWorks from './components/HowItWorks/HowItWorks';
// import Pharmacies from './components/Pharmacies/Pharmacies';
// import Footer from './components/Footer/Footer';
// import Login from './components/Auth/Login/Login';
// import Signup from './components/Auth/Signup/Signup';

// const Home = () => (
//   <div>
//     <Sidebar />
//     <div>
//       <Navbar />
//       <div id="home"><Hero /></div>
//       <div id="features"><Features /></div>
//       <div id="how-it-works"><HowItWorks /></div>
//       <div id="pharmacies"><Pharmacies /></div>
//       <Footer />
//     </div>
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home layout route */}
//         <Route path="/" element={<Home />} />

//         {/* Auth routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
