import CommentItem from "../CommentItem/CommentItem"
import './CommentList.scss'

function CommentList({ videosData }){
    return (
        <ul
            className="comment__list"
        >
            {videosData[0].comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </ul>
    )
}

export default CommentList