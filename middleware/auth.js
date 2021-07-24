

//Middleware for restricted routes

export default function ({ app, route, redirect }) {
    if (route.path == '/dashboard') {
      //we are on a protected route
      if (!app.$fire.auth.currentUser) {
        //take them to sign in page
        return redirect('/');
      }
    } else if (route.path === '/') {
      if (!app.$fire.auth.currentUser) {
        //leave them on the sign in page
      } else if (app.$fire.auth.currentUser.emailVerified === true) {
        return redirect('/dashboard');
      }
    }
  }