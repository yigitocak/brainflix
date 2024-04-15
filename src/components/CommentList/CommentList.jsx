import CommentItem from "../CommentItem/CommentItem"
import './CommentList.scss'

const CommentList = ({comments, videoId, onDeleteComment}) => {
    return (
        <ul
            className="comment__list"
        >
            {comments
                .sort((a,b) => {return b.timestamp - a.timestamp})
                .map(comment => {
                return (
                <CommentItem
                    key={comment.id}
                    name={comment.name}
                    id={comment.id}
                    comment={comment.comment}
                    timestamp={comment.timestamp}
                    videoId={videoId}
                    onDeleteComment={onDeleteComment}
                />
                )
            })}
        </ul>
    )
}

export default CommentList
