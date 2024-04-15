import CommentItem from "../CommentItem/CommentItem"
import './CommentList.scss'

const CommentList = ({comments}) => {
    return (
        <ul
            className="comment__list"
        >
            {comments.map(comment => {
                return (
                <CommentItem key={comment.id} name={comment.name} id={comment.id} comment={comment.comment} timestamp={comment.timestamp}/>
                )
            })}
        </ul>
    )
}

export default CommentList
