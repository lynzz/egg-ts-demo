import { Controller } from 'egg';
import { body, request, responses, summary, tags } from 'egg-swagger-decorator';
const pdfSchema = {
  url: { type: 'string', required: true, description: 'pdf 预览地址' },
  width: {
    type: 'string',
    required: false,
    example: '1386px',
    description: '页面宽度',
  },
};
export default class HomeController extends Controller {
  @request('post', '/api/pdf/create')
  @summary('生成 PDF')
  @tags(['PDF'])
  @body(pdfSchema)
  @responses({
    200: {
      description: '成功',
      schema: {
        type: 'object',
        properties: {
          data: { type: 'string', example: 'test' },
        },
      },
    },
  })
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
