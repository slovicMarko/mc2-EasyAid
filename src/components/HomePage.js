import Image from "next/image";
import Link from "next/link";
import akcija1 from "public/images/akcija1.png";
import { EventBubble } from "@/components/event/event";
import InLove from "@/components/inLoveSVG.js";
import "./cssFiles/HomePage.scss";

const homeEvents = [
  {
    id: 1,
    title: "Event 1 na kojem radis to to i to",
    date: "1. ožujka. 2023.",
    organizer: "Hrvatski Crveni Križ",
    about: "Loreremm u bj bh bh bhb hbh bh bh bh bhb h hbh bh bh bhb hb mmmm",
  },
  {
    id: 2,
    title: "Event 2",
    date: "1. travnja. 2023.",
    organizer: "72 sata bez kompromisa",
    about: "Loremmmf",
  },
  {
    id: 3,
    title: "Event 3",
    date: "1. svibnja. 2023.",
    organizer: "Župa Kutina",
    about:
      "Loremfs hhhh hhhh hhhhhhhhh hhhhhhhhhhhh hhhhhhhh hhhhhhhhh hhhh hhhhhhhmm",
  },
];

function HomePage() {
  return (
    <>
      <div className="front-windows">
        <div className="content">
          <InLove className="photo" />
          <h1>Volontiraj i pomogni drugima oko sebe!</h1>
          <p className="front-window-font">
            Kroz volontiranje imate priliku ne samo pomoći drugima, već i sami
            sebi pružiti jedinstveno iskustvo koje će vas obogatiti i ispuniti.
          </p>

          <div className="event-buttons">
            <Link className="link-btn green-btn" href="/feed">
              Pronađi događaj
            </Link>
            <Link className="link-btn regular-btn" href="/">
              Stvori događaj
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="headings">Želiš volontirati, a ne znaš gdje početi?</h2>
        <div className="top-events">
          <div className="event-lijevi">
            <EventBubble
              isPreview
              title={homeEvents[0].title}
              date={homeEvents[0].date}
              organizer={homeEvents[0].organizer}
              about={homeEvents[0].about}
            />
          </div>
          <div className="event-sredina">
            <EventBubble
              isPreview
              title={homeEvents[1].title}
              date={homeEvents[1].date}
              organizer={homeEvents[1].organizer}
              about={homeEvents[1].about}
            />
          </div>
          <div className="event-desni">
            <EventBubble
              isPreview
              title={homeEvents[2].title}
              date={homeEvents[2].date}
              organizer={homeEvents[2].organizer}
              about={homeEvents[2].about}
            />
          </div>
        </div>
        <div className="about-easyAid">
          <div className="image-container">
            <Image
              src={akcija1}
              alt="Volonteri"
              layout="responsive"
              className="photo1"
              style={{borderRadius: "20px"}}
            />
          </div>
          <div className="side-text">
            <h4>Uvijek aktualni događaji</h4>
            <p>
              U odjeljku "Aktualni događaji" možeš vidjeti sve aktualne akcije
            </p>

            <h4>Pretraga po lokaciji</h4>
            <p>Želiš pronaći akciju u svojoj blizini?</p>

            <h4>Aktualnost događaja</h4>
            <p>
              Zaprati organizatora tako da nikad ne propustiš niti jednu željenu
              akciju
            </p>

            <Link className="link-btn green-btn" href="/feed">
              Pronađi događaj
            </Link>
          </div>
        </div>

        <h2 className="headings">Problem ti je organizacija i promocija?</h2>
        <div className="about-organisation">
          <div className="side-text">
            <h4>Sve na jednom mjestu</h4>
            <p className="opis-za-poticanje">
              Dosta vam je korištenja različitih aplikacija kako bi dogovorili
              akciju? Nudimo vam aplikaciju u kojoj možete dogovoriti sve
              detalje unutar jednog obrasca.
            </p>
            <Link className="link-btn regular-btn" href="/">
              Stvori događaj
            </Link>
          </div>
          <div className="image-container2">
            <Image
              src="/images/organizator_homepage.svg"
              alt="Organizator slika"
              width={400}
              height={250}
              sizes="(max-width: 400px)"
              style={{
                position: "relative",
                margin: "0",
              }}
              className="photo2"
            />
          </div>
        </div>

        <div className="partneri">
          <hr />
          <h2 className="headings">Partneri u suradnji</h2>
          <div className="sponsor-images">
            <div className="sponsor-logo">
              <Image
                src="/images/porscheDigital.jpg"
                alt="Porsche Digital Croatia"
                title="Porsche Digital Croatia"
                fill
                className="sponsor"
              />
            </div>
            <div className="sponsor-logo">
              <Image
                src="/images/tvzMc2.png"
                alt="Tvz Mc2"
                title="Tvz Mc2"
                fill
                className="sponsor"
              />
            </div>

            <div className="sponsor-logo">
              <Image
                src="/images/tvzLogo.png"
                alt="Tehničko veleučilište u Zagrebu"
                title="Tehničko veleučilište u Zagrebu"
                fill
                className="sponsor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
