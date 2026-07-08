function FeaturedSection() {
  function handleSignUpClick() {
    const target = document.querySelector("#booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="swoosh" aria-hidden="true">⌒</span>
          <p className="eyebrow">Discover the beauty of the tropics</p>
          <h1>
            Tropical
            <br />
            Destinations
            <br />
            <span className="hero-light">For Student</span>
          </h1>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="btn btn-primary" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-circle">
            <img
              src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb7?w=600&h=600&fit=crop&q=80"
              alt="Student"
            />
          </div>
          <span className="dot dot-yellow" aria-hidden="true" />
          <span className="dot dot-green" aria-hidden="true" />
          <span className="dot dot-ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
