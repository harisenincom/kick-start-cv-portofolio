import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harisenin CV Portofolio</title>
      </Head>

      <main>
        <header class="flex header">
          <div class="header__left">My CV</div>
          <div class="header__right">
            <h4 class="bold">Home</h4>
            <h4>About</h4>
            <h4>Portofolio</h4>
          </div>
          <button>Contact Me</button>
        </header>
        <section>
          <section id="introduction">
            <div class="introduction__left">
              <div class="introduction__title">
                <p>Hello my name is !</p>
                <h3 class="title">Mirza Chilman.</h3>
              </div>
              <div class="introduction__description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi deleniti dicta dolor incidunt maxime necessitatibus
                  officiis reiciendis voluptatibus? At enim facere itaque
                  laborum possimus quidem rem sequi, sit temporibus veniam.
                </p>
              </div>
            </div>
            <div class="introduction__right">
              <img
                src="/michael-dam-mEZ3PoFGs_k-unsplash-min.png"
                height="300"
                alt="profile-picture"
              />
            </div>
          </section>
          <section id="information">
            <div class="information__left">
              <img
                src="/michael-dam-mEZ3PoFGs_k-unsplash-min.png"
                height="300"
                alt="profile-picture"
              />
            </div>
            <div class="information__right">
              <div class="information__title">
                <h3 class="title">Personal Detail</h3>
              </div>
              <div class="information__detail">
                <p>
                  <span>
                    <i class="fa fa-user"></i>&nbsp;Mirza
                  </span>
                </p>
                <p>
                  <span>
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    &nbsp;Jakarta, 01 Januari 1990
                  </span>
                </p>
                <p>
                  <span>
                    <i class="fa fa-envelope-o" aria-hidden="true">
                      &nbsp;mirza@rocket.com
                    </i>
                  </span>
                </p>
              </div>
              <div class="information__description">
                <p class="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi atque consectetur eum id necessitatibus nisi obcaecati
                  quo tenetur. Corporis doloremque error expedita impedit, iste
                  non officiis pariatur quia sit voluptates?
                </p>
              </div>
            </div>
          </section>
          <section id="experience">
            <h3 class="title">Work Experience</h3>
            <div class="experience__content">
              <p class="date">Januari 2020 - sekarang</p>
              <h3 class="job">SOFTWARE ENGINEER</h3>
              <p class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores dolore fugiat id maiores nesciunt optio quae repellat
                rerum suscipit? Accusantium beatae delectus deleniti eos illo
                impedit ipsam officia, perspiciatis quae.
              </p>
            </div>

            <div class="experience__content">
              <p class="date">Januari 2018 - Januari 2020</p>
              <h3 class="job">SOFTWARE ENGINEER</h3>
              <p class="paragraph">
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
