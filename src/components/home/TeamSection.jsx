import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';

// Import team member images
import team1 from '../../img/team/team-1.jpg';
import team2 from '../../img/team/team-2.jpg';
import team3 from '../../img/team/team-3.jpg';

const teamMembers = [
  {
    name: "Walter White",
    position: "Chief Executive Officer",
    description: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    image: team1
  },
  {
    name: "Sarah Jhonson",
    position: "Product Manager",
    description: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    image: team2
  },
  {
    name: "William Anderson",
    position: "CTO",
    description: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    image: team3
  },
];

const TeamMember = ({ name, position, description, image }) => (
  <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
    <div className="member-img">
      <img src={image} className="img-fluid" alt={name} />
      <div className="social">
        <a href="/"><i className="bi bi-twitter-x"></i></a>
        <a href="/"><i className="bi bi-facebook"></i></a>
        <a href="/"><i className="bi bi-instagram"></i></a>
        <a href="/"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
    <div className="member-info">
      <h4>{name}</h4>
      <span>{position}</span>
      <p>{description}</p>
    </div>
  </div>
);

function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="team" className="team section">
      <div className="container">
      <h2 className="section-title" data-aos="fade-up">Our Team</h2>
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;