import BarResult from './BarResult.jsx';
import dataJson from '../../data.json';

export default function Summary() {

  return (
      <div className="summary">
        <h2 className="summary__title">Summary</h2>
        {dataJson.map(
            ({category, score, icon}) => (
                <BarResult
                    key={category}
                    category={category}
                    score={score}
                    icon={icon}
                />
            )
        )}
        <button className="summary__button">Continue</button>
      </div>
  )
}