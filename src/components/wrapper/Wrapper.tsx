
interface PropsType {
  children: React.ReactNode
}

const Wrapper: React.FC<PropsType> = ({ children }) => {
  return (
    <section className="container mx-auto py-6 px-4 ">
      {children}
    </section>
  )
}

export default Wrapper