import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * 布局设置，可以在前端点击右边的设置，进行一些主题布局等等进行设置好后，点击最下面的拷贝设置，对下面的内容进行替换即可
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'xiaowc接口',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
