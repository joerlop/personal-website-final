import React from 'react';
import './Resources.scss';

function Resources() {
  return (
    <div class="resources-main-container">
      <div className="nav-background"></div>
      <div class="resources-content">
        <div class="resources-title">
          <h1>Crypto Resources</h1>
          <h2>
            This is a compendium of my favorite crypto resources. Includes
            podcasts, interviews, books, research papers and the best material
            that has caught my attention over the years.
          </h2>
        </div>
        <div class="resources">
          <div class="resource">
            <h1>Investing</h1>
            <a
              target="_blank"
              href="
            https://behindthetech.libsyn.com/006-wences-casares-betting-on-bitcoin-in-a-big-way"
            >
              Betting on Bitcoin in a Big Way - Wences Casares
            </a>
            <a
              target="_blank"
              href="https://www.kanaandkatana.com/valuation-depot-contents/2019/4/11/the-case-for-a-small-allocation-to-bitcoin"
            >
              The case for a small allocation to Bitcoin - Wences Casares
            </a>
            <a
              target="_blank"
              href="https://medium.com/john-pfeffer/an-institutional-investors-take-on-cryptoassets-690421158904"
            >
              An (Institutional) Investor’s Take on Cryptoassets - John
              Pfeffer
            </a>
          </div>
          <div class="resource">
            <h1>History</h1>
            <a
              target="_blank"
              href="https://www.amazon.com/Age-Cryptocurrency-Blockchain-Challenging-Economic/dp/1250081556"
            >
              The Age of Cryptocurrency - Paul Vigna, Michael Casey
            </a>
            <a
              target="_blank"
              href="https://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250X"
            >
              Digital Gold - Nathaniel Popper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

