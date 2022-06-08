import React, { useState } from "react";
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
} from "@elastic/eui";
import axios from "axios";

export const CompanyCreateForm = () => {
  const url = "https://gar-test.hobbiton.tech/insurance-companies";

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: url,
        data: JSON.stringify(inputs),
        headers: { "Content-Type": "application/json" },
      });
      setInputs({});
      console.log(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Comapny name" helpText="I am some friendly help text.">
        <EuiFieldText
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </EuiFormRow>

      <EuiFormRow
        label="Company email"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="companyEmail" value={inputs.companyEmail} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Company phone number"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="companyNumber" value={inputs.companyNumber} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Company adress"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="address" value={inputs.address} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow label="Account name" helpText="I am some friendly help text.">
        <EuiFieldText name="accountName" value={inputs.accountName} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Account number"
        helpText="I am some friendly help text."
      >
        <EuiFieldText
          name="accountNumber"
          value={inputs.accountNumber}
          onChange={handleChange}
        />
      </EuiFormRow>
      <EuiFormRow
        label="Branch "
        helpText="I am some friendly help text."
      >
        <EuiFieldText
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </EuiFormRow>

      <EuiFormRow
        label="Branch Code "
        helpText="I am some friendly help text."
      >
        <EuiFieldText
          name="code"
          value={inputs.code}
          onChange={handleChange}
        />
      </EuiFormRow>

      <EuiFormRow
        label="Description"
        helpText="I am some friendly help text."
      >
        <EuiFieldText
          name="description"
          value={inputs.description}
          onChange={handleChange}
        />
        </EuiFormRow>

      <EuiSpacer />

      <EuiButton type="submit" fill onClick={handleChange}>
        Save form
      </EuiButton>
    </EuiForm>
  );
};
