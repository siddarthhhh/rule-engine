import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RulesList() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rules/')
      .then(response => {
        setRules(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h3>Rules</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Rule String</th>
          </tr>
        </thead>
        <tbody>
          {rules.map(rule => (
            <tr key={rule._id}>
              <td>{rule.name}</td>
              <td>{rule.ruleString}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}