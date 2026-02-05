import Description from "../components/Home/Description";
import Jury from "../components/Home/Jury";
import Lieu from "../components/Home/Lieu";
import Rules from "../components/Home/Rules";
import Recompenses from "../components/Home/Recompenses";
import Agenda from "../components/Home/Agenda";
import Partenaires from "../components/Home/Partenaires";
import CTA from "../components/Home/CTA";

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
