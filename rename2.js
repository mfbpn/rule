/**
 * 精简版脚本 - 仅保留 [name=] 节点添加机场名称前缀功能
 * 用法：Sub-Store 脚本操作添加
 * 参数：
 *   [name=]  节点添加机场名称前缀（必需）
 *   [nf]     将前缀放在节点名最前面（默认放在末尾）
 *   [fgf=]   前缀与节点名之间的分隔符，默认为空格
 * 示例：https://example.com/script.js#name=机场A&nf&fgf=-
 */

const args = $arguments;
const prefix = args.name ? decodeURI(args.name) : null;

if (!prefix) {
  // 未提供 name 参数，不做任何修改
  $content;
} else {
  const nf = args.nf === true;          // 是否前缀放在最前面
  const separator = args.fgf !== undefined ? decodeURI(args.fgf) : " ";

  for (let i = 0; i < $content.length; i++) {
    const node = $content[i];
    const originalName = node.name;
    if (nf) {
      node.name = prefix + separator + originalName;
    } else {
      node.name = originalName + separator + prefix;
    }
  }
  $content;
}
