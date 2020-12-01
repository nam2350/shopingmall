const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Europe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    }
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "$200 to $299",
        "array": [200, 299]
    },
    {
        "_id": 3,
        "name": "$300 to $399",
        "array": [300,399]
    },
    {
        "_id": 4,
        "name": "$400 to $499",
        "array": [400,499]
    },
    {
        "_id": 5,
        "name": "More than $500",
        "array": [500,1500000]
    }

]

export {
    continents,
    price
}