import React from 'react';

const CommentItem = ({ id, author, text, dateTime, deleteComment }) => {
    return (
        <li className='comment-list_item' role='arcticle'>
            <p>Автор: {author}</p>
            <p>Комментарий: {text}</p>
            <p>Дата и время: {dateTime}</p>
            <input
                type='submit'
                value='Удалить комментарий'
                onClick={() => {deleteComment(id)}}
            />
        </li>
    )
}

export default CommentItem;