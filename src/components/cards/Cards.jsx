import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

export const Cards = () => (
  <EuiFlexGroup gutterSize="l">
    <EuiFlexItem>
      <EuiCard
        icon={<EuiIcon size="xxl" type="devToolsApp" />}
        title="Companies"
        description="Example of a short card description."
        footer={
          <div>
            <EuiButton aria-label="Go to Developers Tools">Go for it</EuiButton>
          </div>
        }
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        icon={<EuiIcon size="xxl" type="dashboardApp" />}
        title="Salvages"
        description="Example of a longer card description. See how the footers stay lined up."
        footer={
          <div>
            <EuiButton aria-label="Go to Dashboards">Go for it</EuiButton>
          </div>
        }
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        icon={<EuiIcon size="xxl" type="savedObjectsApp" />}
        title="Users"
        description="Example of a short card description."
        footer={
          <div>
            <EuiButton aria-label="Go to Save Objects">Go for it</EuiButton>
          </div>
        }
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);