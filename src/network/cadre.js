/**
 * @Project: cmis-pad-vue
 * @File:cadre
 * @Dsc: 干部信息网络请求
 * @Author wjz
 * @CreateDate 2021/9/2 16:37
 */
import {request} from "@/network/request";

export function getDatabase() {
  return request({
    url:'/getTestData',
  })
}
