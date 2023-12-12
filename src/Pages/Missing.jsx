import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="mt-[80px] w-full h-auto flex justify-center items-center">
      <div className="flex flex-col gap-5 py-10">
        <h1 className="text-4xl text-slate-gray font-poppins">404 - Page Not Found</h1>
        <Link to="/"
        className="text-2xl text-slate-gray font-poppins hover:text-lite-base text-center mt-5"
        >Go Home</Link>
      </div>
    </main>
  );
};

export default Missing;
