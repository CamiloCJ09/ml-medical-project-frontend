import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home-text">
      <h2>Welcome to HEALTH IA</h2>
      <p>
        HEALTH IA is an innovative application powered by artificial
        intelligence that aims to prevent cervical cancer in women by analyzing
        historical data of the mortality rate of this disease.
      </p>
      <h3>Our focus</h3>
      <p>
        Cervical cancer is a leading cause of death among women worldwide, and
        early detection is essential to improve survival rates and reduce the
        devastating impact of this disease. <br /> HEALTH AI uses artificial
        intelligence algorithms trained on historical cervical cancer mortality
        rate data, along with users' demographic and clinical information, to
        identify patterns and risk factors that may indicate the presence of the
        disease in its early stages.
      </p>
      <p>
        <h3>how it works</h3>
        Medical information is provided regarding: A- <b>Hinselmann</b> B -
        <b>Citology</b> C- <b>Schiller</b> Using advanced machine learning
        techniques, <b>HEALT IA</b> analyzes this data to generate a
        personalized risk profile for each user.
      </p>
      <p>
        Additionally, the app offers personalized recommendations on screening,
        medical follow-up, and preventative measures that can help reduce the
        risk of developing cervical cancer. These recommendations are based on
        the latest medical guidelines and continuous analysis of real-time data
        to ensure the accuracy and effectiveness of the system.
      </p>
    </div>
  );
}
export default Home;
