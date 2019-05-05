import { APP_SETTINGS } from './types/settings';

export function getAdalConfig() {
    var baseUrl = APP_SETTINGS.baseUrl;
    return {
        tenant: APP_SETTINGS.tenantId,
        clientId: APP_SETTINGS.clientId,
        redirectUri: window.location.origin,
        endpoints: { 
            baseUrl: "xxx-bae6-4760-b434-xxx",
        },
        navigateToLoginRequestUrl: true,
        cacheLocation: 'localStorage',
      };
  }