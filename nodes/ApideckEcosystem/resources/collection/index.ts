import type { INodeProperties } from 'n8n-workflow';

export const collectionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collection"
					]
				}
			},
			"options": [
				{
					"name": "Collections All",
					"value": "Collections All",
					"action": "List collections",
					"description": "List collections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/collections"
						}
					}
				},
				{
					"name": "Collections One",
					"value": "Collections One",
					"action": "Get collection",
					"description": "Get collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/collections/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Collection Listings All",
					"value": "Collection Listings All",
					"action": "List collection listings",
					"description": "List collection listings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ecosystems/{{$parameter[\"ecosystem_id\"]}}/collections/{{$parameter[\"id\"]}}/listings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collection"
					],
					"operation": [
						"Collections All"
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
						"Collection"
					],
					"operation": [
						"Collections All"
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
						"Collection"
					],
					"operation": [
						"Collections All"
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
						"Collection"
					],
					"operation": [
						"Collections All"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/collections/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collection"
					],
					"operation": [
						"Collections One"
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
						"Collection"
					],
					"operation": [
						"Collections One"
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
						"Collection"
					],
					"operation": [
						"Collections One"
					]
				}
			}
		},
		{
			"displayName": "GET /ecosystems/{ecosystem_id}/collections/{id}/listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collection"
					],
					"operation": [
						"Collection Listings All"
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
						"Collection"
					],
					"operation": [
						"Collection Listings All"
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
						"Collection"
					],
					"operation": [
						"Collection Listings All"
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
						"Collection"
					],
					"operation": [
						"Collection Listings All"
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
						"Collection"
					],
					"operation": [
						"Collection Listings All"
					]
				}
			}
		},
];
