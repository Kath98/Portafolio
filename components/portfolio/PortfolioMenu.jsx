/* eslint-disable @next/next/no-img-element */
import { AiOutlinePlayCircle,AiOutlineGithub } from "react-icons/ai";


const PortfolioMenu = ({portfolioData}) => {
  return  (
    <div className='text-gray-200  flex flex-col md:flex-row gap-2 mt-4' >
         {
           portfolioData &&  portfolioData.map((item)=>{
              const {id,img, title,linkGit,content} = item;
               return (
               <div className=' border-2 border-pink-500 rounded p-1 ' key={id} >
                  <img src={img} alt="about" 
                  className="w-full md:w-60 h-60 object-cover  rounded" /> 
                  {title && <h1 className='text-xl font-normal capitalize p-2 text-base'>{title}</h1>}
                <p className="w-full md:w-60 px-2 pb-3 text-gray-300 lowercase font-thin">{content.slice(0,60)}</p>
                  <div className="flex p-2 pt-0 justify-between">
                    <a href={linkGit} className="px-4 py-1 bg-pink-500 rounded">
                      <AiOutlinePlayCircle className="text-white bg-pink-500 text-3xl p-1 rounded-full"/>
                    </a>
                    <a href={linkGit}  className="px-4 py-1 bg-pink-500 rounded">
                      <AiOutlineGithub className="text-white bg-pink-500 text-3xl p-1 rounded-full"/>
                    </a>
                  </div>
                </div>)
         
            })
                }
    </div>
  )
}

export default PortfolioMenu