import React from 'react';
import Admin from './admin.jsx';
let researchDirections = require('../../file/home');
import superagent from 'superagent';
require('../css/editor.css');

class HomeEditor extends React.Component {

  componentDidMount() {
    this.paperName.value = researchDirections;
  }

  submit() {
    let content = this.paperName.value;
    superagent.post('/api/home')
      .send({content})
      .end((err, res)=> {
        alert('saved!');
      })
  }

  render() {
    return (
      <div>
        <Admin/>
        <div className="editor">
          <textarea className="textArea" type="text" ref={(ref) => {
            this.paperName = ref;
          }}/>
        </div>
        <div className="button-center">
          <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>提交</button>
        </div>
      </div>
    )
  }
}

export default HomeEditor;
