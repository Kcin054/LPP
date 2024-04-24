import { Card, Col, Input, Layout, Row } from "antd";
import React from "react";
import { LeftPage, TopPage, Option, Radios } from "../components/question";
import One from "../IconEmotion/One";
import Two from "../IconEmotion/Two";
import Three from "../IconEmotion/Three";
import Four from "../IconEmotion/Four";
import Five from "../IconEmotion/Five";

function EmotionPage() {
  return (
    <div style={{overflowY:"auto",overflowX:"hidden", height:"calc(100vh - 80px)",backgroundColor:"#FFFFFF", padding:"10px"}}>
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
              overflow: "auto",
              backgroundColor: "#FFFFFF",
            }}
          >
            <LeftPage />
          </Col>
          <Col
            span={18}
            style={{
              position: "sticky",
              overflow: "auto",
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
              <p>ตัวอย่าง Emotions</p>
              <div
                style={{
                  widows: "100%",
                  height: "20vh",
                  borderRadius: 7,
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color:"red"
                }}
              >
                <div style={{marginRight:10}}><One/></div>
                <div style={{marginRight:10, marginLeft:10}}><Two/></div>
                <div style={{marginRight:10, marginLeft:10}}><Three/></div>
                <div style={{marginRight:10, marginLeft:10}}><Four/></div>
                <div style={{marginLeft:10}}><Five/></div>
                
                
                
               
                
              </div>
              <p>การกรอกข้อมูลเพิ่มเติม</p>
              <div><Radios/></div>
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

export default EmotionPage;
