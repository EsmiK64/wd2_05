import Navbar from "./components/Navbar";
import MainArticle from "./components/MainArticle";
import Sidebar from "./components/SideBar";
import BottomSection from "./components/BottomSection"

function App() {

  return (
    <>
      <div className="flex w-full justify-center">
        <main className="lg:w-3/4">
          <Navbar />
          <div className="flex flex-col lg:flex-row p-10 gap-10">
            <MainArticle />
            <Sidebar />
          </div>
          <BottomSection />
        </main>
      </div>
    </>
  )
}

export default App;