/**
 * Created by yangfan on 2017/1/13.
 */

export default function cros() {
    return async (ctx, next) => {
        console.log('x-log_ctx', ctx)
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', 'content-type')
        /*
        if (!ctx.request.header.origin.includes('http://localhost:8080')) {
            return false
        }
         */

        await next()
    }
}