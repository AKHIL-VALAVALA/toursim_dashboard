function DestinationCard({ destination }) {
  const { image, name, location, rating, tag } = destination;

  return (
    <div className="destination-card">
      <div className="card-image-wrap">
        <img
          src={image || "https://placehold.co/400x260?text=Destination"}
          alt={name}
          loading="lazy"
        />
        <button className="card-heart" aria-label="Save destination">
          ♥
        </button>
        <span className="card-rating-badge">★ {rating ?? "4.8"}</span>
      </div>
      <div className="card-body">
        <div className="card-body-text">
          <h3>{name}</h3>
          <p className="card-location">{location}</p>
        </div>
        <button className="card-menu" aria-label="More options">
          ⋯
        </button>
      </div>
      {tag && <span className="card-tag">{tag}</span>}
    </div>
  );
}

export default DestinationCard;
