import { newsImages } from "../../data";

function UserNews() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <h2>
        <strong>BOX NEWS!</strong>
      </h2>
      <div className="carousel-inner">
        {newsImages.map((image) => (
          <div
            key={image.id}
            className={
              image.id === 1 ? "carousel-item active" : "carousel-item"
            }
          >
            <img src={image.url} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default UserNews;
