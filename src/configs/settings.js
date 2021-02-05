export const settings = {
  siteName: process.env.REACT_APP_TITLE,
  dashboardRoute: '/',
  hasPublicPage: false,
  API_URL: process.env.REACT_APP_API_URL,
  ADMIN_URL: process.env.REACT_APP_ADMIN_URL,
  TOKEN: process.env.REACT_APP_TOKEN,
  DOMAIN: process.env.REACT_APP_DOMAIN,
  perPage: 12,
  pagination: {
    pageRangeDisplayed: 3,
    hideDisabled: true,
    hideFirstLastPages: false,
    hideNavigation: true,
    linkClassFirst: 'arrow first',
    linkClassPrev: 'arrow prev',
    linkClassNext: 'arrow next',
    linkClassLast: 'arrow last'
  },
  courses: {
    view: {
      ratings: true,
      totalProgress: true,
      favorites: true
    }
  }
}
