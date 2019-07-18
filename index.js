import Css from './src/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import InputItem from './src/component/input-item';
import CommentList from './src/containers/comment-list';
const uniqid = require('uniqid');

const storage = JSON.parse(localStorage.getItem('comments'));
const defaultComments = [
    { id: uniqid(), author: 'Данила', text: 'Всем привет!', dateTime: '13.07.2019, 18:22:13' },
    { id: uniqid(), author: 'Виктория', text: 'Здравствуйте.', dateTime: '13.07.2019, 19:22:13' },
    { id: uniqid(), author: 'Алексей', text: 'Давно не виделись', dateTime: '13.07.2019, 20:22:13' },
];

class CommentApp extends React.Component {
    constructor () {
        super();
        this.state = {
            comments: storage || defaultComments,
            newId: uniqid(),
            newAuthor: '',
            newText: ''
        };
        this.deleteComment = this.deleteComment.bind(this)
        this.inputChange = this.inputChange.bind(this);
    }

    deleteComment(key) {
        let comments = [...this.state.comments];
        comments.map((el, i) => {
            if(el.id === key){
                comments.splice(i, 1);
            }
        })
        this.setState({
            comments
        });
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    addComment() {
        const comments = [...this.state.comments];
        let date = new Date();
        date = date.toLocaleString("ru");

        comments.push({
            id: this.state.newId,
            author: this.state.newAuthor,
            text: this.state.newText,
            dateTime: date
        });
        this.setState({
            comments,
            newId: uniqid(),
            newAuthor: '',
            newText: '',
        });
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    inputChange({ target }) {
        this.setState({ [target.name]: target.value })
    }
    render () {
        const comments = [...this.state.comments];
        const self = this;
        return (
            <div className='app-container'>
                <h2>Comment App</h2>
                <CommentList
                    comments = {comments}
                    deleteComment = {this.deleteComment}
                />
                <InputItem
                    placeholder='Автор'
                    type='text'
                    name = 'newAuthor'
                    value={this.state.newAuthor}
                    onChange={this.inputChange}
                 />
                <InputItem
                    placeholder='Комментарий'
                    type='text'
                    name='newText'
                    value={this.state.newText}
                    onChange={this.inputChange}
                />
                <input 
                    type='button'
                    value='Добавить комментарий'
                    onClick = {() => {
                        if (this.state.newText && this.state.newAuthor) {
                            this.addComment();
                        } else{
                            alert('Заполните все поля');
                        }
                    }}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <CommentApp />,
    document.querySelector('#app')
);