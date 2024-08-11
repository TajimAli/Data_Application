import React, { useState } from 'react';
import Form from './form';
import Table from './table';

const Application = () => {
  const [updateTable, setUpdateTable] = useState(false);

  const handleSave = () => {
    setUpdateTable(!updateTable);
  };

  return (
    <div>
      <Form onSave={handleSave} />
      <Table key={updateTable} />
    </div>
  );
};

export default Application;