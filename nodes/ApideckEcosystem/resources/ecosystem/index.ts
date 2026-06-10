import type { INodeProperties } from 'n8n-workflow';

export const ecosystemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Ecosystem"
					]
				}
			},
			"options": [
				{
					"name": "Ecosystems One",
					"value": "Ecosystems One",
					"action": "Get ecosystem",
					"description": "Get ecosystem",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Ecosystem"
					],
					"operation": [
						"Ecosystems One"
					]
				}
			}
		},
		{
			"displayName": "Ecosystem ID",
			"name": "ecosystem_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Ecosystem"
					],
					"operation": [
						"Ecosystems One"
					]
				}
			}
		},
];
