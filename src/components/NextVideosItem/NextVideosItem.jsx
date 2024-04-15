import "./NextVideosItem.scss"
import {Link} from "react-router-dom";


function NextVideosItem({ id, title, channel, src }){

   return (
       <Link
           className="next-video__item"
           to={`/video/${id}`}
       >
           <img
               className="next-video__image"
               alt={title}
               src={src}
           />
           <div
               className="next-video__container"
           >
               <h4
                   className="next-video__title"
               >{title}
                   </h4>
               <span
                   className="next-video__channel"
               >{channel}
           </span>
           </div>
       </Link>
   )
}

export default NextVideosItem