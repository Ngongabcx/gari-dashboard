import React from 'react';
import { EuiLoadingContent } from '@elastic/eui';

export const Loader = () => (
  <div>
    <EuiLoadingContent lines={3} />
  </div>
);