import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewPostForm(props){
  let _title = null;
  let _date = null;
  let _article = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, date: new Moment(), article: _article.value, id: v4()});
    _title.value = '';
    _article.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Article Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='article'
          placeholder='Describe your article.'
          ref={(textarea) => {_article = textarea;}}/>
        <button type='submit'>Add to Blog</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;