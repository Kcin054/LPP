import { Button, Card, Col, Input, Layout, Radio, Row } from "antd";
import React from "react";

export const TopPage = () => {
  return (
    <div>
      <Card
        style={{
          height: "22vh",
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
        }}
      >
        <>สำรวจความพึงพอใจ</>
        <br></br>
        <>สำรวจความพึงพอใจ / รายละเอียดสำรวจความพึงพอใจ</>
        <Button>รายละเอียด</Button>
        <Button>คำถาม</Button>
        <Button>การตอบกลับ</Button>
        <Button>...</Button>
        <Button>ยกเลิก</Button>
        <Button>บันทึก</Button>
      </Card>
    </div>
  );
};

export const LeftPage = () => {
  return (
    <Card
      title="รูปแบบการสำรวจ"
      style={{
        height: "55vh",
        marginLeft: 50,
        marginRight: 10,
        marginTop: 20,
      }}
    >
      <Button style={{ width: "100%" }}>
        <Radio>คำถาม</Radio>
      </Button>
      <Button style={{ marginTop: 10, width: "100%" }}>
        <Radio>Emotions</Radio>
      </Button>
      <Button style={{ marginTop: 10, width: "100%" }}>
        <Radio>ดาว</Radio>
      </Button>
    </Card>
  );
};

export const Option = () => {
  return (
    <>
      <Card title="ตัวเลือกที่ 1: ความพึงพอใจต่อบริการแม่บ้าน" style={{marginBottom:20}}>
        <p>ตัวเลือก [TH]</p>
        <Input></Input>
        <p>ตัวเลือก [EN]</p>
        <Input></Input>
      </Card>
      <Card title="ตัวเลือกที่ 2: ความพึงพอใจต่อบริการ รปภ.">
        <p>ตัวเลือก [TH]</p>
        <Input></Input>
        <p>ตัวเลือก [EN]</p>
        <Input></Input>
      </Card>
      <p>+ เพิ่มตัวเลือก</p>
      <Card size="small">+ เพิ่มคำถาม</Card>
    </>
  );
};

export function Question() {
  return (
    <div>
      <Layout style={{ overflow: "auto" }}>
        <Row style={{ width: "100%", height: "25vh" }}>
          <Col span={24}>
            <div>
              <TopPage />
            </div>
          </Col>
        </Row>
      </Layout>

      <Layout style={{ height: "autu", overflow: "auto" }}>
        <Row>
          <Col
            span={6}
            style={{
              overflow: "auto",
            }}
          >
            <LeftPage />
          </Col>
          <Col
            span={18}
            style={{
              position: "sticky",
              overflow: "auto",
            }}
          >
            <Card style={{ marginLeft: 10, marginRight: 50, marginTop: 20 }}>
              <p>หัวข้อ [TH]</p>
              <Input></Input>
              <p>หัวข้อ [EN]</p>
              <Input></Input>
              <p>ตัวเลือก</p>
              <Option/>
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Question;
