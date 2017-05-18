/**
 * Created by Jack on 4/20/2017.
 */

import React from 'react';
import Sidebar from './sidebar'
import ArticleList from './article/article-list'

class Home extends React.Component{
    render(){
        return(
            <ArticleList/>
        )
    }
}

export default Home;