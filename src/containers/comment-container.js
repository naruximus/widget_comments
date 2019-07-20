import React from 'react';
import InputItem from '../component/input-item';
import CommentList from '../component/comment-list';

const CommentContainer = ({comments, self}) => {
    return (
        <div className='app-container'>
            <h2>Comment App</h2>
            <CommentList
                comments={comments}
                deleteComment={self.deleteComment}
            />
            <InputItem
                placeholder='Автор'
                type='text'
                name='newAuthor'
                value={self.state.newAuthor}
                onChange={self.inputChange}
            />
            <InputItem
                placeholder='Комментарий'
                type='text'
                name='newText'
                value={self.state.newText}
                onChange={self.inputChange}
            />
            <InputItem
                type='button'
                name='button'
                value='Добавить комментарий'
                onClick={self.onAddToDoButton}
            />

        </div>
    )
}
export default CommentContainer;