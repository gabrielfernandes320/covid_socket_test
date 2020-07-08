import React, { useState, useRef, useEffect } from "react";
import "./profile.scss";
import Form, { Item, Label } from "devextreme-react/form";
import openSocket from "socket.io-client";
import {
  SelectBox,
  CheckBox,
  TextBox,
  DateBox,
  Button,
  ValidationSummary,
} from "devextreme-react";

const socket = openSocket("http://localhost:3000");
socket.on("connect", (client) => {});

export default function Tester() {
  console.log("renderizou");
  const [notes, setNotes] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState("Nao Conectado");
  const formData = useRef({});

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setMessages([...messages, newMessage]);
    socket.on("msg", handleNewMessage);
    return () => socket.off("msg", handleNewMessage);
  }, [messages]);

  // socket.on("msg", (msg) => {
  //   console.log(msg);
  //   setMessages((messages) => [...messages, msg]);
  // });

  return (
    <React.Fragment>
      <h2 className={"content-block"}>{connected}</h2>

      <div className={"content-block dx-card responsive-paddings"}>
        <form
          action="your-action"
          onSubmit={(e) => {
            const { message } = formData.current;
            //setMessages((messages) => [...messages, message]);
            console.log(messages);
            socket.emit("msg", message);
            e.preventDefault();
          }}
        >
          <Form formData={formData.current} colCount={2}>
            <Item
              dataField={"message"}
              editorType={"dxTextBox"}
              editorOptions={{
                stylingMode: "filled",
                placeholder: "Digite sua mensagem",
              }}
            >
              <Label visible={false} />
            </Item>
            <Item>
              <Button
                id="button"
                text="Enviar Mensagem"
                type="Normal"
                useSubmitBehavior={true}
              ></Button>
            </Item>
          </Form>
        </form>
      </div>

      <div className={"content-block dx-card responsive-paddings"}>
        {messages.map((item, index) => (
          <p className={"speech-bubble"} key={index}>
            {item}
          </p>
        ))}
        <span>{notes}</span>
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
};
