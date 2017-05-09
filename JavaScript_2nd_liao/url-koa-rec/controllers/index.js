var fn_index = async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <P><input type="submit" value="提交"></P>
    </form>`;
};

var fn_signin = async(ctx, next) => {
    var name = ctx.request.body.name || "",
        password = ctx.request.body.password || "";
    console.log(`signin with name: ${name}, password: ${password}`);
    
    if(name === 'koa' && password === '123') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
        console.log('sucess.')
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
        console.log('failed.')
    }
};

module.exports = {
    'GET/': fn_index,
    'POST/signin': fn_signin
};