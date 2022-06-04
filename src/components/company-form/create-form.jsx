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

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: url,
        data: JSON.stringify(inputs),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Comapny name" helpText="I am some friendly help text.">
        <EuiFieldText
          name="first"
          value={inputs.name}
          onChange={handleChange}
        />
      </EuiFormRow>

      <EuiFormRow
        label="Company email"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="last" value={inputs.companyEmail} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Company phone number"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="last" value={inputs.companyNumber} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Company adress"
        helpText="I am some friendly help text."
      >
        <EuiFieldText name="last" value={inputs.address} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow label="Account name" helpText="I am some friendly help text.">
        <EuiFieldText name="last" value={inputs.accountName} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow
        label="Account number"
        helpText="I am some friendly help text."
      >
        <EuiFieldText
          name="last"
          value={inputs.accountNumber}
          onChange={handleChange}
        />
      </EuiFormRow>

      <EuiFormRow label="Name" helpText="I am some friendly help text.">
        <EuiFieldText name="last" value={inputs.name} onChange={handleChange} />
      </EuiFormRow>

      <EuiFormRow label="Name" helpText="I am some friendly help text.">
        <EuiFieldText name="last" value={inputs.name} onChange={handleChange} />
      </EuiFormRow>

      <EuiSpacer />

      <EuiButton type="submit" fill>
        Save form
      </EuiButton>
    </EuiForm>
  );
};
