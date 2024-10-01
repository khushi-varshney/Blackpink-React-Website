import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Blackpink = () => {

  const navigate = useNavigate();
  const handleClick = (objectData) =>{
    navigate('/BP-Members', {state : { objectData }})
  }
  const [members, setMembers] = useState([
    {
      id: 1,
      image : "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/10/27/b0c4bf90-13cb-11eb-88e1-abf0a3fa7ebf_image_hires_151243.jpg?itok=ATv6dNJi&v=1603782768",
      title : "Jisoo",
      heading1: "Our Lovely Kim Jisoo !",
      heading2: "Warning : Kim Jisoo may cause excessive smiling and swooning.",
      para1 : "Jisoo, our resident 'Ace' and Queen of elegance, is secretely a master of sass and playfulness. As a BLINK, You might be obsessed with her honey-sweet like vocals.",
      para2: "She always delivers emotive performances that has make her growth as an artist and performer, a very Inspiring.",
      para3: "Membership Requirements : Love for her killer vocals and willingness to bow down to her greatness.",
      imageURL : "https://i.redd.it/r491ocf0lhrc1.jpeg",
      width: "450px"
    },
    {
      id: 2,
      image : "https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f",
      title : "Jennie",
      heading1: " JENNIE, The Queen of Fierce and Fabulous !",
      heading2: " Warning : Kim Jennie is like a spicy kimchi - She adds flavor to every situation.",
      para1 : "Not only slays the Game, She also serves the plate of Fashion and Feistiness. She is like a Fusion Of Wonders.",
      para2: " Jennie's artistic style is a unique blend of abstract expressionism, pop art and a dash of magic. Jennie's Creativity is a reflection of her journey in self-discovery.",
      para3: "Membership Requirements :  Always Be Ready to get Provoke By the Maestro Of Colors, JENNIE.",
      imageURL : "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg",
      width: "588px"
    },
    {
      id: 3,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAFuP7WqRgAZ7NLbbrcoyM6LXjUpZTDJ44yMraSVYS2nveShsFaE6MVsob4YHuhaoVGE&usqp=CAU",
      title : "Rosie",
      heading1: "Meet ROSIE, The Radiant Rebel Of Art and Imgaination !",
      heading2: "Warning : Park Chae-Young is like a firework explosion - Colourful and Vibrant.",
      para1 : "With a blend of magical realism, Rosie conjures up the world that are both whimsical and wonderful. She is a symbol of charm and imagination.",
      para2: "Rosie's Artisitic Journey is a wild ride of Reality and Innovation. Her Canvases are like portals to Hidden Dimensions of Emotions and Strength.",
      para3: "Membership Requirements : You should be able to belt out 'On The Ground' and 'Gone' with conviction.",
      imageURL : "https://upload.wikimedia.org/wikipedia/commons/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg",
      width: "562x"
    },
    {
      id: 4,
      image : "https://www.j-14.com/wp-content/uploads/2023/07/blackpink-lisa-.jpg?resize=800%2C800&quality=86&strip=all",
      title : "Lisa",
      heading1: "Lisa Manoban, The Thai Tornado taking the K-POP World by Storm !",
      heading2: "Warning : BMW ( BEAUTY MAKING WAVES ) Alert, She has got the moves of thousands Ninjas.",
      para1 : "Lisa is busy breaking hearts as she has got the flow, the flair, and the fierce attitude to match.",
      para2: "With her razor-sharp skills, she serves the looks that are always on fleek. Lisa is all about confidence, creativity, style and power.",
      para3: "Membership Requirements : LV your inner Lisa with a healthy dose of sass and unconditional love.",
      imageURL : "https://i.pinimg.com/originals/59/03/f4/5903f481affcc0f3d67376bbacc72fc9.jpg",
      width: "635px"
    },
  ])

  const BPObjectData = {
      heading1: "BLACKPINK, The Fierce Foursome Taking Over The World",
      heading2: "Warning : They Kill The Love and Hit The Blinks Like 'HIT YOU WITH THAT DDU-DDU-DDU'.",
      para1 : "They have bring the unstoppable force of K-POP Fury that has solidified their position as 'One of the most Successful and Influential K-POP Group, GLOBALLY'.",
      para2: "With numerous chart-topping hits, awards and records-broken, They have taken over our hearts with Mind-Blowing Music, Jaw-Dropping Choreo, Style that's always on fleek and Sassy Attitude that's Contagious.",
      para3: "Membership Requirements : Their Song is called 'As If It's Your Last' so live your life like 'AS IF IT'S YOUR LAST'.",
      imageURL : "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/08/blackpink-pink-venom-10802.webp?size=*:900",
      width: "452px",
  } 

  return (
    <div>
      <div>
      <img src="https://lh3.googleusercontent.com/lTqEp8pjOslDars8W-bnCpi71Ef-HhX8N0qPhmaCDW1g4smDqpAPzSbQgyccbDUNB1rBSoHqSlR4sSXk_Qh7hyDNfNrzg05zEEXzv_jT1aCE3CNQ=nu-e365-rj-q80-w900-h439-pp" className='w-[100%] relative' />
      <div className='flex justify-center items-center text-center bg-pink-300'><button className='hover:bg-pink-200'  onClick={()=>handleClick(BPObjectData)}><img className='w-full' src="https://d2bzx2vuetkzse.cloudfront.net/unshoppable_producs/3a34fb4b-7d8e-4fd9-95b2-10a17f0c3861"/></button></div>
      
      </div>
      
      <div className='w-full md:h-fit bg-black px-3 py-6 flex flex-col md:flex-row gap-20 items-center justify-center'>
      { members.map(member => {
        return <div key={member.id} className='flex flex-col justify-center align-center'>
            <img src={member.image} className="w-[39vw] h-[37vh] rounded-[50%]"/>
            <button onClick={()=>handleClick(member)} className='text-pink-400 font-extrabold text-3xl text-center font-serif hover:text-[1.885rem] hover:text-pink-500 hover:underline'><p className='text-center'>{member.title}</p></button>
        </div>
      })}
        
      </div>
    </div>
    
  )
}

export default Blackpink
