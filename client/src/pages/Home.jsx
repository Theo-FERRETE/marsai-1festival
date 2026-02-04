import Description from "../components/Description";
import Jury from "../components/Jury";
import Lieu from "../components/Lieu";
import Rules from "../components/Rules";
import Recompenses from "../components/Recompenses";
import Agenda from "../components/Agenda";
import Partenaires from "../components/Partenaires";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <div>
        <h1>MARSAI</h1>
        <p>L'apogée du cinéma génératif</p>
      </div>
      <Description />
      <Jury />
      <Lieu />
      <Rules />
      <Recompenses />
      <CTA />
      <Agenda />
      <Partenaires />
    </>
  );
}

export default Home;
