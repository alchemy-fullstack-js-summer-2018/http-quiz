const { parse } = require('url');
module.exports = (req, res) => {

    const url = parse(req.url, true);     
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'api'){
        let message = ['bernice', 'bernard'];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    }
    else if(parts[0] === 'mistake'){
        let message = '<p>All tracks covered</p>';
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    }
};