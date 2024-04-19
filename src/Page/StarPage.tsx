import { Layout, Row, Col, Card, Input } from 'antd'
import { TopPage, LeftPage, Option } from '../components/question'

function StarPage() {
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
  )
}

export default StarPage