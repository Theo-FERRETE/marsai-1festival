function Lieu() {
  return (
    <section id="lieu">
      <h2>Lieu de l'événement</h2>
      <p >
        Le festival se tiendra au <strong>Palais des Congrès de Paris</strong>, 
        situé au cœur de la ville avec un accès facile en transports en commun. 
        Parking disponible sur place.
      </p>
      <div>
        <iframe
          title="Plan du lieu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999688644956!2d2.293408315674897!3d48.87084597928846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcb8b109dcf%3A0xa1f9d27ef4a0e3f5!2sPalais%20des%20Congrès%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1696786263506!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Lieu;
