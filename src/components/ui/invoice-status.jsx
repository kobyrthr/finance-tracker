import React from 'react';
import { Badge } from './badge';

const InvoiceStatus = ({ type = 'pending', status = 'pending' }) => {
  return <Badge type={type}>{status}</Badge>;
};

export default InvoiceStatus;
