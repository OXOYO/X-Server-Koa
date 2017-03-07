/**
 * Created by yangfan on 2017/1/13.
 */

export default function cros() {
    return async (ctx, next) => {
        // console.log('x-log_ctx', ctx)
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept,X-Requested-With, Origin')
        ctx.set('Access-Control-Allow-Credentials', 'true')
        ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
        /*
        if (!ctx.request.header.origin.includes('http://localhost:8080')) {
            return false
        }
         */

        await next()
    }
}