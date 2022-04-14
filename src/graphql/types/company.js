const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    description: 'Company',
    fields: {
        name: {
            type: GraphQLString,
            description: 'Company name',
        },
        ticker: {
            type: GraphQLString,
            description: 'Company ticker',
        }
    }
})

module.exports = {
    CompanyType,
}