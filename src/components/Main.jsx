import TweetForm from "./TweetForm";

const Main = () => {
  return (
    <main className="col-span-4 md:col-span-3 border border-gray-800">
      <header className="font-bold p-4 border-b-2 border-[#4746466f] ">
        Home
      </header>
      <TweetForm />
    </main>
  );
};

export default Main;
