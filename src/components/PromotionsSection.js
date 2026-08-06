const perks = [
  "Limited discounts available",
  "Flexible, split-payment plans",
  "On-campus pickup/transport",
  "Verified, student-friendly",
  "Easy support, every step of the way",
];

function PromotionsSection() {
  return (
    <section className="promotions" id="membership">
      <div className="promotions-inner">
        <div className="promo-text">
          <span className="swoosh" aria-hidden="true">⌒</span>
          <p className="eyebrow">Get 25% off for students</p>
          <h2>Student discounts available.</h2>
          <p className="promo-sub">Get ready for some fun in the sun</p>
          <ul>
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <a href="#booking" className="btn btn-primary">
            Explore Now
          </a>
        </div>

        <div className="promo-image-wrap">
          <span className="blob blob-red" aria-hidden="true" />
          <span className="blob blob-dark" aria-hidden="true" />
          <span className="blob blob-yellow" aria-hidden="true" />
          <div className="promo-circle">
            <img
              src="https://www.image2url.com/r2/default/images/1786026594743-5309ff5e-ded9-4d3d-8db9-1dbcaa77f355.png"
              
            />
          </div>
          <span className="dot dot-ring promo-ring" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default PromotionsSection;
