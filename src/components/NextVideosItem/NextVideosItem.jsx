import "./NextVideosItem.scss"

function NextVideosItem({ image, id, channel , title, changeVideo }){


   return (
       <li
           onClick={() => changeVideo(id)}
           className="next-video__item"
       >
           <img
               className="next-video__image"
               alt="sum"
               src={image}
           />
           <div
               className="next-video__container"
           >
               <h4
                   className="next-video__title"
               >
                   {title}</h4>
               <span
                   className="next-video__channel"
               >
               {channel}
           </span>
           </div>
       </li>
   )
}

export default NextVideosItem