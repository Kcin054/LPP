import {
  Button,
  Card,
  Col,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
} from "antd";
import { useState } from "react";
import HoverDisplay from "../assets/HoverDisplay";
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined } from "@ant-design/icons";
import BinIcon from "../assets/BinIcon";
import IconMenuOne from "../assets/IconMenuOne";

export const TopPage = () => {
  return (
    <div>
      <Card
        style={{
          height: "22vh",
          marginLeft: 50,
          marginRight: 50,
          border: "none",
        }}
      >
        <Row>
          <Col span={8}>
            <div className="font-weight: border;" style={{ fontSize: 20 }}>
              สำรวจความพึงพอใจ
            </div>
            <Row style={{ marginBottom: 15, marginTop: 5 }}>
              <div>สำรวจความพึงพอใจ </div>
              <div style={{ color: "#2061E7" }}>
                / รายละเอียดสำรวจความพึงพอใจ
              </div>
              <br />
            </Row>

            <Button
              style={{
                width: "100px",
                height: "40px",
                border: "none",
                backgroundColor: "#FEF4E9",
                color: "#F8931D",
                marginRight: 5,
              }}
            >
              รายละเอียด
            </Button>
            <Button
              style={{
                width: "100px",
                height: "40px",
                border: "none",
                backgroundColor: "#F8931D",
                color: "#FFFFFF",
                marginRight: 5,
              }}
            >
              คำถาม
            </Button>
            <Button
              style={{
                width: "100px",
                height: "40px",
                border: "none",
                backgroundColor: "#FEF4E9",
                color: "#F8931D",
                marginRight: 5,
              }}
            >
              การตอบกลับ
            </Button>
          </Col>
          <Col span={8}></Col>
          <Col span={8} style={{ display: "flex", justifyContent: "start" }}>
            <Button
              style={{
                height: "50px",
                border: "none",
                padding: "0px",
                marginRight: 10,
              }}
            >
              <HoverDisplay />
            </Button>
            <Button
              style={{
                backgroundColor: "#E5E5E5",
                border: "none",
                color: "#1E1E1E",
                height: "50px",
                width: "150px",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              ยกเลิก
            </Button>
            <Button
              style={{
                backgroundColor: "#7BB54E",
                border: "none",
                color: "#FFFFFF",
                height: "50px",
                width: "150px",
                marginLeft: 10,
              }}
            >
              บันทึก
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export const LeftPage = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card
      title="รูปแบบการสำรวจ"
      style={{
        height: "55vh",
        marginLeft: 50,
        marginRight: 10,
        marginTop: 20,
        backgroundColor: "#F8F8F8",
        border: "none",
      }}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <div
            style={{
              width: "210px",
              height: "8vh",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              border: "none",
              backgroundColor: "#2061E7",
              borderRadius: 6,
            }}
          >
            <Button
              style={{
                width: "210px",
                height: "8vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                border: "none",
                marginLeft: 5,
              }}
              onClick={() => navigate("/question")}
            >
              <Radio value={1}>คำถาม</Radio>
            </Button>
          </div>

          <div
            style={{
              width: "210px",
              height: "8vh",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              border: "none",
              backgroundColor: "#80BC28",
              borderRadius: 6,
            }}
          >
            <Button
              style={{
                width: "210px",
                height: "8vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                border: "none",
                marginLeft: 5,
              }}
              onClick={() => navigate("/emotionPage")}
            >
              <Radio value={2}>Emotions</Radio>
            </Button>
          </div>

          <div
            style={{
              width: "210px",
              height: "8vh",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              border: "none",
              backgroundColor: "#F8931D",
              borderRadius: 6,
            }}
          >
            <Button
              style={{
                width: "210px",
                height: "8vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                border: "none",
                marginLeft: 5,
              }}
              onClick={() => navigate("/starPage")}
            >
              <Radio value={3}>ดาว</Radio>
            </Button>
          </div>
        </Space>
      </Radio.Group>
    </Card>
  );
};

export const Option = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <Card style={{ marginBottom: 20, backgroundColor: "#F1F1F1" }}>
        <div
          style={{
            height: "20px",
            width: "100%",
            fontSize: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "12",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconMenuOne style={{ marginRight: 10 }} />
            ตัวเลือกที่ 1: ความพึงพอใจต่อบริการแม่บ้าน
          </div>
          <BinIcon />
        </div>
        <p>ตัวเลือก [TH]</p>
        <Input
          placeholder="พึงพอใจมาก"
          style={{ border: "none", borderRadius: 4, height: "5vh" }}
        ></Input>
        <p>ตัวเลือก [EN]</p>
        <Input
          placeholder="พึงพอใจปานกลาง"
          style={{ border: "none", borderRadius: 4, height: "5vh" }}
        ></Input>
      </Card>
      <Card style={{ backgroundColor: "#F1F1F1" }}>
        <div
          style={{
            height: "20px",
            width: "100%",
            fontSize: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "12",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor:"black"
            }}
          >
            <IconMenuOne style={{ marginRight: 10 }} />
            ตัวเลือกที่ 2: ความพึงพอใจต่อบริการ รปภ.
          </div>
          <BinIcon />
        </div>

        <p>ตัวเลือก [TH]</p>
        <Input
          placeholder="พึงพอใจมาก"
          style={{ border: "none", borderRadius: 4, height: "5vh" }}
        ></Input>
        <p>ตัวเลือก [EN]</p>
        <Input
          placeholder="พึงพอใจปานกลาง"
          style={{ border: "none", borderRadius: 4, height: "5vh" }}
        ></Input>
      </Card>
      <p style={{ color: "#2061E7" }}>+ เพิ่มตัวเลือก</p>
    </div>
  );
};

export const Radios = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1} style={{ marginRight: 150 }}>
        มี
      </Radio>
      <Radio value={2}>ไม่มี</Radio>
    </Radio.Group>
  );
};

