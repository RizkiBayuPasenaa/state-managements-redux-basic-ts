
interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void;
  children: React.ReactNode
}
function Button(props : ButtonProps) {
  const { type, onClick, children} = props
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}

export default Button;