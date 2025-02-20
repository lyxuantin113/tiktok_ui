import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: null},
    // Add more routes here
]

// Must be authenticated before accessing these routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }