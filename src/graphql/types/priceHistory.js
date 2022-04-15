const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
} = require('graphql');

const PriceHistoryType = new GraphQLObjectType({
    name: 'PriceHistory1Yr',
    description: 'Daily price history for a year',
    fields: {
        dates: {
            type: new GraphQLList(GraphQLInt),
            description: 'Dates (per day)',
        },
        prices: {
            type: new GraphQLList(GraphQLFloat),
            description: 'Closing price (per day)',
        }
    }
})

module.exports = {
    PriceHistoryType,
}
