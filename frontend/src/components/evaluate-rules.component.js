import React, { useState } from 'react';
import axios from 'axios';

export default function EvaluateRules() {
  const [userData, setUserData] = useState('');
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/rules/evaluate', { userData: JSON.parse(userData) })
      .then(res => {
        setResult(res.data.result);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h3>Evaluate Rules</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User Data (JSON): </label>
          <textarea
            required
            className="form-control"
            value={userData}
            onChange={e => setUserData(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Evaluate" className="btn btn-primary" />
        </div>
      </form>
      {result !== null && (
        <div className="alert alert-info" role="alert">
          Evaluation Result: {result ? 'True' : 'False'}
        </div>
      )}
    </div>
  )
}