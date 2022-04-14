const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const { CompanyType } = require('./company')
const { getCompanyData } = require('../utils')

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        company: {
            type: CompanyType,
            args: { 
                ticker: {
                    type: GraphQLString,
                    description: 'Company ticker',
                }
            },
            resolve: (_, args) => {
                return getCompanyData(args.ticker)
            }
        }
    }
})

module.exports = {
    QueryType,
}