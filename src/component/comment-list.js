import React from 'react';
import CommentItem from './comment-list_item';

const CommentList = ({ comments, deleteComment}) => {
    return (
        <ul className='comment-list'>
            {
                comments.map(comment => {
                    const { id, author, text, dateTime } = comment;
                    return (
                        <CommentItem
                            id={id}
                            key={id}
                            author={author}
                            text={text}
                            dateTime={dateTime}
                            deleteComment={deleteComment}
                        />
                    )

                })
            }
        </ul>
    )
}
export default CommentList;