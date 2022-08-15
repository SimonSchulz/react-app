import React from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/views/errorMessage/errorMessage';

function ErrorPage() {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>Page doesn&apos;t exist</p>
      <Link
        style={{
          display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px', marginTop: '30px',
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default ErrorPage;
