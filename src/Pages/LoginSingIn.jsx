import { GoogleIcon, GitHubIcon } from "../assets/icons";

const IconLogo = ({logo, name}) => {
  return (
    <>
      <img 
        src={logo} 
        alt={name}
        className="w-8 h-8"
        />
    </>
  )
}

const LoginSingIn = () => {
  return (
    <main className="mt-[80px] lg:bg-login-bg-img object-contain bg-no-repeat">

    <section className="flex flex-col lg:flex-row justify-center items-center lg:px-[10%] lg:gap-9 py-10">
    {/* LogIn Form */}
    <div className="w-full lg:h-[500px] px-20 py-5 lg:bg-primary lg:opacity-80 lg:rounded-xl">
      <div className="p-3">
        <h1 className="text-3xl text-center text-slate-gray font-montserrat font-bold">LogIn</h1>
      </div>
      <div className="p-3">
        <form className="flex flex-col justify-center items-center">
          <input type="text" placeholder="User Name" className="w-full h-16 p-3 py-3 text-lg leading-normal border border-slate-gray rounded-md outline-none" />
          <input type="password" placeholder="Password" className="w-full h-16 p-3 text-lg leading-normal rounded-md outline-none border border-slate-gray mt-3" />
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary">LogIn</button>
          <p className="text-lg text-slate-gray font-palanquin font-semibold text-center p-3">Or</p>
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary"> 
          <div className="flex flex-row gap-4 justify-center items-center">
            <IconLogo logo={GoogleIcon} name={'google icon'}/>
            <p>LogIn with Google</p>
          </div> 
          </button>
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary"> 
          <div className="flex flex-row gap-4 justify-center items-center">
            <IconLogo logo={GitHubIcon} name={'google icon'}/>
            <p>LogIn with GitHub</p>
          </div> 
          </button>
          <p className="text-lg text-slate-gray p-3">don't have an account? <span className="text-gray-800 font-bold">SignIn</span></p>
        </form>
      </div>
    </div>

    {/* SingIn Form */}
    <div className="w-full h-[500px] px-20 py-5 lg:bg-primary lg:opacity-80 lg:rounded-xl">
      <div className="p-3">
        <h1 className="text-3xl text-center text-slate-gray font-montserrat font-bold">SignIn</h1>
      </div>
      <div className="p-3">
        <form className="flex flex-col justify-center items-center">
          <input type="text" placeholder="User Name" className="w-full h-16 p-3 my-3 text-lg leading-normal border border-slate-gray rounded-md outline-none" />
          <input type="email" placeholder="Email" className="w-full h-16 p-3 my-3  text-lg leading-normal border border-slate-gray rounded-md outline-none" />
          <input type="password" placeholder="Password" className="w-full h-16 p-3 my-3  text-lg leading-normal border border-slate-gray rounded-md outline-none" />
          <input type="password" placeholder="Confirm Password" className="w-full h-16 p-3 my-3  text-lg leading-normal border border-slate-gray rounded-md outline-none" />
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary">SingIn</button>
          <p className="text-lg text-slate-gray font-palanquin font-semibold text-center p-3">Or</p>
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary">
            <div className="flex flex-row gap-4 justify-center items-center">
              <IconLogo logo={GoogleIcon} name={'google icon'}/>
              <p>SignIn with Google</p>
            </div>
           </button>
          <button className="w-full h-16 mt-3 border border-slate-gray text-black rounded-md font-montserrat font-bold text-xl hover:bg-slate-gray hover:text-primary">
          <div className="flex flex-row gap-4 justify-center items-center">
            <IconLogo logo={GitHubIcon} name={'google icon'}/>
            <p>SignIn with GitHub</p>
          </div>
          </button>
          <p className="text-lg text-slate-gray p-3">all ready have an account? <span className="text-gray-800 font-bold">LogIn</span></p>
        </form>
      </div>
    </div>

    </section>
      
    </main>
  );
};

export default LoginSingIn;