export function Question() {
  return (
    <div
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "calc(100vh - 80px)",
        backgroundColor: "#FFFFFF",
        padding: "10px",
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col span={24} style={{ backgroundColor: "#FFFFFF" }}>
          <div>
            <TopPage />
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          span={6}
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <LeftPage />
        </Col>
        <Col
          span={18}
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <Card
            style={{
              marginLeft: 10,
              marginRight: 50,
              marginTop: 20,
              backgroundColor: "#F8F8F8",
              border: "none",
            }}
          >
            <div
              style={{
                height: "20px",
                width: "100%",
                fontSize: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "12",
              }}
            >
              <div>
                <IconMenuOne style={{ marginRight: 10 }} />
              </div>
              <BinIcon />
            </div>
            <Row style={{display:"flex", justifyContent:"space-between"}}><p>หัวข้อ [TH]</p><p>200/200</p></Row>
            <Input
              placeholder="รบกวนเวลาสักครู่เพื่อแสดงความเห็นของคุณ โปรดประเมินความพึงพอใจต่อบริการที่คุณได้รับ"
              style={{ border: "none", borderRadius: 4, height: "5vh" }}
            ></Input>
            <Row style={{display:"flex", justifyContent:"space-between"}}><p>หัวข้อ [EN]</p><p>200/200</p></Row>
            <Input
              placeholder="Please take the following time to reply to you. Don't forget to rate the quality of the upcoming service."
              style={{ border: "none", borderRadius: 4, height: "5vh" }}
            ></Input>
            <p>ตัวเลือก</p>
            <Option />
          </Card>
          <div style={{ marginLeft: 10, marginRight: 50, marginTop: 20 }}>
            <Card
              size="small"
              style={{
                backgroundColor: "#F8F8F8",
                border: "none",
                color: "#2061E7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              + เพิ่มคำถาม
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Question;
