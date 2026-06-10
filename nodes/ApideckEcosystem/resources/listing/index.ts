import type { INodeProperties } from 'n8n-workflow';

export const listingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					]
				}
			},
			"options": [
				{
					"name": "Listings All",
					"value": "Listings All",
					"action": "List listings",
					"description": "List listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/listings"
						}
					}
				},
				{
					"name": "Listings One",
					"value": "Listings One",
					"action": "Get listing",
					"description": "Get listing",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/listings/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings All"
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
						"Listing"
					],
					"operation": [
						"Listings All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of records to return",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings All"
					]
				}
			}
		},
		{
			"displayName": "External ID",
			"name": "external_id",
			"description": "Filter on external_id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "external_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings All"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/listings/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings One"
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
						"Listing"
					],
					"operation": [
						"Listings One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Listing"
					],
					"operation": [
						"Listings One"
					]
				}
			}
		},
];
