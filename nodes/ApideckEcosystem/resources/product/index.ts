import type { INodeProperties } from 'n8n-workflow';

export const productDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					]
				}
			},
			"options": [
				{
					"name": "Products All",
					"value": "Products All",
					"action": "List products",
					"description": "List products",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/products"
						}
					}
				},
				{
					"name": "Products One",
					"value": "Products One",
					"action": "Get product",
					"description": "Get product",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/products/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Product Listings All",
					"value": "Product Listings All",
					"action": "List product listings",
					"description": "List product listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/products/{{$parameter[\"id\"]}}/listings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/products",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Products All"
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
						"Product"
					],
					"operation": [
						"Products All"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/products/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Products One"
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
						"Product"
					],
					"operation": [
						"Products One"
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
						"Product"
					],
					"operation": [
						"Products One"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/products/{id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Product"
					],
					"operation": [
						"Product Listings All"
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
						"Product"
					],
					"operation": [
						"Product Listings All"
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
						"Product"
					],
					"operation": [
						"Product Listings All"
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
						"Product"
					],
					"operation": [
						"Product Listings All"
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
						"Product"
					],
					"operation": [
						"Product Listings All"
					]
				}
			}
		},
];
