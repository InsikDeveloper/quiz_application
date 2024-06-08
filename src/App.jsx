import Header from "./components/Header";
import Questions from "./components/Questions";

export default function App() {
  return (
    <div className="container sm:max-w-[100vh] sm:max-h-[100vh] sm:w-full w-1/2 py-4 px-5 bg-slate-50 text-slate-700 shadow-xl rounded-lg mt-[8%]">
      <Header />
      <Questions />
    </div>
  );
}
