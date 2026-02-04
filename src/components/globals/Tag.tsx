
type Props = {
  text : string
  variant? : 'orange'
}

const Tag = ({ text, variant = "orange" } : Props) => {

  const classes = {
    orange : 'bg-yellow text-blue'
  }
  return (
    <h6 className={`${classes[variant]} px-4 py-1.5 rounded-sm w-max text-xs font-medium`}>
      {text}
    </h6>
  )
}

export default Tag