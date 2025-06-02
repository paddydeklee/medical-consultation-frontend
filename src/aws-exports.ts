import { ResourcesConfig } from '@aws-amplify/core';

const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_USER_POOL_ID || '',
      userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID || '',
      region: 'us-east-1',
    }
  },
  API: {
    REST: {
      DicomUploadApi: {
        endpoint: process.env.REACT_APP_UPLOAD_API_URL || '',
      },
      ReportsApi: {
        endpoint: process.env.REACT_APP_REPORT_API_URL || '',
      },
    }
  },
};

export default awsConfig; 