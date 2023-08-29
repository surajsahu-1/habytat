import React, { useState } from 'react';
import './Sidebar.css';
import countryCodes from './country_codes.json';

function Sidebar({ onClose }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validatePhoneNumber = () => {
    const selectedCountry = countryCodes.find((country) =>
      phoneNumber.startsWith(country.dial_code)
    );

    if (!selectedCountry) {
      setValidationMessage('Country code not found.');
      return;
    }

    const phoneNumberWithoutDialCode = phoneNumber.replace(
      selectedCountry.dial_code,
      ''
    );
    const phoneNumberDigits = phoneNumberWithoutDialCode.replace(/\D/g, '');

    if (phoneNumberDigits.length !== selectedCountry.mobile_validation[0].size) {
      setValidationMessage('Invalid phone number length.');
      return;
    }

    const validFormats = selectedCountry.mobile_validation[0].start_with.map(
      (digit) => {
        const format = selectedCountry.mobile_validation[0].format;
        return format.replace('X', digit);
      }
    );

    if (!validFormats.includes(phoneNumberWithoutDialCode)) {
      setValidationMessage('Phone number format is invalid.');
      return;
    }

    setValidationMessage('Phone number is valid.');
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="Sidebar-content">
        <form>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="button" onClick={validatePhoneNumber}>
            Validate
          </button>
        </form>
        <p className="validation-message">{validationMessage}</p>
      </div>
    </div>
  );
}

export default Sidebar;
