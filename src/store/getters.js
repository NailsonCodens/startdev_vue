export const isAuthPage = ({ route }) => route.path.indexOf('/auth') !== -1

export const Navigation = ({ route }, getters) => (route.path ? !getters.isAuthPage : false)
