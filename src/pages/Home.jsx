import { HOME_CONTENT,HOME_PCONTENT } from "../constants/index";
import home_pic from "../assets/images/home.jpg";
import cute_img from "../assets/images/cute.jpeg";

const Home = () => (
  <section id="home" className="min-h-screen pt-20  flex flex-wrap  items-center justify-center text-center  px-4">

    <div className="w-full animate-fade-in-down lg:w-1/2 lg:p-8 justify-center items-center flex flex-col">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-600 ">{HOME_CONTENT}</h1>
      <p className="text-2xl md:text-4xl font-semibold mb-4 text-pink-600">{HOME_PCONTENT}</p>
      <img className="md:w-40 w-20 rounded-md pb-5" src={cute_img} alt="cute image"/>
    </div>
    <div className="w-full lg:w-1/3 lg:p-8 justify-center ">
      <img src={home_pic} alt="picture at home section" className='w-[400px] h-auto rounded-lg'/>
    </div>
  </section>
);

export default Home;
