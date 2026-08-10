export default function About() {
    return (
      <div className="page">
        <h1>About</h1>
  
        <div className="about-card">
          <h2>Movie Explorer</h2>
  
          <p>
            Movie Explorer allows users to select a movie genre and view movies
            belonging to that genre.
          </p>
  
          <p>
            Movie and genre information is loaded dynamically from the TMDB API.
          </p>
  
          <p>
            Search history is saved in Local Storage.
          </p>
  
          <h3>Technologies</h3>
  
          <p>React, TypeScript, Vite, React Router, API and Local Storage.</p>
  
          <h3>Developer</h3>
  
          <p>Name: Your Name</p>
        </div>
      </div>
    );
  }
  
