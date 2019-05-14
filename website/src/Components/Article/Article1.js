import React from 'react';
import './Article.scss';
import { NavLink, Link } from "react-router-dom";

import Navigation from "../../Styles/Navigation"
import Nav from "../../Styles/Nav"
import ExternalLink from "../../Styles/ExternalLink"

function Article1() {
  return (
    <div className="article-main-container">
      <div className="article-header one">
        <Link exact to="/articles/1" className="article-title">
          SOME THOUGHTS ON THE STATE OF CENTRAL BANKING
        </Link>
      </div>
      <div className="article-content">
        <p className="subtitle">QE: The Big Experiment</p>
        <p>
          The basis of central banking is macroeconomics. And macroeconomics
          stands on very shaky ground. Even though it’s treated by many
          economists as a hard science, the truth is it is a very soft one.
          Its models and theories cannot be tested and most of them have
          incredibly absurd assumptions. As Mervyn King, an ex-governor of the
          Bank of England,{" "}
          <ExternalLink
            target="_blank"
            href="https://www.amazon.com/End-Alchemy-Banking-Future-Economy/dp/0393353575"
          >
            puts it
          </ExternalLink>
          , “the models are reminiscent of the old joke about the physicist,
          the chemist and the economist stranded on a desert island with a
          single can of food. How are they to open it? The economist’s answer
          is, ‘Assume we have a can opener.” It’s funny and sad at the same
          time how well this joke captures the essence of current
          macroeconomic thinking. The assumptions baked into most of its
          models –by their absurd nature– render them useless.
        </p>
        <p>
          The deficiencies –or rather the reality– of current economic
          thinking were made evident during the recent financial crisis, which
          none of the world’s central bankers or the thousands of PHD
          economists at their disposal were able to predict. In fact, as
          Danielle Di Martino has pointed out in her{" "}
          <ExternalLink
            target="_blank"
            href="https://www.amazon.com/Fed-Up-Insiders-Federal-Reserve-ebook/dp/B01IOHQ9H8"
          >
            excellent book
          </ExternalLink>
          , before the crisis unfolded these statements were made by some of
          the most respected representatives of the global economics elite:
        </p>
        <p className="quote">
          "Not only have individual financial institutions become less
          vulnerable to shocks from underlying risk factors, but also the
          financial system as a whole has become more resilient." <br />
          <strong>—ALAN GREENSPAN, 2003</strong>
        </p>
        <p className="quote">
          "With respect to their safety, derivatives, for the most part, are
          traded among very sophisticated financial institutions and
          individuals who have considerable incentive to understand them and
          use them properly." <br />
          <strong>—BEN BERNANKE, NOVEMBER 15, 2005</strong>
        </p>
        <p className="quote">
          "First, if the bubble were to collapse on its own, would the effect
          on the economy be exceedingly large? Second, is it unlikely that the
          Fed could mitigate the consequences? Third, is monetary policy the
          best tool to use to deflate a house-price bubble? My answers to
          these questions in the shortest possible form are, ‘no,’ ‘no,’ and
          ‘no.’" <br />
          <strong>—JANET YELLEN, SEPTEMBER 27, 2005</strong>
        </p>
        <p className="quote">
          "While the decline in housing activity has been significant and will
          probably continue for a while longer, I think the concerns we used
          to hear about the possibility of a devastating collapse— one that
          might be big enough to cause a recession in the U.S. economy— have
          been largely allayed." <br />
          <strong>—JANET YELLEN, JANUARY 22, 2007</strong>
        </p>
        <p className="quote">
          I will be the first to say that it is always difficult to get
          monetary policy just right. But the Fed’s analytical prowess is
          top-notch, and our forecasting record is second to none. <br />
          <strong>—JANET YELLEN, JUNE 30, 2009</strong>
        </p>
        <p>
          This record of comments is truly amazing. It shows just how clueless
          central bankers were. To be fair, very few people really knew what
          was going on at the time, and certainly no one knew the extent of
          it. However, aside from central bankers, few dare to believe they
          really know how such a complex system as today’s globalized world
          economy really works. And fewer still would have the audacity to
          pull some of the most powerful levers of this system believing the
          outcome is predictable. And that’s precisely the root of the problem
          with modern central banking. It’s not that they were unable to
          predict the crisis that’s worrisome (that was expected), but rather
          their naive confidence in their ability to understand the
          intricacies of today’s complex economies. In this regard, Mr.
          Charlie Munger has very useful advice for central bankers: “Knowing
          what you don’t know is more useful than being brilliant”.
        </p>
        <p>
          Given this, one would think that the crisis would have marked an
          inflexion point in how central banking worked; that a new period of
          self-inspection and modesty would ensue. However, the exact opposite
          was true. Through QE, an initiative launched during the aftermath of
          the crisis, the world’s most prominent central banks began
          conducting the biggest experiment the economics science has ever
          seen, with a degree of confidence rarely seen in hard scientific
          fields such as Physics or Mathematics. QE is the Physics equivalent
          of having thousands of never-tested new rockets be sent out to space
          with millions of people inside of them. Wouldn’t that be crazy?
          Well, it’s 2019 and that experiment is still going, with plans to
          take it to new extremes in the coming years if needed.
        </p>
        <p className="last-in-section">
          Was QE necessary? Probably in the first few years after the crisis.
          And necessary because of previous central banking abuses sponsored
          by the Greenspan era. However, by now QE has been abused and taken
          to the extreme. There’s no clear way of rolling it back without
          causing tremendous pain throughout the world economy. Basically,
          we’ve been put in an unprecedented experiment to which there is no
          way out.
        </p>
        <p className="subtitle">Why is that bad?</p>
        <p className="underlined">1. Debt</p>
        <p>
          The recent financial crisis was caused by high levels of debt
          managed irresponsibly by the world’s top financial institutions.
          Since today’s economies –and especially the financial sector within
          them– are so complex, the dangers of all this activity lied hidden
          beneath the surface. No one really understood or could predict the
          monster that was being collectively created.
        </p>
        <p>
          Since then, ironically,{" "}
          <ExternalLink
            target="_blank"
            href="https://www.iif.com/Portals/0/Files/Global%20Debt%20Monitor_January_vf.pdf"
          >
            levels of debt have been rising
          </ExternalLink>{" "}
          thanks to QE. That basically means that the solution devised by
          central banks to a high debt crisis has been more, cheaper debt.
          Instead of letting the world economy deleverage and get to
          sustainable levels of debt (whatever that is), central banks have
          succeeded in pushing the world in the opposite direction.
        </p>
        <p>
          Hence, if QE isn’t rolled back (which at the moment seems highly
          unlikely), those debt levels are going to keep rising and with them
          the same kind of hidden risks (although in different, unforeseen
          places) that caused the last crisis. This time, however, the effects
          of a shock could be much more devastating as levels of debt are much
          higher and interest rates, much lower.
        </p>
        <p className="underlined">
          2. It is altering some of capitalism’s central dynamics
        </p>
        <p>
          A fundamental relationship in modern capitalism is the one between
          money and consumption. In today’s capitalist societies, to consume a
          good, you need to pay for it. The money with which you pay for that
          good represents some spent resources (i.e. time, capital, etc.).
        </p>
        <p>
          Through QE, however, central banks are altering the fundamental
          logic behind this dynamic. As of 2017 the Swiss central bank, for
          example, had an {" "}
          <ExternalLink
            target="_blank"
            href="https://qz.com/1140322/check-out-the-swiss-central-banks-insane-90-billion-investment-portfolio/"
          >
            $88 billion portfolio of US equities.
          </ExternalLink>{" "}
          It was the 27th biggest shareholder of Apple, 39th
          of Alphabet and 33rd of Microsoft, to name just a few. The way in
          which the Swiss bank acquired those shares, however, is quite
          different from the way any regular person or entity would. Given
          that central banks can print money, all the effort required to
          produce the money with which it acquired those shares was a few
          clicks. Basically, that “printed” money represented no spent
          resources. Just magic money produced out of thin air. It’s just as
          if a regular person could log into her bank account and there was a
          field where she could type whichever amount she wanted to have. And
          then, with the money produced through that exercise, she went out
          and bought some Apple shares. How about that?
        </p>
        <p className="last-in-section">
          The Swiss central bank is far from being alone in this enterprise.
          All other major central banks have endeavored into this territory in
          some way or another. What will be the consequences? No one really
          knows. And that’s precisely what’s frightening.
        </p>
        <p className="subtitle">Last thought</p>
        <p className="last-paragraph">
          If in a field such as Physics –in which experiments can be recreated
          and theories can be actually disproved–, what is regarded as fact
          has greatly changed over time, imagine what can happen to mainstream
          economic thought in just a few years. Yet that reality hasn’t hit
          many current mainstream economists. As recently as 2017, Janet
          Yellen stated that she “doesn’t believe we will see another
          financial crisis in our lifetimes”. Bold statement. Furthermore,
          central banks have begun speaking with ease about taking QE to fresh
          extremes through NIRP. The consequences of this are unknown. I
          really hope this ongoing experiment ends well. However, I doubt it
          will.
        </p>
      </div>
    </div>
  );
}

export default Article1;
