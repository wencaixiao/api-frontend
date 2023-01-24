import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { List, message } from 'antd';
import { listInterfaceInfoByPageUsingGET } from '@/services/api-backend/interfaceInfoController';

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]); // 加载列表
  const [total, setTotal] = useState<number>(0);

  const loadData = async (current = 1, pageSize = 5) => {
    setLoading(true); // 发送请求之前改为true，表示正在加载
    try {
      const res = await listInterfaceInfoByPageUsingGET({  // 向后端发送请求，分页获取数据
        current,
        pageSize,
      });
      // 加载完之后，可以赋值给上面定义的状态变量
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false); // 发送完请求之后改为false，表示加载完成
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageContainer title="在线接口开放平台">
      <List
        className="my-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          const apiLink = `/interface_info/${item.id}`; // 点击之后传入对应接口的id，并且跳转到该接口的信息页面
          return (
            <List.Item actions={[<a key={item.id} href={apiLink}>查看</a>]}>
              <List.Item.Meta
                title={<a href={apiLink}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          );
        }}
        pagination={{ // 分页
          // eslint-disable-next-line @typescript-eslint/no-shadow
          showTotal(total: number) {
            return '总数：' + total;
          },
          pageSize: 5,
          total,
          onChange(page, pageSize) {
            loadData(page, pageSize);
          },
        }}
      />
    </PageContainer>
  );
};

export default Index;
