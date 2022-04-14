const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const { CompanyType } = require('./types/company')
const { QueryType } = require('./types/query')
const { getCompanyData } = require('./utils')

const schema = new GraphQLSchema({
    query: QueryType,
    description: 'root query type'
})

module.exports = {
    schema,
}