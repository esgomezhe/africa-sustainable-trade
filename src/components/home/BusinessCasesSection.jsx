import React from 'react';

const cases = [
  {
    title: "Sustainable Coffee Farming in Ethiopia",
    description: "Implemented fair trade practices, increasing farmer income by 40% and improving crop quality."
  },
  {
    title: "Solar Energy Initiative in Kenya",
    description: "Provided solar panels to 100,000 homes, reducing carbon emissions and energy costs."
  },
  {
    title: "Textile Recycling Program in Nigeria",
    description: "Established a circular economy model, creating jobs and reducing textile waste by 30%."
  }
];

function BusinessCases() {
  return (
    <div className="business-cases">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Business Cases</h2>
        <div className="row">
          {cases.map((caseItem, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="case-item">
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessCases;