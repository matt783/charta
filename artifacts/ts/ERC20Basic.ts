export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
      "exportedSymbols": {
        "ERC20Basic": [
          14304
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
        "id": 14274,
        "name": "PragmaDirective",
        "src": "0:24:42"
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
          "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14304
          ],
          "name": "ERC20Basic",
          "scope": 14305
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 14304,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 14275,
                "name": "ParameterList",
                "src": "199:2:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14279,
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
                        "id": 14276,
                        "name": "ElementaryTypeName",
                        "src": "223:7:42"
                      }
                    ],
                    "id": 14277,
                    "name": "VariableDeclaration",
                    "src": "223:7:42"
                  }
                ],
                "id": 14278,
                "name": "ParameterList",
                "src": "222:9:42"
              }
            ],
            "id": 14279,
            "name": "FunctionDefinition",
            "src": "179:53:42"
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
              "scope": 14304,
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
                      "name": "who",
                      "scope": 14286,
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
                        "id": 14280,
                        "name": "ElementaryTypeName",
                        "src": "254:7:42"
                      }
                    ],
                    "id": 14281,
                    "name": "VariableDeclaration",
                    "src": "254:11:42"
                  }
                ],
                "id": 14282,
                "name": "ParameterList",
                "src": "253:13:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14286,
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
                        "id": 14283,
                        "name": "ElementaryTypeName",
                        "src": "288:7:42"
                      }
                    ],
                    "id": 14284,
                    "name": "VariableDeclaration",
                    "src": "288:7:42"
                  }
                ],
                "id": 14285,
                "name": "ParameterList",
                "src": "287:9:42"
              }
            ],
            "id": 14286,
            "name": "FunctionDefinition",
            "src": "235:62:42"
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
              "name": "transfer",
              "payable": false,
              "scope": 14304,
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
                      "name": "to",
                      "scope": 14295,
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
                        "id": 14287,
                        "name": "ElementaryTypeName",
                        "src": "318:7:42"
                      }
                    ],
                    "id": 14288,
                    "name": "VariableDeclaration",
                    "src": "318:10:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 14295,
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
                        "id": 14289,
                        "name": "ElementaryTypeName",
                        "src": "330:7:42"
                      }
                    ],
                    "id": 14290,
                    "name": "VariableDeclaration",
                    "src": "330:13:42"
                  }
                ],
                "id": 14291,
                "name": "ParameterList",
                "src": "317:27:42"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14295,
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
                        "id": 14292,
                        "name": "ElementaryTypeName",
                        "src": "361:4:42"
                      }
                    ],
                    "id": 14293,
                    "name": "VariableDeclaration",
                    "src": "361:4:42"
                  }
                ],
                "id": 14294,
                "name": "ParameterList",
                "src": "360:6:42"
              }
            ],
            "id": 14295,
            "name": "FunctionDefinition",
            "src": "300:67:42"
          },
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
                      "name": "from",
                      "scope": 14303,
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
                        "id": 14296,
                        "name": "ElementaryTypeName",
                        "src": "385:7:42"
                      }
                    ],
                    "id": 14297,
                    "name": "VariableDeclaration",
                    "src": "385:20:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 14303,
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
                        "id": 14298,
                        "name": "ElementaryTypeName",
                        "src": "407:7:42"
                      }
                    ],
                    "id": 14299,
                    "name": "VariableDeclaration",
                    "src": "407:18:42"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 14303,
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
                        "id": 14300,
                        "name": "ElementaryTypeName",
                        "src": "427:7:42"
                      }
                    ],
                    "id": 14301,
                    "name": "VariableDeclaration",
                    "src": "427:13:42"
                  }
                ],
                "id": 14302,
                "name": "ParameterList",
                "src": "384:57:42"
              }
            ],
            "id": 14303,
            "name": "EventDefinition",
            "src": "370:72:42"
          }
        ],
        "id": 14304,
        "name": "ContractDefinition",
        "src": "155:289:42"
      }
    ],
    "id": 14305,
    "name": "SourceUnit",
    "src": "0:445:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-25T20:04:49.255Z"
}