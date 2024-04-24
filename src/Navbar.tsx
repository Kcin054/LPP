import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
} from "antd";
import type { MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BellFilled,
  DownOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import Logo from "./assets/Logo";
import IconMenuEleven from "./assets/IconMenuEleven";
import IconMenuOne from "./assets/IconMenuOne";
import IconMenuTwo from "./assets/IconMenuTwo";
import IconMenuThree from "./assets/IconMenuThree";
import IconMenuFour from "./assets/IconMenuFour";
import IconMenuFive from "./assets/IconMenuFive";
import IconMenuSix from "./assets/IconMenuSix";
import IconMenuSeven from "./assets/IconMenuSeven";
import IconMenuEight from "./assets/IconMenuEight";
import IconMenuTen from "./assets/IconMenuTen";
import IconMenuNine from "./assets/IconMenuNine";
import IconMenuTwelve from "./assets/IconMenuTwelve";
import IconMenuThirteen from "./assets/IconMenuThirteen";
import IconMenuFourteen from "./assets/IconMenuFourteen";
import IconMenuFifteen from "./assets/IconMenuFifteen";
import IconMenuSixteen from "./assets/IconMenuSixteen";
import IconMenuSeventeen from "./assets/IconMenuSeventeen";
import IconMenuEighteen from "./assets/IconMenuEighteen";
import IconMenuNineteen from "./assets/IconMenuNineteen";

const Navbar = () => {
  const { Header, Sider } = Layout;
  const navigate = useNavigate();

  type MenuItem = Required<MenuProps>["items"][number];

  const items1: MenuItem[] = [
    {
      key: "",
      label: "คลังสินค้า",
      icon: <IconMenuOne />,
      style: { display: "block" },
    },
    {
      key: "",
      label: "ข่าวสาร ประกาศ",
      icon: <IconMenuTwo />,
    },
    {
      key: "",
      label: "สนทนา",
      icon: <IconMenuThree />,
    },
    {
      key: "",
      label: "บริการดูแลบ้าน",
      icon: <IconMenuFour />,
    },
    {
      key: "",
      label: "พัสดุ",
      icon: <IconMenuFive />,
    },
    {
      key: "",
      label: "สิ่งอำนวยความสะดวก",
      icon: <IconMenuSix />,
    },
    {
      key: "",
      label: "หมายเลขโทรศัพท์",
      icon: <IconMenuSeven />,
    },
    {
      key: "",
      label: "ผู้อยู่อาศัย",
      icon: <IconMenuEight />,
    },
    {
      key: "",
      label: "ยานพาหนะ",
      icon: <IconMenuNine />,
    },
    {
      key: "",
      label: "แนะนำติชม",
      icon: <IconMenuTen />,
    },
    {
      key: "",
      label: "จัดการห้องชุด",
      icon: <IconMenuEleven />,
    },
    {
      key: "",
      label: "ฝากขาย - ฝากเช่า",
      icon: <IconMenuTwelve />,
    },
    {
      key: "",
      label: "โหวตการประชุมโครงการ",
      icon: <IconMenuThirteen />,
    },
    {
      key: "",
      label: "จัดการงาน",
      icon: <IconMenuFourteen />,
    },
    {
      key: "",
      label: "จัดการสิ่งของสำหรับทำงาน",
      icon: <IconMenuFifteen />,
    },
    {
      key: "",
      label: "แกลเลอรี",
      icon: <IconMenuSixteen />,
    },
    {
      key: "",
      label: "จัดการกิจกรรมของโครงการ(emotions)",
      icon: <IconMenuSeventeen />,
    },
    {
      key: "",
      label: "ชำระเงิน(stars)",
      icon: <IconMenuEighteen />,
    },
    {
      key: "/question",
      label: "สำรวจความพึงพอใจ",
      icon: <IconMenuNineteen />,
    },
  ];
  const onClick = (e: string) => {
    navigate(e);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a>โปรไฟล์</a>,
    },
    {
      key: "2",
      label: <a>ออกจากระบบ</a>,
    },
  ];

  return (
    <Layout>
      <Sider
        title="LOGO"
        breakpoint="lg"
        collapsedWidth="0"
        width="15vw"
        style={{
          height: "100vh",
          background: "#F8F9F9",
        }}
      >
        <div
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Logo style={{height:"100px", width:"30px"}} />
        </div>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            marginLeft: 5,
            fontSize: 17,
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "20px",
              width: "20px",
              padding: 5,
              backgroundColor: "#F8931D",
              color:"#FFFFFF",
              fontSize: 10,
              fontWeight: 100,
              borderRadius: 5,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginRight:5,
            }}
          >
            <LeftOutlined />
          </div>
          <div style={{ color: "black" }}>กลับ</div>
        </div>
        <Menu
          style={{overflowY:"auto", height: "calc(100vh - 140px)",}}
          mode="inline"
          defaultSelectedKeys={["/question"]}
          items={items1}
          onClick={(e) => onClick(e.key)}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: "#276347",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <BellFilled style={{ fontSize: 30, color: "#FFFFFF" }} />
          <div
            style={{
              width: 80,
              height: 40,
              borderRadius: 100,
              marginLeft: 15,
              backgroundColor: "#477A62",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#FFFFFF", marginRight:10 }}>TH</p>
            <DownOutlined style={{ color: "#FFFFFF" }} />
          </div>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Button
              style={{
                backgroundColor: "#276347",
                border: "none",
                width: "15vw",
                height: "auto",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Avatar
                src="profile-picture.jpg"
                size={40}
                style={{ display: "flex" }}
              />
              <a>
                <a style={{ display: "flex", color: "#FFFFFF" }}>
                  Marine Sudjaidee
                </a>
                <div
                  style={{ fontSize: 10, display: "flex", color: "#FFFFFF" }}
                >
                  Admin
                </div>
              </a>
              <DownOutlined style={{ color: "#FFFFFF" }} />
            </Button>
          </Dropdown>
        </Header>
        <Layout.Content
          style={{
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
