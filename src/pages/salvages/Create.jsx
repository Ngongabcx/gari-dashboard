import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiTitle,
  EuiSpacer,
} from "@elastic/eui";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SalvageCreateForm } from "../../components/savage-form/create-form";

const url = "https://gar-test.hobbiton.tech/insurance-companies";

export const CreateSalvage = () => {
  const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   fetchCompanies();
  // }, []);

  // const fetchCompanies = () => {
  //   axios.get(url).then((res) => {
  //     setCompanies(res.data.data);
  //     console.log(`Response -------> ${JSON.stringify(res.data.data)}`);
  //   });

  //   console.log(`URL ----> ${url}`);
  // };

  return (
    <EuiPage>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiSpacer size="xxl" />
        <EuiPageContent>
          <EuiTitle>
            <h2>Add salvage</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiPageContentBody>
            
          <SalvageCreateForm />
         
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
