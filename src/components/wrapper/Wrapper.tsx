
interface PropsType {
  children: React.ReactNode
}

const Wrapper: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="container mx-auto py-6 px-4 ">
      {children}
    </div>
  )
}

export default Wrapper