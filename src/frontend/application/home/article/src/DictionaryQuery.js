/**
 * Created by Jack on 5/1/2017.
 */

const DictionaryQuery = graphql`
    query DictionaryQuery {
        dictionary {
            ...DictionaryComponent_word
        }
    }
`