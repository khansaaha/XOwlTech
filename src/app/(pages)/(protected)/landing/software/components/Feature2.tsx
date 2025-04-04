import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { features, type Feature } from '../data'

const Feature2 = ({ features }: { features: Feature[] }) => {
  return (
    <section className="py-4">
      <Container className="bg-soft-warning p-5 rounded-lg" data-aos="fade-up" data-aos-duration={700}>
        <h4 className="display-5 fw-medium mb-2">Prompt works on Every Device</h4>
        <Row className="align-items-center">
          <Col lg={8}>
            <ul className="list-inline mb-0 mt-4">
              {features.map((feature, idx) => (
                <li className="list-inline-item text-center me-3 me-sm-5" key={idx}>
                  <span className="icon icon-md text-body">{feature.deviceIcon}</span>
                  <h6 className="mb-lg-0">{feature.deviceName}</h6>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={4}>
            <div className="text-lg-center mt-5 mt-lg-0">
              <Link href="" className="btn btn-primary rounded">
                Get Prompt for Free <IconifyIcon className="icon-xs ms-1" icon="lucide:arrow-right" />
              </Link>
              <p className="text=muted mt-2 fs-12">
                Looking for older versions? <Link href="">Click Here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Feature2
