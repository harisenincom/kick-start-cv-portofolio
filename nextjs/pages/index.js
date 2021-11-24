import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harisenin CV Portofolio</title>
      </Head>

      <main>
        <header className="flex header">
          <div className="header__left">My CV</div>
          <div className="header__right">
            <h4 className="bold">Home</h4>
            <h4>About</h4>
            <h4>Portofolio</h4>
          </div>
          <button>Contact Me</button>
        </header>
        <section>
          <section id="introduction">
            <div className="introduction__left">
              <div className="introduction__title">
                <p>Hello my name is !</p>
                <h3 className="title">Baiq.</h3>
              </div>
              <div className="introduction__description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi deleniti dicta dolor incidunt maxime necessitatibus
                  officiis reiciendis voluptatibus? At enim facere itaque
                  laborum possimus quidem rem sequi, sit temporibus veniam.
                </p>
              </div>
            </div>
            <div className="introduction__right">
              <Image
                src="/michael-dam-mEZ3PoFGs_k-unsplash-min.png"
                height="300"
                width="200"
                alt="profile-picture"
              />
            </div>
          </section>
          <section id="information">
            <div className="information__left">
              <Image
                src="/michael-dam-mEZ3PoFGs_k-unsplash-min.png"
                height="300"
                alt="profile-picture"
                width="200"
              />
            </div>
            <div className="information__right">
              <div className="information__title">
                <h3 className="title">Personal Detail</h3>
              </div>
              <div className="information__detail">
                <p>
                  <span>
                    <i className="fa fa-user"></i>&nbsp;Mirza
                  </span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    &nbsp;Jakarta, 01 Januari 1990
                  </span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-envelope-o" aria-hidden="true">
                      &nbsp;mirza@rocket.com
                    </i>
                  </span>
                </p>
              </div>
              <div className="information__description">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi atque consectetur eum id necessitatibus nisi obcaecati
                  quo tenetur. Corporis doloremque error expedita impedit, iste
                  non officiis pariatur quia sit voluptates?
                </p>
              </div>
            </div>
          </section>
          <section id="experience">
            <h3 className="title">Work Experience</h3>
            <div className="experience__content">
              <p className="date">Januari 2020 - sekarang</p>
              <h3 className="job">SOFTWARE ENGINEER</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores dolore fugiat id maiores nesciunt optio quae repellat
                rerum suscipit? Accusantium beatae delectus deleniti eos illo
                impedit ipsam officia, perspiciatis quae.
              </p>
            </div>

            <div className="experience__content">
              <p className="date">Januari 2018 - Januari 2020</p>
              <h3 className="job">SOFTWARE ENGINEER</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores dolore fugiat id maiores nesciunt optio quae repellat
                rerum suscipit? Accusantium beatae delectus deleniti eos illo
                impedit ipsam officia, perspiciatis quae.
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
