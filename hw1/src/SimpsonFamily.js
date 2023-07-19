import React from 'react';
import FamilyMember from './FamilyMember';
import './SimpsonFamily.css';

const SimpsonFamily = () => {
    return (
        <div className="family">
            <h1 className="family-title">The Simpson Family</h1>
            <div className="family-row">
                <FamilyMember
                    name="Homer Simpson"
                    age={39}
                    gender="Male"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
                />
                <FamilyMember
                    name="Marge Simpson"
                    age={36}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
                />
                <FamilyMember
                    name="Bart Simpson"
                    age={10}
                    gender="Male"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                />
            </div>
            <div className="family-row">
                <FamilyMember
                    name="Lisa Simpson"
                    age={8}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
                />
                <FamilyMember
                    name="Maggie Simpson"
                    age={1}
                    gender="Female"
                    photoUrl="https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
                />
            </div>
        </div>
    );
};

export default SimpsonFamily;
