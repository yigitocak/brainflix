import CommentForm from "../CommentForm/CommentForm"
import "./Comments.scss"
import CommentList from "../CommentList/CommentList"
import {useState, useEffect} from "react";

function Comments({ comments, id }) {
    const [commentRender, setCommentRender] = useState([]);

    useEffect(() => {
        setCommentRender(comments);
    }, [comments]);

    const handleAddComment = (newComment) => {
        setCommentRender(prevComments => [newComment, ...prevComments]);  // Prepend new comment to maintain order
    };
    return !comments ? <div>Loading...</div> : (
        <section
                className="comment"
        >
            <h3
                className="comment__count"
            >
                {comments.length} Comments
            </h3>
            <CommentForm id={id} onAddComment={handleAddComment}/>
            <CommentList comments={commentRender}/>
        </section>
    )
}

export default Comments