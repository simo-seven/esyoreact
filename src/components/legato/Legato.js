// import Repertoire from "./Repertoire";
// import OrchestraMembers from "./OrchestraMembers";
// import Concerts from "./Concerts";
// import ComingSoon from "../reusable/ComingSoon";
// import data from "../../data/concerts/venues.json";
// import members from "../../data/concerts/orchestra.json";
// import repertoire from "../../data/concerts/repertoire.json";
import { Helmet } from "react-helmet-async";

const Legato = () => {
  //const concerts = data;
  //const programme = repertoire;
  return (
    <>
      <Helmet>
        <title>LEGATO | European Spirit of Youth Orchestra</title>
        <meta
          name="description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <link rel="canonical" href="https://esyo.eu/concertours" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LEGATO | European Spirit of Youth Orchestra"
        />
        <meta
          property="og:description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <meta property="og:url" content="https://esyo.eu/concertours" />
        <meta property="og:image" content="https://esyo.eu/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LEGATO | European Spirit of Youth Orchestra"
        />
        <meta
          name="twitter:description"
          content="Discover the European Spirit of Youth Orchestra's concert tour dates and locations. Join us for unforgettable performances across Europe."
        />
        <meta name="twitter:image" content="https://esyo.eu/logo.png" />
      </Helmet>

      <>
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="container-fluid">
              <div className="row">
                <img
                  src="/img/legato/logos/Interreg ITA-SLO logo RGB colour white.png"
                  alt=""
                />
                <p className="m-3 text-justify">
                  Il progetto è finanziato dall’Unione europea nell’ambito del Fondo per piccoli progetti GO! 2025 del Programma Interreg VI-A Italia Slovenia 2021-2027, gestito dal GECT GO. <br />
                  Projekt financira Evropska unija iz Sklada za male projekte GO! 2025 Programa Interreg VI-A Italija-Slovenija 2021-2027, ki ga upravlja EZTS GO.
                  <br />
                  I link ai siti www.ita-slo.eu e www.euro-go.eu/spf  
                </p>
              </div>
              <div className="row">
                <p className="m-5 text-justify">
                  Il progetto LEGATO sviluppa un modello transfrontaliero di
                  co-creazione artistica che unisce arte, comunità e
                  sostenibilità, rafforzando al contempo l'identità europea
                  condivisa dell'area Collio-Brda. L'obiettivo generale del
                  progetto è sviluppare un quadro transfrontaliero sostenibile
                  di cooperazione che collega i giovani musicisti, i docenti e
                  le comunità locali, utilizzando la cultura come strumento di
                  apprendimento, collaborazione e sviluppo sostenibile.
                  <br />
                  Il partenariato del progetto LEGATO, Insieme nella musica
                  riunisce il partner capofila italiano SGME (Scuola per Giovani
                  Musicisti Europei APS) e il partner sloveno JSKD (Javni sklad
                  Republike Slovenije za kulturne dejavnosti).
                  <br />
                  Il cuore del progetto è costituito da residenze di formazione
                  e co-creazione musicale per giovani musicisti, che combinano
                  formazione, produzione artistica e vita comunitaria. Nel corso
                  di due residenze di più giorni, giovani musicisti provenienti
                  da numerosi Paesi europei, insieme a mentori, direttori e
                  partner locali, co-creeranno e si formeranno all'interno di un
                  programma orchestrale. I partecipanti saranno ospitati da
                  famiglie di viticoltori e aziende agricole delle Brda,
                  sperimentando così una forma unica di scambio interculturale e
                  apprendimento "nella comunità".
                  <br />I risultati delle residenze saranno presentati
                  attraverso concerti transfrontalieri. I concerti si terranno
                  in Slovenia e in Italia, in luoghi simbolici che rappresentano
                  la connessione culturale e storica dell'area. Infine, la
                  creazione di una banca dati digitale e multimediale garantirà
                  la documentazione del processo e l'utilizzo a lungo termine
                  dei risultati a fini culturali e turistici.
                </p>
                <p className="m-5 text-justify">
                  Projekt LEGATO razvija čezmejni model umetniškega
                  soustvarjanja, ki združuje umetnost, skupnost in trajnost ter
                  hkrati krepi skupno evropsko identiteto območja Collio-Brda.
                  Splošni cilj projekta je razviti trajnostni čezmejni okvir
                  sodelovanja, ki povezuje mlade glasbenike, mentorje in lokalne
                  skupnosti, pri čemer uporablja kulturo kot orodje za učenje,
                  sodelovanje in trajnostni razvoj.
                  <br />
                  Partnerstvo projekta LEGATO, Skupaj v glasbi, združuje
                  italijanskega vodilnega partnerja SGME (Scuola per Giovani
                  Musicisti Europei APS) in slovenskega partnerja JSKD (Javni
                  sklad Republike Slovenije za kulturne dejavnosti). <br />
                  Jedro projekta so glasbene rezidence za usposabljanje in
                  soustvarjanje mladih glasbenikov, ki združujejo izobraževanje,
                  umetniško produkcijo in življenje v skupnosti. Med dvema
                  večdnevnima rezidencama bodo mladi glasbeniki iz številnih
                  evropskih držav skupaj z mentorji, dirigenti in lokalnimi
                  partnerji soustvarjali in se izobraževali znotraj orkestrskega
                  programa. Udeležence bodo gostile vinogradniške družine in
                  kmetije v Brdih, s čimer bodo izkusili edinstveno obliko
                  medkulturne izmenjave in učenja "v skupnosti". <br />
                  Rezultati rezidenc bodo predstavljeni na čezmejnih koncertih.
                  Koncerti bodo potekali v Sloveniji in Italiji, na simboličnih
                  lokacijah, ki predstavljajo kulturno in zgodovinsko povezanost
                  območja. Nazadnje bo vzpostavitev digitalne in multimedijske
                  baze podatkov zagotovila dokumentiranje procesa in dolgoročno
                  uporabo rezultatov v kulturne in turistične namene.
                </p>
                <p className="m-5 text-justify">
                  The LEGATO project develops a cross-border model of artistic
                  co-creation that unites art, community, and sustainability,
                  while strengthening the shared European identity of the
                  Collio-Brda area. The general objective of the project is to
                  develop a sustainable cross-border framework for cooperation
                  that connects young musicians, teachers, and local
                  communities, using culture as a tool for learning,
                  collaboration, and sustainable development.
                  <br />
                  The partnership of the LEGATO project, Together in Music,
                  brings together the Italian lead partner SGME (Scuola per
                  Giovani Musicisti Europei APS) and the Slovenian partner JSKD
                  (Javni sklad Republike Slovenije za kulturne dejavnosti).
                  <br />
                  The heart of the project consists of musical training and
                  co-creation residencies for young musicians, combining
                  training, artistic production, and community life. Over the
                  course of two multi-day residencies, young musicians from
                  numerous European countries, together with mentors,
                  conductors, and local partners, will co-create and train
                  within an orchestral program. Participants will be hosted by
                  winemaking families and farms in Brda, thus experiencing a
                  unique form of intercultural exchange and learning "in the
                  community".
                  <br />
                  The results of the residencies will be presented through
                  cross-border concerts. The concerts will be held in Slovenia
                  and Italy, in symbolic locations representing the cultural and
                  historical connection of the area. Finally, the creation of a
                  digital and multimedia database will ensure the documentation
                  of the process and the long-term use of the results for
                  cultural and tourism purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Legato;
