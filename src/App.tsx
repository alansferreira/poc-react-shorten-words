import { useState } from "react";
import "./styles.css";
import { Divider, Segment, Grid, Form, TextArea } from "semantic-ui-react";

function shorten(str: string) {
  const regex = /(\w{1,4})[\w]{0,}/gm;
  const subst = `$1`;
  // The substituted value will be contained in the result variable
  return str.replace(regex, subst);
}

export default function App() {
  const [output, setOutput] = useState("");
  const onChangeInput = (e: any) => {
    const input = e.target.value;
    const lines = input
      .replace(/\r\n/gm, "\n")
      .replace(/\r/gm, "\n")
      .split("\n");

    setOutput(lines.map((line: string) => shorten(line)).join("\n"));
  };
  return (
    <div className="App">
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Form>
              <TextArea
                onChange={onChangeInput}
                placeholder="Put your long term"
              />
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <TextArea placeholder="Tell us more" value={output} />
            </Form>
          </Grid.Column>
        </Grid>

        <Divider vertical>And</Divider>
      </Segment>
    </div>
  );
}
