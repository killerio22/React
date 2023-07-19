import React from 'react';

const FamilyMember = ({ name, age, gender, photoUrl }) => {
    return (
        <div className="family-member">
            <img className="family-member-photo" src={photoUrl} alt={name} />
            <h2 className="family-member-name">{name}</h2>
            <p className="family-member-info">Age: {age}</p>
            <p className="family-member-info">Gender: {gender}</p>
        </div>
    );
};

export default FamilyMember;
