/**
 * Created by yangfan on 2017/1/8.
 */

import compose from 'koa-compose'
import convert from 'koa-convert'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'

import cros from './cros'
import pipe from './pipe'

export default function middleware(app) {
    // console.log('x-log_cros ', cros)
    return compose([
        logger(),
        // FIXME !!! 此处会报错 reset HTTP headers (e.g. remove x-powered-by)
        helmet(),
        convert(cors()),
        convert(bodyParser()),
        convert(session(app)),
        pipe(),
        cros()
    ])
}