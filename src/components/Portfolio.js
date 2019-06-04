import React from 'react'
import PropTypes from 'prop-types'
import v4 from 'uuid'

const Portfolios = ({ portfolio }) => (
  <div>
    {portfolio.map(portfolio => (
      <article key={v4()} className="message">
        <div className="message-body">
          {portfolio.portfolioName}
          <br />
          <cite> – {portfolio.portfolioDescription}</cite>
        </div>
      </article>
    ))}
  </div>
)

Portfolios.propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      portfolioName: PropTypes.string,
      portfolioDescription: PropTypes.string,
      portfolioPrice: PropTypes.string,
      portfolioURL: PropTypes.string,
    })
  ),
}

export default Portfolios
