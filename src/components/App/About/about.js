import { useTranslation } from "react-i18next";

import "./about.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <h1 className="title">{t("about_us")}</h1>
      <span className="about__descr descr descr--align-left">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi.
      </span>
    </section>
  );
};

export default About;
