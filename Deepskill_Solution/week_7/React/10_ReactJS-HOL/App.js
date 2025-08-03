import React from "react";

function App() {
  const officeSpaces = [
    {
      name: "SmartWorks Space",
      rent: 55000,
      address: "MG Road, Bengaluru",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    },
    {
      name: "WeWork Hub",
      rent: 72000,
      address: "Anna nagar, trichy",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    },
    {
      name: "Regus Tower",
      rent: 60000,
      address: "Anna nagar, chennai",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent >= 60000 ? "green" : "red",
      fontWeight: "bold"
    };
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental Listings</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "start"
        }}
      >
        {officeSpaces.map((office, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "300px",
              borderRadius: "8px",
              boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#fff"
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h2 style={{ fontSize: "1.2rem", marginTop: "10px" }}>
              {office.name}
            </h2>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
            <p>
              <strong>Rent:</strong>{" "}
              <span style={getRentStyle(office.rent)}>₹ {office.rent}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
