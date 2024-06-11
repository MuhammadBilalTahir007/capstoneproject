import "./About.scss";
import chef from "../assets/chef.jpg";
import chefs from "../assets/chefs.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="text-content">
            <h2 className="heading">Little Lemon</h2>
            <h3 className="location">Pakistan</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non,
              nisi ut odit ex neque reprehenderit accusantium optio ratione eius
              temporibus veritatis maiores, architecto fugiat saepe suscipit
              totam cupiditate ul
            </div>
          </div>
          <section className="img-wrap">
            <img src={chef} alt="Chef cooking at restaurant" />
            <img src={chefs} alt="Two Chef's smiling" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
