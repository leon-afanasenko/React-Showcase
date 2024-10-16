import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Card, Typography } from "antd";
import { updateName, updateDescription, resetForm } from "./features/formSlice";

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  const { name, description } = useSelector((state) => state.form);

  const handleNameChange = (e) => dispatch(updateName(e.target.value));
  const handleDescriptionChange = (e) =>
    dispatch(updateDescription(e.target.value));

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Description:", description);
    dispatch(resetForm());
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Title level={2}>Форма с использованием Ant Design и Redux</Title>
      <Form layout="vertical">
        <Form.Item label="Имя">
          <Input
            value={name}
            onChange={handleNameChange}
            placeholder="Введите ваше имя"
          />
        </Form.Item>
        <Form.Item label="Описание">
          <Input
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Введите описание"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {name && description && (
        <Card style={{ marginTop: "20px" }}>
          <Title level={4}>Отправленные данные:</Title>
          <p>
            <strong>Имя:</strong> {name}
          </p>
          <p>
            <strong>Описание:</strong> {description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
