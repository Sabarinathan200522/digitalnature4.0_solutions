import React from "react";

function App() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/20201" }
  ];

  const books = [
    { name: "Master React", price: "670" },
    { name: "Deep Dive into Angular 11", price: "800" },
    { name: "Mongo Essentials", price: "450" }
  ];

  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div style={{ fontFamily: "Segoe UI", padding: "40px" }}>

      

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* Course Details */}
        <div>
          <h2 style={{ fontWeight: "bold" }}>Course Details</h2>
          {courses.map((course, index) => (
            <div key={index}>
              <p style={{ fontWeight: "bold", marginBottom: 0 }}>{course.name}</p>
              <p style={{ marginTop: 0 }}>{course.date}</p>
            </div>
          ))}
        </div>

        {/* Book Details */}
        <div
          style={{
            borderLeft: "3px solid green",
            borderRight: "3px solid green",
            padding: "0 40px"
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>Book Details</h2>
          {books.map((book, index) => (
            <div key={index}>
              <p style={{ fontWeight: "bold", marginBottom: 0 }}>{book.name}</p>
              <p style={{ marginTop: 0 }}>{book.price}</p>
            </div>
          ))}
        </div>

        {/* Blog Details */}
        <div>
          <h2 style={{ fontWeight: "bold" }}>Blog Details</h2>
          {blogs.map((blog, index) => (
            <div key={index}>
              <p style={{ fontWeight: "bold", marginBottom: 0 }}>{blog.title}</p>
              <p style={{ fontWeight: "bold", margin: "0" }}>{blog.author}</p>
              <p style={{ marginTop: 0 }}>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
