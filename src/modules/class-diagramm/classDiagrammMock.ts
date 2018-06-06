import { Diagramm } from "./entities/Diagramm";
import { Visibility } from "./entities/Visibility";
import { RelationType } from "./entities/RelationType";


const classDiagrammData: Diagramm[] =
    [
        {
            name: "Membership",
            classes: [
                {
                    key: 1,
                    name: "User",
                    properties: [
                      { name: "email", type: "String", visibility: Visibility.PRIVATE },
                      { name: "password", type: "String", visibility: Visibility.PRIVATE  }
                    ],
                    methods: [
                      { name: "changePassword", parameters: [{ name: "oldPassword", type: "String" }, { name: "newPassword", type: "String" }], visibility: Visibility.PUBLIC }
                    ]
                },
                {
                    key: 2,
                    name: "Group",
                    properties: [
                      { name: "name", type: "String", visibility: Visibility.PRIVATE  },
                      { name: "description", type: "String", visibility: Visibility.PRIVATE  }
                    ]
                },
                {
                    key: 3,
                    name: "Person",
                    properties: [
                      { name: "firstName", type: "String", visibility: Visibility.PRIVATE  },
                      { name: "lastName", type: "String", visibility: Visibility.PRIVATE  },
                      { name: "birthday", type: "Date", visibility: Visibility.PRIVATE  }
                    ],
                    methods: [
                      { name: "getAge", type: "int", visibility: Visibility.PUBLIC },
                      { name: "getBirthdayFormated", type: "String", parameters: [{ name: "format", type: "String" }], visibility: Visibility.PUBLIC }
                    ]

                },
                {
                    key: 4,
                    name: "Address",
                    properties: [
                      { name: "zipCode", type: "String", visibility: Visibility.PRIVATE  },
                      { name: "city", type: "String", visibility: Visibility.PRIVATE  }
                    ]
                }
            ],
            relations: [
                { from: 1, to: 2, relationship: RelationType.GENERALIZATION, text: "1", toText: "*" },
                { from: 4, to: 3, relationship: RelationType.COMPOSITION },
                { from: 3, to: 1, relationship: RelationType.GENERALIZATION }
            ]
        }
    ];

export function fetchClassDiagrammMock(url: string): Diagramm[] {
    return classDiagrammData;
}




