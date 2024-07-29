module.exports = {
    login: (req, res) => { res.send('Login') },
    register: (req, res) => { res.send('register') },
    logout: (req, res) => { res.send('logout') },
    refreshToken: (req, res) => { res.send('refresh-token') },
    profile: (req, res) => { res.send('profile') },
}