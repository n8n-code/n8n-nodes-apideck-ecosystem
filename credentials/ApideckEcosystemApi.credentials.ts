import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckEcosystemApi implements ICredentialType {
        name = 'N8nDevApideckEcosystemApi';

        displayName = 'Apideck Ecosystem API';

        icon: Icon = { light: 'file:../nodes/ApideckEcosystem/apideck-ecosystem.png', dark: 'file:../nodes/ApideckEcosystem/apideck-ecosystem.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.apideck.com',
                        required: true,
                        placeholder: 'https://api.apideck.com',
                        description: 'The base URL of your Apideck Ecosystem API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
