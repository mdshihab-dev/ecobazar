interface ButtonProps {
    text: string,
    styles?: string
}


const Button= ({text, styles} : ButtonProps) => {
  return (
    <button className={`${styles} cursor-pointer`}> {text} </button>
  )
}

export default Button