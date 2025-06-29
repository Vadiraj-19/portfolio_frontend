
import pic from "../assets/edit.png";

const Home = () => {
return (
    <div className="md:flex md:flex-row flex flex-col-reverse font-poppins justify-around ">
      <div class="flex absolute md:relative flex-col justify-center items-start h-screen pl-10 md:pl-24 text-left">
        <h1 class="text-4xl text-shadow-xl text-shadow-sky  flex md:text-6xl font-extrabold text-gray-300 leading-tight">
          Turning ideas into <br />
          interactive digital <br />
          experiences.
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-400 font-semibold">
          Hey, I’m{" "}
          <span class="text-white font-bold">Vadiraj Narayan Betageri</span>
          <br />
           Full Stack Developer | Problem Solver | Tech Explorer
        </p>
        <div className="flex w-full">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg text-2xl hover:opacity-90 transition duration-300 ml-3 z-20">Download Resume</button>
        </div>
        
      </div>

      <img
        src={pic}
        className=" w-full md:w-[40vw] object-cover h-screen aspect-auto"
        alt="profile"
      />
    </div>
  );
}

export default Home