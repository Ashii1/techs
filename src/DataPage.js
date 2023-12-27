import React, { useEffect, useState } from 'react';
import './DataPage.css'; 

const DataPage = ({ onBack }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  const limitedData = data.slice(0, 20);

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>Information </h2>
      
      {loading ? (
        <p>Gathering...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Name</th>
              <th>Price</th>
              <th>Website Link</th>
              <th>Product Link</th>
            </tr>
          </thead>
          <tbody>
            {limitedData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.brand}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.price}
                  
                </td>
                <td>
                {item.currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataPage;
