/**
 * 只有管理员才可以使用的接口信息管理
 * 前端如何区分权限
 * ant design pro 为我们定制了一套权限管理机制
 *
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin', // 只有当前用户是管理员，当canAdmin是true时才把这个用户当作管理员
  };
}
