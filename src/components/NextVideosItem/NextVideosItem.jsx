import "./NextVideosItem.scss"

function NextVideosItem({ id}){
    console.log(id)
   return (
       <li
           className="next-video__item"
       >
           <img
               className="next-video__image"
               alt="sum"
               src={id.image}
           />
           <div
               className="next-video__container"
           >
               <h4
                   className="next-video__title"
               >
                   {id.title}</h4>
               <span
                   className="next-video__channel"
               >
               {id.channel}
           </span>
           </div>
       </li>
   )
}

export default NextVideosItem