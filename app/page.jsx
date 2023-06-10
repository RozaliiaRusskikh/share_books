import "@styles/globals.css";
import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Share & Find</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Your favorite books</span>
      <p className="desc text-center">
        BookCase is a digital platform designed to connect avid readers,
        providing them with a convenient space to explore, exchange, and share
        their beloved books
      </p>
      <Feed />
    </section>
  );
};

export default page;
