export default function Result() {
  return (
      <div className="result">
        <h3 className="result__title">Your Result</h3>
        <div className="result__circle">
          <p className="result__value">76</p>
          <span className="result__total">of 100</span>
        </div>
        <h4 className="result__subtitle">Great</h4>
        <p className="result__description">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
  )
}