export default ({
    app,
    redirect
}) => {
    if (app.$auth.$storage.state.loggedIn) {
        return redirect('/dashboard')
    }
}