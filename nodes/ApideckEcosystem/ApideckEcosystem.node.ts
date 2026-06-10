import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ecosystemDescription } from './resources/ecosystem';
import { listingDescription } from './resources/listing';
import { collectionDescription } from './resources/collection';
import { categoryDescription } from './resources/category';
import { productDescription } from './resources/product';

export class ApideckEcosystem implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apideck Ecosystem',
		name: 'N8nDevApideckEcosystem',
		icon: { light: 'file:./apideck-ecosystem.png', dark: 'file:./apideck-ecosystem.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Ecosystem API',
		defaults: { name: 'Apideck Ecosystem' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApideckEcosystemApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Ecosystem",
					"value": "Ecosystem",
					"description": ""
				},
				{
					"name": "Listing",
					"value": "Listing",
					"description": ""
				},
				{
					"name": "Collection",
					"value": "Collection",
					"description": ""
				},
				{
					"name": "Category",
					"value": "Category",
					"description": ""
				},
				{
					"name": "Product",
					"value": "Product",
					"description": ""
				}
			],
			"default": ""
		},
		...ecosystemDescription,
		...listingDescription,
		...collectionDescription,
		...categoryDescription,
		...productDescription
		],
	};
}
