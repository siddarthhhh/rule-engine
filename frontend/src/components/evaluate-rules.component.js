import React, { useState } from 'react';
import axios from 'axios';

function EvaluateRules() {
  const [userData, setUserData] = useState('');
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    
    try {
      const parsedUserData = JSON.parse(userData);
      
      axios.post('http://localhost:5000/api/rules/evaluate', { userData: parsedUserData })
        .then(res => {
          setResult(res.data.result);
        })
        .catch(err => console.log('Error: ' + err));
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  return (
    <div>
      <h3>Evaluate Rules</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>User Data (JSON format): </label>
          <textarea
            required
            className="form-control"
            value={userData}
            onChange={e => setUserData(e.target.value)}
            rows="5"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Evaluate" className="btn btn-primary" />
        </div>
      </form>
      {result !== null && (
        <div className="mt-3">
          <h4>Evaluation Result:</h4>
          <p>{result ? 'True' : 'False'}</p>
        </div>
      )}
    </div>
  );
}

export default EvaluateRules;