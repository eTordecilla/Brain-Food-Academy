import React from 'react';
import BarraNav from '../Components/BarraNav';

const PublicLayout = ({children}) => {
    return (
        <div>
            <BarraNav/>
            {children}
        </div>
    );
};

export default PublicLayout;