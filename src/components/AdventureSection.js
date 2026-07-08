const testimonials = [
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
];

const perks = [
  "Affordable rates for students",
  "Flexible trip packages",
  "Group discounts available",
  "24/7 student travel support",
];

function AdventureSection() {
  function handleExploreClick() {
    const target = document.querySelector("#destinations");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="adventure" id="about">
      <span className="ring-decor" aria-hidden="true" />

      <div className="adventure-inner">
        <div className="testimonials">
          <span className="swoosh swoosh-small" aria-hidden="true">⌒</span>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.avatar} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="adventure-text">
          <h2>
            Tropical Adventure
            <br />
            <span>for Students</span>
          </h2>
          <p className="adventure-sub">
            Student Tropical Vacation Packages And Recharge
          </p>
          <ul>
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={handleExploreClick}>
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdventureSection;
