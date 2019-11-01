<style lang="less" scoped>
.wiki {
  //background: #ff1141;
  width: 100%;
  height: 100%;
  overflow:auto;
}
</style>
<template>
  <div class="wiki">
    <!-- test data -->
    <div class="article-body  markdown-body editormd-preview-container" id="page-content"><article class="markdown-article-inner"><h4 id="deqj48" class="markdown-heading"><a name="deqj48" class="reference-link"></a><span class="header-link octicon octicon-link"></span>简要描述：</h4><ul>
<li>用户登录接口</li></ul>
<h4 id="afcs6i" class="markdown-heading"><a name="afcs6i" class="reference-link"></a><span class="header-link octicon octicon-link"></span>接口版本：</h4><table>
<thead>
<tr>
<th style="text-align:left">版本号</th>
<th style="text-align:left">制定人</th>
<th style="text-align:left">制定日期</th>
<th>修订日期</th>
</tr>
</thead>
<tbody><tr>
<td style="text-align:left">2.1.0</td>
<td style="text-align:left">秦亮</td>
<td style="text-align:left">2017-03-20</td>
<td>xxxx-xx-xx</td>
</tr>
</tbody></table>
<h4 id="7wt7h4" class="markdown-heading"><a name="7wt7h4" class="reference-link"></a><span class="header-link octicon octicon-link"></span>请求URL:</h4><ul>
<li><a href="http://xx.com/api/login" target="_blank">http://xx.com/api/login</a></li></ul>
<h4 id="czw7jf" class="markdown-heading"><a name="czw7jf" class="reference-link"></a><span class="header-link octicon octicon-link"></span>请求方式：</h4><ul>
<li>GET</li><li>POST</li></ul>
<h4 id="ccnzp2" class="markdown-heading"><a name="ccnzp2" class="reference-link"></a><span class="header-link octicon octicon-link"></span>请求头：</h4><table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td style="text-align:left">Content-Type</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>请求类型： application/json</td>
</tr>
<tr>
<td style="text-align:left">Content-MD5</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>请求内容签名</td>
</tr>
</tbody></table>
<h4 id="8togqi" class="markdown-heading"><a name="8togqi" class="reference-link"></a><span class="header-link octicon octicon-link"></span>请求参数:</h4><table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td style="text-align:left">username</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>用户名</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>密码</td>
</tr>
</tbody></table>
<h4 id="s7rdn" class="markdown-heading"><a name="s7rdn" class="reference-link"></a><span class="header-link octicon octicon-link"></span>返回示例:</h4><p class="line"><strong>正确时返回:</strong></p>
<pre class="hljs json"><code>{
    <span class="hljs-attr"><span class="hljs-attr">"errcode"</span></span>: <span class="hljs-number"><span class="hljs-number">0</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"data"</span></span>: {
        <span class="hljs-attr"><span class="hljs-attr">"uid"</span></span>: <span class="hljs-string"><span class="hljs-string">"1"</span></span>,
        <span class="hljs-attr"><span class="hljs-attr">"account"</span></span>: <span class="hljs-string"><span class="hljs-string">"admin"</span></span>,
        <span class="hljs-attr"><span class="hljs-attr">"nickname"</span></span>: <span class="hljs-string"><span class="hljs-string">"Minho"</span></span>,
        <span class="hljs-attr"><span class="hljs-attr">"group_level"</span></span>: <span class="hljs-number"><span class="hljs-number">0</span></span> ,
        <span class="hljs-attr"><span class="hljs-attr">"create_time"</span></span>: <span class="hljs-string"><span class="hljs-string">"1436864169"</span></span>,
        <span class="hljs-attr"><span class="hljs-attr">"last_login_time"</span></span>: <span class="hljs-string"><span class="hljs-string">"0"</span></span>,
    }
}</code></pre><p class="line"><strong>错误时返回:</strong></p>
<pre class="hljs json"><code>{
    <span class="hljs-attr"><span class="hljs-attr">"errcode"</span></span>: <span class="hljs-number"><span class="hljs-number">500</span></span>,
    <span class="hljs-attr"><span class="hljs-attr">"errmsg"</span></span>: <span class="hljs-string"><span class="hljs-string">"invalid appid"</span></span>
}</code></pre><h4 id="g6m6kx" class="markdown-heading"><a name="g6m6kx" class="reference-link"></a><span class="header-link octicon octicon-link"></span>返回参数说明:</h4><table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td style="text-align:left">group_level</td>
<td style="text-align:left">int</td>
<td>用户组id，1：超级管理员；2：普通用户</td>
</tr>
</tbody></table>
<h4 id="bp8l1b" class="markdown-heading"><a name="bp8l1b" class="reference-link"></a><span class="header-link octicon octicon-link"></span>备注:</h4><ul>
<li>更多返回错误代码请看首页的错误代码描述</li></ul><div class="wiki-bottom">文档更新时间: 2019-11-01 18:39 &nbsp;&nbsp;作者：admin</div></article></div>
    <!-- end -->
  </div>
</template>

<script>
export default {
  name: "wiki",
  data: function() {
    return {
      node: [
        {
          id: "1",
          name: "分组A",
          list: [
            {
              id: "1",
              name: "文档A",
              list: [{ id: "1", name: "档案内分段 h2, 分段内分段 h3 h4 h5 h6" }]
            }
          ]
        }
      ]
    };
  }
};
</script>