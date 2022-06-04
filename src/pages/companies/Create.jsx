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
import { CompanyCreateForm } from "../../components/company-form/create-form";


export const CreateCompany = () => {
  

  return (
    <EuiPage>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiSpacer size="xxl" />
        <EuiPageContent>
          <EuiTitle>
            <h2>Add company</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiPageContentBody>
            
          <CompanyCreateForm />
         
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
