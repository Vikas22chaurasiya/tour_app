import React, { useState } from "react";
import RegistrationForm from "./RegistartionForm";
import PreferenceSelection from "./PreferenceSelection";

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState(null);
    const [preferenceData, setPreferenceData] = useState(null);

    const handleRegistrationSubmit = (data) => {
        setRegistrationData(data);
    };

    const handlePreferenceSubmit = (data) => {
        setPreferenceData(data);
    };

    return (
        <div>
            {!registrationData && <RegistrationForm onSubmit={handleRegistrationSubmit} />}
            {registrationData && (
                <div>
                    <PreferenceSelection onSubmit={handlePreferenceSubmit} regdata={registrationData} />
                </div>
            )}
           
        </div>
    );
};

export default RegistrationPage;
