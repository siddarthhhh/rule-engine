import React, { useState } from 'react';
import axios from 'axios';

export default function CreateRule() {
  const [name, setName] = useState('');
  const [ruleString, setRuleString] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const rule = {
      name: name,
      ruleString: ruleString
    }

    axios.post('http://localhost:5000/api/rules/add', rule)
      .then(res => console.log(res.data));

    setName('');
    setRuleString('');
  }

  return (
    <div>
      <h3>Create New Rule</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rule String: </label>
          <input type="text"
                 required
                 className="form-control"
                 value={ruleString}
                 onChange={e => setRuleString(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Rule" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}