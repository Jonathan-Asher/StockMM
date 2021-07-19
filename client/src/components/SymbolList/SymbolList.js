import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SymbolList() {
  let history = useHistory();
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/cryptocurrencies/'+name);
  };

  return (
    <div className="SymbolList">
      <form onSubmit={handleSubmit}>
        <input name="symbol" 
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)} 
          placeholder="Enter symbol name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SymbolList;