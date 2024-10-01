import { useState } from "react";
import { NavLink } from "react-router-dom";

const Section1 = () => {
  const [data, setData] = useState([
    {
      link: "https://youtu.be/ioNng23DkIM?feature=shared",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/e/eb/Blackpink_-_How_You_Like_That.png",
    },
    {
      link: "https://youtu.be/2S24-y0Ij3Y?feature=shared",
      imageURL:
        "https://i1.sndcdn.com/artworks-000516850659-ujfsmz-t240x240.jpg",
    },
    {
      link: "https://youtu.be/gQlMMD8auMs?feature=shared",
      imageURL:
        "https://i1.sndcdn.com/artworks-78uF8fDZ4I8wKH5r-3JMMsA-t500x500.jpg",
    },
    {
      link: "https://youtu.be/bwmSjveL3Lc?feature=shared",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/Blackpink_-_Boombayah.jpg",
    },
    {
      link: "https://youtu.be/vRXZj0DzXIA?feature=shared",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonbqdiKFNAJ_s49oDxmewiFU0P5q4DUeaNA&s",
    },
    {
      link: "https://youtu.be/IHNzOHi8sJs?feature=shared",
      imageURL: "https://pbs.twimg.com/media/FwDB7dUWAAAaB5u.jpg",
    },
    {
      link: "https://youtu.be/dyRsYk0LyA8?feature=shared",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Blackpink_-_Lovesick_Girls.jpg",
    },
    {
      link: "https://youtu.be/Amq-qlqbjYA?feature=shared",
      imageURL:
        "https://i1.sndcdn.com/artworks-wUBM4mybBl3l6QpB-4gsznQ-t500x500.jpg",
    },
    {
      link: "https://youtu.be/POe9SOEKotk?feature=shared",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BMjZjNTAyZWEtNzJjMy00NjIwLThkNDEtN2QzZDQ0NzJiZjhiXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_.jpg",
    },
    {
      link: "https://youtu.be/9pdj4iJD08s?feature=shared",
      imageURL:
        "https://i1.sndcdn.com/artworks-000541190028-di8peg-t500x500.jpg",
    },
  ]);

  const MoveLeft = () => {
    let imageContainer = document.querySelector(".imageContainer");
    imageContainer.scrollLeft -= 100;
  };

  const MoveRight = () => {
    let imageContainer = document.querySelector(".imageContainer");
    imageContainer.scrollLeft += 100;
  };

  return (
    <div className="relative overflow-hidden w-[100%]">
      <p
        onClick={() => {
          MoveRight();
        }}
        className="absolute right-14 bg-black border-[3px] border-white rounded-[50%] bottom-10 p-1 text-green-400"
      >
        <lord-icon
          src="https://cdn.lordicon.com/usmjfnfh.json"
          trigger="hover"
          stroke="bold"
          colors="primary:#16c72e"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </p>
      <p
        onClick={() => {
          MoveLeft();
        }}
        className="absolute border-[3px] border-white left-14 bg-pink-600 rounded-[50%] bottom-10 p-1 text-green-400"
      >
        <lord-icon
          src="https://cdn.lordicon.com/eavayqgw.json"
          trigger="hover"
          stroke="bold"
          colors="primary:#16c72e"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </p>
      <div className="bg-black w-[100%] p-2 border-t-2 flex flex-row justify-center items-center gap-3 overflow-hidden imageContainer px-[98rem] ">
        {data.map((item) => {
          return (
            <NavLink key={item.link} to={item.link}>
              <img src={item.imageURL} className="rounded-md min-w-[300px]" />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
