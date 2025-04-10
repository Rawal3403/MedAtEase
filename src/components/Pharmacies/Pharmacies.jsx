// import React, { useRef } from 'react';
// import './Pharmacies.css';

// // const pharmacies = [
// //   { id: 1, name: "HealthPlus Pharmacy", location: "Gutwala", rating: "4.8 ⭐" },
// //   { id: 2, name: "MediCare Store", location: "Canal Road", rating: "4.6 ⭐" },
// //   { id: 3, name: "LifeLine Pharmacy", location: "Kohinoor", rating: "4.7 ⭐" },
// //   { id: 4, name: "Wellness Drugstore", location: "Khurianwala", rating: "4.5 ⭐" },
// //   { id: 5, name: "CareHub Pharmacy", location: "Clock Tower", rating: "4.9 ⭐" },
// //   { id: 6, name: "Links Pharmacy", location: "D Ground", rating: "4.9 ⭐" }
// // ];

// const Pharmacies = () => {
//   const [pharmacies, setPharmacies] = useState([]);
//   const sliderRef = useRef();

//   useEffect(() => {
//     fetch('http://localhost:5000/pharmacies')
//       .then(res => res.json())
//       .then(data => setPharmacies(data));
//   }, []);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <section id="pharmacies" className="pharmacies">
//       <h2>Available Pharmacies</h2>
//       <div className="slider-wrapper">
//         <button className="scroll-btn" onClick={scrollLeft}>←</button>
//         <div className="pharmacy-slider" ref={sliderRef}>
//           {pharmacies.map((pharmacy) => (
//             <div key={pharmacy.id} className="pharmacy-card">
//               <h3>{pharmacy.name}</h3>
//               <p>{pharmacy.location}</p>
//               <span>{pharmacy.rating}</span>
//             </div>
//           ))}
//         </div>
//         <button className="scroll-btn" onClick={scrollRight}>→</button>
//       </div>
//     </section>
//   );
// };

// export default Pharmacies;



import React, { useEffect, useState, useRef } from 'react';
import './Pharmacies.css';

const Pharmacies = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/api/pharmacies')
      .then(res => res.json())
      .then(data => setPharmacies(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="pharmacies" className="pharmacies">
      <h2>Available Pharmacies</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn" onClick={scrollLeft}>←</button>
        <div className="pharmacy-slider" ref={sliderRef}>
          {/* {pharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="pharmacy-card">
              <h3>{pharmacy.name}</h3>
              <p>{pharmacy.location}</p>
              <span>{pharmacy.rating}</span>
            </div>
          ))} */}
          {pharmacies.map((pharmacy, index) => (
            <div key={`${pharmacy.name}-${index}`} className="pharmacy-card">
              <h3>{pharmacy.name}</h3>
              <p>{pharmacy.location}</p>
              <span>{pharmacy.rating}</span>
            </div>
          ))}
        </div>
        <button className="scroll-btn" onClick={scrollRight}>→</button>
      </div>
    </section>
  );
};

export default Pharmacies;