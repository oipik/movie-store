import { Outlet } from "react-router-dom";

import { Header, Footer, Wrapper } from "../../components";

const Layout: React.FC = () => {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <header className="w-full h-[100px] flex items-center dark:bg-[#0B0C0E]">
        <Header />
      </header>
      <main className="flex-[1_0_auto] bg-[#F6F6F6] dark:bg-[#0B0C0E]">
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
      <footer className="pt-[20px] pb-[60px] dark:bg-[#0B0C0E] h-[180px] bg-white">
        <Footer />
      </footer>
    </div>
  );
};

// Если убрать главного div flex flex-col и c main flex,
// то footer будет прижимать к main, но в других местах ломаться верстка будет
// favourite, если запрос выдаст ошибку

export default Layout;
