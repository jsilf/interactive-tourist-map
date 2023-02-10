import sunset from "../../assets/images/sunset.webp";
import stone from "../../assets/images/store-sten.webp";
import flowers from "../../assets/images/harmano-huvud-blommor.webp";
import sunsetHouse from "../../assets/images/hus-solnedgang.webp";

import { SwipeImage } from "./SwipeImage";
import LazyLoad from "react-lazy-load";

const imageList = [
  {
    image: stone,
    info: "Store sten",
  },
  {
    image: flowers,
    info: "Blommor vid Härmanö Huvud",
  },
  {
    image: sunsetHouse,
    info: "Hus vid Höpallen",
  },
];

export const About = () => {
  return (
    <div className="about">
      <section className="p-standard">
        <div className="content-standard">
          <div className="display-flex align-center justify-between about-text-img">
            <div className="text-wrap slide-left">
              <h2 className="about-title">Om Gullholmen och Härmanö</h2>
              <p>
                Samhället Gullholmen ligger på två öar, Gullholmen och Härmanö
                sammankopplade med en bro. Gullholmen kännetecknas av de många
                hus i äldre västkuststil som står tätt packade över varenda
                kvadratmeter av ön. Härmanö kännetecknas av vacker natur med
                gråa klippor genomsprängda av skogfyllda dalgångar och raviner
                bildade av istiden och omgärdat av västerhavet.
              </p>
            </div>

            <figure className="img-wrap_h overlay slide-right">
              <LazyLoad>
                <img src={sunset} alt="Solnedgång" />
              </LazyLoad>
              <figcaption>Solnedgång Höpallen</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="p-standard">
        <SwipeImage></SwipeImage>
      </section>

      <section className="p-standard">
        <div className="content-standard">
          <div className="about-text display-flex justify-center">
            <h2 className="about-title">Historia</h2>
            <p>
              Gullholmen är ett av västkustens äldsta fiskesamhällen och finns
              belagt i källor sedan 1500-talet men kan ha varit bebott mycket
              tidigare än så. Som i så många andra samhällen längs västkusten så
              är det fisket som har format öns historia och tillgången på fisk
              som bestämt huruvida fattigdom eller välstånd ska råda.
            </p>

            <p>
              Befolkningen på ön har växt under de stora sillperioderna för att
              sedan sjunka tillbaka när sillen drog sig bort. Under sillperioden
              år 1748-1808 tjänade man så mycket pengar att man hade råd att
              uppföra sin egen kyrka på ön (Gullholmens kyrka anno 1799). Under
              nästa sillperiod, mitten av 1800-talet byggdes stora delar av
              husen på ön och de fick då sitt särpräglade utseende.
            </p>

            <p>
              På 1850-talet byggdes en stor konservfabrik på ön och för att
              förse denna med fisk så hade man ca. 70 st större fiskebåtar varav
              de flesta var så kallade Kuttrar som var köpta i England. Dessa
              användes med framgång både för sill och makrillfiske samt
              fraktfart på kusten och ikringliggande länder.
            </p>

            <p>
              När befolkningen var som störst under sekelskiftet 1800-1900-talet
              bodde ca 800 personer på ön och det fanns skola, kyrka, affär samt
              krogar.
            </p>

            <p>
              Under mellankrigstiden blev ön en populär badort och många av
              Göteborgs mer välbärgade familjer reste dit med ångbåt för att
              antingen bo på pensionat eller inkvarterade hos någon i
              ortsbefolkningen. År 1942 startade även folkrörelseägda
              resebolaget Reso, en hotellanläggning på ön som döptes till
              Gullholmsbaden dit svenska arbetarfamiljer kunde resa och spendera
              sommarsemester. Anläggningen finns kvar än idag och turismen är
              fortfarande den dominerande inkomstkällan på ön. Numera finns en
              bofast befolkning på under hundra personer men som sväller upp
              till ett par tusen under sommaren.
            </p>
          </div>
        </div>
      </section>
      <section className="p-standard">
        <div className="content-standard">
          <div className="display-flex justify-around">
            {imageList.map((img, i) => {
              return (
                <figure key={i} className="img-wrap_v overlay">
                  <LazyLoad>
                    <img src={img.image} alt={img.info} />
                  </LazyLoad>
                  <figcaption>{img.info}</figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
