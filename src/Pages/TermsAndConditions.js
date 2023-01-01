import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>this is terms and condition page</h3>
            <p>Go back to: <Link to='/login'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;