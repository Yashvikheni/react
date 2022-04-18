// import axios from 'axios'

// const graphql=require('graphql');
// const _=require('lodash');
// const {
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLInt,
//     GraphQLSchema

// }=graphql
// const UserType= new GraphQLObjectType({
//     name:'User',
//     fields:{
//         id:{type:GraphQLString},
//         firstName:{type:GraphQLString},
//         age:{type:GraphQLInt}
//     }
// })

// const RootQuery= new GraphQLObjectType({
//     name:'RootQueryType',
//     fields:{
//         user:{
//             type:UserType,
//             args:{id:{type:GraphQLString}},
//             resolve(parentValue,args){
//                 return axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
//                 .then(resp=>resp.data)
//             }
//         }
       
//     }
// })

// module.exports=new GraphQLSchema({
//     query:RootQuery
// })