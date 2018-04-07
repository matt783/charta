export const ERC721Basic = 
{
  "contractName": "ERC721Basic",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "_exists",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Basic {\n  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);  \n\n  function balanceOf(address _owner) public view returns (uint256 _balance);\n  function ownerOf(uint256 _tokenId) public view returns (address _owner);\n  function exists(uint256 _tokenId) public view returns (bool _exists);\n  \n  function approve(address _to, uint256 _tokenId) public;\n  function getApproved(uint256 _tokenId) public view returns (address _operator);\n  \n  function setApprovalForAll(address _operator, bool _approved) public;\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public;\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;  \n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public;\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
      "exportedSymbols": {
        "ERC721Basic": [
          5571
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 5466,
        "name": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5571
          ],
          "name": "ERC721Basic",
          "scope": 5572
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 5474,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5467,
                        "name": "ElementaryTypeName",
                        "src": "208:7:23"
                      }
                    ],
                    "id": 5468,
                    "name": "VariableDeclaration",
                    "src": "208:21:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 5474,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5469,
                        "name": "ElementaryTypeName",
                        "src": "231:7:23"
                      }
                    ],
                    "id": 5470,
                    "name": "VariableDeclaration",
                    "src": "231:19:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 5474,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5471,
                        "name": "ElementaryTypeName",
                        "src": "252:7:23"
                      }
                    ],
                    "id": 5472,
                    "name": "VariableDeclaration",
                    "src": "252:16:23"
                  }
                ],
                "id": 5473,
                "name": "ParameterList",
                "src": "207:62:23"
              }
            ],
            "id": 5474,
            "name": "EventDefinition",
            "src": "193:77:23"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 5482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5475,
                        "name": "ElementaryTypeName",
                        "src": "288:7:23"
                      }
                    ],
                    "id": 5476,
                    "name": "VariableDeclaration",
                    "src": "288:22:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 5482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5477,
                        "name": "ElementaryTypeName",
                        "src": "312:7:23"
                      }
                    ],
                    "id": 5478,
                    "name": "VariableDeclaration",
                    "src": "312:25:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 5482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5479,
                        "name": "ElementaryTypeName",
                        "src": "339:7:23"
                      }
                    ],
                    "id": 5480,
                    "name": "VariableDeclaration",
                    "src": "339:16:23"
                  }
                ],
                "id": 5481,
                "name": "ParameterList",
                "src": "287:69:23"
              }
            ],
            "id": 5482,
            "name": "EventDefinition",
            "src": "273:84:23"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "ApprovalForAll"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 5490,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5483,
                        "name": "ElementaryTypeName",
                        "src": "381:7:23"
                      }
                    ],
                    "id": 5484,
                    "name": "VariableDeclaration",
                    "src": "381:22:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_operator",
                      "scope": 5490,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5485,
                        "name": "ElementaryTypeName",
                        "src": "405:7:23"
                      }
                    ],
                    "id": 5486,
                    "name": "VariableDeclaration",
                    "src": "405:25:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_approved",
                      "scope": 5490,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5487,
                        "name": "ElementaryTypeName",
                        "src": "432:4:23"
                      }
                    ],
                    "id": 5488,
                    "name": "VariableDeclaration",
                    "src": "432:14:23"
                  }
                ],
                "id": 5489,
                "name": "ParameterList",
                "src": "380:67:23"
              }
            ],
            "id": 5490,
            "name": "EventDefinition",
            "src": "360:88:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 5571,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 5497,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5491,
                        "name": "ElementaryTypeName",
                        "src": "473:7:23"
                      }
                    ],
                    "id": 5492,
                    "name": "VariableDeclaration",
                    "src": "473:14:23"
                  }
                ],
                "id": 5493,
                "name": "ParameterList",
                "src": "472:16:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 5497,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5494,
                        "name": "ElementaryTypeName",
                        "src": "510:7:23"
                      }
                    ],
                    "id": 5495,
                    "name": "VariableDeclaration",
                    "src": "510:16:23"
                  }
                ],
                "id": 5496,
                "name": "ParameterList",
                "src": "509:18:23"
              }
            ],
            "id": 5497,
            "name": "FunctionDefinition",
            "src": "454:74:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 5571,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5504,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5498,
                        "name": "ElementaryTypeName",
                        "src": "548:7:23"
                      }
                    ],
                    "id": 5499,
                    "name": "VariableDeclaration",
                    "src": "548:16:23"
                  }
                ],
                "id": 5500,
                "name": "ParameterList",
                "src": "547:18:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 5504,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5501,
                        "name": "ElementaryTypeName",
                        "src": "587:7:23"
                      }
                    ],
                    "id": 5502,
                    "name": "VariableDeclaration",
                    "src": "587:14:23"
                  }
                ],
                "id": 5503,
                "name": "ParameterList",
                "src": "586:16:23"
              }
            ],
            "id": 5504,
            "name": "FunctionDefinition",
            "src": "531:72:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 5571,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5511,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5505,
                        "name": "ElementaryTypeName",
                        "src": "622:7:23"
                      }
                    ],
                    "id": 5506,
                    "name": "VariableDeclaration",
                    "src": "622:16:23"
                  }
                ],
                "id": 5507,
                "name": "ParameterList",
                "src": "621:18:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_exists",
                      "scope": 5511,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5508,
                        "name": "ElementaryTypeName",
                        "src": "661:4:23"
                      }
                    ],
                    "id": 5509,
                    "name": "VariableDeclaration",
                    "src": "661:12:23"
                  }
                ],
                "id": 5510,
                "name": "ParameterList",
                "src": "660:14:23"
              }
            ],
            "id": 5511,
            "name": "FunctionDefinition",
            "src": "606:69:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 5571,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 5518,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5512,
                        "name": "ElementaryTypeName",
                        "src": "698:7:23"
                      }
                    ],
                    "id": 5513,
                    "name": "VariableDeclaration",
                    "src": "698:11:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5518,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5514,
                        "name": "ElementaryTypeName",
                        "src": "711:7:23"
                      }
                    ],
                    "id": 5515,
                    "name": "VariableDeclaration",
                    "src": "711:16:23"
                  }
                ],
                "id": 5516,
                "name": "ParameterList",
                "src": "697:31:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5517,
                "name": "ParameterList",
                "src": "735:0:23"
              }
            ],
            "id": 5518,
            "name": "FunctionDefinition",
            "src": "681:55:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 5571,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5525,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5519,
                        "name": "ElementaryTypeName",
                        "src": "760:7:23"
                      }
                    ],
                    "id": 5520,
                    "name": "VariableDeclaration",
                    "src": "760:16:23"
                  }
                ],
                "id": 5521,
                "name": "ParameterList",
                "src": "759:18:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 5525,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5522,
                        "name": "ElementaryTypeName",
                        "src": "799:7:23"
                      }
                    ],
                    "id": 5523,
                    "name": "VariableDeclaration",
                    "src": "799:17:23"
                  }
                ],
                "id": 5524,
                "name": "ParameterList",
                "src": "798:19:23"
              }
            ],
            "id": 5525,
            "name": "FunctionDefinition",
            "src": "739:79:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 5571,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 5532,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5526,
                        "name": "ElementaryTypeName",
                        "src": "851:7:23"
                      }
                    ],
                    "id": 5527,
                    "name": "VariableDeclaration",
                    "src": "851:17:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 5532,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5528,
                        "name": "ElementaryTypeName",
                        "src": "870:4:23"
                      }
                    ],
                    "id": 5529,
                    "name": "VariableDeclaration",
                    "src": "870:14:23"
                  }
                ],
                "id": 5530,
                "name": "ParameterList",
                "src": "850:35:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5531,
                "name": "ParameterList",
                "src": "892:0:23"
              }
            ],
            "id": 5532,
            "name": "FunctionDefinition",
            "src": "824:69:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 5571,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 5541,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5533,
                        "name": "ElementaryTypeName",
                        "src": "922:7:23"
                      }
                    ],
                    "id": 5534,
                    "name": "VariableDeclaration",
                    "src": "922:14:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 5541,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5535,
                        "name": "ElementaryTypeName",
                        "src": "938:7:23"
                      }
                    ],
                    "id": 5536,
                    "name": "VariableDeclaration",
                    "src": "938:17:23"
                  }
                ],
                "id": 5537,
                "name": "ParameterList",
                "src": "921:35:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5541,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5538,
                        "name": "ElementaryTypeName",
                        "src": "978:4:23"
                      }
                    ],
                    "id": 5539,
                    "name": "VariableDeclaration",
                    "src": "978:4:23"
                  }
                ],
                "id": 5540,
                "name": "ParameterList",
                "src": "977:6:23"
              }
            ],
            "id": 5541,
            "name": "FunctionDefinition",
            "src": "896:88:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 5571,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 5550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5542,
                        "name": "ElementaryTypeName",
                        "src": "1010:7:23"
                      }
                    ],
                    "id": 5543,
                    "name": "VariableDeclaration",
                    "src": "1010:13:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 5550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5544,
                        "name": "ElementaryTypeName",
                        "src": "1025:7:23"
                      }
                    ],
                    "id": 5545,
                    "name": "VariableDeclaration",
                    "src": "1025:11:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5550,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5546,
                        "name": "ElementaryTypeName",
                        "src": "1038:7:23"
                      }
                    ],
                    "id": 5547,
                    "name": "VariableDeclaration",
                    "src": "1038:16:23"
                  }
                ],
                "id": 5548,
                "name": "ParameterList",
                "src": "1009:46:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5549,
                "name": "ParameterList",
                "src": "1062:0:23"
              }
            ],
            "id": 5550,
            "name": "FunctionDefinition",
            "src": "988:75:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 5571,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 5559,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5551,
                        "name": "ElementaryTypeName",
                        "src": "1092:7:23"
                      }
                    ],
                    "id": 5552,
                    "name": "VariableDeclaration",
                    "src": "1092:13:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 5559,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5553,
                        "name": "ElementaryTypeName",
                        "src": "1107:7:23"
                      }
                    ],
                    "id": 5554,
                    "name": "VariableDeclaration",
                    "src": "1107:11:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5559,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5555,
                        "name": "ElementaryTypeName",
                        "src": "1120:7:23"
                      }
                    ],
                    "id": 5556,
                    "name": "VariableDeclaration",
                    "src": "1120:16:23"
                  }
                ],
                "id": 5557,
                "name": "ParameterList",
                "src": "1091:46:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5558,
                "name": "ParameterList",
                "src": "1144:0:23"
              }
            ],
            "id": 5559,
            "name": "FunctionDefinition",
            "src": "1066:79:23"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 5571,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 5570,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5560,
                        "name": "ElementaryTypeName",
                        "src": "1176:7:23"
                      }
                    ],
                    "id": 5561,
                    "name": "VariableDeclaration",
                    "src": "1176:13:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 5570,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 5562,
                        "name": "ElementaryTypeName",
                        "src": "1191:7:23"
                      }
                    ],
                    "id": 5563,
                    "name": "VariableDeclaration",
                    "src": "1191:11:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 5570,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5564,
                        "name": "ElementaryTypeName",
                        "src": "1204:7:23"
                      }
                    ],
                    "id": 5565,
                    "name": "VariableDeclaration",
                    "src": "1204:16:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 5570,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 5566,
                        "name": "ElementaryTypeName",
                        "src": "1222:5:23"
                      }
                    ],
                    "id": 5567,
                    "name": "VariableDeclaration",
                    "src": "1222:11:23"
                  }
                ],
                "id": 5568,
                "name": "ParameterList",
                "src": "1175:59:23"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5569,
                "name": "ParameterList",
                "src": "1241:0:23"
              }
            ],
            "id": 5570,
            "name": "FunctionDefinition",
            "src": "1150:92:23"
          }
        ],
        "id": 5571,
        "name": "ContractDefinition",
        "src": "168:1076:23"
      }
    ],
    "id": 5572,
    "name": "SourceUnit",
    "src": "0:1245:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:27:03.077Z"
}