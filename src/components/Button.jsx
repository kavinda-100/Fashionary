

const Button = ({text, bgColor, textColor, func}) => {
  return (
    <button
    onClick={func} 
    className="text-xl p-4"
    style={{
        color: textColor ? textColor : "black",
        backgroundColor: bgColor ? bgColor : "#16E9E7"
    }}>
      {text}
    </button>
  )
}

export default Button