import { Col, Row } from "reactstrap";
import ValidationField from "../../../core/design-system/ValidationField/ValidationField";
const Form = () => {
  return (
    <Row className="w-100">
      <Col>
        <ValidationField placeholder="name" label="name" name="name" />
        <ValidationField placeholder="address" label="address" name="address" />
      </Col>
      <Col>
        <ValidationField placeholder="number" label="number" name="number" />
      </Col>
    </Row>
  );
};

export default Form;
