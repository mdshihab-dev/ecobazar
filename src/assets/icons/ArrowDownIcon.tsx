interface PropsType {
  height?: number,
  width?: number
}

const ArrowDownIcon = ({height=5,width=8}: PropsType) => {
  return (
    <svg
  width={width}
  height={height}
  viewBox="0 0 8 5"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.5 0.5L4 4L0.5 0.5"
    stroke="#666666"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

  )
}

export default ArrowDownIcon