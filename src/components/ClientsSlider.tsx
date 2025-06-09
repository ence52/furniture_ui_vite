import { FaStar } from "react-icons/fa";

const ClientsSlider = () => {
  return (
    <div className="flex flex-col items-center  md:gap-y-10 gap-y-2">
      <p className=" md:text-6xl md:w-1/2 w-3/4 text-center text-4xl">
        Our Clients Love To Talk About Us
      </p>
      <p className=" md:text-2xl md:w-2/5 text-neutral-500 w-3/4 text-center text-sm">
        Here from our satisfied clients abotu how we've transformed their spaces
        with creativity, preicision, and care.
      </p>
      <div className="w-full aspect-[2] bg-white rounded-3xl flex md:flex-row flex-col-reverse ">
        <div className="md:w-1/2 md:rounded-l-3xl md:py-0 py-6  flex flex-col space-y-4 md:px-16 px-8 justify-center">
          <p className="font-semibold md:text-4xl text-2xl">Client feedback</p>
          <p className="text-neutral-500 md:text-2xl md:line-clamp-none line-clamp-4 text-base md:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam
            eveniet modi possimus cum, repellendus saepe, consequatur asperiores
            odit rerum velit impedit deleniti praesentium iusto nemo sunt
            voluptatum autem natus! Nam excepturi consequuntur rerum tenetur in?
            Nesciunt quod dolore unde eum! Perspiciatis assumenda totam
            reiciendis fuga est nulla magni adipisci!
          </p>
          <div className="flex space-x-4 items-center ">
            <img
              src="https://www.gamereactor.com.tr/media/35/petergriffinis_4373513b.jpg"
              className="md:h-14 h-10 rounded-full aspect-square bg-neutral-500"
            />
            <div className="flex flex-col  justify-center">
              <p className="md:text-4xl text-xl font-semibold">Peter Griffin</p>
              <p className="md:text-xl text-sm text-neutral-500">
                Managing Director, Sphreule
              </p>
            </div>
          </div>
          <div className="flex space-x-2 md:text-3xl text-lg">
            {Array.from({ length: 5 }).map(() => (
              <FaStar color="orange" />
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
          className="md:w-1/2 object-cover  md:rounded-r-3xl rounded-t-3xl md:rounded-tl-none"
        ></img>
      </div>
    </div>
  );
};

export default ClientsSlider;
