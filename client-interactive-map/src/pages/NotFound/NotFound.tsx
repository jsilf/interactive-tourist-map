import bod from "../../assets/images/bod.webp";

export const NotFound = () => {
  return (
    <div className="not-found">
      <section className="p-standard">
        <div className="content-standard">
          <div className="display-flex justify-around align-center">
            <h2>Oops, något gick fel. Sidan du försöker nå finns inte 🤓</h2>

            <figure className="img-wrap-v overlay">
              <img src={bod} alt="Sjöbod" />
              <figcaption>Dörr till en sjöbod</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};
