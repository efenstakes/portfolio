
type ComponentProps = {
    space: number
}
const VSpacer = ({ space=2 }: ComponentProps) => {
  return (
    <div style={{ height: `${space}rem` }} />
  )
}

export default VSpacer
