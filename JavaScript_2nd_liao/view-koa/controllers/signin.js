module.exports = {
    'POST/signin': async (ctx, next) => {
        let email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if(email === 'admin@example.com' && password === '123456') {
            // 登陆成功后，渲染signin-ok.html模板
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            // 登陆失败，渲染另外一个模板
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
}