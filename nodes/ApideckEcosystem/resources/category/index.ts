import type { INodeProperties } from 'n8n-workflow';

export const categoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Category"
					]
				}
			},
			"options": [
				{
					"name": "Categories All",
					"value": "Categories All",
					"action": "List categories",
					"description": "List categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/categories"
						}
					}
				},
				{
					"name": "Categories One",
					"value": "Categories One",
					"action": "Get category",
					"description": "Get category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/categories/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Category Listings All",
					"value": "Category Listings All",
					"action": "List category listings",
					"description": "List category listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/categories/{{$parameter[\"id\"]}}/listings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Category"
					],
					"operation": [
						"Categories All"
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
						"Category"
					],
					"operation": [
						"Categories All"
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
						"Category"
					],
					"operation": [
						"Categories All"
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
						"Category"
					],
					"operation": [
						"Categories All"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/categories/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Category"
					],
					"operation": [
						"Categories One"
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
						"Category"
					],
					"operation": [
						"Categories One"
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
						"Category"
					],
					"operation": [
						"Categories One"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/categories/{id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Category"
					],
					"operation": [
						"Category Listings All"
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
						"Category"
					],
					"operation": [
						"Category Listings All"
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
						"Category"
					],
					"operation": [
						"Category Listings All"
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
						"Category"
					],
					"operation": [
						"Category Listings All"
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
						"Category"
					],
					"operation": [
						"Category Listings All"
					]
				}
			}
		},
];
