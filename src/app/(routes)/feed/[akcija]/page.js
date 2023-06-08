import "./chosenEvent.scss"

function Akcija() {
  console.log("kjdfnjdffdj");
  return (
    <div className="akcija">
      <section className="content">
        <div className="heading">
          <article>
            <h1>Neki nazivv dd  ds d s</h1>
            <h2>Crveni križ Zagreb</h2>
          </article>
          <section>
            <h2>24.lipnja.2023</h2>
          </section>
          <aside>
            <h2>Potrebno</h2>
            <h3>6</h3>
            <h2>Dolazi</h2>
            <h3>6</h3>
          </aside>
        </div>
        <article className="text-content">
          <p>
            Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem IpsumOpis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsums
            Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem IpsumOpis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsums
            Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsum Opis Lorem IpsumOpis Lorem Ipsum Opis Lorem Ipsum Opis Lorem Ipsums
          </p>
          <div>
            <h3>Potrebne stvari</h3>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </article>
        <article>
          <img src="../images/mainContentBack1.jpg" alt="slika akcije"/>
        </article>
        <article className="location">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.846529252445!2d15.934562076801248!3d45.814331910008384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6d3ecf8bf1d%3A0xdda2ef01f37a0510!2sCrveni%20kri%C5%BE%20Zagreb!5e0!3m2!1shr!2shr!4v1685997560928!5m2!1shr!2shr"
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </article>
      </section>
    </div>
  );
}

export default Akcija;
