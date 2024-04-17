import { Button, Dropdown, Layout, Menu, Space, message } from "antd";
// import Sider from "antd/es/layout/Sider";
// import { Content, Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";

const Navbar = () => {
  const { Header, Sider, Content } = Layout;

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "/Satisfaction",
      label: "แผงบริหาร",
    },
    {
      key: "/Satisfaction",
      label: "ข่าวสาร ประกาศ",
    },
    {
      key: "/Satisfaction",
      label: "สนทนา",
    },
    {
      key: "/Satisfaction",
      label: "บริการดูแลบ้าน",
    },
    {
      key: "/Satisfaction",
      label: "พัสดุ",
    },
    {
      key: "/Satisfaction",
      label: "สิ่งอำนวยความสะดวก",
    },
    {
      key: "/Satisfaction",
      label: "หมายเลขโทรศัพท์",
    },
    {
      key: "/Satisfaction",
      label: "ผู้อยู่อาศัย",
    },
    {
      key: "/Satisfaction",
      label: "ยานพาหนะ",
    },
    {
      key: "/Satisfaction",
      label: "แนะนำติชม",
    },
    {
      key: "/Satisfaction",
      label: "จัดการห้องชุด",
    },
    {
      key: "/Satisfaction",
      label: "ฝากขาย - ฝากเช่า",
    },
    {
      key: "/Satisfaction",
      label: "โหวตการประชุมโครงการ",
    },
    {
      key: "/Satisfaction",
      label: "จัดการงาน",
    },
    {
      key: "/Satisfaction",
      label: "จัดการสิ่งของสำหรับทำงาน",
    },
    {
      key: "/Satisfaction",
      label: "แกลเลอรี",
    },
    {
      key: "/Satisfaction",
      label: "จัดการกิจกรรมของโครงการ",
    },
    {
      key: "/Satisfaction",
      label: "ชำระเงิน",
    },
    {
      key: "/Satisfaction",
      label: "สำรวจความพึงพอใจ",
    },
  ];

  //   const headerStyle = {
  //     backgroundColor: "#376946",
  //     position: "sticky",
  //   };

  //   const siderStyle = {
  //     backgroundColor: "#F8F9F9",
  //     width: "15%",
  //     position: "fixed",
  //   };

  //   const layoutStyle = {
  //     width: "100vw",
  //     height: "100vh",
  //   };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Layout style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header
        style={{
          backgroundColor: "#205C40",
          width: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
        }}
      >
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Button
              {/* <DownOutlined /> */}
            </Space>
          </Button>
        </Dropdown>
      </Header>

      <Layout>
        <Sider
          style={{
            backgroundColor: "#F8F9F9",
            // overflow: "auto",
            height: "100vh",
            // width:"25vw",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            //   theme="dark"
            //   style={{ background: "#2F353A" }}
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={items}
            //   onClick={(e) => onClick(e.key)}
          />
        </Sider>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
