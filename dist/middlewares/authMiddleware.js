import jwt from 'jsonwebtoken';
;
export default function isLogin(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token)
        return res.status(401).send('You cannot access this page before login!');
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch {
        res.status(401).send('Invalid token');
    }
}
;
