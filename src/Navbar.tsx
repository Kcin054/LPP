import { Button, Dropdown, Layout, Menu, Select, Space } from "antd";
import type { MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { BellFilled, DownOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { Header, Sider } = Layout;
  const navigate = useNavigate();

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "",
    },
    {
      key: "/page",
      label: "กลับ",
      style: { position: "sticky", overflowY: "auto" },
      children: [
        {
          key: "/page",
          label: "คลังสินค้า",
          style: { display: "block" },
        },
        {
          key: "/page",
          label: "ข่าวสาร ประกาศ",
        },
        {
          key: "/page",
          label: "สนทนา",
        },
        {
          key: "/page",
          label: "บริการดูแลบ้าน",
        },
        {
          key: "/page",
          label: "พัสดุ",
        },
        {
          key: "/page",
          label: "สิ่งอำนวยความสะดวก",
        },
        {
          key: "/page",
          label: "หมายเลขโทรศัพท์",
        },
        {
          key: "/page",
          label: "ผู้อยู่อาศัย",
        },
        {
          key: "/page",
          label: "ยานพาหนะ",
        },
        {
          key: "/page",
          label: "แนะนำติชม",
        },
        {
          key: "/page",
          label: "จัดการห้องชุด",
        },
        {
          key: "/page",
          label: "ฝากขาย - ฝากเช่า",
        },
        {
          key: "/page",
          label: "โหวตการประชุมโครงการ",
        },
        {
          key: "/page",
          label: "จัดการงาน",
        },
        {
          key: "/page",
          label: "จัดการสิ่งของสำหรับทำงาน",
        },
        {
          key: "/page",
          label: "แกลเลอรี",
        },
        {
          key: "/emotionPage",
          label: "จัดการกิจกรรมของโครงการ(emotions)",
        },
        {
          key: "/starPage",
          label: "ชำระเงิน(stars)",
        },
        {
          key: "/question",
          label: "สำรวจความพึงพอใจ",
        },
      ],
    },
  ];

  const onClick = (e: string) => {
    navigate(e);
    // setC(e);
  };

  // const items: MenuProps['items'] = [
  //   {
  //     label: '1st menu item',
  //     key: '1',
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     label: '2nd menu item',
  //     key: '2',
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     label: '3rd menu item',
  //     key: '3',
  //     icon: <UserOutlined />,
  //     danger: true,
  //   },
  //   {
  //     label: '4rd menu item',
  //     key: '4',
  //     icon: <UserOutlined />,
  //     danger: true,
  //     disabled: true,
  //   },
  // ];

  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  return (
    <Layout style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100%",
          background: "#F8F9F9",
          overflowY: "auto",
          position: "sticky",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={items}
          onClick={(e) => onClick(e.key)}
        />
      </Sider>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100%",
          background: "#F8F9F9",
          position: "fixed",
          overflowY: "scroll",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={items}
          onClick={(e) => onClick(e.key)}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            height: "12vh",
            width: "100%",
            position: "sticky",
            backgroundColor: "#205C40",
            top: 0,
            right: 0,
          }}
        ></Header>
        <Header
          style={{
            height: "13vh",
            width: "100%",
            position: "fixed",
            backgroundColor: "#205C40",
            top: 0,
            zIndex: 10,
          }}
        >
          <BellFilled />
          <Select
            defaultValue="TH"
            style={{ width: 120 }}
            options={[
              { value: "th", label: "TH" },
              { value: "en", label: "EN" },
            ]}
          />
          <>Marine Sudjaidee</> <>Admin</>
          {/* <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown> */}
        </Header>
        <Layout.Content style={{ height: "auto", overflowY: "scroll" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
