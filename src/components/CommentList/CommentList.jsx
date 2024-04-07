import CommentItem from "../CommentItem/CommentItem"
import './CommentList.scss'

const CommentList = ({ videoComments }) => {
    return (
        <ul
            className="comment__list"
        >
            {videoComments.map((comment, index) => <CommentItem id={index} comment={comment} key={index}/>)}
        </ul>
    )
}

export default CommentList