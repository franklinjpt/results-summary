export default function BarResult({category,icon,score}) {

  let backgroundColor;
  let color;
  switch (category) {
    case "Reaction":
      backgroundColor = "var(--light-red-transparent)"
      color = "var(--light-red)"
      break
    case "Memory":
      backgroundColor = "var(--orangey-yellow-transparent)"
      color = "var(--orangey-yellow)"
      break
    case "Verbal":
      backgroundColor = "var(--green-teal-transparent)"
      color = "var(--green-teal)"
      break
    case "Visual":
      backgroundColor = "var(--cobalt-blue-transparent)"
      color = "var(--cobalt-blue)"
      break
  }

  return(
      <div className="barResult" style={{backgroundColor}}>
        <div className="barResult__description bar">
          <img src={`../../${icon}`} alt={category}  className="barResult__icon" />
          <p className="barResult__name" style={{color}}>{category}</p>
        </div>
        <div className="barResult__result bar">
          <p className="barResult__value">{score}</p>
          <span className="barResult__total"> / 100</span>
        </div>
      </div>
  )
}