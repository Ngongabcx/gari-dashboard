import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiTitle,
  EuiSpacer,
} from "@elastic/eui";
import { Sidebar } from "../sidebar/Sidebar";
import { Cards } from "../cards/Cards";
import { Table } from "../table/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://gar-test.hobbiton.tech/insurance-companies";

export const Body = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = () => {
    axios.get(url).then((res) => {
      setCompanies(res.data.data);
      console.log(`Response -------> ${JSON.stringify(res.data.data)}`);
    });

    console.log(`URL ----> ${url}`);
  };

  return (
    <EuiPage>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>
        <Cards />
        <EuiSpacer size="xxl" />
        <EuiPageContent>
          <EuiTitle>
            <h2>Companies</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiPageContentBody>
            
              <Table companies={companies}/>
         
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
