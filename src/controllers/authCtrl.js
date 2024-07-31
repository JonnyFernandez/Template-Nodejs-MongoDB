module.exports = {
    register: (req, res) => {
        res.send('hola bebe')
    },
    login: () => { return "logeando" },
    logout: () => { return 'saliendo' },
    refreshToken: () => { return 'refrescando' },
    profile: () => { return 'usuarios' },
}