import "./About.css";
import LogoW from "../../assets/LogoW.png";
function About() {
  return (
    <div className="About">
      <div className="content">
        <div className="table-responsive">
          <div className="title">About Boycott.org</div>
          <div className="subtitle">The concept :</div>
          <div className="conceptContent">
            <div className="conceptItem">
              <img src={LogoW} alt="" />
            </div>
            <div className="conceptItem card">
              "Boycott.org is a consumer-powered platform, funded by the crowd
              and guided by impartial moderation. We empower consumers by
              revealing brands that abuse their market position to engage in
              anti-consumer or unethical practices. Our mission is to provide
              viable alternatives, enabling individuals to make informed choices
              and withhold support from brands that betray their trust. We
              firmly believe in the consumer's power, recognizing the
              significance of each and every consumer in shaping a more
              responsible marketplace."
            </div>
          </div>
          <div className="subtitle">Our goals :</div>
          <div className="cardContent">
            <div className=" card">
              At Boycott.org, our mission is driven by a set of clear and
              impactful goals:A Transparency and Accountability: We aim to bring
              transparency to the marketplace. Our first goal is to identify and
              highlight brands that misuse their market influence, engage in
              anti-consumer or unethical practices, and breach the trust of
              their consumers.A Empowering Consumers: We believe that every
              consumer matters and has the right to make informed choices. Our
              platform empowers individuals by providing them with alternatives
              to brands that do not align with their values and expectations.A
              Consumer-Centric Marketplace: We aspire to contribute to the
              creation of a more consumer-centric marketplace. By promoting
              responsible consumer choices, we encourage brands to prioritize
              consumer interests, leading to a healthier and more ethical
              business environment.A Crowd-Funded Neutrality: As a crowd-funded
              and neutrally moderated platform, we are committed to staying free
              from biases and conflicts of interest. Our goal is to provide a
              fair and unbiased space where consumers can make decisions based
              on accurate information.A Restoring Consumer Power: We firmly
              believe that the power belongs to the consumer. Our ultimate goal
              is to restore the balance of power between brands and consumers,
              ensuring that consumers' trust is respected and
              valued.ABoycott.org is dedicated to achieving these goals by
              promoting responsible consumerism, transparency, and ethical
              behavior in the marketplace. Together, we can make a difference
              and shape a more accountable and consumer-driven world.
            </div>
          </div>
          <div className="subtitle">Contribution guidelines :</div>
          <div className="cardContent">
            <div className=" card">
              At Boycott.org, we welcome contributions from individuals who
              share our mission to promote ethical consumer choices and
              transparency in the marketplace. Whether you're interested in
              sharing information about brands or offering suggestions and
              improvements for our platform, we value your input. To ensure that
              contributions align with our goals and maintain the quality and
              integrity of our platform, please follow these guidelines:A
              Content Relevance: Contributions should directly relate to our
              mission, which is to identify and highlight brands engaging in
              anti-consumer or unethical practices and provide viable
              alternatives.A Accuracy and Credibility: Ensure that your
              contributions are accurate, fact-based, and backed by credible
              sources. We value transparency and strive for the highest level of
              reliability.A Neutrality: Boycott.org is committed to maintaining
              a neutral and unbiased stance. Contributions should avoid favoring
              or discrediting specific brands or individuals.A Respectful and
              Constructive: Be respectful in your language and tone when
              discussing brands or sharing suggestions. Constructive criticism
              is encouraged.A No Personal Attacks: Do not engage in personal
              attacks or make derogatory comments about individuals or brands.
              Focus on the issues and the facts.A Plagiarism: Ensure that your
              contributions are original and properly sourced when using
              external information or quotes. Plagiarism is not tolerated.A
              Legal and Ethical Considerations: Be mindful of copyright and
              trademark laws, as well as ethical guidelines. Do not engage in
              illegal activities or promote harmful behavior.A Privacy: Protect
              user privacy and confidential information. Do not share personal
              data without consent.
            </div>
          </div>
          <div className="subtitle">How does it work :</div>
          <div className="cardContent">
            <div className=" card">
              Boycott.org prioritizes user privacy and platform security through
              a data approach that leverages web 3 technologies, specifically
              blockchain. In this system, user data is not collected, and all
              platform information is securely stored on the blockchain. This
              decentralized and immutable ledger improves security by
              eliminating centralized vulnerabilities. Data remains
              cryptographically protected, providing an extra layer of
              confidentiality and making unauthorized access nearly impossible.
              This approach ensures the integrity and trustworthiness of the
              platform, enhancing user confidence in their contributions and
              choices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
