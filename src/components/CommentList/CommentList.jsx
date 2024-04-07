import CommentItem from "../CommentItem/CommentItem"
import './CommentList.scss'

function CommentList({ videosData }){
    return (
        <ul
            className="comment__list"
        >
            {videosData[0].comments.map((comment, index) => (
                <div key={index}><CommentItem id={index} comment={comment} /></div>
            ))}
        </ul>
    )
}

export default CommentList