/**
 * Created by Jack on 4/22/2017.
 */

import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';
import models from '../../../../persistence/models'

// todo: add permition check
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'root MutationType',
    fields: {
        // tag's mutation
        createTag: {
            type: GraphQLString,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let tag = new models.Tag(args);
                await tag.save();
                return tag.id;
            }
        },
        updateTag: {
            type: GraphQLID,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                // catch error, cannot convert args.id to ObjectID
                let tag = await models.Tag.findOne({_id: args.id});
                // catch error, tag not found
                if (!tag) throw Error('Tag not Found');
                // success found, update data
                tag.name = args.name;
                tag.increment();    // increment version
                await tag.save(); // update async
                return tag.id;
            }
        },
        // todo: remove article's tag id
        deleteTag: {
            type: GraphQLString,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
            },
            resolve: async (root, args) => {
                // catch error, cannot convert args.id to ObjectID
                let tag = await models.Tag.findOne({_id: args.id});
                // catch error, tag not found
                if (!tag) throw Error('Tag not Found');

                tag.remove(); // update async
                return tag.id;
            }
        },

        // category's mutation
        createCategory: {
            type: GraphQLString,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let category = new models.Category(args);
                await category.save();
                return category.id;
            }
        },
        updateCategory: {
            type: GraphQLString,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                // catch error, cannot convert args.id to ObjectID
                let category = await models.Category.findOne({_id: args.id});
                // catch error, category not found
                if (!category) throw Error('category not Found');
                // success found, update data
                category.name = args.name;
                category.increment();    // increment version
                await category.save();
                return 'success'
            }
        },
        // todo: remove article's category id
        deleteCategory: {
            type: GraphQLString,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
            },
            resolve: async (root, args) => {
                // catch error, cannot convert args.id to ObjectID
                let category = await models.Category.findOne({_id: args.id});
                // catch error, category not found
                if (!category) throw Error('category not Found');

                category.remove(); // update async
                return 'success'
            }
        },

        // article's mutation
        createArticle: {
            type: GraphQLID,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                slug: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: GraphQLString},
                status: {type: GraphQLString},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                allowComments: {type: GraphQLBoolean},
            },
            resolve: async (root, args) => {
                let article = new models.Article(args);
                await article.save();
                return article.id;
            }
        },
        updateArticle: {
            type: GraphQLID,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
                title: {type: GraphQLString},
                slug: {type: GraphQLString},
                content: {type: GraphQLString},
                status: {type: GraphQLString},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                allowComments: {type: GraphQLBoolean},
            },
            resolve: async (root, args) => {
                let article = await models.Article.findOne({_id: args.id});
                if (!article) throw Error('Article not Found');
                article.set(args);
                // todo: mongoose problem, no check here
                await article.save();
                return article.id;
            }
        },
        deleteArticle:{
            type:GraphQLID,
            args:{
                id: {type: new GraphQLNonNull(GraphQLID),},
            },
            resolve: async (root, args) => {
                let article = await models.Article.findOne({_id: args.id});
                await article.remove();
                return article.id;
            }
        }
    }
});
export default MutationType;