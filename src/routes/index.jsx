export const appRoutes = {
    home: '/',
    contact: '/contact',
    reservation: '/reservation',
    restaurant: {
        menu: '/restaurant/:id/menu',
        register: '/restaurant/register',
        about: '/restaurant/:id/about'
    },
    auth: {
        login: '/login',
        signup: '/signup',
        auth: '/auth'
    },
    profile: {
        manage: '/profile',
        orders: '/profile/orders',
        reservations: '/profile/reservations'
    }
};

