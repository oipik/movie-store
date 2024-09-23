import "./loader.css";

const Loader: React.FC = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
