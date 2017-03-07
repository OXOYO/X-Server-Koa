/**
 * Created by yangfan on 2016/12/22.
 */

import Koa from 'koa'

import middleware from './middleware'
import api from './api'
import { key} from './config'

const app = new Koa()

app.keys = [key]

app.use(middleware(app))
app.use(api())

export default app