import { useState, useEffect } from "react";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setShowPopup(true), 100);
    const exitTimer = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => setShowPopup(false), 400);
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (showPopup) {
      setAnimate(true);
    }
  }, [showPopup]);

  return (
    showPopup && (
      <div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
        }`}
        style={{
          width: "90%", // Lebar responsif untuk mobile
          maxWidth: "400px", // Lebar maksimum untuk desktop
          border: "1px solid #e5e7eb", // Border warna netral
          zIndex: 50, // Pastikan muncul di atas elemen lainnya
        }}
      >
        <h2 className="font-bold text-lg md:text-xl text-center text-blue-600">
          Welcome to My Portfolio!
        </h2>
        <p className="text-center text-sm md:text-base text-gray-700 mt-2">
          I'm glad you're here. Feel free to explore! :D
        </p>
      </div>
    )
  );
};

export default WelcomePopup;
4