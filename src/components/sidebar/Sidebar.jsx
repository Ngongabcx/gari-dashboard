import React, { useState } from "react";
import { EuiIcon, EuiSideNav, slugify } from "@elastic/eui";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState("Time stuff");

  let navigate = useNavigate();

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = (name) => {
    setSelectedItem(name);
  };

  const createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      id: slugify(name),
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
      ...data,
    };
  };

  const sideNav = [
    createItem("Companies", {
      onClick: undefined,
      icon: <EuiIcon type="logoElasticsearch" />,
      items: [
        createItem("Create", {
          items: [createItem("New company",{
            onClick: () => {
              navigate(`/create-company/`);
            },
          }                  
                    
          )],
        }),
        createItem("View", {
          items: [createItem("All companies")],
        }),
      ],
    }),
    createItem("Salvages", {
      onClick: undefined,
      icon: <EuiIcon type="logoKibana" />,
      items: [
        createItem("Create", {
          items: [createItem("New salvage",{
            onClick: () => {
              navigate(`/create-salvage/`);
            },
          }                  
          )],
        }),
        createItem("View", {
          items: [createItem("All salvages")],
        }),
      ],
    }),
    createItem("Users", {
      onClick: undefined,
      icon: <EuiIcon type="logoLogstash" />,
      items: [createItem("Pipeline viewer")],
    }),
  ];

  return (
    <EuiSideNav
      aria-label="Complex example"
      mobileTitle="Navigate within $APP_NAME"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};
