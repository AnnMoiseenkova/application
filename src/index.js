import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component'
import {CreateComonent} from './components/create.component'
import {FavoriteComonent} from './components/favorite.component'
import {PostsComonent} from './components/posts.component'
import {LoaderComponent} from './components/loader.component';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const posts = new PostsComonent('posts', {loader})
const create = new CreateComonent('create')
const favorite = new FavoriteComonent('favorite', {loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])