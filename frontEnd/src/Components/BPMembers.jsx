import { useLocation } from "react-router-dom"

const BPMembers = () => {

  const location = useLocation();
  const { objectData } = location.state || {};

  return (
    <div>
      <div className='bg-black grid grid-rows-1 md:grid-cols-2 gap-0'>
        <div>
            <img src={objectData.imageURL} alt="image" width={objectData.width} className='pl-10 p-4' />
        </div>
        <div className='text-pink-400 gap-1 pr-9 p-4 flex justify-center items-center flex-col'>
            <h1 className="text-xl font-bold text-pink-600 p-3 underline">{objectData.heading1}</h1>
            <h3 className="text-lg font-semibold p-[0.15rem]">{objectData.heading2}</h3>
            <p className="text-lg text-pink-300">{objectData.para1}</p>
            <p className="text-lg text-pink-300">{objectData.para2}</p>
            <p className="text-2xl font-extrabold py-4 text-purple-600 ">{objectData.para3}</p>
        </div>
      </div>
    </div>
  )
}

export default BPMembers
