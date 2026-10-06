import { Link } from "react-router";

function Landing() {
  return (
    <div className="flex flex-col">
      <div className="  space-x-4 flex flex-row justify-center pt-[30vh]">
        <div className="flex flex-col pt-[5vh]">
          <h1 className="text-white text-6xl">Conor McCarthy</h1>
          <h3 className="text-white mt-0 text-xl self-end pr-1">
            Fullstack Software Engineer
          </h3>
        </div>
        <h1 className="text-white text-9xl font-audiowide">CM</h1>
      </div>
      <div className="flex flex-row gap-x-4 justify-center">
        <Link
          to={"/about"}
          className="bg-white p-0.5 text-center rounded-xl max-w-56"
        >
          About Me
        </Link>
        <Link className="bg-white p-0.5 text-center rounded-xl max-w-56">
          Experience
        </Link>
      </div>
    </div>
  );
}
export default Landing;
